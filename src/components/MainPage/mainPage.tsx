import { useLayoutEffect, useMemo, useRef, useState } from "react";
import "./mainPage.modules.scss";
import { Pagination } from "../Pagination/pagination";
import { folders } from "../../data/folders";
import { calculateItemsPerPage } from "../../utils/calculateItemsPerPage";
import { FileCard } from "../fileCard";

type MainProps = {
  activeFolderId: number | null;
  showHidden: boolean
};

export const MainPage = ({ activeFolderId, showHidden }: MainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const category = folders.find((file) => file.id == activeFolderId) || null;

  const filteredFiles = useMemo(() => {
  if (category?.isHidden && !showHidden) return [];

  return category?.files;
}, [category, showHidden]);
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleFiles = filteredFiles?.slice(startIndex, endIndex);

  const totalPages = Math.ceil((filteredFiles?.length || 0) / itemsPerPage);

  useLayoutEffect(() => {
  if (!containerRef.current) return;

  let timeoutId: number | undefined;

  const handleResize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const containerWidth = containerRef.current!.offsetWidth;
      setItemsPerPage(calculateItemsPerPage(containerWidth, 200, 10));
    }, 150);
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener("resize", handleResize);
  };
}, [category]);


  return (
    <div ref={containerRef} className="main-page">
      <h2>{category?.name}</h2>
      <div className="folder">
        {visibleFiles ? (
          visibleFiles.map((file) => <FileCard key={file.id} file={file} />)
        ) : (
          <h3>Choose a category</h3>
        )}
      </div>
      {activeFolderId &&  (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

import { useMemo } from "react";
import type { FolderDescription } from "../../data/Types";
import "./sidebar.modules.scss";

type SidebarProps = {
  folders: Array<Omit<FolderDescription, "files">>;
  activeFolderId: number | null;
  onChange: (id: number) => void;
  showHidden?: boolean;
};

export const Sidebar = ({
  folders,
  activeFolderId,
  onChange,
  showHidden,
}: SidebarProps) => {
  const filteredFolders = useMemo(() => {
    return folders.filter((folder) => showHidden || !folder.isHidden);
  }, [showHidden]);

  return (
    <div className="sidebar">
      <ul className="folder-list">
        {filteredFolders.map((folder) => {
          return (
            <li
            className="folder"
              key={folder.id}
              onClick={() => onChange(folder.id)}
              style={{
                backgroundColor:
                  activeFolderId == folder.id ? "#f2e56b" : "#95d0f5",
              }}
            >
              {folder.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

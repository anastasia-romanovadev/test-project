import './pagination.modules.scss'

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="page">
      <button onClick={previousPage} disabled={!hasPreviousPage}>
        Prev
      </button>

      {pagesArr.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          style={{
            fontWeight: page === currentPage ? "bold" : "normal",
          }}
        >
          {page}
        </button>
      ))}

      <button onClick={nextPage} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};

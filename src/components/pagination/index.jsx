import PaginationItem from "../pagination-item";
import "./index.css";

const Pagination = ({ totalPages = 0, curentPage, onPageItemClick }) => {
  const onPrevPageClick = () => {
    if (curentPage > 1) {
      onPageItemClick(curentPage - 1);
    }
  };

  const onNextPageClick = () => {
    if (curentPage < totalPages) {
      onPageItemClick(curentPage + 1);
    }
  };
  return (
    <>
      <span onClick={onPrevPageClick} className="pagination-item back">
        <i className="bi bi-chevron-left"></i>
      </span>
      <ul className="pagination-list">
        {new Array(totalPages).fill(1).map((item, index) => {
          return (
            <PaginationItem
              onPageItemClick={onPageItemClick}
              pageIndex={index + 1}
              isActive={curentPage === index + 1}
              key={index}
            />
          );
        })}
      </ul>

      <span onClick={onNextPageClick} className="pagination-item next">
        <i className="bi bi-chevron-right"></i>
      </span>
    </>
  );
};

export default Pagination;

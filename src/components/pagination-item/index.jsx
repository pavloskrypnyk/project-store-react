import "../pagination/index.css";

const PaginationItem = ({ pageIndex, isActive, onPageItemClick }) => {
  const activeClass = isActive ? "active" : "";

  return (
    <li
      onClick={() => onPageItemClick(pageIndex)}
      className={`pagination-item ${activeClass}`}
    >
      {pageIndex}
    </li>
  );
};

export default PaginationItem;

import '../pagination/index.css';

const PaginationItem = ({ pageIndex, isActive, onPageItemClick }) => {
    const activeClass = isActive ? 'active' : '';

    return (
        <li onClick={() => onPageItemClick(pageIndex)}
                href="#"
                className={`pagination__item ${activeClass}`}>
            <a>
                {pageIndex}
            </a>
        </li>
    );
}

export default PaginationItem
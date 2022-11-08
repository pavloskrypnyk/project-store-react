import PaginationItem from "../pagination-item";
import './index.css';

const Pagination = ({ totalPages=0, curentPage, onPageItemClick}) => {
    const onPrevPageClick = () => {
        if(curentPage > 1) {
            onPageItemClick(curentPage-1)
        }
    }  

    const onNextPageClick = () => {
        if(curentPage < totalPages){
            onPageItemClick(curentPage+ 1)
        }
    }    
    return (
        <div className="pagination__container">
                  <a onClick={onPrevPageClick} href="#" className="pagination__item back">
                      <i className="bi bi-chevron-left"></i>
                  </a>
                  <ul className="pagination__list">
                        {
                        new Array(totalPages).fill(1).map((item, index) => {
                            return <PaginationItem  
                            onPageItemClick={onPageItemClick}                           
                            pageIndex={index + 1} 
                            isActive={curentPage === index + 1} 
                            key={index}
                            />;
                        })
                        }
                        </ul>

                  <a    onClick={onNextPageClick}
                        href="#" className="pagination__item next">
                      <i className="bi bi-chevron-right"></i>
                  </a>

              </div>
    );

    
}

export default Pagination;
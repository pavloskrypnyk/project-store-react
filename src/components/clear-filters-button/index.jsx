import './index.css';

const ClearFiltersBtn = ({onClearAllFilters}) => {
 
    return (
        <>
            <div className="filters-button__container" onClick={onClearAllFilters}>
                <div>CLEAR ALL FILTERS</div>
            </div>
        </>
    )
}

export default ClearFiltersBtn
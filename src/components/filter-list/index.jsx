import FilterItem from '../filter-item';
import './index.css';
import CategorySkeleton from './skeleton';

const FiltersList= ({choseFilters, filters, onChoseFilter,  isLoadFilters, filtersLenght, filtersName}) => {

    const handleOnChange = (val) => {
        let resultArr = [];

        if(choseFilters.includes(val)){
            resultArr = choseFilters.filter(item => item !== val)
        } else{
            resultArr = [...choseFilters, val]
        };

        onChoseFilter(resultArr);
    }
    
    const toLowerCaseSplit = (category) => {
        return category.split(/\s+/).join('_').toLowerCase();
    }
   
    return (
        <>
            <div className="filter-item__content">
            <div className="filter-item-title">{filtersName}</div>
            <ul className="filter-item-list">
                {
                    isLoadFilters === true 
                    ? [...new Array(filtersLenght)].map((_, index) => <CategorySkeleton key={index} />) 
                    : filters.map((filter, id)=> {
                    return (
                        <FilterItem 
                        key={id}
                        filter={filter} 
                        onChange={() => handleOnChange(toLowerCaseSplit(filter))} 
                        itemValue={choseFilters.includes(toLowerCaseSplit(filter))}
                        />
                        
                    )
                })}
                

                
            </ul>
            </div>     
        </>
    )
}

export default FiltersList
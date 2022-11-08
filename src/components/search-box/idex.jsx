import debounce from 'lodash.debounce';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';

const SearchBox = ({ dispatchSearchValue, search }) => {
    const [value, setValue] = useState(search);
    const dispatch = useDispatch();

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(dispatchSearchValue(str));
        }, 1000),
        []
    );
    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    };
    return (
        <>
           <div className="search-box__content">
                <input 
                value={value} 
                onChange={onChangeInput} 
                className="search-box-filled" type="text" id="search-box" 
                placeholder="Type to search..." />
                <div className="search-box-icon"><i className="bi bi-search"></i></div>
           </div>
        </>
    )
}

export default SearchBox
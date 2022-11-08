import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './index.css';

const DoubleSlider = ({
    filterName, 
    loadMin, 
    loadMax, 
    dispatchValueMin, 
    dispatchValueMax, 
    loadGap,
    valute,
    min,
    max,
    setPageCount
    }) => {
    const [valueMin, setValueMin] = useState(loadMin);
    const [valueMax, setValueMax] = useState(loadMax);
    useEffect(() => {
        setValueMin(loadMin);
        setValueMax(loadMax)
    }, [loadMin, loadMax]);

    const dispatch = useDispatch();

    const updatePriceMin = useCallback(
        debounce((value) => {
                dispatch(dispatchValueMin(value));
                dispatch(setPageCount(1))
            }, 500), 
        []);
    
    const updatePriceMax = useCallback(
        debounce((value) => {
                dispatch(dispatchValueMax(value));
                dispatch(setPageCount(1))
        }, 500), 
        []);

    const handleChangePriceMin = (value) => {
        if(valueMax - value <= loadGap) {
            const newValue = valueMax - loadGap;
            setValueMin(newValue);
            updatePriceMin(newValue);
        } else {
            setValueMin(value);
            updatePriceMin(value); 
            dispatch(setPageCount(1)) 
        }  
    };
    const handleChangePriceMax = (value) => {
        if(value - valueMin <= loadGap){
            const newValue = +valueMin + loadGap;
            setValueMax(newValue);
            updatePriceMax(newValue);
        } else{
            setValueMax(value);
            updatePriceMax(value); 
        }
               
    };

    const percentMin = (valueMin / max) * 100;
    const percentMax = 100 - (valueMax / max) * 100;

    const styles = {
        progress: {
            "left": `${percentMin}%`,
            "right": `${percentMax}%`
        }
     };

     
    
    return (
        <>
           <div className="filters-side-left__slider slider-filters-side-left">
                <div className="slider__content">
                    <div className="slider-title">{filterName}</div>
                    <div className="range-slider">
                        <div className="range-container">
                           <div className='range-input'>
                                <div className="slider-track" style={styles.progress } ></div>
                                    <input type="range" className="min" min={min} max={max} onChange={(e) => handleChangePriceMin(e.target.value)} value={valueMin} />
                                    <input type="range" className="max" min={min} max={max} onChange={(e) => handleChangePriceMax(e.target.value)} value={valueMax} />
                            </div>                                
                        </div>
                        <div className="value-range-container">
                            <div className="value-range">{valueMin} {valute}</div>
                            <div className="value-range">{valueMax} {valute}</div>
                        </div> 
                    </div>
                </div>
            </div>       
        </>
    )
}

export default DoubleSlider

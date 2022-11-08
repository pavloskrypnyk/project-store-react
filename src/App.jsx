import { useDispatch, useSelector } from "react-redux";

import { clearAllFilters, setChoseBrands, setChoseCategory, setPageCount, setPriceMax, setPriceMin, setRatingMax, setRatingMin, setSearch } from "../src/redux/slices/filters-slice";
import ClearFiltersBtn from "./components/clear-filters-button";
import SearchBox from "./components/search-box/idex";
import CardList from "./components/card-list";
import Pagination from "./components/pagination";
import CartList from "./components/cart-list";
import { setOpenCart } from "./redux/slices/cart-slice";
import DoubleSlider from "./components/double-slider";
import FiltersList from "./components/filter-list";
import { productsAPI } from "./components/services/product-service";

const App = () => {
      const {
         choseCategory,
         choseBrands, 
         curentPage, 
         priceMin, 
         priceMax, 
         ratingMin, 
         ratingMax, 
         search
      } = useSelector(state=>state.filter.filters);

      const {
         openCart, 
         totalCount
      } = useSelector(state=> state.cart)

      const categoryQuery = choseCategory ? choseCategory.map(element => {
         return  `&category=${element}`
      }).join('') : ``;

      const brandsQuery = choseBrands ? choseBrands.map(element => {
         return `&brand=${element}`
      }).join('') : ``;

      const searchQuery = search ?  `&q=${search}` : `` ;

      const priceGteQuery = priceMin ? `&price_gte=${priceMin}` : '';

      const priceLteQuery = priceMax ? `&price_lte=${priceMax}` : '';

      const ratingGteQuery = ratingMin ? `&rating_gte=${ratingMin}` : '';
      const ratingLteQuery = ratingMax ? `&rating_lte=${ratingMax}` : '';
      
      const {data: categories = [], isLoading: isLoadCategory} = productsAPI.useFetchAllCategoryQuery('');
      const {data: brands = [], isLoading: isLoadBrands} = productsAPI.useFetchAllBrandsQuery('');
      const {products = [], totalPages, isLoading } = productsAPI.useFetchAllProductsQuery({
         curentPage, 
         categoryQuery,
         brandsQuery,
         searchQuery,
         priceGteQuery,
         priceLteQuery,
         ratingGteQuery,
         ratingLteQuery
      }, {selectFromResult: ({data, isLoading}) => ({
         products: data?.products,
         totalPages: data?.totalPages,
         isLoading
      }) });

      

      const dispatch = useDispatch();

      const onChoseCategory = (e) => {
         dispatch(setChoseCategory(e))         
      };
      const onChoseBrands = (e) => {
         dispatch(setChoseBrands(e))
      }
      const onPageItemClick = (index) => {
            if(index === curentPage) return
            dispatch(setPageCount(index))
      };

      const onOpenCart = (value) => {
         dispatch(setOpenCart(value))
      };
      const onClearAllFilters = () => {
         dispatch(clearAllFilters())
      }  

  return(
      <>
      <div className="wrapper">
            <header className="header">
                  <div className="header__container">
                     <a href="" className="header__logo">Project Store</a>
                     <div className="header__cart cart-header" onClick={() => onOpenCart(true)} >
                        <div className="cart__icon">
                              <i className="bi bi-cart3"></i>
                        </div>
                        <div>{totalCount}</div>
                        <div className="cart__button">CART</div>
                     </div>
                  </div>
               </header>
            <main className="page">
                  <div className="page__container">
                  <section>
                     {/* Side-left components */}
                     <div className="side-left">
                        <div className="side-left__filters filters-side-left">
                           <div className="filters-side-left__slider slider-filters-side-left">
                              {/* Price-slider */}
                              <DoubleSlider 
                              filterName={'Price:'}
                              loadMin={priceMin}
                              loadMax={priceMax}
                              dispatchValueMin={setPriceMin}
                              dispatchValueMax={setPriceMax}
                              min={0}
                              max={85000}
                              loadGap={10000}
                              valute={'UAH'}
                              setPageCount={setPageCount}
                              />
                           </div>
                           <div className="side-left-filters__decorative-block"></div>
                           <div className="filters-side-left__filter-item filter-item-filters-side-left">
                              {/* Category component */}
                              <FiltersList
                              filtersName={'Category: '}
                              filters={categories} 
                              choseFilters={choseCategory}  
                              isLoadFilters={isLoadCategory} 
                              onChoseFilter={onChoseCategory}
                              filtersLenght={8}
                              />
                           </div>
                           <div className="side-left-filters__decorative-block"></div>
                           <div className="filters-side-left__filter-item filter-item-filters-side-left">
                              {/* Brands component */}
                              <FiltersList 
                              filtersName={'Brands: '}
                              filters={brands}
                              choseFilters={choseBrands}
                              isLoadFilters={isLoadBrands}
                              onChoseFilter={onChoseBrands}
                              filtersLenght={12}
                              />
                           </div>
                           <div className="side-left-filters__decorative-block"></div>
                           <div className="filters-side-left__slider slider-filters-side-left">
                              {/* Rating-slider */}
                              <DoubleSlider 
                              filterName={'Rating:'}
                              loadMin={ratingMin}
                              loadMax={ratingMax}
                              min={0}
                              max={5}
                              loadGap={1}
                              dispatchValueMin={setRatingMin}
                              dispatchValueMax={setRatingMax}
                              setPageCount={setPageCount}
                              />
                           </div>
                        </div>
                        <div className="side-left__filters-button filters-button-side-left">
                           {/* Clear all filters */}
                           <ClearFiltersBtn onClearAllFilters={onClearAllFilters}/>
                        </div>
                     </div>
                  </section>
                  <section className="page__side-right side-right">
                     {/* Side-right components */}
                        <div className="side-right__search-box search-box-side-right">
                           {/* Search-box component */}
                           <SearchBox 
                           search={search}
                           dispatchSearchValue={setSearch} 
                           />
                        </div>
                        <div className="side-right__card-list">
                           {/* Card-list component */}
                           <CardList products={products} isLoadCard={isLoading} />
                        </div>
                           <div className="footer__pagination">
                              {/* Pagination component */}
                              <Pagination onPageItemClick={onPageItemClick} totalPages={totalPages} curentPage={curentPage} />
                           </div>
                  </section> 
                           
               </div>
            </main>
         </div>
         
         {openCart ? <CartList onOpenCart={onOpenCart}/> : null} 
            

      </>
      );
}

export default App






  

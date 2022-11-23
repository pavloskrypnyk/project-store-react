import { useDispatch, useSelector } from "react-redux";
import {
  clearAllFilters,
  setChoseBrands,
  setChoseCategory,
  setPageCount,
  setPriceMax,
  setPriceMin,
  setRatingMax,
  setRatingMin,
} from "../../redux/slices/filters-slice";
import DoubleSlider from "../double-slider";
import FiltersList from "../filter-list";
import { productsAPI } from "../services/product-service";

const SideBarComponent = () => {
  const {
    choseCategory,
    choseBrands,
    priceMin,
    priceMax,
    ratingMin,
    ratingMax,
  } = useSelector((state) => state.filter.filters);
  const { data: categories = [], isLoading: isLoadCategory } =
    productsAPI.useFetchAllCategoryQuery("");
  const { data: brands = [], isLoading: isLoadBrands } =
    productsAPI.useFetchAllBrandsQuery("");
  const dispatch = useDispatch();

  const onChoseCategory = (e) => {
    dispatch(setChoseCategory(e));
  };
  const onChoseBrands = (e) => {
    dispatch(setChoseBrands(e));
  };
  const onClearAllFilters = () => {
    dispatch(clearAllFilters());
  };

  return (
    <>
      <aside className="products-side-left">
        <section className="side-left-filters-panel">
          {/* Price-slider */}
          <DoubleSlider
            filterName={"Price:"}
            loadMin={priceMin}
            loadMax={priceMax}
            dispatchValueMin={setPriceMin}
            dispatchValueMax={setPriceMax}
            min={0}
            max={85000}
            loadGap={10000}
            valute={"UAH"}
            setPageCount={setPageCount}
          />
          <div className="filters-decorative-block"></div>
          <section className="filters-form-group">
            {/* Category component */}
            <FiltersList
              filtersName={"Category: "}
              filters={categories}
              choseFilters={choseCategory}
              isLoadFilters={isLoadCategory}
              onChoseFilter={onChoseCategory}
              filtersLenght={8}
            />
          </section>
          <div className="filters-decorative-block"></div>
          <section className="filters-form-group">
            {/* Brands component */}
            <FiltersList
              filtersName={"Brands: "}
              filters={brands}
              choseFilters={choseBrands}
              isLoadFilters={isLoadBrands}
              onChoseFilter={onChoseBrands}
              filtersLenght={12}
            />
          </section>
          <div className="filters-decorative-block"></div>
          {/* Rating-slider */}
          <DoubleSlider
            filterName={"Rating:"}
            loadMin={ratingMin}
            loadMax={ratingMax}
            min={0}
            max={5}
            loadGap={1}
            dispatchValueMin={setRatingMin}
            dispatchValueMax={setRatingMax}
            setPageCount={setPageCount}
          />
        </section>
        <button className="filters-clear-button" onClick={onClearAllFilters}>
          CLEAR ALL FILTERS
        </button>
      </aside>
    </>
  );
};

export default SideBarComponent;

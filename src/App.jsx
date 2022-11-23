import { useDispatch, useSelector } from "react-redux";

import {
  setOpenSideBar,
  setPageCount,
  setSearch,
} from "../src/redux/slices/filters-slice";
import SearchBox from "./components/search-box";
import CardList from "./components/card-list";
import Pagination from "./components/pagination";
import CartList from "./components/cart-list";
import { setOpenCart } from "./redux/slices/cart-slice";
import { productsAPI } from "./components/services/product-service";
import SideBarComponent from "./components/side-bar";

const App = () => {
  const {
    curentPage,
    search,
    choseCategory,
    choseBrands,
    priceMin,
    priceMax,
    ratingMax,
    ratingMin,
    openSideBar,
  } = useSelector((state) => state.filter.filters);

  const { openCart, totalCount } = useSelector((state) => state.cart);

  const categoryQuery = choseCategory
    ? choseCategory
        .map((element) => {
          return `&category=${element}`;
        })
        .join("")
    : ``;

  const brandsQuery = choseBrands
    ? choseBrands
        .map((element) => {
          return `&brand=${element}`;
        })
        .join("")
    : ``;

  const searchQuery = search ? `&q=${search}` : ``;

  const priceGteQuery = priceMin ? `&price_gte=${priceMin}` : "";

  const priceLteQuery = priceMax ? `&price_lte=${priceMax}` : "";

  const ratingGteQuery = ratingMin ? `&rating_gte=${ratingMin}` : "";
  const ratingLteQuery = ratingMax ? `&rating_lte=${ratingMax}` : "";

  // const { data: categories = [], isLoading: isLoadCategory } =
  //   productsAPI.useFetchAllCategoryQuery("");
  // const { data: brands = [], isLoading: isLoadBrands } =
  //   productsAPI.useFetchAllBrandsQuery("");
  const {
    products = [],
    totalPages,
    isLoading,
  } = productsAPI.useFetchAllProductsQuery(
    {
      curentPage,
      categoryQuery,
      brandsQuery,
      searchQuery,
      priceGteQuery,
      priceLteQuery,
      ratingGteQuery,
      ratingLteQuery,
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.products,
        totalPages: data?.totalPages,
        isLoading,
      }),
    }
  );

  const dispatch = useDispatch();

  // const onChoseCategory = (e) => {
  //   dispatch(setChoseCategory(e));
  // };
  // const onChoseBrands = (e) => {
  //   dispatch(setChoseBrands(e));
  // };
  const onPageItemClick = (index) => {
    if (index === curentPage) return;
    dispatch(setPageCount(index));
  };

  const onOpenCart = (value) => {
    dispatch(setOpenCart(value));
  };
  const onOpenSideBar = (value) => {
    dispatch(setOpenSideBar(value));
  };
  // const onClearAllFilters = () => {
  //   dispatch(clearAllFilters());
  // };

  return (
    <>
      <div className="os-container">
        <header className="os-header">
          <div
            className="filters-icon-mobile"
            onClick={() => onOpenSideBar(!openSideBar)}
          >
            <i className="bi bi-filter-left"></i>
          </div>
          <a href="" className="header-logo">
            Project Store
          </a>
          <button className="header-cart" onClick={() => onOpenCart(true)}>
            <div className="cart-icon">
              <i className="bi bi-cart3"></i>
            </div>
            <div>{totalCount}</div>
            <div className="cart-title">CART</div>
          </button>
        </header>
        <main className="os-products">
          {/* Side-left components */}
          <aside className={openSideBar ? `aside open` : `aside`}>
            <SideBarComponent />
          </aside>

          <section className="products-side-right">
            {/* Side-right components */}
            <div className="products-search-box">
              {/* Search-box component */}
              <SearchBox search={search} dispatchSearchValue={setSearch} />
            </div>
            <div className="products-card-list">
              {/* Card-list component */}
              <CardList products={products} isLoadCard={isLoading} />
            </div>
            <nav className="products-pagination">
              {/* Pagination component */}
              <Pagination
                onPageItemClick={onPageItemClick}
                totalPages={totalPages}
                curentPage={curentPage}
              />
            </nav>
          </section>
        </main>
      </div>

      {openCart ? <CartList onOpenCart={onOpenCart} /> : null}
    </>
  );
};

export default App;

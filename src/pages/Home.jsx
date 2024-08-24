import { Categories, SortPopup, PizzaBlock } from "./../components/";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { useCallback } from "react";
import { fetchPizzas } from "../redux/actions/pizzas";
import React, { useEffect } from "react";
import PizzaBlockLoader from "../components/PizzaBlock/PizzaBlockLoader";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = ["Мʼясні", "Вегетерьянскі", "Гриль", "Гострі", "Закриті"];
const sortItems = [
  { name: "популярністю", type: "popular", order: "desc" },
  { name: "ціною", type: "price", order:"desc" },
  { name: "алфавітом", type: "title", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
   const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  

  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    
  }, [category, sortBy]);
  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    []
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    []
  );
  const handleAddPizza = obj => {
    
    dispatch(addPizzaToCart(obj))
  }
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categories}
        />

        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>

      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizza}
                key={obj.id}
                name={obj.title}
                image={obj.imageUrl}
                addedCountPizzas={cartItems[obj.id] && cartItems[obj.id].items.length}
                isLoading={true}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaBlockLoader key={index} />)}
      </div>
    </div>
  );
}

export default Home;

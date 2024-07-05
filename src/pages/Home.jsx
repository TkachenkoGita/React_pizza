import { Categories, SortPopup, PizzaBlock } from "./../components/";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={["Мʼясні", "Вегетерьянскі", "Гриль", "Гострі", "Закриті"]}
        />

        <SortPopup
          items={[
            { name: "популярністю", type: "popular" },
            { name: "ціною", type: "price" },
            { name: "алфавітом", type: "alphabet" },
          ]}
        />
      </div>

      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock
            key={obj.id}
            name={obj.title}
            image={obj.imageUrl}
            {...obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

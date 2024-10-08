import PizzaBlockLoader from "./PizzaBlockLoader";
import PropTypes from "prop-types";

import classNames from "classnames";
import Button from "../Button/Button";
import { useState } from "react";

function PizzaBlock({
  name,
  image,
  price,
  id,
  types,
  sizes,
  isLoading,
  onClickAddPizza,
  addedCountPizzas,
}) {
  const availableTypesPizza = ["тонке", "традиційне"];
  const availableSizePizza = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);
  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  if (!isLoading) {
    return <PizzaBlockLoader />;
  }

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      image,
      price,
      size: availableSizePizza[activeSize],
      type: availableTypesPizza[activeType],
    };
    onClickAddPizza(obj);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>

      <div className="pizza-block__selector">
        <ul>
          {availableTypesPizza.map((type, index) => (
            <li
              key={`${type}_${index}`}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizePizza.map((size, index) => (
            <li
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
              onClick={() => onSelectSize(index)}
              key={`${size}_${index}`}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">від {price} грн</div>
        <Button className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={onAddPizza}>До кошика</span>
          {addedCountPizzas && <i>{addedCountPizzas}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  isLoading: PropTypes.bool,
  onClickAddPizza: PropTypes.func,
  addedCountPizzas: PropTypes.number,
};
// PizzaBlock.defaultProps = {
//   name: '---',
//   price: 0,
//   types: [],
//   sizes: [],
//   isLoading:false,
// }

export default PizzaBlock;

import classNames from "classnames";

import { useState } from "react";

function PizzaBlockSelector({ types, sizes }) {
  const availableTypesPizza = ["тонке", "традиційне"];
  const availableSizePizza = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(types[0]);
  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
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
  );
}

export default PizzaBlockSelector;

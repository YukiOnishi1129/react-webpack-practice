import React from "react";
/* components */
import Ingredient from "./Ingredient";

export default function IngredientList({ list }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...map.ingredient} />
      ))}
    </ul>
  );
}

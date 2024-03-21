import React from "react";

// Definición del componente funcional FilterOrder
const FilterOrder = ({ handleOrderByName }) => {
  return (
    <div>
      {/* Selector para ordenar por nombre */}
      <span>Order</span>
      <select onChange={(e) => handleOrderByName(e)}>
        <option value="asc" name="asc">
          Ascending
        </option>
        <option value="desc" name="desc">
          Descending
        </option>
      </select>
    </div>
  );
};

export default FilterOrder; // Exportar el componente FilterOrder


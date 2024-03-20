import React from "react";

const FilterOrder = ({handleOrderByName}) => {
  return (
    <div>
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

export default FilterOrder;

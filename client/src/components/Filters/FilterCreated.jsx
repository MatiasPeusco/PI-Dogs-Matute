import React from 'react';

// Definición del componente funcional FilterCreated
const FilterCreated = ({ handleFilterCreated }) => {
  return (
    <div>
      {/* Selector para filtrar por perros creados */}
      <span>Created</span>
      <select onChange={handleFilterCreated}>
        <option value="created">Created</option>
        <option value="existents">External API</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}

export default FilterCreated; // Exportar el componente FilterCreated

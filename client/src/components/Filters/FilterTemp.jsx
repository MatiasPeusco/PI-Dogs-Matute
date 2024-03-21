import React from 'react';

// Definición del componente funcional FilterTemp
const FilterTemp = ({ handleFilterTemperament, allTemperaments }) => {
  return (
    <div>
      {/* Selector para filtrar por temperamento */}
      <span>Temperament</span>
      <select onChange={handleFilterTemperament}>
        <option value="all">All</option>
        {/* Mapeo de todos los temperamentos disponibles */}
        {allTemperaments?.map((t, index) => {
          return (
            <option value={t.name} key={index}>
              {t.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterTemp; // Exportar el componente FilterTemp

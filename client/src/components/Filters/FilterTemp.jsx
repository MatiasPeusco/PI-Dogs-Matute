import React from 'react'

const FilterTemp = ({handleFilterTemperament, allTemperaments}) => {
  return (
    <div>
        <span>Temperament</span>
        <select onChange={handleFilterTemperament}>
        <option value="all">All</option>
        {allTemperaments?.map((t, index) => {
          return (
            <option value={t.name} key={index}>
              {t.name}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default FilterTemp
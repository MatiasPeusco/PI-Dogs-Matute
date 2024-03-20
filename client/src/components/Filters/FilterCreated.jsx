import React from 'react'

const FilterCreated = ({handleFilterCreated}) => {
  return (
    <div>
        <span>Created</span>
        <select onChange={handleFilterCreated}>
        <option value="created">Created</option>
        <option value="existents">External API</option>
        <option value="all">All</option>
      </select>
    </div>
  )
}

export default FilterCreated
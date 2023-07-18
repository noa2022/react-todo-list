import { useState } from 'react'

function DisplayFilter() {
  // const [orderOption, setOrderOption] = useState()

  const displayOrderOption = [
    { value: 'sortById', label: 'id順' },
    { value: 'sortByName', label: '名前順' },
  ]
  return (
    <>
      <select>
        {displayOrderOption.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  )
}

export default DisplayFilter

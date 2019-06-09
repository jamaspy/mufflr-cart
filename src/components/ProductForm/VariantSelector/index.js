import React from 'react'
import PropTypes from 'prop-types'

const VariantSelector = props => {
  const { option } = props
  return (
    <>
      <label htmlFor={option.name}>{option.name} </label>
      <select
        name={option.name}
        key={option.id}
        onChange={props.onChange}
        style={{borderRadius: 5,
          outline: `none`,
          border: `1px solid grey`,
          width: `80px`,
          marginTop: 5,
          fontSize: `1rem`,
          fontWeight: 300,
          fontFamily: `Montserrat`,
          textAlign: `center`}}
      >
        {option.values.map(value => {
          return (
            <option
            
              value={value}
              key={`${option.name}-${value}`}
            >{`${value}`}</option>
          )
        })}
      </select>
      <br/>
    </>
  )
}

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default VariantSelector

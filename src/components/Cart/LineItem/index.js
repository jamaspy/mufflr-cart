import React, { useContext } from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import StoreContext from '../../../context/StoreContext'

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <Flex py={2} flexWrap='wrap'>
      <Box width={[1/3, 1/6]}>
        {variantImage}
      </Box>
      <Box width={[2/3, 3/6]}>
        <p>{line_item.title}</p> 
        <p>Size: {line_item.variant.title}</p>
        
        
      </Box>
      <Box width={[1, 2/6]}>
        <button 
        onClick={handleRemove}
        style={{
       
        border: `1px solid black`,
        borderRadius: 5,
        background:`linear-gradient(#141E30 0, #243B55 100%)`,
        color: `white`,
        padding: 10,
        fontFamily: "Montserrat"
        }}
        >Remove</button>
      </Box>
    </Flex>
  )
}

export default LineItem

import React from 'react'


import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`mufflr`, `motorbike`, `apparel`]} />
    
    
    <ProductGrid />
  </>
)

export default IndexPage

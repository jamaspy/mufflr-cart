import React from 'react'


import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Shop" keywords={[`mufflr`, `motorbike`, `apparel`]} />
    
    
    <ProductGrid />
  </>
)

export default IndexPage

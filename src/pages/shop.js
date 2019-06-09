import React from 'react'


import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`mufflr`, `motorbike`, `apparel`]} />
    <p style={{textAlign: `center`, fontSize:`2rem`}}>Let's Do Some Shopping</p>
    
    <ProductGrid />
  </>
)

export default IndexPage

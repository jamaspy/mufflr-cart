import React from 'react'
import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <main>
    <SEO title="Shop" keywords={[`mufflr`, `motorbike`, `apparel`]} />
    <ProductGrid />
  </main>
)

export default IndexPage

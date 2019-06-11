import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: '634e3f6f004171efe480b1f09212d0ff',
  domain: 'mufflr-apparel.myshopify.com',
})

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext

import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProductPreview from '../components/product-preview'

// test 

class ProductsIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allContentfulProduct.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Products" />
        <Hero title="Products" />
        <ProductPreview products={products} />
      </Layout>
    )
  }
}

export default ProductsIndex

export const pageQuery = graphql`
  query ProductsIndexQuery {
    allContentfulProduct {
      nodes {
        price
        title
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
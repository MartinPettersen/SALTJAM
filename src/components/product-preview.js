import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ProductPreview = ({ products }) => {
  if (!products) return null
  if (!Array.isArray(products)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {products.map((product) => {
          return (
            <li>
                <h2 className={styles.title}>{product.title}</h2>
                <p>Price: <span>{product.price}</span>$</p>
              <i><div
                dangerouslySetInnerHTML={{
                  __html: product.description.childMarkdownRemark.html,
                }}
              /></i>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ProductPreview

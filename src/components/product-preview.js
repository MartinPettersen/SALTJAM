import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ProductPreview = ({ products }) => {
  if (!products) return null
  if (!Array.isArray(products)) return null

  const fetchData = async (product) => {
    const newGetRequest = await fetch("/.netlify/functions/database");
    const newListJson = await newGetRequest.json();
    const found = newListJson.find(element => element.slug === product.slug)
    return found.quantity;
  }

  useEffect(() => {

  }, [fetchData])
  
  
  console.log(products)
  
  return (
    <Container>
      <ul className={styles.articleList}>
        {products.map((product) => {
          return (
            <li key={product.slug}>
                <h2 className={styles.title}>{product.title}</h2>
                <p>Price: <span>{product.price}</span>$</p>
                <p>Quantity: <span>{}</span></p> 
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

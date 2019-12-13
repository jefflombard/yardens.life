import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const DonatePage = () => (
  <Layout>
    <section className="section">
      <div className="container content">
       DONATE TEST
      </div>
    </section>
  </Layout>
)

export default DonatePage

// export const tagPageQuery = graphql`
//   query TagsQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `

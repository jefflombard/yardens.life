import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

const DonatePage = () => (
  <Layout>
    <section className="section">
      <div className="container content">
        <Button
          target="_blank"
          text="Donate"
          purpose="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=93YNUXV28ANEC&source=url"
        />
      </div>
    </section>
  </Layout>
);

export default DonatePage;

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

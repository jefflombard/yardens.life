import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  question,
  answer,
  work,
  workDescription,
  intro
}) => (
  <div>

    <div
    // className="full-width-image margin-top-0"
    // style={{
    //   backgroundImage: `url(${
    //     !!image.childImageSharp ? image.childImageSharp.fluid.src : image
    //   })`,
    //   backgroundPosition: `top left`,
    //   backgroundAttachment: `fixed`,
    // }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {title} TITLE 
        </h1>
        {/* <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
          {subheading} SUBHEADING
        </h3> */}
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title} ***MAINPITCH TITLE***</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description} ***MAINPITCH Description***</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading} ***Heading***
                    </h3>
                    <p> {description}  ***description***</p>
                  </div>
                </div>
                 <div className="columns">
                  <div className="column is-12 ">
                  <h3 className="has-text-weight-semibold is-size-2">
                      {question} ***question****
                    </h3>
                    <p> {answer} ***answer****</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 ">
                  <h3 className="has-text-weight-semibold is-size-2">
                      {work} ***work****
                    </h3>
                    <p> {workDescription} ***workDescription****</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <a
                      class="btn"
                      href="mailto:info@yardens.life"
                      style={{
                        boxShadow: "inset 0 0 0 2px #995da5",
                        color: "#995da5"
                      }}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {

  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  question:PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        question={frontmatter.question}
        answer={frontmatter.answer}
        work={frontmatter.work}
        workDescription={frontmatter.workDescription}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`


query IndexPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
    }
  }
}
`;
  // query IndexPageTemplate {
  //   markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
  //     frontmatter {
  //       title
  //       image {
  //         childImageSharp {
  //           fluid(maxWidth: 2048, quality: 100) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //       heading
  //       question
  //       answer
  //       work
  //       workDescription
  //       mainpitch {
  //         title
  //         description
  //       }
  //       description
  //       intro {
  //         blurbs {
  //           image {
  //             childImageSharp {
  //               fluid(maxWidth: 240, quality: 64) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //           text
  //         }
  //         heading
  //         description
  //       }
  //     }
  //   }
  // }


import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";

function ProjectDetails({ data }) {
  console.log("Data --> ", data);
  const { html, frontmatter } = data.markdownRemark;
  const { title, stack, featuredImg } = frontmatter;
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title || "Default Title"}</h2>
        <h2>{stack}</h2>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
export default ProjectDetails;

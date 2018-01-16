/* eslint-disable */
import React from 'react';
import Link from 'gatsby-link';
import { Box, Container } from '../../components/Layout';
import Navigation from '../../components/Navigation';
import colors from '../../utils/colors';
import { css } from 'react-emotion';

const Fragment = ({ children }) => children;

const listStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log({ data });
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Box>
          <h2>Blog</h2>
          <h4>All Posts:</h4>
          <ul className={listStyle}>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }, index) => {
                return (
                  <li key={post.id}>
                    <Link to={post.fields.slug}>
                      <h3>{post.frontmatter.title}</h3>
                    </Link>
                    <p>{post.excerpt}</p>
                  </li>
                );
              })}
          </ul>
          <p>One off posts:</p>
          <ul className={listStyle}>
            {data.allContentJson.edges[0].node.blog.map(
              ({ route, title, excerpt }, index) => (
                <li key={index}>
                  <Link to={route}>
                    <h5>{title}</h5>
                  </Link>
                  <p>{excerpt}</p>
                </li>
              )
            )}
          </ul>
        </Box>
      </Container>
    </Fragment>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            tags
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allContentJson {
      edges {
        node {
          blog {
            excerpt
            date
            title
            route
          }
        }
      }
    }
  }
`;
/* eslint-enable */

export default BlogIndex;

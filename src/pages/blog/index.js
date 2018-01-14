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
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Box px={[3, 3, 0]}>
          <h1>Blog</h1>
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
  }
`;
/* eslint-enable */

export default BlogIndex;

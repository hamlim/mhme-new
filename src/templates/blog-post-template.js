/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import Tag from '@atlaskit/tag';
import { css } from 'react-emotion';
import { Box, Container } from '../components/Layout';
import colors from '../utils/colors';
import Navigation from '../components/Navigation';

const Frag = ({ children }) => children;

const Fragment = React.Fragment || Frag;

const title = css`
  color: ${colors.primary};
`;

const body = css`
  color: ${colors.base};
`;

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Box px={[3, 3, 0]}>
          <h2 className={title}>{post.frontmatter.title}</h2>
          {post.frontmatter.tags &&
            post.frontmatter.tags.length > 0 &&
            post.frontmatter.tags.map(tag => (
              <Tag
                key={tag}
                color="greenLight"
                text={tag}
                href={`/tags/${tag}`}
              />
            ))}
          <div
            className={body}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Box>
      </Container>
    </Fragment>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        author {
          id
        }
      }
    }
  }
`;

export default Template;

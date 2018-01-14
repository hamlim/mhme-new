import React from 'react';
import GatsbyLink from 'gatsby-link';
import Tag from '@atlaskit/tag';
import PropTypes from 'prop-types';
import { Container } from '../components/Layout';
import Navigation from '../components/Navigation';

const Fragment = ({ children }) => children;

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <Fragment>
        <Navigation />
        <Container>
          <h2>
            {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
          </h2>
          <ul>
            {post.map(({ id, frontmatter, excerpt, fields }) => (
              <li key={id}>
                <h3>
                  <GatsbyLink to={fields.slug}>{frontmatter.title}</GatsbyLink>
                </h3>
                <p>{excerpt}</p>
              </li>
            ))}
          </ul>
          <GatsbyLink to="/tags">All tags</GatsbyLink>
        </Container>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Navigation />
      <Container>
        <h1>Tags</h1>
        <ul className="tags">
          {Object.keys(posts).map(tagName => (
            <li key={tagName}>
              <Tag
                href={`/tags/${tagName}`}
                text={tagName}
                color="greenLight"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Fragment>
  );
}

Tags.propTypes = {
  pathContext: PropTypes.shape({
    posts: PropTypes.array,
    post: PropTypes.array,
    tag: PropTypes.string
  }).isRequired
};

import React from 'react';
import GatsbyLink from 'gatsby-link';
import Tag from '@atlaskit/tag';

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, excerpt, fields }) => {
            return (
              <li key={id}>
                <h3>
                  <GatsbyLink to={fields.slug}>{frontmatter.title}</GatsbyLink>
                </h3>
                <p>{excerpt}</p>
              </li>
            );
          })}
        </ul>
        <GatsbyLink to="/tags">All tags</GatsbyLink>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => (
          <li key={tagName}>
            <Tag href={`/tags/${tagName}`} text={tagName} color="greenLight" />
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import Avatar from '@atlaskit/avatar';
import Link from 'gatsby-link';
import { css } from 'react-emotion';
import me from '../../../public/static/me.jpg';

const dib = css`
  display: inline-block;
`;

const df = css`
  display: flex;
`;

const title = css`
  display: inline-block;
  margin-left: 2rem;
`;

const subtitle = css`
  display: inline-block;
  & + & {
    margin-left: 1rem;
  }
  &:last-of-type {
    margin-right: 1rem;
  }
`;

const nav = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => (
  <nav className={nav}>
    <div className={df}>
      <Avatar
        name="Matt Hamlin"
        size="xlarge"
        src={me}
        href="/"
        presence="online"
        className={dib}
      />
      <h1 className={title}>Matt Hamlin</h1>
    </div>
    <div>
      <h4 className={subtitle}>
        <Link to="/blog">Blog</Link>
      </h4>
      <h4 className={subtitle}>
        <Link to="/projects">Projects</Link>
      </h4>
    </div>
  </nav>
);

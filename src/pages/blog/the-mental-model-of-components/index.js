/* eslint-disable */
import React from 'react';

import styled, { css } from 'react-emotion';

const Container = styled.div`
  margin: 3rem auto 6rem;
  max-width: var(--width);
`;

const nestedCopySelector = css`
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export default () => (
  <main className="avenir">
    <Container>
      <header className="lh-title">
        <h1>The Mental Model of Component Based CSS</h1>
        <p>
          ⚠️ Note: Still in Progress ⚠️ This post is partially for me to rethink
          the role and proper architecture of css inside a component model, as
          well as a way to present this information to my coworkers.
        </p>
      </header>
      <article className="lh-copy">
        <section className={nestedCopySelector}>
          <h3 className="code mv3">Components</h3>
          <p>
            Components have become the primary way in which developers build
            web/native/vr/etc applications recently thanks to libraries and
            frameworks like React, Ember's Glimmer, Polymer and web-components
            and many other view libraries.
          </p>
          <p>
            Prior to these javascript frameworks templating systems like
            handlebars and mustache led the way in making engineers re-think the
            way to format and style applications. CSS models like SUIT, BEM, and
            others begain to offer ways for developers to style and think of UI
            in small chunks. Many of these systems considered the chunks as
            components, however these "components" were far more primitive than
            the components that these new javascript libraries have pushed us
            towards.
          </p>
          <p>
            These new components are a lot more focused. whereas before your
            component could be composed of several dom elements, these new
            patterns drive towards a more limited component model. Where
            individual components could be single dom elements.
          </p>
        </section>
      </article>
    </Container>
  </main>
);

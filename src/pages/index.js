/* eslint-disable */
import React from 'react';
import Link from 'gatsby-link';
import { Container } from '../components/Layout';
import Navigation from '../components/Navigation';

export default () => (
  <main>
    <Navigation static />
    <Container>
      <section>
        <h2 className="mv4">
          Hello 👋🏼.
          <br />
          I am Matt Hamlin, a web developer.
        </h2>
        <p className="mv4">
          I make small <Link href="/projects">side projects</Link> of all kinds
          in my free time, and work with some pretty smart people at Wayfair
          currently.
        </p>
      </section>
      <ul className="list mv4">
        <li>
          <a className="link" href="https://twitter.com/immatthamlin">
            Twitter
          </a>
        </li>
        <li>
          <a className="link" href="https://github.com/hamlim">
            Github
          </a>
        </li>
      </ul>
    </Container>
  </main>
);

// export const pageQuery = graphql`
//   query contentQuery {
//     allContentJson {
//       edges {
//         node {
//           index {
//             title
//             subtitle
//           }
//         }
//       }
//     }
//   }
// `;

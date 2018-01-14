/* eslint-disable no-undef, react/prop-types */
import Button from '@atlaskit/button';
import React from 'react';
import { Box } from '../components/Layout';
import colors from '../utils/colors';

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <div>
      <Box>
        <h1>{myData.title}</h1>
        <h3>{myData.subtitle}</h3>
        <Button>Content</Button>
      </Box>
      <Box py={[3, 3, 4]}>
        <Box
          width={[1, 1, 1 / 2]}
          m="0 auto"
          px={[3, 3, 0]}
          color={colors.secondary}
        >
          <h1>This could be another section</h1>
          <p>With another text object</p>
        </Box>
      </Box>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;

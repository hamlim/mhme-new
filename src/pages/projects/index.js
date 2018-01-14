/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Box, Container } from '../../components/Layout';
import Navigation from '../../components/Navigation';
import colors from '../../utils/colors';

export default () => (
  <main>
    <Navigation />
    <Container>
      <Box>
        <h1>Projects</h1>
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
    </Container>
  </main>
);

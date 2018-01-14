/* eslint-disable */
import React, { Component } from 'react';
import Lightbox from '@matthamlin/react-lightbox';
import lightboxcss from '@matthamlin/react-lightbox/src/Lightbox.css';
import { Container } from '../../../components/Layout';
import Navigation from '../../../components/Navigation';
import styled, { injectGlobal } from 'react-emotion';
import drive from '../../../../public/static/photosv2/1drive.jpg';
import driveLowres from '../../../../public/static/photosv2/1drive lowres.jpg';
import harborView from '../../../../public/static/photosv2/2harborview.jpg';
import harborViewLowres from '../../../../public/static/photosv2/2harborview lowres.jpg';
import harbor from '../../../../public/static/photosv2/3harbor.jpg';
import harborLowres from '../../../../public/static/photosv2/3harbor lowres.jpg';
import view from '../../../../public/static/photosv2/4viewofthecity.jpg';
import viewLowres from '../../../../public/static/photosv2/4viewofthecity lowres.jpg';
import downtown from '../../../../public/static/photosv2/5downtown2.jpg';
import downtownLowres from '../../../../public/static/photosv2/5downtown2 lowres.jpg';
import quincy from '../../../../public/static/photosv2/7quincymarket.jpg';
import quincyLowres from '../../../../public/static/photosv2/7quincymarket lowres.jpg';
import buildings from '../../../../public/static/photosv2/8tallbuilding.jpg';
import buildingsLowres from '../../../../public/static/photosv2/8tallbuilding lowres.jpg';
import common from '../../../../public/static/photosv2/10common.jpg';
import commonLowres from '../../../../public/static/photosv2/10common lowres.jpg';
import lake from '../../../../public/static/photosv2/11lake.jpg';
import lakeLowres from '../../../../public/static/photosv2/11lake lowres.jpg';
import fireescape from '../../../../public/static/photosv2/12fireescape.jpg';
import fireescapeLowres from '../../../../public/static/photosv2/12fireescape lowres.jpg';
import sushi from '../../../../public/static/photosv2/13sushi.jpg';
import sushiLowres from '../../../../public/static/photosv2/13sushi lowres.jpg';
import sushiWithDad from '../../../../public/static/photosv2/14sushiwithdad.jpg';
import sushiWithDadLowres from '../../../../public/static/photosv2/14sushiwithdad lowres.jpg';

const Fragment = ({ children }) => children;

const Title = styled.h2`
  font-size: 4rem;
`;

const images = [
  {
    img: drive,
    lowres: driveLowres,
    caption: 'Drive',
    title: 'Drive',
    text:
      'The day started with breakfast, then after that we started the drive down to Rhode Island.'
  },
  {
    img: harborView,
    lowres: harborViewLowres,
    caption: 'Harbor View',
    title: 'Harbor View',
    text:
      "After the drive back, we grabbed a quick bite to eat at Anna's Taqueria. Once we finished lunch we dropped off the rental car just North of Alston, and walked to the nearest green line stop on the B branch. We took the green line all the way to Copley place and walked around the Prudential center and Copley mall a bit. We grabbed a cup of cold brew from starbucks, and then hopped back on the T to head down to Government Center. From there we walked straight down to the harbor."
  },
  {
    img: harbor,
    lowres: harborLowres,
    caption: 'Harbor',
    title: 'Harbor',
    text:
      'This photo was also taken walking down Beacon Street between Coolidge Corner and Hawes Street Green line stops.'
  },
  {
    img: view,
    lowres: viewLowres,
    caption: 'View of the City',
    title: 'View of the City',
    text:
      'We walked down the long wharf and a little bit down along the water, then doubled back through a small alley getting back to where we first hit the harbor.'
  },
  {
    img: downtown,
    lowres: downtownLowres,
    caption: 'Downtown',
    title: 'Downtown',
    text: ''
  },
  {
    img: quincy,
    lowres: quincyLowres,
    caption: 'Quincy Market',
    title: 'Quincy Market',
    text: ''
  },
  {
    img: buildings,
    lowres: buildingsLowres,
    caption: 'Downtown Views',
    title: 'Downtown Views',
    text: ''
  },
  {
    img: common,
    lowres: commonLowres,
    caption: 'The Common',
    title: 'The Common',
    text: ''
  },
  {
    img: lake,
    lowres: lakeLowres,
    caption: 'The Lake',
    title: 'The Lake',
    text: ''
  },
  {
    img: fireescape,
    lowres: fireescapeLowres,
    caption: 'Fire Escape',
    title: 'Fire Escape',
    text: ''
  },
  {
    img: sushi,
    lowres: sushiLowres,
    caption: 'Sushi',
    title: 'Sushi',
    text: ''
  },
  {
    img: sushiWithDad,
    lowres: sushiWithDadLowres,
    caption: 'Sushi with Dad',
    title: 'Sushi with Dad',
    text: ''
  }
];

injectGlobal`
  .is-photos a {
    &:hover,
    &:focus,
    &:active {
      border-bottom: none;
    }
  }
`;
export default class Photosv2 extends Component {
  componentDidMount() {
    document.documentElement.classList.add('is-photos');
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('is-photos');
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Container>
          <header>
            <Title>Photos v2</Title>
            <p>
              This weekend my dad came out to visit me after a business trip to
              Rhode Island, we decided to take the T in to the heart of the city
              and walk down to the harbor and back through the Common.
            </p>
          </header>
          <Lightbox images={images} />
        </Container>
      </Fragment>
    );
  }
}

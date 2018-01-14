/* eslint-disable */
import React, { Component } from 'react';
import Lightbox from '@matthamlin/react-lightbox';
import lightboxcss from '@matthamlin/react-lightbox/src/Lightbox.css';
import { Container } from '../../../components/Layout';
import Navigation from '../../../components/Navigation';
import styled, { injectGlobal } from 'react-emotion';
import foggyMorning from '../../../../public/static/Photosv1/foggy_morning.jpg';
import foggyMorningLowres from '../../../../public/static/Photosv1/foggy_morning lowres.jpg';
import sunnyRoadway from '../../../../public/static/Photosv1/sunny_roadway.jpg';
import sunnyRoadwayLowres from '../../../../public/static/Photosv1/sunny_roadway lowres.jpg';
import greenSidewalks from '../../../../public/static/Photosv1/green_sidewalks.jpg';
import greenSidewalksLowres from '../../../../public/static/Photosv1/green_sidewalks lowres.jpg';
import apartment from '../../../../public/static/Photosv1/classic_apartment_buildings.jpg';
import apartmentLowres from '../../../../public/static/Photosv1/classic_apartment_buildings lowres.jpg';
import beacon from '../../../../public/static/Photosv1/beacon_street_buildings.jpg';
import beaconLowres from '../../../../public/static/Photosv1/beacon_street_buildings lowres.jpg';
import afternoon from '../../../../public/static/Photosv1/sunday_afternoon_breeze.jpg';
import afternoonLowres from '../../../../public/static/Photosv1/sunday_afternoon_breeze lowres.jpg';

const Fragment = ({ children }) => children;

const Title = styled.h2`
  font-size: 4rem;
`;

const images = [
  {
    img: foggyMorning,
    lowres: foggyMorningLowres,
    caption: 'Foggy Morning',
    title: 'Foggy Morning',
    text:
      'Taken while walking to work in the morning right off of Boylston Street. The fog was still covering over the top third of the taller buildings down near Copley Square.'
  },
  {
    img: sunnyRoadway,
    lowres: sunnyRoadwayLowres,
    caption: 'Sunny Roadway',
    title: 'Sunny Roadway',
    text:
      'This was taken Sunday afternoon walking down Beacon Street towards Fenway. I really love this small corner and it would be really cool to live in the building to the left.'
  },
  {
    img: greenSidewalks,
    lowres: greenSidewalksLowres,
    caption: 'Green Sidewalks',
    title: 'Green Sidewalks',
    text:
      'This photo was also taken walking down Beacon Street between Coolidge Corner and Hawes Street Green line stops.'
  },
  {
    img: apartment,
    lowres: apartmentLowres,
    caption: 'Classic Apartment Facades',
    title: 'Classic Apartment Facades',
    text:
      'Some of the apartment buildings along Beacon Street are really cool, most are also very old as well and really only the interiors have been rebuilt recently.'
  },
  {
    img: beacon,
    lowres: beaconLowres,
    caption: 'Beacon Street Buildings',
    title: 'Beacon Street Buildings',
    text:
      'There also happen to be quite a few churches along Beacon Street in all kinds and forms representing a lot of different religions and architectural patterns as well.'
  },
  {
    img: afternoon,
    lowres: afternoonLowres,
    caption: 'Sunday Afternoon Breeze',
    title: 'Sunday Afternoon Breeze',
    text:
      'This was simply a photo taken from my desk chair looking out behind my apartment building while the warm Sunday breeze blows through the window.'
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

export default class Photosv1 extends Component {
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
            <Title>Photos v1</Title>
            <p>
              The below photos were all taken on my Google Pixel XL with HDR+
              mode on auto. I really love the camera on this phone so far, and I
              am really excited about the photos and videos I will be able to
              take with it!
            </p>
          </header>
          <Lightbox images={images} />
        </Container>
      </Fragment>
    );
  }
}

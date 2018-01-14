/* eslint-disable */
import React, { Component } from 'react';
import Lightbox from '@matthamlin/react-lightbox';
import lightboxcss from '@matthamlin/react-lightbox/src/Lightbox.css';

import styled, { injectGlobal } from 'react-emotion';

const Wrapper = styled.main`
  margin-top: 3rem;
  max-width: var(--width, 45rem);
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  font-size: 4rem;
`;

const images = [
  {
    img: '/static/images/posts/Photosv1/foggy_morning.jpg',
    lowres: '/static/images/posts/Photosv1/foggy_morning lowres.jpg',
    caption: 'Foggy Morning',
    title: 'Foggy Morning',
    text:
      'Taken while walking to work in the morning right off of Boylston Street. The fog was still covering over the top third of the taller buildings down near Copley Square.'
  },
  {
    img: '/static/images/posts/Photosv1/sunny_roadway.jpg',
    lowres: '/static/images/posts/Photosv1/sunny_roadway lowres.jpg',
    caption: 'Sunny Roadway',
    title: 'Sunny Roadway',
    text:
      'This was taken Sunday afternoon walking down Beacon Street towards Fenway. I really love this small corner and it would be really cool to live in the building to the left.'
  },
  {
    img: '/static/images/posts/Photosv1/green_sidewalks.jpg',
    lowres: '/static/images/posts/Photosv1/green_sidewalks lowres.jpg',
    caption: 'Green Sidewalks',
    title: 'Green Sidewalks',
    text:
      'This photo was also taken walking down Beacon Street between Coolidge Corner and Hawes Street Green line stops.'
  },
  {
    img: '/static/images/posts/Photosv1/classic_apartment_buildings.jpg',
    lowres:
      '/static/images/posts/Photosv1/classic_apartment_buildings lowres.jpg',
    caption: 'Classic Apartment Facades',
    title: 'Classic Apartment Facades',
    text:
      'Some of the apartment buildings along Beacon Street are really cool, most are also very old as well and really only the interiors have been rebuilt recently.'
  },
  {
    img: '/static/images/posts/Photosv1/beacon_street_buildings.jpg',
    lowres: '/static/images/posts/Photosv1/beacon_street_buildings lowres.jpg',
    caption: 'Beacon Street Buildings',
    title: 'Beacon Street Buildings',
    text:
      'There also happen to be quite a few churches along Beacon Street in all kinds and forms representing a lot of different religions and architectural patterns as well.'
  },
  {
    img: '/static/images/posts/Photosv1/sunday_afternoon_breeze.jpg',
    lowres: '/static/images/posts/Photosv1/sunday_afternoon_breeze lowres.jpg',
    caption: 'Sunday Afternoon Breeze',
    title: 'Sunday Afternoon Breeze',
    text:
      'This was simply a photo taken from my desk chair looking out behind my apartment building while the warm Sunday breeze blows through the window.'
  }
];
export default class extends Component {
  componentDidMount() {
    document.documentElement.classList.add('is-photos');
  }

  componentDidUnmount() {
    document.documentElement.classList.remove('is-photos');
  }

  render() {
    injectGlobal`
      .is-photos {
        transition: background-color 1s, color 1s;
        background-color: var(--gray);
        color: var(--white);
      }
    `;
    return (
      <Wrapper>
        <header>
          <Title>Photos v1</Title>
          <p>
            The below photos were all taken on my Google Pixel XL with HDR+ mode
            on auto. I really love the camera on this phone so far, and I am
            really excited about the photos and videos I will be able to take
            with it!
          </p>
        </header>
        <Lightbox images={images} />
      </Wrapper>
    );
  }
}

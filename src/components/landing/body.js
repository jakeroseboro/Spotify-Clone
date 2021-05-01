import React from 'react';
import LandingButton from './landing-button';
import authLink from '../../private';

const Body = () => {
    return(
    <div className='body'>
      <div className='body-container'>
        <h1 className='body-title'>Jake's</h1>
        <h1 className='body-title'>Spotify</h1>
        <h1 className='mobile-title'>Jake's Spotify</h1>
        <p>This is pretty much just Spotify, but blue and pink.</p>
        <a href={authLink}><LandingButton /></a>
      </div>
      <div className='padding'></div>
    </div>
    )
}

export default Body;
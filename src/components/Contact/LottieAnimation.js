"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

/**
 * A React component that renders a Lottie animation using the DotLottiePlayer component.
 *
 * @function
 * @returns {JSX.Element} - A JSX element representing the Lottie animation player.
 */
const LottieAnimation = () => {
  return (
      <DotLottiePlayer
        src="/animation_llqd7ey4.lottie"
        autoplay
        loop
      >
       
      </DotLottiePlayer>
  );
};

export default LottieAnimation;
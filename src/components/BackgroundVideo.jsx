import React from 'react';

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: -1,
        objectFit: 'cover',
        pointerEvents: 'none', // Allows clicking on foreground
      }}
    >
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;

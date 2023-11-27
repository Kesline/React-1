// MadlibStory.js
import React from 'react';

const MadlibStory = ({ data, onRestart }) => {
  const { noun, adjective, verb } = data;

  return (
    <div>
      <h2>Madlib Story</h2>
      <p>
        Once upon a time, there was a {adjective} {noun} who loved to {verb} all day long.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default MadlibStory;

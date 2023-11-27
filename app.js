// App.js
import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const App = () => {
  const [formData, setFormData] = useState({});
  const [showStory, setShowStory] = useState(false);

  const handleSubmit = (data) => {
    setFormData(data);
    setShowStory(true);
  };

  const handleRestart = () => {
    setFormData({});
    setShowStory(false);
  };

  return (
    <div>
      <h1>Madlibs Game</h1>
      {showStory ? (
        <MadlibStory data={formData} onRestart={handleRestart} />
      ) : (
        <MadlibForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;

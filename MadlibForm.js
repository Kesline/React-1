// MadlibForm.js
import React, { useState } from 'react';

const MadlibForm = ({ onSubmit }) => {
  const [noun, setNoun] = useState('');
  const [adjective, setAdjective] = useState('');
  const [verb, setVerb] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noun && adjective && verb) {
      onSubmit({ noun, adjective, verb });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} />
      </label>
      <br />
      <label>
        Adjective:
        <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
      </label>
      <br />
      <label>
        Verb:
        <input type="text" value={verb} onChange={(e) => setVerb(e.target.value)} />
      </label>
      <br />
      <button type="submit">Generate Story</button>
    </form>
  );
};

export default MadlibForm;

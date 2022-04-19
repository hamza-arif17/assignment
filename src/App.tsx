import React, { useState } from 'react';

import Autocomplete from './components/Autocomplete';

function App() {
  const [userInput, setUserInput] = useState('');

  return (
    <Autocomplete
      id="autoComplete"
      value={userInput}
      options={['Apple', 'Banana', 'Orange']}
      onChange={setUserInput}
    />
  );
}

export default App;

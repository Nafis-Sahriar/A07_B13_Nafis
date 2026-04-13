import React, {useState } from 'react';

import {ContextExporter} from './ContextExporter';

// 2. Create provider component
const ActionProvider = ({ children }) => {

  // 3. Global state (interactions list)
  const [interactions, setInteractions] = useState([]);

  // 4. Function to add new interaction


  // 5. What we want to share globally
  const value = {
    interactions,
    setInteractions
  };

  // 6. Wrap children
  return (
    <ContextExporter.Provider value={value}>
      {children}
    </ContextExporter.Provider>
  );
};

export default ActionProvider;
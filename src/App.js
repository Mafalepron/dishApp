import React from 'react';
import {ContentBar} from './components/Content/ContentBar.jsx';
import Context from './Context'





function App() {

  return (
       <Context>
        <ContentBar />
       </Context>
  );
}

export default App;

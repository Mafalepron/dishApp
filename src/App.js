import React from 'react';
import { ContentBar } from './components/Content/ContentBar.jsx';
import Context from './Context'





export default function App() {

  return (
       <Context>
        <ContentBar />
       </Context>
  );
}
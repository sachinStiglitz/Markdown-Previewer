import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreviewer from './MarkdownPreviewer';

const App = () => {
  return (
    <div className="App">
      <MarkdownPreviewer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


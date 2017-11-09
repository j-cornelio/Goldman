import React            from 'react';
import Questions        from './components/Questions/Questions';
import questions        from './data/questions';

class App extends React.Component {
  render() {
    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Questions questions={questions} />
      </div>
    );
  }
}
export default App;
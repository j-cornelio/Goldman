import React            from 'react';
import RaisedButton     from 'material-ui/RaisedButton';
import FlatButton       from 'material-ui/FlatButton';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,

      questions: [
        {
          header: 'What is JavaScript?', 
          subhead: 'JavaScript simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
          quest: ['class based', 'Object oriented and dynamic', 'static', 'complied program'],
          answer: {text: 'Object oriented and dynamic', points: 25}
        },
        {
          header: 'What is React?', 
          subhead: 'React simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
          quest: ['build', 'view layer', 'state management', 'framework'],
          answer: {text: 'view layer', points: 25}
        },
        {
          header: 'What is Redux?', 
          subhead: 'Redux simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
          quest: ['React library', 'garden tool', 'state management library'],
          answer: {text: 'state management library', points: 25}
        },
        {
          header: 'What is CSS?', 
          subhead: 'CSS simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
          quest: ['library', 'framework', 'API', 'language for styling'],
          answer: {text: 'language for styling', points: 25}
        }
      ],
      score: 0
    };
  }

  handleNext(){
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev(){
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  _respond(response, idx){
    var s = this.state.score;
    if(this.state.questions[idx].answer.text === response){
      this.setState({score:  s += this.state.questions[idx].answer.points})
    }
  }

  _renderSteps(index){
    const { questions } = this.state;
    return (
      <div>
        <h2>{questions[index].header}</h2>
        <p>{questions[index].subhead}</p>
        {questions[index].quest.map( (item, i) => {
            return <button className="questionsButtons" onClick={this._respond.bind(this, item, i)} key={i}>{item}</button>
        })}
      </div>
    )
  }

  _getStepContent(stepIndex) {
    var element = null;
    this.state.questions.forEach( (item, idx) => {
      if(stepIndex === idx){
        element = this._renderSteps(stepIndex)
      }
    })

    return element;
  }

  render() {
    const { finished, stepIndex } = this.state,
          contentStyle            = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>

          { (stepIndex < 4) ? <p id="steps">Step {stepIndex + 1} of 4</p> : null}

          <div style={contentStyle}>
            {finished ? (
              <div>
                <h1>Your Total Score: {this.state.score}</h1>

                { this.state.score > 50 ? <h1>CONGRATULATIONS</h1> : <p>please try again</p> }

                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false, score: 0});
                  }}
                >
                  Reset test
                </a>
              </div>
            ) : (
              <div>
                <div style={{marginTop: 12}}>
                  <span onClick={this.handlePrev.bind(this)} id="prev"></span>

                  <span onClick={this.handleNext.bind(this)} id="forward"></span>
                </div>
                <div>{this._getStepContent(stepIndex)}</div>
              </div>
            )}
          </div>
      </div>
    );
  }
}
export default App;
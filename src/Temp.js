import React            from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton     from 'material-ui/RaisedButton';
import FlatButton       from 'material-ui/FlatButton';

class App extends React.Component {
  state = {
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

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  _respond = (response, idx) => {
    console.log(response, idx);
    console.log(this.state.questions[idx].answer.text);
    var s = this.state.score;
    if(this.state.questions[idx].answer.text === response){
      this.setState({score:  s += this.state.questions[idx].answer.points})
    }
  }

  _renderFirst = () => {
    return (
      <div>
        <h2>{this.state.questions[0].header}</h2>
        <p>{this.state.questions[0].subhead}</p>
        {this.state.questions[0].quest.map( (item, idx) => {
          return <button class="questionsButtons" onClick={this._respond.bind(this, item, 0)} key={idx}>{item}</button>
        })}
      </div>
    )
  }

  _renderSecond = () => {
    return (
      <div>
        <h2>{this.state.questions[1].header}</h2>
        <p>{this.state.questions[1].subhead}</p>
        {this.state.questions[1].quest.map( (item, i) => {
          return <button class="questionsButtons" onClick={this._respond.bind(this, item, 1)} key={i}>{item}</button>
        })}
      </div>
    )
  }

  _renderThird = () => {
    return (
      <div>
        <h2>{this.state.questions[2].header}</h2>
        <p>{this.state.questions[2].subhead}</p>
        {this.state.questions[2].quest.map( (item, i) => {
          return <button class="questionsButtons" onClick={this._respond.bind(this, item, 2)} key={i}>{item}</button>
        })}
      </div>
    )
  }

  _renderFourth = () => {
    return (
      <div>
        <h2>{this.state.questions[3].header}</h2>
        <p>{this.state.questions[3].subhead}</p>
        {this.state.questions[3].quest.map( (item, i) => {
          return <button class="questionsButtons" onClick={this._respond.bind(this, item, 3)} key={i}>{item}</button>
        })}
      </div>
    )
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this._renderFirst();
      case 1:
        return this._renderSecond();
      case 2:
        return this._renderThird();
      case 3:
        return this._renderFourth();
      default:
        return this._renderFirst();
    }
  }
//
  render() {
    const { finished, stepIndex } = this.state,
          contentStyle            = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <MuiThemeProvider>
          <p id="steps">Step {stepIndex + 1} of 4</p>
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
                  <span onClick={this.handlePrev} id="prev"></span>

                  <span onClick={this.handleNext} id="forward"></span>
                </div>
                <div>{this.getStepContent(stepIndex)}</div>
              </div>
            )}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
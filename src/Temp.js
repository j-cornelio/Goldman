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
        answer: {ans: 'Object oriented and dynamic', points: '25'}
      },
      {
        header: 'What is React?', 
        subhead: 'React simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
        quest: ['I agree', 'For sure', 'libraray', 'framework']
      },
      {
        header: 'What is Redux?', 
        subhead: 'Redux simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
        quest: ['React library', 'garden tool', 'state management library']
      },
      {
        header: 'What is CSS?', 
        subhead: 'CSS simply is dummy Lorem Ipsum simply is dummy Lorem Ipsum simply is dummy', 
        quest: ['library', 'framework', 'API', 'styling standard']
      }
    ]
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  _respond = (answer) => {
    console.log(answer)
  }

  _renderFirst = () => {
    return (
      <div>
        <h2>{this.state.questions[0].header}</h2>
        <p>{this.state.questions[0].subhead}</p>
        {this.state.questions[0].quest.map( (item, i) => {
          return <button onClick={this._respond.bind(this, this.state.questions[0].quest)} key={i}>{item}</button>
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
          return <button key={i}>{item}</button>
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
          return <button key={i}>{item}</button>
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
          return <button key={i}>{item}</button>
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
      default:
        return this._renderFourth();
    }
  }
//
  render() {
    const { finished, stepIndex } = this.state,
          contentStyle            = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <MuiThemeProvider>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad group</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  Click here
                </a> to reset the example.
              </p>
            ) : (
              <div>
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onClick={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
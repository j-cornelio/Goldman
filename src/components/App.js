import React from 'react';
// Link component is just anchor to match it's path and Route path to load JSX UI Component in prop.children


const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Tutorial part 2</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* load components like composition */}
    </div>
  )
}

export default App;


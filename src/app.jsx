import React, { Component } from 'react';
import TopSpot from './topspot';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topspots:[]
    };
  }


  componentWillMount() {
    const axios = require('axios');
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));

  }


  render() {
    return (
      <div className='App'>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">San Diego Top Spots</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Search By
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Distance</a>
                <a className="dropdown-item" href="#">Aphabetically</a>
                <a className="dropdown-item" href="#">Random</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div>
      {/* <h2 className="tagline">30 of San Diego's top places to see</h2> */}

      {/* <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre> */}
      {
        this.state.topspots.map(topspot => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
        ))
      }

      </div>

      <hr/>
      <footer id="contact" className="page-footer default_color scrollspy">
        <div className="footer-copyright default_color">
          <div className="container">
          Designed by <a className="white-text" href="https://www.linkedin.com/in/dangermin/">Dangermin</a>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

// export default App;

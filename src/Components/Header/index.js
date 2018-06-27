import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="c-header">
        <Link to="/"><h1>Science Books <span role="img" aria-label="Science emojis, scientist, microscope, books">👩‍🔬🔬📚</span></h1></Link>
      </header>
    );
  }
}

export default Header;

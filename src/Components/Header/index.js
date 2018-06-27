import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="c-header">
        <div className="l-wrapper">
          <h1>Science Books <span role="img" aria-label="Science emojis, scientist, microscope, books">👩‍🔬🔬📚</span></h1>
        </div>
      </header>
    );
  }
}

export default Header;

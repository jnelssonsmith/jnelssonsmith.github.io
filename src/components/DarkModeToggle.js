import React from 'react'
import Toggle from 'react-toggle'
import '../assets/toggle.css';

class DarkModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode(e) {
    const selectedTheme = (e.target.checked === true) ? 'dark' : 'light';
    window.__setPreferredTheme(selectedTheme);
  }

  render() {
    const { initialTheme } = this.props;
    return (
      <Toggle
        id='dark-mode-toggle'
        defaultChecked={initialTheme === 'dark'}
        onChange={this.toggleDarkMode}
        icons={{
          checked: "🌙",
          unchecked: "☀️",
        }}
      />
    )
  }
}

export default DarkModeToggle
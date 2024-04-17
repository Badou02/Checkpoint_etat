import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "I'm a React developer.",
        imgSrc: "url_de_l_image",
        profession: "Développeur React"
      },
      show: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>
          {show ? 'Masquer Profil' : 'Afficher Profil'}
        </button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Temps écoulé depuis le montage du composant : {elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;


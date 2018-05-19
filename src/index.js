import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import card from './red_back.png';
import image from './pokerTable.png';
import BackgroundImage from 'react-background-image-loader';


class Game extends React.Component {
  render() {
    return (
      <BackgroundImage src={image}>
      <div>
          <h1 className="title">Welcome to Texas Hold em.</h1>
          <div className="game">
            <div className="game-card">
              <Hand/>
            </div>
          </div>
      </div>
      </BackgroundImage>
    );
  }
}

class Play extends React.Component {
  render() {
    return (
      <button className="play">
      </button>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <button className="card">
        <img src={card} alt="back of card" width="64" height="89"/>
      </button>
    );
  }
}

class Space extends React.Component {
  render() {
    return (
      <button className="space">
        {/* TODO */}
      </button>
    );
  }
}

class Hand extends React.Component {
	renderCard(i) {
		return (
		    <Card/>
		);
	}

  renderSpace(i) {
    return (
        <Space/>
    );
  }

  renderPlay(i) {
    return (
        <Play/>
    );
  }

	render() {
		return (
		    <div>
		        <div className="player-cards">
                    {this.renderSpace(0)}
                    {this.renderSpace(1)}
		                {this.renderCard(0)}
                    {this.renderSpace(2)}
		                {this.renderCard(1)}
            </div>
            <div className = "dealer-cards">
                    {this.renderSpace(3)}
            </div>        
            <div className="dealer-cards">
                    {this.renderSpace(4)}
                    {this.renderSpace(5)}
                    {this.renderCard(2)}
                    {this.renderSpace(6)}
		                {this.renderCard(3)}
                    {this.renderSpace(7)}
                    {this.renderPlay(0)}
            </div>
        </div>
		    );
	}
}


ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

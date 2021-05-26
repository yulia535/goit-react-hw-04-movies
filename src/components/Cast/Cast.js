import React, { Component } from 'react';
import servicesApp from '../services/servicesApp';
import style from './Cast.module.css';
class Cast extends Component {
  state = {
    casts: '',
  };

  componentDidMount() {
    this.getCast();
  }

  getCast = () => {
    servicesApp
      .getCast(this.props.match.params.movieId)
      .then((results) => this.setState({ casts: results.data.cast }));
  };

  render() {
    return (
      <div>
        {this.state.casts.length > 0 && (
          <ul>
            {this.state.casts.map((cast) => (
              <li className={style.castCard} key={cast.id}>
                <img
                  className={style.castPhoto}
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt={cast.name}
                ></img>
                <h3>{cast.name}</h3>
                <span>{`Character:${cast.character}`}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default Cast;

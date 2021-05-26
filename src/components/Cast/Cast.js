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
    const { casts } = this.state;
    return (
      <div>
        {casts.length > 0 && (
          <ul>
            {casts.map(({ id, profile_path, name, character }) => (
              <li className={style.castCard} key={id}>
                {/* <img
                  className={style.castPhoto}
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={name}
                ></img> */}
                {profile_path === null ? (
                  <img
                    className={style.castPhoto}
                    src='https://placehold.jp/100x150.png'
                    alt='no images'
                  ></img>
                ) : (
                  <img
                    className={style.castPhoto}
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={name}
                  ></img>
                )}
                <h3>{name}</h3>
                <span>{`Character:${character}`}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default Cast;

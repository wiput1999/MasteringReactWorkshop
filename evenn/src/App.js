import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { setField, resetState } from './redux';

const closeTime = moment('2018-04-01 12:00');

class App extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      const millis = closeTime.diff(moment());
      const duration = moment.duration(millis);
      this.props.setField(
        'countdown',
        `${Math.floor(duration.asHours())} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // eslint-disable-next-line
    const { name, email, ticketType, food, agreeTerm, countdown, setField, resetState } = this.props;
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Registration will be close in {countdown}</p>
          <div className="field">
            <label className="label"> Name </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={name}
                onChange={(e) => setField('name', e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label"> Email </label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value={email}
                onChange={(e) => setField('email', e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger"> This email is invalid </p>
          </div>
          <div className="field">
            <label className="label"> Ticket Type </label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => setField('ticketType', e.target.value)}>
                  <option value=""> Select type... </option>
                  <option value="regular"> Regular - 100THB </option>
                  <option value="premium"> Premium - 300THB </option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label"> Add Food </label>
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" onChange={() => setField('food', true)} checked={food} /> Yes (+50
                THB)
              </label>
              <label className="radio">
                <input type="radio" name="question" onChange={() => setField('food', false)} checked={!food} /> No
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setField('agreeTerm', !agreeTerm);
                  }}
                  checked={agreeTerm}
                />{' '}
                I agree to the <a href=""> terms and conditions </a>
              </label>
            </div>
          </div>
          <p>Price : 100THB</p>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link"> Register </button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={() => resetState()}>
                {' '}
                Reset{' '}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect((state) => state, { setField, resetState })(App);

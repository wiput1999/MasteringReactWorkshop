import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { setField, resetState } from './redux';

import Input from './Input';

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
    const { name, email, ticketType, food, agreeTerm, countdown, setField, resetState } = this.props;
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Registration will be close in {countdown}</p>
          <Input value={name} onChange={(value) => setField('name', value)} placeholder="e.g. John Doe" label="Name" />
          <Input
            type="email"
            value={email}
            onChange={(value) => setField('email', value)}
            placeholder="e.g. hello@react.org"
            label="Email"
            error="This email is invalid"
            icon="envelope"
          />
          <div className="field">
            <label className="label"> Ticket Type </label>
            <div className="control">
              <div className="select">
                <select value={ticketType} onChange={(e) => setField('ticketType', e.target.value)}>
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

// Compact
// const mapDispatchToProps = { setField, resetState };

// Full
// const mapDispatchToProps = (dispatch) => ({
//   setField: (key, value) => dispatch(setField(key, value)),
//   resetField: () => dispatch(resetState())
// });

export default connect((state) => state, { setField, resetState })(App);

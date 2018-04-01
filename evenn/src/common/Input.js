import React from 'react';

export default ({ value, onChange, type = 'text', error, placeholder, label, icon }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className={`control ${icon && 'has-icons-left'} ${error && 'has-icons-right'}`}>
      <input
        className={`input ${error ? 'is-danger' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && (
        <span className="icon is-small is-left">
          <i className={icon && `fas fa-${icon}`} />
        </span>
      )}
      {error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </div>
    <p className="help is-danger"> {error} </p>
  </div>
);

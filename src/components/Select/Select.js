import React from 'react';
import './Select.scss';

function Select({ data, title }) {
  return (
    <div className="form-select">
      <div className="title">{title}</div>
      <div className="options">
        <select>
          {data.map(item => (
            <option key={item.key} value={item.key}>
              {item.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;

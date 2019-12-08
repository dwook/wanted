import React from 'react';
import './Select.scss';

function Select({ data, title, selected, type, onChange }) {
  console.log('셀렉트', selected);
  return (
    <div className="form-select">
      <div className="title">{title}</div>
      <div className="options">
        <select value={selected.key} onChange={event => onChange(event, type)}>
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

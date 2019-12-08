import React from 'react';
import './Tags.scss';
import { checkKey } from '../../util';

function Tags({ data, title, selected, onItemClick }) {
  return (
    <div className="form-tags">
      <div className="title">{title}</div>
      <div className="options">
        {data.map(item => (
          <button
            key={item.key}
            value={item.key}
            className={checkKey(item.key, selected) ? 'selected' : ''}
            onClick={() => onItemClick(item)}
          >
            {item.display}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tags;

import React from 'react';
import './Card.scss';

function Card({
  company,
  address,
  title_img,
  position,
  reward,
  id,
  like_count
}) {
  return (
    <div className="card">
      <a href={`https://www.wanted.co.kr/wd/${id}`}>
        <div className="thumbnail">
          <img src={title_img.thumb} alt={company.name} />
          <div className="likeButton">{like_count}</div>
        </div>
        <div className="body">
          <div className="position">{position}</div>
          <div className="details">
            <div>{company.name}</div>
            <div className="address">
              <span>{address.location}</span>
              <span>{address.country}</span>
            </div>
            <div className="reward">채용보상금 {reward.formatted_total}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;

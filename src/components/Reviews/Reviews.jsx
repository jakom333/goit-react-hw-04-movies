import React from 'react';
import { ReviewsContainer } from './ReviewsStyled';

const Reviews = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.length ? (
        <ul className="list">
          {reviews.map(({ id, author, content }) => (
            <li key={id} className="listItem">
              <h3 className="author">Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;

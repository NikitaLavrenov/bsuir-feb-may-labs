import React from "react";
import { css } from "emotion";

const cardStyle = css`
  border: 1px solid black;
  border-radius: 7px;
`;

const cardImgStyle = css`
  border-radius: 7px 7px 0 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default function Card({ article }) {
  return (
    <li className={cardStyle}>
      <div
        className={css`
          height: 10rem;
        `}
      >
        <img className={cardImgStyle} src={article.urlToImage} alt="" />
      </div>
      <div>
        <h2>
          <a href={article.url}>${article.title}</a>
        </h2>
        <p>{article.description}</p>
        <small>{article.author || ""}</small>
      </div>
    </li>
  );
}
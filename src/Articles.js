import React from "react";
import { css } from "emotion";

import Card from "./Card";

const cardListStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1.5rem;
`;

export default function Articles(props) {
  const [
    amountOfDisplayedArticles,
    setAmountOfDisplayedArticles
  ] = React.useState(5);

  const { articles } = props;

  const displayShowMoreButton = articles.length > amountOfDisplayedArticles;
  const slicedArticles = articles.slice(0, amountOfDisplayedArticles);

  return (
    <>
      <ul className={cardListStyle}>
        {slicedArticles.map((article, idx) => (
          <Card article={article} key={idx} />
        ))}
      </ul>
      {displayShowMoreButton && (
        <button
          onClick={() =>
            setAmountOfDisplayedArticles(amountOfDisplayedArticles + 5)
          }
        >
          Show more
        </button>
      )}
    </>
  );
}

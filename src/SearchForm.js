import React from "react";

export default function SearchForm(props) {
  const { initialQuery, setQuery } = props;
  const [queryInputValue, setQueryInputValue] = React.useState(initialQuery);
  
  return (
    <div>
      <input
        value={queryInputValue}
        onChange={e => setQueryInputValue(e.target.value)}
      />
      <button onClick={() => setQuery(queryInputValue)}>Search</button>
    </div>
  );
}

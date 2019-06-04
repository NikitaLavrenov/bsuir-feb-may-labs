import React from "react";

function ArticleSourceItem({ sourceName, selected, onChange }) {
  return (
    <div>
      <input
        name={sourceName}
        type="checkbox"
        checked={selected}
        onChange={onChange}
      />
      <label htmlFor={sourceName}>{sourceName}</label>
    </div>
  );
}

export default function Sources(props) {
  let { sources, dispatch } = props;

  return (
    <div>
      {Object.entries(sources).map(([sourceName, selected], idx) => (
        <ArticleSourceItem
          sourceName={sourceName}
          selected={selected}
          key={idx}
          onChange={() =>
            dispatch({ type: "TOGGLE_SOURCE", source: sourceName })
          }
        />
      ))}
    </div>
  );
}

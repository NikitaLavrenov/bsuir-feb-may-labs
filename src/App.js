import React from "react";

import Articles from "./Articles";
import Sources from "./Sources";
import SearchForm from "./SearchForm";

import { fetchNews } from "./api";

const initialState = {
  sources: {},
  articles: []
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      const { articles } = action;
      let sources = {};
      articles.forEach(article => (sources[article.source.name] = false));
      return {
        ...state,
        articles,
        sources
      };
    case "SET_SOURCES":
      return {
        ...state,
        sources: action.sources
      };
    case "TOGGLE_SOURCE":
      return {
        ...state,
        sources: {
          ...state.sources,
          [action.source]: !state.sources[action.source]
        }
      };
    default:
      throw new Error();
  }
}

function App() {
  const [query, setQuery] = React.useState("auto");

  const [{ sources, articles }, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  React.useEffect(() => {
    (async () => {
      const { articles } = await fetchNews(query);
      dispatch({ type: "SET_ARTICLES", articles });
    })();
  }, [query]);

  const filteredArticles = articles.filter(
    article => sources[article.source.name]
  );

  return (
    <div>
      <SearchForm initialQuery={query} setQuery={setQuery} />
      <Sources dispatch={dispatch} sources={sources} />
      <Articles articles={filteredArticles} />
    </div>
  );
}

export default App;

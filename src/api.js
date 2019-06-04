const API_KEY = "751da822d3b942139f6d2246e1661781";

export function fetchNews(query) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&from=05-26-2019&sortBy=publishedAt&apiKey=${API_KEY}`
  ).then(r => r.json());
}
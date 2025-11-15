const API_KEY = import.meta.env.VITE_API_KEY;

export const requests = {
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Adventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  Animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  Documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  Fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  Family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  Thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
};

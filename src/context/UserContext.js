import React, { createContext, useState } from "react";

const UserContext = createContext();
const initialUser = {
  id: 1,
  name: "Sergio Castillo",
  favoriteMovies: [],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const login = () => {
    setUser(initialUser);
  };
  const logout = () => {
    setUser(null);
  };
  const toggleFavoriteMovieToUser = (movieId) => {
    //este setUser, clona lo que hay en user y ademas en la propiedad favoriteMovies le asigna el otro valor
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter((favMovId) => favMovId !== movieId) //borrar movie
      : [...user.favoriteMovies, movieId]; //agregar movie
    setUser({
      ...user,
      favoriteMovies: favoriteMovies,
    });
  };

  const data = { user, login, logout, toggleFavoriteMovieToUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export { UserProvider };
export default UserContext;

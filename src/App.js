import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { MoviesProvider } from "./context/MoviesContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;

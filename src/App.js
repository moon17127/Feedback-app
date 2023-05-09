import { Route, Routes } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import HomeScreen from "./Screens/HomeScreen";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import Movies from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import Watch from "./Screens/Watch";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavoriteMovies from "./Screens/Dashboard/Admin/FavoriteMovies";
import SearchMovie from "./Screens/SearchMovie";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import MoviesList from "./Screens/Dashboard/Admin/MoviesList";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Users from "./Screens/Dashboard/Admin/Users";

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path={"/"} element={<HomeScreen />} />
      <Route path={"/about-us"} element={<AboutUs />} />
      <Route path={"/contact-us"} element={<ContactUs />} />
      <Route path={"/search"} element={<SearchMovie />} />
      <Route path={"/movies"} element={<Movies />} />
      <Route path={"/movie/:id"} element={<SingleMovie />} />
      <Route path={"/watch/movie/:id"} element={<Watch />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/password"} element={<Password />} />
      <Route path={"/favorites"} element={<FavoriteMovies />} />
      <Route path={"/Movieslist"} element={<MoviesList />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/categories"} element={<Categories />} />
      <Route path={"/users"} element={<Users />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;

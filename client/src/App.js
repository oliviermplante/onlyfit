import './App.css';
import NavBar from "./Components/navbar/navbar";
import AboutUs from './Pages/AboutUs';
import TrainersPage from './Pages/Trainers';
import Home from './Pages/Home';
import SignInPage from './Pages/SignIn';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Search from './Pages/Search';
import Video from './Pages/Video';
import Post from './Pages/Post';
import { useSelector } from 'react-redux';
import Upload from './Pages/Upload';
import UploadPost from './Pages/UploadPost';
import ProfilePage from './Pages/Profile';
import Trainer from './Pages/Trainer';
import Admin from './Pages/admin/index';

const App = () => {
  const { currentUser } = useSelector((state) => state.user);

  return(
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/uploadpost" element={<UploadPost />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
            <Route
               path="signin"
               element={currentUser ? <Home /> : <SignInPage />}
               />
        <Route path="video">
             <Route path=":id" element={<Video />} />
        </Route>       
        <Route path="post">
             <Route path=":id" element={<Post />} />
        </Route>      
        <Route path="user">
             <Route path=":id" element={<Trainer />} />
        </Route>      
        <Route path="search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default App;
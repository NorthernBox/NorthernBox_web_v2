
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/Blogs/BlogDetails";
import Teams from "./components/Teams/Teams";
import Events from "./components/Events/AllEvents/Events";
import SingleEvent from "./components/Events/SingleEvent/SingleEvent";
import TechWeek from "./components/TechWeek/TechWeek";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='project' element={<ProjectGallery/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='blogs/:id' element={<BlogDetails/>}/>
            <Route path='team' element={<Teams/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='event/:id' element={<SingleEvent/>}/>
            <Route path='techweek' element={<TechWeek/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

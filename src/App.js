
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MyNavbar from './Components/MyNavbar';
import Profile from './Components/Profile';
import UserList from './Components/UserList';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="users" element={<UserList/>} />
      <Route path="users/:id" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;

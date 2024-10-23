import logo from './logo.svg';
import './App.css';
import Login from "./component/Login/Login";
import {Route, Routes} from "react-router-dom";
import AllUsersPage from "./component/ManageUsers/AllUsersPage";
import {Navbar} from "react-bootstrap";
import Header from "./common/Header";

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/all-user" element={<AllUsersPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;

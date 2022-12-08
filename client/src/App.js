import { BrowserRouter, Routes, Route } from "react-router-dom";


import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import AddUserForm from './features/users/AddUserForm';
import Signup from './auth/signup';
import Login from './auth/login';
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        {/* <AddPostForm /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
      </Routes>       
        {/* <AddUserForm /> */}
        {/* <PostsList /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;


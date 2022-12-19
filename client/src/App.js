import { BrowserRouter, Routes, Route } from "react-router-dom";


import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import Signup from './auth/signup';
import Login from './auth/login';
import Home from "./components/home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./store/authSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [])

  return (
    <BrowserRouter>
      <main className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/new" element={<AddPostForm />} />
        </Routes>       
        {/* <AddUserForm /> */}
        {/* <PostsList /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;


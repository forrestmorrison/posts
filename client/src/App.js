import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import AddUserForm from './features/users/AddUserForm';

function App() {
  return (
    <main className="App">
      {/* <AddPostForm /> */}
      <AddUserForm />
      <PostsList />
    </main>
  );
}

export default App;


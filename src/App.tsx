import { PostsProvider } from "./contexts/PostsContext";
import { UserProvider } from "./contexts/UserContext";
import Router from "./Routes/routes";

function App() {
  return (
    <UserProvider>
      <PostsProvider>
        <Router />
      </PostsProvider>
    </UserProvider>
  );
}

export default App;

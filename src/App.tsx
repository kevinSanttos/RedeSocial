import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CommentsProvider } from "./contexts/CommentsContext";
import { FollowerProvider } from "./contexts/FollowerContext";
import { PostsProvider } from "./contexts/PostsContext";
import { UserProvider } from "./contexts/UserContext";

import Router from "./Routes/routes";

function App() {
  return (
    <>
      <UserProvider>
        <FollowerProvider>
          <CommentsProvider>
              <Router />
          </CommentsProvider>
        </FollowerProvider>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

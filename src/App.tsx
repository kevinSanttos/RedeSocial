import { UserProvider } from "./contexts/UserContext";
import Router from "./Routes/routes";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;

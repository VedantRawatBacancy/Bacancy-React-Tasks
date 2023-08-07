import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { ContextProvider } from "./context/ContextProvider";

//The [ npm run server ] needs to be run post [ npm run dev ] for the code to work as intended.
// The Localhost 3000 is used as the hosting server, and the webapp runds on 5173 (Vite Server)
//Hello

function App() {
  return (
    <>
    <ContextProvider>
      <Form />
      <UserList />
    </ContextProvider>
    </>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { ROUTES } from "./routes/ROUTES";

const routes = createBrowserRouter(ROUTES)

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={routes} />
      </UserContextProvider>
    </>
  );
}

export default App;

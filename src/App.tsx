import { RouterProvider } from "react-router-dom";
import router from "./router";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <Header organization="organization" repository="repository" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

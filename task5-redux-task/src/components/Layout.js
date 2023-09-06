import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <div className="cont">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;

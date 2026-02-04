import { Outlet } from "react-router-dom"
import SideBar from "./SideBar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="flex-grow-1 mainContent">
        <Header />
        <main className="flex-grow-1 px-5 py-4" style={{ overflowY: "auto" }}>
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default MainLayout

import { Outlet } from "react-router-dom"
import SideBar from "./SideBar";
import Header from "./Header";
import UsersProvider from "../features/users/context/UsersProvider";

const MainLayout = () => {
  return (
    <UsersProvider>
      <div className="d-flex">
        <SideBar />
        <div className="flex-grow-1 mainContent">
          <Header />
          <main className="flex-grow-1 px-5 py-4" style={{ overflowY: "auto" }}>
            <Outlet />
          </main>
        </div>
      </div>
    </UsersProvider>
  );
}

export default MainLayout

import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="d-flex">
      

      <div className="flex-grow-1 p-4">

        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout

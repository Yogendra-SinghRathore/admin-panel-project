import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import UsersPage from '../features/users/UsersPage';
import DashboardPage from '../features/dashboard/DashboardPage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route  path='/' element={<Navigate to="/users"/>} />
            <Route  path='/users' element={<UsersPage/>} />
            <Route path='/dashboard' element={<DashboardPage/>} />
        </Route>
    </Routes>
  );
}

export default AppRoutes

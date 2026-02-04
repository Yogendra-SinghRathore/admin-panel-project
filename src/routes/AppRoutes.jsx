import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import UsersPage from '../features/users/UsersPage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route  path='/' element={<Navigate to="/users"/>} />
            <Route  path='/users' element={<UsersPage/>} />
        </Route>
    </Routes>
  );
}

export default AppRoutes

import React from 'react'
import { useUsers } from '../users/context/UsersContext'

const DashboardPage = () => {

  const { users } = useUsers();

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="col-2">
        <div className="card text-bg-light mb-3">
          <div className="card-header">Total Users</div>
          <div className="card-body">
            <h5 className="card-title">{users.length}</h5>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DashboardPage

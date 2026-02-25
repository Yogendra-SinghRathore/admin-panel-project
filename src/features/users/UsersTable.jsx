import React from 'react'
import UsersTableHead from './UsersTableHead'
import UsersTableBody from './UsersTableBody'

const UsersTable = ({ data, onDeleteUser, onEditUser, isDeletingUser }) => {

    if (data.length === 0) {
        return (
            <div className=' d-flex align-items-center justify-content-center p-4 border'>
                <h1>No Users Found</h1>
            </div>
        )
    }

    return (
        <div className='tableArea'>
            <table className="table table-striped table-bordered">
                <UsersTableHead />
                <UsersTableBody data={data} onDeleteUser={onDeleteUser} onEditUser={onEditUser} isDeletingUser={isDeletingUser} />
            </table>
        </div>
    )
}

export default UsersTable

const UsersHeader = ({onAddUser, onSearchChange, searchText}) => {
    return (
        <div className='pageHead'>
            <h2>Users</h2>
            <div className=" d-flex gap-1">
                <input type="text" value={searchText} className="form-control" placeholder="Search User..." onChange={(e) => onSearchChange(e.target.value)} />
                <button className='btn btn-primary' onClick={onAddUser}>Add New User</button>
            </div>
        </div>
    )
}

export default UsersHeader

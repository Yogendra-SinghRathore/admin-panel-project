
const UsersTableBody = ({ data, onDeleteUser, onEditUser, isDeletingUser }) => {

    return (
        <tbody>
            {data.map((user,index) => (
                <tr key={user.id}>
                    <th>{index+1}</th>
                    <td>{user.first}</td>
                    <td>{user.last}</td>
                    <td>{user.handle}</td>
                    <td>
                        <div className=" d-flex gap-1">
                            <button className='btn btn-outline-primary' ><i className="ri-eye-line"></i></button>
                            <button className='btn btn-outline-primary' onClick={() => onEditUser(user)}><i className="ri-pencil-line"></i></button>
                            <button className={`btn btn-outline-danger ${isDeletingUser ? "disabled" : ""} `} onClick={() => onDeleteUser(user.id)}><i className="ri-delete-bin-line"></i></button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default UsersTableBody
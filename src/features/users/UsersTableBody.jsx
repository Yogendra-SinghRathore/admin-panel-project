
const UsersTableBody = ({ data, onDeleteUser, onEditUser }) => {

    return (
        <tbody>
            {data.map((user) => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <td>{user.first}</td>
                    <td>{user.last}</td>
                    <td>{user.handle}</td>
                    <td>
                        <div className=" d-flex gap-1">
                            <button className='btn btn-outline-danger' onClick={() => onEditUser(user)}>E</button>
                            <button className='btn btn-outline-danger' onClick={() => onDeleteUser(user.id)}>X</button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default UsersTableBody

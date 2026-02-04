
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
                            <button className='btn btn-outline-primary' ><i class="ri-eye-line"></i></button>
                            <button className='btn btn-outline-primary' onClick={() => onEditUser(user)}><i class="ri-pencil-line"></i></button>
                            <button className='btn btn-outline-danger' onClick={() => onDeleteUser(user.id)}><i class="ri-delete-bin-line"></i></button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default UsersTableBody

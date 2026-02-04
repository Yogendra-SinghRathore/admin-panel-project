
const EditUserModal = ({ user, handleEditChange, onSave, onCancel, errors }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleEditChange(name, value);
    }
    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <div className="modalHeader">
                    <h3>Edit User</h3>
                    <button className="btn-close" onClick={onCancel}></button>
                </div>

                <div className="modalBody">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="first"
                            value={user.first}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {errors.first && <small className=" text-danger">{errors.first}</small>}
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="last"
                            value={user.last}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {errors.last && <small className=" text-danger">{errors.last}</small>}
                    </div>

                    <div className="form-group">
                        <label>Handle</label>
                        <input
                            type="text"
                            name="handle"
                            value={user.handle}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {errors.handle && <small className=" text-danger">{errors.handle}</small>}
                    </div>
                </div>

                <div className="modalFooter mt-3">
                    {
                        Object.keys(errors).length === 0
                            ? (
                                <button
                                    className="btn btn-success me-2"
                                    onClick={() => onSave(user)}
                                >
                                    Save
                                </button>
                            )
                            : (
                                <button
                                    className="btn btn-success me-2"
                                    disabled
                                >
                                    Save
                                </button>
                            )
                    }

                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditUserModal

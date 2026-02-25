const EditUserModal = ({ user, handleEditChange, onSave, onCancel, errors, isSavingUser }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleEditChange(name, value);
    };

    return (
        <>
            {/* Backdrop */}
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h5 className="modal-title">{user.id ? "Edit User" : "Add User"}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onCancel}
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    name="first"
                                    value={user.first}
                                    onChange={handleChange}
                                    className={`form-control ${errors.first ? "is-invalid" : ""}`}
                                />
                                {errors.first && (
                                    <div className="invalid-feedback">
                                        {errors.first}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    name="last"
                                    value={user.last}
                                    onChange={handleChange}
                                    className={`form-control ${errors.last ? "is-invalid" : ""}`}
                                />
                                {errors.last && (
                                    <div className="invalid-feedback">
                                        {errors.last}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Handle</label>
                                <input
                                    type="text"
                                    name="handle"
                                    value={user.handle}
                                    onChange={handleChange}
                                    className={`form-control ${errors.handle ? "is-invalid" : ""}`}
                                />
                                {errors.handle && (
                                    <div className="invalid-feedback">
                                        {errors.handle}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-success"
                                disabled={Object.keys(errors).length > 0  || isSavingUser}
                                onClick={() => onSave(user)}
                            >
                                {isSavingUser ? user.id ? "Updating" : "Adding" : user.id ? "Update" : "Add" }
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static backdrop */}
            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default EditUserModal;
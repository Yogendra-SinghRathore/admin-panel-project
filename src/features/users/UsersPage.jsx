import React, { useMemo, useState } from "react";
import UsersHeader from "./UsersHeader";
import UsersTable from "./UsersTable";
import EditUserModal from "./EditUserModal";
import { useUsers } from "../users/context/UsersContext";

const UsersPage = () => {
    const {
        users,
        loading,
        error,
        addUser,
        updateUser,
        deleteUser,
        isSavingUser,
        isDeletingUser,
    } = useUsers();

    const [editingUser, setEditingUser] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [errors, setErrors] = useState({});

    const validateUser = (user) => {
        const newErrors = {};

        if (!user.first || user.first.trim().length < 2) {
            newErrors.first = "First name must be at least 2 characters";
        }

        if (!user.last || user.last.trim().length < 2) {
            newErrors.last = "Last name must be at least 2 characters";
        }

        if (!user.handle || !user.handle.includes("@")) {
            newErrors.handle = "Handle must include @";
        }

        return newErrors;
    };

    const handleSaveUser = async (user) => {

        try {

            if (user.id) {
                await updateUser(user);
            } else {
                const {id, ...payload } = user;
                await addUser(payload);
            }
            setEditingUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    const editUser = (user) => {
        setEditingUser(user);
        setErrors(validateUser(user));
    };

    const setUser = () => {
        setErrors({});
        const newUser = {
            id: null,
            first: "",
            last: "",
            handle: "",
        };
        setEditingUser(newUser);
    };

    const handleEditChange = (name, value) => {
        const updatedUser = { ...editingUser, [name]: value };
        setEditingUser(updatedUser);
        setErrors(validateUser(updatedUser));
    };

    const cancelEdit = () => setEditingUser(null);

    const handleSearchTextChange = (enteredText) => {
        setSearchText(enteredText);
    };

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            return (
                user.id === Number(searchText) ||
                user.first.toLowerCase().includes(searchText.toLowerCase()) ||
                user.last.toLowerCase().includes(searchText.toLowerCase()) ||
                user.handle.toLowerCase().includes(searchText.toLowerCase())
            );
        });
    }, [users, searchText]);

    return (
        <div className="adminPage">
            <UsersHeader
                setUser={setUser}
                onSearchChange={handleSearchTextChange}
                searchText={searchText}
            />

            {loading && (
                <div className="text-center p-4 border">
                    Loading users...
                </div>
            )}

            {error && (
                <div className="text-center p-4 border text-danger">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <UsersTable
                    data={filteredUsers}
                    onDeleteUser={deleteUser}
                    onEditUser={editUser}
                    isDeletingUser={isDeletingUser}
                />
            )}

            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    handleEditChange={handleEditChange}
                    onSave={handleSaveUser}
                    onCancel={cancelEdit}
                    errors={errors}
                    isSavingUser={isSavingUser}
                />
            )}
        </div>
    );
};

export default UsersPage;

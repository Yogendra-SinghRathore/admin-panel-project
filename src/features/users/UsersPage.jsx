import React, { useEffect, useMemo, useState } from "react";
import UsersHeader from "./UsersHeader";
import UsersTable from "./UsersTable";
import EditUserModal from "./EditUserModal";

const UsersPage = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("http://localhost:3001/users");

            if (!response.ok) {
                throw new Error("Faild to fetch users");
            }

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [])


    const addUser = () => {
        const newUser = {
            id: userData.length + 1,
            first: "Parry",
            last: "Eagle",
            handle: "@gmail.com",
        };
        setUserData([...userData, newUser]);
    };

    const editUser = (user) => {
        setEditingUser(user);
        setErrors(validateUser(user));
    };

    const validateUser = (user) => {
        const newErrors = {};

        if (!user.first || user.first.trim().length < 2) {
            newErrors.first = "First name must be at least 2 characters";
        }

        if (!user.last || user.last.trim().length < 2) {
            newErrors.last = "First name must be at least 2 characters";
        }

        if (!user.handle || !user.handle.includes("@")) {
            newErrors.handle = "Handle must include @";
        }
        return newErrors;
    };

    const handleEditChange = (namee, value) => {
        setEditingUser({ ...editingUser, [namee]: value });
        setErrors(validateUser({ ...editingUser, [namee]: value }));
    };
    const updateUser = (updatedUser) => {
        if (Object.keys(errors).length > 0) return;
        setUserData(
            userData.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
        );
        setEditingUser(null);
        setErrors({});
    };

    const cancleEdit = () => setEditingUser(null);

    const deleteUser = (id) => {
        const confirmed = window.confirm(
            "Are You Sure, You Want to delet this User !",
        );
        if (!confirmed) return;
        const newUsers = userData.filter((user) => user.id !== id);
        setUserData(newUsers);
    };

    const handleSearchTextChange = (enterdText) => {
        setSearchText(enterdText);
    };

    const filteredUsers = useMemo(() => {
        return userData.filter((user) => {
            return (
                user.id === Number(searchText) ||
                user.first.toLowerCase().includes(searchText.toLowerCase()) ||
                user.last.toLowerCase().includes(searchText.toLowerCase()) ||
                user.handle.toLowerCase().includes(searchText.toLowerCase())
            );
        });
    }, [userData, searchText]);

    return (
        <div className="adminPage">
            <UsersHeader
                onAddUser={addUser}
                onSearchChange={handleSearchTextChange}
                searchText={searchText}
            />

            {loading && (
                <div className="text-center p-4 border">Loading users...</div>
            )}

            {error && (
                <div className="text-center p-4 border text-danger">{error}</div>
            )}


            {!loading && !error && (
                <UsersTable
                    data={filteredUsers}
                    onDeleteUser={deleteUser}
                    onEditUser={editUser}
                />
            )}

            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    handleEditChange={handleEditChange}
                    onSave={updateUser}
                    onCancel={cancleEdit}
                    errors={errors}
                />
            )}
        </div>
    );
};

export default UsersPage;

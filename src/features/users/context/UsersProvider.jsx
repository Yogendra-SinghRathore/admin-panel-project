import { useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";


const USERS_API = "https://admin-panel-backend-mzml.onrender.com/users";

const UsersProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSavingUser, setIsSavingUser] = useState(false);
  const [isDeletingUser, setIsDeletingUser] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(USERS_API);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  const addUser = async (payload) => {

    try {
      setIsSavingUser(true);

      const res = await fetch(USERS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSavingUser(false);
    }
  };

  const updateUser = async (user) => {

    try {

      setIsSavingUser(true);

      const res = await fetch(`${USERS_API}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const updatedUser = await res.json();
      setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSavingUser(false);
    }
  }


  const deleteUser = async (id) => {

    const confirmed = window.confirm(
      "Are You Sure, You Want to delet this User !",
    );
    if (!confirmed) return;

    try {
      setIsDeletingUser(true);

      await fetch(`${USERS_API}/${id}`, {
        method: "DELETE",
      });

      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      setError(error.message);
    }
    finally {
      setIsDeletingUser(false);
    }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  const value = {
    users, loading, error, isSavingUser, isDeletingUser, addUser, updateUser, deleteUser, refetchUsers: fetchUsers,
  };

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );

};

export default UsersProvider;
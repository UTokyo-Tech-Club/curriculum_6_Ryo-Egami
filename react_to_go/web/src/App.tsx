import React, { useEffect, useState } from 'react';
import { getUsers, addUser } from './api';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

interface User {
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleAddUser = async (user: User) => {
    try {
      await addUser(user);
      fetchUsers();
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
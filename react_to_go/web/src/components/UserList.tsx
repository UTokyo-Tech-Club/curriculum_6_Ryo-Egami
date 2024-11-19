import React from 'react';

interface User {
  name: string;
  age: number;
}

const UserList: React.FC<{ users: User[] }> = ({ users }) => (
  <ul>
    {users.map((user, index) => (
      <li key={index}>
        {user.name} - {user.age} years old
      </li>
    ))}
  </ul>
);

export default UserList;
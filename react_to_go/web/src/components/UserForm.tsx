import React, { useState } from 'react';

interface UserFormProps {
  onAddUser: (user: { name: string; age: number }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNumber = parseInt(age);
    if (!name || isNaN(ageNumber)) {
      alert('Invalid input');
      return;
    }
    onAddUser({ name, age: ageNumber });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
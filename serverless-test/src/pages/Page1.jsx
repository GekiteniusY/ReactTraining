import React, { createContext, useContext, useState } from 'react';

// UserContext の作成
const UserContext = createContext();

function Page1(params) {
      const [user, setUser] = useState('John Doe');

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>useContext Sample</h1>
        <UserProfile />
        <button onClick={() => setUser('Jane Smith')}>Change User</button>
      </div>
    </UserContext.Provider>
  );
}

function UserProfile() {
  // UserContext を利用して現在のユーザー名を取得
  const user = useContext(UserContext);

  return <p>Current user: {user}</p>;
}


export default Page1();

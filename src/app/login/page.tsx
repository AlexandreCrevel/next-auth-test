'use client';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    console.log(userName, password);
    const res = await signIn('credentials', {
      username: userName,
      password: password,
      redirect: true,
      callbackUrl: '/',
    });
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600'>
      <div className='px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type='text'
          placeholder='Username'
          className='px-2 py-1 border border-gray-300 rounded-md'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          className='px-2 py-1 border border-gray-300 rounded-md'
        />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;

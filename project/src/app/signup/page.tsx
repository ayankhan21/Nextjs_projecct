"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const Signup = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    }
  }, [user])

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("SIGNUP SUCCESS", response.data)
      router.push("/login")
    } catch (error: any) {
      console.log("SIGNUP FAILED !! ERROR", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? 'PROCESSING...' : 'SIGNUP'}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input className=" p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id='username' value={user.username} onChange={(e) => {
        setUser({ ...user, username: e.target.value })
      }} placeholder='username' />

      <label htmlFor="email">email</label>
      <input className=" p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id='email' value={user.email} onChange={(e) => {
        setUser({ ...user, email: e.target.value })
      }} placeholder='email' />

      <label htmlFor="password">password</label>
      <input className=" p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" id='password' value={user.password} onChange={(e) => {
        setUser({ ...user, password: e.target.value })
      }} placeholder='password' />

      <button onClick={onSignup} className="p-2 border border-blue-500 rounded">
        {buttonDisabled ? "Enter data" : " Sign Up "}
      </button>
      <Link href='/login'>Visit Login</Link>
      <button onClick={() => {
        router.push("/login")
      }}>click</button>
    </div>
  )
}

export default Signup;
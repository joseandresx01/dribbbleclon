import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Espera a que se resuelva la promesa de autenticación
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
      // Solo redirige si la autenticación es exitosa
      navigate('/Principal');
    } catch (err) {
      // Maneja el error si la autenticación falla
      console.error("Error en el inicio de sesión:", err.message);
      alert("Error en el inicio de sesión: " + err.message);
    }
  };

  return (
    <div className='contenedor2'>
      <form className='login flex flex-col justify-center items-center gap-5 pt-24 pb-24' action="" onSubmit={handleSubmit}>
        <h1 className='text-3xl font-semibold'>Sign in to Dribbble</h1>
        <button className='google flex justify-center items-center gap-5 border-2 rounded-full pt-4 pb-4 pl-32 pr-32 font-semibold'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" className="icon ">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
          </svg>
          Sign in with Google
        </button>
        <h1 className='or flex items-center text-sm gap-5 text-gray-400'><hr className='w-32' /> or sign in with email <hr className='w-32' /></h1>
        <h1 className='ormedia text-gray-400 hidden'><hr className='w-20' /> or sign in with email <hr className='w-20' /></h1>
        <div className='iusername flex flex-col gap-2'>
          <h1 className='font-semibold'>Username or Email</h1>
          <input onChange={(e) => setEmail(e.target.value)} className='imail pt-4 pb-4 pl-5 pr-60 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' type="text" required />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='piasword flex gap-80'>
            <h1 className='font-semibold'>password</h1>
            <a href="https://dribbble.com/password_resets/new"><span className='forgot underline'>Forgot?</span></a>
          </div>
          <input onChange={(e) => setPassword(e.target.value)} className='paswor pt-4 pb-4 pl-5 pr-60 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' type="password" required />
        </div>
        <div className='pt-3'>
          <input className='saign bg-black text-white pt-4 pb-4 pl-48 pr-48 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300' type="submit" value="Sign in" />
        </div>
        <h1 className='flex gap-1'>Dont have a account?<span className='underline'><Link to="/Signin">Sign up</Link></span></h1>
      </form>
    </div>
  )
}

export default Login;
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Espera a que se resuelva la promesa de creación de usuario
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Cuenta creada exitosamente");
            // Solo redirige si la cuenta se crea correctamente
            navigate('/Login');
        } catch (err) {
            // Maneja el error si la creación de la cuenta falla
            console.error("Error al crear la cuenta:", err.message);
            alert("Error al crear la cuenta: " + err.message);
        }
    };

    return (
        <div className='contenedor5 login flex flex-col justify-center items-center pt-40 gap-10'>
            <h1 className='text-3xl font-semibold'>Sign up to Dribbble</h1>
            <button className='google flex justify-center items-center bg-black text-white gap-5 border-2 rounded-full pt-4 pb-4 pl-32 pr-32 font-semibold hover:bg-gray-700 transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" className="icon ">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
                </svg>
                Sign up with Google
            </button>
            <h1 className='or flex items-center text-sm gap-5 text-gray-400'><hr className='w-48' />or<hr className='w-48' /></h1>
            <h1 className='ormedia text-gray-400 hidden'><hr className='acheere w-32' />or<hr className='acheere w-32' /></h1>
            <button className="google flex justify-center items-center gap-5 border-2 rounded-full pt-4 pb-4 pl-36 pr-36 font-semibold" onClick={() => document.getElementById('my_modal_3').showModal()}>Continue with email</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
                    </form>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h1 className='text-3xl pt-5 pb-5'>Sign up to Dribbble</h1>
                        <div className='nombres flex gap-4'>
                            <div className='flex flex-col gap-2'>
                                <h1>Name</h1>
                                <input className='pt-4 pb-4 pl-5 pr-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' placeholder="" type="text" name="nombre" required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1>Username</h1>
                                <input className='pt-4 pb-4 pl-5 pr-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' placeholder="" type="text" name="usuario" required />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 pt-3'>
                            <h1>Email</h1>
                            <input onChange={(e) => setEmail(e.target.value)} className='pt-4 pb-4 pl-3 pr-32 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' placeholder="" type="email" name="email" required />
                        </div>
                        <div className='flex flex-col gap-2 pt-3'>
                            <h1>Password</h1>
                            <input onChange={(e) => setPassword(e.target.value)} className='pt-4 pb-4 pl-3 pr-32 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' placeholder="6+ characters" type="password" name="contraseña" required />
                        </div>
                        <div className='flex gap-1 pt-3'>
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <h1>
                                <label htmlFor="user_agree_to_terms">
                                    I agree whit Dribbble's <a target="_blank" href="/terms"><span className='underline'>Terms of Service,</span></a> <a target="_blank" href="/privacy"><span className='underline'>Privacy Policy,</span></a> and default <a target="_blank" href="/notifications"><span className='underline'>Notification Settings.</span></a>
                                </label>
                            </h1>
                        </div>
                        <div className='pt-3'>
                            <input className='create bg-black text-white pt-4 pb-4 pl-44 pr-44 rounded-full hover:bg-gray-700 transition-colors duration-300' type="submit" value="Create Account" />
                        </div>
                        <div className='flex justify-center pt-3'>
                            <h1 className='flex gap-1'>Already have an account? <span className='underline'><a href="/Login">Sign in</a></span></h1>
                        </div>
                    </form>

                </div>
            </dialog>
            <div className='by flex flex-col items-center'>
                <p>By creating an account you agree with our <a href="https://dribbble.com/terms" className='underline'>Terms of Service,</a><a href="https://dribbble.com/privacy" className='underline'>Privacy Policy,</a></p>
                <p>and our default <a href="https://dribbble.com/notifications" className='underline'>Notification Settings.</a></p>
            </div>
            <h1 className='sign flex gap-1'>Already have an account?<span className='underline'><Link to="/Login">Sign in</Link></span></h1>
        </div>
    )
}

export default Signin
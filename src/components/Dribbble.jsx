import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import persona1 from '../assets/persona1.png';
import persona2 from '../assets/persona2.png';
import persona3 from '../assets/persona3.mp4';
import persona4 from '../assets/persona4.jpg';
import persona5 from '../assets/persona5.png';
import persona6 from '../assets/persona6.mp4';
import persona7 from '../assets/persona7.jpg';
import persona8 from '../assets/persona8.jpg';
import persona9 from '../assets/persona9.mp4';
import persona10 from '../assets/persona10.png';
import persona11 from '../assets/persona11.png';
import categoria1 from '../assets/categoria1.jpg';
import categoria2 from '../assets/categoria2.jpg';
import categoria3 from '../assets/categoria3.jpg';
import categoria4 from '../assets/categoria4.jpg';
import categoria5 from '../assets/categoria5.jpg';
import categoria6 from '../assets/categoria6.jpg';
import categoria7 from '../assets/categoria7.jpg';
import categoria8 from '../assets/categoria8.jpg';
import img1 from '../assets/img1.gif';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import img19 from '../assets/img19.gif';
import img20 from '../assets/img20.jpg';
import img21 from '../assets/img21.png';
import img22 from '../assets/img22.png';
import img23 from '../assets/img23.png';
import img24 from '../assets/img24.png';
import img25 from '../assets/img25.gif';



const Dribbble = () => {

    // const [usuarios, setUsuarios] = useState([]);

    // useEffect(() => {
    //     // Aquí puedes hacer la llamada a la API para obtener usuarios y almacenarlos en el estado
    //     fetch('https://randomuser.me/api/?results=25')
    //         .then(response => response.json())
    //         .then(data => setUsuarios(data.results));
    // }, []);




    return (
        <div className='contenedor1'>
            <ul className='navbar flex justify-around items-center gap-36 pt-6 text-sm'>
                <div className='burguer text-black hidden'>
                    <label className="btn btn-circle swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />
                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        {/* close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                </div>
                <div className='categorias1 flex gap-9 font-semibold'>
                    <li>
                        <div className="dropdown dropdown-hover">
                            <div className='flex gap-1 hover:text-gray-500 transition-colors duration-300' tabIndex={0} role="button">Find designers <svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-56 mt-5 pt-6 pb-8 pl-4 pr-8 shadow ">
                                <li><a href='https://dribbble.com/designers text-base'>Designer Search</a></li>
                                <p className='text-xs pl-4 text-gray-500 whitespace-nowrap'>Quickly find your next designer</p>
                                <li><a href='https://dribbble.com/jobs/new text-base'>Post a job</a></li>
                                <p className='text-xs pl-4 text-gray-500'>The #1 job board for design...</p>
                            </ul>
                        </div>
                    </li>
                    <li className='hover:text-gray-500 transition-colors duration-300'><a href="https://dribbble.com/shots/popular">Inspiration</a></li>
                    <li className='hover:text-gray-500 transition-colors duration-300'><a href="https://dribbble.com/jobs">Jobs</a></li>
                    <li className='hover:text-gray-500 transition-colors duration-300'><a href="https://dribbble.com/pro">Go Pro</a></li>
                </div>
                <li className='logo pl-24'>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 210 59" fill="none" className="fill-current">
                            <title>Dribbble: the community for graphic design</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M206.622 31.928C207.065 31.4116 207.85 31.4352 208.253 31.986H208.25L209.784 34.0834C210.075 34.4864 210.073 35.0425 209.769 35.4349C207.106 38.8893 202.44 42.2143 196.81 42.5359C192.366 42.7887 188.701 41.1051 186.706 37.9221C186.311 37.2925 185.44 37.2557 184.997 37.8511C182.63 41.0286 179.766 43.5134 176.782 43.6845C171.467 43.9876 169.966 40.4228 171.28 32.563C171.412 31.7805 170.726 31.1192 169.987 31.3141C168.885 31.6065 167.715 31.7356 166.528 31.633C166.034 31.5907 165.571 31.8912 165.422 32.3811C163.455 38.8418 158.774 44.8518 152.715 45.1997C148.847 45.421 143.069 43.205 143.647 33.9462C143.695 33.1927 143.019 32.5999 142.323 32.8106C141.11 33.1795 139.804 33.3534 138.474 33.2401C137.981 33.1979 137.52 33.4983 137.371 33.9885C135.404 40.449 130.723 46.4592 124.664 46.8068C120.796 47.0282 115.018 44.8124 115.596 35.5536C115.644 34.7998 114.968 34.207 114.272 34.418C113.059 34.7869 111.753 34.9634 110.423 34.8473C109.93 34.8053 109.469 35.1057 109.32 35.5956C107.352 42.0564 102.672 48.0664 96.6132 48.4142C93.8613 48.5723 90.1398 47.4945 88.4308 43.5264C88.1016 42.7599 87.1144 42.6438 86.6257 43.3105C84.2334 46.5751 81.3193 49.152 78.2762 49.3259C75.1571 49.505 73.4509 48.2535 72.7091 46.0216C72.4458 45.2339 71.4609 45.0467 70.9293 45.6712C68.8002 48.1744 66.3749 50.0082 63.9216 50.1479C60.1393 50.3666 57.9619 47.563 57.7823 44.1667C57.5747 40.204 59.2887 35.564 61.2025 30.4999C61.4684 29.7964 60.9873 29.0348 60.2608 29.0032C59.157 28.956 57.8963 28.8399 56.7113 28.6185C56.1771 28.5159 55.6583 28.8479 55.5063 29.3907C53.243 37.4716 49.7771 45.392 46.8529 50.074C46.5263 50.5984 45.8505 50.7381 45.3593 50.377L43.1264 48.7331C42.6682 48.393 42.5441 47.7397 42.8504 47.247C47.0759 40.478 50.8278 29.8807 52.1215 22.0421C52.2025 21.5415 52.61 21.17 53.0986 21.141L56.0683 20.9697C56.7493 20.9302 57.2861 21.5652 57.162 22.2634L57.1493 22.3372C57.0379 22.959 57.4532 23.5439 58.0532 23.6257C60.7164 23.992 64.6963 24.0366 67.3975 23.9313C68.157 23.9023 68.6938 24.6875 68.4178 25.4226C66.2507 31.1876 63.3469 39.1765 63.5139 42.3382C63.5899 43.7662 64.2204 44.5462 65.3291 44.4829C67.4508 44.3619 70.7141 40.0959 73.1876 35.3455C73.2331 35.261 73.2659 35.169 73.2862 35.0741C74.1196 31.3543 75.3565 27.2068 76.6061 23.0163L76.6837 22.7561C76.8128 22.3188 77.1901 22.0131 77.6306 21.9868L81.1876 21.7839C81.9219 21.7417 82.4712 22.4795 82.2485 23.2093C82.0654 23.8112 81.883 24.409 81.7023 25.0014C78.5723 35.2603 75.9438 43.8759 79.4838 43.6742C81.7978 43.5422 85.0764 39.6164 87.8966 34.0279C87.9421 33.9356 87.9751 33.8381 87.9954 33.7355C88.1372 33.0055 88.3092 32.2416 88.5195 31.4432C90.1639 24.8753 92.0286 18.3691 93.8955 11.855C94.4717 9.8446 95.0481 7.83341 95.6182 5.81945C95.7449 5.37417 96.1245 5.06062 96.57 5.03426L100.221 4.82611C100.963 4.78396 101.512 5.52962 101.279 6.26474C99.8208 10.8388 98.2967 15.7106 96.8487 20.4006C96.5448 21.3887 97.603 22.2107 98.4386 21.6416C99.8791 20.6562 101.545 20.0027 103.158 19.9105C107.267 19.676 110.064 23.0565 110.332 28.1496C110.347 28.4184 110.363 28.7082 110.37 29.0032C110.385 29.5673 110.808 30.023 111.348 30.0704C113.282 30.2417 115.259 29.6673 116.786 28.3051C116.943 28.1654 117.049 27.9757 117.102 27.7701C118.616 21.8916 120.287 16.0568 121.959 10.2147C122.532 8.21455 123.105 6.21353 123.672 4.20956C123.798 3.76427 124.178 3.45072 124.624 3.42438L128.274 3.21623C129.016 3.17408 129.566 3.91972 129.333 4.65484C127.874 9.22892 126.35 14.1007 124.902 18.7907C124.598 19.7788 125.657 20.6008 126.492 20.0317C127.933 19.0463 129.599 18.3929 131.211 18.3006C135.32 18.0662 138.117 21.4466 138.386 26.5399C138.401 26.8084 138.416 27.0985 138.424 27.3935C138.436 27.9573 138.862 28.4132 139.401 28.4607C141.335 28.6318 143.312 28.0573 144.839 26.6951C144.996 26.5557 145.102 26.3659 145.156 26.1604C146.67 20.2818 148.34 14.4471 150.013 8.6051C150.586 6.60484 151.158 4.60372 151.725 2.59968C151.852 2.15439 152.232 1.84085 152.677 1.8145L156.328 1.60635C157.07 1.56419 157.619 2.30985 157.386 3.04497C155.928 7.61902 154.404 12.4908 152.956 17.1808C152.652 18.1689 153.71 18.991 154.546 18.4219C155.986 17.4364 157.652 16.783 159.265 16.6908C163.374 16.4563 166.171 19.8367 166.44 24.9299C166.455 25.2013 166.47 25.4885 166.477 25.7835C166.493 26.3447 166.913 26.8032 167.452 26.8507C169.323 27.0166 171.237 26.4844 172.741 25.2171C172.908 25.0774 173.024 24.8798 173.08 24.6637C174.804 18.0187 177.336 9.31324 179.777 0.981894C179.906 0.541877 180.285 0.236236 180.726 0.209888L184.344 0.0017367C185.078 -0.0404207 185.627 0.692063 185.407 1.42191C182.047 12.5778 179.308 22.3372 177.797 28.0944C175.789 35.9039 175.711 38.1567 177.994 38.025C179.911 37.9143 182.493 35.1952 184.928 31.0847C185.025 30.924 185.075 30.7397 185.083 30.5526C185.402 22.324 190.447 14.8385 197.946 14.409C202.969 14.1218 205.721 17.916 205.918 21.6495C206.293 28.7767 199.248 33.3324 192.42 32.9107C191.625 32.8606 191.047 33.7145 191.397 34.4574C192.351 36.4967 194.359 37.6352 197.787 37.4374C201.048 37.2531 204.468 34.439 206.622 31.928ZM93.7548 33.9278C92.1345 40.4228 94.1017 42.9652 96.646 42.8203C100.823 42.5805 104.864 34.9263 104.553 29.019C104.416 26.4396 102.907 25.0958 101.145 25.1961C98.2106 25.3646 95.0512 28.745 93.7548 33.9278ZM121.808 32.3207C120.188 38.8154 122.155 41.3581 124.7 41.2131H124.697C128.874 40.9734 132.917 33.3192 132.606 27.4119C132.472 24.8324 130.96 23.4886 129.198 23.5887C126.264 23.7574 123.105 27.1379 121.808 32.3207ZM149.862 30.7133C148.242 37.2082 150.209 39.7509 152.753 39.606H152.751C156.925 39.3662 160.971 31.712 160.66 25.8047C160.525 23.2251 159.014 21.8814 157.252 21.9815C154.318 22.1501 151.158 25.5307 149.862 30.7133ZM200.584 22.2239C200.559 20.5218 199.513 19.2887 197.817 19.3862H197.815C194.483 19.5785 191.875 23.1856 191.045 27.562C190.913 28.2577 191.422 28.9058 192.103 28.8899C196.407 28.7821 200.721 25.9416 200.584 22.2239ZM44.3525 25.3837C43.9171 12.1962 35.3423 3.49339 22.6712 3.94658C17.2307 4.19426 11.0052 6.25733 6.32164 9.9461C5.88113 10.2939 5.76719 10.9315 6.06593 11.4163L8.05331 14.6519C8.39254 15.2052 9.11407 15.3185 9.60776 14.9075C13.1724 11.9459 18.0383 10.0041 22.7193 9.79855C31.403 9.43757 37.7828 14.9971 38.1551 25.7367C38.6209 38.2417 30.2157 52.5461 16.7091 53.3207C16.2382 53.3471 15.7471 53.3577 15.2559 53.3577C14.5673 53.3577 14.0585 52.6858 14.2306 51.9901C16.8357 41.4744 19.8763 30.1974 22.9776 19.7029C23.1928 18.973 22.6459 18.2458 21.9143 18.288L17.9648 18.5146C17.5218 18.5409 17.142 18.8492 17.0129 19.2918C14.0331 29.6045 11.0508 40.7895 8.36723 51.284C8.21279 51.89 7.59761 52.2379 7.02544 52.0427C5.62543 51.566 4.34693 51.0232 3.2583 50.3881C2.73677 50.0825 2.07601 50.2987 1.80765 50.8571L0.11142 54.4037C-0.139216 54.9281 0.0455967 55.5709 0.539275 55.8527C4.38489 58.0345 10.223 59.2806 16.0914 58.9462C35.4032 57.8393 44.864 40.0015 44.3525 25.3889V25.3837ZM82.3044 9.18082C79.955 9.31518 77.8713 11.9553 78.0183 14.7377C78.1143 16.5715 79.2917 17.7967 81.1195 17.694C83.4689 17.5596 85.6106 14.7798 85.4714 12.1318C85.3754 10.298 84.0005 9.08333 82.3044 9.18082Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </li>
                <div className='buscador flex gap-7 items-center'>
                    <svg className='lupa hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    <li className='search'>
                        <input className='pt-3 pb-3 pl-6 pr-20 rounded-3xl transition-all duration-200 focus:outline-none focus:border-pink-100 focus:border-4' type="search" placeholder="Q  Search..." />
                    </li>
                    <li className='loginbutton font-semibold hover:text-gray-500 transition-colors duration-300'><Link to="/Login">Log in</Link></li>
                    <li className='signin bg-black rounded-3xl pt-3 pb-4 pr-6 pl-6 text-white font-semibold hover:bg-gray-700 transition-colors duration-300'><Link to="/Signin">Sign up</Link></li>
                </div>
            </ul>
            <div className='pagina'>
                <div className='seccion1 flex flex-col justify-center items-center gap-10 mt-28'>
                    <div>
                        <a className='textorgb bg-orange-200 text-black rounded-full pt-2 pb-2 pl-5 pr-5 font-semibold hover:text-gray-700 transition-colors duration-300' href="">Over 3 million ready-to-work creatives!</a>
                    </div>
                    <div className='words flex flex-col items-center font-serif'>
                        <h1 className='world text-7xl'>The world’s destination</h1>
                        <h1 className='design text-7xl'>for design</h1>
                    </div>
                    <div>
                        <p className='inspired text-xl font-semibold'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                        <div className='inspiredmedia hidden'>
                            <p className='text-lg font-semibold'>Get inspired by the work of millions</p>
                            <p className='text-lg font-semibold'>of top-rated designers & agencies</p>
                            <p className='text-lg font-semibold'>around the world.</p>
                        </div>
                    </div>
                    <Link to="/Signin"><button className='bg-black text-white rounded-full pt-4 pb-4 pl-7 pr-7 hover:bg-gray-700 transition-colors duration-300'>Get started</button></Link>
                </div>
                <div className='carrusel relative  w-[100%] h-[60vh] pt-20'>
                    <div className='center relative  center-part1  w-[100%] h-[50vh] inline-block whitespace-nowrap overflow-x-auto overflow-y-hidden z-10'>
                        <div className='centerp1 w-full h-full  inline-block whitespace-nowrap overflow-x-hidden overflow-y-hidden items-center content-center'>
                            <div className='imgcarr'><img src={persona1} alt="" /></div>
                            <div className='imgcarr'><img src={persona2} alt="" /></div>
                            <div className='imgcarr'><video autoPlay loop muted src={persona3}></video></div>
                            <div className='imgcarr'><img src={persona4} alt="" /></div>
                            <div className='imgcarr'><img src={persona5} alt="" /></div>
                            <div className='imgcarr'><video autoPlay loop muted src={persona6}></video></div>
                            <div className='imgcarr'><img src={persona7} alt="" /></div>
                            <div className='imgcarr'><img src={persona8} alt="" /></div>
                            <div className='imgcarr'><video autoPlay loop muted src={persona9}></video></div>
                            <div className='imgcarr'><img src={persona10} alt="" /></div>
                            <div className='imgcarr'><img src={persona11} alt="" /></div>
                        </div>
                    </div>
                </div>


                <div className='seccion2 flex flex-col justify-center items-center text-6xl mt-32 mb-32 gap-10'>
                    <h1 className='explore pb-10'>Explore inspiring designs</h1>
                    <div className='seccionesimg flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img1} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Sava Stoic</p>
                                    </div>
                                    {/* {usuarios[0] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[0].picture.large} alt={`${usuarios[0].name.first} ${usuarios[0].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[0].name.first} ${usuarios[0].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>58</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>8.1k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img2} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Alfrey Davilla | van...</p>
                                    </div>
                                    {/* {usuarios[1] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[1].picture.large} alt={`${usuarios[1].name.first} ${usuarios[1].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[1].name.first} ${usuarios[1].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>37</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>3.5k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img3} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Jeroen van Eerden</p>
                                    </div>
                                    {/* {usuarios[2] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[0].picture.large} alt={`${usuarios[2].name.first} ${usuarios[2].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[2].name.first} ${usuarios[2].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>33</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>4.6k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img4} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Dalibor Pajic</p>
                                    </div>
                                    {/* {usuarios[3] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[3].picture.large} alt={`${usuarios[3].name.first} ${usuarios[3].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[3].name.first} ${usuarios[3].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>14</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>841</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='seccionesimg2 flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img5} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Mary Maka</p>
                                    </div>
                                    {/* {usuarios[4] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[4].picture.large} alt={`${usuarios[4].name.first} ${usuarios[4].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[4].name.first} ${usuarios[4].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>51</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>3.7k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img6} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Gregory Grigoriou</p>
                                    </div>
                                    {/* {usuarios[5] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[5].picture.large} alt={`${usuarios[5].name.first} ${usuarios[5].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[5].name.first} ${usuarios[5].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>22</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>2.1k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img7} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Zilligen Design Stu...</p>
                                    </div>
                                    {/* {usuarios[6] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[6].picture.large} alt={`${usuarios[6].name.first} ${usuarios[6].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[6].name.first} ${usuarios[6].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>18</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>2.1k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img8} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Dan Lehman | QRS...</p>
                                    </div>
                                    {/* {usuarios[7] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[7].picture.large} alt={`${usuarios[7].name.first} ${usuarios[7].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[7].name.first} ${usuarios[7].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>20</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>1.7k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='seccionesimg3 flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img9} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Dipa Inhouse</p>
                                    </div>
                                    {/* {usuarios[8] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[8].picture.large} alt={`${usuarios[8].name.first} ${usuarios[8].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[8].name.first} ${usuarios[8].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>110</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>8.6k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img10} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Josiah Z.</p>
                                    </div>
                                    {/* {usuarios[9] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[9].picture.large} alt={`${usuarios[9].name.first} ${usuarios[9].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[9].name.first} ${usuarios[9].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>30</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>862</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img11} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Milad Design Co.</p>
                                    </div>
                                    {/* {usuarios[10] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[10].picture.large} alt={`${usuarios[10].name.first} ${usuarios[10].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[10].name.first} ${usuarios[10].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>127</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>13.9k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img12} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Sticker Mule</p>
                                    </div>
                                    {/* {usuarios[11] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[11].picture.large} alt={`${usuarios[11].name.first} ${usuarios[11].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[11].name.first} ${usuarios[11].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>51</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>2.2k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='seccionesimg4 flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img13} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>sourav barua</p>
                                    </div>
                                    {/* {usuarios[12] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[12].picture.large} alt={`${usuarios[12].name.first} ${usuarios[12].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[12].name.first} ${usuarios[12].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>21</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>1.1k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img14} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Dipa Inhouse</p>
                                    </div>
                                    {/* {usuarios[13] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[13].picture.large} alt={`${usuarios[13].name.first} ${usuarios[13].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[13].name.first} ${usuarios[13].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>37</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>8.1k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img15} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Gleb Kuznetsov</p>
                                    </div>
                                    {/* {usuarios[14] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[14].picture.large} alt={`${usuarios[14].name.first} ${usuarios[14].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[14].name.first} ${usuarios[14].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>87</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>9.3k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img16} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Focus Lab + Odi</p>
                                    </div>
                                    {/* {usuarios[15] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[15].picture.large} alt={`${usuarios[15].name.first} ${usuarios[15].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[15].name.first} ${usuarios[15].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>18</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>1.4k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='seccionesimg5 flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img17} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Fabrizio Boni</p>
                                    </div>
                                    {/* {usuarios[16] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[16].picture.large} alt={`${usuarios[16].name.first} ${usuarios[16].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[16].name.first} ${usuarios[16].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>27</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>3.9k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img18} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Graphtheory</p>
                                    </div>
                                    {/* {usuarios[17] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[17].picture.large} alt={`${usuarios[17].name.first} ${usuarios[17].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[17].name.first} ${usuarios[17].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>24</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>798</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img19} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Geex Arts</p>
                                    </div>
                                    {/* {usuarios[18] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[18].picture.large} alt={`${usuarios[18].name.first} ${usuarios[18].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[18].name.first} ${usuarios[18].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>102</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>13.2k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img20} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Tyler Pate</p>
                                    </div>
                                    {/* {usuarios[19] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[19].picture.large} alt={`${usuarios[19].name.first} ${usuarios[19].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[19].name.first} ${usuarios[19].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>41</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>2.3k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='seccionesimg6 flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img21} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>RonDesignLab</p>
                                    </div>
                                    {/* {usuarios[20] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[20].picture.large} alt={`${usuarios[20].name.first} ${usuarios[20].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[20].name.first} ${usuarios[20].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>101</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>11.8k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img22} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Tubik</p>
                                    </div>
                                    {/* {usuarios[21] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[21].picture.large} alt={`${usuarios[21].name.first} ${usuarios[21].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[21].name.first} ${usuarios[21].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>63</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>4.8k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img23} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Nagual</p>
                                    </div>
                                    {/* {usuarios[22] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[22].picture.large} alt={`${usuarios[22].name.first} ${usuarios[22].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[22].name.first} ${usuarios[22].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>86</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>9.5k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img24} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Gert van Duinen</p>
                                    </div>
                                    {/* {usuarios[23] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[23].picture.large} alt={`${usuarios[23].name.first} ${usuarios[23].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[23].name.first} ${usuarios[23].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>PRO</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>33</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>1.9k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='seccionesimg7 flex justify-center gap-8'>
                        <div className='img1'>
                            <img className='imgw w-[330px] h-[230px] rounded-lg' src={img25} alt="" />
                            <div className='infousuarios flex gap-3 items-center w-[327px] pt-2'>
                                <div className='usuario'>
                                    <div className='flex items-center gap-3'>
                                        <img className='rounded-full w-7' src={`https://picsum.photos/70?random=${Math.random()}`} />
                                        <p className='text-base'>Bear in Studio</p>
                                    </div>
                                    {/* {usuarios[24] && (
                                        <div className='flex items-center gap-3'>
                                            <img className='rounded-full w-7' src={usuarios[24].picture.large} alt={`${usuarios[24].name.first} ${usuarios[24].name.last}`} />
                                            <p className='text-lg'>{`${usuarios[24].name.first} ${usuarios[24].name.last}`}</p>
                                        </div>
                                    )} */}
                                </div>
                                <a href="https://dribbble.com/pro" className='text-xs text-white bg-gray-300 rounded-sm pt-0 pb-0 pr-1 pl-1 hover:bg-black transition-colors duration-300'>TEAM</a>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon hover:text-pink-400 transition-colors duration-300">
                                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <h1 className='text-xs'>23</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                                            <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                                            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                                        </svg>
                                        <h1 className='text-xs'>3.3k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-black rounded-full text-base pt-5 pb-5 pr-5 pl-5 hover:bg-gray-200 transition-colors duration-300'>
                        <a href="https://dribbble.com/shots/popular">
                            <button>Browse more inspiration</button>
                        </a>
                    </div>

                </div>


                <div className='seccion3 flex flex-col justify-center items-center pt-32 pb-32'>
                    <h2 className='find text-7xl font-serif'>Find your next <br /> designer today</h2>
                    <div className='leading flex flex-col items-center pt-10 pb-10 text-xl'>
                        <p>The world’s leading brands use Dribbble to hire creative talent.</p>
                        <p>Browse millions of top-rated portfolios to find your perfect</p>
                        <p>creative match.</p>
                    </div>
                    <div className='botones flex gap-4 pb-10'>
                        <button className='bg-black text-white rounded-full pt-4 pb-4 pr-5 pl-5 font-semibold hover:bg-gray-700 transition-colors duration-300'><Link to="/Signin">Get started now</Link></button>
                        <button className='bg-white text-black rounded-full pt-4 pb-4 pr-5 pl-5 font-semibold hover:bg-gray-200 transition-colors duration-300'><a href="https://dribbble.com/hiring">Learn about hiring</a></button>
                    </div>
                    <p className='text-xl'>Are you a designer? <Link to="/Signin"><span className='underline'>Join Dribbble</span></Link></p>
                </div>

                <div className='carrusel2 relative  w-[100%] h-[60vh] pt-20'>
                    <div className='center2 relative  center-part1  w-[100%] h-[50vh] inline-block whitespace-nowrap overflow-x-auto overflow-y-hidden z-10'>
                        <div className='centerp2 w-full h-full  inline-block whitespace-nowrap overflow-x-hidden overflow-y-hidden items-center content-center'>
                            <div className='imgcarr2'><img src={categoria1} alt="" /><h1 className='pt-4 font-semibold'>Mobile</h1></div>
                            <div className='imgcarr2'><img src={categoria2} alt="" /><h1 className='pt-4 font-semibold'>Print</h1></div>
                            <div className='imgcarr2'><img src={categoria3} alt="" /><h1 className='pt-4 font-semibold'>Typography</h1></div>
                            <div className='imgcarr2'><img src={categoria4} alt="" /><h1 className='pt-4 font-semibold'>Product Design</h1></div>
                            <div className='imgcarr2'><img src={categoria5} alt="" /><h1 className='pt-4 font-semibold'>Web design</h1></div>
                            <div className='imgcarr2'><img src={categoria6} alt="" /><h1 className='pt-4 font-semibold'>Animation</h1></div>
                            <div className='imgcarr2'><img src={categoria7} alt="" /><h1 className='pt-4 font-semibold'>Ilustration</h1></div>
                            <div className='imgcarr2'><img src={categoria8} alt="" /><h1 className='pt-4 font-semibold'>Branding</h1></div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='footer flex flex-col justify-center items-center pt-2'>
                <div className='footerinfo'>
                    <ul className='infof flex gap-20 items-center font-semibold'>
                        <div className='logod'>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 210 59" fill="none" className="fill-current">
                                    <title>Dribbble: the community for graphic design</title>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M206.622 31.928C207.065 31.4116 207.85 31.4352 208.253 31.986H208.25L209.784 34.0834C210.075 34.4864 210.073 35.0425 209.769 35.4349C207.106 38.8893 202.44 42.2143 196.81 42.5359C192.366 42.7887 188.701 41.1051 186.706 37.9221C186.311 37.2925 185.44 37.2557 184.997 37.8511C182.63 41.0286 179.766 43.5134 176.782 43.6845C171.467 43.9876 169.966 40.4228 171.28 32.563C171.412 31.7805 170.726 31.1192 169.987 31.3141C168.885 31.6065 167.715 31.7356 166.528 31.633C166.034 31.5907 165.571 31.8912 165.422 32.3811C163.455 38.8418 158.774 44.8518 152.715 45.1997C148.847 45.421 143.069 43.205 143.647 33.9462C143.695 33.1927 143.019 32.5999 142.323 32.8106C141.11 33.1795 139.804 33.3534 138.474 33.2401C137.981 33.1979 137.52 33.4983 137.371 33.9885C135.404 40.449 130.723 46.4592 124.664 46.8068C120.796 47.0282 115.018 44.8124 115.596 35.5536C115.644 34.7998 114.968 34.207 114.272 34.418C113.059 34.7869 111.753 34.9634 110.423 34.8473C109.93 34.8053 109.469 35.1057 109.32 35.5956C107.352 42.0564 102.672 48.0664 96.6132 48.4142C93.8613 48.5723 90.1398 47.4945 88.4308 43.5264C88.1016 42.7599 87.1144 42.6438 86.6257 43.3105C84.2334 46.5751 81.3193 49.152 78.2762 49.3259C75.1571 49.505 73.4509 48.2535 72.7091 46.0216C72.4458 45.2339 71.4609 45.0467 70.9293 45.6712C68.8002 48.1744 66.3749 50.0082 63.9216 50.1479C60.1393 50.3666 57.9619 47.563 57.7823 44.1667C57.5747 40.204 59.2887 35.564 61.2025 30.4999C61.4684 29.7964 60.9873 29.0348 60.2608 29.0032C59.157 28.956 57.8963 28.8399 56.7113 28.6185C56.1771 28.5159 55.6583 28.8479 55.5063 29.3907C53.243 37.4716 49.7771 45.392 46.8529 50.074C46.5263 50.5984 45.8505 50.7381 45.3593 50.377L43.1264 48.7331C42.6682 48.393 42.5441 47.7397 42.8504 47.247C47.0759 40.478 50.8278 29.8807 52.1215 22.0421C52.2025 21.5415 52.61 21.17 53.0986 21.141L56.0683 20.9697C56.7493 20.9302 57.2861 21.5652 57.162 22.2634L57.1493 22.3372C57.0379 22.959 57.4532 23.5439 58.0532 23.6257C60.7164 23.992 64.6963 24.0366 67.3975 23.9313C68.157 23.9023 68.6938 24.6875 68.4178 25.4226C66.2507 31.1876 63.3469 39.1765 63.5139 42.3382C63.5899 43.7662 64.2204 44.5462 65.3291 44.4829C67.4508 44.3619 70.7141 40.0959 73.1876 35.3455C73.2331 35.261 73.2659 35.169 73.2862 35.0741C74.1196 31.3543 75.3565 27.2068 76.6061 23.0163L76.6837 22.7561C76.8128 22.3188 77.1901 22.0131 77.6306 21.9868L81.1876 21.7839C81.9219 21.7417 82.4712 22.4795 82.2485 23.2093C82.0654 23.8112 81.883 24.409 81.7023 25.0014C78.5723 35.2603 75.9438 43.8759 79.4838 43.6742C81.7978 43.5422 85.0764 39.6164 87.8966 34.0279C87.9421 33.9356 87.9751 33.8381 87.9954 33.7355C88.1372 33.0055 88.3092 32.2416 88.5195 31.4432C90.1639 24.8753 92.0286 18.3691 93.8955 11.855C94.4717 9.8446 95.0481 7.83341 95.6182 5.81945C95.7449 5.37417 96.1245 5.06062 96.57 5.03426L100.221 4.82611C100.963 4.78396 101.512 5.52962 101.279 6.26474C99.8208 10.8388 98.2967 15.7106 96.8487 20.4006C96.5448 21.3887 97.603 22.2107 98.4386 21.6416C99.8791 20.6562 101.545 20.0027 103.158 19.9105C107.267 19.676 110.064 23.0565 110.332 28.1496C110.347 28.4184 110.363 28.7082 110.37 29.0032C110.385 29.5673 110.808 30.023 111.348 30.0704C113.282 30.2417 115.259 29.6673 116.786 28.3051C116.943 28.1654 117.049 27.9757 117.102 27.7701C118.616 21.8916 120.287 16.0568 121.959 10.2147C122.532 8.21455 123.105 6.21353 123.672 4.20956C123.798 3.76427 124.178 3.45072 124.624 3.42438L128.274 3.21623C129.016 3.17408 129.566 3.91972 129.333 4.65484C127.874 9.22892 126.35 14.1007 124.902 18.7907C124.598 19.7788 125.657 20.6008 126.492 20.0317C127.933 19.0463 129.599 18.3929 131.211 18.3006C135.32 18.0662 138.117 21.4466 138.386 26.5399C138.401 26.8084 138.416 27.0985 138.424 27.3935C138.436 27.9573 138.862 28.4132 139.401 28.4607C141.335 28.6318 143.312 28.0573 144.839 26.6951C144.996 26.5557 145.102 26.3659 145.156 26.1604C146.67 20.2818 148.34 14.4471 150.013 8.6051C150.586 6.60484 151.158 4.60372 151.725 2.59968C151.852 2.15439 152.232 1.84085 152.677 1.8145L156.328 1.60635C157.07 1.56419 157.619 2.30985 157.386 3.04497C155.928 7.61902 154.404 12.4908 152.956 17.1808C152.652 18.1689 153.71 18.991 154.546 18.4219C155.986 17.4364 157.652 16.783 159.265 16.6908C163.374 16.4563 166.171 19.8367 166.44 24.9299C166.455 25.2013 166.47 25.4885 166.477 25.7835C166.493 26.3447 166.913 26.8032 167.452 26.8507C169.323 27.0166 171.237 26.4844 172.741 25.2171C172.908 25.0774 173.024 24.8798 173.08 24.6637C174.804 18.0187 177.336 9.31324 179.777 0.981894C179.906 0.541877 180.285 0.236236 180.726 0.209888L184.344 0.0017367C185.078 -0.0404207 185.627 0.692063 185.407 1.42191C182.047 12.5778 179.308 22.3372 177.797 28.0944C175.789 35.9039 175.711 38.1567 177.994 38.025C179.911 37.9143 182.493 35.1952 184.928 31.0847C185.025 30.924 185.075 30.7397 185.083 30.5526C185.402 22.324 190.447 14.8385 197.946 14.409C202.969 14.1218 205.721 17.916 205.918 21.6495C206.293 28.7767 199.248 33.3324 192.42 32.9107C191.625 32.8606 191.047 33.7145 191.397 34.4574C192.351 36.4967 194.359 37.6352 197.787 37.4374C201.048 37.2531 204.468 34.439 206.622 31.928ZM93.7548 33.9278C92.1345 40.4228 94.1017 42.9652 96.646 42.8203C100.823 42.5805 104.864 34.9263 104.553 29.019C104.416 26.4396 102.907 25.0958 101.145 25.1961C98.2106 25.3646 95.0512 28.745 93.7548 33.9278ZM121.808 32.3207C120.188 38.8154 122.155 41.3581 124.7 41.2131H124.697C128.874 40.9734 132.917 33.3192 132.606 27.4119C132.472 24.8324 130.96 23.4886 129.198 23.5887C126.264 23.7574 123.105 27.1379 121.808 32.3207ZM149.862 30.7133C148.242 37.2082 150.209 39.7509 152.753 39.606H152.751C156.925 39.3662 160.971 31.712 160.66 25.8047C160.525 23.2251 159.014 21.8814 157.252 21.9815C154.318 22.1501 151.158 25.5307 149.862 30.7133ZM200.584 22.2239C200.559 20.5218 199.513 19.2887 197.817 19.3862H197.815C194.483 19.5785 191.875 23.1856 191.045 27.562C190.913 28.2577 191.422 28.9058 192.103 28.8899C196.407 28.7821 200.721 25.9416 200.584 22.2239ZM44.3525 25.3837C43.9171 12.1962 35.3423 3.49339 22.6712 3.94658C17.2307 4.19426 11.0052 6.25733 6.32164 9.9461C5.88113 10.2939 5.76719 10.9315 6.06593 11.4163L8.05331 14.6519C8.39254 15.2052 9.11407 15.3185 9.60776 14.9075C13.1724 11.9459 18.0383 10.0041 22.7193 9.79855C31.403 9.43757 37.7828 14.9971 38.1551 25.7367C38.6209 38.2417 30.2157 52.5461 16.7091 53.3207C16.2382 53.3471 15.7471 53.3577 15.2559 53.3577C14.5673 53.3577 14.0585 52.6858 14.2306 51.9901C16.8357 41.4744 19.8763 30.1974 22.9776 19.7029C23.1928 18.973 22.6459 18.2458 21.9143 18.288L17.9648 18.5146C17.5218 18.5409 17.142 18.8492 17.0129 19.2918C14.0331 29.6045 11.0508 40.7895 8.36723 51.284C8.21279 51.89 7.59761 52.2379 7.02544 52.0427C5.62543 51.566 4.34693 51.0232 3.2583 50.3881C2.73677 50.0825 2.07601 50.2987 1.80765 50.8571L0.11142 54.4037C-0.139216 54.9281 0.0455967 55.5709 0.539275 55.8527C4.38489 58.0345 10.223 59.2806 16.0914 58.9462C35.4032 57.8393 44.864 40.0015 44.3525 25.3889V25.3837ZM82.3044 9.18082C79.955 9.31518 77.8713 11.9553 78.0183 14.7377C78.1143 16.5715 79.2917 17.7967 81.1195 17.694C83.4689 17.5596 85.6106 14.7798 85.4714 12.1318C85.3754 10.298 84.0005 9.08333 82.3044 9.18082Z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                        <div className='extra flex gap-14'>
                            <li><a href="https://dribbble.com/for-designers">For designers</a></li>
                            <li><a href="https://dribbble.com/hiring">Hire talent</a></li>
                            <li><a href="https://dribbble.com/shots/popular">Inspiration</a></li>
                            <li><a href="https://dribbble.com/advertise">Advertising</a></li>
                            <li><a href="https://dribbble.com/stories">Blog</a></li>
                            <li><a href="https://dribbble.com/about">About</a></li>
                            <li><a href="https://dribbble.com/careers">Careers</a></li>
                            <li><a href="https://support.dribbble.com/hc/en-us">Support</a></li>
                        </div>
                        <div className='redes flex w-28 gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="agt9neyawdckqhw96vyz6me64e1sjnbs" role="img" viewBox="0 0 24 24" className="icon "><title id="agt9neyawdckqhw96vyz6me64e1sjnbs">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="atozrjl5ljakq59ttoih8ihuxryns3le" role="img" viewBox="0 0 24 24" className="icon "><title id="atozrjl5ljakq59ttoih8ihuxryns3le">Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" role="img" className="icon "><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="aruw9aijg58f1ubxjj821g51he79crtn" role="img" viewBox="0 0 24 24" className="icon "><title id="aruw9aijg58f1ubxjj821g51he79crtn">Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path></svg>
                        </div>
                    </ul>
                </div>
                <div className='last flex gap-[530px] p-11'>
                    <div>
                        <ul className='terms flex gap-5'>
                            <li>© 2024 Dribbble</li>
                            <li><a href="https://dribbble.com/terms">Terms</a></li>
                            <li><a href="https://dribbble.com/privacy">Privacy</a></li>
                            <li><a href="https://dribbble.com/cookie-policy">Cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='personal flex gap-5'>
                            <li><a href="https://dribbble.com/directories/jobs">Jobs</a></li>
                            <li><a href="https://dribbble.com/directories/designers">Designers</a></li>
                            <li><a href="https://dribbble.com/directories/freelance-designers">Freelancers</a></li>
                            <li><a href="https://dribbble.com/tags">Tags</a></li>
                            <li><a href="https://dribbble.com/places">Places</a></li>
                            <li><a href="https://dribbble.com/resources">Resources</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dribbble;

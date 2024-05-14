import { NavLink } from 'react-router-dom';
import './navbar.css'
import { Helmet } from 'react-helmet-async';
const NavBar = () => {

    const navLinks = <>
        <li><NavLink to={'/home'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Home</NavLink> </li>
        <li><NavLink to={'/pages'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Pages</NavLink> </li>
        <li><NavLink to={'/classes'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Classes</NavLink> </li>
        <li><NavLink to={'/blog'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Blogs</NavLink> </li>
        <li><NavLink to={'/contact'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Contact</NavLink> </li>
    </>
  return (
    <div className="navbar border-b-2 border rounded-[85px]  custom-box-shadow bg-[#FFFFFF] flex justify-between items-center px-4 py-2 text-white">
        <Helmet>
                <title>Keep Open Source Alive</title>
            <meta title="keep-open-source-alive" />
            <meta name="keep open source alive" />
            <meta name="description" content="Keep Open Source Alive - An open-source project aimed at keeping other open-source projects alive and maintained." />
            <meta name="keywords" content="open source, keep open source alive, maintain open source projects" />
            <meta name="author" content="Arif Miah" />
            <meta property="og:title" content="Keep Open Source Alive" />
            <meta property="og:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
            <meta property="og:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
            <meta property="og:url" content="https://keep-open-source-alive.web.app" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Keep Open Source Alive" />
            <meta name="twitter:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
            <meta name="twitter:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
        </Helmet>
        <div className="navbar-start flex gap-5">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="flex items-center">
               {/* <img src="/logo.png" alt="Studykids" className="h-8 mr-2" /> 
               <span className='flex'><img className='w-8 h-8' src={''} alt="" /> <img className='w-2 h-2' src="https://ouch-cdn2.icons8.com/U0_RVUErdJV8HehKVPesHa6AesS-qD5rQI44pClMtH4/rs:fit:249:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjA4/L2YzMDNjZTQyLWZl/ODktNDNhZi04ZjY4/LTJjNzUwMTQyNjg1/OC5zdmc.png" alt="" /></span>*/}
              <div className='flex items-center'></div> <span className="flex items-center gap-0 lg:text-2xl font-bold"> <span className='text-[#09A24F]  '>Keep Open Source</span><span className='text-[#7763E5]  '>Alive</span></span>
           </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div>
        </div>
        <div className="navbar-end ">
            <button className=" glow-effect admissionNow bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500">
                Login
            </button>
        </div>
    </div>
    
  );
};

export default NavBar;
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {

//     // const [isMenuOpen, setIsMenuOpen] = useState(true);
//     // const navigationLinks = <>
    
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Home <span></span> </Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Science <span></span> </Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Commerce <span></span> </Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Arts <span></span>  <span></span></Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>WorkAboutHome <span></span> </Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>BlogHome <span></span> </Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>FacebookHome <span></span> </Link> </li>
//     //   <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Youtube <span></span> </Link> </li>
//     // </>
//     // const toggleMenu = () => {
//     //     setIsMenuOpen(!isMenuOpen);
//     //  };
//     return (


//         <div>

//         </div>
//         // <div className="w-fit">
//         //     <button  onClick={toggleMenu} className="absolute flex items-center mb-4">
//         //     {isMenuOpen ? (
//         //       <svg
//         //         className="h-6 w-6 text-white hover:text-gray-200"
//         //         fill="none"
//         //         xmlns="http://www.w3.org/2000/svg"
//         //         viewBox="0 0 24 24"
//         //         stroke="currentColor"
//         //       >
//         //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//         //       </svg>
//         //     ) : (
//         //       <svg
//         //         className="h-6 w-6 text-black hover:text-gray-200"
//         //         fill="none"
//         //         xmlns="http://www.w3.org/2000/svg"
//         //         viewBox="0 0 24 24"
//         //         stroke="currentColor"
//         //       >
//         //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//         //       </svg>
//         //     )}
//         //   </button>
//         //   <div
//         //   className={`w-fit  bg-[#f4c669] h-screen px-4 py-4 lg:p-12 transition duration-300 ease-in-out ${
//         //     isMenuOpen ? '' : 'hidden'
//         //   }`}
//         // >
//         //   <ul className='menu w-fit flex flex-col gap-4'>
//         //       {navigationLinks}
//         //   </ul>
//         //   {/* {navigationLinks.map((link) => (
//         //     <a key={link.name} href={link.href} className="block py-2 text-white hover:text-gray-200 text-xl font-bold">
//         //       {link.name}
//         //     </a>
//         //   ))} */}
//         // </div>
//         // </div>
//     );
// };

// export default NavBar;
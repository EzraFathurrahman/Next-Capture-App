import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState,useEffect} from 'react';

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const [color,setColor]=useState('transparent');
    const [textColor,setTextColor]=useState('white');


    const toggleNav=()=>{
        setNav(!nav);
    }
    useEffect(()=>{
        const changeColor =()=>{
            if(window.scrollY>=90){
                setColor('#fff');
                setTextColor('#000');
            }else{
                setColor('transparent');
                setTextColor('#fff');
            }
        }
        window.addEventListener('scroll',changeColor);
    },[]);



  return (
    <div style={{backgroundColor: `${color}`}}  className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
            <h1 style={{color:`${textColor}`}} className='font-bold text-3xl'>Capture</h1>
            </Link>
            <ul style={{color:`${textColor}`}}  className='hidden sm:flex'>
                <li className='p-4 hover:text-amber-400'>
                    <Link href='/'>
                    Home
                    </Link>
                </li>
                <li className='p-4 hover:text-amber-400'>
                    <Link href='/gallery'>
                    Gallery
                    </Link>
                </li>
                <li className='p-4 hover:text-amber-400'>
                    <Link href='/works'>
                    Works
                    </Link>
                </li>
                <li className='p-4 hover:text-amber-400'>
                    <Link href='/contact'>
                    Contact
                    </Link>
                </li>
            </ul>
        {/* Mobile Button */}
            <div onClick={toggleNav}  className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose style={{color:`${textColor}`}} size={20}/> : <AiOutlineMenu style={{color:`${textColor}`}} size={20}/>}

            </div>
            {/* Mobile Menu */}
            <div className={ nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}> 
            <ul>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>
                    Home
                    </Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/gallery'>
                    Gallery
                    </Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/works'>
                    Works
                    </Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>
                    Contact
                    </Link>
                </li>
            </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar
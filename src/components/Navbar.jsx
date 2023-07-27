import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-[#e5e5e5]'>
			<div className='ml-4'>
				{/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
				<p className='font-bold italic text-2xl sm:text-2xl text-[#fca311]'>
					Fauziyat Folashade
				</p>
			</div>

			{/* menu */}
			<ul className='hidden md:flex'>
				<li>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10 '>
				{!nav ? (
					<div className='text-[#e5e5e5]'>
						<FaBars />
					</div>
				) : (
					<div className='text-[#000000]'>
						<FaTimes />
					</div>
				)}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#e5e5e5] flex flex-col justify-center items-center'
				}
			>
				<li className='py-6 text-4xl text-[#000000]'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl text-[#000000]'>
					{' '}
					<Link onClick={handleClick} to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl text-[#000000]'>
					{' '}
					<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl text-[#000000]'>
					{' '}
					<Link onClick={handleClick} to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl text-[#000000]'>
					{' '}
					<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://www.linkedin.com/in/fauziyat-folashade-omoloye-616876178/'
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://github.com/omoloye13'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='/'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://docs.google.com/document/d/1q2ibQVA27pBR75e57vZnUWCUxMPQfBtdrjuPWL12e2M/edit?usp=sharing'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import BackgroundAnimation from './BackgroundAnimation';

const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-[#000000] flex flex-row'>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<h1 className='text-[#fca311]'>Hi, my name is</h1>
				<h2 className='text-2xl font-bold text-[#e5e5e5]'>
					Fauziyat Folashade Omoloye
				</h2>
				<h3 className='text-2xl font-bold text-[#e5e5e5]'>
					I'm a Frontend Web/Mobile App Developer.
				</h3>
				<p className='text-[#e5e5e5] py-4 max-w-[700px]'>
					I'm a passionate and skilled Frontend Mobile/Web Developer, dedicated
					to creating immersive and engaging digital experiences. With a keen
					eye for design and a love for cutting-edge technologies, I take pride
					in crafting responsive and user-friendly applications that bring ideas
					to life.
				</p>
				<div>
					<button className='text-[#e5e5e5] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fca311] hover:border-[#fca311] hover:text-[#000000]'>
						View Work
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight className='ml-3 ' />
						</span>
					</button>
				</div>
			</div>
			<div className='w-1/4 h-full pt-20 max-w-[750]:hidden '>
				<BackgroundAnimation />
			</div>
			{/* <div></div> */}
		</div>
	);
};

export default Home;

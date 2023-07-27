import React from 'react';

const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-[#000000] text-[#e5e5e5] '>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-5'>
						<p className='text-4xl font-bold inline border-b-4 border-[#fca311]'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5'>
					<div className='sm:text-right text-2xl font-bold'>
						<p>
							I'm Fauziyat Folashade Omoloye, nice to meet you. Please take a
							look around.
						</p>
					</div>
					<div>
						<p>
							I'm a creative problem solver with a deep understanding of
							frontend development, i hold a strong belief that a seamless user
							interface is the key to success in the digital world. I constantly
							strive to stay up-to-date with the latest industry trends and best
							practices, enabling me to deliver high-quality solutions that
							leave a lasting impression on users.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

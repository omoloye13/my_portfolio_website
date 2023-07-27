import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#000000] flex justify-center items-center py-10 px-4'
		>
			<form
				method='POST'
				action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c'
				className='flex flex-col max-w-[600px] w-full'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-[#fca311] text-[#e5e5e5]'>
						Contact
					</p>
					<p className='text-[#e5e5e5] py-4'>
						// Submit the form below or shoot me an email -
						omoloyefauziyat@gmail.com
					</p>
				</div>
				<input
					className='bg-[#e5e5e5] p-2'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='my-4 p-2 bg-[#e5e5e5]'
					type='email'
					placeholder='Email'
					name='email'
				/>
				<textarea
					className='bg-[#e5e5e5] p-2'
					name='message'
					rows='10'
					placeholder='Message'
				></textarea>
				<button className='text-[#e5e5e5] border-2 hover:bg-[#fca311] hover:border-[#fca311] px-4 py-3 my-8 mx-auto flex items-center'>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;

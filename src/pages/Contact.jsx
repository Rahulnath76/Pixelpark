import React from 'react';
import { FaElementor } from 'react-icons/fa';


export default function Contact(){
    return (
        <div className='relative flex items-center justify-center min-h-[700px] bg-white sm:items-center sm:pt-0'>
            <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
                <div className='mt-8 overflow-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <h1 className='text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight'>
                            Get in touch.
                        </h1>

                        <p className='text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2'>
                            Fill in the form to start a conversation
                        </p>

                        <div className=' text-md tracking-wide font-semibold'>
                            Acme Inc, Street, State, Postal Code
                        </div>
                        <div className=' text-md tracking-wide font-semibold'>
                            Info@acem.org
                        </div>
                    </div>
                </div>

                <form className='p-6 flex flex-col justify-center'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='hidden'>
                            Full Name
                        </label>
                        <input type="text" name='name' id='name' placeholder='Full name' className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'/>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="name" className='hidden'>
                            Email
                        </label>
                        <input type="text" name='name' id='name' placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'/>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="name" className='hidden'>
                            Number
                        </label>
                        <input type="text" name='name' id='name' placeholder='Telephone Number' className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'/>
                    </div>

                    <button type='submit' className='md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300'>Submit</button>

                </form>
            </div>
        </div>
    )
}
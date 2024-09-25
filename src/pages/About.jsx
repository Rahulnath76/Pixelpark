import React from 'react';

export default function About(){
    return (
        <div className='py-16 bg-white'>
            <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
                <div className='space-y-6 md:space-y-0 md:flex md: gap-6 lg:items-center lg:gap-12'>
                    <div className='md:w-5/12 lg:w-5/12'>
                        <img src="https://tailus.io/sources/blocks/left-image/preview/images.startup.png" alt="" />
                    </div>

                    <div className='md:w-7/12 lg:w-6/12'>
                        <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h2>
                        <p className='mt-6 text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique modi temporibus aspernatur sit quam libero iusto commodi ullam, vero voluptates, sequi doloremque porro eaque. Similique officia perferendis maxime. Amet.
                        </p>
                        <p className='mt-6 text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique modi temporibus aspernatur sit quam libero iusto commodi ullam, vero voluptates, sequi doloremque porro eaque. Similique officia perferendis maxime. Amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LogIn() {
  return (
    <div className="max-w-[1200px] mx-auto  min-h-[500px] overflow-hidden bg-white sm:items-center sm:pt-0 ">
        <div className="pt-[70px]">
            <h1 className='text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight'>
                Welcome. 
                <br />
                Please Log in.
            </h1>
        </div>
        <form className=' mx-auto p-6 flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-richblack-700 font-medium mr-3'>
                            Email
                        </label>
                        <input type="email" name='name' id='name' placeholder='Email' className='w-[80%] mt-1 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'/>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-richblack-700 font-medium mr-3'>
                            Password
                        </label>
                        <input type="password" name='name' id='name' placeholder='Password' className='w-[80%] mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'/>
                    </div>


                    <button type='submit' className='md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300'>Log In</button>

                </form>
    </div>
  )
}

export default LogIn
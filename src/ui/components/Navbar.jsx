import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-900 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-extrabold tracking-widest text-black">comics.</Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <NavLink to="/marvel" className={({ isActive }) => `text-sm font-bold tracking-widest text-black hover:text-purple-800 uppercase ${isActive ? 'active' : ''}`}> Marvel </NavLink>
            <NavLink to="/dc" className={({ isActive }) => `text-sm font-bold tracking-widest text-black hover:text-purple-800 uppercase ${isActive ? 'active' : ''}`}> Dc </NavLink>
            <NavLink to="/search" className={({ isActive }) => `text-sm font-bold tracking-widest text-black hover:text-purple-800 uppercase ${isActive ? 'active' : ''}`}> Search
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button onClick={onLogout} className="relative inline-block group focus:outline-none focus:ring">
              <span className="ml-8 px-4 py-2 absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
              <span className="ml-8 px-4 py-2 relative inline-block  text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75 rounded-md">
                Sign out
              </span>
            </button>

          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-md ring-1 ring-black ring-opacity-5 bg-white border-black border-2">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/" className=" text-2xl font-extrabold tracking-widest text-black">comics.</Link>
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <NavLink to="/marvel" className="-m-3 p-3 flex items-center rounded-md hover:bg-purple-50">
                  <span className="ml-3 text-sm font-bold tracking-widest text-black uppercase"> Marvel </span>
                </NavLink>
                <NavLink to="/dc" className="-m-3 p-3 flex items-center rounded-md hover:bg-purple-50">
                  <span className="ml-3 text-sm font-bold tracking-widest text-black  uppercase"> DC </span>
                </NavLink>
                <NavLink to="/search" className="-m-3 p-3 text flex items-center rounded-md hover:bg-purple-50">
                  <span className="ml-3 text-sm font-bold tracking-widest text-black  uppercase">
                    Search </span>
                  <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" /></svg>
                </NavLink>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <button onClick={onLogout} className="w-full relative inline-block group focus:outline-none focus:ring">
              <span className=" py-2 absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
              <span className="w-full  py-2 relative inline-block  text-center text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75 rounded-md">
                Sign in
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

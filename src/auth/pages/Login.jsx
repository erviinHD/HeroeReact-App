import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-900 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="text-2xl font-extrabold tracking-widest text-black cursor-pointer">comics.</span>
          </div>
          <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">
            <button onClick={onLogin} className="relative inline-block group focus:outline-none focus:ring">
              <span className="ml-8 px-4 py-2 absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
              <span className="ml-8 px-4 py-2 relative inline-block  text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75 rounded-md">
                Sign in
              </span>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

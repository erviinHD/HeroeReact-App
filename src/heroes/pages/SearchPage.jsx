import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

import queryString from "query-string"
import { getHeroesByNme } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByNme(q)
  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }



  return (
    <>
      <form className="center" onSubmit={onSearchSubmit}>
        <div className="pr-14 w-full">
          <label className="relative block p-3 border-2 border-black rounded-lg  shadow-[5px_5px_0_0_rgba(168,85,247,1)] border-b-2 " >
            <input
              name="searchText"
              className="text-xl font-extrabold tracking-widest inputSerch w-full p-0 border-none"
              type="search"
              placeholder="Buscar héroe"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange} />
          </label>
        </div>
        <div className="animate__animated animate__fadeInDown md:flex items-start justify-start md:flex-1 lg:w-0 py-10 pr-20">
          <button className="relative inline-block group focus:outline-none focus:ring -ml-10">
            <span className="ml-8 px-4 py-2 absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
            <span className="center ml-8 px-4 py-2 relative inline-block  text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" /></svg>
            </span>
          </button>

        </div>
      </form>

      <div className="border-b-2 border-gray-900 ">
        <h2 className="text-xl font-extrabold tracking-widest pb-5">Resultados de Búsqueda</h2>
      </div>
      <div className="animate__animated animate__fadeIn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-12 sm:my-16">
        {
          heroes.map(hero => (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          ))
        }
      </div>

      {
        (q === '') ? <div></div> : (heroes.length === 0) && 
        <div className="center">
          <div
          className="flex items-center p-4 text-white bg-red-600 rounded gap-4 w-1/3  shadow-[5px_5px_0_0_rgba(0,0,0,1)] border-b-1"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            />
          </svg>
          <strong className="text-sm font-normal"> !No se han encontrado resultados para <b>{q}</b>! </strong>
        </div>
        </div>
      }
    </>
  )
}

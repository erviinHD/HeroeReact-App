import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';
const heroImages = require.context('/src/assets/heroes', true);

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroId),[heroId]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div >
      <nav className='center '>
        <div className="animate__animated animate__fadeInDown md:flex items-start justify-start md:flex-1 lg:w-0 py-10">
          <button onClick={onNavigateBack} className="relative inline-block group focus:outline-none focus:ring -ml-10">
            <span className="ml-8 px-4 py-2 absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
            <span className="center ml-8 px-4 py-2 relative inline-block  text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
            </span>
          </button>

        </div>
      </nav>
      <div className="flex pb-10">
        <div className="flex-1  pr-10 center">
          <div className="animate__animated animate__fadeIn sm:w-full  border-2 border-black rounded-md overflow-hidden hover:shadow-[8px_8px_0_0_rgba(168,85,247,1)] hover:border-b-2">
            <img
              alt={hero.superhero}
              className="h-full md:h-96 hover:scale-105 transition-transform duration-500 object-contain w-full "
              src={heroImages(`./${hero.id}.jpg`)}
            />
          </div>
        </div>
        <div className="flex-1 animate__animated animate__fadeInRight">
          <div className="flex mt-8">
            <div className="max-w-[35ch]">
              <h1 className="text-2xl font-extrabold tracking-widest uppercase">
                {hero.superhero}
              </h1>
            </div>
          </div>
          <p className="text-lg font-bold  tracking-widest text-gray-500">
            (  {hero.publisher})
          </p>
          <div className="mt-8">
            <legend className="mb-1 text-sm font-bold tracking-widest">Alter Ego</legend>
            <details className="relative mt-2 group">
              <summary className="block">
                <div className="prose max-w-none tracking-widest">
                  <p>
                    {hero.alter_ego}
                  </p>
                </div>
              </summary>
            </details>
          </div>
          <div className="mt-8">
            <legend className="mb-1 text-sm font-bold tracking-widest">First Appearance</legend>
            <details className="relative mt-2 group">
              <summary className="block">
                <div className="prose max-w-none tracking-widest">
                  <p>
                    {hero.first_appearance}
                  </p>
                </div>
              </summary>
            </details>
          </div>
          <div className="mt-8">
            <legend className="mb-1 text-sm font-bold tracking-widest">Characters</legend>
            <details className="relative mt-2 group">
              <summary className="block">
                <div className="prose max-w-none tracking-widest">
                  <p>
                    {hero.characters}
                  </p>
                </div>
              </summary>
            </details>
          </div>
        </div>
      </div>
    </div>

  )
}

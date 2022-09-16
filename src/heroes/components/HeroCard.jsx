import { Link } from "react-router-dom";

const heroImages = require.context('/src/assets/heroes', true);

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    return (
        <div>
            <div className="border-2 border-black rounded-md overflow-hidden hover:shadow-[5px_5px_0_0_rgba(168,85,247,1)] hover:border-b-2  cursor-pointer">
                <Link to={`/hero/${id}`}>
                <img
                    className="hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[300px]"
                    src={heroImages(`./${id}.jpg`)}
                    alt={superhero}
                />
                </Link>
            </div>
            <div className="relative pt-4">
                <h3 className="text-sm font-medium tracking-widest">
                    {alter_ego}
                </h3>
                <h3 className="text-sm font-medium tracking-widest text-gray-500">({first_appearance})
                </h3>
                <p className="mt-2">
                    <span className="text-base font-extrabold tracking-widest">
                        {superhero}
                    </span>
                </p>
            </div>
        </div>
    )
}

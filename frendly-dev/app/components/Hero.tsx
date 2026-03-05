import { Link } from 'react-router';

type HeroProps = {
    name?: string;
    text?: string;
};

const Hero = ( {name = '[NAME]', text}: HeroProps ) => {
    return (
        <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
            <h2 className="text-4xl font-bold mb-4">Welcome to The frendly dev, {name}</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"> I build frendly web experiences. Your text: {text}</p>
            <div className="flex justify-center gap-4">
                <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">View Projects</Link>
                <Link to="/contact" className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300">Contact Me</Link>
            </div>
        </header>
    );
};

export default Hero;
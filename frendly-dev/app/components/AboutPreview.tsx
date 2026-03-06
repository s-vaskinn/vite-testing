import { Link } from 'react-router';

const AboutPreview = () => {
    return (
        <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
            <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="w-32 h-32 rounded-full object-cover" 
            />
            <div className="text-3xl font-bold text-white mb-2">
                <h1 className="text">
                    Hi, I'm Bob
                </h1>
                <p className="text-gray-200 mb-4 max-w 4xl">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blogging and speaking at tech events.
                </p>
                <Link to="/about" className="inline-block text-blue-400 hover:underline text-sm">
                    Read more about me
                </Link>
            </div>
        </section>
    );
};

export default AboutPreview;
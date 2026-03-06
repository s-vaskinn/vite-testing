import { RiH1 } from "react-icons/ri";


const AboutPage = () => {
    return (
        <>
        <h2 className='text-3xl font-bold text-blue-500'>About Page</h2>
        <div className="max-w-5xl mx-auto px-6 bg-gray-900">
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10">
                <img 
                    src="/images/profile.jpg" 
                    alt="Profile" 
                    className="w-48 h-48 rounded-full object-cover" 
                />
                <div className="text-3xl font-bold text-white mb-2">
                    <h1 className="text">
                        Hi, I'm Bob
                    </h1>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blogging and speaking at tech events.
                    </p>
                </div>
            </div>
            { /* bio section */ }
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-200">
                    Bio
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    I'm a passionate software developer with over 10 years of experience in building web applications. I specialize in JavaScript and have a strong background in React, Node.js, and TypeScript. I love creating intuitive user interfaces and scalable backend systems. In my free time, I enjoy hiking, photography, and exploring new cuisines.
                </p>
            </div>

            { /* skills section */ }
            <div className="mb-10 py-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-200">
                    Skills
                </h2>
                <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                    {["JavaScript", "React", "Node.js", "TypeScript", "GraphQL", "Docker"].map((skill) => (
                        <li 
                            key={skill}
                            className="bg-gray-700 px-3 py-1 rounded-md"
                        >{skill}</li>
                    ))}
                </ul>
            </div>
        </div>

        </>
    )
}

export default AboutPage;
import { useState } from "react";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export function meta({}:Route.MetaArgs){
  return [
    {title: "the frendly dev!"},
    {name: "description", content: "My portofolio"}
  ];
};

export async function loader( { request }:Route.LoaderArgs):Promise<any> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
    const data = await res.json();
    return {projects: data};
};

const ProjectPage = ( {loaderData}: Route.ComponentProps) => {
    //console.log(projects);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const { projects } = loaderData as { projects: Project[]};
    // Get unique categories for filter dropdown
    const categories = ["All", ...new Set(projects.map((p) => p.category))];
    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter((p) => p.category === selectedCategory);
    // calculate total pages based on filtered projects length and items per page
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    // Get current page projects
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
    return (
        <>
            <h2 className='text-3xl font-bold text-blue-500 mb-8 text-center'>Projects</h2>
            <div className="mb-6 flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 text-white"}`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1); // reset to first page on category change
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
            <AnimatePresence mode="wait" >
                <motion.div layout className="grid gap-6 sm:grid-cols-2">
                    {currentProjects.map((project) => (
                        <motion.div layout key={project.id}>
                            <ProjectCard key={project.id} project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
        </>
    )
}

export default ProjectPage;
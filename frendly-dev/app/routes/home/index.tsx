import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The frendly dev | Welcome home" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader( { request }:Route.LoaderArgs): Promise<{projects:Project[]}> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return {projects: data}
}

const HomePage = ( {loaderData}: Route.ComponentProps ) => {
  //console.log("Home page rendered");
  //useEffect(() => {
  //  console.log("Home page useEffect executed");
  //  console.log(window.scrollX);
  //}, []);
  //const now = new Date().toISOString();
  //if (typeof window !== "undefined") {
  //  console.log("Current time (client):", now);
  //} else {
  //  console.log("Current time (server):", now);
  //}
  const {projects} = loaderData;
  console.log(projects);

  return (
    <> 
      <FeaturedProjects projects={projects} count={2}/>
      <AboutPreview />
    </>
  );
};

export default HomePage;
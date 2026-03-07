import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import LatestPosts from "~/components/LatestPosts";
import type { Project, PostMeta } from "~/types";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The frendly dev | Welcome home" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader( { request }:Route.LoaderArgs): Promise<{projects:Project[], posts: PostMeta[]}> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL("/posts-meta.json", url))
  ]);
  if (!projectRes.ok || !postRes.ok) {
    throw new Response("Failed to load projects og posts", { status: 500 });
  }
  const [projects, posts]: [Project[], PostMeta[]] = await Promise.all([
    projectRes.json(),
    postRes.json()
  ]);
  
  return {projects, posts};
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
  const {projects, posts} = loaderData;
  console.log(projects);

  return (
    <> 
      <FeaturedProjects projects={projects} count={2}/>
      <AboutPreview />
      <LatestPosts posts={posts} limit={3} />
    </>
  );
};

export default HomePage;
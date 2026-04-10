import { createFileRoute, Link } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import type { Idea } from '@/types.ts'
import api from "@/lib/axios.ts";

/*
const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const res = await fetch(`/api/ideas/${ideaId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch idea details');
  }
  return res.json();
};
*/
const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const res = await api.get(`/ideas/${ideaId}`);
  return res.data;
};

const ideaQueryOptions = (ideaId: string) => queryOptions(
  {
    queryKey: ['idea', ideaId],
    queryFn: () => fetchIdea(ideaId),
  }
);

export const Route = createFileRoute('/ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: async ({ params, context: { queryClient } }) => {
    return queryClient.ensureQueryData(ideaQueryOptions(params.ideaId));
  }
});

function IdeaDetailsPage() {
  //const name = Route.useLoaderData();
  //const idea = Route.useLoaderData();
  const { ideaId } = Route.useParams();
  //const idea = useSuspenseQuery(ideaQueryOptions(ideaId)).data;
  const { data:idea } = useSuspenseQuery(ideaQueryOptions(ideaId));
  // giving benefit og tanstack query's caching and background updates, we can directly use the query in the component without worrying about loading states 
  // or refetching data on navigation. The loader ensures that the data is available before rendering the component, providing a seamless user experience.  
  return (
    <div className="p-4"> 
        <Link to="/ideas" className="text-blue-500 underline mb-4 block">Back to Ideas</Link>
        <h2 className="text-2xl font-bold"> {idea.title} </h2>
        <p className="mt-2"> {idea.description} </p>
    </div>
  );  
}

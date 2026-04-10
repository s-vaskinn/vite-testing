import { createFileRoute } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import type { Idea } from '@/types.ts'
import { Link } from '@tanstack/react-router'
import api from "@/lib/axios.ts";

const fetchIdeas = async (): Promise<Idea[]> => {
  const res = await api.get('/ideas');
  return res.data;
};

const ideasQueryOptions = () => queryOptions(
  {
    queryKey: ['ideas'],
    queryFn: () => fetchIdeas(),
  }
);

export const Route = createFileRoute('/ideas/')({
  head: () => ({
    meta: [
      {
        title: 'Browse Ideas',
      },
    ],
  }),
  component: IdeasPage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(ideasQueryOptions());
  }
});

function IdeasPage() {
  const { data:ideas } = useSuspenseQuery(ideasQueryOptions()); // useSuspenceQuery to fetch ideas with React Query
  //const ideas = Route.useLoaderData();
  //console.log(ideas);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <li 
            key={idea.id} 
            className="border border-gray-300 p-4 rounded shadow bg-white flex flex-col justify-between">
            <h1 className="text-lg font-semibold mb-2">{idea.title}</h1>
            <p className="text-gray-600 mt-2">{idea.summary}</p>
            <Link to={`/ideas/$ideaId`} params={{ ideaId: idea.id }} className="text-center mt-4 text-blue-500 self-end hover:underline">View Details</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

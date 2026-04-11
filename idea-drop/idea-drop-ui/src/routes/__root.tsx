import { HeadContent, Outlet, createRootRouteWithContext, Link } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient } from '@tanstack/react-query'
import '../styles.css'
import Header from '../components/Header.tsx'

type RouterContext = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Share, explore, and discuss your ideas with the world!',
      },
      {
        title: "IdeaDrop - Share and Explore Ideas",
      }
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeadContent />
      <Header />
      <main className="flex justifiy-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <Outlet />
        </div>
      </main>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  )
};

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Page Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Go Back Home</Link>
    </div>
  )
};
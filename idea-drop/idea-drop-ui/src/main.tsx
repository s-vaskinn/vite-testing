import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false //useful for development, but you might want to enable this in production
    }
  }
});

const router = createRouter({
  routeTree,
  context: { queryClient }, //passing in the query client to the router context so we can use it in our loaders
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </QueryClientProvider>
  )
}

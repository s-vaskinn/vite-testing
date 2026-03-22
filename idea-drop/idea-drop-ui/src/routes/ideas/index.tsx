import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ideas/')({
  head: () => ({
    meta: [
      {
        title: 'Ideas',
      },
    ],
  }),
  component: IdeasPage,
})

function IdeasPage() {
  return <div>Hello "/ideas/"!</div>
}

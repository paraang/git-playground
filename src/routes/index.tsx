import { createFileRoute } from '@tanstack/react-router'
import { Rocket } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="bg-background text-foreground flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Vite + React + TanStack Router
        </h1>
        <p className="text-muted-foreground text-sm">
          Tailwind CSS v4, shadcn/ui (Base UI), ESLint, Prettier — all wired up.
        </p>
      </div>
      <Button>
        <Rocket />
        Get started
      </Button>
    </main>
  )
}

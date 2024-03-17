
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import '@/globals.css'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
      
      <Toaster richColors />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
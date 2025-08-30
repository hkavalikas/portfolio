import { lazy, Suspense } from 'react'

const LandingPage = lazy(() => import('./components/LandingPage.tsx'))

function App() {
  return (
    <Suspense fallback={<div style={{ height: '100vh', backgroundColor: '#1a1a1a' }} />}>
      <LandingPage />
    </Suspense>
  )
}

export default App

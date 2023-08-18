import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/checkout" element={<checkout />} /> */}
        {/* <Route path="/checkout-success" element={<checkout-success />} /> */}
      </Route>
    </Routes>
  )
}

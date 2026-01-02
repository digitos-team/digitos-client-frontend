import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes'

import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

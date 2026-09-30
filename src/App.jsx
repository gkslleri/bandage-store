
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
          <PageContent />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App


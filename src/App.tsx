import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />

      {/* --- BOTÓN FLOTANTE WHATSAPP --- */}
      <a
        href="https://wa.me/543584206714?text=Hola%20Maricel%2C%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20sobre%20un%20proyecto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
        <span className="font-medium hidden sm:block">Escribime</span>
      </a>
    </BrowserRouter>
  )
}

export default App

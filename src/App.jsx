import { BrowserRouter } from 'react-router-dom';
import { SideMenu } from './components/SideMenu/SideMenu'
import { AppRoutes } from './helpers/AppRoutes/AppRoutes';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='flex h-screen '>
        <SideMenu />
        <main className='h-full w-full px-6 '>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

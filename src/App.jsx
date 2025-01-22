import { BrowserRouter } from 'react-router-dom';
import { SideMenu } from './components/SideMenu/SideMenu'
import { AppRoutes } from './helpers/AppRoutes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className='flex h-screen '>
        <SideMenu />
        <main className='h-full w-full p-6 bg-gray-300'>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

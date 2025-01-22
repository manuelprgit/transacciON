import { BrowserRouter } from 'react-router-dom';
import { SideMenu } from './components/SideMenu/SideMenu'
import { AppRoutes } from './helpers/AppRoutes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className='flex h-screen'>
        <SideMenu />
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

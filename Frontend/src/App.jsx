
import './App.css'
import Router from './components/Router'
import useRefreshLoginHandle from './Hooks/useRefreshLoginHandle'
import useRefreshSellerHandle from './Hooks/useRefreshSellerHandle';

function App() {
    useRefreshLoginHandle();
    useRefreshSellerHandle();
  return (
      <div>
          <Router/>
      </div>
  )
}

export default App

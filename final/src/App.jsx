import { BasketProvider } from './Context/BasketContext'
import './index.css'
import { MainRouterDom } from './router'

function App() {

  return (
    <>
    <BasketProvider>
    <MainRouterDom/>
    </BasketProvider>
    </>
  )
}

export default App

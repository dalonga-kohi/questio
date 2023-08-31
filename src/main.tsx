import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import { Provider } from 'react-redux'
import Store from './store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)

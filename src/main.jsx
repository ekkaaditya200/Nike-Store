import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Store from './app/store.js'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <App />
  </Provider>,
)

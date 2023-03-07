import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PlayerProvider from './context/PlayerProvider'
import './index.css'
import { initialState, reducer } from './utils/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </PlayerProvider>
  </React.StrictMode>,
)

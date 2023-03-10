import './assets/styles/main.scss'
import { Route, Routes } from 'react-router-dom'
import { Form } from './views/Form'
import { TableView } from './views/TableView'
import { EventSettings } from './views/EventSettings'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="event-settings" element={<EventSettings />} />
        <Route path="table/:tableId" element={<TableView />} />
      </Routes>
    </div>
  )
}

export default App

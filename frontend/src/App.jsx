// Modules
import { Routes, Route } from 'react-router-dom'

// Components
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'

// CSS Source
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/books/create' element={ <CreateBook/> } />
        <Route path='/books/details/:id' element={ <ShowBook/> } />
        <Route path='/books/edit/:id' element={ <EditBook/> } />
        <Route path='/books/delete/:id' element={ <DeleteBook/> } />
      </Routes>
    </>
  )
}

export default App
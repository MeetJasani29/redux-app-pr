import { useState } from 'react'
import AddNote from './Components/addnote';
import Header from './Components/Header';
import './Components/note.css'
import Footer from './Components/footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AddNote />
      <Footer />
    </>
  )
}

export default App

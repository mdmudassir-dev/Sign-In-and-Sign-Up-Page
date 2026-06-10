import Product from './productTab.jsx'
import Form from './form.jsx'
import './App.css'
import Counter from './counter.jsx'
import Propes from './cewFolder.jsx'
import { useState } from 'react'

function App() {
  const [name, setName]=useState("");

  return (
    <>
    
    <Propes name={name} setName={setName} />
    <h1>hello react tab</h1>
    <Product />
    < Counter />
    <Propes />
    <Form />
    </>
  )
}

export default App

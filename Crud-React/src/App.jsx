import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/Navbar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode,setmodalMode] = useState("add");

  const handleOpen = (mode) => {
    setmodalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = ()=>{
    if (modalMode === "add") {
      console.log("modal mode add");
      
    } else {
      console.log("modal mode edit");
    }
  }

  return (
    <>
    <NavBar onOpen={()=>handleOpen("add")} />
    <TableList />
    <ModalForm 
    isOpen={isOpen}
    onSubmit={handleSubmit} // minúscula
    onClose={() => setIsOpen(false)}
    mode={modalMode}
/>
    </>
  )
}
export default App

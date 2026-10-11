import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header/header';
import { Hero } from './Components/Hero/hero';
import { Skills } from './Components/Skills/skills';
import { Projects } from './Components/Project/project';
import { Footer } from './Components/Footer/footer';
import { EmailModal } from './Components/Modal/modal';

// const [] = useState()

function Space() {
  return (
    <div className='space'></div>
  )
}



function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  // =========================================================================
  // =========================================================================

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')


  const [emailFormModel, setEmailFormModel] = useState(false)

  function openEmailModal() {
    setEmailFormModel(true)

    setFullName('')
    setEmail('')
    setText('')
  }

  function closeEmailModal() {
    setEmailFormModel(false)
  }

  function send() {
    if (!fullName.trim() || !email.trim() || !text.trim()) {
      e.preventDefault();
      return;
    }

    closeEmailModal();
  }


  // =========================================================================
  // =========================================================================

  return (
    <div className='body' onClick={closeMenu}>
      <div className='grid'></div>

      <Header toggleMenu={toggleMenu} closeMenu={closeMenu} menuOpen={menuOpen} />
      <Hero />
      <Space />
      <Skills />
      <Space />
      <Projects />
      <Space />
      <Footer openEmailModal={openEmailModal} />


      {emailFormModel && 
      <EmailModal 
        closeEmailModal={closeEmailModal} 
        fullName={fullName} 
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        setText={setText}
      />}
    </div>
  );
}

export default App

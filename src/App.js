import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './components/notes';
import CreateArea from './components/CreateArea';
import { useState } from 'react';


function App() {
const[notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
     return [...prevNotes,note];
    })
    console.log(note);
  }
  
  return (
   <>
    <Header/>
    <CreateArea  

    />
    {notes.map(noteItem => {
      return <Note title={noteItem.title} content={noteItem.content}/>;
    })}
    <Footer/>
   </>
  );
}

export default App;

import { useState } from 'react'
import { Route, Routes } from 'react-router';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  
  const [mailboxes, setMailBoxes] = useState([
    { _id: 1, boxSize: 'Small', boxOwner: 'Kiera',},
    { _id: 2, boxSize: 'Small', boxOwner: 'Kaya',},
    { _id: 3, boxSize: 'Small', boxOwner: 'Arash',},

  ]);
  
  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailBoxes([...mailboxes, newMailboxData]);
  }
  
  return (
    <>
       <NavBar />
       <h1>Mailboxes!</h1>
      <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}
        />
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;

import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";


const App = () => {
const [mailboxes, setMailboxes] = useState([
  {
    _id: 1,
    boxSize: 'Large',
    boxOwner: 'Kiera',
  },
  {
    _id: 2,
    boxSize: 'Small',
    boxOwner: 'Mica',
  },
  {
    _id: 3,
    boxSize: 'Small',
    boxOwner: 'Kaya',
  },
  {
    _id: 4,
    boxSize: 'Medium',
    boxOwner: 'Arash',
  },
  
  
  
]);

const addBox = (newMailboxData) => {
  newMailboxData._id = mailboxes.length + 1;
  setMailboxes([...mailboxes, newMailboxData]);

};

return (
  <>
     <NavBar />
    <Routes>
    <Route path="/" element={<main><h1>Post Office</h1></main>} />
    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
    <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}
      />
    <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
  </>
);
};

export default App;
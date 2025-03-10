import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    mailbox: '',
    boxSize: '',
    boxOwner: '',
}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
      };
    
      const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
      };
      return (
        <main>
          <h2>New Mailbox</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="mailbox">Mailbox:</label>
            <input
              type="text"
              id="mailbox"
              name="mailbox"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="boxSize">Box Size:</label>
            <input
              type="text"
              id="boxSize"
              name="boxSize"
              value={formData.boxSize}
              onChange={handleChange}
            />
            <label htmlFor="boxOwner">Box Owner:</label>
            <input
              type="text"
              id="boxOwner"
              name="boxOwner"
              value={formData.boxOwner}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </main>
      );


};


export default MailboxForm;
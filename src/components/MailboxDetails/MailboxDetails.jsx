import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    if (!selectedBox) 
        return <h2>Mailbox not found</h2>;


    return (
        <>
            <h2> Mailbox {selectedBox._id}</h2>
            <dl>
                <h3>Details</h3>
                
                <dl>Boxholder: {selectedBox.boxOwner}</dl>
                
                <dl>Box Size: {selectedBox.boxSize}</dl>
               
            </dl>
        </>
    );
};


export default MailboxDetails;
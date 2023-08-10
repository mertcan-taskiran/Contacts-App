import {useState, useEffect} from 'react'
import List from "./List/index"
import Form from "./Form/index"

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Mert",
            phone_number: "123456"
        },
        {
            fullname: "Can",
            phone_number: "654321"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts;
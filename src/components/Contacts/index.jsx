import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './style.css';

function Contacts() {

    const [contacts, setContacts] = useState([
        
        {fullname:"Mert", phone_number:1234},
        {fullname:"Can", phone_number:5678},
        {fullname:"Taşkıran", phone_number:1298}]);
  
        useEffect( ()=>{
            console.log(contacts);
    }, [contacts])

    return (
        <div id='container'>
            <h2>Contacts</h2>
            <List contacts_list={contacts}/>
            <Form addContact={setContacts} contacts_form={contacts}/>
        </div>
    )
}

export default Contacts;
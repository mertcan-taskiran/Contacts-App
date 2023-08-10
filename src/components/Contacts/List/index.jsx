import {useState} from 'react'

function List({ contacts_list }) {

    const[filterText, setFilterText]=useState("");
        const filtered = contacts_list.filter((item) => {
            return Object.keys(item).some((key)=> 
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        );
    })

    return (
        <div>
            <div>
                <input placeholder='Filter Contact' value={filterText} onChange={ (e) => setFilterText(e.target.value)}/>
            </div>
            <ul className='list'>
                {filtered.map( (contact, i)=>{
                    return <li key={i}>
                        <span>{contact.fullname} </span> 
                        <span>{contact.phone_number}</span> 
                    </li>}    
                )}
            </ul>
            <p>Total Contacts ({filtered.length})</p>
        </div>
    )
}

export default List
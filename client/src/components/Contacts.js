import React, { useState, useEffect } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

export default (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/contacts`)
      .then( response => response.json())
      .then( data => setContacts(data));
  }, []);

  return (
    <div>
      <div className="row">
        <AddContacts />
      </div>
      <div className="row">
        { contacts.map( item => (
            <SingleContact key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

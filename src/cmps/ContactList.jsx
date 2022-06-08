// import React from 'react'
import ContactPreview from "./ContactPreview"

export default function ContactList({contacts, removeContact}) {
    return (
        <div className="contact-list simple-cards-grid">
            {contacts.map(contact => 
                <ContactPreview contact={contact} key={contact._id} removeContact={removeContact}  />
                )}
        </div>
    )
}

// import React from 'react'
import { Link } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './Avatar'

export default function ContactPreview({ contact, removeContact }) {

    function onRemoveContact(ev) {
        ev.stopPropagation()
        removeContact(contact._id)
        // eventBusService.emit('delete', contact._id)
    }

    return (
        <div className="contact-preview">
            <Link to={`/contact/${contact._id}`} className="info flex row">
                <Avatar className="avatar" {...stringAvatar(contact.name)} />
                {contact.name}
            </Link>
            <section className="actions">
                <Link to={`/contact/edit/${contact._id}`}><i class="fa-solid fa-pencil"></i></Link>
                <button onClick={onRemoveContact} className='clear-button'><i class="fa-solid fa-trash-can"></i></button>
            </section>
        </div>
    )
}

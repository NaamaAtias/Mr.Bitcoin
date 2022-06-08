import React, { Component } from 'react'
import ContactList from '../cmps/ContactList'
import {contactService} from '../services/contactService.js'
import { connect } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'



export class _BITCoinApp extends Component {

    componentDidMount() {
        this.props.loadContacts()
        console.log(this.props)
    }

    removeContact = (contactId) => {
        this.props.removeContact(contactId)
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }


    render() {
        const {contacts} = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <div className='bitcoin-app'>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <section className='flex column'>
                <Link to="/contact/edit" className='text-right'><i className="fa-solid fa-circle-plus"></i></Link>
                <ContactList removeContact={this.removeContact} contacts={contacts} />
                </section>
            </div>
        )
    }
}


const mapStateToProps = state => {

    return {
        contacts: state.contactModule.contacts,
    }
}

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy
}

export const BITCoinApp = connect(mapStateToProps, mapDispatchToProps)(_BITCoinApp)

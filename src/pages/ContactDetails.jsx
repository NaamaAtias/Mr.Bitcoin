import { Component } from 'react'
import {contactService} from '../services/contactService'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }

    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact: contact })
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading..</div>
        return (
            <div className='contact-details'>
                <img className="contact-img" src={`https://robohash.org/${contact._id}?set=set3`} alt="" />
                <div className="contact-info">
                    <p><strong>Name:</strong> <br/> {contact.name}</p>
                    <p><strong>Phone:</strong> <br/> {contact.phone}</p>
                    <p><strong>Email:</strong> <br/> {contact.email}</p>
                </div>
            </div>
        )
    }
}

import { Component, createRef } from 'react'
// import { NiceButton } from '../cmps/NiceButton'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {

    state = {
        contact: null,
        errMsg: null
    }

    inputRef = createRef()

    async componentDidMount() {

        try {

            const contactId = this.props.match.params.id
            const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
            this.setState({ contact }, () => this.inputRef.current.focus())
        } catch (err) {
            this.setState({ errMsg: err.name + ': ' + err.message })
        }

    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))

    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }


    render() {
        const { contact, errMsg } = this.state
        if (!contact) return <div>{errMsg || 'Loading...'}</div>
        return (
            <div className='container contact-edit'>
                <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
                <form onSubmit={this.onSaveContact} >
                    <label htmlFor="name">Name</label>
                    <input ref={this.inputRef} onChange={this.handleChange} value={contact.name} type="text" name="name" id="name" pattern="^\s*[0-9a-zA-Z]+[ ][0-9a-zA-z]+\s*$" required />
                    <label htmlFor="phone">Phone number</label>
                    <input onChange={this.handleChange} value={contact.phone} type="phone" name="phone" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} value={contact.email} type="email" name="email" id="email" />
                    <button>Save</button>
                    {/* <NiceButton >Save</NiceButton > */}
                </form>
            </div>
        )
    }
}

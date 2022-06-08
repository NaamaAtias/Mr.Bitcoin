import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            console.log(this.state)
            this.props.onChangeFilter(this.state)
        })

    }


    render() {
        const { name, phone } = this.state
        return (
            <>
            <h3 className='search-header container flex auto-center bold'>Search Contacts By:</h3>
            <form className='container contact-filter'>
                <section className='flex column'>
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} value={name} type="text" name="name" id="name" />
                </section>
                <section className='flex column'>
                    <label htmlFor="phone">Phone number</label>
                    <input onChange={this.handleChange} value={phone} type="number" name="phone" id="phone" />
                </section>
            </form>
            </>
        )
    }
}

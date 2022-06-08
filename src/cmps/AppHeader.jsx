import { NavLink, withRouter } from "react-router-dom";

export function AppHeader(props) {
    
    return (
        <header className='app-header'>
            <section className='container'>
            <NavLink className='logo' to='/'>
            <h1 className='logo'>Mr. BITCoin</h1>
            </NavLink>
                <section className="back-container">
                    {/* <button onClick={props.history.goBack}>Back</button> */}
                </section>
                <nav>
                    <NavLink activeClassName="my-active" exact to='/'>Home</NavLink>
                    <NavLink activeClassName="my-active" to='/contact'>Contacts</NavLink>
                </nav>
            </section>
        </header>
    )
}
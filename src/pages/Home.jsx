import React, { Component } from 'react'
import { userService } from '../services/userService.js'
// import axios from 'axios'
import { bitcoinsService } from '../services/bitcoinsService.js'

export class Home extends Component {

    state = {
        user: null,
        rate: 0,
    }

    componentDidMount() {
        this.getUser();
    }

    // getUser() {
    //     const user = userService.getUser()
    //     return user
    // }
    getUser() {
        const user = userService.getUser()
        if (!user) this.props.history.push('/contact')
        this.setState({ user }, () => {
          this.getRate()
        })
      }

    getRate = async () => {
        const rate = await bitcoinsService.getRate(this.state.user.coins);
        this.setState({ rate })
        // return rate //return a promise, cant get the data - check!!
        // }
        // catch {
        //     return 'Failed to get the data'
        // }
    }



    render() {
        const {user,rate} = this.state;
        if (!user) return <div className="loader">Loading...</div>
        return (
            <div className='home flex column'>
                <div className='home-info flex column auto-center'>
                <h1>Hello {user.name}</h1>
                <h1>Coins: {user.coins}</h1>
                <h1>BTC: {rate} </h1>
                </div>
            </div>
        )
    }
}

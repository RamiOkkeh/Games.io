import { setUser } from '../actions/actions.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayGame from './DisplayGame'
const $ = require('jquery')

class Profile extends Component {

    // Gets the logged in user's info
    
    componentDidMount() {
        fetch('/game')
          .then(res => res.json())
            .then(res => {
                if (localStorage.getItem('gamesio')) {
                    let newUser = this.props.user;
                    newUser.games = res.filter(elem => elem.postedBy === this.props.user._id);
                    this.props.setUser(newUser);
                    localStorage.setItem('gamesio', JSON.stringify(newUser));
                    this.setState({})
                }
            })
    }

    // Changes profile picture & saves in database
    updateImage = () => {
        let newImg = document.getElementById('newImg');
        let name = this.props.user.username
        let newUser = this.props.user
        if (newImg.files && newImg.files[0]) {
            let reader = new FileReader();
            reader.onload = e => {
                let options = {
                    method: 'put',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"profile": e.target.result})
                }
                fetch('/user/' + name, options)
                .then(res => {
                    if (res.status === 200) {
                        newUser.profile = e.target.result
                        this.props.setUser(newUser)
                        localStorage.setItem('gamesio', JSON.stringify(newUser))
                        this.setState({})
                    } else {
                        throw new Error('plop')
                    }
                })
                .catch(res => alert('image too large'))
            }
            reader.readAsDataURL(newImg.files[0])
        }
    }

    // Changes name & saves in database
    updateName = () => {
        let newName = $('#change-name').val()
        let oldName = this.props.user.username
        let options = {
            method: 'put',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"username": newName})
        }
        fetch('/user/' + oldName, options)
        .then(res => {
            if (res.status === 200) {
                let newUser = this.props.user
                newUser.username = newName
                this.props.setUser(newUser)
                localStorage.setItem('gamesio', JSON.stringify(newUser))
                alert('New Username:' + newName )
            } else {
                throw new Error('plop')
            }
        })
        .catch(res => alert('username already taken'))
    }

    // Changes password for the signed in user
    updatePass = () => {
        let newPass = $('#change-pass').val()
        let name = this.props.user.username
        let options = {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({password: newPass, username: name})
        }
        fetch('/user/' + name, options)
            .then(res => {
            console.log(res)
            if (res.status === 200) {
                alert('Password changed successfully')
            } else {
                throw new Error('plop')
            }
        })
        .catch(res => alert('Password must be longer than 6 characters'))
    }
    render() {
        return (
            <div className="center styled profile">
                <img className="profileimg" alt="Profile" src={this.props.user.profile ? this.props.user.profile : "./media/signin.png"} />
                <br />
                <br />
                <input type="file" id="newImg" onChange={()=>{this.updateImage(this)}}/><p className="up">Change Picture</p> 
                <span>Username</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit" onClick={this.updateName}>Change Name</button>
                <br/>
                <span>Password</span>  <input type="password" className="text" id="change-pass" name="change-pass" />  <button className="edit" onClick={this.updatePass}>Change Password</button>
                <div>
                    <p>My Games</p>
                    <div className="row">
                        {this.props.user.games.map((elem, i) => <DisplayGame game={elem} key={i} item={i} rerender={() => this.setState({})} />)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (z) => { dispatch(setUser(z)) }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile)

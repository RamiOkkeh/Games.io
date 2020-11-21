import { color, setUser } from '../actions/actions.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class Color extends Component {
  colorize=()=>{
    let colors=[]
    for(var i=0;i<$(".color").length;i++){
      colors.push($(".color")[i].value)
    }
    let options = {
      method: 'put',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({colors: colors})
    }
    fetch(`/user/${this.props.user.username}`, options)
      .then(res => {
        if (res.status === 200) {
          let newUser = this.props.user
          newUser.colors = colors
          this.props.setUser(newUser)
          localStorage.setItem('gamesio', JSON.stringify(newUser))
          this.props.color(colors);
          this.props.refreshApp()
        }
      })
      .catch(err => console.log(err))
  }

    render() {
        return (
          <div className="center column styled">
            <div style={{color:this.props.colors[3]}}>Containers Color : <input type="color" className="color"/></div>
            <div style={{color:this.props.colors[3]}}>Borders Color : <input type="color" className="color"/></div>
            <div style={{color:this.props.colors[3]}}>Menu Color : <input type="color" className="color"/></div>
            <div style={{color:this.props.colors[3]}}>Font Color : <input type="color" className="color"/></div>
            <div style={{color:this.props.colors[3]}}>Hover : <input type="color" className="color"/></div>
            <br/>  
            <div style={{color:this.props.colors[3]}}>Background Color : <input type="color" className="color"/></div>
            <div style={{color:this.props.colors[3]}}>Particles Color : <input type="color" className="color"/></div>
            <div style={{color:this.props.colors[3]}}>Links Color : <input type="color" className="color"/></div>
            <br/>  
            <button  style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}} onClick={this.colorize}>Set Colors</button>
          </div>
        )
    }
}

// Redux
const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    user: state.user,
    refreshApp: state.refreshApp
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    color: (z) => { dispatch(color(z)) },
    setUser: (z) => { dispatch(setUser(z)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);

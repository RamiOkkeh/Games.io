import Particles from 'react-particles-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
           
// Creates Particles animated background
// Creates Random Color Hex Value
class Particle extends Component {
    render() {
      let r=Math.floor(Math.random()*16777215).toString(16);
      r="#"+r
        return (
          <div id="particles">
            <Particles
              params={{
                background: {
                  color: {
                    value: "#ffffff",
                  },
                },
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse"
                    }
                  },
                  modes: {
                    push: {
                      quantity: 7,
                    },
                    repulse: {
                      distance: 222,
                      duration: 2,
                    },
                  },
                },
                particles: {
                  color: {
                    value: r,
                  },
                  links: {
                    color: r,
                    distance: 222,
                    width: 2,
                    opacity: 0.7
                  },
                  move: {
                    speed: 7,
                  },
                  number: {
                    value: 77,
                  },
                  size: {
                    value: 7,
                  },
                },
              }}
            />
            </div>
        )
      }
    }

// Redux 
const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}
export default connect(mapStateToProps)(Particle);

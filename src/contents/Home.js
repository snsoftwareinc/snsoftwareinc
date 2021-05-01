import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/photo.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Software Developemnt Company','Cloud Design and Development']} speed={10} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    
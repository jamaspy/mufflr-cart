import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            value: ''
        };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }
      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }
      handleMessageChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert(`Name: ${this.state.name} Email: ${this.state.email} Message:${this.state.value}`);
        event.preventDefault();
      }
    
      render() {
        return (
          <form 
          onSubmit={this.handleSubmit}
          style={{
              border: "1px solid black",
              borderRadius: 10,
              maxWidth: "50%",
              margin: "0 auto",
              padding: 20,
              textAlign: "center",
          }}
          >


            <label style={{marginBottom:"10px"}}>
              <h1>What Do We Call You</h1>
              <input 
              type="text"
              placeholder="Your Moniker Here" 
              name={this.state.value} 
              onChange={this.handleNameChange}
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
                fontSize: `1.5rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`,
                borderRadius:"3px",
                border: "1px solid grey"
              }}
              />
            </label>

            <label>
              <h1>How We Reply</h1>
              <input t
              type="email"
              placeholder="snail@mail.com" 
              email={this.state.value} 
              onChange={this.handleEmailChange} 
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
                fontSize: `1.5rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`,
                borderRadius:"3px",
                border: "1px solid grey"
              }}
              />
            </label>

            <label>
              <h1>Your Words </h1>
              <textarea 
              type="text"
              placeholder="We love you clothing, you are amazing" 
              value={this.state.value} 
              onChange={this.handleMessageChange} 
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
                fontSize: `1rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`,
                borderRadius:"3px",
                border: "1px solid grey"
              }}
              />
            </label>

            <input 
            type="submit" 
            value="Submit" 
            style={{
                marginTop: 20,
                border: `1px solid black`,
                borderRadius: 5,
                background:`linear-gradient(#141E30 0, #243B55 100%)`,
                color: `white`,
                padding: 10,
                fontSize: `1rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`
            }}
            />
          </form>
        );
      }
}

export default Form;


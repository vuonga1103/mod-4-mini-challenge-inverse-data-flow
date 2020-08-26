import React from 'react'

class NewSpice extends React.Component {

  // NewSpice has access to this.props.addNewSpice function, which takes in a new spice object

  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  // Will set the state to what the user input
  handleInput = e => this.setState({[e.target.name]: e.target.value});

  // Calls on addNewSpice function passed down from App, add the new spice, which is stored in this.state
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewSpice(this.state);
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" value={this.state.image} onChange={this.handleInput} />
          <label htmlFor="notes">Tasting Notes: </label>
          <input type="text" name="notes" value={this.state.notes} onChange={this.handleInput} />
          <label htmlFor="notes">Description: </label>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleInput} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice
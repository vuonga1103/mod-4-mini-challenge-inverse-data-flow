import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("submitting...")
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" />
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" />
          <label htmlFor="notes">Tasting Notes: </label>
          <input type="text" name="notes" />
          <label htmlFor="notes">Description: </label>
          <textarea type="text" name="description" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice
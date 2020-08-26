import React from 'react'
import SpiceItem from './SpiceItem'
import Filter from './Filter'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  // Takes in search term and changes state.search to that search term; to be passed down to Filter child
  changeSearch = searchTerm => this.setState({ search: searchTerm })
  

  // Will change the fourStarOnly to the boolean value passed; to be passed down to Filter child
  changeFourStar = bool => this.setState({ fourStarOnly: bool });
  

  renderSpices() {
    return this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(spice => (
        <SpiceItem key={spice.id} spice={spice} />
      ))
  }

  render() {
    return (
      <section className="spice-list">
        <Filter search={this.state.search} fourStarOnly={this.state.fourStarOnly} changeSearch={ this.changeSearch } changeFourStar={ this.changeFourStar }/>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList
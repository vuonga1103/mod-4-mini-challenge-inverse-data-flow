import React from 'react'

class Filter extends React.Component {
  // What SpiceList passed down to Filter via props: 
    // search={this.state.search} => this.props.search
    // fourStarOnly={this.state.fourStarOnly} => this.props.fourStarOnly
    // changeSearch={this.changeSearch} => this.props.changeSearch
    // changeFourStar={this.changeFourStar} => this.props.changeFourStar

  // Calls on changeSearch function passed down from SpiceList parent, passing in the current search value that user inputted
  handleSearch = event => this.props.changeSearch(event.target.value);

  // Calls on changeFourStar function passed down from SpiceList parent, passing in true if 4 Star Only box is checked and false otherwise
  handleFourStar = event => {
    event.target.checked
      ? this.props.changeFourStar(true) 
      : this.props.changeFourStar(false);
  }

  render() {
    return (
      <div className="card">
        <h2>Filter Spices</h2>
        <div className="filters">
          <div>
            <label>Search: </label>
            <input
              type="text"
              placeholder="Search By Tasting Notes..."
              value={this.props.search}
              onChange={ this.handleSearch }
            />
          </div>
          <label>
            4 Star Only <input
              type="checkbox"
              value={this.props.fourStarOnly}
              onChange={ this.handleFourStar }
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Filter
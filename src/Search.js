import React, { Component } from 'react';
import './Search.css'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      isLoading: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const places = this.props.app.state.oldPlaces

    places.push({
      name: this.state.value,
      latitude: 40,
      longitude: -72
    })

    this.props.app.setState({
      places: places
    })

    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} placeholder="Add place" />
      </form>
    )
  }
}

export default Search

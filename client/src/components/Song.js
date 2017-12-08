import React from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'

class Song extends React.Component {
  state = {
    editing: false,
    title: this.props.title,
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    rank: this.props.rank
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleEditing = (cancel = false) => {
    const { minutes, seconds, rank } = this.props
    if (cancel)
      this.setState({ minutes, seconds, rank })
    const {editing} = this.state
    this.setState({ editing: !editing })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, minutes, seconds, rank } = this.state
    const song = { id: this.props.id, title, minutes, seconds, rank }
    this.props.editSong(song)
    this.toggleEditing()
  }

  showSong = () => {
    const { id, title, minutes, seconds, rank, deleteSong } = this.props
    let secs = ''
    switch(seconds) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        secs = `0${seconds}`
        break
      default:
        secs = seconds
        break
    }

    const time = `${minutes}:${secs}`
    return (
      <Grid.Row>
        <Grid.Column width='6'>
          <h3>{rank})</h3>
        </Grid.Column>
        <Grid.Column width='6'>
          Title: {title}
        </Grid.Column>
        <Grid.Column width='3'>
          Length: { time }
        </Grid.Column>
        <Button onClick={this.toggleEditing} size='mini' color='blue'>Edit</Button>
        <Button onClick={() => deleteSong(id)} size='mini' color='red'>Delete</Button>
      </Grid.Row>
    )
  }

  editSong = () => {
    const { id, title, minutes, seconds, rank, editSong } = this.props
    return (
      <Form size='mini'>
        <Form.Group>
          <Form.Input onChange={this.handleChange} name='title' label='Song Title' value={this.state.title} required />
          <Form.Input onChange={this.handleChange} name='minutes' label='Minutes' value={this.state.minutes} required />
          <Form.Input onChange={this.handleChange} name='seconds' label='Seconds' value={this.state.seconds} required />
          <Form.Input onChange={this.handleChange} name='rank' label='Rank' value={this.state.rank} required />
          <Button color='grey' onClick={() => this.toggleEditing(true)} size='mini'>Cancel</Button>
          <Button color='blue' type='submit' onClick={this.handleSubmit} size='mini'>Save</Button>
        </Form.Group>
      </Form>
    )
  }

  render() {
    return (
      <div>
        { this.state.editing ? this.editSong() : this.showSong() }
      </div>
    )

  }
}

export default Song

import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

class SongForm extends React.Component {
  state = { title: '', minutes: 0, seconds: 0, rank: 0}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  handleSubmit = (e) => {
    e.preventDefault()
    const { title, minutes, seconds, rank } = this.state
    const song = { title, minutes, seconds, rank }
    this.props.addSong(song)
    this.setState({ title: '', minutes: 0, seconds: 0, rank: 0 })
  }

  render() {
    return(
      <Form className='song-form' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Form.Input label='Song Title' value={this.state.title} onChange={this.handleChange} name='title' required />
              </Grid.Column>
              <Grid.Column width={3}>
                <Form.Input label='Mins' value={this.state.minutes} onChange={this.handleChange} name='minutes' type='number' min='0' required/>
              </Grid.Column>
              :
              <Grid.Column width={3}>
                <Form.Input label='Secs' value={this.state.seconds} onChange={this.handleChange} name='seconds' type='number' min='0' max='59' required/>
              </Grid.Column>
              <Grid.Column width={3}>
                <Form.Input label='Rank' value={this.state.rank} onChange={this.handleChange} name='rank' type='number' min='1' max='100' required/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Button color='blue' id='submit-button' type='submit'>Submit</Button>
        </Form.Group>

      </Form>
    )
  }
}

export default SongForm

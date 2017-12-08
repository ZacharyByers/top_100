import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import SongForm from './components/SongForm'
import Songs from './components/Songs'
import { Message } from 'semantic-ui-react'
import './App.css'

class App extends Component {
  state = { songs: [], error: false }

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }

  addSong = (song) => {
    console.log(this.state.songs)
    console.log('here')
    axios.post('/api/songs', { song })
      .then( res => {
        const { songs } = this.state
        this.setState({ songs: [...songs, res.data], error: false })
      })
      .catch( errors => {
        this.setState({ error: 'Rank must be unique' })
      })
  }


  editSong = (song) => {
    axios.put(`/api/songs/${song.id}`, { song })
      .then( res => {
        let songs = this.state.songs.map( s => {
          if (s.id === song.id)
            return res.data
          return s
        })
        this.setState({ songs, error: false })
      })
      .catch( error => {
        this.setState({ error: 'rank must be unique'})
      })
  }

  deleteSong = (id) => {
    axios.delete(`/api/songs/${id}`)
    .then( () => {
      const { songs } = this.state
      this.setState({ songs: songs.filter( t => t.id !== id ) })
    })
  }


  render() {
    return (
      <Container>
        <h1>Top 100 Music billboard</h1>
        { this.state.error &&
          <Message negative>
            <Message.Header>{this.state.error}</Message.Header>
          </Message> }
        <SongForm addSong={this.addSong} />
        <Songs songs={this.state.songs} editSong={this.editSong} deleteSong={this.deleteSong} />
      </Container>
    );
  }
}

export default App;

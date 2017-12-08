import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import SongForm from './components/SongForm'
import Songs from './components/Songs'
import './App.css'

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }

  addSong = (song) => {
    console.log(this.state.songs)
    console.log('here')
    axios.post('/api/songs', { song })
      .then( res => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, res.data] })
      })
  }


  editSong = (song) => {

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
        <SongForm addSong={this.addSong} />
        <Songs songs={this.state.songs} editSong={this.editSong} deleteSong={this.deleteSong} />
      </Container>
    );
  }
}

export default App;

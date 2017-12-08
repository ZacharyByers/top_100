import React from 'react'
import Song from './Song'
import { Grid } from 'semantic-ui-react'

const Songs = ({ songs, editSong, deleteSong }) => (
  <div>
    { songs.map( song =>
        <Song
          key={song.id}
          {...song}
          editSong={editSong}
          deleteSong={deleteSong}
        />
    )}
    </div>

)

export default Songs

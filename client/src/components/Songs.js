import React from 'react'
import Song from './Song'
import { Grid } from 'semantic-ui-react'
import _, { orderBy } from 'lodash'

const Songs = ({ songs, editSong, deleteSong }) => {
  let sortedSongs = _.orderBy( songs, ['rank'], ['asc'] )
  return (
    <Grid>
      { sortedSongs.map( song =>
        <Grid.Row>
          <Song
            key={song.id}
            {...song}
            editSong={editSong}
            deleteSong={deleteSong}
          />
        </Grid.Row>
      )}
    </Grid>
  )
}

export default Songs


// // Possibly do the export function as an arrow function.

// export default props => {}

// Andrew prefers to do exports at the bottom so it includes the name of the component. 

import React from 'react'
import Pokemon from './Pokemon'

// export default props => {}
// export default function(props){}

function Pokedex(props) {
  return (
    <div>
      Pokedex.js
      <Pokemon
        saveName={props.saveName}
        releasePokemon={props.releasePokemon}
      />
    </div>
  )
}

export default Pokedex

import { useState, useEffect } from 'react'
import axios from 'axios'


function Pokemons() {
    const [pokemons,setPokemons] = useState([])
    const [limit, setLimit] = useState(10)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
        .then(e=>{setPokemons(e.data.results); console.log(e.data.results)})
        .catch(error=>console.log(err))
    }, [limit])

  return (
    <>
      <h2>Sa cope do?</h2>
      <input type="text" onChange={(e)=>setLimit(e.target.value)} />
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
  <tbody>
      {
        pokemons.map(( item,index )=> {
            return <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            <td>{item.url}</td>
            <td>@mdo</td>
            </tr>
        })
        
      }
 
  </tbody>
</table>
</>
  )
}

export default Pokemons
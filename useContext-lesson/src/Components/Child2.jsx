/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useContext} from 'react'
import { FirstContext } from '../FirstContext';


const Child2 = () => {

  const {address} = useContext(FirstContext);
  return (
    <section>
        <h1>Child 2</h1>
        <h3>From FirstContext : {address}</h3>
    
      </section>
  )
}

export default Child2;
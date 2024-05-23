/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useContext} from 'react'
import { FirstContext } from '../FirstContext';

const Child3 = () => {

  const {username} = useContext(FirstContext);
  return (
    <section>
        <h1>Child 3</h1>
        <h3>From FIrst Context : {username}</h3>
      </section>
  )
}

export default Child3;
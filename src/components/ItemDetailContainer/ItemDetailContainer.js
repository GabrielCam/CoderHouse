import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItemById } from '../../asyncmock'
import {useParams} from 'react-router-dom'
import { firestoreDB } from '../../services/firebase'
import { getDoc, doc, snapshotEqual } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [show,setShow] = useState(false)

    const {id} = useParams()

    useEffect(()=>{
        const docRef = doc(firestoreDB, 'products', id)

        getDoc(docRef).then(querySnapshot=>{
          const product = {id:querySnapshot.id, ...querySnapshot.data()}
          setProduct(product)
        }).catch(error=>{
          console.log(error)
        }).finally(()=>{
          setShow(true)
        })

    },[id,show])
  return (
    <div>
        {show?<ItemDetail {...product}/>:<div className="d-flex justify-content-center mt-5">
  <div className="spinner-border" style={{width:"4rem",height:"4rem"}} role="status">
  </div>
</div>}
    </div>
  )
}

export default ItemDetailContainer
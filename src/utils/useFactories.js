import { useState, useEffect } from "react"
import firebase from "../services/firebase"

export default function useFactories() {
  const [factory, setFactory] = useState([])

  useEffect(() => {
    //we need an unsuscribe callback to unmount collection
    const db = firebase.firestore()
    const unsubscripe = db.collection("factories").onSnapshot(snapshot => {
      const newFactories = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setFactory(newFactories)
    })
    return () => unsubscripe()
  }, [])

  return factory
}

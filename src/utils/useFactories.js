import { useState, useEffect } from "react"
import firebase from "../services/firebase"

export default function useFactories() {
  const [factories, setFactories] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const db = firebase.firestore()
    const unsubscribe = db
      .collection("factories")
      //add some sorting logic
      // .where("continent", "==", "asia")
      .get()
      .then(function(querySnapshot) {
        const newFactories = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        err => {
          setError(err)
        }
        setFactories(newFactories)
      })

    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when we leave component
    return () => nsubscribe()
  }, [])

  return { factories, error }
}

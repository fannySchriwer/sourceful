import React from "react"
import firebase from "../services/firebase"
import SEO from "../components/seo"

const IndexPage = () => {
  var db = firebase.firestore()

  console.log(db)
  console.log(db.collection("factories"))
  db.collection("factories")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data().name}`)
      })
    })
  return (
    <div>
      <SEO title="Home" />

      <h1>This is sourceful</h1>
    </div>
  )
}

export default IndexPage

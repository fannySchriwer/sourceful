import React from "react"
import SEO from "../components/Seo"
import FactoryList from "../components/FactoryList"

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />

      <h1>This is sourceful</h1>
      <FactoryList />
    </div>
  )
}

export default IndexPage

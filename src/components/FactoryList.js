import React from "react"
import useFactories from "../utils/useFactories"
import FactorySummary from "../components/FactorySummary"

const FactoryList = () => {
  const factories = useFactories()
  console.log(factories)
  return (
    <div>
      <h1>Factories</h1>

      {factories.map(factory => {
        return <FactorySummary key={factory.id} factory={factory} />
      })}
    </div>
  )
}

export default FactoryList

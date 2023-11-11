import { Hero, Sales } from "./Components/index"
import { heroapi, popularsales, toprateslaes } from "./Data/data"
function App() {
  return (
    <>
      <main>
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  )
}

export default App

import {FlexContent, Hero, Sales } from "./Components/index"
import { heroapi, popularsales, toprateslaes } from "./Data/data"
function App() {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}></Hero>
        {/* Conditional statement */}
        <Sales endpoint={popularsales} ifExists/> 
        <Sales endpoint={toprateslaes} />
        <FlexContent></FlexContent>
      </main>
    </>
  )
}

export default App

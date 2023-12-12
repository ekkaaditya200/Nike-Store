import { FlexContent, Hero, Sales, Stories, Footer, Navbar, Cart } from "./Components/index"
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from "./Data/data"
function App() {
  return (
    <>
      <Navbar />
      <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists></FlexContent>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}></FlexContent>
        <Stories story={story}></Stories>
      </main>
      <Footer footerAPI={footerAPI}></Footer>
    </>
  )
}

export default App

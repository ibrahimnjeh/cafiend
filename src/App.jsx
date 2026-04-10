import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"


function App() {
   const isAuthentificated = false
   
   const AuthentificatedContend = (
    <>
      <Stats/>
      <History/>
    </>
   )
   
   
   return(
    <Layout>
      <Hero/>
      <CoffeeForm/>
      {isAuthentificated && (AuthentificatedContend)}
      
    </Layout>
   )
}

export default App
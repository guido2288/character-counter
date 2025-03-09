import Density from "./components/Density"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Statistics from "./components/Statistics"

function App() {


  return (
    <div className="max-w-[990px] mx-auto overflow-hidden ">
      <Navbar />
      <h1 className="text-neutral-900 text-[40px] font-bold max-w-[340px] leading-9 text-center mx-auto my-8 md:max-w-[510px] md:text-[64px] md:leading-14">Analyze your text in real-time.</h1>
      <Form />
      <Statistics />
      <Density />
    </div>
  )
}

export default App

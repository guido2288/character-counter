import { useEffect, useState } from "react"
import Density from "./components/Density"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Statistics from "./components/Statistics"


function App() {

  const [theme, setTheme] = useState( () => {
    if(window.matchMedia('(prefers-color-schema: dark)').matches) {
      return 'dark'
    }

    return 'light'
  } )

  useEffect(() => {
    if( theme === "dark" ){
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  


  return (
      <div className="w-full min-h-dvh" style={ {backgroundImage:  `${theme === 'dark' ? "url('/bg-dark-theme.png')" : "url('/bg-light-theme.png')"}` , backgroundSize:"cover"} }>
        <div className="max-w-[990px] mx-auto overflow-hidden" >
          <Navbar handleChangeTheme={handleChangeTheme}  theme={theme} />
          <h1 className="text-neutral-900 dark:text-neutral-100  text-[40px] font-bold max-w-[340px] leading-9 text-center mx-auto my-8 md:max-w-[510px] md:text-[64px] md:leading-14">Analyze your text in real-time.</h1>
          <Form />
          <Statistics />
          <Density theme={theme}/>
        </div>
      </div>
  )
}

export default App

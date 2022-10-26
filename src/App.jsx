import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Links from './components/Links'
import Profile from './components/Profile'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <div className="App">
        <Profile/>
        <Links/>
      </div>
    </ChakraProvider>
  )
}

export default App

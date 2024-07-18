
import PrimaryButton from './components/PrimaryButton'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import HomePage from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react'



function App() {


  return (
<ChakraProvider>
    <Router>

      <Routes>

      <Route index element={<PrimaryButton />}/>
      <Route path="homepage" element={<HomePage/>}/>
      {/* <Route path="*" element={<PageNotFound />}/> */}


      </Routes>

    </Router>
    </ChakraProvider>


  )
}

export default App

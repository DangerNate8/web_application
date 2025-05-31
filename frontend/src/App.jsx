import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from "@/components/ui/color-mode"

// Mentions where the code is for the different routes
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/ui/Navbar';


function App() {
  return (
    <>
    <Box minH={'100vh'} bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200" bg ={useColorModeValue("orange.100", "orange.200")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
    </>
  )
}

export default App
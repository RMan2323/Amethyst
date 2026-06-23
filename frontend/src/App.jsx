import { Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react';
import { Toaster } from "../src/components/ui/toaster"
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box minH={"100vh"}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </Box>
  );
}

export default App;

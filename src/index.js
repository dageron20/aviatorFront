import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { overrides } from './styles/theme'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraBaseProvider theme={overrides}>
    <App />
  </ChakraBaseProvider>
)

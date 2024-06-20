import React__default from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { overrides } from './index'

export const ThemeProvider = ({ children }) => {
    return /*#__PURE__*/ React__default.createElement(
        ChakraProvider,
        {
            theme: overrides,
        },
        children
    )
}
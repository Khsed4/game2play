import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig= {
    initialColorMode:'dark'
}

const myTheme = extendTheme({
    config
})

export default myTheme;
import { HStack, Box, Switch } from "native-base";

function ToggleDarkMode(){
return(
    <Box bg={colorMode==='light' ? "white":"blue.800"} p={3}>
        <HStack space={2} alignItems="center" justifyContent="space-between">
            <Text color={colorMode==='light' ? "black":"white"} fontSize={20} fontWeight="bold">Dark</Text>
            <Switch isChecked={colorMode==='light'} onToggle={toggleColorMode} 
            aria-Label={colorMode==="light" ? "switch to drak Mode": "switch to light mode"} /> 
            <Text color={colorMode==='light' ? "black":"white"} fontSize={20} fontWeight="bold">Light</Text>
        </HStack>
    </Box>
)};

export default ToggleDarkMode;
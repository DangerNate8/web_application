import { Link } from "react-router-dom"
import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"


const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue("🌚", "🌞")
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
       >

        <Text
          fontSize={{base: "22px", sm: "28px"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r" gradientFrom="green.300" gradientTo="blue.400"
          bgClip="text"
        >
            {/* Allows user to click to return to HomePage */}
          <Link to={"/"}>Product Store 🛒</Link>    
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <IconButton aria-label="Search database" size={"lg"}>
            <LuPlus />
          </IconButton>
          </Link>
          <Button onClick={toggleColorMode}>
            {icon}
          </ Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar

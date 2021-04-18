import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Link,
  Code,
  Grid,
  VStack,
  HStack,
  Button,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack spacing={14} minH={"70vh"}>
      <HStack
        justifyContent={["space-between", "space-between", "space-around"]}
        spacing={10}
        w={"100%"}
        px={4}
        py={6}
      >
        <Text
          textTransform={"uppercase"}
          fontSize={"2xl"}
          fontWeight={800}
          color={"white"}
        >
          TechAce{" "}
          <Text as={"span"} color={"red.500"}>
            .
          </Text>
        </Text>

        <HStack spacing={8} display={["none", "none", "flex"]}>
          <Link color={"red.500"} fontWeight={500}>
            Home
          </Link>

          <Link color={"white"} fontWeight={500}>
            Services
          </Link>

          <Link color={"white"} fontWeight={500}>
            Team
          </Link>

          <Link color={"white"} fontWeight={500}>
            Careers
          </Link>

          <Link color={"white"} fontWeight={500}>
            Blogs
          </Link>

          <Link color={"white"} fontWeight={500}>
            Contact Us
          </Link>

          <Link color={"white"} fontSize={22}>
            <AiOutlineTwitter />
          </Link>

          <Link color={"white"} fontSize={22}>
            <AiOutlineGithub />
          </Link>
        </HStack>

        <VStack display={["flex", "flex", "none"]} onClick={onOpen}>
          <GiHamburgerMenu color="white" fontSize="22" />

          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent background="black">
                <DrawerBody>
                  <VStack spacing={6} mt={10}>
                    <Link color={"red.500"} fontWeight={500}>
                      Home
                    </Link>

                    <Link color={"white"} fontWeight={500}>
                      Services
                    </Link>

                    <Link color={"white"} fontWeight={500}>
                      Team
                    </Link>

                    <Link color={"white"} fontWeight={500}>
                      Careers
                    </Link>

                    <Link color={"white"} fontWeight={500}>
                      Blogs
                    </Link>

                    <Link color={"white"} fontWeight={500}>
                      Contact Us
                    </Link>

                    <Link color={"white"} fontSize={22}>
                      <AiOutlineTwitter />
                    </Link>

                    <Link color={"white"} fontSize={22}>
                      <AiOutlineGithub />
                    </Link>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </VStack>
      </HStack>

      <Heading
        fontSize={[60, 60, 80]}
        fontWeight={500}
        color={"white"}
        textAlign={"center"}
      >
        We are TechAce{" "}
        <Text as={"span"} color={"red.500"}>
          .
        </Text>
      </Heading>

      <VStack>
        <Text
          textAlign="center"
          fontSize={"3xl"}
          fontWeight={"medium"}
          w={["100%", "60%", "60%"]}
          color={"white"}
        >
          Open Source Fanatics &#38; Key Contributors
        </Text>
      </VStack>

      <Stack spacing={[3, 3, 12]} direction={["column", "column", "row"]}>
        <Button colorScheme={"red"}>Check our Services</Button>
        <Button variant={"link"} color={"white"}>
          More about TechAce
        </Button>
      </Stack>
    </VStack>
  );
}

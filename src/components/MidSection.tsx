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
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { RiHandHeartFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import SibiPic from "../assets/sibi.png";
import RakeshPic from "../assets/rakesh-big.png";

export default function MidSection() {
  return (
    <VStack spacing={24}>
      <VStack mt={[16, 16, 0]}>
        <Heading color={"white"} size={"2xl"} fontWeight={500}>
          What we do{" "}
          <Text as={"span"} color={"red.500"}>
            .
          </Text>
        </Heading>

        <Text color={"white"} w={["90%", "70%", "60%"]} textAlign={"center"}>
          At TechAce, our goal is to help elevate teams - giving them the push
          they need to truly succeed in today's ever-changing tech world.
        </Text>
      </VStack>

      <Stack
        direction={["column", "column", "row"]}
        w={"90%"}
        spacing={[14, 14, 0]}
      >
        <VStack spacing={10}>
          <Text color={"white"} fontSize={55}>
            <FaHandsHelping />
          </Text>

          <VStack>
            <Heading color={"white"} size={"lg"} fontWeight={500}>
              Consulting{" "}
              <Text as={"span"} color={"red.500"}>
                .
              </Text>
            </Heading>

            <Text
              color={"gray.300"}
              w={["90%", "70%", "80%"]}
              textAlign={"center"}
            >
              Let us help take your Application to the next level - planning the
              next big steps, reviewing architecture, and brainstorming with the
              team to ensure you achieve your most ambitious goals!
            </Text>
          </VStack>
        </VStack>

        <VStack spacing={10}>
          <Text color={"white"} fontSize={55}>
            <RiHandHeartFill />
          </Text>

          <VStack>
            <Heading color={"white"} size={"lg"} fontWeight={500}>
              Development{" "}
              <Text as={"span"} color={"red.500"}>
                .
              </Text>
            </Heading>

            <Text
              color={"gray.300"}
              w={["90%", "70%", "80%"]}
              textAlign={"center"}
            >
              TechAce can become part of your development process, making sure
              that you're building enterprise-grade, scalable applications with
              best-practices in mind, all while getting things done better and
              faster!
            </Text>
          </VStack>
        </VStack>

        <VStack spacing={10}>
          <Text color={"white"} fontSize={55}>
            <FaChalkboardTeacher />
          </Text>

          <VStack>
            <Heading color={"white"} size={"lg"} fontWeight={500}>
              Workshops{" "}
              <Text as={"span"} color={"red.500"}>
                .
              </Text>
            </Heading>

            <Text
              color={"gray.300"}
              w={["90%", "70%", "80%"]}
              textAlign={"center"}
            >
              Have a TechAce team member come to YOU! Get your team up to speed
              with guided workshops on a huge variety of topics. Modern NodeJS
              (or NestJS) development, JavaScript frameworks, Reactive
              Programming, or anything in between! We've got you covered
            </Text>
          </VStack>
        </VStack>

        <VStack spacing={10}>
          <Text color={"white"} fontSize={55}>
            <RiHandHeartFill />
          </Text>

          <VStack>
            <Heading color={"white"} size={"lg"} fontWeight={500}>
              Open-source{" "}
              <Text as={"span"} color={"red.500"}>
                .
              </Text>
            </Heading>

            <Text
              color={"gray.300"}
              w={["90%", "70%", "80%"]}
              textAlign={"center"}
            >
              We love open-source because we love giving back to the community!
              We help maintain & contribute to some of the largest open-source
              projects, and hope to always share our knowledge with the world!
            </Text>
          </VStack>
        </VStack>
      </Stack>

      <VStack>
        <Button colorScheme="red">
          <HStack>
            <Text>Explore more</Text>
            <Text>
              <BsArrowRight fontSize={30} />
            </Text>
          </HStack>
        </Button>
      </VStack>

      <VStack w={["80%", "80%", "100%"]}>
        <Heading color={"white"} size={"2xl"} fontWeight={500}>
          Our team{" "}
          <Text as={"span"} color={"red.500"}>
            .
          </Text>
        </Heading>
        <Text color="white" textAlign="center">
          We've worked with small start-ups, to Fortune 500 companies, leading
          them all to success.
        </Text>
      </VStack>

      <Stack direction={["column", "column", "row"]} spacing={[20, 20, 64]}>
        <VStack spacing={16}>
          <VStack>
            <Image
              boxSize="150px"
              objectFit="contain"
              src={SibiPic}
              alt="Sibi Sharanyan"
            />
            <Link color={"red.500"}>@sibi-sharanyan</Link>
            <Heading size="lg" color="white">
              Sibi Sharanyan
            </Heading>
            <Text color="white">Co-Founder</Text>
          </VStack>
          <VStack spacing={0}>
            <Text color="gray.500">
              <Text as="span" color="red.500">
                JavaScript
              </Text>{" "}
              Expert
            </Text>
            <Text color="gray.500">React and Node Enthusiast</Text>
            <Text color="gray.500"> Passionate Programmer </Text>
            <Text color="gray.500">Cinemaholic</Text>
          </VStack>
        </VStack>

        <VStack spacing={16}>
          <VStack>
            <Image
              boxSize="150px"
              objectFit="contain"
              src={RakeshPic}
              alt="Sibi Sharanyan"
            />
            <Link color={"red.500"}>@rakesh</Link>
            <Heading size="lg" color="white">
              Rakesh Kumar
            </Heading>
            <Text color="white">Co-Founder</Text>
          </VStack>
          <VStack spacing={0}>
            <Text color="gray.500">
              <Text as="span" color="red.500">
                Business
              </Text>{" "}
              Development
            </Text>
            <Text color="gray.500">Growth Hacker</Text>
            <Text color="gray.500"> Project Manager </Text>
            <Text color="gray.500">Pet lover</Text>
          </VStack>
        </VStack>
      </Stack>

      <VStack mt={20} spacing={"36"}>
        <Button colorScheme="red">
          <HStack>
            <Text>Get to know us</Text>
          </HStack>
        </Button>{" "}
        <Heading
          color={"white"}
          fontSize={["4xl", "4xl", "8xl"]}
          fontWeight={900}
          width={["100%", "100%", "70%"]}
          textAlign="center"
          textTransform="uppercase"
        >
          We've delivered{" "}
          <Text as={"span"} color={"red.500"}>
            23
          </Text>{" "}
          projects for companies based around the globe.
        </Heading>
      </VStack>

      <VStack spacing={12}>
        <VStack w={["80%", "80%", "100%"]}>
          <Heading
            color={"white"}
            fontSize={["lg", "lg", "2xl"]}
            fontWeight={500}
          >
            Write us a message{" "}
            <Text as={"span"} color={"red.500"}>
              .
            </Text>
          </Heading>

          <Text color="white" textAlign="center">
            Let's talk about how TechAce can help your next project get to the
            next level.
          </Text>
        </VStack>

        <Stack direction={["column", "column", "row"]} spacing={7}>
          <VStack spacing={6}>
            <Input
              placeholder="First name"
              background="#1E0E40"
              color={"white"}
              border={"none"}
              w={80}
              h={12}
            />
            <Input
              placeholder="E-mail address"
              background="#1E0E40"
              color={"white"}
              border={"none"}
              w={80}
              h={12}
            />
            <Input
              placeholder="Phone number"
              background="#1E0E40"
              color={"white"}
              border={"none"}
              w={80}
              h={12}
            />
          </VStack>
          <Box alignSelf={"stretch"}>
            <Textarea
              placeholder="Your Message"
              h={"100%"}
              border={"none"}
              background="#1E0E40"
              color={"white"}
              w={["100%", "100%", "40rem"]}
            />
          </Box>
        </Stack>

        <Button colorScheme="red" alignSelf={["", "", "flex-end"]}>
          <HStack>
            <Text>Send message</Text>
            <Text>
              <BsArrowRight fontSize={30} />
            </Text>
          </HStack>
        </Button>

        <VStack w={["90%", "90%", "100%"]}>
          <Text color="white" fontSize={["lg", "lg", "2xl"]} textAlign="center">
            Rather send us an email? Write to:
          </Text>
          <Link color="white" fontSize={["3xl", "3xl", "5xl"]}>
            <Text as="span" fontWeight="bold">
              hello
            </Text>
            @techace.io
          </Link>
        </VStack>
      </VStack>

      <VStack p={10} w={"100%"}>
        <Box w={"100%"}>
          <Text color="gray.300" textAlign="start">
            2021 TechAce, Inc.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
}

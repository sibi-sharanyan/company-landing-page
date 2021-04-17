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
} from "@chakra-ui/react";

import { FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { RiHandHeartFill } from "react-icons/ri";

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
          At Trilon, our goal is to help elevate teams - giving them the push
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
              Trilon can become part of your development process, making sure
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
              Have a Trilon team member come to YOU! Get your team up to speed
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
    </VStack>
  );
}

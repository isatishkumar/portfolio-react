import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   <VStack>
    <Avatar name="avatar" src="https://i.pravatar.cc/150?img=7" size="xl"></Avatar>
    <Heading mb="12" size="sm">{greeting}</Heading>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
    </VStack> 
  </FullScreenSection>
);

export default LandingSection;

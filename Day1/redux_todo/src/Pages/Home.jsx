import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Home() {
  return (
    <Box>
      <Text
        fontSize={40}
        color={"cyan"}
        fontWeight={600}
      >
        welcome to Hompage
      </Text>
      <Box>
        <br />
        <br />
        <br />

        <Link to="/login">Login Page</Link>

        <br />
        <br />
        <br />
        <br />

        <Link to="/todo">Todo Page</Link>
      </Box>
    </Box>
  );
}

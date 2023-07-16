import React from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { GET_TODO_FAILURE_ACTION } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Delete({ handleDelete, id }) {
  // console.log(id);

  return (
    <Button
      colorScheme="red"
      onClick={() => handleDelete(id)}
    >
      Delete
    </Button>
  );
}

import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

export default function EditButton() {
  return (
    <Button
      colorScheme="teal"
      // onClick={() => handleEdit(id)}
    >
      Edit
    </Button>
  );
}

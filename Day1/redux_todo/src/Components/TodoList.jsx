import { Box, Text, Button } from "@chakra-ui/react";
import Delete from "./Delete";
import EditButton from "./EditButton";
import { useState } from "react";

export default function TodoList({
  status,
  title,
  id,
  handleDelete,
  handleEdit,
}) {
  const [stts, setstts] = useState(status);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      border={"1px solid white"}
      p={3}
      mb={5}
      w={"90%"}
      ml={50}
    >
      <Text fontSize={25}>{title}</Text>
      <Text fontSize={25}>
        <Button
          onClick={() => setstts(!stts)}
          colorScheme={stts ? "green" : "pink"}
        >
          {stts ? "Completed" : "Pending"}
        </Button>
      </Text>
      <EditButton handleEdit={handleEdit} />

      <Delete
        id={id}
        handleDelete={handleDelete}
      />
    </Box>
  );
}

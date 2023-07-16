import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function TodosInputBox({ handleTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    handleTodo(input);
    setInput("");
  };

  return (
    <>
      <Box
        display={"flex"}
        w={"500px"}
        m={"auto"}
      >
        <Input
          value={input}
          isRequired
          w={350}
          onChange={(e) => setInput(e.target.value)}
          // errorBorderColor="white"
          placeholder="add new todo"
        />
        <Button
          isDisabled={input.length <= 0}
          size={"md"}
          color={"white"}
          variant="outline"
          type="submit"
          onClick={handleAdd}
          _hover={{ bgColor: "#2f3036" }}
        >
          Add
        </Button>
      </Box>
    </>
  );
}

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import TodosInputBox from "./TodosInputBox";

export function BasicUsage({ data, handleChange, setInput }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={5}>
      <Button
        colorScheme="orange"
        onClick={onOpen}
      >
        Add Todo
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Add new todo</ModalHeader>
          <ModalCloseButton />

          <ModalBody
            // border={"1px solid green"}
            pr={20}
            pb={10}
          >
            <TodosInputBox handleTodo={data} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

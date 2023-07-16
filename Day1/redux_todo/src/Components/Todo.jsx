import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BasicUsage } from "./Modal";

import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import {
  GET_TODO_REQUEST_ACTION,
  GET_TODO_SUCCESS_ACTION,
  GET_TODO_FAILURE_ACTION,
  POST_TODO_FAILURE_ACTION,
  POST_TODO_SUCCESS_ACTION,
  POST_TODO_REQUEST_ACTION,
} from "../Redux/action";

import { useDispatch, useSelector } from "react-redux";

import TodoList from "./TodoList";

const url = "http://localhost:8080/todos";

export default function Todo() {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => {
    return { todos: state.todo.todos, isLoading: state.todo.isLoading };
  });

  // console.log(todos);
  const fetcheddata = () => {
    dispatch(GET_TODO_REQUEST_ACTION());
    axios
      .get(url)
      .then((res) => {
        dispatch(GET_TODO_SUCCESS_ACTION(res.data));
      })
      .catch((Error) => {
        dispatch(GET_TODO_FAILURE_ACTION());
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
      fetcheddata();
      console.log(res);
    });
  };

  // **********************************************
  // const handleEdit = (id) => {
  //   const url2 = `http://localhost:8080/todos/${id}`;
  //   axios({
  //     url2,
  //     method: "patch",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  useEffect(() => {
    fetcheddata();
  }, []);

  // ***********************************

  const handleSubmit = (input) => {
    // e.preventDefault();

    dispatch(POST_TODO_REQUEST_ACTION());

    const newPostdata = {
      title: input,
      status: false,
      id: Math.random(9),
    };
    axios
      .post(url, newPostdata)
      .then(function (response) {
        console.log(response);
        dispatch(POST_TODO_SUCCESS_ACTION(response.data));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(POST_TODO_FAILURE_ACTION());
      });

    // console.log("submitted");
  };

  return isLoading ? (
    <Spinner color="white" />
  ) : (
    <>
      <Box mb={20}>
        <Text
          pb={5}
          pt={5}
          fontSize={30}
          fontWeight={"bold"}
          color={"#EE9480"}
          bg={"black"}
        >
          Todo App
        </Text>

        <hr />

        <BasicUsage data={handleSubmit} />
      </Box>
      <Text fontSize={30}>Todo List</Text>

      {todos.length > 0 &&
        todos.map((ele) => {
          return (
            <TodoList
              {...ele}
              key={ele.id}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
}

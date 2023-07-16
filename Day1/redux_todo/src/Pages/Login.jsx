import axios from "axios";
import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  LOGIN_FAILURE_ACTION,
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
} from "../Auth/action";

// import { LOGIN_SUCCESS } from "../Auth/actionTypes";
export default function Login() {
  console.log("Login");
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  console.log(pasword);

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const storedata = useSelector((state) => {
    return state.auth;
  });

  console.log(storedata.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email: email,
      password: pasword,
    };
    dispatch(LOGIN_REQUEST_ACTION());

    // console.log(userdata);
    // Send a POST request
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: userdata,
    })
      .then((res) => {
        console.log(res);
        dispatch(LOGIN_SUCCESS_ACTION(res.data.token));
      })
      .then((error) => {
        dispatch(LOGIN_FAILURE_ACTION());
      });

    setEmail("");
    setPassword("");
  };
  return (
    <Box>
      <Text fontSize={30}>token : {storedata.token}</Text>
      <Text>eve.holt@reqres.in</Text>
      <Text>"cityslicka</Text>
      <form action="">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Box display={"flex"}>
          <Input
            type={show ? "text" : "password"}
            placeholder="password"
            paddingRight={"20px"}
            value={pasword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            // h="1.75rem"
            size="md"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </Box>
        <Button
          type="submit"
          onClick={handleSubmit}
        >
          submit
        </Button>
      </form>
    </Box>
  );
}

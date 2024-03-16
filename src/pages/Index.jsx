import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Input, Button, FormControl, FormLabel, Heading, Image, Text, Link, useToast, Avatar, AvatarBadge, IconButton } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin, FaGithub, FaUpload } from "react-icons/fa";

const Index = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    // Additional fields can be added here for user profile
  });

  const toast = useToast();

  const handleRegister = (event) => {
    event.preventDefault();
    // Here you would implement the registration logic
    toast({
      title: "Registration Successful.",
      description: "We've created your account.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Here you would implement the login logic
    toast({
      title: "Login Successful.",
      description: "You're now logged in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    // Here you would implement the profile update logic
    toast({
      title: "Profile Updated.",
      description: "Your profile has been updated.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Upload profile picture would be handled here
  const handleProfilePictureUpload = () => {
    // This function would handle the profile picture upload
    // Since we cannot actually upload images in this environment,
    // this is just a placeholder function
  };

  return (
    <ChakraProvider>
      <Box m={8}>
        <VStack spacing={4}>
          <Heading>Registration</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" onChange={handleChange} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleRegister}>
            Register
          </Button>
          <Text>Or register with:</Text>
          <Button leftIcon={<FaGoogle />} colorScheme="red">
            Google
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue">
            LinkedIn
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray">
            GitHub
          </Button>

          <Heading>Login</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" onChange={handleChange} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          <Text>Or login with:</Text>
          <Button leftIcon={<FaGoogle />} colorScheme="red">
            Google
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue">
            LinkedIn
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray">
            GitHub
          </Button>
          <Link href="#">Forgot password?</Link>

          <Heading>Dashboard</Heading>
          <Box>
            <Avatar size="xl">
              <AvatarBadge as={IconButton} icon={<FaUpload />} size="sm" color="white" onClick={handleProfilePictureUpload} />
            </Avatar>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="text" name="address" onChange={handleChange} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleUpdateProfile}>
              Update Profile
            </Button>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;

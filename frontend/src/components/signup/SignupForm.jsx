import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Box, Button, Flex, Text, Checkbox, Input, Image, Spinner } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../signup/CustomInput";
import PassHideShow from "../signup/PassHideShow";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SignupForm = () => {
  const [avatarFileName, setAvatarFileName] = useState("");
  const [coverFileName, setCoverFileName] = useState("");
  const [avatarError, setAvatarError] = useState("");
  const [coverImageError, setCoverImageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      fullName: "",
      address: '',
      phonenumber: '',
      avatar: null,
      coverImage: null,
    },
    onSubmit: async (values) => {
      if (!values.avatar) {
        setAvatarError("Avatar image is required.");
        return;
      }
      if (!values.coverImage) {
        setCoverImageError("Cover image is required.");
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("username", values.username);
      formDataToSend.append("email", values.email);
      formDataToSend.append("password", values.password);
      formDataToSend.append("fullName", values.fullName);
      formDataToSend.append("address", values.address);
      formDataToSend.append("phonenumber", values.phonenumber);
      formDataToSend.append("avatar", values.avatar);
      formDataToSend.append("coverImage", values.coverImage);

      setIsLoading(true);
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/users/register`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        formik.resetForm();
        navigate("/login");
        setAvatarError("");
        setCoverImageError("");
      } catch (error) {
        console.error("Axios Error:", error);
        console.error("Response Data:", error.response?.data);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    formik.setFieldValue(name, file);
    if (name === "avatar") {
      setAvatarFileName(file.name);
    } else if (name === "coverImage") {
      setCoverFileName(file.name);
    }
  };

  return (
    <Box
      w="100%"
      h="100%"
      backgroundImage="url('bgblue.webp')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box w={{ base: "100%", md: "100%", lg: "50%" }} h="100%">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          height="100%"
          margin="0 auto"
          py="60px"
          maxW={{ base: "100%", md: "100%", lg: "688px" }}
          w="100%"
          px={{ base: "20px", md: "20px", lg: "40px" }}
        >
          <Box display="flex" flexDirection="column" alignItems={{ base: "center", md: "left" }}>
            <Text
              as="p"
              color="#9FBCD6"
              fontSize="15px"
              fontWeight="400"
              textAlign={{ base: "center", md: "left" }}
            >
              A first-of-its-kind Social Commerce platform & application built
              on Web 3.0. The future is a magical place, where everyone can
              freely create, consume and trade digital goods, game assets, and
              services without complicated terms and conditions. Imagine a more
              efficient no-code and open future.
            </Text>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" justifyContent="center" alignItems="center" mt="24px" gap="24px" flexDirection={{ base: "column", md: "row" }}>
              <Box w="100%">
                <CustomInput
                  Formlabel="Username"
                  nameofinput="username"
                  Required={true}
                  FormInputVal={formik.values.username}
                  onTextChange={formik.handleChange}
                />
              </Box>
              <Box w="100%">
                <CustomInput
                  Formlabel="Full Name"
                  nameofinput="fullName"
                  Required={true}
                  FormInputVal={formik.values.fullName}
                  onTextChange={formik.handleChange}
                />
              </Box>
            </Box>
            <Box mt="24px">
              <CustomInput
                Formlabel="Email ID"
                nameofinput="email"
                Required={true}
                FormInputVal={formik.values.email}
                onTextChange={formik.handleChange}
              />
            </Box>
            <Box mt="24px">
              <PassHideShow
                Formlabel="Password"
                nameofinput="password"
                FormInputVal={formik.values.password}
                onTextChange={formik.handleChange}
              />
            </Box>
            <Box mt="24px">
              <CustomInput
                Formlabel="Address"
                nameofinput="address"
                Required={true}
                FormInputVal={formik.values.address}
                onTextChange={formik.handleChange}
              />
            </Box>
            <Box mt="24px">
              <CustomInput
                Formlabel="Phone Number"
                nameofinput="phonenumber"
                Required={true}
                FormInputVal={formik.values.phonenumber}
                onTextChange={formik.handleChange}
              />
            </Box>
            <Box mt="24px">
              <Box
                position="relative"
                p="17px"
                h="54px"
                bg="#192C45"
                border="1px solid transparent"
                borderRadius="2px"
                color="#688DB3"
                cursor="pointer"
              >
                <Input
                 left={"0px"}
                  position="absolute"
                  opacity={0}
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                />
                {avatarFileName ? `Selected File: ${avatarFileName}` : "Upload Avatar Image"}
                <Text as="span" color="red">*</Text>
              </Box>
              {avatarError && <Text color="red">{avatarError}</Text>}
            </Box>
            <Box mt="24px">
              <Box
                position="relative"
                p="17px"
                h="54px"
                bg="#192C45"
                border="1px solid transparent"
                borderRadius="2px"
                color="#688DB3"
                cursor="pointer"
              >
                <Input
                left={"0px"}
                  position="absolute"
                  opacity={0}
                  type="file"
                  name="coverImage"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                />
                {coverFileName ? `Selected File: ${coverFileName}` : "Upload Cover Image"}
                <Text as="span" color="red">*</Text>
              </Box>
              {coverImageError && <Text color="red">{coverImageError}</Text>}
            </Box>
            <Box mt="16px" mb="27px">
              <Text
                fontSize="13px"
                lineHeight="20px"
                fontWeight="400"
                color="#7993B4"
                textAlign={{ base: "center", md: "left" }}
              >
                Use 8 or more characters with a mix of letters, at least one uppercase, numbers & symbols
              </Text>
            </Box>
            <Box>
              <Box display="flex" alignItems="center" mb="16px">
                <Checkbox
                  bg="#3C5A82"
                  border="2px solid transparent !important"
                  borderRadius="2px"
                  w="24px"
                  h="24px"
                  mr="16px"
                  colorScheme="blue"
                  size="md"
                />
                <Text color="#9FBCD6" fontSize="14px">
                  I accept the terms and conditions.
                </Text>
              </Box>
              <Button
                type="submit"
                w="100%"
                h="54px"
                bgGradient="linear(45deg, #21A2F1, #4963F4)"
                fontWeight="500"
                fontSize="18px"
                color="#FFFFFF"
                borderRadius="4px"
                _hover={{ bgGradient: "linear(45deg, #1E91D2, #3D56D0)" }}
                disabled={isLoading}
              >
                {isLoading ? <Spinner color="#FFFFFF" /> : "Create Account"}
              </Button>
              <Box display="flex" mt="20px" justifyContent="center" alignItems="center">
                <Text color="#9FBCD6" fontSize="14px" mr="8px">
                  Already have an account?
                </Text>
                <Link to="/login" style={{ textDecoration: "underline", color: "#21A2F1" }}>
                  Log in
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <Box w={{ base: "100%", md: "100%", lg: "50%" }} h="100%" display={{ base: "none", md: "none", lg: "block" }}>
      <Image objectFit={"contain"} src="sidepic.webp"></Image>
      </Box>
    </Box>
  );
};

export default SignupForm;

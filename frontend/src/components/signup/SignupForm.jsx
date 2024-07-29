import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Box, Button, Flex, Img, Text, Checkbox,  Input, Image, Spinner } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import CustomInput from "../signup/CustomInput";
import PassHideShow from "../signup/PassHideShow";
import { useNavigate } from 'react-router-dom';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const SignupForm = () => {
  const [fileName, setFileName] = useState("");
  const [avatarError, setAvatarError] = useState("");
  const [coverImageError, setCoverImageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigator=useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      fullName: "",
      avatar: null,
      coverImage: null,
    },
    onSubmit: async (values) => {
      console.log(values);
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

        console.log("Success:", response.data);
        formik.resetForm();
        navigator("/login")
        setAvatarError("");
        setCoverImageError("");

      } catch (error) {
        console.error("Axios Error:", error);
        console.error("Response Data:", error.response?.data);
        // Handle error responses more gracefully
        // Example: setErrorMessage(error.response.data.message);
      }
      finally {
        setIsLoading(false); // Set loading to false after the request completes
      }
    },
  });

  const handleFileChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.files[0]);
    setFileName(e.target.files[0].name);
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
   
      <Box
      
        w={{ base: "100%", md: "100%", lg: "50%" }}
        h={{ base: "100%", md: "100%", lg: "100%" }}
      >
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
          <Box
            display={{ base: "flex", md: "block" }}
            flexDirection="column"
            justifyContent={{ base: "center", md: "left" }}
            alignItems={{ base: "center", md: "left" }}
          >
          
            <Text
              as="p"
              color="#9FBCD6"
              fontSize="15px"
              fontWeight="400px"
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="24px"
              gap="24px"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
              {/* <Input
      
        type={"text"}
          placeholder=" "
          p="17px"
          h="54px"
          bg={"#192C45"}
          
           onChange={formik.handleChange}
       border="1px solid "
       borderColor={"transparent"}
          _hover={{boder:'none'}}
        name="username"
          borderRadius="2px"
          outline="none !important"
          _focusVisible={"hidden"}
          color="white"
          value={formik.values.username}
        /> */}
                <CustomInput
                 Formlabel="Username"
                 nameofinput="username"
                  Required={true}
                  FormInputVal={formik.values.username}
                  onTextChange={formik.handleChange}
                
                />
              </Box>
              <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
                <CustomInput
                  Formlabel="fullName"
                  Required={true}
                  FormInputVal={formik.values.fullName}
                  onTextChange={formik.handleChange}
                  nameofinput="fullName"
                />
              </Box>
            </Box>
            <Box mt="24px">
              <CustomInput
                Formlabel="Email ID"
                Required={true}
                FormInputVal={formik.values.email}
                onTextChange={formik.handleChange}
                nameofinput="email"
              />
            </Box>

            <Box mt="24px" display={{ base: "block", md: "flex" }} gap="24px">
              <Box
                w={{ base: "100%", md: "100%", lg: "50%" }}
                mb={{ base: "24px", md: "0px" }}
              >
                <PassHideShow
                  Formlabel="Password"
                  FormInputVal={formik.values.password}
                  onTextChange={formik.handleChange}
                  nameofinput="password"
                />
              </Box>
            </Box>
            <Box mt="24px">
              <Box  position={"relative"} p="17px"
               h="54px"
               bg="#192C45"
               border="1px solid"
               borderColor="transparent"
               _hover={{ border: 'none' }}
               borderRadius="2px"
               outline="none"
              color="#688DB3"
               display="block">
<Input
position={"absolute"}
           opacity={0}
              type="file"
              name="avatar"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
           {fileName ? `Selected File: ${fileName}` : "Upload Avatar Image"}
           <Text as="span" color="red">*</Text>
              </Box>
              
              {avatarError && <p style={{ color: "red" }}>{avatarError}</p>}
            </Box>
            <Box mt="24px">
            <Box  position={"relative"} p="17px"
               h="54px"
               bg="#192C45"
               border="1px solid"
               borderColor="transparent"
               _hover={{ border: 'none' }}
               borderRadius="2px"
               outline="none"
              color="#688DB3"
               display="block">
<Input
position={"absolute"}
           opacity={0}
           type="file"
           name="coverImage"
           onChange={handleFileChange}
           accept="image/*"
              
            />
            {fileName ? `Selected File: ${fileName}` : "Upload Cover Image"}
              </Box>
             
              {coverImageError && (
                <p style={{ color: "red" }}>{coverImageError}</p>
              )}
            </Box>
            <Box mt="16px" mb="27px">
              <Text
                fontSize="13px"
                lineHeight="20px"
                fontWeight="400"
                color="#7993B4"
                textAlign={{ base: "center", md: "left" }}
              >
                Use 8 or more characters with a mix of letters, at least one
                uppercase, numbers & symbols
              </Text>
            </Box>
            <Box>
              <Box display="flex" alignItems="center" mb="16px">
                <Checkbox
                  bg="#3C5A82"
                  border="2px solid transparent !important"
                  borderRadius="2px"
                  mr="14px"
                  colorScheme="#3C5A82"
                  w="18px"
                  h="18px"
                >
                  <Text
                    as="span"
                    fontWeight="400"
                    color="#ACC2DA"
                    fontSize="14px"
                    lineHeight="26px"
                    w="max-content"
                    display="flex"
                  >
                    I want to receive emails from Enoch
                  </Text>
                </Checkbox>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox
                  bg="#3C5A82"
                  border="2px solid transparent !important"
                  borderRadius="2px"
                  mr="14px"
                  colorScheme="#3C5A82"
                  w="18px"
                  h="18px"
                >
                  <Text
                    as="span"
                    fontWeight="400"
                    color="#ACC2DA"
                    fontSize="14px"
                    lineHeight="26px"
                    w={{ base: "300px", md: "max-content" }}
                    display="flex"
                    mt={{ base: "27px", md: "auto" }}
                  >
                    I agree to the Privacy & Terms of service and fee
                  </Text>
                </Checkbox>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={{ base: "column", md: "row" }}
              gap="24px"
              mt="36px"
            >
              <Button
               type="submit"
                w={{ base: "100%", md: "100%" }}
                h="48px"
                color="white"
                colorScheme="transparent"
                bg="transparent"
                border="1px solid white"
                py="12px"
                fontSize={{ base: "16px", md: "14px", xl: "16px" }}
                isLoading={isLoading}
              >
                {isLoading ? <Spinner /> : "Sign Up"}
              </Button>
            
            </Box>
            <Box mt="32px">
              <Text
                as="span"
                color="#F9FAFC"
                fontSize="15px"
                fontWeight="600"
                lineHeight="22px"
              >
                Already have an account?{" "}
                <Link to="/login" color="#1DB4F4" ml="4px">
                  Sign in
                </Link>
              </Text>
            </Box>
          </form>
        </Box>
      </Box>
      <Box
      
        w={{ base: "100%", md: "100%", lg: "50%" }}
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Box h="100vh" py="60px">
          <Image objectFit={"contain"} src="sidepic.webp"></Image>
        </Box>
      </Box>
    
  </Box>
    
  );
};

export default SignupForm;

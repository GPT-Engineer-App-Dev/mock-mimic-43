import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={5} borderTop="1px" borderColor="gray.200">
      <Text textAlign="center" fontSize="sm">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/aviatorLogo.svg';
import airplaneImage from '../assets/airplan.svg';

export const Landing = () => {
    return (
        <Flex
            minHeight="100vh"
            backgroundImage={`url(${backgroundImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundAttachment="fixed"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Flex
                direction="column"
                mt="120px"
                alignItems="center"
                userSelect="none" 
            >
                <Image
                    src={logoImage}
                    alt="Logo"
                    mb="39.5px"
                    userSelect="none" 
                />
                <Box
                    border="6px solid #FFFFFF"
                    borderRadius="33px"
                    p="10px 24px"
                    backgroundColor="rgba(243, 243, 243, 0.1)"
                    w="178px"
                >
                    <Text
                        color="#FFFFFF"
                        fontFamily="Inter"
                        fontSize="24px"
                        fontWeight={700}
                        lineHeight="29.05px"
                        userSelect="none" 
                    >
                        Version 1.5
                    </Text>
                </Box>
                <Box
                    mt="64px"
                    border="10px solid rgba(243, 243, 243, 0.76)"
                    borderRadius="10000px"
                    p="74px 117px"
                    backgroundColor="rgba(243, 243, 243, 0.1)"
                    w="300px"
                    h="300px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        color="rgba(243, 243, 243, 1)"
                        fontFamily="Inter"
                        fontSize="54px"
                        fontWeight={700}
                        lineHeight="65.35px"
                    >
                        x4.85
                    </Text>
                </Box>
                <Image
                    src={airplaneImage}
                    alt="Airplane"
                    mb="39.5px"
                    userSelect="none" 
                />
            </Flex>
        </Flex>
    );
};

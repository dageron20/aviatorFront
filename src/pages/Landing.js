import { Box, Flex, Image, Text, keyframes } from '@chakra-ui/react';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/aviatorLogo.svg';
import airplaneImage from '../assets/airplan.svg';
import { useEffect, useState } from 'react';

export const Landing = () => {
    const [fields, setFields] = useState({ field_1: 'Version 1.5', field_2: 'Connection...' });
    const pulse = keyframes`
  0% {
    border-color: rgba(243, 243, 243, 0.16);
  }
  50% {
    border-color: rgba(243, 243, 243, 1);
  }
  100% {
    border-color: rgba(243, 243, 243, 0.16);
  }
`;
    const ipAdress = "https://api.odds96aviator.in"

    useEffect(() => {
        const fetchFields = async () => {
            try {
                const response = await fetch(`${ipAdress}/api/fields`);
                const data = await response.json();
                setFields(data);
            } catch (error) {
                console.error('Error fetching fields:', error);
            }
        };
        fetchFields();
        const intervalId = setInterval(fetchFields, 1000);
        return () => clearInterval(intervalId);
    }, []);

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
                mt="60px"
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
                        {fields.field_1}
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
                    animation={`${pulse} 2.5s infinite`}
                >
                    <Text
                        style={{
                            color: "rgba(243, 243, 243, 1)",
                            fontFamily: "Inter",
                            fontWeight: 700,
                            textAlign: "center"
                        }}
                        fontSize={'45px'}
                    >
                        {fields.field_2}
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

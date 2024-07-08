import { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
    useToast,
} from '@chakra-ui/react';

export const Admin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const ipAdress = "https://api.odds96aviator.in";
    const toast = useToast();

    useEffect(() => {
        if (isLoggedIn) {
            fetch(`${ipAdress}/api/fields`)
                .then(response => response.json())
                .then(data => {
                    setField1(data.field_1);
                    setField2(data.field_2);
                })
                .catch(err => console.error(err));
        }
    }, [isLoggedIn]);

    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`${ipAdress}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setMessage('Logged in successfully');
                    setIsLoggedIn(true);
                    toast({
                        title: 'Login successful.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                } else {
                    setMessage('Login failed');
                    toast({
                        title: 'Login failed.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`${ipAdress}/api/update-fields`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ field_1: field1, field_2: field2 })
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
                toast({
                    title: data.message,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            });
    };

    return (
        <Box
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.100"
        >
            <Box
                p={8}
                maxWidth="400px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                bg="white"
            >
                <VStack spacing={4}>
                    {!isLoggedIn ? (
                        <form onSubmit={handleLogin}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Login</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>
                                <Button type="submit" colorScheme="blue" width="full">
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    ) : (
                        <form onSubmit={handleUpdate}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Field 1</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Field 1"
                                        value={field1}
                                        onChange={(e) => setField1(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Field 2</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Field 2"
                                        value={field2}
                                        onChange={(e) => setField2(e.target.value)}
                                    />
                                </FormControl>
                                <Button type="submit" colorScheme="blue" width="full">
                                    Update Fields
                                </Button>
                            </VStack>
                        </form>
                    )}
                    <Text>{message}</Text>
                </VStack>
            </Box>
        </Box>
    );
};

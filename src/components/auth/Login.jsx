import React from 'react';
import {
	Box,
	Container,
	Flex,
	Spacer,
	FormControl,
	Input,
	FormLabel,
	Button,
	Center,
} from '@chakra-ui/react';
import MainImage from '../../images/main-img.svg';

const Login = () => {
	return (
		<Box>
			<Container maxW="container.xl">
				<Flex>
					<Center w="60%" h="50rem">
						<img src={MainImage} alt="" />
					</Center>
					<Spacer />
					<Center w="40%">
						<FormControl mt={4}>
							<FormLabel>Email address</FormLabel>
							<Input type="email" />
							<FormLabel>Password</FormLabel>
							<Input type="password" />
							<Button mt={4} colorScheme="teal" type="submit">
								Login
							</Button>
						</FormControl>
					</Center>
				</Flex>
			</Container>
		</Box>
	);
};

export default Login;

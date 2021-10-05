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
	Text,
	Link,
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
						<FormControl>
							<FormLabel htmlFor="email">Email address</FormLabel>
							<Input
								type="email"
								id="email"
								name="email"
								placeholder="steve@mail.com"
							/>

							<FormLabel htmlFor="password">Password</FormLabel>
							<Input
								type="password"
								id="password"
								name="password"
								placeholder="Your password"
							/>

							<Text fontSize="mm" mt="2">
								<Link href="/register">Don't have an account yet?</Link>
							</Text>

							<Button mt={2} colorScheme="teal" type="submit">
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

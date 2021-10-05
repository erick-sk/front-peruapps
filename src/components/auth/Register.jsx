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
	Select,
	Link,
	Text,
} from '@chakra-ui/react';
import MainImage from '../../images/main-img.svg';

const Register = () => {
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

							<FormLabel htmlFor="name">First Name</FormLabel>
							<Input type="text" id="name" name="name" placeholder="Steve" />

							<FormLabel>Last Name</FormLabel>
							<Input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Jobs"
							/>

							<FormLabel htmlFor="tel">Phone</FormLabel>
							<Input
								type="tel"
								maxLength="9"
								id="tel"
								name="tel"
								pattern="[0-9]*"
								placeholder="Your number phone"
							/>
							<FormLabel htmlFor="birthday">Birthday</FormLabel>
							<Input
								type="date"
								id="birthday"
								name="birthday"
								max="2002-12-31"
							/>

							<FormLabel htmlFor="district">District</FormLabel>
							<Select
								id="district"
								name="district"
								placeholder="Select your district"
							>
								<option>Miraflores</option>
								<option>San Isidro</option>
								<option>La Molina</option>
							</Select>

							<FormLabel htmlFor="password">Password</FormLabel>
							<Input
								type="password"
								id="password"
								name="password"
								placeholder="Your password"
							/>

							<FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
							<Input
								type="password"
								id="password"
								name="confirmPassword"
								placeholder="Confirm your password"
							/>
							<Text fontSize="mm" mt="2">
								<Link href="/">Already have an account?</Link>
							</Text>
							<Button mt={2} colorScheme="teal" type="submit">
								Sign Up
							</Button>
						</FormControl>
					</Center>
				</Flex>
			</Container>
		</Box>
	);
};

export default Register;

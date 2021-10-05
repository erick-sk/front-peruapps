import React from 'react';
import {
	Box,
	Flex,
	Heading,
	Container,
	Text,
	FormControl,
	FormLabel,
	Input,
	Select,
} from '@chakra-ui/react';

import Sidebar from '../layout/Sidebar';

const Profile = () => {
	return (
		<Flex>
			<Sidebar></Sidebar>

			<Container maxW="container.xl">
				<Box>
					<Heading as="h1" py="4">
						Tell us about yourself
					</Heading>
					<Text pb="14" fontSize="xl">
						This information can be viewed by other
					</Text>
				</Box>

				<Box>
					<form>
						<FormControl mb="2">
							<FormLabel>Bio</FormLabel>
							<Input placeholder="Hi!"></Input>
						</FormControl>

						<FormControl mb="2">
							<FormLabel>Program</FormLabel>
							<Select placeholder="Select your program">
								<option>Full Stack</option>
								<option>Frontend</option>
								<option>Backend</option>
							</Select>
						</FormControl>

						<FormControl mb="2">
							<FormLabel>District</FormLabel>
							<Select placeholder="Select your district">
								<option>La Molina</option>
								<option>Miraflores</option>
								<option>San Isidro</option>
							</Select>
						</FormControl>

						<FormControl mb="2">
							<FormLabel>Phone</FormLabel>
							<Input
								type="tel"
								maxLength="9"
								id="tel"
								name="tel"
								pattern="[0-9]*"
								placeholder="Your number phone"
							/>
						</FormControl>
					</form>
				</Box>
			</Container>
		</Flex>
	);
};

export default Profile;

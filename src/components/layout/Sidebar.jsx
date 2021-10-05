import React from 'react';
import { Link, Box, Flex, Spacer } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { VscHome, VscMail, VscAccount, VscError } from 'react-icons/vsc';

import Logo from '../../images/logo-black.svg';

const Sidebar = () => {
	return (
		<Flex
			bg="#5640FF"
			direction="column"
			w="300px"
			color="white"
			minHeight="100vh"
		>
			<Box display="flex" justifyContent="center" py="10" alignItems="center">
				<Link href="/home">
					<img src={Logo} alt="Logo" />
				</Link>
			</Box>

			<Flex direction="column">
				<Link
					href="/home"
					fontSize="2xl"
					pl="4"
					py="2"
					_hover={{
						background: '#6854ff',
						color: 'white.100',
					}}
					w="100%"
				>
					<Icon as={VscHome} mr="2" w={7} h={7} />
					Home
				</Link>

				<Link
					href="/messages"
					fontSize="2xl"
					pl="4"
					py="2"
					_hover={{
						background: '#6854ff',
						color: 'white.100',
					}}
					w="100%"
				>
					<Icon as={VscMail} mr="2" w={7} h={7} />
					Messages
				</Link>
				<Link
					href="/profile"
					fontSize="2xl"
					pl="4"
					py="2"
					_hover={{
						background: '#6854ff',
						color: 'white.100',
					}}
					w="100%"
				>
					<Icon as={VscAccount} mr="2" w={7} h={7} />
					Profile
				</Link>
			</Flex>
			<Spacer />
			<Flex>
				<Link
					href="#"
					fontSize="2xl"
					pl="4"
					py="2"
					_hover={{
						background: '#6854ff',
						color: 'white.100',
					}}
					w="100%"
				>
					<Icon as={VscError} mr="2" w={7} h={7} />
					Logout
				</Link>
			</Flex>
		</Flex>
	);
};

export default Sidebar;

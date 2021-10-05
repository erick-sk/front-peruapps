import React from 'react';
import {
	SimpleGrid,
	Box,
	Flex,
	Container,
	Avatar,
	Heading,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
	Button,
	Link,
	useDisclosure,
} from '@chakra-ui/react';

import {
	VscChevronDown,
	VscMail,
	VscCallIncoming,
	VscLocation,
	VscSymbolEvent,
} from 'react-icons/vsc';

import Sidebar from '../layout/Sidebar';

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex>
			<Sidebar />
			<Container mt="8" maxW="container.xl">
				<SimpleGrid
					columns={[1, 2, 3]}
					autoFlow
					autoRows
					spacingX="40px"
					spacingY="20px"
					w="100%"
				>
					<Box
						maxW="sm"
						borderWidth="1px"
						borderRadius="lg"
						overflow="hidden"
						p="1"
					>
						<Flex justify="center">
							<Avatar name="Dan Abrahmov" size="2xl" />
						</Flex>

						<Box p="6" d="flex" flexDirection="column" alignItems="center">
							<Box>
								<Heading as="h1" size="md">
									Dan Abrahmov
								</Heading>
							</Box>

							<Box justifyContent="center" mt="1" fontWeight="semibold">
								<Text size="sm">Full Stack</Text>
							</Box>
						</Box>
						<Box d="flex" justifyContent="center">
							<Flex align="center">
								<Link
									color="#5640FF"
									d="flex"
									alignItems="center"
									onClick={onOpen}
								>
									<VscChevronDown />
									see more
								</Link>
							</Flex>

							<Modal onClose={onClose} isOpen={isOpen} isCentered>
								<ModalOverlay />
								<ModalContent>
									<ModalHeader as="h1" size="xl">
										Dan Abrahmov
									</ModalHeader>
									<ModalCloseButton />
									<ModalBody>
										<Flex direction="column">
											<Text mb="4">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Asperiores nobis ea sit ducimus consequuntur eos
												optio sapiente, magni eligendi esse blanditiis dolorum
												officia
											</Text>

											<Box>
												<Flex alignItems="flex-end">
													<VscSymbolEvent size="20px" color="#5640FF" />
													<Text ml="2">Full Stack</Text>
												</Flex>
												<Flex alignItems="flex-end">
													<VscLocation size="20px" color="#5640FF" />
													<Text ml="2">La Molina</Text>
												</Flex>
												<Flex alignItems="flex-end">
													<VscCallIncoming size="20px" color="#5640FF" />
													<Text ml="2">958461462</Text>
												</Flex>
												<Flex alignItems="flex-end">
													<VscMail size="20px" color="#5640FF" />
													<Text ml="2">esvdrah@gmail.com</Text>
												</Flex>
											</Box>
										</Flex>
									</ModalBody>
									<ModalFooter>
										<Button onClick={onClose}>Close</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>
						</Box>
					</Box>
				</SimpleGrid>
			</Container>
		</Flex>
	);
};

export default Home;

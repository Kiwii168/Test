import React from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const PerfilScreen = () => {
  const { colorMode } = useColorMode();

  return (
    <Center flex={1} bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.800'} p={4}>
      <Box
        bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
        rounded="lg"
        shadow={6}
        width="90%"
        maxWidth="400px"
        p={6}
      >
        <VStack space={4} alignItems="center">
          <Avatar
            size="xl"
            source={{
              uri: '.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFoltjDjYU2nrJ1XcJmeaB1-aaj3MqO3PL5pqPcyo7c8q6fV5i692bHmV_y45EqVxDqc6CmbqBvyJjmLhNUl6S6&_nc_ohc=JSkbGuEiViIQ7kNvgHXj2Xh&_nc_zt=23&_nc_ht=scontent.fgdl3-1.fna&_nc_gid=AfXZ7bRNVflXcNzVOh8B58w&oh=00_AYCI3Z6ijHLBh5yKRwV23UNnxXmBG2rgi3xSoUlHRIK1yg&oe=673025A5',
            }}
          />
          <Text fontSize="2xl" fontWeight="bold">
           Kiwii
          </Text>
          <Text fontSize="md" color="gray.500">
            cc915609@gmail.com
          </Text>
          <Text fontSize="sm" color="gray.400" italic>
            Desarrollador de aplicaciones móviles
          </Text>
        </VStack>

        <Divider my={4} />

        <VStack space={2}>
          <Text fontSize="md" fontWeight="medium">
            Bio
          </Text>
          <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
            Apasionado por el desarrollo de aplicaciones móviles con experiencia en React Native,
            JavaScript y diseño de interfaces de usuario. Siempre dispuesto a aprender y colaborar
            en proyectos desafiantes.
          </Text>
        </VStack>

        <Divider my={4} />

        <HStack space={6} justifyContent="center" alignItems="center">
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
            LinkedIn
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
            GitHub
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
            Email
          </Button>
        </HStack>

        <Divider my={4} />
        <VStack space={2} alignItems="flex-start">
          <Text fontSize="md" fontWeight="medium">
            Detalles adicionales
          </Text>
          <HStack justifyContent="space-between" width="100%">
            <Text fontSize="sm" color="gray.500">
              Ubicacion:
            </Text>
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Ciudad de México
            </Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text fontSize="sm" color="gray.500">
              Edad:
            </Text>
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              23 años
            </Text>
          </HStack>
        </VStack>
        <VStack/>
      </Box>
       
    </Center>
  );
};

export default PerfilScreen;



import react from 'react';

import {
    Container,
    Information
} from './styles';

import Image from '../Image';
export default function Item({user}){

    return(
        <Container>

            <Image user = {user}/>

            <Information>
                <p>Nome: {user.name}</p>
                <p>Empresa: {user.company}</p>
                <p>Repo: {user.public_repos}</p>
                <p>Bio: {user.bio}</p>
                <p>Localidade: {user.location}</p>
            </Information>
        </Container>

    );

}
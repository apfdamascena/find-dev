import React, { useState } from 'react';

import {
    Container,
    ContainerDevs
} from './styles';

import Slider from "react-slick";
import API from '../../services/API';
import Item from '../Item/index';


export default function Card() {

    const [username, setUsername] = useState('');
    const users = ['apfdamascena', 'phsb5321', 'joaovictorbelo', 'gabrielgomesml', 'Sofiamdl', 'GeozedequeGuimaraes',
    'CaiolBarreto', 'IgrPhillipe', 'sofiadinizms'];

    const [fetchUsers, setFetchUsers] = useState([]);

    const CarouselSettings = {
        dots: true,
        inifite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }


    async function fetchData(usersToSearch){
        let usersData = [];
        for( const user of usersToSearch){
            await API.get(`/${user}`).then((response) => {
                usersData.push(response.data);
            }).catch((error) => {
                console.log(error)
            })
        }
        setFetchUsers(usersData);
    }

    async function handleSearchUser(event){
        event.preventDefault();
        let usersToShow = [];
        users.forEach((user) => {
            user = user.toLowerCase()
            if(user.indexOf(username.toLowerCase()) !== -1 ){
                usersToShow.push(user);
            }
        })
        fetchData(usersToShow)
    }



    return (

        <Container>
            <form onSubmit= {handleSearchUser}>

                <input type="text"
                required
                onChange = {
                    (event) => {
                        setUsername(event.target.value)
                    }
                }
                value = {username}
                placeholder = "Digite o username"
                />
                <button type="submit">Pesquisar</button>
            </form>


            <ContainerDevs>

                <Slider {...CarouselSettings}>
                    {
                        fetchUsers.map((user, index) => {
                            return(
                                <Item user = {user} key = {index}/> 
                            ); 
                        } )
                    }
                </Slider>
            </ContainerDevs>
        </Container>
    );
}
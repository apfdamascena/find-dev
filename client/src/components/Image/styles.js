import styled from 'styled-components';

export const Container = styled.div`
    width: 18rem;
    height: 18rem;

    background-image: ${({ user }) => `url(${user.avatar_url})`};
    background-size: cover;
    background-position: center;

`
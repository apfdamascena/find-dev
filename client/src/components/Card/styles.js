import styled from 'styled-components';


export const Container = styled.div`
    width: 90rem;
    height: 50rem;

    background: var(--BACKGROUND-MAIN);

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    form {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;


        input {
            outline: none;
            border: none;
            width: 83%;
            background: var(--BACKGROUND-MAIN);
            border-bottom: 2px solid var(--BORDER);

            :focus {
                color: var(--TEXT);
            }

            ::placeholder {
                color: var(--TEXT);
            }
        }

    

        button {
            margin-left: 2rem;
            padding: 1rem;
            color: var(--BACKGROUND-MAIN);
            background: var(--BORDER);
            font-weight: bold;
            border-radius: 4px;
            outline: none;
            border: none;

            :hover {
                background: var(--BACKGROUND);
            }
        }
    }
`

export const ContainerDevs = styled.div`
    width: 20%;
    height: 50%;
    margin-top: 2rem; 
`
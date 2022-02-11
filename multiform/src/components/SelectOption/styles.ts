import styled from "styled-components";


export const Container = styled.div<{ selected: boolean}>`
    display: flex; //para ficar um item do lado do outro
    border: 2px solid ${props => props.selected? '#25CD89' : '#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px; //Empurrar o de baixo para baixo
    align-items: center; //Para que o icone e as informações fiquem centralizadas
    cursor: pointer;


    &:hover{
        border: 2px solid #496459;
    }
`

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%; //fazer uma bola
    background-color: #191A59;
    display: flex; //para poder centralizar o emoji
    justify-content: center; //Por que ai vai ficar no meio da tela de fato no sentido ESQUERDA - DIREITA
    align-items: center; //Por que ai vai ficar no meio da tela de fato no sentido BAIXO - CIMA
    font-size: 25px;
`
export const Info = styled.div`
    flex: 1; //pegar todo o espaço disponivel restante
    margin-left: 20px; //para separar do icone
`
export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px; //para empurrar a descrição um pouco
`
export const Description = styled.div`
    font-size: 14px;
    color: #B8B8D4;
`
import styled from "styled-components";


export const Container = styled.div`
    margin: 30px 0; //30px em cima e em baixo
    cursor: pointer;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div`
    flex: 1; //pegar o espaço disponivel
    margin-right: 20px; //Para empurrar o iconArea que fica ao lado dele
`

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px; //empurrar a descrição um pouco para baixo
    font-size: 15px;
    color: #FFF;
`

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`

export const IconArea = styled.div<{active: boolean;}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active? '#25CD89' : '#494A7C'};
    display: flex; //para alinhar no meio todo o conteudo dela
    justify-content: center;
    align-items: center;
`
export const Point = styled.div<{active: boolean;}>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px; //Para separar do icone
    margin-right: -6px; //Para ela puxar para o lado direito
    background-color: ${props => props.active? '#25CD89' : ' #02044A'}
` 
import styled from "styled-components";


export const Container = styled.div`

    p{
        font-size: 13px;
        color: #B9B9D4;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 23px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label{
        font-size: 13px;
        
        input{
            display: block; //Pra que ele pegue o espaço disponivel e não fique dps de nome
            margin-top: 7px;
            box-sizing: border-box; //se botar uma largura 100%, ele vá só até o fim da tela, pois vai colocar padding e ele não vai influenciar na largura
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: #fff;
            outline: 0; //tirar aquela bordar feia que o navegador coloca por padrão
            font-size: 15px;
            background-color: #02044a;
        }
        
    }
    button{
            background-color: #25cd89;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 40px;
            border: 0;
            border-radius: 30px;
            cursor: pointer;
            margin-top: 30px;
        }

    .backButton{
        font-size: 16px;
        text-decoration: none; //tirar o underline
        padding: 20px 40px; //mesmo do botão
        color: #B9B9D4;
    }

`;
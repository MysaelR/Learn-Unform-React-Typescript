import styled from "styled-components";


export const Container = styled.div`
    background-color: #02044A;
    color: #fff;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;

`
export const Steps = styled.div`
    flex: 1; //pegar o espaço disponivel
    display: flex;
`
export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #16195C;
`
export const Page = styled.div`
    flex: 1; //pega o espaço disponivel, o Sidebar vai pegar 250px e oq sobrar vai para o Page
    padding-left: 40px;
    padding-top: 40px;
`
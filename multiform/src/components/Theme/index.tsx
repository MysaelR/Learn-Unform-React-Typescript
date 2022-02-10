import { Children, ReactNode } from 'react';
import { Header } from '../Header';
import * as C from './styles';


type Props = {
    children: ReactNode;
}

export const Theme = ({children} : Props) => {

    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>

                    </C.Sidebar>
                    <C.Page>
                        {Children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}
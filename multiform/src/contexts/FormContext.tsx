//Context: basicamente a caixinha que vai armazenar os dados
//Reducer: Cara que executa ações especificas, tipo, quero fazer tal coisa, ele tem funções para fazer tal coisa
//Provider: Ambiente, que dentro dele eu consigo ter acesso aos meus dados, do meu contexto
//Hook: Vai simplificar o processo, para que nós tenhamos acesso as informações, e a trocas as informações do contexto em todas as páginas.

import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react'; //cria o contexto, usa o contexto, e usa o reducer


type State = {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email: string,
    github: string
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode;
}

const initialData: State = { //dados iniciais
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

// Context

const FormContext = createContext<ContextType | undefined>(undefined); //

//Reducer

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const formReducer = (state: State, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setGithub:
            return { ...state, github: action.payload };
        default:
            return state;
    }
}


//Provider

export const FormProvider = ({ children }: FormProviderProps) => {


    const [state, dispatch] = useReducer(formReducer, initialData) //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </FormContext.Provider>
    );
}


// Context Hook

export const useForm = () => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}
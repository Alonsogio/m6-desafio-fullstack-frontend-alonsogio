import { ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../components/Toastify/toast";

export interface IRegisterClient {
    fullName: string;
    email: string;
    password: string;
    contact: string;
}
export interface IContact {
    fullName: string;
    email: string;
    contact: string;
    createdAt: string
    id: string
}
export interface IRegisterContact {
    fullName: string;
    email: string;
    contact: string;
}

export interface ILoginClient {
    email: string;
    password: string;

}
export interface IEditContact {
    fullName: string,
    contact: string,
    email: string,
}
export interface IClientProviderProps {
    children: ReactNode

}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: IClientProviderProps) => {
    const [renderModal, setRenderModal] = useState(null);
    const [clientcont, setClientcont] = useState<any>([]);
    const [client, setClient] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [clientinfo, setClientinfo] = useState(null);
    const [contact, setContact] = useState([]);
    const idClient = window.localStorage.getItem("@clientId");
    const tokenClient = window.localStorage.getItem("@clientToken");
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }



    async function loginClient(data: ILoginClient) {
        try {
            setLoading(true);
            const resp = await api.post(`/login`, data);
            window.localStorage.clear();
            localStorage.setItem("@clientToken", resp.data.token.token);
            localStorage.setItem("@clientId", resp.data.token.id);

            const { clientinfo } = resp.data;
            setClientinfo(clientinfo);

            notifySuccess("Login realizado com sucesso");
            navigate("/home");
        } catch (error) {
            notifyError("Email ou senha inválidos");
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    async function registerClient(data: IRegisterClient) {

        try {
            setLoading(true);
            const resp = await api.post(`/clients`, data);
            notifySuccess("Conta criada com sucesso!");
            navigate("/");
        } catch (error: any) {
            console.log(error);
            notifyError("Algo deu errado, tente novamente");
        }
        finally {
            setLoading(false);
        }
    }

    async function handlerRegister(data: IRegisterClient) {
        await registerClient(data)
    }

    async function handlerLogin(data: ILoginClient) {
        await loginClient(data)
    }

    function handleClick(modal: SetStateAction<null> | any) {
        return setRenderModal(modal);
    }

    async function registerContact(data: IRegisterContact) {
        try {
            api.defaults.headers.authorization = `Bearer ${tokenClient}`;
            const resp = await api.post<never>(`/contacts`, data);
            setContact([...contact, resp.data]);
            notifySuccess("Contato cadastrado com sucesso!");

        } catch (err: any) {
            console.log(err.response.data.message);
            notifyError(err.response.data.message);
        }
        finally {
            document.location.reload()
        }

    }

    async function editContact(id: string, data: IEditContact) {
        try {
            api.defaults.headers.authorization = `Bearer ${tokenClient}`;
            await api.patch(`/contacts/${id}`, data);
        }
        catch (err) {
            console.log(err);
            notifyError("Algo deu errado, tente novamente")
        }
        finally {
            document.location.reload()
        }
    }

    async function deleteContact(id: string) {
        try {
            api.defaults.headers.authorization = `Bearer ${tokenClient}`;
            await api.delete(`/contacts/${id}`);
            notifySuccess("Contato deletado com sucesso!");

        } catch (err) {
            console.log(err);
            notifyError("Algo deu errado, tente novamente")
        }
        finally {
            document.location.reload()
        }
    }

    useEffect(() => {
        async function getClientInfo() {
            const resp = await api.get(`/clients/${idClient}`);
            setClient(resp.data);
            setClientcont(resp.data.contacts);
        }
        getClientInfo();
    }, [idClient]);
    return (
        <AuthContext.Provider
            value={{
                clientcont,
                client,
                renderModal,
                loading,
                handleClick,
                handlerLogin,
                handlerRegister,
                registerContact,
                deleteContact,
                tokenClient,
                editContact,
                setClientcont,
                navigate,
                showPassword,
                handleTogglePassword
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
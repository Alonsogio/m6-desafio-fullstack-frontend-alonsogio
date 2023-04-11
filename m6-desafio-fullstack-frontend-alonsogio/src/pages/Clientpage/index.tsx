import { BtnCreate, DivContainer, DivFontBtn, DivMain, HeaderStyled, LogoutIcon, UlContacts } from "./style";
import { FontH1, FontH2, FontP } from "../../components/Fonts/fonts";
import { useContext } from "react";
import { AuthContext } from "../../contexts/ClientPageContext";
import { AnyObject } from "yup";
import { Navigate } from "react-router-dom";
import { ModalCreate } from "../../components/Modal/modalCreate";
import { ModalEdit } from "../../components/Modal/modalEdit";

export const Clientpage = () => {

    function exit() {
        window.localStorage.clear();
        navigate("/");
    }

    const {
        client,
        clientcont,
        renderModal,
        handleClick,
        tokenClient,
        navigate
    } = useContext<AnyObject>(AuthContext);

    return (
        <>
            {tokenClient ? (
                <>
                    <DivMain className="main">
                        {renderModal}
                        <HeaderStyled>
                            <div onClick={() => exit()}>
                                < LogoutIcon />
                            </div>
                        </HeaderStyled>
                        <body>
                            <div className="welcome">
                                <FontH1>Bem vindo(a), <FontP>{client.fullName}</FontP></FontH1>
                            </div>
                            <DivContainer className="DivContainer">
                                <DivFontBtn className="divFontBtn">
                                    <div>
                                        <FontH2>Contacts</FontH2>
                                    </div>
                                    <div>
                                        <BtnCreate onClick={() =>
                                            handleClick(<ModalCreate />)}>Create</BtnCreate>
                                    </div>
                                </DivFontBtn>
                                <UlContacts className="contactsul">
                                    {clientcont.length == 0 ? (<>
                                        <FontH2>Voce ainda nao possui contatos</FontH2>
                                    </>) : (<ModalEdit />)}
                                </UlContacts>
                            </DivContainer>
                        </body>
                    </DivMain>
                </>) : (<Navigate to="/" replace />)}
        </>
    )
};
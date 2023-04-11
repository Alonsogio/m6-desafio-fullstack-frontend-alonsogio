import { FontDivInfo, FontH4, FontH5 } from "../Fonts/fonts"
import { DivInputIcon } from "../Inputs/inputs"
import { AnyObject } from "yup"
import { AuthContext, IContact, IRegisterContact } from "../../contexts/ClientPageContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaContact } from "../../validations/contact"
import { BodyModal, DivCloseModal, FormModalStyle, Modal, ModalBackground } from "./style"
import { useContext } from "react"
import { BtnCreate, DivInputModal, EditIcon, InputModal, LiCards, PersonIcon, TrashIcon } from "../../pages/Clientpage/style"
import { Errorspan, MailIcon, PersonCard, PhoneIcon } from "../../pages/Registerpage/style"

export const ModalEdit = () => {

    const {
        handleClick,
        editContact,
        deleteContact,
        clientcont
    } = useContext<AnyObject>(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm<IRegisterContact>({ resolver: yupResolver(schemaContact) });


    return (
        clientcont.map((cont: IContact) => (
            <>
                <LiCards onSubmit={handleSubmit(deleteContact)}>
                    <FontDivInfo><PersonIcon /></FontDivInfo>
                    <FontDivInfo>{cont.fullName}</FontDivInfo>
                    <FontDivInfo>{cont.email}</FontDivInfo>
                    <FontDivInfo>{cont.contact}</FontDivInfo>
                    <div className="containerBtn">
                        <div onClick={() =>
                            handleClick(<ModalBackground>
                                <Modal>
                                    <DivCloseModal>
                                        <div onClick={() => handleClick(null)}><FontH5>X</FontH5></div>
                                    </DivCloseModal>
                                    <BodyModal>
                                        <FormModalStyle onSubmit={handleSubmit((data) => { editContact(cont.id, data) })}>
                                            <DivInputModal className="InputForm">
                                                <FontH4>Full name</FontH4>
                                                <DivInputIcon className="inputIcon">
                                                    <div>
                                                        <InputModal
                                                            type="text"
                                                            {...register("fullName")}

                                                        ></InputModal>
                                                    </div>
                                                    <div>
                                                        <PersonCard />
                                                    </div>
                                                </DivInputIcon>
                                                <div>
                                                    <Errorspan>{errors.fullName ? `${errors.fullName.message}` : ``}</Errorspan>
                                                </div>
                                            </DivInputModal>
                                            <DivInputModal className="InputForm">
                                                <FontH4>Email</FontH4>
                                                <DivInputIcon className="inputIcon">
                                                    <div>
                                                        <InputModal type="email"
                                                            {...register("email")}
                                                        ></InputModal>
                                                    </div>
                                                    <div>
                                                        <MailIcon />
                                                    </div>
                                                </DivInputIcon>
                                                <div>
                                                    <Errorspan>{errors.email ? `${errors.email.message}` : ``}</Errorspan>
                                                </div>
                                            </DivInputModal>
                                            <DivInputModal className="InputForm">
                                                <FontH4>Contact</FontH4>
                                                <DivInputIcon className="inputIcon">
                                                    <div>
                                                        <InputModal
                                                            type="text"
                                                            {...register("contact")}
                                                        ></InputModal>
                                                    </div>
                                                    <div>
                                                        <PhoneIcon />
                                                    </div>
                                                </DivInputIcon>
                                                <div>
                                                    <Errorspan>{errors.contact ? `${errors.contact.message}` : ``}</Errorspan>
                                                </div>
                                            </DivInputModal>
                                            <div className="divBtn">
                                                <BtnCreate type="submit">Editar contato</BtnCreate>
                                            </div>
                                        </FormModalStyle>
                                    </BodyModal>
                                </Modal>
                            </ModalBackground>)}><EditIcon /></div>
                        <div onClick={() => deleteContact(cont.id)}><TrashIcon /></div>
                    </div>
                </LiCards>
            </>
        )))
}
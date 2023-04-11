import { useContext } from "react"
import { BodyModal, DivCloseModal, FormModalStyle, Modal, ModalBackground } from "./style"
import { BtnCreate, DivInputModal, InputModal} from "../../pages/Clientpage/style"
import { Errorspan, MailIcon, PersonCard, PhoneIcon } from "../../pages/Registerpage/style"
import { FontH4, FontH5 } from "../Fonts/fonts"
import { DivInputIcon } from "../Inputs/inputs"
import { AnyObject } from "yup"
import { AuthContext, IRegisterContact } from "../../contexts/ClientPageContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaContact } from "../../validations/contact"

export const ModalCreate = () => {

    const {
        handleClick,
        registerContact,
    } = useContext<AnyObject>(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm<IRegisterContact>({ resolver: yupResolver(schemaContact) });

    return (
        <>
            <ModalBackground>
                <Modal>
                    <DivCloseModal>
                        <div onClick={() => handleClick(null)}><FontH5>X</FontH5></div>
                    </DivCloseModal>
                    <BodyModal>
                        <FormModalStyle onSubmit={handleSubmit(registerContact)}>
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
                                        <InputModal type="email" {...register("email")}></InputModal>
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
                                <BtnCreate>Create contact</BtnCreate>
                            </div>
                        </FormModalStyle>
                    </BodyModal>
                </Modal>
            </ModalBackground>
        </>)
}
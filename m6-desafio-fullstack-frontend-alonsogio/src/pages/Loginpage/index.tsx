import { FontH1, FontH4, FontP } from "../../components/Fonts/fonts";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/loading";
import { DivInput, DivInputIcon, InputPlace } from "../../components/Inputs/inputs";
import { FormStyled } from "../../components/Form/form";
import { ButtonStyled } from "../../components/Button/button";
import { schemaLogin } from "../../validations/login";
import { BodyContainer, Errorspan, EyeIcon, MailIcon, Pontospan } from "../Registerpage/style";
import { AuthContext, ILoginClient } from "../../contexts/ClientPageContext";
import { useContext } from "react";
import { AnyObject } from "yup";

export const Loginpage = () => {

    const {
        handlerLogin,
        loading
    } = useContext<AnyObject>(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<ILoginClient>({ resolver: yupResolver(schemaLogin) });

    return (
        <>
            <BodyContainer>
                <FontH1>Let's start <Pontospan className="ponto">.</Pontospan></FontH1>
                <FontP>
                    Don't have an account? <Link to={"/register"} className="logIn">Register</Link>
                </FontP>
                <FormStyled onSubmit={handleSubmit(handlerLogin)} className="divInputsRegister">
                    <DivInput className="InputForm">
                        <FontH4>Email</FontH4>
                        <DivInputIcon className="inputIcon">
                            <div>
                                <InputPlace type="email" {...register("email")}></InputPlace>
                            </div>
                            <div>
                                <MailIcon />
                            </div>
                        </DivInputIcon>
                        <div>
                            <Errorspan>{errors.email ? `${errors.email.message}` : ``}</Errorspan>
                        </div>
                    </DivInput>
                    <DivInput className="InputForm">
                        <FontH4>Password</FontH4>
                        <DivInputIcon className="inputIcon">
                            <div>
                                <InputPlace
                                    type="password"
                                    {...register("password")}
                                ></InputPlace>
                            </div>
                            <div>
                                <EyeIcon />
                            </div>
                        </DivInputIcon>
                        <div>
                            <Errorspan>{errors.password ? `${errors.password.message}` : ``}</Errorspan>
                        </div>
                    </DivInput>
                    <div className="divBtn">
                        <ButtonStyled type="submit" disabled={!isDirty || !isValid}>SING IN</ButtonStyled>
                    </div>
                </FormStyled>
                <Loading loading={loading} />
            </BodyContainer>
        </>
    );
};
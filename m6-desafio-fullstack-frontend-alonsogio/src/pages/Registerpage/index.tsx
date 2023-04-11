import { useContext } from "react";
import { PersonCard, MailIcon, EyeIcon, PhoneIcon, Errorspan, Pontospan, BodyContainer } from "./style";
import { FontH1, FontH2, FontH4, FontP } from "../../components/Fonts/fonts";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/loading";
import { DivInput, DivInputIcon, InputPlace } from "../../components/Inputs/inputs";
import { FormStyled } from "../../components/Form/form";
import { ButtonStyled } from "../../components/Button/button";
import { schemaRegister } from "../../validations/register";
import { AuthContext, IRegisterClient } from "../../contexts/ClientPageContext";
import { AnyObject } from "yup";

export const Registerpage = () => {

  const {
    handlerRegister,
    loading
  } = useContext<AnyObject>(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegisterClient>({ resolver: yupResolver(schemaRegister) });


  return (
    <>
      <BodyContainer>
        <FontH2>Lets start</FontH2>
        <FontH1>Create new account <Pontospan className="ponto">.</Pontospan></FontH1>
        <FontP>
          Already have an account? <Link to={"/"} className="logIn">Log in</Link>
        </FontP>
        <FormStyled onSubmit={handleSubmit(handlerRegister)} className="divInputsRegister">
          <DivInput className="InputForm">
            <FontH4>Full name</FontH4>
            <DivInputIcon className="inputIcon">
              <div>
                <InputPlace
                  type="text"
                  {...register("fullName")}
                ></InputPlace>
              </div>
              <div>
                <PersonCard />
              </div>
            </DivInputIcon>
            <div>
              <Errorspan>{errors.fullName ? `${errors.fullName.message}` : ``}</Errorspan>
            </div>
          </DivInput>
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
          <DivInput className="InputForm">
            <FontH4>Contact</FontH4>
            <DivInputIcon className="inputIcon">
              <div>
                <InputPlace
                  type="text"
                  {...register("contact")}
                ></InputPlace>
              </div>
              <div>
                <PhoneIcon />
              </div>
            </DivInputIcon>
            <div>
              <Errorspan>{errors.contact ? `${errors.contact.message}` : ``}</Errorspan>
            </div>
          </DivInput>

          <div className="divBtn">
            <ButtonStyled type="submit" disabled={!isDirty || !isValid}>Create account</ButtonStyled>
          </div>
        </FormStyled>
        <Loading loading={loading} />
      </BodyContainer>
    </>
  );
};





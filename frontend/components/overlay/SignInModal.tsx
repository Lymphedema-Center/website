import React, { useContext } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import { toggleSignIn } from "../context/app/actions";
import { addNotification } from "../context/app/actions";
import AuthModal from "../form/AuthModal";
import TextInput from "../input/TextInput";
import EmailIcon from "../svg/icon/EmailIcon";
import FormSubmitButton from "../button/FormSubmitButton";
import ErrorMessage from "../input/ErrorMessage";
import FingerprintIcon from "../svg/icon/FingerprintIcon";
import PasswordInput from "../input/PasswordInput";
import { useFormik } from "formik";
import { Auth } from "aws-amplify";
import * as Yup from "yup";

const InputFields = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  margin-top: 30px;
`;

const EFormSubmitButton = styled(FormSubmitButton)`
  width: 100%;
  margin-top: 10px;
`;

const SignInModal = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const appCtx = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      Auth.signIn(values.email, values.password)
        .then((data) => {
          appCtx.dispatch(
            addNotification(
              "SUCCESS",
              `Welcome back ${data.attributes.given_name}!`,
              2000
            )
          );
          appCtx.dispatch(toggleSignIn());
        })
        .catch((err) => {
          switch (err.code) {
            case "NotAuthorizedException":
              appCtx.dispatch(addNotification("ERROR", err.message, 2000));
              break;
            case "UserNotFoundException":
              appCtx.dispatch(addNotification("ERROR", err.message, 2000));
              break;
            case "UserNotConfirmedException":
              appCtx.dispatch(
                addNotification(
                  "ERROR",
                  "Email has not been confirmed, please confirm your email.",
                  4000
                )
              );
              break;
            default:
              appCtx.dispatch(
                addNotification("ERROR", "An error has occured.", null)
              );
              console.log(err);
              break;
          }
        });
    },
  });

  return (
    <AuthModal
      {...props}
      message="Sign In"
      onSubmit={formik.handleSubmit}
      closefn={() => appCtx.dispatch(toggleSignIn())}
    >
      <InputFields>
        <TextInput
          svg={<EmailIcon size="60%" />}
          inputProps={{
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "email",
            ...formik.getFieldProps("email"),
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <PasswordInput
          svg={<FingerprintIcon size="60%" />}
          inputProps={{
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "current-password",
            ...formik.getFieldProps("password"),
          }}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
      </InputFields>
      <EFormSubmitButton
        type="submit"
        onClick={(e: any) => {
          formik.handleSubmit(e);
        }}
      >
        Sign In
      </EFormSubmitButton>
    </AuthModal>
  );
};

export default SignInModal;

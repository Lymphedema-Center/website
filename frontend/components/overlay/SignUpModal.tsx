import React, { useContext } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import {
  addNotification,
  toggleSignIn,
  toggleSignUp,
} from "../context/app/actions";
import AuthModal from "../form/AuthModal";
import TextInput from "../input/TextInput";
import FirstNameIcon from "../svg/icon/FirstNameIcon";
import LastNameIcon from "../svg/icon/LastNameIcon";
import EmailIcon from "../svg/icon/EmailIcon";
import FormSubmitButton from "../button/FormSubmitButton";
import FingerprintIcon from "../svg/icon/FingerprintIcon";
import SuccessIcon from "../svg/icon/SuccessIcon";
import PasswordInput from "../input/PasswordInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../input/ErrorMessage";
import { Auth } from "aws-amplify";

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

const SignUpModal = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const appCtx = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      given_name: "",
      family_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      given_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      family_name: Yup.string()
        .max(20, "Must be 20 characters or less.")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords musts match"),
    }),
    onSubmit: (values) => {
      Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          given_name: values.given_name,
          family_name: values.family_name,
        },
      })
        .then(() => {
          appCtx.dispatch(
            addNotification(
              "SUCCESS",
              `A confirmation email has been sent to ${values.email}`,
              2000
            )
          );
          appCtx.dispatch(toggleSignUp());
          appCtx.dispatch(toggleSignIn());
        })
        .catch((err) => {
          switch (err.code) {
            case "UsernameExistsException":
              appCtx.dispatch(addNotification("ERROR", err.message, 2000));
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
      message="Sign Up"
      onSubmit={formik.handleSubmit}
      closefn={() => appCtx.dispatch(toggleSignUp())}
    >
      <InputFields>
        <TextInput
          svg={<FirstNameIcon size="60%" />}
          inputProps={{
            id: "given_name",
            name: "given_name",
            type: "text",
            placeholder: "First Name",
            autoComplete: "given-name",
            ...formik.getFieldProps("given_name"),
          }}
        />
        {formik.touched.given_name && formik.errors.given_name ? (
          <ErrorMessage>{formik.errors.given_name}</ErrorMessage>
        ) : null}
        <TextInput
          svg={<LastNameIcon size="60%" />}
          inputProps={{
            id: "family_name",
            name: "family_name",
            type: "text",
            placeholder: "Last Name",
            autoComplete: "family-name",
            ...formik.getFieldProps("family_name"),
          }}
        />
        {formik.touched.family_name && formik.errors.family_name ? (
          <ErrorMessage>{formik.errors.family_name}</ErrorMessage>
        ) : null}
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
            autoComplete: "new-password",
            ...formik.getFieldProps("password"),
          }}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <PasswordInput
          svg={<SuccessIcon size="60%" />}
          inputProps={{
            id: "confirm_password",
            name: "confirm_password",
            type: "password",
            autoComplete: "new-password",
            placeholder: "Confirm Password",
            ...formik.getFieldProps("confirm_password"),
          }}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <ErrorMessage>{formik.errors.confirm_password}</ErrorMessage>
        ) : null}
      </InputFields>
      <EFormSubmitButton
        type="submit"
        onClick={(e: any) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        Sign Up
      </EFormSubmitButton>
    </AuthModal>
  );
};

export default SignUpModal;

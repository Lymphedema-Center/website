import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import { toggleResetPass, addNotification } from "../context/app/actions";
import AuthModal from "../form/AuthModal";
import TextInput from "../input/TextInput";
import EmailIcon from "../svg/icon/EmailIcon";
import FormSubmitButton from "../button/FormSubmitButton";
import ErrorMessage from "../input/ErrorMessage";
import CodeIcon from "../svg/icon/CodeIcon";
import PasswordInput from "../input/PasswordInput";
import FingerprintIcon from "../svg/icon/FingerprintIcon";
import SuccessIcon from "../svg/icon/SuccessIcon";
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

enum FormType {
  Submit = "SUBMIT",
  Confirm = "CONFIRM",
}

const ResetPasswordModal = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const appCtx = useContext(AppContext);
  const [form, setForm] = useState(FormType.Submit);
  const submitFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await Auth.forgotPassword(values.email);
        setForm(FormType.Confirm);
      } catch (e) {
        switch (e.code) {
          case "UserNotFoundException":
            appCtx.dispatch(addNotification("ERROR", "User not found.", 2000));
            break;
          default:
            appCtx.dispatch(
              addNotification("ERROR", "An error has occured.", null)
            );
            break;
        }
      }
    },
  });
  const confirmFormik = useFormik({
    initialValues: {
      email: "",
      code: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      code: Yup.string()
        .matches(/^[0-9]{6}$/, "Must be 6 digit number")
        .required("Required"),
      new_password: Yup.string()
        .min(6, "Must be 6 characters or more.")
        .required("Required"),
      confirm_password: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("new_password"), null], "Passwords must match."),
    }),
    onSubmit: async (values) => {
      try {
        await Auth.forgotPasswordSubmit(
          values.email,
          values.code,
          values.new_password
        );
        appCtx.dispatch(
          addNotification("SUCCESS", "Password successfully changed.", 2000)
        );
        appCtx.dispatch(toggleResetPass());
      } catch (e) {
        switch (e.code) {
          case "UserNotFoundException":
            appCtx.dispatch(addNotification("ERROR", "Email not found.", 2000));
            break;
          case "CodeMismatchException":
            appCtx.dispatch(
              addNotification("ERROR", "Incorrect confirmation code.", 2000)
            );
            break;
          default:
            console.log(e);
            appCtx.dispatch(
              addNotification("ERROR", "An error has occured.", null)
            );
            break;
        }
      }
    },
  });

  return (
    <AuthModal
      {...props}
      message="Reset Password"
      onSubmit={
        form === FormType.Submit
          ? submitFormik.handleSubmit
          : confirmFormik.handleSubmit
      }
      closefn={() => appCtx.dispatch(toggleResetPass())}
    >
      {form === FormType.Submit ? (
        <>
          <InputFields>
            <TextInput
              svg={<EmailIcon size="60%" />}
              inputProps={{
                name: "email",
                type: "text",
                placeholder: "Email",
                autoComplete: "email",
                ...submitFormik.getFieldProps("email"),
              }}
            />
            {submitFormik.touched.email && submitFormik.errors.email ? (
              <ErrorMessage>{submitFormik.errors.email}</ErrorMessage>
            ) : null}
          </InputFields>
          <EFormSubmitButton
            type="submit"
            onClick={(e: any) => {
              submitFormik.handleSubmit(e);
            }}
          >
            Send Code
          </EFormSubmitButton>
        </>
      ) : (
        <>
          <InputFields>
            <TextInput
              svg={<EmailIcon size="60%" />}
              inputProps={{
                name: "email",
                type: "text",
                placeholder: "Email",
                autoComplete: "email",
                ...confirmFormik.getFieldProps("email"),
              }}
            />
            {confirmFormik.touched.email && confirmFormik.errors.email ? (
              <ErrorMessage>{confirmFormik.errors.email}</ErrorMessage>
            ) : null}
            <TextInput
              svg={<CodeIcon size="60%" />}
              inputProps={{
                name: "code",
                type: "text",
                placeholder: "Confirmation Code",
                autoComplete: "one-time-code",
                ...confirmFormik.getFieldProps("code"),
              }}
            />
            {confirmFormik.touched.code && confirmFormik.errors.code ? (
              <ErrorMessage>{confirmFormik.errors.code}</ErrorMessage>
            ) : null}
            <PasswordInput
              svg={<FingerprintIcon size="60%" />}
              inputProps={{
                name: "new_password",
                type: "password",
                placeholder: "New Password",
                autoComplete: "new-password",
                ...confirmFormik.getFieldProps("new_password"),
              }}
            />
            {confirmFormik.touched.new_password &&
            confirmFormik.errors.new_password ? (
              <ErrorMessage>{confirmFormik.errors.new_password}</ErrorMessage>
            ) : null}
            <PasswordInput
              svg={<SuccessIcon size="60%" />}
              inputProps={{
                name: "confirm_password",
                type: "password",
                placeholder: "Confirm New Password",
                autoComplete: "new-password",
                ...confirmFormik.getFieldProps("confirm_password"),
              }}
            />
            {confirmFormik.touched.confirm_password &&
            confirmFormik.errors.confirm_password ? (
              <ErrorMessage>
                {confirmFormik.errors.confirm_password}
              </ErrorMessage>
            ) : null}
          </InputFields>
          <EFormSubmitButton
            type="submit"
            onClick={(e: any) => {
              confirmFormik.handleSubmit(e);
            }}
          >
            Change Password
          </EFormSubmitButton>
        </>
      )}
    </AuthModal>
  );
};

export default ResetPasswordModal;

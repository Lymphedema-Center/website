import React, { useContext } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import {
  toggleChangePass,
  addNotification,
  setUser,
} from "../context/app/actions";
import AuthModal from "../form/AuthModal";
import PasswordInput from "../input/PasswordInput";
import FormSubmitButton from "../button/FormSubmitButton";
import ErrorMessage from "../input/ErrorMessage";
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

const ChangePasswordModal = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const appCtx = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      current_password: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      current_password: Yup.string()
        .min(6, "Must be 6 characters or more.")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more.")
        .required("Required"),
      confirm_password: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match."),
    }),
    onSubmit: async (values) => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(
          user,
          values.current_password,
          values.password
        );
        appCtx.dispatch(
          addNotification("SUCCESS", "Password has been changed.", 2000)
        );
        appCtx.dispatch(toggleChangePass());
      } catch (e) {
        switch (e.code) {
          case "NotAuthorizedException":
            appCtx.dispatch(
              addNotification("ERROR", "Incorrect password.", 2000)
            );
            break;
          case "LimitExceededException":
            appCtx.dispatch(addNotification("ERROR", e.message, 2000));
            break;
          default:
            appCtx.dispatch(
              addNotification("ERROR", "An error has occured.", 2000)
            );
            console.log(e);
            break;
        }
      }
    },
  });

  return (
    <AuthModal
      {...props}
      message="Change Password"
      onSubmit={formik.handleSubmit}
      closefn={() => appCtx.dispatch(toggleChangePass())}
    >
      <InputFields>
        <PasswordInput
          svg={<FingerprintIcon size="60%" />}
          inputProps={{
            id: "current_password",
            name: "current_password",
            type: "password",
            placeholder: "Current Password",
            autoComplete: "current-password",
            ...formik.getFieldProps("current_password"),
          }}
        />
        {formik.touched.current_password && formik.errors.current_password ? (
          <ErrorMessage>{formik.errors.current_password}</ErrorMessage>
        ) : null}
        <PasswordInput
          svg={<FingerprintIcon size="60%" />}
          inputProps={{
            id: "password",
            name: "password",
            type: "password",
            placeholder: "New Password",
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
            placeholder: "Confirm New Password",
            autoComplete: "new-password",
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
          formik.handleSubmit(e);
        }}
      >
        Update Password
      </EFormSubmitButton>
    </AuthModal>
  );
};

export default ChangePasswordModal;

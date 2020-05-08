import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context as AppContext } from "../context/app/context";
import {
  toggleChangeName,
  addNotification,
  setUser,
} from "../context/app/actions";
import AuthModal from "../form/AuthModal";
import TextInput from "../input/TextInput";
import FormSubmitButton from "../button/FormSubmitButton";
import ErrorMessage from "../input/ErrorMessage";
import FirstNameIcon from "../svg/icon/FirstNameIcon";
import LastNameIcon from "../svg/icon/LastNameIcon";
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

const ChangeNameModal = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const appCtx = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      given_name: "",
      family_name: "",
    },
    validationSchema: Yup.object({
      given_name: Yup.string().required("Required"),
      family_name: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const user = await Auth.currentAuthenticatedUser();
      try {
        // update attributes
        await Auth.updateUserAttributes(user, {
          given_name: values.given_name,
          family_name: values.family_name,
        });

        // update in context
        const updatedUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        appCtx.dispatch(setUser(updatedUser.attributes));
        appCtx.dispatch(
          addNotification("SUCCESS", "Name successfully changed.", 2000)
        );
        appCtx.dispatch(toggleChangeName());
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <AuthModal
      {...props}
      message="Change Name"
      onSubmit={formik.handleSubmit}
      closefn={() => appCtx.dispatch(toggleChangeName())}
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
      </InputFields>
      <EFormSubmitButton
        type="submit"
        onClick={(e: any) => {
          formik.handleSubmit(e);
        }}
      >
        Update Name
      </EFormSubmitButton>
    </AuthModal>
  );
};

export default ChangeNameModal;

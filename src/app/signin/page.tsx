import { auth } from "auth";
import GoogleSigninButton from "components/client/GoogleSigninButton";
import { SigninForm } from "components/client/SigninForm";
import { redirect } from "next/navigation";
import { Stack } from "@mui/material";
import Title from "components/client/Title";

export default async function Signin() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <Stack
      spacing={2}
      style={{
        height: "100vh",
        maxWidth: 400,
        margin: "auto",
        padding: 16,
      }}
      justifyContent="center"
    >
      <Title />
      <SigninForm />
      <GoogleSigninButton />
    </Stack>
  );
}

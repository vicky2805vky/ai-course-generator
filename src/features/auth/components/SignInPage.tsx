import { SignIn } from "@clerk/clerk-react";
import AuthForm from "./AuthForm";

const SignUpPage = () => {
  return (
    <AuthForm
      FormComponent={
        <SignIn appearance={{}} signUpFallbackRedirectUrl="/sign-up" />
      }
    />
  );
};

export default SignUpPage;

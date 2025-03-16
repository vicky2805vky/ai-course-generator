import { useTheme } from "@/components/ThemeProvider";
import { SignUp } from "@clerk/clerk-react";
import { dark, experimental__simple } from "@clerk/themes";
import AuthForm from "./AuthForm";

const SignUpPage = () => {
  const { theme } = useTheme();
  return (
    <AuthForm
      FormComponent={
        <SignUp
          appearance={{
            baseTheme: theme === "dark" ? dark : experimental__simple,
            layout: {
              animations: true,
            },
          }}
          signInUrl="/sign-in"
        />
      }
    />
  );
};

export default SignUpPage;

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SignedOut>
        <Button
          onClick={() => {
            navigate("/sign-in");
          }}
          variant="ghost"
          size="icon"
        >
          <FaRegUser />
          <span className="sr-only">sign in</span>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthButton;

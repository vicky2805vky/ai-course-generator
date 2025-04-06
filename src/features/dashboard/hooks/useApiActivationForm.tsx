import { checkApi } from "@/services/api/userApi";
import { AppDispatch } from "@/services/store";
import { useUser } from "@clerk/clerk-react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const useApiActivationForm = (setIsSubmitting: React.Dispatch<boolean>) => {
  const { user } = useUser();
  const apiRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (apiRef.current) {
      setIsSubmitting(true);
      dispatch(
        checkApi({ apiKey: apiRef.current.value, userId: user!.id }),
      ).finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return { apiRef, handleSubmit };
};

export default useApiActivationForm;

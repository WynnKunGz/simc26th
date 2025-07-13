import { useMutation, useQuery } from "@tanstack/react-query";
import { FetchError, ofetch } from "ofetch";
import { SigninOutputType, SignupOutputType } from "./auth.schema";

export const useSignin = () =>
  useMutation({
    mutationFn: (data: SigninOutputType) =>
      ofetch("/api/auth/signin", {
        method: "POST",
        body: data,
      }),
    onError: (err: FetchError) => console.log(err.data),
    onSuccess: () => console.log("SIGNIN"),
  });

export const useSignup = () =>
  useMutation({
    mutationFn: (data: SignupOutputType) =>
      ofetch("/api/auth/signup", {
        method: "POST",
        body: data,
      }),
    onError: (err: FetchError) => console.log(err.data),
    onSuccess: () => console.log("success"),
  });

export const useSignout = () =>
  useMutation({
    mutationFn: () => ofetch("/api/auth/signout", { method: "DELETE" }),
    onError: () => {},
    onSuccess: () => {},
  });

export const useRefesh = () =>
  useQuery({
    queryKey: ["auth"],
    queryFn: () => ofetch("/api/auth/refesh", { method: "GET" }),
  });

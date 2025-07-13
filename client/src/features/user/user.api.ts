import { useQuery } from "@tanstack/react-query";
import { ofetch } from "ofetch";

export const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => ofetch("/api/user", { method: "GET" }),
  });

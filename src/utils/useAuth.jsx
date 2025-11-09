import { useAuth0 } from "@auth0/auth0-react";
import { mockAuth } from "./MockAuth";

const useAuth = import.meta.env.VITE_USE_MOCK_AUTH === "true"
  ? () => mockAuth
  : useAuth0;       
  
export default useAuth;

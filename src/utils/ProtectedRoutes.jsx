import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../utils/useAuth";

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth();
  const [triedLogin, setTriedLogin] = useState(false);

  const isMock = import.meta.env.VITE_USE_MOCK_AUTH === "true";

  useEffect(() => {
    if (isMock) return;

    if (!isLoading && !isAuthenticated && !triedLogin) {
      setTriedLogin(true);
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect, triedLogin, isMock]);

  if (isLoading) return <div>Loading...</div>;

  if (isMock || isAuthenticated) {
    return <Outlet />;
  }

  return null;
};

export default ProtectedRoutes;

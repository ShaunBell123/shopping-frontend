import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <button
      onClick={() =>
        isAuthenticated
          ? logout({ returnTo: window.location.origin })
          : loginWithRedirect()
      }
    >
      {isAuthenticated ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {user?.picture && (
            <img
              src={user.picture}
              alt={user.name}
              width="15"
              height="15"
              style={{ borderRadius: "50%" }}
            />
          )}
          <span>{user?.name}</span>
        </div>
      ) : (
        "Log In"
      )}
    </button>
  );
};

export default LoginButton;

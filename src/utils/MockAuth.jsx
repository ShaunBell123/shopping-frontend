export const mockAuth = {
  isAuthenticated: true,
  user: {
    name: "Dev User",
    email: "dev@example.com",
  },
  loginWithRedirect: () => console.log("Mock login"),
  logout: () => console.log("Mock logout"),
};

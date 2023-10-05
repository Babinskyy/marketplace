export function useAuth() {
  const isLogged = () => {
    const logged = localStorage.getItem("user") ? true : false;
    return logged;
  };
  return { isLogged };
}

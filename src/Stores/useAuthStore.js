import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuthStore = create((set) => ({
  token: Cookies.get("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,

  login: (token, user, rememberMe = false) => {
    Cookies.set("token", token, {
      expires: rememberMe ? 30 : 1,
      secure: true,
      sameSite: "Strict",
    });
    localStorage.setItem("user", JSON.stringify(user));
    set({ token, user });
  },

  logout: () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    set({ token: null, user: null });
  },
}));

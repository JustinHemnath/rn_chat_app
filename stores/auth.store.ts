import { create } from "zustand";

type TUserDetails = {
  id: string;
  name: string;
  email: string;
};

export type TAuth = {
  userDetails: TUserDetails | undefined;
  setUserDetails: (userDetails: TUserDetails) => void;
};

export const useAuthStore = create<TAuth>((set) => ({
  userDetails: undefined,
  setUserDetails: (payload: TUserDetails) => set((state: TAuth) => ({ userDetails: payload })),
}));

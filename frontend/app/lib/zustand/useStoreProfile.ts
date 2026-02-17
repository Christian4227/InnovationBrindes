import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreProfile {
    rememberLogin: boolean;
    setRememberLogin: (status: boolean) => void;
}

export const useStoreProfile = create<StoreProfile>()(
    persist(
        (set) => ({
            rememberLogin: false,
            setRememberLogin: (status) => set({ rememberLogin: status }),
        }),
        {
            name: "store-profile", // nome da chave no localStorage
        },
    ),
);

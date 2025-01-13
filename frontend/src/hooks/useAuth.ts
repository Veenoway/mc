// stores/useAuthStore.ts
import { ethers } from "ethers";
import determStringify from "fast-json-stable-stringify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  walletAddress: string | null;
  isConnected: boolean;
  isLoading: boolean;
  connectWallet: () => Promise<void>;
  logout: () => void;
  calculateSignature: (
    body: any,
    url: string
  ) => Promise<{ signature: string; timestamp: string }>;
}

async function calculateDigest(
  body: any,
  url: string,
  timestamp: number
): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(
    `${process.env.NEXT_PUBLIC_API_SECRET}${timestamp}${url}${
      body ? determStringify(body) : ""
    }`
  );

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return btoa(hashArray.map((byte) => String.fromCharCode(byte)).join(""));
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      walletAddress: null,
      isConnected: false,
      isLoading: false,

      connectWallet: async () => {
        try {
          set({ isLoading: true });

          if (!window.ethereum) {
            throw new Error("Please install MetaMask");
          }

          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();

          set({
            walletAddress: address,
            isConnected: true,
            isLoading: false,
          });

          return address;
        } catch (error) {
          set({ isLoading: false });
          console.error("Wallet connection error:", error);
          throw error;
        }
      },

      calculateSignature: async (body, url, isFormData = false) => {
        const timestamp = Date.now();
        const signature = await calculateDigest(
          isFormData ? "" : body,
          url,
          timestamp
        );
        return { signature, timestamp: timestamp.toString() };
      },
      logout: () => {
        set({
          walletAddress: null,
          isConnected: false,
        });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        walletAddress: state.walletAddress,
        isConnected: state.isConnected,
      }),
    }
  )
);

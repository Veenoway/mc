"use client";
import { useAuthStore } from "@/hooks/useAuth";
import { useState } from "react";

export function ConnectButton() {
  const { connectWallet, isAuthenticated, logout } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      await connectWallet();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={isAuthenticated ? logout : handleConnect}
      disabled={loading}
      className="bg-[#836EF9] text-white px-4 py-2 rounded-md disabled:opacity-50"
    >
      {loading
        ? "Connecting..."
        : isAuthenticated
        ? "Disconnect"
        : "Connect Wallet"}
    </button>
  );
}

import { ConnectButton } from "@/components/connectWallet";

export const Header = () => {
  return (
    <header className="bg-[rgba(255,255,255,0.05)] w-full h-[70px] border-b-2 border-base-border flex justify-center ">
      <div className="flex items-center justify-between w-[90%] h-full">
        <div className="flex items-center">
          <img
            src="/monad_logo_blue.png"
            width="40"
            height="40"
            alt="Monad logo"
          />
          <h1 className="text-white text-[24px] leading-9 ml-2 font-gramatika font-bold">
            MonaFood
          </h1>
        </div>
        <nav className="flex items-center">
          <a
            href="/"
            className="text-white font-medium text-[16px] leading-9 mr-5 font-hoves-pro-bold"
          >
            Home
          </a>
          <a
            href="/recipes"
            className="text-white font-medium text-[16px] leading-9 mr-5 font-hoves-pro-bold"
          >
            Recipes
          </a>
          <a
            href="/restaurants"
            className="text-white font-medium text-[16px] leading-9 mr-5 font-hoves-pro-bold"
          >
            Restaurants
          </a>
          <a
            href="/faq"
            className="text-white font-medium text-[16px] leading-9 font-hoves-pro-bold"
          >
            F.A.Q
          </a>
        </nav>
        <ConnectButton />
      </div>
    </header>
  );
};

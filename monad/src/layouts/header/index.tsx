export const Header = () => {
  return (
    <header className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg w-full h-[70px] border-b-2 border-base-border flex justify-center fixed top-0 z-10">
      <div className="flex items-center justify-between w-[90%] h-full">
        <div className="flex items-center">
          <img
            src="/monad_logo_blue.png"
            width="50"
            height="50"
            alt="Monad logo"
          />
          <h1 className="text-white text-[24px] leading-9 ml-2">Monad Lore</h1>
        </div>
        <nav className="flex items-center">
          <a href="/" className="text-white text-[16px] leading-9 mr-5">
            Home
          </a>
          <a href="/arts" className="text-white text-[16px] leading-9 mr-5">
            Community Arts
          </a>
          <a href="/faq" className="text-white text-[16px] leading-9">
            F.A.Q
          </a>
        </nav>
      </div>
    </header>
  );
};

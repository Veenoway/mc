import { cn } from "@/utils/cn";

export const Character = () => {
  const houses = [
    {
      name: "House of Chog",
      description: "House",
      image: "/chog.png",
    },
    {
      name: "House of Moyaki",
      description: "House",
      image: "/moyaki.png",
    },
    {
      name: "House of Molandak",
      description: "House",
      image: "/molandak.png",
    },
  ];

  const thStyle =
    "text-base font-medium border-t border-b border-[rgba(255,255,255,0.1)] py-2.5 px-5";
  const tdStyle =
    "text-base font-medium border-b border-[rgba(255,255,255,0.1)] py-5 px-5";

  const leaderboard = [
    {
      rank: 1,
      points: 100,
      username: "Veeno",
      house: "House of Chog",
    },
    {
      rank: 2,
      points: 100,
      username: "Veeno",
      house: "House of Chog",
    },
    {
      rank: 3,
      points: 100,
      username: "Veeno",
      house: "House of Chog",
    },
    {
      rank: 4,
      points: 100,
      username: "Veeno",
      house: "House of Chog",
    },
    {
      rank: 5,
      points: 100,
      username: "Veeno",
      house: "House of Chog",
    },
    {
      rank: 6,
      points: 100,
      username: "Veeno",
      house: "House of Chog",
    },
  ];

  return (
    <div className="mt-[80px] flex-col flex items-center">
      <h1>Character</h1>
      <div className="flex flex-col items-center justify-center w-[90%] max-w-[800px] mt-[50px]">
        <div className="flex items-center justify-center w-full">
          {houses.map((house, i) => {
            const even = i % 2 === 0;
            return (
              <div
                className={`flex flex-col items-center justify-center ${
                  even ? "mx-[80px]" : "mb-[80px]"
                }`}
              >
                <img
                  className={`${
                    even ? "h-[100px] w-[100px]" : "h-[120px] w-[120px]"
                  } rounded-full bg-white border border-white shadow-xl`}
                  src={house.image}
                  alt={house.name}
                />
                <p className="text-white font-medium mb-1 mt-5 font-gramatika text-xl">
                  {house.name}
                </p>
                <p className="text-white text-base font-gramatika">
                  {" "}
                  {house.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-[50px] overflow-scroll w-full bg-background-dark-purple-variant rounded-xl">
          <table className="font-gramatika w-full text-white">
            <thead className="bg-background-terciary">
              <tr>
                <th className={cn(thStyle, "text-center")}>Rank</th>
                <th className={cn(thStyle, "")}>User</th>
                <th className={cn(thStyle, "text-right")}>Points</th>
                <th className={cn(thStyle, "text-right")}>Wins%</th>
                <th className={cn(thStyle, "text-right")}>House</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, i) => {
                return (
                  <tr>
                    <td
                      className={cn(
                        tdStyle,
                        `text-center ${
                          i === 0 ? "text-5xl" : "text-xl"
                        } bg-background-terciary`
                      )}
                    >
                      {user.rank}
                    </td>
                    <td className={cn(tdStyle, "text-right")}>
                      <div className="flex items-center w-full">
                        <img
                          className={`${
                            i === 0
                              ? "h-[80px] w-[80px]"
                              : "h-[50px] w-[50px] ml-[30px]"
                          } rounded bg-white border border-white shadow-xl`}
                          src="/chog.png"
                          alt="username logo"
                        />
                        <div className="flex flex-col justify-start w-fit items-start ml-3">
                          <p
                            className={`${
                              i === 0 ? "text-2xl" : "text-base"
                            } text-white font-medium`}
                          >
                            {user.username}
                          </p>
                          <p className="text-white font-medium text-base">
                            {user.house}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={cn(tdStyle, "text-right")}>{user.points}</td>
                    <td className={cn(tdStyle, "text-right")}>97</td>
                    <td className={cn(tdStyle, "text-right")}>{user.house}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

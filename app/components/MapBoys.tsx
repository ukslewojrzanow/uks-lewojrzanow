"use client";
import Image from "next/image";
import Avatar from "@/public/player-boy.png";
import Avatar2 from "@/public/player-girl.png";
import { useState } from "react";
import { urlFor } from "@/sanity/client";

type Players = {
  _id: string;
  title: string;
  slug: { current: string };
  division: string;
  gender: string;
  name: string;
  position: string;
  number: string;
  // image: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  publishedAt: Date;
};

type Props = {
  players: Players[];
};

function MapBoys({ players }: Props) {
  const [isDivision, setIsDivision] = useState("Wszyscy");

  const handleDivisionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setIsDivision(target.value);
  };
  const divisionsAPI = [...new Set(players.map((div): string => div.division))];

  if (isDivision !== "Wszyscy") {
    players = players.filter((player) => player.division === isDivision);
  }

  return (
    <div className="playersmap_section">
      <div className="container min-h-[80vh]">
        <div className="team_divisions ">
          <h2 className="section_h2">Dywizje:</h2>
          <div className="team_division-box">
            <button
              className={` ${
                isDivision === "Wszyscy"
                  ? "team_division-btn-active"
                  : "team_division-btn"
              }`}
              value={"Wszyscy"}
              onClick={() => setIsDivision("Wszyscy")}
            >
              Wszyscy
            </button>
            {divisionsAPI
              .filter(
                (division) =>
                  division === "Klasa-1" ||
                  division === "Klasa-2" ||
                  division === "Klasa-3",
              )
              .sort()
              .map((division: string) => (
                <button
                  className={`uppercase ${
                    isDivision === division
                      ? "team_division-btn-active"
                      : "team_division-btn"
                  }`}
                  key={division}
                  value={division}
                  onClick={handleDivisionClick}
                >
                  {division}
                </button>
              ))}
          </div>
        </div>
        <div className="team_map">
          {players
            .filter(
              (player) =>
                player.division === "Klasa-1" ||
                player.division === "Klasa-2" ||
                player.division === "Klasa-3",
            )
            .map((player) => {
              const assetUrl = player.image?.asset?._ref
                ? urlFor(player.image).width(300).height(300).url()
                : null;
              return (
                <div className="player-box" key={player._id}>
                  {assetUrl ? (
                    <Image
                      src={assetUrl}
                      width={300}
                      height={300}
                      alt={player.name}
                    />
                  ) : (
                    <Image
                      src={player.gender === "chlopak" ? Avatar : Avatar2}
                      width={300}
                      height={300}
                      alt="Domyślny Avatar"
                    />
                  )}
                  <p>{player.name}</p>
                  <p>Numer: {player.number}</p>
                  <p>Pozycja: {player.position}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MapBoys;

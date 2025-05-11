"use client";
import Image from "next/image";
import Avatar from "@/public/player-boy.png";
import { useState } from "react";

type Boys = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  division: string;
};

type MapBoysProps = {
  boys: Boys[];
  divisions: string[];
};

function Mapboys({ boys, divisions }: MapBoysProps) {
  const [isDivision, setIsDivision] = useState("Wszyscy");

  let theBoys = boys;

  if (isDivision !== "Wszyscy") {
    theBoys = theBoys.filter((player) => player.division === isDivision);
  }

  const handleDivisionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setIsDivision(target.value);
  };

  return (
    <div className="playersmap_section">
      <div className="container">
        <div className="team_divisions">
          <h2 className="section_h2">Dywizje:</h2>
          <div className="team_division-box">
            <button
              className={`team_division-btn ${
                isDivision === "Wszyscy" ? "team_division-btn-active" : ""
              }`}
              value={"Wszyscy"}
              onClick={() => setIsDivision("Wszyscy")}
            >
              Wszyscy
            </button>
            {divisions.map((division: string) => (
              <button
                className={`uppercase team_division-btn ${
                  isDivision === division ? "team_division-btn-active" : ""
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
          {theBoys.map((boy) => (
            <div className="player-box" key={boy.id}>
              <Image src={Avatar} alt="Avatar" />
              <p>{boy.firstName}</p>
              <p>{boy.lastName}</p>
              <p>Numer: {boy.id}</p>
              <p>Pozycja: {boy.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mapboys;

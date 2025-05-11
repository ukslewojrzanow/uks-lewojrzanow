"use client";
import Image from "next/image";
import Avatar from "@/public/player-boy.png";
import { useState } from "react";

function MapBoys({ boys, divisions }) {
  const [isDivision, setIsDivision] = useState("Wszyscy");

  let theBoys = boys;

  if (isDivision !== "Wszyscy") {
    theBoys = theBoys.filter((player) => player.division === isDivision);
  }

  return (
    <div className="playersmap_section">
      <div className="container">
        <div className="team_divisions">
          <h2 className="section_h2 text-center">Dywizje:</h2>
          <div className="team_division-box">
            <button
              className={` team_division-btn ${
                isDivision === "Wszyscy" && "team_division-btn-active"
              }`}
              value={"Wszyscy"}
              onClick={() => setIsDivision("Wszyscy")}
            >
              Wszyscy
            </button>
            {divisions.map((division) => (
              <button
                className={`uppercase team_division-btn ${
                  isDivision === division && "team_division-btn-active"
                }`}
                key={division}
                value={division}
                onClick={(e) => setIsDivision(e.target.value)}
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

export default MapBoys;

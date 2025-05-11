"use client";
import Image from "next/image";
import Avatar from "@/public/player-girl.png";
import { useState } from "react";

function MapGirls({ girls, divisions }) {
  const [isDivision, setIsDivision] = useState("Wszyscy");

  let theGirls = girls;

  if (isDivision !== "Wszyscy") {
    theGirls = theGirls.filter((player) => player.division === isDivision);
  }

  return (
    <div className="playersmap_section">
      <div className="container">
        <div className="team_divisions">
          <h2 className="section_h2">Dywizje:</h2>
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
          {theGirls.map((girl) => (
            <div className="player-box" key={girl.id}>
              <Image src={Avatar} alt="Avatar" />
              <p>{girl.firstName}</p>
              <p>{girl.lastName}</p>
              <p>Numer: {girl.id}</p>
              <p>Pozycja: {girl.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MapGirls;

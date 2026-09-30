"use client";

import { useEffect, useState } from "react";
import { useCookie } from "@/app/context/CookieContext";

export default function CookieBanner() {
  const { consent, loaded, acceptAll, declineAll, saveSelected, showBanner } =
    useCookie();

  const [maps, setMapsLocal] = useState(false);

  useEffect(() => {
    if (loaded) {
      setMapsLocal(consent.maps);
    }
  }, [loaded, consent]);

  if (!loaded) return null;
  if (!showBanner) return null;

  const handleSaveSelected = () => {
    saveSelected({ maps });
  };

  const showSelectedButton = maps;

  return (
    <div className="fixed bottom-[10%] left-0 w-[50%] max-lg:w-full bg-cookies  flex flex-col gap-6 z-50 shadow-md">
      <p>Ta strona korzysta z cookies.</p>

      <div className="flex flex-col gap-6">
        {/* ESSENTIAL */}
        <div className="grid grid-cols-2 items-start gap-4">
          <div>
            <p>Niezbędne</p>
            <span>
              Niektóre pliki cookies są niezbędne do prawidłowego działania
              strony i nie można ich wyłączyć.
            </span>
          </div>

          <label className="switch switch-disabled justify-self-end">
            <input type="checkbox" checked disabled />
            <span className="slider" />
          </label>
        </div>

        {/* MAPS */}
        <div className="grid grid-cols-2 items-start gap-4">
          <div>
            <p>Mapy</p>
            <span>Umożliwiają wyświetlanie mapy z lokalizacją klubu.</span>
          </div>

          <label className="switch justify-self-end">
            <input
              type="checkbox"
              checked={maps}
              onChange={(e) => setMapsLocal(e.target.checked)}
            />
            <span className="slider" />
          </label>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-6 justify-end">
        <button onClick={declineAll} className="cookiesBtn1">
          Akceptuj tylko niezbędne
        </button>

        <button onClick={acceptAll} className="cookiesBtn2">
          Akceptuj wszystkie
        </button>
      </div>
      <div className="flex gap-6 justify-end">
        {showSelectedButton && (
          <button onClick={handleSaveSelected} className="cookiesBtn3">
            Akceptuj wybrane
          </button>
        )}
      </div>
    </div>
  );
}

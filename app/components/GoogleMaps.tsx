// components/Map.tsx
"use client";

import { useCookie } from "@/app/context/CookieContext";

import FadeDelay from "../UI/FadeDelay";

export default function Map() {
  const { consent, loaded } = useCookie();

  if (!consent.maps) {
    return (
      <div className="p-4 text-center">
        <p className="map-p">
          *Mapa jest zablokowana do czasu zaakceptowania cookies.
        </p>
      </div>
    );
  }

  if (!loaded) return null;

  return (
    <FadeDelay>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.3660311059507!2d20.731887776159848!3d52.01062417381783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193919566c0d1d%3A0x46da48b195d92b9c!2sSzko%C5%82a%20Podstawowa!5e1!3m2!1spl!2spl!4v1787646349709!5m2!1spl!2spl"
        className="w-full h-[400px] opacity-90 grayscale-75 hover:grayscale-50 hover:opacity-100 transition-all duration-300 "
        loading="lazy"
      ></iframe>
    </FadeDelay>
  );
}

"use client";
import React from "react";
import { YMaps, Map, Placemark, withYMaps } from "@pbe/react-yandex-maps";

const defaultState = {
  center: [41.2965807, 69.275822],
  zoom: 15,
};

const query = {
  lang: "en_US",
};

const MapWithDarkMode = withYMaps(Map, true, [
  "MapTypeManager",
  "control.ListBox",
]);

const FooterMap = () => {
  return (
    <YMaps query={query as any}>
      <Map width={"100%"} height={340} defaultState={defaultState}>
        <Placemark geometry={[41.2965807, 69.275822]} className="bg-red-600" />
      </Map>
    </YMaps>
  );
};

export default FooterMap;

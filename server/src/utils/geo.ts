import maxmind, { CityResponse, Reader } from "maxmind";

let lookup: Reader<CityResponse> | null = null;

const getLookup = async () => {
  if (!lookup)
    lookup = await maxmind.open<CityResponse>("./GeoLite2-City.mmdb");
  return lookup;
};

export const getGeoData = async (ip: string) => {
  if (!ip || ip === "127.0.0.1" || ip === "::1") {
    return { country: "Unknown", city: "Unknown" };
  }
  const db = await getLookup();
  const result = db.get(ip);
  return {
    country: result?.country?.names?.en ?? "Unknown",
    city: result?.city?.names?.en ?? "Unknown",
  };
};

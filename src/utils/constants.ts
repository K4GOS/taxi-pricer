import { ConfigType } from "@/Types/ConfigType";

export const defaultConfig: ConfigType = {
  priceOfKm: null,
  numberOfKm: null,
  day: null,
  hour: null,
  isStudent: false,
  age: null,
  country: null,
};

export const countries = ["Espagne", "France", "Roumanie", "Royaume-Uni"];

export const daysOfTheWeek = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export const countriesCurrenciesNames = {
  Espagne: "EUR",
  France: "EUR",
  Roumanie: "RON",
  "Royaume-Uni": "GBP",
};

export const countryCurrencies = {
  Espagne: "€",
  France: "€",
  Roumanie: "lei",
  "Royaume-Uni": "£",
};

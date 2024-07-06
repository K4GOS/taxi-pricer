import { ConfigType } from "@/Types/ConfigType";
import { countriesCurrenciesNames, countryCurrencies } from "./constants";

export async function calculatePrice(config: ConfigType): Promise<string> {
  if (
    config.priceOfKm !== null &&
    config.numberOfKm !== null &&
    config.day !== null &&
    config.hour !== null &&
    config.country !== null &&
    config.age !== null
  ) {
    const initialPrice = config.priceOfKm * config!.numberOfKm;
    let calculatePrice = initialPrice;

    if (config.day === "Dimanche") {
      calculatePrice = calculatePrice * 1.32;
    }

    if (config.hour > 22 || config.hour < 6) {
      calculatePrice = calculatePrice * 1.49;
    }

    if (config.isStudent) {
      calculatePrice = calculatePrice * 0.89;
    }
    if (config.age >= 65) {
      calculatePrice = calculatePrice * 0.92;
    }

    if (config.country === "Espagne") {
      calculatePrice = calculatePrice * 0.95;
    } else if (config.country === "Roumanie") {
      calculatePrice = calculatePrice * 0.91;
    } else if (config.country === "Royaume-Uni") {
      calculatePrice = calculatePrice * 1.07;
    }

    if (!["Espagne", "France"].includes(config.country)) {
      const exchangeRateResponse = await fetch(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_OHQ7KsODx6pcQe5FJq5JuJPVLHWKC9kx1iufMZ3b&base_currency=EUR"
      );

      if (!exchangeRateResponse.ok) {
        return "Une erreur est survenue avec l'appel à l'API de monnaies. Veuillez réessayer ultérieurement.";
      }
      const exchangeRate = await exchangeRateResponse.json();

      calculatePrice =
        calculatePrice *
        exchangeRate.data[
          countriesCurrenciesNames[
            config.country as keyof typeof countriesCurrenciesNames
          ]
        ];

      return (
        calculatePrice.toFixed(2).toString() +
        countryCurrencies[config.country as keyof typeof countryCurrencies]
      );
    }

    return calculatePrice.toFixed(2).toString() + "€";
  }

  return "Veuillez remplir tous les champs";
}

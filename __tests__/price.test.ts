// utils/calculatePrice.test.ts
import { calculatePrice } from "../src/utils/functions";

describe("Taxi ride in France and Spain with a senior", () => {
  it("65 years old threshold", async () => {
    const result = await calculatePrice({
      priceOfKm: 3,
      numberOfKm: 65,
      day: "Dimanche",
      hour: 22,
      isStudent: true,
      age: 65,
      country: "Espagne",
    });
    expect(result).toBe("195.00€");
  });

  it("78 years old no discount or additional fees", async () => {
    const result = await calculatePrice({
      priceOfKm: 5,
      numberOfKm: 10,
      day: "Lundi",
      hour: 10,
      isStudent: false,
      age: 78,
      country: "France",
    });
    expect(result).toBe("50.00€");
  });
});

describe("Null value in config", () => {
  it("priceOfKm is missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: null,
      numberOfKm: 65,
      day: "Dimanche",
      hour: 22,
      isStudent: true,
      age: 65,
      country: "Espagne",
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });

  it("numberOfKm is missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: 12,
      numberOfKm: null,
      day: "Dimanche",
      hour: 22,
      isStudent: true,
      age: 65,
      country: "Espagne",
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });

  it("day is missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: 12,
      numberOfKm: 65,
      day: null,
      hour: 22,
      isStudent: true,
      age: 65,
      country: "Espagne",
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });
  it("hour is missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: null,
      numberOfKm: 65,
      day: "Dimanche",
      hour: null,
      isStudent: true,
      age: 65,
      country: "Espagne",
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });
  it("Age is missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: null,
      numberOfKm: 65,
      day: "Dimanche",
      hour: 22,
      isStudent: true,
      age: null,
      country: "Espagne",
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });

  it("country is missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: null,
      numberOfKm: 65,
      day: "Dimanche",
      hour: 22,
      isStudent: true,
      age: null,
      country: null,
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });

  it("All fields are missing (null)", async () => {
    const result = await calculatePrice({
      priceOfKm: null,
      numberOfKm: null,
      day: null,
      hour: null,
      isStudent: true,
      age: null,
      country: null,
    });
    expect(result).toBe("Veuillez remplir tous les champs");
  });
});

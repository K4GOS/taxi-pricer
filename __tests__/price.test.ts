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
    expect(result).toBe("200.22€");
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
    expect(result).toBe("46.00€");
  });
});

describe("Taxi ride in France and Spain with a student", () => {
  it("normal student", async () => {
    const result = await calculatePrice({
      priceOfKm: 3,
      numberOfKm: 65,
      day: "Dimanche",
      hour: 22,
      isStudent: true,
      age: 19,
      country: "Espagne",
    });
    expect(result).toBe("217.63€");
  });

  it("student with 0 km", async () => {
    const result = await calculatePrice({
      priceOfKm: 0,
      numberOfKm: 10,
      day: "Lundi",
      hour: 10,
      isStudent: true,
      age: 20,
      country: "France",
    });
    expect(result).toBe("0.00€");
  });
});

describe("Taxi ride on Sunday", () => {
  it("Sunday at normal hour", async () => {
    const result = await calculatePrice({
      priceOfKm: 10,
      numberOfKm: 15,
      day: "Dimanche",
      hour: 15,
      isStudent: true,
      age: 19,
      country: "Espagne",
    });
    expect(result).toBe("167.41€");
  });

  it("Sunday at night", async () => {
    const result = await calculatePrice({
      priceOfKm: 10,
      numberOfKm: 15,
      day: "Dimanche",
      hour: 4,
      isStudent: true,
      age: 19,
      country: "Espagne",
    });
    expect(result).toBe("249.44€");
  });
});

// * NULL VALUES
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

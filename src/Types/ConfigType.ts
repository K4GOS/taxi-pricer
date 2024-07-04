export interface ConfigType {
  priceOfKm: number;
  numberOfKm: number;
  day:
    | "Lundi"
    | "Mardi"
    | "Mercredi"
    | "Jeudi"
    | "Vendredi"
    | "Samedi"
    | "Dimanche";
  hour: number;
  isStudent: boolean;
  age: number;
  country: string;
}

export type DayOfWeek =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche"
  | null;

export interface ConfigType {
  priceOfKm: number | null;
  numberOfKm: number | null;
  day: DayOfWeek;
  hour: number | null;
  isStudent: boolean;
  age: number | null;
  country: string | null;
}

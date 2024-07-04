"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConfigType } from "@/Types/ConfigType";
import { countries, daysOfTheWeek, defaultConfig } from "@/utils/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [taxiRideConfig, setTaxiRideConfig] =
    useState<ConfigType>(defaultConfig);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const calculatePrice = () => {
    return 0;
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice();
    setCalculatedPrice(calculatedPrice);
  }, [taxiRideConfig]);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-10">
        Calculateur de prix de courses
      </h1>
      <div className="sm:p-[64px] p-4 rounded-lg sm:border w-full sm:w-[700px] flex flex-col gap-10">
        <Input
          type="number"
          placeholder="Prix du km"
          min={0}
          onChange={(e) =>
            setTaxiRideConfig({
              ...taxiRideConfig,
              priceOfKm: parseInt(e.target.value),
            })
          }
        />
        <Input
          type="number"
          min={0}
          placeholder="Nombre de km"
          onChange={(e) =>
            setTaxiRideConfig({
              ...taxiRideConfig,
              numberOfKm: parseInt(e.target.value),
            })
          }
        />
        <Input
          type="number"
          min={0}
          max={120}
          placeholder="Age"
          onChange={(e) =>
            setTaxiRideConfig({
              ...taxiRideConfig,
              age: parseInt(e.target.value),
            })
          }
        />
        <div className="sm:flex sm:flex-row gap-4 sm:justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              onChange={(e) =>
                setTaxiRideConfig({
                  ...taxiRideConfig,
                  isStudent: !taxiRideConfig.isStudent,
                })
              }
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Je suis étudiant
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choisir un pays" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pays</SelectLabel>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Jour" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {daysOfTheWeek.map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p>Prix de la course : {calculatedPrice}€</p>
      </div>
    </main>
  );
}

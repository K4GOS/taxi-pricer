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
    console.log(taxiRideConfig);
    const calculatedPrice = calculatePrice();
    setCalculatedPrice(calculatedPrice);
  }, [taxiRideConfig]);

  return (
    <main className="flex flex-col items-center justify-between sm:p-24">
      <h1 className="text-3xl font-bold my-10 text-center px-4">
        Calculateur de prix de courses
      </h1>
      <div className="sm:p-[64px] p-4 rounded-lg sm:border w-full sm:w-[600px] flex flex-col gap-10">
        <Input
          type="number"
          placeholder="Prix du kilomètre"
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
          placeholder="Nombre de kilomètre(s)"
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
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-2 sm:justify-between">
          <Select
            onValueChange={(e) =>
              setTaxiRideConfig({ ...taxiRideConfig, country: e })
            }
          >
            <SelectTrigger className="sm:w-[160px] w-full">
              <SelectValue placeholder="Choisir un pays" />
            </SelectTrigger>
            <SelectContent avoidCollisions={false} className="max-h-[225px]">
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
          <Select
            onValueChange={(e) =>
              setTaxiRideConfig({ ...taxiRideConfig, day: e })
            }
          >
            <SelectTrigger className="sm:w-[120px] w-full">
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
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              onClick={() =>
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
        </div>
        <p>Prix de la course : {calculatedPrice}€</p>
      </div>
    </main>
  );
}

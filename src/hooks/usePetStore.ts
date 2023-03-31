import { useEffect, useState } from "react";
import { PetStore } from "../models/PetStore";

export function usePetStore(url: string) {
  const [petStore, setPetStore]: [
    PetStore | undefined,
    React.Dispatch<React.SetStateAction<PetStore | undefined>>
  ] = useState();

  useEffect(() => {
    const getPetStore = async () => {
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
      });

      setPetStore(await response.json());
    };

    getPetStore();
  }, [url]);

  return petStore;
}

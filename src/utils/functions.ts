import { TPerson } from "@/types";

export function getPersonNameById(
  id: number,
  persons: TPerson[]
): string | undefined {
  const person = persons.find((p) => p.id === id);
  return person ? person.name : undefined;
}

export enum Romanisation {
  Jyutping = 'Jyutping',
  SidneyLau = 'SidneyLau',
}

export const RomanisationName = {
  [Romanisation.Jyutping]: '粵拼',
  [Romanisation.SidneyLau]: '劉錫祥',

}

export function convert(input: string, from: Romanisation, to: Romanisation): string {
  const result = input;
  console.log(`Convert ${from} to ${to}`);
  console.log(input);
  console.log(result);
  return result;
}

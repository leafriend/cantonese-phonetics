export enum Romanisation {
  Jyutping = 'Jyutping',
  SidneyLau = 'SidneyLau',
}

export const RomanisationName = {
  [Romanisation.Jyutping]: '粵拼',
  [Romanisation.SidneyLau]: '劉錫祥',
}

/**
 * Tokens based on Jyutping (粵拼)
 */
export enum Token {
  b,
  p,
  m,
  f,
  d,
  t,
  n,
  l,
  g,
  k,
  h,
  ng,
  z,
  c,
  s,
  gw,
  kw,
  j,
  w,

  eon,

  _3,
}

export const TokenJyutping = {
  [Token.b]: 'b',
  [Token.p]: 'p',
  [Token.m]: 'm',
  [Token.f]: 'f',
  [Token.d]: 'd',
  [Token.t]: 't',
  [Token.n]: 'n',
  [Token.l]: 'l',
  [Token.g]: 'g',
  [Token.k]: 'k',
  [Token.h]: 'h',
  [Token.ng]: 'ng',
  [Token.z]: 'z',
  [Token.c]: 'c',
  [Token.s]: 's',
  [Token.gw]: 'gw',
  [Token.kw]: 'kw',
  [Token.j]: 'j',
  [Token.w]: 'w',

  [Token.eon]: 'eon',

  [Token._3]: '3',

}

export function convert(input: string, from: Romanisation, to: Romanisation): string {
  const result = input;
  console.log(`Convert ${from} to ${to}`);
  console.log(input);
  console.log(result);
  return result;
}

export function convertRomanisation(input: string, from: Romanisation, to: Romanisation): string {
  return '';
}

export function splitJyutping(input: string): Token[] {
  let str = input;
  const result: Token[] = [];
  while (str.length > 0) {
    const matchedKeys = findMatches(str);
    if (matchedKeys.length === 0) {
      throw new Error(`No match for ${str}`);
    } else if (matchedKeys.length === 1) {
      const token = Token[matchedKeys[0]];
      result.push(token);
      str = str.substring(TokenJyutping[token].length);
    } else {

      const sorteKeys = matchedKeys.sort((a, b) => {
        return b.length - a.length;
      });

      if (sorteKeys[0].length === sorteKeys[1].length) {
        throw new Error(`Ambiguous match for ${str}`);
      }
      const token = Token[sorteKeys[0]];
      result.push(token);
      str = str.substring(TokenJyutping[token].length);

    }
  }
  return result;
}

function findMatches(str: string): (keyof typeof Token)[] {
  return Object.keys(Token).filter(k => {
    const key = k as keyof typeof Token;
    const token = Token[key];
    const tokenJyutping = TokenJyutping[token];
    return str.startsWith(tokenJyutping);
  }).map(k => k as keyof typeof Token);
}


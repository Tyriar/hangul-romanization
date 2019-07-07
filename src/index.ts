/**
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */

import { REVISED_ROMANIZATION_OF_KOREAN } from './conversionSystems/revisedRomanizationOfKorean';

const UNICODE_OFFSET = 44032;
const UNICODE_MAX = 55215;

function convertCharacter(char: string) {
  const charCode = char.charCodeAt(0);
  const isHangul = charCode >= UNICODE_OFFSET && charCode < UNICODE_MAX;
  if (isHangul) {
      let unicodeOffset = charCode - UNICODE_OFFSET;
      const trailerOffset = unicodeOffset % REVISED_ROMANIZATION_OF_KOREAN.consonants.final.length;
      unicodeOffset -= trailerOffset;
      unicodeOffset /= REVISED_ROMANIZATION_OF_KOREAN.consonants.final.length;
      const vowelOffset = unicodeOffset % REVISED_ROMANIZATION_OF_KOREAN.vowels.length;
      unicodeOffset -= vowelOffset;
      unicodeOffset /= REVISED_ROMANIZATION_OF_KOREAN.vowels.length;
      const leadOffset = unicodeOffset;

      const result = REVISED_ROMANIZATION_OF_KOREAN.consonants.initial[leadOffset]
        + REVISED_ROMANIZATION_OF_KOREAN.vowels[vowelOffset]
        + REVISED_ROMANIZATION_OF_KOREAN.consonants.final[trailerOffset];
      return result;
  } 
  return char;
}

export function convert(text: string): string {
  return text.split('').map(convertCharacter).join('');
}

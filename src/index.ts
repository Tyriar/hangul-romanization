/**
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */

const UNICODE_OFFSET = 44032;
const UNICODE_MAX = 55215;

interface IHangulRomanizationSet {
  vowels: string[];
  consonants: {
    initial: string[];
    final: string[];
  };
}

const REVISED_ROMANIZATION_OF_KOREAN: IHangulRomanizationSet = {
  vowels: [
    'a',   // ㅏ
    'ae',  // ㅐ
    'ya',  // ㅑ
    'yee', // ㅒ
    'eo',  // ㅓ
    'e',   // ㅔ
    'yeo', // ㅕ
    'ye',  // ㅖ
    'o',   // ㅗ
    'wa',  // ㅘ
    'wae', // ㅙ
    'oe',  // ㅚ
    'yo',  // ㅛ
    'u',   // ㅜ
    'wo',  // ㅝ
    'we',  // ㅞ
    'wi',  // ㅟ
    'yu',  // ㅠ
    'eu',  // ㅡ
    'ui',  // ㅢ
    'i'    // ㅣ
  ],
  consonants: {
    initial: [
      'g',  // ㄱ
      'kk', // ㄲ
      'n',  // ㄴ
      'd',  // ㄷ
      'tt', // ㄸ
      'r',  // ㄹ
      'm',  // ㅁ
      'b',  // ㅂ
      'pp', // ㅃ
      's',  // ㅅ
      'ss', // ㅆ
      '',   // ㅇ
      'j',  // ㅈ
      'jj', // ㅉ
      'ch', // ㅊ
      'k',  // ㅋ
      't',  // ㅌ
      'p',  // ㅍ
      'h'	  // ㅎ
    ],
    final: [
      '',
      'k',  // ㄱ
      'k',  // ㄲ
      'kt', // ㄳ
      'n',  // ㄴ
      'nt', // ㄵ
      'nh', // ㄶ
      't',  // ㄷ
      'l',  // ㄹ
      'lk', // ㄺ
      'lm', // ㄻ
      'lp', // ㄼ
      'lt', // ㄽ
      'lt', // ㄾ
      'lp', // ㄿ
      'lh', // ㅀ
      'm',  // ㅁ
      'p',  // ㅂ
      'pt', // ㅄ
      't',  // ㅅ
      'tt', // ㅆ
      'ng', // ㅇ
      't',  // ㅈ
      't',  // ㅊ
      'k',  // ㅋ
      't',  // ㅌ
      'p',  // ㅍ
      'h'   // ㅎ
    ]
  }
};

function convertCharacter(char: string) {
  let result = '';
  const charCode = char.charCodeAt(0);
  const isHangul = charCode >= UNICODE_OFFSET && charCode < UNICODE_MAX;
  if (isHangul) {
      let unicodeOffset = charCode - UNICODE_OFFSET;
      let trailerOffset = unicodeOffset % REVISED_ROMANIZATION_OF_KOREAN.consonants.final.length;
      unicodeOffset -= trailerOffset;
      unicodeOffset /= REVISED_ROMANIZATION_OF_KOREAN.consonants.final.length;
      let vowelOffset = unicodeOffset % REVISED_ROMANIZATION_OF_KOREAN.vowels.length;
      unicodeOffset -= vowelOffset;
      unicodeOffset /= REVISED_ROMANIZATION_OF_KOREAN.vowels.length;
      let leadOffset = unicodeOffset;

      result += REVISED_ROMANIZATION_OF_KOREAN.consonants.initial[leadOffset];
      result += REVISED_ROMANIZATION_OF_KOREAN.vowels[vowelOffset];
      result += REVISED_ROMANIZATION_OF_KOREAN.consonants.final[trailerOffset];
  } else {
    result = char;
  }
  return result;
}

export function convert(text: string): string {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += convertCharacter(text[i]);
  }
  return result;
}

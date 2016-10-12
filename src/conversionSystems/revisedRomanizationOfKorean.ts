/**
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */

import { IHangulConversionSystem } from './hangulConversionSystem';

export const REVISED_ROMANIZATION_OF_KOREAN: IHangulConversionSystem = {
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

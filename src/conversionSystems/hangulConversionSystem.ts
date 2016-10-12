/**
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */

export interface IHangulConversionSystem {
  vowels: string[];
  consonants: {
    initial: string[];
    final: string[];
  };
}

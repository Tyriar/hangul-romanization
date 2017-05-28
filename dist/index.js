"use strict";
/**
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var revisedRomanizationOfKorean_1 = require("./conversionSystems/revisedRomanizationOfKorean");
var UNICODE_OFFSET = 44032;
var UNICODE_MAX = 55215;
function convertCharacter(char) {
    var result = '';
    var charCode = char.charCodeAt(0);
    var isHangul = charCode >= UNICODE_OFFSET && charCode < UNICODE_MAX;
    if (isHangul) {
        var unicodeOffset = charCode - UNICODE_OFFSET;
        var trailerOffset = unicodeOffset % revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.consonants.final.length;
        unicodeOffset -= trailerOffset;
        unicodeOffset /= revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.consonants.final.length;
        var vowelOffset = unicodeOffset % revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.vowels.length;
        unicodeOffset -= vowelOffset;
        unicodeOffset /= revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.vowels.length;
        var leadOffset = unicodeOffset;
        result += revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.consonants.initial[leadOffset];
        result += revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.vowels[vowelOffset];
        result += revisedRomanizationOfKorean_1.REVISED_ROMANIZATION_OF_KOREAN.consonants.final[trailerOffset];
    }
    else {
        result = char;
    }
    return result;
}
function convert(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        result += convertCharacter(text[i]);
    }
    return result;
}
exports.convert = convert;

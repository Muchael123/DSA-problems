
/**
 * source https://leetcode.com/problems/text-justification/
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

function fullJustify(words, maxWidth) {
    let result = [];
    let currentLine = [];
    let currentLength = 0;

    for (let word of words) {
        if (currentLength + word.length + currentLine.length > maxWidth) {
            for (let i = 0; i < maxWidth - currentLength; i++) {
                currentLine[i % (currentLine.length - 1 || 1)] += ' ';
            }
            result.push(currentLine.join(''));
            currentLine = [];
            currentLength = 0;
        }
        currentLine.push(word);
        currentLength += word.length;
    }

    result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentLength - currentLine.length + 1));

    return result;
}

const words = ["hello,", "How", "was", "ur", "day", "We", "welcome", "you", "to", "our", "ceremony"];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));

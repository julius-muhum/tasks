/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNumbers: number[] = [];
    if (numbers.length === 0) {
        return [];
    }
    //newNumbers = [];
    if (numbers.length === 1) {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[0]);
        return newNumbers;
    }
    newNumbers.push(numbers[0]);
    newNumbers.push(numbers[numbers.length - 1]);
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    numbers = numbers.map((price: number): number => price * 3);
    newNumbers = [...numbers];
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted: number[] = numbers.map((word: string): number =>
        !Number.isNaN(parseFloat(word)) ? parseFloat(word) : 0
    );

    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let finished: number[] = [];
    amounts = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.substring(1) : amount
    );
    finished = amounts.map((word: string): number =>
        !Number.isNaN(parseFloat(word)) ? parseFloat(word) : 0
    );
    return finished;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newWords: string[] = [];
    newWords = messages.filter(
        (words: string): boolean => words[words.length - 1] != "?"
    );
    newWords = newWords.map((word: string): string =>
        word[word.length - 1] === "!" ? word.toUpperCase() : word
    );
    return newWords;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shorts: string[] = [];
    shorts = words.filter((short: string): boolean => short.length < 4);
    const sum = shorts.reduce((sum: number, short: string) => sum + 1, 0);
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    colors = colors.filter(
        (color: string): boolean =>
            color.toUpperCase() !== "RED" &&
            color.toUpperCase() !== "BLUE" &&
            color.toUpperCase() !== "GREEN"
    );
    if (colors.length > 0) {
        return false;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum: number = addends.reduce(
        (sum: number, num: number) => sum + num,
        0
    );
    const strings: string[] = addends.map((num: number): string =>
        num.toString()
    );
    let complete: string = strings.reduce(
        (complete: string, word: string) => complete + word + "+",
        ""
    );
    complete = sum.toString() + "=" + complete;
    return complete.substring(0, complete.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let total = 0;
    let truth = false;
    let index = 0;
    let final = 0;
    let count = 0;
    const numbers: number[] = values.map((num) =>
        num < 0 && !truth
            ? ((truth = true), (index = count), (final = total), num)
            : ((total += num), count++, num)
    );
    if (!truth) {
        numbers.push(total);
        return numbers;
    }
    numbers.splice(index + 1, 0, final);
    return numbers;
}
console.log(injectPositive([-100, 0, -200, 100, 200]));

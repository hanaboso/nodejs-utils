/**
 * Class for common operations with strings
 */
export class StringUtils {

    /**
     *
     * @param {string} subj
     * @param {string[]} charsArr
     * @return {string}
     */
    public static escapeChars(subj: string|number, charsArr: string[]): string {
        let str: string = `${subj}`;
        charsArr.forEach((charToEscape) => {
            str = str.replace(charToEscape, `\\${charToEscape}`);
        });

        return str;
    }

}

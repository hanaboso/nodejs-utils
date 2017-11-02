import StringUtils from "./StringUtils";

/**
 * Class for common operations with js literal objects
 */
export class ObjectUtils {

    /**
     *
     * @param obj
     * @return {string}
     */
    public static toString(obj: any): string {
        let str = "";
        for (const p in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, p)) {
                str += `${p}=${obj[p]},`;
            }
        }

        return str.substring(0, str.length - 1);
    }

    /**
     *
     * @param obj
     * @param {string[]} escChars
     * @return {}
     */
    public static escapeProperties(obj: any, escChars: string[]): any {
        for (const p in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, p)) {
                obj[p] = StringUtils.escapeChars(obj[p], escChars);
            }
        }

        return obj;
    }

    /**
     *
     * @param obj
     */
    public static removeNullableProperties(obj: any) {
        Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);
        return obj;
    }

    /**
     * Merges properties of two simple js objects
     * @param one
     * @param two
     */
    public static mergeObjectsProperties(
        one: { [key: string]: any },
        two: { [key: string]: any },
    ): { [key: string]: any } {
        const merged: { [key: string]: any } = {};

        for (const key in one) {
            if (one.hasOwnProperty(key)) {
                merged[key] = one[key];
            }
        }

        for (const key in two) {
            if (two.hasOwnProperty(key)) {
                merged[key] = two[key];
            }
        }

        return merged;
    }
}

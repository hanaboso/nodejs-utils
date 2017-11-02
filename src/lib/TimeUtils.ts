import * as BigInt from "big-integer";

/**
 * Class for time management
 */
class TimeUtils {

    /**
     *
     * @return {number}
     */
    public static nowSeconds(): number {
        return Math.floor(Date.now() / 1000);
    }

    /**
     *
     * @return {number}
     */
    public static nowMili(): number {
        return Date.now();
    }

    /**
     *
     * @return {number}
     */
    public static nowMicro(): string {
        return BigInt(this.nowNano()).divide(1e3).toString();
    }

    /**
     * string is returned in string because of MAX_INT_SIZE
     * @return {string}
     */
    public static nowNano(): string {
        const loadMs = new Date().getTime();
        const loadNs = process.hrtime();
        const diffNs = process.hrtime(loadNs);

        return BigInt(loadMs).times(1e6).add(BigInt(diffNs[0]).times(1e9).plus(diffNs[1])).toString();
    }

}

export default TimeUtils;

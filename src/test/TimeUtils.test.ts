import TimeUtils from "../lib/TimeUtils";

import { assert } from "chai";
import "mocha";

describe("Time utils", () => {
    it("should return timestamps", () => {
        const now = `${Date.now()}`;
        const approxNow = now.substring(0, 10);

        // seconds
        const sec = `${TimeUtils.nowSeconds()}`;
        assert.equal(10, sec.length);
        assert.include(sec, approxNow);

        // miliseconds
        const mili = `${TimeUtils.nowMili()}`;
        assert.equal(13, mili.length);
        assert.include(mili, approxNow);

        // microseconds
        const micro = `${TimeUtils.nowMicro()}`;
        assert.equal(16, micro.length);
        assert.include(micro, approxNow);

        // nanoseconds
        const nano = TimeUtils.nowNano();
        assert.equal(19, nano.length);
        assert.include(nano, approxNow);
    });
});

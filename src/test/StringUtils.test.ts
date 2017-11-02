import {StringUtils} from "../lib/StringUtils";

import { assert } from "chai";
import "mocha";

describe("String utils", () => {
    it("should escape selected chars in string", () => {
        const res = StringUtils.escapeChars("some=string + to be escaped", ["+", "="]);
        assert.typeOf(res, "string");
        assert.equal("some\\=string \\+ to be escaped", res);
    });
});

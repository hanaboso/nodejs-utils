import ObjectUtils from "../lib/ObjectUtils";

import { assert } from "chai";
import "mocha";

describe("Object utils", () => {
    it("should create string from object to properties keys and values", () => {
        const obj = {
            name: "Some Name",
            company: "Hanaboso",
            timestamp: "1496993205364",
        };
        const str = ObjectUtils.toString(obj);
        assert.equal("name=Some Name,company=Hanaboso,timestamp=1496993205364", str);
    });
    it("should escape object properties", () => {
        let obj = {
            name: "Escape Spaces",
            plus: "1+2",
            equal: "x=equality",
        };
        obj = ObjectUtils.escapeProperties(obj, ["+", "=", " ", "*"]);
        assert.deepEqual({
            name: "Escape\\ Spaces",
            plus: "1\\+2",
            equal: "x\\=equality",
        }, obj);
    });
    it("should remove object's empty properties", () => {
        let obj = {
            foo: "bar",
            baz: "someone will make this null",
            bat: { nested: true },
        };

        obj.baz = null;

        obj = ObjectUtils.removeNullableProperties(obj);
        assert.deepEqual({
            foo: "bar",
            bat: { nested: true },
        }, obj);
    });
    it("should merge object properties", () => {
        const one = {
            foo: "bar",
            baz: "something",
        };

        const two = {
            foo: "changed",
            bat: "whoa",
        };

        const merged = ObjectUtils.mergeObjectsProperties(one, two);
        assert.deepEqual(merged, {
            foo: "changed",
            baz: "something",
            bat: "whoa",
        });
    });
});

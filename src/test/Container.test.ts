import {Container} from "../lib/Container";

import { assert } from "chai";
import "mocha";

describe("Container", () => {

    it("test set, get and delete", () => {
        const cont = new Container();
        assert.isFalse(cont.has("something"));
        try {
            cont.get("something");
        } catch (e) {
            assert.instanceOf(e, Error);
        }
        cont.delete("something");

        cont.set("foo", "value");
        cont.set("bar", "value2");

        assert.isTrue(cont.has("foo"));
        assert.isTrue(cont.has("bar"));

        assert.equal(cont.get("foo"), "value");
        assert.equal(cont.get("bar"), "value2");

        cont.delete("bar");
        try {
            cont.get("bar");
        } catch (e) {
            assert.instanceOf(e, Error);
        }

        assert.equal(cont.get("foo"), "value");
    });

});

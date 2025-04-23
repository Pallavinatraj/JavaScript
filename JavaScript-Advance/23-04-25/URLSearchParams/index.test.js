import serachParams from "./index";
import search from "./index";

let url = "https://example.com?foo=1&bar=2";

test("test url", () => {
    expect(serachParams(url, param)).toBe("2");
})
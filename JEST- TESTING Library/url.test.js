import searchParams from "./url";

let url = "https://example.com?foo=1&bar=2";

test("test your Url", () => {
    expect(searchParams(url, "bar")).toBe("2");
});

import { test, expect } from "@jest/globals";
import { sortPages } from "./report.js";

test("sortPages 2 pages", () => {
	const input = {
		"https://wagslane.boot.dev/path": 1,
		"https://wagslane.boot.dev": 3,
	};
	const actual = sortPages(input);
	const expected = [
		["https://wagslane.boot.dev", 3],
		["https://wagslane.boot.dev/path", 1],
	];
	expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
	const input = {
		"https://wagslane.boot.dev/path": 1,
		"https://wagslane.boot.dev": 3,
		"https://wagslane.boot.dev/path2": 5,
		"https://wagslane.boot.dev/path3": 2,
		"https://wagslane.boot.dev/path4": 9,
	};
	const actual = sortPages(input);
	const expected = [
		["https://wagslane.boot.dev/path4", 9],
		["https://wagslane.boot.dev/path2", 5],
		["https://wagslane.boot.dev", 3],
		["https://wagslane.boot.dev/path3", 2],
		["https://wagslane.boot.dev/path", 1],
	];
	expect(actual).toEqual(expected);
});

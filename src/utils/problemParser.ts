    export function parseProblemData() {
    const url = location.href;
    let title = "";
    let description = "";

    if (url.includes("leetcode.com")) {
        title = document.querySelector("h1")?.textContent ?? "";
        description =
        document.querySelector('[data-key="description-content"]')?.textContent ??
        "";
    } else if (url.includes("codechef.com")) {
        title = document.querySelector("h1")?.textContent ?? "";
        description =
        document.querySelector(".problem-statement")?.textContent ?? "";
    } else if (url.includes("geeksforgeeks.org")) {
        title = document.querySelector(".problem-title")?.textContent ?? "";
        description =
        document.querySelector(".problem-description")?.textContent ?? "";
    } else if (url.includes("hackerrank.com")) {
        title = document.querySelector("h1")?.textContent ?? "";
        description =
        document.querySelector(".challenge_problem_statement")?.textContent ?? "";
    } else if (url.includes("atcoder.jp")) {
        title = document.querySelector("span.h2")?.textContent ?? "";
        description = document.querySelector("section")?.textContent ?? "";
    } else if (url.includes("codeforces.com")) {
        title = document.querySelector(".title")?.textContent ?? "";
        description =
        document.querySelector(".problem-statement")?.textContent ?? "";
    }

    return { title: title.trim(), description: description.trim() };
    }

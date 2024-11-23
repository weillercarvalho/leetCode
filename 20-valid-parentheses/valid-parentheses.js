/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    while (s.includes("{}") || s.includes("()") || s.includes("[]")) {
        s = s.replace("{}", "").trim();
        s = s.replace("()", "").trim();
        s = s.replace("[]", "").trim();
    }
    return s === ""; // Retorna true se a string estiver vazia
};
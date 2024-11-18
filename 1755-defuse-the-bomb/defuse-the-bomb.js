/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) {
        // Se k == 0, todos os números são substituídos por 0
        return result;
    }

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) {
            // Somar os próximos k números
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n]; // Usa o módulo para acessar índices circulares
            }
        } else if (k < 0) {
            // Somar os k números anteriores
            for (let j = 1; j <= Math.abs(k); j++) {
                sum += code[(i - j + n) % n]; // Índices circulares para números anteriores
            }
        }

        result[i] = sum;
    }

    return result;
};

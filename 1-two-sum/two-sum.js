/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
       let numToIndex = new Map();  // Mapa para armazenar os números e seus índices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Calcula o complemento do número atual

        // Verifica se o complemento já existe no mapa
        if (numToIndex.has(complement)) {
            // Se o complemento está no mapa, retorna os índices do complemento e do número atual
            return [numToIndex.get(complement), i];  
        }

        // Se o complemento não está no mapa, adiciona o número atual e seu índice ao mapa
        numToIndex.set(nums[i], i);
    }

    return [];  // Retorna um array vazio se nenhum par for encontrado
};
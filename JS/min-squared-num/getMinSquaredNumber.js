
export const getMinSquaredNumber = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let absArr = arr.map((num) => Math.abs(num));
    let minNum = Math.min(...absArr);

    return Math.pow(minNum, 2);
};

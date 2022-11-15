/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let res = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);

    for (const boxtype of boxTypes) {
        let numBox = boxtype[0];
        let numUnits = boxtype[1];

        if (numBox < truckSize) {
            res += numBox * numUnits;
            truckSize -= numBox;
        } else {
            res += truckSize * numUnits;
            break;
        }
    }

    return res;
};
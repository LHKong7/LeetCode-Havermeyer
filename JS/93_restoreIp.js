/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    let res = [];

    if (s === null || s.length === 0) return res;

    const isValidIpaddr = (seg) => {
        let n = seg.length;
        if (n > 3) return false;
        return (seg.charAt(0) === '0') ? (n === 1) : (Number.parseInt(seg) <= 255);
    }

    const restoreIp = (s, idx, restored, count) => {
        if (count > 4) return;
        if (count === 4 && idx == s.length) {
            res.push(restored);
            return;
        }

        for (let i = 1; i < 4; i++) {
            if ((idx + i) > s.length) break;
            let segment = s.substring(idx, idx + i);
            if (!isValidIpaddr(segment)) continue;
            let suffix = count === 3 ?  '' : '.';
            restoreIp(s, idx + i, restored + segment + suffix, count + 1);
        }
    }

    restoreIp(s, 0, '', 0);

    return res;
};

let s = "25525511135";
let ok = restoreIpAddresses(s);
console.log(ok);

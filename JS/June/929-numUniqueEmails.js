/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const emailSet = new Set();

    for (const email of emails) {
        const idx = email.indexOf('@');
        let local = email.slice(0, idx).split("+")[0]; // 去掉本地名第一个加号之后的部分
        local = local.replaceAll(".", ""); // 去掉本地名中所有的句点
        emailSet.add(local + email.slice(idx));
    }

    return emailSet.size;
};

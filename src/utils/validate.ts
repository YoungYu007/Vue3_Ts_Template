/**
 * Created by YNF on 2024-01-10 10:28.
 * @desc: 验证工具类
 */

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {boolean}
 */
export function isExternal(path: string) {
    return /^(https?:|mailto:|tel:|sms:)/.test(path);
}

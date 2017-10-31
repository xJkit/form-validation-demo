const maxLength = max => value => value && value.length > max ? `超過最大長度 ${max} 個字元` : undefined;

/**
 * Export validators
 */

export const required = value => !value ? '此欄位必填！': undefined;
export const maxLength8 = maxLength(8);
export const number = value => value && isNaN(Number(value)) ? '此欄位必須為數字' : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? '不符合 email 格式' : undefined;
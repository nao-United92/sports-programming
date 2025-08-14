/**
 * UUID v4形式のUniversally Unique Identifier (UUID) を生成します。
 * @returns {string} 生成されたUUID文字列。
 */
export function generateUUID() {
  // RFC4122 v4 UUID の生成
  // xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

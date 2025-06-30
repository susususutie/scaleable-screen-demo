export default function simpleHashWithBitwise(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0 // 转换为 32 位整数
  }
  return hash
}

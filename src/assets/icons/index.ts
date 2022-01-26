const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/u)
requireAll(req)

const fontFiles = require.context('./font', true, /\.svg$/u)
export const fontList = fontFiles.keys().map(item => {
  return item.slice(2, -4)
})
const svgFiles = require.context('./svg', true, /\.svg$/u)
export const svgList = svgFiles.keys().map(item => {
  return item.slice(2, -4)
})
const imgFiles = require.context('./img', true, /\.(png|jpg|jpeg|webp)$/u)
export const imgList = imgFiles.keys().map(item => {
  return item.slice(2, -4)
})

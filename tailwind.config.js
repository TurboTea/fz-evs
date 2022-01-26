module.exports = {
  content: ['./src/public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // 用于表格顶部新增|导入等操作按钮背景
        'btn-primary': 'linear-gradient(205deg, #3661e8 0%, #1993cc 100%)',
        'btn-secondary': 'linear-gradient(49deg, #545571 0%, #241F3D 100%)',
        // 用户待办事项背景
        'todo-issue': 'linear-gradient(351deg, #d3e1ff 0%, #ffffff 100%)',
      },
    },
  },
  variants: {
    extend: {
      lineClamp: ['responsive', 'hover'],
      aspectRatio: ['responsive', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

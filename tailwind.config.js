/** @type {import('tailwindcss', 'onMounted', 'initFlowbite', ).Config} */
// import {  } from 'vue'
// import {  } from 'flowbite'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
          require('flowbite/plugin')
      ]
}

// module.exports = {
//   content: [
//     "./node_modules/flowbite/**/*.js"
// ],

//   plugins: [
//       require('flowbite/plugin')
//   ]

// } 
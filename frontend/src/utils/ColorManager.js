// // ColorManager.js
// import { ref, computed } from 'vue'
// import colors from 'tailwindcss/colors'

// export const validColors = [
//   'emerald',
//   'green',
//   'lime',
//   'red',
//   'orange',
//   'amber',
//   'yellow',
//   'teal',
//   'cyan',
//   'sky',
//   'blue',
//   'indigo',
//   'violet',
//   'purple',
//   'fuchsia',
//   'pink',
//   'rose',
//   'slate',
//   'gray',
//   'zinc',
//   'neutral',
//   'white',
// ]

// const DEFAULT_COLOR = 'white'

// function isValidColor(color) {
//   return validColors.includes(color) && colors[color] && colors[color][500]
// }

// function applyColor(colorName, prefix) {
//   if (!isValidColor(colorName)) {
//     console.warn(`Invalid color: ${colorName}. Falling back to ${DEFAULT_COLOR}`)
//     colorName = DEFAULT_COLOR
//   }

//   const colorShades = colors[colorName]
//   Object.entries(colorShades).forEach(([shade, value]) => {
//     document.documentElement.style.setProperty(`--${prefix}-${shade}`, value)
//   })
// }

// function loadSavedColor(key, prefix) {
//   const savedColor = localStorage.getItem(key)
//   const validatedColor = isValidColor(savedColor) ? savedColor : DEFAULT_COLOR

//   if (savedColor !== validatedColor) {
//     localStorage.setItem(key, validatedColor)
//   }

//   applyColor(validatedColor, prefix)
//   return validatedColor
// }

// function saveColor(colorName, key, prefix) {
//   if (!isValidColor(colorName)) {
//     console.warn(`Invalid color: ${colorName}. Falling back to ${DEFAULT_COLOR}`)
//     colorName = DEFAULT_COLOR
//   }

//   localStorage.setItem(key, colorName)
//   applyColor(colorName, prefix)
// }

// export function useColorManager(key, prefix) {
//   const selectedColor = ref(loadSavedColor(key, prefix))

//   function setColor(colorName) {
//     if (!isValidColor(colorName)) {
//       console.warn(`Invalid color: ${colorName}. Falling back to ${DEFAULT_COLOR}`)
//       colorName = DEFAULT_COLOR
//     }

//     selectedColor.value = colorName
//     saveColor(colorName, key, prefix)
//   }

//   const displayColor = computed(() => {
//     return selectedColor.value.charAt(0).toUpperCase() + selectedColor.value.slice(1)
//   })

//   return {
//     selectedColor,
//     displayColor,
//     setColor,
//     validColors,
//   }
// }

// // Pour les boutons
// export const useButtonColor = () => useColorManager('ButtonColor', 'primary')

// // Pour le texte
// export const useTextColor = () => useColorManager('TextColor', 'text')

// // Pour DevWeb
// export const useDevWebColor = () => useColorManager('DevWebColor', 'devweb')
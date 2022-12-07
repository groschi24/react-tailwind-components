export type COLORS =
  | 'white'
  | 'light'
  | 'dark'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type ColorRecord = Record<COLORS, string>;

export const colorsBg: ColorRecord = {
  white: 'bg-white text-black',
  light: 'bg-gray-100 text-black dark:bg-gray-600 dark:text-white',
  dark: 'bg-gray-800 text-white',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
};

export const colorsBorders: ColorRecord = {
  white: 'border-gray-300',
  light: 'border-gray-200 dark:border-gray-700',
  dark: 'border-gray-900 dark:border-gray-700',
  success: 'border-green-700',
  danger: 'border-red-700',
  warning: 'border-yellow-700',
  info: 'border-blue-700',
};

export const colorsText: ColorRecord = {
  white: 'text-black dark:text-gray-100',
  light: 'text-gray-700 dark:text-gray-300',
  dark: 'text-gray-900',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-blue-500',
};

export const colorsOutline: ColorRecord = {
  white: `${colorsText.white} ${colorsBorders.white}`,
  light: `${colorsText.light} ${colorsBorders.light}`,
  dark: `${colorsText.dark} ${colorsBorders.dark}`,
  success: `${colorsText.success} ${colorsBorders.success}`,
  danger: `${colorsText.danger} ${colorsBorders.danger}`,
  warning: `${colorsText.warning} ${colorsBorders.warning}`,
  info: `${colorsText.info} ${colorsBorders.info}`,
};

export const colorsButtons: ColorRecord = {
  white: `hover:bg-gray-50 ${colorsBg.white} ${colorsBorders.white}`,
  light: `hover:bg-gray-100 dark:hover:bg-gray-700 ${colorsBg.light} ${colorsBorders.light}`,
  dark: `hover:bg-gray-900 ${colorsBg.dark} ${colorsBorders.dark}`,
  success: `hover:bg-green-600 ${colorsBg.success} ${colorsBorders.success}`,
  danger: `hover:bg-red-600 ${colorsBg.danger} ${colorsBorders.danger}`,
  warning: `hover:bg-yellow-600 ${colorsBg.warning} ${colorsBorders.warning}`,
  info: `hover:bg-blue-600 ${colorsBg.info} ${colorsBorders.info}`,
};

export const colorsButtonsOutline: ColorRecord = {
  white: `hover:border-gray-100 ${colorsText.white} ${colorsBorders.white}`,
  light: `hover:border-gray-100 dark:hover:border-gray-300 ${colorsText.light} ${colorsBorders.light}`,
  dark: `hover:border-gray-700 dark:text-white ${colorsText.dark} ${colorsBorders.dark}`,
  success: `hover:border-green-500 ${colorsText.success} ${colorsBorders.success}`,
  danger: `hover:border-red-500 ${colorsText.danger} ${colorsBorders.danger}`,
  warning: `hover:border-yellow-500 ${colorsText.warning} ${colorsBorders.warning}`,
  info: `hover:border-blue-500 ${colorsText.info} ${colorsBorders.info}`,
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#ea52ba',
                'primary-light': '#e779c1',
                'primary-dark': '#e01aa1',
                secondary: '#37037a',
                'secondary-dark': '#2c0264',
                accent: '#8bd2d6',
                'accent-dark': '#55bec3',
                neutral: '#221A23',
                'neutral-dark': '#1c161d',
                'base-light': '#3e306e',
                'base-100': '#2d1b69',
                'base-dark': '#28185d',
                info: '#92CDF7',
                success: '#19947C',
                warning: '#F9CF39',
                error: '#E51F3A',
            },
            height: {
                '80vh': '80vh',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

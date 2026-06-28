/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#9a0002',
                secondary: '#efe6dd',
            },
            fontFamily: {
                heading: ['var(--font-inter-tight)', 'sans-serif'],
                body: ['var(--font-instrument-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
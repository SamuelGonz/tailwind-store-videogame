/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#181a20",
            secondary: "#e58d27",
            bgSecondary: "#362c29",
            bgLight: "#312f33",
         },
      },
   },
   plugins: [],
};

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    keyframes: { fade: { from: { opacity: 0, transform: "translateY(8px)" }, to: { opacity: 1, transform: "none" } } },
    animation: { fade: "fade .4s ease both" },
  } },
  plugins: [],
};

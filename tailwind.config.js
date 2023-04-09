/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {    
    primary: "#570DF8", 

   secondary: "rgb(155, 155, 8)",
        
accent: "#37CDBE",
        
neutral: "#3D4451",
        
"base-100": "#FFFFFF",
        
info: "#3ABFF8",
        
success: "#36D399",
        
warning: "#FBBD23",
        
error: "#F87272",
        },
      },
    ],
  },

  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
    }
  },
  plugins: [require("daisyui")]
}



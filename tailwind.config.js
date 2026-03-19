export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ak-red": "#E63946",       
        "ak-dark-red": "#A6202B",  
        "ak-white": "#FDFDFD",     
        "ak-light-grey": "#EIF2F6",
        "ak-mid-grey": "#CBD5E1",  
        "ak-grey": "#64748B",      
        "ak-dark-grey": "#0f172a", 
      },
      fontFamily: {
        display: ["Teko", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M40 0L0 0 L0 40\" fill=\"none\" stroke=\"%23cbd5e1\" stroke-width=\"1\" opacity=\"0.2\"/%3E%3C/svg%3E')",
        'dots-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"2\" cy=\"2\" r=\"2\" fill=\"%23e63946\" opacity=\"0.1\"/%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
};
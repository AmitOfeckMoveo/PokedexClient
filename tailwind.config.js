/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      fontSize: {
        "heading-xlarge": ["28px", { lineHeight: "37px" }],
        "heading-large": ["24px", { lineHeight: "34px" }],
        "heading-medium": ["18px", { lineHeight: "27px" }],
        "subheading": ["16px", { lineHeight: "24px" }],
        "body": ["14px", { lineHeight: "22px" }],
        "caption": ["12px", { lineHeight: "19px" }],
        "xsmall": ["11px", { lineHeight: "16px" }],
        "button-big": ["16px", { lineHeight: "24px" }], 
        "button-small": ["14px", { lineHeight: "22px" }], 
      },
      fontWeight: {
        bold: "700",
        medium: "500",
        regular: "400",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#EBEFF6",
          100: "#B1BDDB",
          200: "#E3E6E9",
          300: "#3B5AA6",
          400: "#293F74",
          500: "#182442",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neutrals: {
          white: "#FFFFFF",
          100: "#F2F5F7",
          200: "#A8AEB5",
          300: "#5A6066",
          400: "#44484C",
          500: "#2D3033",
          700: "#313336",
        },
        extended: {
          purple: {
            DEFAULT: "#A88FEF",
            hover: "#C0B0F2",
          },
          lightgreen: {
            DEFAULT: "#A7EF8F",
            hover: "#C2EFB8",
          },
          yellow: {
            DEFAULT: "#EAEB8F",
            hover: "#EBEFBD",
          },
          pink: {
            DEFAULT: "#EF8FBD",
            hover: "#EEA7CC",
          },
        },
        "success-green": "#51FF4E",
        "warning-yellow": "#FFF94E",
        "error-red": "#FF3131",
        gradient: {
          default: "linear-gradient(to right, #5BE2F7, #50DDA0)",
          disabled: "linear-gradient(to right, #5BE2F7, #50DDA0)",
          fainted: "linear-gradient(to right, #F75B5B, #DD7150)",
        },
      },
      backgroundImage: {
        "gradient-default": "linear-gradient(to right, #5BE2F7, #50DDA0)",
        "gradient-disabled": "linear-gradient(to right, #5BE2F7, #50DDA0)",
        "gradient-fainted": "linear-gradient(to right, #F75B5B, #DD7150)",
      },
      spacing: {
        "button-px": "16px",
        "button-py-sm": "9px",
        "button-py-md": "10px",
        "button-py-lg": "12px",
        "button-height-sm": "32px",
        "button-height-md": "36px",
        "button-height-lg": "40px",
        "gap-button": "4px", 
        "spinner-size-sm": "16px",
        "spinner-size-md": "24px",
        "spinner-size-lg": "32px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "4px", 
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


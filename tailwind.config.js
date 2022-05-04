//const { "[data-theme=dark]": darkTheme } = require("daisyui/src/colors/themes")
//const { "[data-theme=light]": lightTheme } = require("daisyui/src/colors/themes")
const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('utils/generate-palette')));

const customPalettes = {
    primary: generatePalette('#1d1480'),
    secondary: generatePalette('#03aeee'),
    info: generatePalette("#e6f7fd")
};

module.exports = {
    mode: 'jit',
    darkMode: `media`,
    theme: {
        taYoutube: {
            debug: false, // shows the new component classes in the console while building
            export: false, // writes the new component classes into files ./public/utilities.css & /public/keyframes.css
        },
        colors: {
            "facebook" :  "#1877f2",
            "twitter" : "#1da1f2",
            "linkedin" : "#0077b5",
            "pmPrimary" : customPalettes.primary,
            "pmSecondary" : customPalettes.secondary,
            "alt" : customPalettes.info,
            "white" : "#ffffff"

        },
        extend: {
            fontFamily: {
                sans: ['Poppins'],
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.pmPrimary.800'),
                        '[class~="lead"]': {
                            color: theme('colors.pmSecondary.500')
                        },
                        strong: {
                            color: theme('colors.pmPrimary.800'),
                        },
                        a: {
                            color: theme('colors.pmPrimary.800'),
                            '&:hover': {
                                color: theme('colors.pmSecondary.500')
                            },
                        },
                        h1: {
                            color: theme('colors.pmPrimary.800')
                        },
                        h2: {
                            color: theme('colors.pmPrimary.800')
                        },
                        h3: {
                            color: theme('colors.pmPrimary.800')
                        },
                        h4: {
                            color: theme('colors.pmPrimary.800')
                        },
                        'ol > li::before': {
                            color: theme('colors.pmPrimary.800')
                        },
                        'ol > li::marker': {
                            color: theme('colors.pmPrimary.800'),
                            backgroundColor: theme('colors.pmPrimary.800')
                        },
                        'ul > li::marker': {
                            color: theme('colors.pmPrimary.800'),
                            backgroundColor: theme('colors.pmPrimary.800')
                        },
                        'ul > li::before': {
                            backgroundColor: theme('colors.pmPrimary.800')
                        },
                        hr: {
                            borderColor: theme('colors.pmPrimary.200')
                        },
                        blockquote: {
                            color: theme('colors.pmPrimary.800'),
                            fontWeight: 800,
                            borderLeftColor: theme('colors.pmSecondary.500')
                        }
                    }
                }
            }),
            zIndex: {
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '60': '90',
                '70': '90',
                '80': '90',
                '90': '90',
                '100': '100',
            },
            minHeight: () => ({
                "screen/1": "100vh",
                "screen/2": "50vh",
                "screen/3": "calc(100vh / 3)",
                "screen/4": "calc(100vh / 4)",
                "screen/5": "calc(100vh / 5)",
            }),
        }
    },
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        themes: [
            {
                playmob: {
                    "primary": "#1d1480",
                    "secondary": "#03aeee",
                    "accent": "#67CBA0",
                    "neutral": "#07023d",
                    "base-100": "#FFFFFF",
                    "base-200": "#e6f7fd",
                    "base-300": "#c6d5ec",
                    "info": "#03b7ee",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                    "neutral-content": "#FFFFFF",
                    "base-content" : "#07023d",
                    "--border-btn": "2px",
                    "--btn-text-case": "normal"
                },
            },
        ],
    },
    variants: {
        fontSize: ['responsive'],
        taYoutube: ['responsive'],
        extend: {
            translate: ['group-hover']
        }
    },
    plugins: [

        require('tailwindcss'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@markusantonwolf/ta-youtube'),
        require('autoprefixer'),
        require('daisyui'),


    ],
    content: ['./site/layouts/**/*.{html,js}', "./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
}

module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 0,
            features: {
                'custom-properties': false,
            },
            importFrom: './tailwind.config.js',
        },
        autoprefixer: {},
        cssnano: {},
    },
}
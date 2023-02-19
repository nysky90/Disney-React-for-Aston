const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@hoc': 'src/hoc',
        '@servises': 'src/servises',
        '@utils': 'src/utils',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@styles': 'src/styles',
    })(config);

    return config;
}
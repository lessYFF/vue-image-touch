module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'jest-vue-preprocessor',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/example/', '/lib/'], // 忽略测试路径
}

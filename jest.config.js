module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'jest-vue-preprocessor',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!@vue/test-utils)'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/example/', '/lib/'], // 忽略测试路径
}

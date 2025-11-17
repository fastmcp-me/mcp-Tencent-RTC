function handleFramework(framework) {
    let result = framework;
    if (framework.startsWith('vue')) {
        result = 'vue';
    }
    return result;
}
export { handleFramework };
//# sourceMappingURL=handle-framework.js.map
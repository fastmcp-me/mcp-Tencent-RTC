const COMPONENT_NAME_RULES = [
    {
        test: (name) => name.startsWith('tuichat'),
        value: 'chat',
    },
    {
        test: (name) => name.startsWith('tuiconversation') || name.startsWith('conversation'),
        value: 'conversation-list',
    },
    {
        test: (name) => name.includes('message-list') || name.includes('messagelist'),
        value: 'message-list',
    },
    {
        test: (name) => name.includes('message-input') || name.includes('messageinput'),
        value: 'message-input',
    },
    {
        test: (name) => name.includes('live-view') || name.includes('liveview'),
        value: 'live-view',
    },
    {
        test: (name) => name.includes('live-player') || name.includes('liveplayer') || name.includes('live-watch') || name.includes('livewatch'),
        value: 'live-player',
    },
    {
        test: (name) => name.includes('live-list') || name.includes('livelist'),
        value: 'live-list',
    },
    {
        test: (name) => name.includes('live-audience-list') || name.includes('liveaudiencelist'),
        value: 'live-audience-list',
    },
    {
        test: (name) => name.includes('guest-panel') || name.includes('guestpanel'),
        value: 'co-guest-panel',
    },
    {
        test: (name) => name.includes('live-scene-panel') || name.includes('livescenepanel'),
        value: 'live-scene-panel',
    },
    {
        test: (name) => name.includes('stream-mixer') || name.includes('streammixer'),
        value: 'stream-mixer',
    },
    {
        test: (name) => name.includes('barrage'),
        value: 'barrage',
    }
];
function handleComponentName(componentName) {
    const lowerName = componentName.toLowerCase();
    const matchedRule = COMPONENT_NAME_RULES.find(rule => rule.test(lowerName));
    return matchedRule ? matchedRule.value : lowerName;
}
export { handleComponentName };
//# sourceMappingURL=handle-component-name.js.map
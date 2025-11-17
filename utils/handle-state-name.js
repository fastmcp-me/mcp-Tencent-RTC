const STATE_NAME_RULES = [
    {
        test: (name) => name.startsWith('live-state') || name.startsWith('livestate'),
        value: 'live-state',
    },
    {
        test: (name) => name.includes('device-state') || name.includes('devicestate'),
        value: 'device-state',
    },
    {
        test: (name) => name.includes('room-list-state') || name.includes('roomliststate'),
        value: 'room-list-state',
    },
    {
        test: (name) => name.includes('room-participant-state') || name.includes('roomparticipantstate'),
        value: 'room-participant-state',
    },
    {
        test: (name) => name.includes('login-state') || name.includes('loginstate'),
        value: 'login-state',
    },
];
function handleStateName(stateName) {
    const lowerName = stateName.toLowerCase();
    const matchedRule = STATE_NAME_RULES.find(rule => rule.test(lowerName));
    return matchedRule ? matchedRule.value : lowerName;
}
export { handleStateName };
//# sourceMappingURL=handle-state-name.js.map
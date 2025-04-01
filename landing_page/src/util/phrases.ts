const phrases: string[] = [
    'Where are we going, Champ?',
    'Lass mich deine Füße riechen?',
    '让我闻闻你的脚?',
    'Как собака на сене',
    'Кашкавал летa, авион слета',
    'Do I smell some Bussy?',
];

function pickRandomPhrase(): string[] {
    const index: number = Math.floor(Math.random() * phrases.length);
    return [phrases[index]];
}

export { pickRandomPhrase };
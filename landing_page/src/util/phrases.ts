const phrases: string[] = [
    'Where are we going, Champ?',
    'Lass mich deine Füße riechen?',
    '让我闻闻你的脚?',
    'Как собака на сене',
    'Кашкавал летa, авион слета',
    'Do I smell some Bussy?',
    'お前はもう死んでいる',
    'ワンチャンある',
    'No tengo pruebas, pero tampoco dudas.',
    'Eso estuvo muy random.',
    'Ich hab’ kein’ Bock mehr.',
    'Wah gwaan',
    'A who big up demself so? Eeh? Wheh di likkle plane deh now?',
    'Груевски се врати!',
];

function pickRandomPhrase(): string[] {
    const index: number = Math.floor(Math.random() * phrases.length);
    return [phrases[index]];
}

export { pickRandomPhrase };
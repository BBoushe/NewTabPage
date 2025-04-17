function openMail(): void {
    window.open('https://mail.google.com/mail/u/0/#inbox');
    window.open('https://mail.google.com/mail/u/1/#inbox');
    window.open('https://outlook.office.com/mail/');
    window.open('https://mail.yahoo.com/d/folders/1');
}

function openCalendars(): void  {
    window.open('https://calendar.google.com/u/0');
    window.open('https://calendar.google.com/u/1');
}

function openTrello(): void{
    window.open('https://trello.com');
    window.open('https://todoist.com');
}

function openCourses(): void  {
    window.open('https://www.udemy.com');
}

function openGithub(): void {
    window.open('https://github.com/BBoushe');
}

function openLinkedIn(): void {
    window.open('https://linkedin.com/in/alek-pachemski');
}

function openLeetCode(): void {
    window.open('https://leetcode.com/');
    window.open('https://www.techinterviewhandbook.org/grind75/');
}

function openNextDoc(): void {
    window.open('https://nextjs.org/docs');
}

function openReactDoc(): void {
    window.open('https://react.dev/reference/react');
}

function openNestDoc(): void {
    window.open('https://docs.nestjs.com/');
}

function openTsDoc(): void {
    window.open('https://www.typescriptlang.org/docs/');
}

function openJsDoc(): void {
    window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript');
}

const actions = {
    openMail: openMail,
    openCalendars: openCalendars,
    openCourses: openCourses,
    openTrello: openTrello,
    openGithub: openGithub,
    openLinkedIn: openLinkedIn,
    openLeetCode: openLeetCode,
    openNextDoc: openNextDoc,
    openReactDoc: openReactDoc,
    openNestDoc: openNestDoc,
    openTsDoc: openTsDoc,
    openJsDoc: openJsDoc,
}

export { actions };
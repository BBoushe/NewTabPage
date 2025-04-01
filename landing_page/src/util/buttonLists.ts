import calendar_icon from '../assets/icons/calendar-icon.png';
import mail_icon from '../assets/icons/mail-icon.png';
import github_icon from '../assets/icons/github-icon.png';
import linkedin_icon from '../assets/icons/linkedin-icon.png';
import courses_icon from '../assets/icons/courses-icon.png';
import trello_icon from '../assets/icons/trello-icon.png';
import leetcode_icon from '../assets/icons/leetcode-icon.png';
import nextjs_icon from '../assets/icons/nextjs-icon.png';
import nestjs_icon from '../assets/icons/nestjs-icon.png';
import react_icon from '../assets/icons/react-icon.png';
import js_icon from '../assets/icons/js-icon.png';

import { actions } from "./openWebsites.ts";

export type ButtonItem = {
    imgSrc: string;
    action: () => void;
    alt: string;
}

const devButtons: ButtonItem[] = [
    { imgSrc: github_icon, action: actions.openGithub, alt: "Github" },
    { imgSrc: courses_icon, action: actions.openCourses, alt: "Courses" },
    { imgSrc: leetcode_icon, action: actions.openLeetCode, alt: "LeetCode" },
    { imgSrc: nextjs_icon, action: actions.openNextDoc, alt: "Next.js Documentation" },
    { imgSrc: nestjs_icon, action: actions.openNestDoc, alt: "Nest.js Documentation" },
    { imgSrc: react_icon, action: actions.openReactDoc, alt: "React Documentation" },
    { imgSrc: js_icon, action: actions.openJsDoc, alt: "JavaScript Documentation" },
]

const productivityButtons: ButtonItem[] = [
    { imgSrc: calendar_icon, action: actions.openCalendars, alt: "Calendar" },
    { imgSrc: mail_icon, action: actions.openMail, alt: "Mail" },
    { imgSrc: trello_icon, action: actions.openTrello, alt: "Trello" },
]

const personalButtons: ButtonItem[] = [
    { imgSrc: linkedin_icon, action: actions.openLinkedIn, alt: "LinkedIn" },
]

export { devButtons, productivityButtons, personalButtons };
import calendar_icon from '../assets/icons/calendar-icon.png';
import mail_icon from '../assets/icons/mail-icon.png';
import github_icon from '../assets/icons/github-icon.png';
import linkedin_icon from '../assets/icons/linkedin-icon.png';
import courses_icon from '../assets/icons/courses-icon.png';
import trello_icon from '../assets/icons/trello-icon.png';
import leetcode_icon from '../assets/icons/leetcode-icon.png';
import nextjs_icon from '../assets/icons/nextjs-icon.png';

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
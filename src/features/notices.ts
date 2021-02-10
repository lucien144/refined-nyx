import features from '.';
import './notices.scss';

export default (function () {
    // @ts-ignore
    features.add(() => {
        // Notices
        const notifications: HTMLAnchorElement | null = document.querySelector('#new_notifications');
        let count: Number = Number.parseInt(notifications?.innerText ?? '0');
        count = Number.isNaN(count) ? 0 : count;
        const html = `
    <li class="i4 ${count > 0 ? 'reminders' : ''}" id="notices">
        <a href="?l=user;section=notices">
            <div class="icon-entypo icon-list nick" title="předchozí upozornění"></div>
            <div class="count nick like-link"> ${count}</div>
        </a>
    </li>`;
        const menu: HTMLUListElement | null = document.querySelector('ul.m.l1');
        menu?.insertAdjacentHTML('beforeend', html);
    });
})();

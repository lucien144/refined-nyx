// Notices
const notifications = document.querySelector('#new_notifications');
const count = Number.parseInt(notifications.outerText === '' ? 0 : notifications.outerText);
const html = `
    <li class="i4 ${count > 0 ? 'reminders red' : ''}" id="notices">
        <a href="?l=user;section=notices">
            <span class="icon-entypo icon-list" title="předchozí upozornění"></span>
            <span class="count"> ${count}</span>
        </a>
    </li>
`;
document.querySelector('ul.m.l1').insertAdjacentHTML('beforeend', html);

// CMD + Enter
const textarea = document.querySelector('#message_box');
textarea.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' && event.metaKey) {
        textarea.form.querySelector('.input-submit').click();
    }
});

document.querySelector('#topic_form, form[name=mail]').addEventListener('submit', function (event) {
    this.querySelector('textarea').value = 'something else';
});
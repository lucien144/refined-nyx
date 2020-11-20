import cache from 'webext-storage-cache';

const md = require('markdown-it')({
    html: true,
    linkify: false,
    breaks: true
})

export default (() => {
    document?.documentElement?.classList.add('fyx__markdown');

    // If there's stored preview in cache, load it.
    cache.get('fyx__preview').then((preview) => {
        if (typeof preview === 'string') {
            const textarea: HTMLTextAreaElement | null = document.querySelector('#message_box');
            if (textarea) {
                textarea.value = preview;
                cache.delete('fyx__preview');
            }
        }
    });

    const form: HTMLFormElement | null = document.querySelector('#topic_form, form[name=mail]');
    form?.addEventListener('submit', function (event) {
        const textarea: HTMLTextAreaElement | null = form?.querySelector('textarea');
        if (textarea) {
            const {id, name} = textarea;
            textarea.id = `_${id}`;
            textarea.name = `_${name}`;
            const message = document.createElement('input');
            message.setAttribute('type', 'hidden');
            message.setAttribute('id', id);
            message.setAttribute('name', name);

            const markdown = md.render(textarea.value).replaceAll('<p>', '').replaceAll('</p>', "\n");
            message.setAttribute('value', markdown);
            form.appendChild(message);

            const sender = (event as SubmitEvent).submitter.getAttribute('name');
            // If preview, store the preview in local storage to show it after refresh
            if (sender === 'preview') {
                cache.set('fyx__preview', textarea.value);
            }
        }
    });
})();

interface SubmitEvent extends Event {
    submitter: HTMLElement;
}

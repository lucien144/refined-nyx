import features from '.';

export default (() => {
    features.add(() => {
        const toggle: HTMLAnchorElement | null = document.querySelector('a.show-history-new');
        if (toggle) {
            toggle.dispatchEvent(new MouseEvent('click'));
        }
    });
})();

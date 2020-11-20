export default (() => {
    const filterInput = document.querySelector('input[name=filter_text]') as HTMLInputElement;
    const filterBtn = document.querySelector('button#topic_search') as HTMLButtonElement;

    if (!filterInput || !filterBtn) {
        return;
    }

    document.querySelectorAll('.wci').forEach((element) => {
        element.innerHTML = element.innerHTML.replace(/(#)([A-Za-z0-9_]+)/g, `<a href="$&" class="fyx__tag">$&</a>`);
    });

    document.querySelectorAll('.fyx__tag').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            filterInput.value = element.getAttribute('href') ?? '';
            filterBtn.click();
        })
    });
})();

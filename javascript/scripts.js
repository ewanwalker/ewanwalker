const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
tab.addEventListener('click', () => {
    tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    panels.forEach(panel => panel.classList.remove('active'));
    const targetId = tab.getAttribute('aria-controls');
    document.getElementById(targetId).classList.add('active');
});
});

window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.2;
  document.querySelector('.TitleBox').style.transform = `translateY(${offset}px)`;
});




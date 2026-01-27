const terminal = document.getElementById('FakeTerminal');
const terminalBody = document.getElementById('TerminalBody');
const input = document.getElementById('TerminalInput');

let history = [];
let index = -1;
let dir = '/Projects';
let PersonalProjects = ['Personal-Website', 'Utility-Bash-Functions', 'Automated-Lesion-Masking-Script'];

function getTimeString() {
     const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    return timeString;
}

function updateClock() {
    const timeString = getTimeString();
    document.getElementById('Clock').textContent = timeString;
}

function addCommandToTerminal(cmd, dir) {
    let timeString = getTimeString();
    const line = document.createElement('p');
    line.innerHTML = `
        ${timeString} <span style="color: rgb(108, 41, 166);">~${dir}</span>
        <span style="color: white;"> > </span> ${cmd}
    `;
    terminalBody.insertBefore(line, input.parentElement);
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = input.textContent.trim();
        addCommandToTerminal(cmd, dir);

        if (cmd.startsWith('echo ')) {
            const output = cmd.slice(5);
            const line = document.createElement('p');
            line.innerHTML = `<span style="color: white;">${output}</span>`;
            terminalBody.insertBefore(line, input.parentElement);
            input.textContent = '';
            history.push(cmd);
            index = history.length;
            return;
        }

        if(cmd === 'ls') {
            const line = document.createElement('p');
            line.innerHTML = `<span style="color: white;">${PersonalProjects.join(' ')}</span>`;
            terminalBody.insertBefore(line, input.parentElement);
            input.textContent = '';
            history.push(cmd);
            index = history.length;
            return;
        }

        if(cmd === 'help') {
            const line = document.createElement('p');
            line.innerHTML = `<span style="color: white;">Available commands: ls, cd, echo, clear, help</span>`;
            terminalBody.insertBefore(line, input.parentElement);
            input.textContent = '';
            history.push(cmd);
            index = history.length;
            return;
        }

        if (cmd === 'clear') {
            const lines = terminalBody.querySelectorAll('p');
            lines.forEach(line => {
                if (!line.contains(input)) line.remove();
            });
            input.textContent = '';
            return;
        }

        if (cmd.startsWith('cd ')) {
            const targetDir = cmd.slice(3).trim();
            if (targetDir === '..') {
                dir = '/';
            }
            else if (PersonalProjects.includes(targetDir)) {
                dir = `/Projects/${targetDir}`;
            } else {
                const line = document.createElement('p');
                line.innerHTML = `<span style="color: red;">cd: no such file or directory: ${targetDir}</span>`;
                terminalBody.insertBefore(line, input.parentElement);
                input.textContent = '';
                history.push(cmd);
                index = history.length;
                return;
            }
            input.textContent = '';
            history.push(cmd);
            index = history.length;
            return;
        }

        if (cmd !== '') {
            history.push(cmd);
            index = history.length;
        }

        input.textContent = '';
        return;
    }

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (index > 0) index--;
        input.textContent = history[index] || '';
        placeCursorAtEnd(input);
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (index < history.length) index++;
        input.textContent = history[index] || '';
        placeCursorAtEnd(input);
    }
});


function placeCursorAtEnd(el) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}

terminal.addEventListener('click', () => {
  input.focus();
  placeCursorAtEnd(input);
});


setInterval(updateClock, 1000);
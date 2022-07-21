function checkboxFunctions(e) {
    updateToLS(this);
    doneChecked(this);
    sectionDone(this);
}

function updateFromLS() {
    for (let name in cbstate) {
        const cb = document.querySelector('input[name="' + name + '"]');
        if (cb) cb.checked = true;
        if (cb.className === "done") {
            document.querySelector(`tr.${cb.id}`).style.opacity = opacity;
        }
    }
}

function updateToLS(e) {
    if (e.checked) {
        cbstate[e.name] = true;
    }
    else if (cbstate[e.name]) {
        delete cbstate[e.name];
    }
    localStorage.CBState = JSON.stringify(cbstate);
}

function doneChecked(e) {
    if (e.className !== 'done') return;
    const cbs = document.querySelectorAll(`input[type="checkbox"].${e.id}`);
    if (e.checked === true) {
        cbs.forEach(cb => {
            cb.checked = true;
            updateToLS(cb);
        });
        document.querySelector(`tr.${e.id}`).style.opacity = opacity;
    } else {
        cbs.forEach(cb => {
            cb.checked = false;
            updateToLS(cb);
        });
        document.querySelector(`tr.${e.id}`).style.opacity = "";
    }
}

function sectionDone(e) {
    const cName = e.className;
    if (!cName.includes("hw")) return;
    const allTasks = Array.from(document.querySelectorAll(`input[type="checkbox"].${cName}`));
    const done = document.querySelector(`#${cName}`);
    if (allTasks.every(cb => cb.checked === true)) {
        done.checked = true;
        updateToLS(done);
        document.querySelector(`tr.${cName}`).style.opacity = opacity;
    } else if (allTasks.some(cb => cb.checked === false)) {
        done.checked = false;
        updateToLS(done);
        document.querySelector(`tr.${cName}`).style.opacity = "";
    }
}
function toggleAbout() {
    const about = document.querySelector('#about');
    const showHide = document.querySelector('#about-link span');
    showHide.innerText = (showHide.innerText === "Show" ? "Hide" : "Show");
    about.style.display = (about.style.display === "" ? "block" : "");
    console.log(about.style.display)

}

let cbstate = JSON.parse(localStorage['CBState'] || '{}');
const opacity = "0.5";
document.querySelector("#about-link").addEventListener('click', toggleAbout);

updateFromLS();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (checkbox of checkboxes) {
    checkbox.addEventListener('click', checkboxFunctions);
}


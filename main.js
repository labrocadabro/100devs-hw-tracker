function checkboxFunctions(e) {
    updateToLS(this);
    doneChecked(this);
    sectionDone(this);
}

function updateFromLS() {
	for (let name in cbstate) {
			const cb = document.querySelector('input[name="' + name + '"]');
			if (cb) {
				cb.checked = true;
				if (cb.className === "done") {
						document.querySelector(`tr.${cb.id}`).style.opacity = opacity;
				}
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
    showHide.innerText = (showHide.value === "Show" ? "Hide" : "Show");
    about.style.display = (about.style.display === "" ? "block" : "");
    console.log(about.style.display)

}

function getExportData() {
	const data = JSON.stringify(localStorage);
	exportData.innerText = data;
	modal.style.display = "block";
}

function copyData() {
	exportData.select();
	exportData.setSelectionRange(0, 99999); // For mobile devices
	navigator.clipboard.writeText(exportData.value);
	const confirm = document.getElementById('confirmCopy');
	confirm.innerText = "Copied!";
	setTimeout(() => confirm.innerText = "", 1000);
	
}

let cbstate = JSON.parse(localStorage['CBState'] || '{}');
const opacity = "0.5";
const modal = document.getElementById("exportModal");
const closeModal = document.getElementById("closeModal");
const exportData = document.getElementById('exportData');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxFunctions));

document.querySelector("#about-link").addEventListener('click', toggleAbout);
document.getElementById('export').addEventListener('click', getExportData);
document.getElementById("copyData").addEventListener('click', copyData);

closeModal.addEventListener('click', () => modal.style.display = "none");
window.addEventListener('click', (e) => {
	if (e.target == modal) modal.style.display = "none";
});

updateFromLS();





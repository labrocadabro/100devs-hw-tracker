function updateFromLS() {
    for (let name in cbstate) {
        const cb = document.querySelector('input[name="' + name + '"]');
        if (cb) cb.checked = true;
    }
}

function updateToLS() {
    if (this.checked) {
        cbstate[this.name] = true;
    }
    else if (cbstate[this.name]) {
        delete cbstate[this.name];
    }
    localStorage.CBState = JSON.stringify(cbstate);
}

let cbstate = JSON.parse(localStorage['CBState'] || '{}');

window.addEventListener('load', updateFromLS);

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (checkbox of checkboxes) {
    checkbox.addEventListener('click', updateToLS);
}
function newElement() {
    const li = document.createElement('li');
    const fieldValue = document.querySelector('.todo-field').value;
    const t = document.createTextNode(fieldValue);

    li.appendChild(t);

    if (fieldValue === '')
        alert('You must write something!');
    else if (fieldValue.length > 20)
        alert('Max field length 20 characters!');
    else
        document.querySelector('.ul-list').appendChild(li);

    document.querySelector('.todo-field').value = '';

    const span = document.createElement('span');
    const text = document.createTextNode('\u00D7');

    span.className = 'close-btn';
    span.appendChild(text);
    li.appendChild(span);

    for (let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

const nodeList = document.getElementsByTagName('li');

for (let i = 0; i < nodeList.length; i++) {
    const span = document.createElement('span');
    const text = document.createTextNode('\u00D7');

    span.className = 'close-btn';
    span.appendChild(text);
    nodeList[i].appendChild(span);
}

const closeBtn = document.getElementsByClassName('close-btn');

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
    if (event.target.tagName = 'li')
        event.target.classList.toggle('checked');
}, false);
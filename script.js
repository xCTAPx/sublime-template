document.onclick = (e) => {
    let target = e.target;
    if(!target.classList.contains("read-more")) return;

    let current = target.parentElement;

    let content = [];
    let children = current.children;

    for(let i = 0; i < children.length; i++) {
        if(children[i].classList.contains("skill__text")) content.push(children[i]);
    }
    for(let i = 0; i < content.length; i++) {
        if(content[i].classList.contains("show")) {
            content[i].classList.remove("show");
        } else {
            content[i].classList.add("show");
        }
    }
}
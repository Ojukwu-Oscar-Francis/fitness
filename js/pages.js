function navbar() {
    let nav = document.createElement('nav')
    nav.setAttribute('class', 'navbar navbar-expand-md navbar-dark bg-dark')
    nav.setAttribute('id', 'navbar')

    let logo = document.createElement('a')
    logo.setAttribute('class', 'navbar-brand')
    logo.setAttribute('href', 'index.html')

    let span1 = document.createElement('a')
    span1.setAttribute('class', 'first')
    span1.innerHTML = 'OUR WEBSITE'

    logo.appendChild(span)

    let btn = document.createElement('button')
    btn.setAttribute('class', 'navbar-toggler')
    btn.setAttribute('data-bs-toggle', 'collapse')
    btn.setAttribute('data-bs-target', '#mynavbar')

    let span = document.createElement('span')
    span.setAttribute('class', 'navbar-toggle-icon')

    btn.appendChild(span)

    let collapse = document.createElement('div')
    collapse.setAttribute('class', 'collapse navbar-collapse justify-content-center')
    collapse.setAttribute('id', '#mynavbar')

    let ul = document.createElement('ul')
    ul.setAttribute('class','navbar-nav')

    let list = ['Home','About', 'Services', 'Portfolio','Login']
    let links =['index.html', 'about.html', 'service.html', 'portfolio.html', 'login.htkml']

    for(let i = 0; i < list.length; i++){
        let li = document.createElement('li')
        li.setAttribute('class', 'nav-item')

        let a = document.createElement('a')
        a.setAttribute('class','nav-link')
        a.setAttribute('href', links{i})
        a.innerHTML = list{i}

        li.appendChild(a)
        Ui.appendChild(li)

    }

    collapse.appendChild(ui)
    nav.appendChild(logo)
    nav.appendChild(btn)
    nav.appendChild(collapse)

    document.body.appendChild(nav)
}
navbar()
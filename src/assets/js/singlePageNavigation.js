(function () {
    function markAsSelected(hash) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selecionado'))

        const link = document.querySelector(`[wm-link='${hash}']`)
        link.classList.add('selecionado')
    }

    function navigateByAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                markAsSelected(hash)
            })
    }

    function configureLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function initialNavigation() {
        if (location.hash) {
            navigateByAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[wm-link]')
            navigateByAjax(firstLink.hash)
        }
    }

    window.onhashchange = e => navigateByAjax(location.hash)

    configureLinks()
    initialNavigation()
})()
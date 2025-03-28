function establecerVersion(idSelector, version){
    let elemento = documento.getElementById(idSelector);
    if (elemento){
        elemento.innerText = version;
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const componentes = ['Node', 'Chromium', 'Electron']

    for (const componente of componentes){
        establecerVersion(`version${componente}`, process.versions[componente]);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const danças = [
        {
            classe: 'samba',
            titulo: 'Samba de Gafieira',
            imagem: 'Samba.jpeg',
            alt: 'Casal dançando Samba de Gafieira',
            Pagina: 'Samba.html'
        },
        {
            classe: 'tango',
            titulo: 'Tango',
            imagem: 'Tango.jpg',
            alt: 'Casal dançando Tango',
            Pagina: 'Tango.html'
        },
        {
            classe: 'salsa',
            titulo: 'Salsa',
            imagem: 'Salsa.jpeg',
            alt: 'Casal dançando Salsa',
            Pagina: 'Salsa.html'
        },
        {
            classe: 'zouk',
            titulo: 'Zouk',
            imagem: 'Zouk.jpeg',
            alt: 'Casal dançando Zouk',
            Pagina: 'Zouk.html'
        },
        {
            classe: 'ballet',
            titulo: 'Ballet',
            imagem: 'Ballet.jpg',
            alt: 'Dançarina de Ballet',
            Pagina: 'Ballet.html'
        },
        {
            classe: 'valsa',
            titulo: 'Valsa',
            imagem: 'Valsa.jpg',
            alt: 'Casal dançando Valsa',
            Pagina: 'Valsa.html'
        }
    ];
    const container = document.querySelector('.DancasDisp');
    danças.forEach(dança => {
        const htmlDaDança = `
            <div class="${dança.classe}-dance">
                <h3>${dança.titulo}</h3>
                <a href="${dança.Pagina}" class="circular-image">
                    <img src="imagens/${dança.imagem}" alt="${dança.alt}" />
                </a>
            </div>
        `;
        container.innerHTML += htmlDaDança;
    });
});
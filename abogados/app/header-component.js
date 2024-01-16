class Header extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.socialMediaLinks = [];
  }

  static get observedAttributes() {
    return ['social-media-links'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'social-media-links' && oldValue !== newValue) {
      this.socialMediaLinks = JSON.parse(newValue);
      this.render();
    }
  }

  connectedCallback() {
    this.loadData(); // Llama a la función para cargar los datos
  }

  loadData() {
    // Simula la carga de datos, puedes modificar esta función según tus necesidades
    // Por ejemplo, puedes realizar una solicitud AJAX para obtener los datos del servidor.
    this.socialMediaLinks = [
      { url: '#', title: 'facebook', imgSrc: './public/assets/images/facebook.png' },
      { url: '#', title: 'twitter', imgSrc: './public/assets/images/twitter.png' },
      { url: '#', title: 'instagram', imgSrc: './public/assets/images/instagram.png' },
      { url: '#', title: 'linkedin', imgSrc: './public/assets/images/linkedin.png' },

    ];

    this.webLogo = [
      {url: '#', title: 'web logo', imgSrc: './public/assets/images/sftl-abogados-especializados-industria-musical-logo.png'}
    ];

    this.render();
  }

  render() {
    this.shadow.innerHTML = /*html*/ `
      <style>
        /* Agrega tus estilos aquí */
        :host{
          width:100%;
        }

        a{
          text-decoration: none;
        }

        .container{
          align-items:center;
          display:flex;
          justify-content:space-between;
        }

        .logo{
          width:50%;
        }


      </style>
      <div class="container">
        <div class="logo">
          ${this.renderWebLogo()}
        </div>
        <div class="user-features">
          <div class="socialmedia-links">
            ${this.renderSocialMediaLinks()}
          </div>
          <div class="search-button"></div>
          <div class="menu_button"></div>
        </div>
      </div>
    `;
  }

  renderWebLogo(){
    return this.webLogo
      .map(
        (link) =>
          `<a href="${link.url}" class="link">
            <img src="${link.imgSrc}" alt="${link.title}">
          </a>`
      )
      .join('');
  }

  renderSocialMediaLinks() {
    return this.socialMediaLinks
      .map(
        (link) =>
          `<a href="${link.url}" class="link">
            <img src="${link.imgSrc}" alt="${link.title}">
          </a>`
      )
      .join('');
  }
}

customElements.define('header-component', Header);

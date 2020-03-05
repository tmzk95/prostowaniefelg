function goHome() {
  getContentBody().innerHTML = homeBody;

  removeAllIsActive();
  document.getElementById("home-link").classList.add("is-active");
}

function goContact() {
  getContentBody().innerHTML = contactBody;

  removeAllIsActive();
  document.getElementById("contact-link").classList.add("is-active");
}

function goPriceList() {
  getContentBody().innerHTML = priceListBody;

  removeAllIsActive();
  document.getElementById("pricelist-link").classList.add("is-active");
}

function getContentBody() {
  return document.getElementById("content-body");
}

function removeAllIsActive() {
  document.getElementById("home-link").classList.remove("is-active");
  document.getElementById("contact-link").classList.remove("is-active");
  document.getElementById("pricelist-link").classList.remove("is-active");
}

let homeBody =
  `<div class="container has-text-centered">
    <p class="title">
      Prostowanie Felg
    </p>
    <p class="subtitle">
      Zakład naprawy felg i wulkanizacji
    </p>
  </div>`;

let contactBody =
  `<div class="container is-fullhd has-text-centered">
    <p class="title">
      Kontakt
    </p>
    <div class="section">
      <div>
        <span class="icon has-text-white">
          <i class="fas fa-phone"></i>
        </span> 511 566 333
      </div>
      <div>
        <span class="icon has-text-white">
          <i class="fas fa-home"></i>
        </span> Lublin, ul. Hajdowska 8
      </div>
    </div>
  </div>`;

let priceListBody =
`<div class="container">
  <p class="title">
    Cennik
  </p>
  <table class="table">
    <thead>
      <tr>
        <th>
          Rodzaj usługi
        </th>
        <th>
          Cena
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          Prostowanie felg aluminiowych
        </td>
        <td>
          50 - 70 zł
        </td>
      </tr>
      <tr>
        <td>
          Prostowanie felg żelaznych
        </td>
        <td>
          70 - 90 zł
        </td>
      </tr>
      <tr>
        <td>
          Wymiana opony
        </td>
        <td>
          20 zł
        </td>
      </tr>
      <tr>
        <td>
          Wymiana czterech opon
        </td>
        <td>
          40 zł
        </td>
      </tr>
    </tbody>
  </table>
</div>`;

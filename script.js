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
    <div style="overflow:hidden;width: 100%;position: relative;"><iframe width="100%" height="400" src="https://maps.google.com/maps?hl=en&amp;q=Hajdowska 8+(Adres)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 100%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 0px;background: #fff;"> <a href="https://myfreemp3.in/">myfreemp3</a> </small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div>
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
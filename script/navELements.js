/*
  Below makeNavHeader function is making header for the entire App
*/
const makeNavHeader = () => {
  let navHeaderElement = document.querySelector('.header-container');
  navHeaderElement.innerHTML = `
    <div class="header-container">
        <header class="sticky">
          <img
            class="img-logo"
            src="./../../assets/image section/logo.png"
            alt="apna-shop-logo"
            href="./../../index.html"
          />
          <a href="./../../index.html" class="logo head-2">Memorable-UI </a>
          <div class="toggle" onclick="toggleMenu();"></div>
          <ul class="menu hide">
            <li>
              <a class="text-1"
                href="./../Avatar/avatar.html"
                >Avatar</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Alert/Alert.html"
                >Alert</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Badge/bagde.html"
                >Badge</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Button/button.html"
                >Button</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Card/card.html"
                >Card</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Image/image.html"
                >Image</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Input/input.html"
                >Input</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Modal/modal.html"
                >Modal</a
              >
            </li>
            <li>
              < class="text-1" href="#">Navigation</>
            </li>
            <li>
              < class="text-1" href="#">Rating</>
            </li>
            <li>
              <a class="text-1"
                href="./../Simplified Grid/simplified-grid.html"
                >Simplified Grid</a
              >
            </li>
            <li>
              <a class="text-1"
                href="./../Typography/typography.html"
                >Typography</a
              >
            </li>
          </ul>
          <ul class="menu left_auto">
            <li><a href="./../getting-start/gettingStart.html" class="text-3" >Documentation</a></li>
            <div class="btn-round">
              <button class="btn-primary xl-bdr-radius pad-xs">
                <a href="https://www.github.com/">
                  <span
                    class="iconify"
                    data-icon="akar-icons:github-fill"
                  ></span>
                </a>
              </button>
            </div>
          </ul>
        </header>
      </div>
    `;
}
makeNavHeader();
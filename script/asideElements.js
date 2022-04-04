/*
  Below makeAsideSection function is making aside section for the entire App
*/
const makeAsideSection = () => {
  let asiderElement = document.querySelector('.aside');
  asiderElement.innerHTML = `
        <div class="side-list">
          <ul class="text-3">
            <h2 class="text-3 mar-lg imp-highlight-text">Getting Started</h2>
            <li class="pad-xs aside-list list-type-none">
              <span class="iconify" data-icon="carbon:user-avatar"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Avatar/avatar.html"
                >Avatar</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span
                class="iconify"
                data-icon="eva:alert-triangle-outline"
              ></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Alert/Alert.html"
                >Alert</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="fluent:badge-20-filled"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Badge/bagde.html"
                >Badge</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="dashicons:button"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Button/button.html"
                >Button</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="charm:cards"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Card/card.html"
                >Card</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="bi:file-earmark-image"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Image/image.html"
                >Image</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="whh:html"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Input/input.html"
                >Input</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="vaadin:modal-list"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Modal/modal.html"
                >Modal</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span
                class="iconify"
                data-icon="fluent:navigation-16-regular"
              ></span>
              <a class="btn-primary-outline-non deco-none"  href="./../../components/navigation-sidebar/navigation-sidebar/.html"
                >Navigation</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="ic:twotone-star-rate"></span>
              <a class="btn-primary-outline-non deco-none" href="#">Rating</a>
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="bi:grid-1x2"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Simplified Grid/simplified-grid.html"
                >Simplified Grid</a
              >
            </li>
            <li class="pad-xs list-type-none">
            <span class="iconify" data-icon="octicon:typography-24"></span>
            <a
              class="iconify" data-icon="fluent:tabs-24-filled"
              href="./../../components/Tab/tab.html"
              >Tab</a
            >
          </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="octicon:typography-24"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Toastr/toastr.html"
                >Toastr</a
              >
            </li>
            <li class="pad-xs list-type-none">
              <span class="iconify" data-icon="octicon:typography-24"></span>
              <a
                class="btn-primary-outline-non deco-none"
                href="./../../components/Typography/typography.html"
                >Typography</a
              >
            </li>
          </ul>
        </div>
    `;
}
makeAsideSection();

document.addEventListener("DOMContentLoaded", () => {
  const MENU_CLOSED_CLASSES = [
    "-translate-y-full",
    "opacity-0",
    "pointer-events-none",
  ];
  const MENU_OPEN_CLASSES = [
    "translate-y-0",
    "opacity-100",
    "pointer-events-auto",
  ];

  const menuToggleButton = document.querySelector(
    '[data-purpose="mobile-menu-toggle"]',
  );
  const mobileSubmenu = document.getElementById("mobile-submenu");
  const siteHeader = document.querySelector('[data-purpose="site-header"]');

  if (menuToggleButton && mobileSubmenu) {
    const syncSubmenuTop = () => {
      if (!(siteHeader instanceof HTMLElement)) {
        return;
      }
      mobileSubmenu.style.top = `${siteHeader.offsetHeight}px`;
    };

    syncSubmenuTop();
    window.addEventListener("resize", syncSubmenuTop);

    const setMenuState = (isOpen) => {
      if (isOpen) {
        mobileSubmenu.classList.remove(...MENU_CLOSED_CLASSES);
        mobileSubmenu.classList.add(...MENU_OPEN_CLASSES);
      } else {
        mobileSubmenu.classList.remove(...MENU_OPEN_CLASSES);
        mobileSubmenu.classList.add(...MENU_CLOSED_CLASSES);
      }
      menuToggleButton.setAttribute("aria-expanded", String(isOpen));
    };

    const openSubmenu = () => {
      setMenuState(true);
    };

    const closeSubmenu = () => {
      setMenuState(false);
    };

    const isSubmenuClosed = () =>
      mobileSubmenu.classList.contains("-translate-y-full");

    menuToggleButton.addEventListener("click", () => {
      if (isSubmenuClosed()) openSubmenu();
      else closeSubmenu();
    });

    const submenuLinks = mobileSubmenu.querySelectorAll("a[href^='#']");
    submenuLinks.forEach((link) => {
      link.addEventListener("click", closeSubmenu);
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const clickedInsideMenu = mobileSubmenu.contains(target);
      const clickedToggle = menuToggleButton.contains(target);
      if (!clickedInsideMenu && !clickedToggle) {
        closeSubmenu();
      }
    });
  }

  const toggleButtons = document.querySelectorAll(
    ".detail-toggle-btn[data-toggle-target]",
  );

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-toggle-target");
      if (!targetId) {
        return;
      }

      const detailSection = document.getElementById(targetId);
      if (!detailSection) {
        return;
      }

      const isHidden = detailSection.classList.contains("hidden");
      detailSection.classList.toggle("hidden", !isHidden);
      button.setAttribute("aria-expanded", String(isHidden));
    });
  });
});

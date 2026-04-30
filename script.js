const MENU_CLOSED_CLASSES = ["-translate-y-full", "opacity-0"];
const MENU_OPEN_CLASSES = ["translate-y-0", "opacity-100"];
const MENU_INTERACTIVE_CLASS = "pointer-events-auto";
const MENU_NON_INTERACTIVE_CLASS = "pointer-events-none";
const MENU_OPEN_TRANSITION_MS = 320;
const MENU_CLOSE_TRANSITION_MS = 320;
const DETAIL_SLIDE_MS = 280;

document.addEventListener("DOMContentLoaded", () => {
  initializePageReveal();
  initializeMobileMenu();
  initializeDetailToggles();
});

function initializePageReveal() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const revealTargets = document.querySelectorAll(
    'header[data-purpose="site-header"], section',
  );

  if (prefersReducedMotion) {
    revealTargets.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.add("page-reveal-visible");
      }
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.add("page-reveal-visible");
      }
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!(entry.target instanceof HTMLElement)) {
          return;
        }

        if (entry.isIntersecting) {
          entry.target.classList.add("page-reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealTargets.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return;
    }

    element.classList.add("page-reveal");
    observer.observe(element);
  });
}

function initializeMobileMenu() {
  const menuToggleButton = document.querySelector(
    '[data-purpose="mobile-menu-toggle"]',
  );
  const mobileSubmenu = document.getElementById("mobile-submenu");
  const siteHeader = document.querySelector('[data-purpose="site-header"]');

  if (
    !(menuToggleButton instanceof HTMLButtonElement) ||
    !(mobileSubmenu instanceof HTMLElement)
  ) {
    return;
  }

  const syncSubmenuTop = () => {
    if (siteHeader instanceof HTMLElement) {
      mobileSubmenu.style.top = `${siteHeader.offsetHeight}px`;
    }
  };

  const setMenuState = (isOpen, options = {}) => {
    const { immediate = false } = options;
    const transitionMs = isOpen
      ? MENU_OPEN_TRANSITION_MS
      : MENU_CLOSE_TRANSITION_MS;

    if (setMenuState.pendingCloseTimer) {
      window.clearTimeout(setMenuState.pendingCloseTimer);
      setMenuState.pendingCloseTimer = null;
    }

    mobileSubmenu.classList.toggle(MENU_CLOSED_CLASSES[0], !isOpen);
    mobileSubmenu.classList.toggle(MENU_CLOSED_CLASSES[1], !isOpen);
    mobileSubmenu.classList.toggle(MENU_OPEN_CLASSES[0], isOpen);
    mobileSubmenu.classList.toggle(MENU_OPEN_CLASSES[1], isOpen);

    if (isOpen) {
      mobileSubmenu.dataset.menuState = "open";
      mobileSubmenu.classList.add(MENU_INTERACTIVE_CLASS);
      mobileSubmenu.classList.remove(MENU_NON_INTERACTIVE_CLASS);
    } else {
      mobileSubmenu.classList.remove(MENU_INTERACTIVE_CLASS);
      if (immediate) {
        mobileSubmenu.dataset.menuState = "closed";
        mobileSubmenu.classList.add(MENU_NON_INTERACTIVE_CLASS);
      } else {
        mobileSubmenu.dataset.menuState = "closing";
        setMenuState.pendingCloseTimer = window.setTimeout(() => {
          mobileSubmenu.dataset.menuState = "closed";
          mobileSubmenu.classList.add(MENU_NON_INTERACTIVE_CLASS);
          setMenuState.pendingCloseTimer = null;
        }, transitionMs);
      }
    }

    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
  };

  const isSubmenuOpen = () =>
    mobileSubmenu.classList.contains(MENU_OPEN_CLASSES[0]);
  const toggleMenu = () => setMenuState(!isSubmenuOpen());
  const closeMenu = () => setMenuState(false);

  syncSubmenuTop();
  setMenuState(false, { immediate: true });

  window.addEventListener("resize", syncSubmenuTop);
  menuToggleButton.addEventListener("click", toggleMenu);

  mobileSubmenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const clickedInsideMenu = mobileSubmenu.contains(target);
    const clickedToggle = menuToggleButton.contains(target);
    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function initializeDetailToggles() {
  const toggleButtons = document.querySelectorAll(
    ".detail-toggle-btn[data-toggle-target]",
  );

  toggleButtons.forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const targetId = button.getAttribute("data-toggle-target");
    if (!targetId) {
      return;
    }

    const detailSection = document.getElementById(targetId);
    if (!(detailSection instanceof HTMLElement)) {
      return;
    }

    detailSection.classList.add("detail-slide");
    if (!detailSection.classList.contains("hidden")) {
      detailSection.classList.add("detail-slide-visible");
    }

    button.setAttribute("aria-controls", targetId);
    button.setAttribute(
      "aria-expanded",
      String(!detailSection.classList.contains("hidden")),
    );

    button.addEventListener("click", () => {
      if (detailSection.dataset.animating === "true") {
        return;
      }

      const isOpen = !detailSection.classList.contains("hidden");

      if (isOpen) {
        detailSection.dataset.animating = "true";
        detailSection.classList.remove("detail-slide-visible");
        button.setAttribute("aria-expanded", "false");

        window.setTimeout(() => {
          detailSection.classList.add("hidden");
          detailSection.dataset.animating = "false";
        }, DETAIL_SLIDE_MS);
        return;
      }

      detailSection.classList.remove("hidden");
      window.requestAnimationFrame(() => {
        detailSection.classList.add("detail-slide-visible");
      });
      button.setAttribute("aria-expanded", "true");
    });
  });
}

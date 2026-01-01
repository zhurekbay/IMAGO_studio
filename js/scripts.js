document.addEventListener('DOMContentLoaded', function () {
    
    // --- BURGER MENU ---
    const burger = document.querySelector('.burger');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (burger && menuOverlay) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });

        // Закрыть меню при клике на ссылку
        menuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                menuOverlay.classList.remove('active');
            });
        });
    }

    // --- TABS NAVIGATION ---
    const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
    const sections = Array.from(document.querySelectorAll('.section'));

    function switchTab(tabId) {
        // Скрыть все секции, показать нужную
        sections.forEach(s => {
            if (s.id === tabId) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });

        // Обновить кнопки
        navBtns.forEach(btn => {
            const isTarget = btn.dataset.tab === tabId;
            btn.classList.toggle('active', isTarget);
        });

        // Плавный скролл к началу контента (опционально)
        /*
        const targetSection = document.getElementById(tabId);
        if (targetSection) {
            window.scrollTo({ top: targetSection.offsetTop - 100, behavior: 'smooth' });
        }
        */
    }

    navBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            switchTab(this.dataset.tab);
        });
    });

    // --- ACCORDION FOR SERVICES ---
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Если кликнули на ссылку внутри карточки, не сворачиваем
            if (e.target.tagName.toLowerCase() === 'a') return;

            // Переключаем класс open
            this.classList.toggle('open');
        });
    });

    // Закрывать карточки при клике снаружи (по желанию)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.service-card')) {
            cards.forEach(c => c.classList.remove('open'));
        }
    });

});
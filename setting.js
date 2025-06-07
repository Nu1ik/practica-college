 const translations = {
                ru: {
                    setting: "Настройки",
                    langbut: "Язык",
                    button: "Русский",
                    designtheme: "Тема оформления",
                    citybut: "Город",
                    aboutproblem: "Сообщить о проблеме"
                },
                kz: {
                    setting: "Орнатулар",
                    langbut: "Тіл",
                    button: "Казакша",
                    designtheme: "Безендіру тақырыбы",
                    citybut: "Қала",
                    aboutproblem: "Мәселе туралы хабарлау"
                }
};

        let currentLang = 'ru';

        function toggleMenu() {
    const menu = document.getElementById('language-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

        function setLanguage(lang) {
            currentLang = lang;
            
            localStorage.setItem('language', lang);

            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = translations[lang][key] || key;
            });
            document.getElementById('language-button').textContent = translations[lang].button;


            const menu = document.getElementById('language-menu');
            menu.innerHTML = '';
            const otherLang = lang === 'ru' ? 'kz' : 'ru';
            const btn = document.createElement('button');
            btn.textContent = translations[otherLang].button.replace(' ', '');
            btn.onclick = () => setLanguage(otherLang);
            menu.appendChild(btn);

            menu.style.display = 'none';
        }

    
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('language-menu');
            const button = document.getElementById('language-button');
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = 'none';
            }
        });
        
        document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ru';
    setLanguage(savedLang);
})



const styleToggle = document.querySelector('.dark-mode_button');
const toggleIcon = document.getElementById('toggle-icon');
const sunMoonIcon = document.getElementById('sun-moon-icon');
const mapIcon = document.getElementById('map-Icon')
const settingIcon = document.getElementById('setting-Icon')

const enableDarkStyle = () => {
  document.body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
  toggleIcon.src = 'img-setting/Group 4.png';
  sunMoonIcon.src = 'img-setting/moon 1.png';     
  mapIcon.src = 'img-setting/material-symbols-light_map-outline-rounded.png';
  settingIcon.src = 'img-setting/weui_setting-filled.png';
};

const disableDarkStyle = () => {
  document.body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', 'light');
  toggleIcon.src = 'img-setting/Group 3.png';    
  sunMoonIcon.src = 'img-setting/sun 1.png';     
  mapIcon.src = 'img/material-symbols-light_map-outline-rounded.png';
  settingIcon.src = 'img/icons8-settings-50.png';
};

if (localStorage.getItem('styleMode') === 'dark') {
  enableDarkStyle();
}

styleToggle.addEventListener('click', () => {
  if (document.body.classList.contains('darkstyle')) {
    disableDarkStyle();
  } else {
    enableDarkStyle();
  }
});

if (localStorage.getItem('styleMode') === 'dark') {
  document.body.classList.add('darkstyle');
}

if (localStorage.getItem('styleMode') === 'dark') {
  document.body.classList.add('darkstyle');
}


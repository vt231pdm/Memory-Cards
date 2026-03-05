# Memory Game (React + Zustand)

---

## Основні можливості

- **Динамічна складність**  
  Кількість пар карток можна змінювати (налаштовується у глобальному Store).

- **Система рекордів**  
  Зберігає топ-10 найкращих результатів у Local Storage.

- **Адаптивний дизайн**  
  Коректно працює на мобільних пристроях і десктопах.

- **GDPR Compliance**  
  Блокуючий Cookie Popup. Доступ до гри надається лише після прийняття умов.

---

## Технологічний стек

**Frontend**

- React (Vite)
- CSS Modules

**State Management**

- Zustand
- Zustand Persist

**Routing**

- React Router DOM

**Інше**

- React Portal — модальне вікно результатів
- Local Storage — збереження налаштувань і рекордів

---

## Встановлення та запуск

### 1. Встановити залежності

- npm install

### 2. Запустити режим розробки

- npm run dev

### 3. Зібрати production-версію

- npm run build

---

## Документація

## 1. JSDoc (технічна документація)

Проєкт задокументовано за допомогою JSDoc:

- компоненти
- хуки
- Zustand store

Згенерувати документацію:
npm run docs

Переглянути документацію можна [тут](https://drive.google.com/file/d/1PvOGMS9cWXqk7t0b5KAAYn151mFI-SrT/view?usp=sharing)

## 2. Storybook (візуальна документація)

Описані компоненти:

- Card — базовий компонент
- ResultModal — комплексний компонент
  Кожен має кілька варіацій станів.

Запуск Storybook:
npm run storybook

[Storybook](https://drive.google.com/file/d/1sZNCR6nieaE6NkuHqnKnt_caq6G5xNFD/view?usp=sharing)

## 3. Ліцензія

[LICENSE](./LICENSE)

---

## GDPR та конфіденційність

Додаток використовує Local Storage для збереження:

- рівня складності
- таблиці рекордів (ім’я та кількість ходів)

Доступ до гри надається лише після прийняття умов у Cookie Popup.

[Політика конфіденційності](./PRIVACY_POLICY.txt)

---

## Автор

[Денис Простибоженко](https://github.com/vt231pdm)

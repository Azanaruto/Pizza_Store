# 🍕 Pizza Boom

> Современный интернет-магазин пиццы с полным циклом заказа — выбор блюда, кастомизация ингредиентов и оформление доставки.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.x-FF6B35?style=for-the-badge&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-7-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Realtime_DB-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

---

## ✨ Возможности

- 🛋️ **Автослайдер** — красивая карусель акций и новинок на базе Swiper
- 🆕 **Горячие новинки** — отдельная секция с новыми позициями меню
- 🍕 **Полное меню** — пицца, закуски, десерты и напитки на одной странице
- 🔗 **Навигация по категориям** — плавная прокрутка к нужной секции меню
- 🧀 **Кастомизация пиццы** — добавление ингредиентов с автоматическим пересчётом цены
- 🛒 **Модальное окно заказа** — выбор блюда, добавки и оформление одним потоком
- 📦 **Форма доставки** — адрес, подъезд, этаж, квартира, телефон
- 📬 **Форма обратной связи** — на странице «Контакты» с валидацией
- 🔥 **Firebase интеграция** — заказы и обращения сохраняются в Realtime Database
- 👥 **Страница «О нас»** — команда и история компании

---

## 📸 Страницы приложения

| Страница | Описание |
|---|---|
| `/` | Главная — слайдер, новинки, меню по категориям |
| `/about` | О нас — история, ценности, команда |
| `/contacts` | Контакты — форма обратной связи |

---

## 🛠️ Технологический стек

| Технология | Назначение |
|---|---|
| **React 19** | UI фреймворк |
| **TypeScript** | Типизация |
| **Zustand 5** | Глобальное состояние (корзина, модалки, заказы) |
| **React Router v7** | Клиентская маршрутизация |
| **Axios** | HTTP запросы к Firebase |
| **Material UI v7** | UI компоненты (модалки, кнопки, поля ввода) |
| **Swiper 12** | Слайдер с автопрокруткой |
| **SCSS + CSS Modules** | Стилизация компонентов |
| **Firebase Realtime DB** | Хранение заказов и обращений |
| **Vite 7** | Сборщик и dev-сервер |

---

## 🚀 Быстрый старт

### Требования

- Node.js `v18+`
- npm или yarn

### Установка

```bash
# 1. Клонировать репозиторий
git clone https://github.com/Azanaruto/Pizza_Store.git

# 2. Перейти в папку проекта
cd Pizza_Store

# 3. Установить зависимости
npm install

# 4. Запустить сервер разработки
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

### Сборка для продакшна

```bash
npm run build
```

---

## 📁 Структура проекта

```
src/
├── Zustand/
│   └── Pizza_Store.ts          # Глобальный стор (Zustand)
├── data/
│   └── data.ts                 # Статические данные (меню, ингредиенты, сотрудники)
├── assets/
│   ├── images/                 # Изображения (слайдер, иконки, логотип)
│   └── scss/                   # Глобальные стили, переменные, миксины
├── components/
│   ├── Header/                 # Шапка с навигацией
│   ├── Footer/                 # Подвал
│   ├── Slider/                 # Swiper слайдер
│   ├── Categories/             # Кнопки-якоря по категориям
│   ├── FeaturesSection/        # Секция преимуществ (доставка, свежесть, бесплатно)
│   ├── NewProducts/            # Горячие новинки
│   ├── PizzaAll/               # Все пиццы
│   ├── DrinksAll/              # Напитки
│   ├── SnacksAll/              # Закуски
│   ├── DecertAll/              # Десерты
│   ├── Carts/                  # Карточки товаров
│   ├── Modal/                  # Модалка выбора пиццы + ингредиенты
│   ├── FormModal/              # Модалка оформления заказа (адрес доставки)
│   ├── ContactForm/            # Форма обратной связи
│   ├── Employs/                # Карточки сотрудников
│   └── SectionTitle/           # Переиспользуемый заголовок секции
├── pages/
│   ├── Menu/                   # Главная страница (всё меню)
│   ├── About/                  # О компании
│   └── Contacts/               # Страница контактов
├── MainLayout/                 # Обёртка с Header и Footer
├── App.tsx                     # Маршруты
└── main.tsx                    # Точка входа
```

---

## 🗄️ Zustand — глобальный стор

Вся бизнес-логика вынесена в единый Zustand стор `Pizza_Store.ts`:

| Состояние / Действие | Описание |
|---|---|
| `modal` / `toggleModal` | Открытие/закрытие модального окна пиццы |
| `form` / `toggleForm` | Открытие/закрытие формы заказа |
| `selectElem` / `addSelectedid` | Выбранная пицца |
| `isSelectedIngident` / `onSelectedIngident` | Добавление/удаление ингредиентов (toggle) |
| `postForm` | POST заказа в Firebase |
| `contactPost` | POST обращения в Firebase |
| `sucsess` / `clearSuc` | Уведомление об успешной отправке |

---

## 🔥 Firebase

Данные отправляются в **Firebase Realtime Database**:

| Коллекция | Данные |
|---|---|
| `/orders` | Адрес, подъезд, этаж, квартира, телефон |
| `/contact` | Имя, фамилия, телефон, email, вопрос |

---

## 📦 Доступные скрипты

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск локального сервера разработки |
| `npm run build` | Сборка для продакшна |
| `npm run preview` | Предпросмотр продакшн сборки |
| `npm run lint` | Проверка ESLint |

---

## 🤝 Вклад в проект

Будем рады вашим улучшениям!

1. Сделайте Fork проекта
2. Создайте ветку: `git checkout -b feature/my-feature`
3. Закоммитьте изменения: `git commit -m 'Add my feature'`
4. Запушьте: `git push origin feature/my-feature`
5. Откройте Pull Request

---

## 📄 Лицензия

Проект распространяется под лицензией [MIT](LICENSE).

---

<p align="center">Сделано с ❤️ и 🍕 by <a href="https://github.com/Azanaruto">Azanaruto</a></p>

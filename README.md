# Disney app

![](./public/images/Disney-Logo.jpg)

## 1 уровень (необходимый минимум)

Реализованы Требования к функциональности, описанные в прикрепленном документе.

### React

---

- Пишем функциональные компоненты c хуками в приоритете над классовыми. ☑️ (из классовых только предохранитель)

- Есть четкое разделение компонентов на [умные](./src/containers/charactersPage/CharactersPage.jsx) - и [глупые](./src/components/character/chatacterCard/ChatacterCard.jsx) ☑️

- Есть рендеринг списков [страница с персонажами](./src/components/character/charactersList/CharactersList.jsx) ☑️

- Реализована хотя бы одна [форма](./src/components/forms/customForm/CustomForm.jsx) ☑️

- Есть применение Контекст API [Смена темы](./src/context/ThemeContext.jsx) ☑️

- Есть [применение](./src/components/character/characterInfo/CharacterInfo.jsx) [предохранителя](./src/components/errorBoundary/ErrorBoundary.jsx) ☑️

- Есть хотя бы один кастомный хук [useQueryParams](./src/hooks/useQueryParams.js) [useCheckIsLogged](./src/hooks/useCheckIsLogged.js) ☑️

- Хотя бы несколько компонентов используют PropTypes [CharactersList](./src/components/character/charactersList/CharactersList.jsx) [Form](./src/components/forms/customForm/CustomForm.jsx) ☑️

- Поиск не должен триггерить много запросов к серверу. [Поиск через кнопку и Enter](./src/containers/searchPage/SearchPage.jsx) ☑️

- Есть применение [lazy + Suspense](./src/containers/favoritePage/FavoritePage.jsx) ☑️

### Redux

---

- Используем Modern Redux with Redux Toolkit ☑️

- Используем [слайсы](./src/store/slice/user/userSlice.js) ☑️

- Есть хотя бы одна кастомная [мидлвара](./src/store/middleware/userControlMiddleware.js) ☑️

- Используется [RTK Query](./src/utils/disneyApi.js) ☑️

- Используется [Transforming Responses](./src/utils/disneyApi.js) ☑️

### 2 уровень (необязательный)

- Проведена оптимизация приложения. Для оптимизации использовал memo() [charactersList](./src/components/character/charactersList/CharactersList.jsx),
  useSelector - shallowEqual [HistoryPage](./src/containers/historyPage/HistoryPage.jsx)
  и мемоизированные селекторы (указан ниже). ☑️

- Используются мемоизированные селекторы [selectorFavorite](./src/store/slice/user/userSlice.js) ☑️

### Storybook

---

- Подключен storybook и созданы несколько сторисов [UiButton](./src/components/ui/uiButton/uiButton.stories.js) [UiSpinner](./src/components/ui/) ☑️

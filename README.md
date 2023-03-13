# Disney app

![](./public/images/Disney-Logo.jpg)

## 1 уровень (необходимый минимум)

Реализованы Требования к функциональности, описанные в прикрепленном документе.

### React

---

- Пишем функциональные компоненты c хуками в приоритете над классовыми. :heavy_check_mark: (из классовых только предохранитель)

- Есть четкое разделение компонентов на [умные](./src/containers/charactersPage/CharactersPage.jsx) - и [глупые](./src/components/character/chatacterCard/ChatacterCard.jsx) :heavy_check_mark:

- Есть рендеринг списков [страница с персонажами](./src/components/character/charactersList/CharactersList.jsx) :heavy_check_mark:

- Реализована хотя бы одна [форма](./src/components/forms/customForm/CustomForm.jsx) :heavy_check_mark:

- Есть применение Контекст API [Смена темы](./src/context/ThemeContext.jsx) :heavy_check_mark:

- Есть [применение](./src/components/character/characterInfo/CharacterInfo.jsx) [предохранителя](./src/components/errorBoundary/ErrorBoundary.jsx) :heavy_check_mark:

- Есть хотя бы один кастомный хук [useQueryParams](./src/hooks/useQueryParams.js) [useCheckIsLogged](./src/hooks/useCheckIsLogged.js) :heavy_check_mark:

- Хотя бы несколько компонентов используют PropTypes [CharactersList](./src/components/character/charactersList/CharactersList.jsx) [Form](./src/components/forms/customForm/CustomForm.jsx) :heavy_check_mark:

- Поиск не должен триггерить много запросов к серверу :heavy_check_mark:

- Есть применение [lazy + Suspense](./src/containers/favoritePage/FavoritePage.jsx) :heavy_check_mark:

### Redux

---

- Используем Modern Redux with Redux Toolkit :heavy_check_mark:

- Используем [слайсы](./src/store/slice/user/userSlice.js) :heavy_check_mark:

- Есть хотя бы одна кастомная [мидлвара](./src/store/middleware/userControlMiddleware.js) :heavy_check_mark:

- Используется [RTK Query](./src/utils/disneyApi.js) :heavy_check_mark:

- Используется [Transforming Responses](./src/utils/disneyApi.js) :heavy_check_mark:

### 2 уровень (необязательный)

- Проведена оптимизация приложения. Для оптимизации использовал memo() [charactersList](./src/components/character/charactersList/CharactersList.jsx),
  useSelector - shallowEqual [HistoryPage](./src/containers/historyPage/HistoryPage.jsx)
  и мемоизированные селекторы (указан ниже). :heavy_check_mark:

- Используются мемоизированные селекторы [selectorFavorite](./src/store/slice/user/userSlice.js) :heavy_check_mark:

### Storybook

---

- Подключен storybook и созданы несколько сторисов [UiButton](./src/components/ui/uiButton/uiButton.stories.js) [UiSpinner](./src/components/ui/) :heavy_check_mark:

[![Deploy to GithubPages](https://github.com/serjikko/ts-weather/actions/workflows/sanity-check.yml/badge.svg)](https://github.com/serjikko/ts-weather/actions/workflows/sanity-check.yml)
[![pages-build-deployment](https://github.com/serjikko/ts-weather/actions/workflows/pages/pages-build-deployment/badge.svg?branch=buil2)](https://github.com/serjikko/ts-weather/actions/workflows/pages/pages-build-deployment)


# Информационное приложение с прогнозом погоды и новостями

Используется API: newsdata.io, openweathermap.org. Требуется получить API_KEY для указанных сервисов.
Приложение показывает прогноз погоды на день, неделю. На странице "Новости" отображаются новости из категории "Погода, климат"

## Доступные скрипты

### `npm start`

Приложение запускается в режиме разработки.
Откройте http://localhost:3000, чтобы просмотреть его в браузере.

Страница перезагрузится, если вы внесете изменения.
Вы также увидите любые ошибки lint в консоли.

### `npm test`

Запускает тесты в режиме интерактивного просмотра.

### `npm run build`

Создает приложение для прода в директории build.
Скрипт связывает React в прод режиме и оптимизирует сборку. Сборка сокращена, имена файлов включают хэши.
Приложение готово к развертыванию!

### `npm run deploy`

Развертывание для GitHub



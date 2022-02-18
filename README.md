# Webpack Frontend Foundation

## Установка

1. `install` [NodeJS](https://nodejs.org/ru/)
2. `git clone`
3. `npm install`

## Использование
**Development**

`npm run start`

* Непрерывная сборка приложения (HMR включен)
* Приложение обслуживается по `http://localhost:1488`

`npm run start:dev`

* Тестовая сборка проекта без оптимизации
* Sourcemap: true
* Contenthash: false

**Production**

`npm run start:prod`

* Финальная сборка приложения с оптимизацией
* Sourcemap: false
* Contenthash: true

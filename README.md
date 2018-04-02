# flux-homework

Фреймворк Flux и его реализация.

## Запуск 

1. Посмотреть демо: https://2gnc.github.io/flux-homework/public/ 
2. Запустить в режиме разработки: 
  * склонировать репозиторий
  * установить зависимости
  * выполнить команду ```yarn run dev-server```

## Описание решения

Мини-фреймворк находится в папке src/LittleFlux. Фреймворк состоит из Диспатчера, Стора, Эмиттера и Вью (каждый реализован в виде класса), а также утилит: отправка на сервер и логгер. Логгер было решено сделать частью фреймворка.

Далее уже в приложении я унаследовала диспатчер, стор и вью, а также добавила экшены и типы экшенов.

Общяя схема работы такая: 
1. Инициирую диспатчер, стор, подписываю стор на события
2. app с помощью метода view устанавливает прослушку события нажатия кнопки, и: 
* срабатывает экшен, вызывает диспатчера
* диспатчер вызывает все колбэки в подписках стора
* стор вызывает скрипт "отправки на сервер", дожидается результата и запускает экшен "getData", кторый вызывает колбэк "getData",
* Каждый метод снабжен вызовом логгера, который отображает результат на экран.

### Впечатления
Постановка задачи "написать фреймворк" вывихнула мне мозг, но это был интересный опыт и, надеюсь, в будушем у меня будет лучше получаться писать универсальные решения.

Как мне показалось, архитектуру flux я поняла. Для данной конкретной задачи решение оказалось избыточным, но для сложных приложений - самое оно.

Сложнее всего было понять, как заставить все части взаимодейтствовать между собой, что должно стать "спусковым крючком" для всего процесса.

Надеюсь, мой код будет понятен и жду любой критики и комментариев. Спасибо.

### Что бы я улучшила

#### TODO

[x] Собирать модули в бандл
[x] Dev - сервер 
[] Настроить линтер
[x] Реализовать приложение на Flux
[] Реализовать приложение на MVP
[] Написать модульные тесты
[x] Выложить результат на github pages

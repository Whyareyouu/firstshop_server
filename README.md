## Описание учебного проекта: SPA с использованием Nest.js и PostgreSQL

Мой учебный проект представляет собой современное веб-приложение, разработанное на базе Nest.js и использующее PostgreSQL в качестве базы данных. Проект ориентирован на развитие моих навыков веб-разработки и практическое применение полученных знаний.


## Конфигурация .env переменных

Для запуска проекта и подключения к базе данных, вы должны использовать файл среды (`.env`), где хранятся конфигурационные переменные. Вот ключевые переменные, которые я использовал:

-   **PORT**: Переменная, определяющая порт, на котором будет работать ваше приложение. Например, `PORT=3000`.
    
-   **DB_USERNAME**: Переменная, содержащая имя пользователя для подключения к базе данных PostgreSQL. Например, `DB_USERNAME=myuser`.
    
-   **DB_NAME**: Переменная, определяющая имя базы данных PostgreSQL, с которой ваше приложение будет взаимодействовать. Например, `DB_NAME=mydatabase`.
    
-   **DB_PASSWORD**: Переменная, содержащая пароль для доступа к базе данных PostgreSQL. Например, `DB_PASSWORD=mypassword`.
    
-   **DB_HOST**: Переменная, указывающая хост базы данных PostgreSQL, к которому приложение должно подключаться. Например, `DB_HOST=localhost`.
    
-   **PRIVATE_KEY**: Переменная, содержащая приватный ключ, используемый для подписи и верификации JSON Web Token (JWT). Например, `PRIVATE_KEY=myprivatekey`.
    
-   **DB_PORT**: Переменная, определяющая порт, на котором работает база данных PostgreSQL. Например, `DB_PORT=5432`.

### Основная функциональность проекта:

-   **Авторизация и регистрация пользователей**: В рамках учебного проекта реализована функциональность авторизации и регистрации пользователей с использованием JSON Web Token (JWT). После регистрации пользователь получает уникальный токен, который используется для доступа к защищенным ресурсам.
    
-   **Управление ролями пользователей**: В проекте предусмотрена возможность изменения ролей пользователей, чтобы практиковаться в работе с различными уровнями доступа.
    
-   **Добавление и управление товарами**: Пользователи могут добавлять новые товары в систему, просматривать список товаров и вносить изменения в информацию о товарах.
    

### Технологический стек:

-   **Nest.js**: Выбор Nest.js для проекта обусловлен желанием познакомиться с этим мощным фреймворком для серверной разработки на Node.js и TypeScript.
    
-   **PostgreSQL**: Использование PostgreSQL поможет мне понять принципы работы реляционных баз данных и ORM.
    
-   **Sequelize**: Выбор Sequelize для работы с базой данных обусловлен стремлением научиться использовать ORM вместо прямых SQL-запросов.
    
-   **JSON Web Token (JWT)**: В проекте применяется JWT для реализации аутентификации пользователей. JWT позволяет генерировать уникальные токены для авторизации пользователей и обеспечивает безопасную передачу данных между клиентом и сервером.  

### Заключение:

Мой учебный проект предоставляет мне уникальную возможность развивать навыки веб-разработки и применять полученные знания на практике. Основная цель проекта - изучение и понимание работы различных технологий в контексте создания полноценного SPA с использованием Nest.js и PostgreSQL. Этот проект дает мне ценный опыт, который я готов применить в будущих реальных проектах и построении карьеры в сфере веб-разработки.

#### Ссылка на документацию(swagger): https://firstshopserver.up.railway.app/api/docs

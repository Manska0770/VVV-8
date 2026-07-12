# Telegram Mini App — Знакомства

Рабочая демо-версия Telegram Mini App для знакомств с 7 страницами и функционалом:

- Главная страница со свайп-карточками
- Профили и детальный просмотр анкеты
- Чат с обменом сообщениями
- Список избранных лайков
- Профиль пользователя с редактированием
- Настройки приложения
- О приложении

Запуск локально:

```bash
cd tma_app
python3 -m http.server 8001
# открыть в браузере http://localhost:8001/index.html
```

Структура:
- `index.html` — обзор и свайп-карточки
- `profiles.html` — список профилей
- `chat.html` — диалоги и окно сообщений
- `likes.html` — избранные анкеты
- `profile.html` — профиль пользователя
- `settings.html` — настройки
- `about.html` — информация о приложении
- `style.css` — общий стиль всех страниц
- `app.js` — логика всех страниц

Приложение полностью работает на чистом HTML/CSS/vanilla JS и готово для деплоя на Render.

Деплой на Render
----------------

1. Подключите репозиторий к Render и создайте Static Site.
2. В качестве директории публикации укажите `tma_app`.
3. В GitHub репозитории создайте секрет `RENDER_DEPLOY_HOOK_URL` (Settings → Secrets and variables → Actions).
4. При пуше в ветку `main` workflow `.github/workflows/deploy-to-render.yml` автоматически вызовет деплой на Render.

Также в репозитории есть файл `render.yaml`, который описывает статический сервис для Render.

Supabase migrations
-------------------

Чтобы база мигрировала вместе с кодом без привязки к GitHub, используйте встроенный скрипт миграций.

1. Создайте в Render (или локально) переменную окружения:

   - `DATABASE_URL` — строка подключения Postgres вашей Supabase базы.

2. Запустите миграции:

```bash
cd /workspaces/VVV-8
node scripts/apply-migrations.js
```

3. Скрипт автоматически создаёт таблицу `vvv_migrations` и применяет все новые файлы из `VVV-8/migrations/`.

4. Добавляйте новые миграции как файлы `VVV-8/migrations/0002_description.sql`, `0003_another.sql` и т.д. Скрипт не будет повторно применять уже записанные миграции.

5. Если хотите, можете подключить выполнение `node scripts/apply-migrations.js` к процессу деплоя, чтобы база всегда обновлялась вместе с кодом.

Supabase profile upload and Telegram login
----------------------------------------

- `VVV-8/vvv-config.js` должно содержать `SUPABASE_URL`, `SUPABASE_ANON_KEY` и `TELEGRAM_BOT_USERNAME`.
- При необходимости можно указать `TELEGRAM_AUTH_URL` в `vvv-config.js`, чтобы Telegram Login Widget использовал фиксированный допустимый URL.
- В настройках Telegram-бота нужно разрешить домен и путь страницы, который вы используете в `TELEGRAM_AUTH_URL` или который отображается в браузере при загрузке `profile.html`.
- `VVV-8/profile.html` использует Telegram Login Widget для локального сохранения данных пользователя.
- Сохранённый профиль при редактировании синхронизируется с Supabase из `VVV-8/index.html` и `VVV-8/app.js`.
- В таблице `profiles` сохраняются публичные анкеты и бот-метаданные: `telegram_id`, `telegram_username`, `telegram_name`.
- При использовании анонимного доступа `INSERT` разрешён всем, а `UPDATE`/`DELETE` разрешены тем же анонимным сессиям или владельцам, если row owner задан.

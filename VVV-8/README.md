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

Приложение полностью работает на чистом HTML/CSS/vanilla JS и готово к развёртыванию на любом хостинге.

Supabase integration
--------------------

This project supports optional Supabase integration to store user profiles in the `profiles` table. It is independent of Render and works from code.

1. Configure Supabase access using environment variables or by editing `VVV-8/vvv-config.js`:

   - `SUPABASE_URL` — your Supabase project URL
   - `SUPABASE_ANON_KEY` — anon public key
   - `DATABASE_URL` — Postgres connection string for migrations

2. Generate `VVV-8/vvv-config.js` from env vars with:

```bash
cd /workspaces/VVV-8
node scripts/generate-config.js
```

3. Apply database migrations from code:

```bash
cd /workspaces/VVV-8
node scripts/apply-migrations.js
```

4. The migration script reads SQL files from `VVV-8/migrations/` and applies only new migrations, tracking them in `public.vvv_migrations`.

5. Add new migration files as `VVV-8/migrations/0002_description.sql`, `0003_another.sql`, etc.

6. Create the `profiles` table and RLS policies in Supabase using `VVV-8/supabase-init.sql`.

7. Deploy to any static host by publishing the `VVV-8` folder and ensuring `VVV-8/vvv-config.js` exists or the env generator is run.

If you do not use Render, you can ignore `render.yaml`; it is optional.

Local testing tip:

```js
window.VVV_SUPABASE_CONFIG = { SUPABASE_URL: 'https://...', SUPABASE_ANON_KEY: 'anon-...' }
// then reload page and run

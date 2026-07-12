const femaleNames = ['Алина', 'Елена', 'Ирина', 'Мария', 'Юлия', 'Ольга', 'Светлана', 'Анна', 'Екатерина', 'Вероника'];
const maleNames = ['Иван', 'Петр', 'Дмитрий', 'Сергей', 'Максим', 'Артем', 'Алексей', 'Вадим', 'Геннадий', 'Виктор'];

function getRandomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomAge() {
  return Math.floor(Math.random() * (35 - 18 + 1)) + 18;
}

function formatTime(date) {
  return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function formatChatTime(date) {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'только что';
  if (minutes < 60) return `${minutes} мин назад`;
  const hours = Math.floor(minutes / 60);
  if (hours < 6) return `${hours} ч назад`;
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `вчера ${formatTime(date)}`;
  }
  return formatTime(date);
}

function slugifyName(name, id) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}_${id}`;
}

function getRandomRecentDate() {
  const now = new Date();
  const minutesAgo = Math.floor(Math.random() * 720);
  return new Date(now.getTime() - minutesAgo * 60000);
}

function generateChats() {
  const notifications = [
    { id: 1, name: 'Ольга', age: 30, type: 'like', status: 'Получен лайк от Ольга' },
    { id: 2, name: 'Вадим', age: 21, type: 'mutual', status: 'Взаимный лайк с Вадим' },
    { id: 3, name: 'Екатерина', age: 33, type: 'like', status: 'Получен лайк от Екатерина' },
    { id: 4, name: 'Антон', age: 28, type: 'mutual', status: 'Взаимный лайк с Антон' }
  ];

  return notifications.map((item, index) => {
    const avatar = item.name[0].toUpperCase();
    const username = slugifyName(item.name, item.id);
    const links = buildChatLinks(item.id, username, item.type);
    return {
      id: item.id,
      name: item.name,
      age: item.age,
      message: item.status,
      avatar,
      type: item.type,
      time: formatChatTime(getRandomRecentDate()),
      chatUrl: links.chatUrl,
      tgUrl: links.tgUrl,
      profileUrl: links.profileUrl
    };
  });
}

function buildChatLinks(id, username, type = 'like') {
  return {
    chatUrl: `chat.html?id=${id}&type=${type}`,
    tgUrl: `https://t.me/${username}`,
    profileUrl: `index.html?profile=${id}`
  };
}

function loadNotificationDatabase() {
  return loadDatabase()
}

function getDatabaseMatches() {
  const db = loadNotificationDatabase()
  if (db && Array.isArray(db.matches)) return db.matches
  return []
}

function getProfileById(id) {
  if (!window.profiles || !Array.isArray(window.profiles)) return null
  return window.profiles.find(pr => pr._id === id || pr.id === id || window.profiles.indexOf(pr) === id)
}

function renderChats() {
  let chatsList = document.getElementById('chatsList');
  if (!chatsList) {
    const parent = document.querySelector('.content') || document.body;
    chatsList = document.createElement('div');
    chatsList.id = 'chatsList';
    chatsList.className = 'chats-list';
    parent.appendChild(chatsList);
  }

  try {
    const matches = getDatabaseMatches()
    if (matches && matches.length && window.profiles && Array.isArray(window.profiles)) {
      const items = matches.map(id => {
        const p = getProfileById(id)
        if (!p) return null
        const avatar = p.avatar || (p.name ? p.name[0].toUpperCase() : String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        const username = slugifyName(p.name || 'user', p._id || id)
        const { chatUrl, tgUrl, profileUrl } = buildChatLinks(p._id || id, username)
        const time = formatChatTime(getRandomRecentDate())
        const message = p.name ? `Взаимная симпатия с ${p.name}` : 'Вас отметили как совпадение'

        return `
          <div class="chat-item">
            <div class="chat-avatar">${avatar}</div>
            <div class="chat-content">
              <div class="chat-header">
                <h3 class="chat-name">${p.name || 'Пользователь'}, ${p.age || ''}</h3>
                <span class="chat-time">${time}</span>
              </div>
              <p class="chat-message">${message}</p>
              <div class="chat-links">
                <a class="chat-link" href="${chatUrl}">Чат</a>
                <a class="chat-link" href="${tgUrl}" target="_blank" rel="noreferrer">Telegram</a>
                <a class="chat-link" href="${profileUrl}">Анкета</a>
              </div>
            </div>
            <div class="chat-status mutual">💕</div>
          </div>`;
      }).filter(Boolean);

      if (items.length) {
        chatsList.innerHTML = items.join('');
        return;
      }
    }
  } catch (e) {
    // ignore parse errors
  }

  const chats = generateChats(3);
  chatsList.innerHTML = chats.map(chat => `
    <div class="chat-item">
      <div class="chat-avatar">${chat.avatar}</div>
      <div class="chat-content">
        <div class="chat-header">
          <h3 class="chat-name">${chat.name}, ${chat.age}</h3>
          <span class="chat-time">${chat.time}</span>
        </div>
        <p class="chat-message">${chat.message}</p>
        <div class="chat-links">
          <a class="chat-link" href="${chat.chatUrl}">Чат</a>
          <a class="chat-link" href="${chat.tgUrl}" target="_blank" rel="noreferrer">Telegram</a>
          <a class="chat-link" href="${chat.profileUrl}">Анкета</a>
        </div>
      </div>
      <div class="chat-status ${chat.type === 'mutual' ? 'mutual' : 'like'}">${chat.type === 'mutual' ? '💕' : '❤️'}</div>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderChats();
  const notificationsBtn = document.getElementById('notificationsBtn');
  if (notificationsBtn) {
    notificationsBtn.classList.add('active');
  }
});

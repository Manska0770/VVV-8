const femaleNames = ['Алина', 'Елена', 'Ирина', 'Мария', 'Юлия', 'Ольга', 'Светлана', 'Анна', 'Екатерина', 'Вероника'];
const maleNames = ['Иван', 'Петр', 'Дмитрий', 'Сергей', 'Максим', 'Артем', 'Алексей', 'Вадим', 'Геннадий', 'Виктор'];

function getRandomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomAge() {
  return Math.floor(Math.random() * (35 - 18 + 1)) + 18;
}

function generateChats() {
  const chatTypes = [
    { type: 'mutual', template: (name) => `Взаимная симпатия с ${name}` },
    { type: 'like', template: (name) => `Ты понравился ${getRandomName(femaleNames)}` },
    { type: 'mutual', template: (name) => `Взаимная симпатия с ${name}` },
    { type: 'like', template: (name) => `Ты понравилась ${getRandomName(maleNames)}` },
    { type: 'mutual', template: (name) => `Взаимная симпатия с ${name}` },
    { type: 'like', template: (name) => `Ты понравился ${getRandomName(femaleNames)}` }
  ];

  const chats = [];
  for (let i = 0; i < 6; i++) {
    const chatType = chatTypes[i];
    const displayName = i % 2 === 0 ? getRandomName(femaleNames) : getRandomName(maleNames);
    const message = chatType.template(displayName);
    const age = getRandomAge();
    const avatar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    
    chats.push({
      id: i + 1,
      name: displayName,
      age: age,
      message: message,
      avatar: avatar,
      type: chatType.type,
      time: `${Math.floor(Math.random() * 24)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`
    });
  }

  return chats;
}

function renderChats() {
  let chatsList = document.getElementById('chatsList');
  if (!chatsList) {
    // create a fallback container so page doesn't stay empty
    const parent = document.querySelector('.content') || document.body
    chatsList = document.createElement('div')
    chatsList.id = 'chatsList'
    chatsList.className = 'chats-list'
    parent.appendChild(chatsList)
  }
  try {
  // Try to render real matches from localStorage
  try {
    const rawMatches = localStorage.getItem('vvv_matches')
    const matches = rawMatches ? JSON.parse(rawMatches) : []
    if (matches && matches.length && window.profiles && Array.isArray(window.profiles)) {
      const items = matches.map(id => {
        const p = window.profiles.find(pr => pr._id === id || pr.id === id || window.profiles.indexOf(pr) === id)
        if (!p) return null
        const avatar = p.avatar || (p.name ? p.name[0].toUpperCase() : String.fromCharCode(65 + Math.floor(Math.random()*26)))
        const time = `${Math.floor(Math.random() * 24)}:${String(Math.floor(Math.random() * 60)).padStart(2,'0')}`
        return `
          <div class="chat-item">
            <div class="chat-avatar">${avatar}</div>
            <div class="chat-content">
              <div class="chat-header">
                <h3 class="chat-name">${p.name || 'Пользователь'}, ${p.age || ''}</h3>
                <span class="chat-time">${time}</span>
              </div>
              <p class="chat-message">Вас отметили как совпадение — откройте чат.</p>
            </div>
            <div class="chat-status mutual">💕</div>
            <a class="chat-open" href="chat.html?id=${p._id}" aria-label="Открыть чат">Открыть чат</a>
          </div>
        `
      }).filter(Boolean)
      if (items.length) {
        chatsList.innerHTML = items.join('')
        return
      }
    }
  } catch (e) {
    // ignore parse errors
  }

  // Fallback: generate fake chats
  const chats = generateChats();
  chatsList.innerHTML = chats.map(chat => `
    <div class="chat-item">
      <div class="chat-avatar">${chat.avatar}</div>
      <div class="chat-content">
        <div class="chat-header">
          <h3 class="chat-name">${chat.name}, ${chat.age}</h3>
          <span class="chat-time">${chat.time}</span>
        </div>
        <p class="chat-message">${chat.message}</p>
      </div>
      <div class="chat-status ${chat.type === 'mutual' ? 'mutual' : 'like'}">
        ${chat.type === 'mutual' ? '💕' : '❤️'}
      </div>
      <a class="chat-open" href="chat.html?id=${chat.id}" aria-label="Открыть чат">Открыть чат</a>
    </div>
  `).join('');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  renderChats();
  
  // Привязка кнопок footer
  const notificationsBtn = document.getElementById('notificationsBtn');
  const filterBtn = document.getElementById('filterBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  
  if (notificationsBtn) {
    notificationsBtn.classList.add('active');
  }
});

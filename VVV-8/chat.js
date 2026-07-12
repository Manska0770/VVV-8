function qs(name) {
  const params = new URLSearchParams(window.location.search)
  return params.get(name)
}

function slugifyName(name, id) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}_${id}`
}

function appendMessage(container, msg) {
  const el = document.createElement('div')
  el.className = 'chat-row ' + (msg.from === 'me' ? 'me' : 'them')
  el.innerHTML = `<div class="chat-bubble">${msg.text}<div class="chat-time">${msg.time}</div></div>`
  container.appendChild(el)
  container.scrollTop = container.scrollHeight
}

function loadChatDatabase() {
  return loadDatabase()
}

function getDatabaseChat(id) {
  return getDatabaseChats(id)
}

function saveDatabaseChat(id, convo) {
  if (id == null) return
  updateDatabase((db) => {
    db.chats = db.chats || {}
    db.chats[String(id)] = convo || []
  })
}

function getDatabaseMutual(id) {
  const db = loadChatDatabase()
  return Boolean(db && db.mutualChats && db.mutualChats[String(id)])
}

function saveDatabaseMutual(id, value) {
  if (id == null) return
  updateDatabase((db) => {
    db.mutualChats = db.mutualChats || {}
    db.mutualChats[String(id)] = Boolean(value)
  })
}

function createProfilePreview(participant, accepted, type, tgUrl, profileUrl) {
  const preview = document.getElementById('profilePreview')
  if (!preview) return

  const profileHtml = `
    <div class="profile-card">
      <div class="profile-row">
        <div class="chat-avatar">${(participant.name || 'П')[0].toUpperCase()}</div>
        <div>
          <div class="profile-name">${participant.name || 'Пользователь'}, ${participant.age || ''}</div>
          <div class="profile-meta">${participant.city || 'Город неизвестен'}</div>
        </div>
      </div>
      <p class="profile-bio">${participant.bio || 'Анкета пользователя доступна в чате. Посмотрите и ответьте.'}</p>
      <div class="profile-actions">
        <a class="chat-link" href="${profileUrl}">Анкета</a>
        ${accepted || type === 'mutual' ? `<a class="chat-link" href="${tgUrl}" target="_blank" rel="noreferrer">Telegram</a>` : `<button class="action-btn primary" id="mutualBtn">Поставить взаимный лайк</button>`}
      </div>
      <div class="profile-status">${type === 'mutual' ? 'Взаимный лайк' : 'Получен лайк'}</div>
    </div>`
  preview.innerHTML = profileHtml
}

document.addEventListener('DOMContentLoaded', () => {
  const idRaw = qs('id')
  const type = qs('type') || 'like'
  const id = idRaw ? (isNaN(Number(idRaw)) ? idRaw : Number(idRaw)) : null
  const messagesEl = document.getElementById('messages')
  const chatNameEl = document.getElementById('chatName')
  const sendBtn = document.getElementById('sendBtn')
  const chatInput = document.getElementById('chatInput')
  const backBtn = document.getElementById('backBtn')

  let participant = null
  if (window.profiles && Array.isArray(window.profiles)) {
    participant = window.profiles.find(p => p._id === id || p.id === id || window.profiles.indexOf(p) === id)
  }
  if (!participant) {
    participant = { name: 'Пользователь', age: '', city: '', bio: 'Информация о пользователе пока не доступна.' }
  }
  chatNameEl.textContent = participant.name || 'Чат'

  const accepted = type === 'mutual' || getDatabaseMutual(id)
  const username = slugifyName(participant.name || 'user', id || 'unknown')
  const tgUrl = `https://t.me/${username}`
  const profileUrl = `../index.html?profile=${id}`

  createProfilePreview(participant, accepted, type, tgUrl, profileUrl)

  let convo = getDatabaseChat(id)

  if (!convo.length) {
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`
    const firstMessage = type === 'mutual'
      ? 'Привет! У нас взаимный лайк, давай перейдем в Telegram для общения.'
      : 'Привет! Мне понравился твой профиль, посмотри его и поставь взаимный лайк, если хочешь продолжить.'
    convo.push({ from: 'them', text: firstMessage, time })
    saveDatabaseChat(id, convo)
  }

  convo.forEach(m => appendMessage(messagesEl, m))

  function setMutual() {
    saveDatabaseMutual(id, true)
    createProfilePreview(participant, true, type, tgUrl, profileUrl)
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`
    const reply = { from: 'them', text: 'Отлично! Вот мой Telegram для общения.', time }
    convo.push(reply)
    saveDatabaseChat(id, convo)
    appendMessage(messagesEl, reply)
  }

  document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'mutualBtn') {
      setMutual()
    }
  })

  sendBtn.addEventListener('click', () => {
    const text = chatInput.value.trim()
    if (!text) return
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`
    const msg = { from: 'me', text, time }
    convo.push(msg)
    saveDatabaseChat(id, convo)
    appendMessage(messagesEl, msg)
    chatInput.value = ''

    setTimeout(() => {
      const reply = { from: 'them', text: 'Спасибо, я ответил(а) — продолжим в Telegram.', time }
      convo.push(reply)
      saveDatabaseChat(id, convo)
      appendMessage(messagesEl, reply)
    }, 800 + Math.random() * 1200)
  })

  backBtn.addEventListener('click', () => {
    window.location.href = '../notifications.html'
  })
})

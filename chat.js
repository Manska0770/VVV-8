function qs(name) {
  const params = new URLSearchParams(window.location.search)
  return params.get(name)
}

function appendMessage(container, msg) {
  const el = document.createElement('div')
  el.className = 'chat-row ' + (msg.from === 'me' ? 'me' : 'them')
  el.innerHTML = `<div class="chat-bubble">${msg.text}<div class="chat-time">${msg.time}</div></div>`
  container.appendChild(el)
  container.scrollTop = container.scrollHeight
}

document.addEventListener('DOMContentLoaded', () => {
  const idRaw = qs('id')
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
  chatNameEl.textContent = participant ? (participant.name || 'Пользователь') : 'Чат'

  const storageKey = id ? `vvv_chat_${id}` : 'vvv_chat_unknown'
  let convo = []
  try {
    const raw = localStorage.getItem(storageKey)
    convo = raw ? JSON.parse(raw) : []
  } catch (e) { convo = [] }

  convo.forEach(m => appendMessage(messagesEl, m))

  sendBtn.addEventListener('click', () => {
    const text = chatInput.value.trim()
    if (!text) return
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`
    const msg = { from: 'me', text, time }
    convo.push(msg)
    try { localStorage.setItem(storageKey, JSON.stringify(convo)) } catch(e){}
    appendMessage(messagesEl, msg)
    chatInput.value = ''

    // simple auto-reply to simulate chat
    setTimeout(() => {
      const reply = { from: 'them', text: 'Спасибо! Я посмотрю.', time }
      convo.push(reply)
      try { localStorage.setItem(storageKey, JSON.stringify(convo)) } catch(e){}
      appendMessage(messagesEl, reply)
    }, 800 + Math.random() * 1200)
  })

  backBtn.addEventListener('click', () => {
    window.location.href = 'notifications.html'
  })
})

const photoEl = document.getElementById('photo')
const photoNextEl = document.getElementById('photoNext')
const profileNameEl = document.getElementById('profileName')
const profileCityEl = document.getElementById('profileCity')
const profileBioEl = document.getElementById('profileBio')
const likeBtn = document.getElementById('likeBtn')
const skipBtn = document.getElementById('skipBtn')
const filterBtn = document.getElementById('filterBtn')
const profileBtn = document.getElementById('profileBtn')
const profilePage = document.querySelector('.profile-page')
const profileEditPage = document.querySelector('.profile-edit-page')
const filterPage = document.querySelector('.filter-page')
const notificationsPage = document.querySelector('.notifications-page')
const interestPills = document.getElementById('interestPills')
const profileNameInput = document.getElementById('profileNameInput')
const profileAgeInput = document.getElementById('profileAgeInput')
const profileGenderSelect = document.getElementById('profileGenderSelect')
const profileCityInput = document.getElementById('profileCityInput')
const profileCitySuggestions = document.getElementById('profileCitySuggestions')
const profileGoalPills = document.getElementById('profileGoalPills')
const profileBioInput = document.getElementById('profileBioInput')
const profileSaveBtn = document.getElementById('profileSaveBtn')
const profileGeoToggle = document.getElementById('profileGeoToggle')
const profileAvatarInput = document.getElementById('profileAvatarInput')
const photoAddBtn = document.getElementById('photoAddBtn')
const humanCheckBtn = document.getElementById('humanCheckBtn')
const humanCheckStatus = document.getElementById('humanCheckStatus')
const themeToggleBtn = document.getElementById('themeToggleBtn')
const settingsBtn = document.getElementById('settingsBtn')
const notificationsBtn = document.getElementById('notificationsBtn')
const backBtn = document.getElementById('backBtn')
const profileAvatar = document.querySelector('.profile-avatar')
const profileEditBtn = document.getElementById('profileEditBtn')
const profileToSearchBtn = document.getElementById('profileToSearchBtn')
const showPills = document.getElementById('showPills')
const ageMin = document.getElementById('ageMin')
const ageMax = document.getElementById('ageMax')
const ageMinNumber = document.getElementById('ageMinNumber')
const ageMaxNumber = document.getElementById('ageMaxNumber')
const ageValue = document.getElementById('ageValue')
const chatToggle = document.getElementById('chatToggle')
const relationshipToggle = document.getElementById('relationshipToggle')
const geoToggle = document.getElementById('geoToggle')
const geoRadiusContainer = document.getElementById('geoRadiusContainer')
const geoRadiusRange = document.getElementById('geoRadiusRange')
const geoRadiusNumber = document.getElementById('geoRadiusNumber')
const geoRadiusValue = document.getElementById('geoRadiusValue')
const searchBtn = document.getElementById('searchBtn')
const locationInput = document.getElementById('locationInput')
const locationSuggestions = document.getElementById('locationSuggestions')

const locationCities = [
  'Москва',
  'Московская область',
  'Санкт-Петербург',
  'Ленинградская область',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Челябинск',
  'Омск',
  'Самара',
  'Ростов-на-Дону',
  'Уфа',
  'Краснодар',
  'Воронеж',
  'Пермь',
  'Саратов',
  'Тюмень',
  'Ижевск',
  'Барнаул',
  'Томск',
  'Оренбург',
  'Кемерово',
  'Новокузнецк',
  'Рязань',
  'Астрахань',
  'Псков',
  'Калининград',
  'Сочи',
  'Владивосток',
  'Петрозаводск',
  'Ярославль',
  'Иркутск',
  'Махачкала',
  'Хабаровск',
  'Улан-Удэ',
  'Стерлитамак',
  'Стерлибашево',
  'Стерлигово',
  'Грозный',
  'Красноярск',
  'Ханты-Мансийск',
  'Владикавказ',
  'Нижнекамск',
  'Киров',
  'Иваново',
  'Курск',
  'Тула',
  'Брянск',
  'Архангельск',
  'Мурманск',
  'Тверь',
  'Калуга',
  'Смоленск',
  'Курган',
  'Благовещенск',
  'Ростовская область',
  'Краснодарский край',
  'Республика Башкортостан',
  'Республика Татарстан',
  'Алтайский край',
  'Свердловская область',
  'Нижегородская область',
  'Самарская область',
  'Пензенская область',
  'Новгородская область',
  'Псковская область',
  'Ставропольский край',
  'Республика Северная Осетия-Алания',
  'Республика Коми',
  'Республика Татарстан',
  'Село Новое',
  'Село Красное',
  'Село Дубровка',
  'Село Звёздное',
  'Село Вишнёвая Поляна',
  'Село Свободное',
  'Деревня Лесная',
  'Деревня Речная',
  'Деревня Орехово',
  'Деревня Малиновка',
  'Деревня Заречная',
  'Деревня Никольское',
  'Посёлок Молодёжный',
  'Посёлок Солнечный',
  'Посёлок Лесной',
  'Посёлок Приозёрный',
  'Посёлок Лазурный',
  'Посёлок Берёзовый',
  'Посёлок Поляна',
  'Хутор Кипучий',
  'Хутор Лесной',
  'Сельцо Новое',
  'Станица Донская',
  'Село Светлый Луг',
  'Село Петровское',
  'Село Михайловское',
  'Деревня Уральская',
  'Деревня Лесозаводская',
  'Деревня Зеленая Роща',
  'Посёлок Черёмушки',
  'Посёлок Лазурный берег',
  'Село Зори',
  'Село Черничное',
  'Деревня Берёзка',
  'Деревня Горки'
]

const locationSynonyms = {
  'питер': 'Санкт-Петербург',
  'санктпетербург': 'Санкт-Петербург',
  'петербург': 'Санкт-Петербург',
  'спб': 'Санкт-Петербург',
  'мск': 'Москва',
  'москва': 'Москва',
  'стерл': 'Стерлитамак',
  'стерлитамак': 'Стерлитамак',
  'стерлиб': 'Стерлибашево',
  'стерлибашево': 'Стерлибашево',
  'краснодарский край': 'Краснодарский край',
  'республика башкортостан': 'Республика Башкортостан',
  'республика татарстан': 'Республика Татарстан'
}

const DATABASE_KEY = 'vvv_database'
const LEGACY_KEYS = [
  'vvv_user',
  'vvv_likes',
  'vvv_matches',
  'vvv_search_filters',
  'profileName',
  'profileAge',
  'profileCity',
  'profileBio',
  'profileAvatar',
  'profileGender',
  'profilePhoto',
  'profileGoal'
]

let SUPABASE_URL = '' // fill your Supabase project url here
let SUPABASE_ANON_KEY = '' // fill your Supabase anon public key here
const SUPABASE_TABLE = 'profiles'
let supabaseClient = null

function initSupabase() {
  return new Promise((resolve) => {
    // allow dynamic config injection from hosting env without editing files
    try {
      if (window && window.VVV_SUPABASE_CONFIG) {
        SUPABASE_URL = SUPABASE_URL || window.VVV_SUPABASE_CONFIG.SUPABASE_URL || window.VVV_SUPABASE_CONFIG.url || SUPABASE_URL
        SUPABASE_ANON_KEY = SUPABASE_ANON_KEY || window.VVV_SUPABASE_CONFIG.SUPABASE_ANON_KEY || window.VVV_SUPABASE_CONFIG.anon || SUPABASE_ANON_KEY
      }
    } catch (e) {}

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return resolve(false)
    }
    if (supabaseClient) {
      return resolve(true)
    }

    const setupClient = () => {
      if (window.supabase && !supabaseClient) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      }
      resolve(Boolean(supabaseClient))
    }

    if (window.supabase) {
      setupClient()
      return
    }

    const existing = document.querySelector('script[data-supabase]')
    if (existing) {
      existing.addEventListener('load', setupClient)
      existing.addEventListener('error', () => resolve(false))
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/dist/umd/supabase.min.js'
    script.async = true
    script.dataset.supabase = '1'
    script.onload = () => {
      console.log('VVV: Supabase SDK loaded')
      setupClient()
    }
    script.onerror = () => {
      console.warn('VVV: Supabase SDK failed to load')
      resolve(false)
    }
    document.head.appendChild(script)
  })
}

function supabaseEnabled() {
  return Boolean(supabaseClient)
}

// ------------------ Supabase Auth helpers ------------------
let supabaseAuthUnsubscribe = null

function initAuth() {
  if (!supabaseClient || !supabaseClient.auth) return false
  try {
    // Older/newer supabase-js expose different APIs for onAuthStateChange
    if (supabaseClient.auth.onAuthStateChange) {
      const sub = supabaseClient.auth.onAuthStateChange((event, session) => {
        window.dispatchEvent(new CustomEvent('vvv:supabaseAuth', { detail: { event, session } }))
      })
      supabaseAuthUnsubscribe = sub?.data?.subscription ? () => supabaseClient.auth.removeSubscription(sub.data.subscription) : (sub?.unsubscribe || null)
    }
    return true
  } catch (err) {
    return false
  }
}

function getTelegramWebAppObject() {
  const accessors = [
    () => window.Telegram?.WebApp,
    () => window.TelegramWebApp,
    () => window.WebApp,
    () => window.parent?.Telegram?.WebApp,
    () => window.top?.Telegram?.WebApp,
    () => window.parent?.TelegramWebApp,
    () => window.parent?.WebApp,
  ]

  for (const get of accessors) {
    try {
      const result = get()
      if (result) return result
    } catch (err) {
      // ignore cross-origin or missing parent errors
    }
  }
  return null
}

async function waitForTelegramWebApp(timeoutMs = 1000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if (getTelegramWebAppObject()) return true
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  return false
}

function getTelegramWebAppDebugInfo() {
  const webapp = getTelegramWebAppObject()
  const info = {
    hasTelegram: typeof window.Telegram !== 'undefined',
    hasTelegramWebApp: Boolean(window.Telegram?.WebApp),
    hasTelegramWebAppObject: Boolean(webapp),
    initDataUnsafeType: webapp && typeof webapp.initDataUnsafe,
    initDataType: webapp && typeof webapp.initData,
    hasInitDataUser: null,
    rawInitDataUnsafe: null,
    rawInitData: null,
  }
  if (webapp) {
    info.rawInitDataUnsafe = webapp.initDataUnsafe
    info.rawInitData = webapp.initData
    const unsafeUser = parseTelegramWebAppUser(webapp.initDataUnsafe)
    const dataUser = parseTelegramWebAppUser(webapp.initData)
    info.hasInitDataUser = Boolean((unsafeUser && unsafeUser.id) || (dataUser && dataUser.id))
  }
  return info
}

function parseTelegramWebAppUser(raw) {
  if (!raw) return null
  if (typeof raw === 'object') return raw.user || raw
  if (typeof raw !== 'string') return null

  const trimmed = raw.trim()
  if (!trimmed) return null

  if (trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed)
      return parsed.user || parsed
    } catch (err) {
      return null
    }
  }

  if (trimmed.includes('user=')) {
    try {
      const params = new URLSearchParams(trimmed)
      const userJson = params.get('user')
      return userJson ? JSON.parse(userJson) : null
    } catch (err) {
      return null
    }
  }

  return null
}

function getTelegramBotUsername() {
  const raw = window.VVV_SUPABASE_CONFIG?.TELEGRAM_BOT_USERNAME || ''
  const normalized = String(raw).trim()
  return normalized ? normalized.replace(/^@/, '') : null
}

function showTelegramLoginFallback() {
  const container = document.getElementById('telegramLoginFallback')
  if (!container) return

  const botUsername = getTelegramBotUsername()
  container.innerHTML = ''

  if (!botUsername) {
    container.textContent = 'Добавьте TELEGRAM_BOT_USERNAME в vvv-config.js, чтобы войти через Telegram.'
    container.classList.remove('hidden')
    return
  }

  const info = document.createElement('div')
  info.className = 'field-hint'
  info.textContent = 'Если WebApp не работает, войдите через Telegram здесь:'
  container.appendChild(info)

  const widgetWrapper = document.createElement('div')
  widgetWrapper.id = 'telegramLoginWidget'
  container.appendChild(widgetWrapper)

  const script = document.createElement('script')
  script.src = 'https://telegram.org/js/telegram-widget.js?15'
  script.async = true
  script.setAttribute('data-telegram-login', botUsername)
  script.setAttribute('data-size', 'large')
  script.setAttribute('data-onauth', 'onTelegramAuth')
  script.setAttribute('data-request-access', 'write')
  widgetWrapper.appendChild(script)
  container.classList.remove('hidden')
}

function hideTelegramLoginFallback() {
  const container = document.getElementById('telegramLoginFallback')
  if (!container) return
  container.classList.add('hidden')
  container.innerHTML = ''
}

window.onTelegramAuth = function (user) {
  try {
    const me = getMyProfile() || {}
    me.telegram_id = user.id ? String(user.id) : me.telegram_id
    me.telegram_username = user.username || me.telegram_username
    me.telegram_name = [user.first_name, user.last_name].filter(Boolean).join(' ') || me.telegram_name
    saveMyProfile(me)
    if (humanCheckStatus) {
      humanCheckStatus.textContent = 'Telegram ID получен через Login Widget. Можно сохранить анкету.'
    }
    hideTelegramLoginFallback()
  } catch (err) {
    console.warn('Telegram auth callback failed', err)
  }
}

function getTelegramWebAppUser() {
  const webapp = getTelegramWebAppObject()
  if (!webapp) return null

  const unsafeUser = parseTelegramWebAppUser(webapp.initDataUnsafe)
  if (unsafeUser && unsafeUser.id) return unsafeUser

  const dataUser = parseTelegramWebAppUser(webapp.initData)
  if (dataUser && dataUser.id) return dataUser

  return null
}

function getTelegramIdFromWebApp() {
  try {
    const user = getTelegramWebAppUser()
    if (user && user.id) return user
  } catch (err) {
    console.warn('Telegram WebApp read failed', err)
  }
  return null
}

async function signInWithEmail(email, password) {
  if (!supabaseClient || !supabaseClient.auth) return { error: 'no-supabase-client' }
  try {
    if (supabaseClient.auth.signInWithPassword) {
      return await supabaseClient.auth.signInWithPassword({ email, password })
    }
    // fallback to older API
    return await supabaseClient.auth.signIn({ email, password })
  } catch (err) {
    return { error: err }
  }
}

async function signOutSupabase() {
  if (!supabaseClient || !supabaseClient.auth) return
  try {
    if (supabaseClient.auth.signOut) {
      await supabaseClient.auth.signOut()
      return
    }
    if (supabaseClient.auth.signOutUser) {
      await supabaseClient.auth.signOutUser()
    }
  } catch (err) {}
}

async function getSupabaseUser() {
  if (!supabaseClient || !supabaseClient.auth) return null
  try {
    if (supabaseClient.auth.getUser) {
      const { data } = await supabaseClient.auth.getUser()
      return data && data.user ? data.user : data
    }
    // older API
    if (supabaseClient.auth.user) return supabaseClient.auth.user()
  } catch (err) {}
  return null
}

// Expose auth helpers for UI pages
window.vvv = window.vvv || {}
window.vvv.initAuth = initAuth
window.vvv.signInWithEmail = signInWithEmail
window.vvv.signOutSupabase = signOutSupabase
window.vvv.getSupabaseUser = getSupabaseUser


function normalizeRemoteProfile(record) {
  if (!record || typeof record !== 'object') return null
  const profile = {
    _id: record.id || record._id || `profile-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    name: record.name || record.username || '',
    age: record.age || record.years || '',
    city: record.city || '',
    bio: record.bio || '',
    photo: record.photo || record.img || record.image || '',
    avatar: record.avatar || (record.name ? String(record.name)[0].toUpperCase() : 'A'),
    tags: Array.isArray(record.tags) ? record.tags : (record.tags ? [record.tags] : []),
    gender: record.gender || '',
    lat: typeof record.lat === 'number' ? record.lat : record.latitude,
    lon: typeof record.lon === 'number' ? record.lon : record.longitude,
    distance: record.distance || '',
    telegram_id: record.telegram_id || null,
    telegram_username: record.telegram_username || null,
    telegram_name: record.telegram_name || null,
    createdAt: record.createdAt || record.created_at || Date.now()
  }
  return profile
}

async function fetchSupabaseProfiles() {
  if (!supabaseClient) return []
  try {
    const { data, error } = await supabaseClient.from(SUPABASE_TABLE).select('*').order('created_at', { ascending: false })
    if (error) {
      console.warn('Supabase fetch error', error)
      return []
    }
    return Array.isArray(data) ? data.map(normalizeRemoteProfile).filter(Boolean) : []
  } catch (err) {
    console.warn('Supabase fetch failed', err)
    return []
  }
}

async function getSupabaseProfileByTelegramId(telegramId) {
  if (!supabaseClient || !telegramId) return null
  try {
    const { data, error } = await supabaseClient.from(SUPABASE_TABLE)
      .select('*')
      .eq('telegram_id', telegramId)
      .limit(1)
    if (error) {
      console.warn('Supabase fetch by Telegram ID error', error)
      return null
    }
    return Array.isArray(data) && data.length ? data[0] : null
  } catch (err) {
    console.warn('Supabase fetch by Telegram ID failed', err)
    return null
  }
}

async function saveSupabaseProfile(profile) {
  if (!supabaseClient || !profile || !profile.name || !profile.city) return profile
  const profileId = profile._id || profile.id || `profile-${Date.now()}-${Math.floor(Math.random() * 10000)}`
  const {
    _id,
    createdAt,
    updatedAt,
    ...rest
  } = profile || {}
  const payload = {
    ...rest,
    id: profileId,
    created_at: createdAt ? new Date(createdAt).toISOString() : new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
  // attach owner if authenticated
  try {
    const supUser = await getSupabaseUser()
    if (supUser && supUser.id) payload.owner = supUser.id
  } catch (err) {}

  try {
    if (profile.telegram_id) {
      const existing = await getSupabaseProfileByTelegramId(profile.telegram_id)
      if (existing && existing.id && existing.id !== payload.id) {
        payload.id = existing.id
        payload.created_at = existing.created_at || payload.created_at
      }
    }

    const { data, error } = await supabaseClient.from(SUPABASE_TABLE).upsert(payload, { returning: 'representation', onConflict: 'id' })
    if (error) {
      console.warn('Supabase save error', error)
      return { ...profile, _id: profileId }
    }
    const saved = Array.isArray(data) ? data[0] : data
    if (saved) {
      return normalizeRemoteProfile(saved)
    }
  } catch (err) {
    console.warn('Supabase save failed', err)
  }
  return { ...profile, _id: profileId }
}

async function syncSupabaseProfile(profile) {
  const saved = await saveSupabaseProfile(profile)
  if (saved && saved._id) {
    updateDatabase((db) => {
      db.profiles = db.profiles || []
      const index = db.profiles.findIndex((item) => item._id === saved._id)
      if (index >= 0) {
        db.profiles[index] = { ...db.profiles[index], ...saved }
      } else {
        db.profiles.push(saved)
      }
    })
    refreshGlobalProfiles()
  }
  return saved
}

async function syncRemoteProfilesToLocal() {
  if (!supabaseClient) return
  const remoteProfiles = await fetchSupabaseProfiles()
  if (!remoteProfiles.length) return
  const existing = getDatabaseProfiles()
  const map = new Map()
  existing.forEach((profile) => {
    if (profile && profile._id) map.set(profile._id, profile)
  })
  remoteProfiles.forEach((profile) => {
    if (!profile || !profile._id) return
    const prev = map.get(profile._id)
    map.set(profile._id, prev ? { ...prev, ...profile } : profile)
  })
  saveDatabaseProfiles(Array.from(map.values()))
  refreshGlobalProfiles()
}

function defaultDatabase() {
  return {
    user: null,
    profiles: [],
    likes: [],
    matches: [],
    chats: {},
    mutualChats: {},
    notifications: [],
    filters: {
      location: '',
      geo: false,
      geoRadius: 25,
      interest: 'all',
      show: 'all',
      ageMin: 14,
      ageMax: 60,
      wantsChat: false,
      wantsRelationship: false
    }
  }
}

function saveDatabase(db) {
  try {
    localStorage.setItem(DATABASE_KEY, JSON.stringify(db))
  } catch (err) {}
}

function cleanupLegacyStorage() {
  try {
    LEGACY_KEYS.forEach((key) => localStorage.removeItem(key))
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i)
      if (!key) continue
      if (key.startsWith('vvv_chat_') || key.startsWith('vvv_chat_mutual_')) {
        localStorage.removeItem(key)
      }
    }
  } catch (err) {}
}

function migrateLegacyDatabase() {
  const db = defaultDatabase()
  let migrated = false

  try {
    const raw = localStorage.getItem('vvv_user')
    if (raw) {
      db.user = JSON.parse(raw)
      migrated = true
    } else {
      const name = localStorage.getItem('profileName')
      const age = localStorage.getItem('profileAge')
      const city = localStorage.getItem('profileCity')
      if (name || age || city) {
        db.user = {
          name: name || '',
          age: age || '',
          city: city || '',
          bio: localStorage.getItem('profileBio') || '',
          avatar: localStorage.getItem('profileAvatar') || '',
          gender: localStorage.getItem('profileGender') || '',
          photo: localStorage.getItem('profilePhoto') || '',
          tags: localStorage.getItem('profileGoal') ? [localStorage.getItem('profileGoal')] : []
        }
        migrated = true
      }
    }
  } catch (err) {}


  try {
    const likesRaw = localStorage.getItem('vvv_likes')
    if (likesRaw) {
      db.likes = JSON.parse(likesRaw)
      migrated = true
    }
  } catch (err) {}

  try {
    const matchesRaw = localStorage.getItem('vvv_matches')
    if (matchesRaw) {
      db.matches = JSON.parse(matchesRaw)
      migrated = true
    }
  } catch (err) {}

  try {
    const filtersRaw = localStorage.getItem('vvv_search_filters')
    if (filtersRaw) {
      const filters = JSON.parse(filtersRaw)
      db.filters = { ...db.filters, ...filters }
      migrated = true
    }
  } catch (err) {}

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key) continue
      if (key.startsWith('vvv_chat_') && !key.startsWith('vvv_chat_mutual_')) {
        const id = key.slice('vvv_chat_'.length)
        try {
          const raw = localStorage.getItem(key)
          const convo = raw ? JSON.parse(raw) : []
          if (Array.isArray(convo) && convo.length) {
            db.chats[id] = convo
            migrated = true
          }
        } catch (err) {}
      }
      if (key.startsWith('vvv_chat_mutual_')) {
        const id = key.slice('vvv_chat_mutual_'.length)
        try {
          const value = localStorage.getItem(key)
          if (value === '1') {
            db.mutualChats[id] = true
            migrated = true
          }
        } catch (err) {}
      }
    }
  } catch (err) {}

  saveDatabase(db)
  if (migrated) {
    cleanupLegacyStorage()
  }
  return db
}

function loadDatabase() {
  try {
    const raw = localStorage.getItem(DATABASE_KEY)
    if (raw) {
      const db = JSON.parse(raw)
      return {
        ...defaultDatabase(),
        ...db,
        filters: { ...defaultDatabase().filters, ...(db.filters || {}) },
        chats: { ...defaultDatabase().chats, ...(db.chats || {}) },
        notifications: Array.isArray(db.notifications) ? db.notifications : []
      }
    }
  } catch (err) {}
  return migrateLegacyDatabase()
}

function updateDatabase(updateFn) {
  const db = loadDatabase()
  updateFn(db)
  saveDatabase(db)
  return db
}

function getDatabaseUser() {
  return loadDatabase().user
}

function saveDatabaseUser(user) {
  updateDatabase((db) => {
    db.user = user || null
  })
}

function getDatabaseFilters() {
  return loadDatabase().filters
}

function saveDatabaseFilters(filters) {
  updateDatabase((db) => {
    db.filters = { ...defaultDatabase().filters, ...(filters || {}) }
  })
}

function getDatabaseLikes() {
  return loadDatabase().likes || []
}

function addDatabaseLike(id) {
  if (id == null) return
  updateDatabase((db) => {
    db.likes = db.likes || []
    if (!db.likes.includes(id)) db.likes.push(id)
  })
}

function getDatabaseMatches() {
  return loadDatabase().matches || []
}

function addDatabaseMatch(id) {
  if (id == null) return
  updateDatabase((db) => {
    db.matches = db.matches || []
    if (!db.matches.includes(id)) db.matches.push(id)
  })
}

function getDatabaseChats(id) {
  const db = loadDatabase()
  return db.chats && db.chats[String(id)] ? db.chats[String(id)] : []
}

function saveDatabaseChat(id, convo) {
  if (id == null) return
  updateDatabase((db) => {
    db.chats = db.chats || {}
    db.chats[String(id)] = convo || []
  })
}

function getDatabaseNotifications() {
  return loadDatabase().notifications || []
}

function saveDatabaseNotifications(notifications) {
  updateDatabase((db) => {
    db.notifications = Array.isArray(notifications) ? notifications : []
  })
}

function getDatabaseProfiles() {
  return loadDatabase().profiles || []
}

function saveDatabaseProfiles(profiles) {
  updateDatabase((db) => {
    db.profiles = Array.isArray(profiles) ? profiles : []
  })
}

function addOrUpdateDatabaseProfile(profile) {
  if (!profile || typeof profile !== 'object') return
  const normalized = {
    ...profile,
    _id: profile._id || `profile-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    createdAt: profile.createdAt || Date.now()
  }
  updateDatabase((db) => {
    db.profiles = db.profiles || []
    const index = db.profiles.findIndex((item) => {
      if (!item || typeof item !== 'object') return false
      if (item._id && item._id === normalized._id) return true
      if (normalized.telegram_id && item.telegram_id && item.telegram_id === normalized.telegram_id) return true
      return false
    })
    if (index >= 0) {
      db.profiles[index] = { ...db.profiles[index], ...normalized }
    } else {
      db.profiles.push(normalized)
    }
  })

  if (supabaseEnabled()) {
    syncSupabaseProfile(normalized).catch((err) => {
      console.warn('Supabase sync failed', err)
    })
  }
}

const profiles = [
  {name:'Кирилл', age:27, city:'Москва', bio:'Инженер-программист, люблю решать сложные задачи и учиться новому. В свободное время катаюсь на велосипеде и читаю исторические книги. Ищу партнёршу для путешествий и спокойных вечеров.', tags:['IT','Книги','Прогулки'], img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80'},
  {name:'Марина', age:24, city:'Санкт-Петербург', bio:'Люблю утренний кофе, книги и длинные прогулки по набережной. Занимаюсь фотографией и часто ищу красивые ракурсы в городе. Ищу человека, с которым будет легко и весело.', tags:['Кофе','Книги','Фотография'], img:'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80'},
  {name:'Дмитрий', age:29, city:'Казань', bio:'Путешественник по натуре: планирую маршруты и люблю открывать новые места. По вечерам готовлю и смотрю документальные фильмы. Ищу спутницу для походов и поездок.', tags:['Путешествия','Кулинария','Кино'], img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80'},
  {name:'Ольга', age:26, city:'Новосибирск', bio:'Бариста и любитель кулинарии. Обожаю новые рецепты и эксперименты на кухне, ценю искренние разговоры и длинные прогулки.', tags:['Кулинария','Прогулки','Музыка'], img:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80'},
  {name:'Максим', age:28, city:'Краснодар', bio:'Спортсмен и любитель активного отдыха — серф, пробежки и походы. Люблю природу и планирую выезды на выходные.', tags:['Спорт','Походы','Путешествия'], img:'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80'},
  {name:'Юлия', age:25, city:'Екатеринбург', bio:'Люблю театр, живую музыку и уютные вечера с книгой. Часто бываю на выставках и мастер-классах, ищу человека с общими интересами.', tags:['Театр','Книги','Искусство'], img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1200&q=80'},
  {name:'Роман', age:30, city:'Новосибирск', bio:'Музыкант по призванию: гитара, концерты и творческие вечера — моя стихия. Ищу искренние отношения и путешествия в хорошей компании.', tags:['Музыка','Путешествия','Спорт'], img:'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=1200&q=80'},
  {name:'Наталья', age:23, city:'Москва', bio:'Искусствовед, люблю музеи и уютные кафе. Увлекаюсь йогой и стараюсь жить осознанно. Хочу встретить человека для совместных прогулок и разговоров.', tags:['Искусство','Йога','Кофе'], img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80'},
  {name:'Сергей', age:31, city:'Санкт-Петербург', bio:'Разработчик и любитель горнолыжного отдыха. Часто езжу в горы на выходные, ценю чувство юмора и открытость.', tags:['IT','Горы','Путешествия'], img:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80'},
  {name:'Анастасия', age:24, city:'Краснодар', bio:'Люблю тепло, кино и уютные вечера с друзьями. Хожу в йогу и участвую в локальных мероприятиях — ищу человека для прогулок и планов.', tags:['Кино','Прогулки','Йога'], img:'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1200&q=80'},
  {name:'Павел', age:29, city:'Казань', bio:'Походы и палаточная жизнь — моя стихия. Часто собираюсь с друзьями в выездные поездки, ищу напарницу для приключений.', tags:['Походы','Природа','Чай'], img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80'},
  {name:'Ирина', age:26, city:'Москва', bio:'Менеджер проектов, ценю баланс между карьерой и личной жизнью. Люблю театральные постановки и неспешные прогулки по городу.', tags:['Книги','Искусство','Театр'], img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'},
  {name:'Антон', age:28, city:'Екатеринбург', bio:'Дизайнер по профессии, увлекаюсь фотографией и автопутешествиями. Ищу лёгкую и искреннюю девушку.', tags:['Дизайн','Фото','Путешествия'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'},
  {name:'Виктория', age:27, city:'Санкт-Петербург', bio:'Организатор мероприятий, люблю живую музыку и уютные встречи. Ищу человека, с которым будет просто и комфортно.', tags:['Кофе','Музыка','Организация'], img:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80'},
  {name:'Рустам', age:30, city:'Краснодар', bio:'Экскурсовод и туристический энтузиаст — знаю много интересных мест. Ищу попутчицу для новых маршрутов и разговоров по пути.', tags:['Путешествия','Туризм','Спорт'], img:'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80'},
  {name:'Людмила', age:25, city:'Новосибирск', bio:'Люблю прогулки по лесу и фотографию. Ценю уют и простые радости — чай, книги и тихие вечера.', tags:['Походы','Книги','Фото'], img:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'},
  {name:'Михаил', age:32, city:'Москва', bio:'Аналитик по профессии, люблю природу и долгие разговоры. Ищу партнёршу для стабильных и тёплых отношений.', tags:['Аналитика','Прогулки','Музыка'], img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80'},
  {name:'Ольга', age:26, city:'Екатеринбург', bio:'Творческая личность: театр, мастер-классы и уютные вечера. Часто рисую и делюсь работами с друзьями.', tags:['Искусство','Кино','Театр'], img:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80'},
  {name:'Алексей', age:29, city:'Санкт-Петербург', bio:'Люблю утренние пробежки, стартапы и живое общение. Открыт к новым знакомствам и серьёзным отношениям.', tags:['IT','Спорт','Путешествия'], img:'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80'},
  {name:'София', age:24, city:'Москва', bio:'Готова к новым эмоциям, творческим проектам и уютным вечерам. Люблю музыку, кафе и разговоры до ночи.', tags:['Кино','Музыка','Кафе'], img:'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80'}
]

let currentIndex = 0

// Returns the currently visible profiles (after filtering) or the full list
function getAllCandidateProfiles() {
  const me = getMyProfile()
  const myId = me && me._id
  const savedProfiles = getDatabaseProfiles().filter((p) => p && p.name && p.city && p._id !== myId)
  const uniqueSaved = []
  const seenIds = new Set()

  savedProfiles.forEach((profile) => {
    if (!profile || !profile._id || seenIds.has(profile._id)) return
    seenIds.add(profile._id)
    uniqueSaved.push(profile)
  })

  const combined = [...uniqueSaved, ...profiles]
  return combined
}

function getVisibleProfiles() {
  if (Array.isArray(window.visibleProfiles) && window.visibleProfiles.length) {
    return window.visibleProfiles
  }
  return getAllCandidateProfiles()
}

function refreshGlobalProfiles() {
  window.profiles = getAllCandidateProfiles()
}

function normalizeGender(value) {
  if (!value) return 'unknown'
  const normalized = String(value).trim().toLowerCase()
  if (normalized.includes('жен') || normalized.includes('дев') || normalized === 'female') return 'female'
  if (normalized.includes('муж') || normalized.includes('пар') || normalized === 'male') return 'male'
  return 'unknown'
}

function randomDistanceKm(max = 50) {
  const n = Math.floor(Math.random() * max) + 1
  return `${n} км`
}

profiles.forEach(profile => {
  if (!profile.distance) {
    profile.distance = randomDistanceKm(50)
  }
})

function renderCityWithGeo(city, distanceText, showGeo = true) {
  if (!showGeo) return city
  const dist = distanceText || randomDistanceKm(50)
  return `${city} <span class="geo-badge" title="Расстояние до вас"><svg viewBox="0 0 64 80" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="20" r="18" fill="#ff4b6b" /><ellipse cx="42" cy="12" rx="6" ry="6" fill="#ff9aa4" opacity="0.65" /><rect x="28" y="36" width="8" height="34" rx="4" fill="#dbe7ee" /></svg><span class="geo-distance">от тебя ${dist}</span></span>`
}

function setProfile(index) {
  if (!photoEl || !profileNameEl || !profileCityEl || !profileBioEl) return
  const list = getVisibleProfiles()
  const profile = list[index]
  if (!profile) return

  const imageUrl = profile.img || profile.photo || ''
  if (imageUrl) {
    photoEl.style.backgroundImage = `url('${imageUrl}')`
    photoEl.textContent = ''
    photoEl.classList.remove('avatar-letter')
  } else {
    photoEl.style.backgroundImage = ''
    photoEl.textContent = profile.avatar || (profile.name ? profile.name[0].toUpperCase() : 'A')
    photoEl.classList.add('avatar-letter')
  }

  if (photoNextEl) {
    photoNextEl.style.opacity = '0'
  }
  profileNameEl.textContent = `${profile.name}, ${profile.age} лет`
  profileCityEl.innerHTML = renderCityWithGeo(profile.city, profile.distance)
  profileBioEl.textContent = profile.bio
  // Reset scroll of the surrounding info card so description starts at top
  const infoCard = profileBioEl.closest && profileBioEl.closest('.info-card')
  if (infoCard) infoCard.scrollTop = 0
}

// ------------------ Client-only persistence & geo helpers ------------------
function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (v) => v * Math.PI / 180
  const R = 6371 // km
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}


function getMyProfile() {
  return getDatabaseUser()
}

function saveMyProfile(profile) {
  saveDatabaseUser(profile)
}

function getSavedSearchFilters() {
  return getDatabaseFilters()
}

function saveSearchFilters(filters) {
  saveDatabaseFilters(filters)
}

function getActivePillValue(container, defaultValue) {
  const active = container?.querySelector('.pill.active')
  return active?.dataset.value || defaultValue
}

function setActivePillByValue(container, value) {
  if (!container) return
  const pills = container.querySelectorAll('.pill')
  pills.forEach((pill) => pill.classList.toggle('active', pill.dataset.value === value))
}

function getCurrentSearchFilters() {
  const geoActive = (geoToggle && geoToggle.getAttribute('aria-pressed') === 'true')
  return {
    location: (locationInput && locationInput.value) || '',
    geo: geoActive,
    geoRadius: geoActive && geoRadiusRange ? Number(geoRadiusRange.value) : null,
    interest: getActivePillValue(interestPills, 'all'),
    show: getActivePillValue(showPills, 'all'),
    ageMin: Number(ageMin?.value || 14),
    ageMax: Number(ageMax?.value || 60),
    wantsChat: chatToggle?.getAttribute('aria-pressed') === 'true',
    wantsRelationship: relationshipToggle?.getAttribute('aria-pressed') === 'true'
  }
}

function restoreSearchFilters() {
  const saved = getSavedSearchFilters()
  if (!saved) return
  if (locationInput) locationInput.value = saved.location || ''
  if (geoToggle) {
    const active = Boolean(saved.geo)
    geoToggle.setAttribute('aria-pressed', String(active))
    geoToggle.classList.toggle('active', active)
    setGeoRadiusVisible(active)
  }
  if (geoRadiusRange && typeof saved.geoRadius === 'number') {
    updateGeoRadius(saved.geoRadius)
  }
  setActivePillByValue(interestPills, saved.interest || 'all')
  setActivePillByValue(showPills, saved.show || 'all')
  if (ageMin) ageMin.value = saved.ageMin || 14
  if (ageMax) ageMax.value = saved.ageMax || 60
  if (ageMinNumber) ageMinNumber.value = saved.ageMin || 14
  if (ageMaxNumber) ageMaxNumber.value = saved.ageMax || 60
  setRangeLabel()
  if (chatToggle) {
    const active = Boolean(saved.wantsChat)
    chatToggle.setAttribute('aria-pressed', String(active))
    chatToggle.classList.toggle('active', active)
  }
  if (relationshipToggle) {
    const active = Boolean(saved.wantsRelationship)
    relationshipToggle.setAttribute('aria-pressed', String(active))
    relationshipToggle.classList.toggle('active', active)
  }
}

function ensureProfileCoords(profile, userProfile) {
  if (!profile || typeof profile !== 'object') return false
  let changed = false

  if (!profile._id) {
    profile._id = `profile-${Date.now()}-${Math.floor(Math.random() * 10000)}`
    changed = true
  }

  if (typeof profile.lat !== 'number' || typeof profile.lon !== 'number') {
    if (userProfile && typeof userProfile.lat === 'number' && typeof userProfile.lon === 'number') {
      profile.lat = userProfile.lat + (Math.random() - 0.5) * 1.0
      profile.lon = userProfile.lon + (Math.random() - 0.5) * 1.0
    } else {
      profile.lat = 50 + (Math.random() - 0.5) * 20
      profile.lon = 37 + (Math.random() - 0.5) * 40
    }
    changed = true
  }

  if (userProfile && typeof userProfile.lat === 'number' && typeof userProfile.lon === 'number') {
    const d = Math.round(haversine(userProfile.lat, userProfile.lon, profile.lat, profile.lon))
    const distanceText = `${d} км`
    if (profile.distance !== distanceText) {
      profile.distance = distanceText
      changed = true
    }
  } else if (!profile.distance) {
    profile.distance = randomDistanceKm(150)
    changed = true
  }

  if (!profile.avatar && profile.name) {
    profile.avatar = profile.name[0].toUpperCase()
    changed = true
  }

  return changed
}

function ensureProfilesHaveCoords(userProfile) {
  const savedProfiles = getDatabaseProfiles()
  let updatedSaved = false

  if (Array.isArray(savedProfiles)) {
    savedProfiles.forEach((p) => {
      if (ensureProfileCoords(p, userProfile)) {
        updatedSaved = true
      }
    })
    if (updatedSaved) {
      saveDatabaseProfiles(savedProfiles)
    }
  }

  profiles.forEach((p) => {
    ensureProfileCoords(p, userProfile)
  })

  refreshGlobalProfiles()
}

function requestAndSaveGeo(profile, cb) {
  if (!navigator.geolocation) return cb && cb(null)
  navigator.geolocation.getCurrentPosition((pos) => {
    profile.lat = pos.coords.latitude
    profile.lon = pos.coords.longitude
    profile.geoEnabled = true
    saveMyProfile(profile)
    cb && cb(profile)
  }, (err) => {
    profile.geoEnabled = false
    saveMyProfile(profile)
    cb && cb(profile)
  }, { enableHighAccuracy: false, timeout: 10000 })
}

function recordLike(profile) {
  try {
    const id = profile && (profile._id ?? profile.id ?? `${profile.name}_${profile.city}_${profile.age}`)
    if (!id) return
    addDatabaseLike(id)
    if (Math.random() < 0.25 && !getDatabaseMatches().includes(id)) {
      addDatabaseMatch(id)
    }
  } catch (err) {}
}


function preloadProfileImages() {
  getVisibleProfiles().forEach(profile => {
    const img = new Image()
    img.src = profile.img
  })
}

function changeProfile(direction) {
  const list = getVisibleProfiles()
  const photoCard = document.querySelector('.photo-card')
  const infoCard = document.querySelector('.info-card')

  // If any element missing, fallback to immediate change
  if (!photoCard || !infoCard || !photoNextEl) {
    const total = list.length || profiles.length
    currentIndex = (currentIndex + direction + total) % total
    setProfile(currentIndex)
    return
  }

  photoCard.classList.add('anim-out')
  infoCard.classList.add('anim-out')

  const total = list.length || profiles.length
  const nextIndex = (currentIndex + direction + total) % total
  const nextProfile = list[nextIndex]
  const nextImage = new Image()
  let swapped = false

  const finishSwap = () => {
    if (swapped) return
    swapped = true

    currentIndex = nextIndex
    setProfile(currentIndex)

    photoCard.classList.remove('anim-out')
    infoCard.classList.remove('anim-out')
  }

  const swapProfile = () => {
    if (swapped) return
    photoNextEl.style.backgroundImage = `url('${nextProfile.img}')`
    photoNextEl.style.opacity = '1'

    setTimeout(() => {
      finishSwap()
    }, 260)
  }

  nextImage.onload = swapProfile
  nextImage.onerror = swapProfile
  nextImage.src = nextProfile.img

  setTimeout(() => {
    if (!swapped) swapProfile()
  }, 800)
}

function showProfilePage() {
  if (profilePage) profilePage.classList.remove('hidden')
  if (profileEditPage) profileEditPage.classList.add('hidden')
  if (filterPage) filterPage.classList.add('hidden')
  if (filterBtn) filterBtn.classList.remove('active')
  document.body.classList.remove('filter-open')
  document.body.classList.remove('profile-edit-open')
}
window.showProfilePage = showProfilePage
window.showProfileEditPage = showProfileEditPage

function showFilterPage() {
  if (profilePage) profilePage.classList.add('hidden')
  if (profileEditPage) profileEditPage.classList.add('hidden')
  if (filterPage) filterPage.classList.remove('hidden')
  if (notificationsPage) notificationsPage.classList.add('hidden')
  if (filterBtn) filterBtn.classList.add('active')
  if (notificationsBtn) notificationsBtn.classList.remove('active')
  document.body.classList.add('filter-open')
  document.body.classList.remove('profile-edit-open')
}

function showNotificationsPage() {
  if (profilePage) profilePage.classList.add('hidden')
  if (profileEditPage) profileEditPage.classList.add('hidden')
  if (filterPage) filterPage.classList.add('hidden')
  if (notificationsPage) notificationsPage.classList.remove('hidden')
  if (filterBtn) filterBtn.classList.remove('active')
  if (notificationsBtn) notificationsBtn.classList.add('active')
  document.body.classList.remove('filter-open')
  document.body.classList.remove('profile-edit-open')
}
window.showNotificationsPage = showNotificationsPage

function showProfileEditPage() {
  if (profilePage) profilePage.classList.add('hidden')
  if (profileEditPage) profileEditPage.classList.remove('hidden')
  if (filterPage) filterPage.classList.add('hidden')
  if (filterBtn) filterBtn.classList.remove('active')
  document.body.classList.remove('filter-open')
  document.body.classList.add('profile-edit-open')
}

function setRangeLabel() {
  const min = Math.min(Number(ageMin.value), Number(ageMax.value))
  const max = Math.max(Number(ageMin.value), Number(ageMax.value))
  ageValue.textContent = `${min}-${max}`
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function syncRange(slider) {
  let min = clamp(Number(ageMin.value), 14, 60)
  let max = clamp(Number(ageMax.value), 14, 60)

  if (slider === ageMin && min > max) {
    max = min
  }

  if (slider === ageMax && max < min) {
    min = max
  }

  ageMin.value = min
  ageMinNumber.value = min
  ageMax.value = max
  ageMaxNumber.value = max
  ageValue.textContent = `${min}-${max}`
}

function syncNumber(input) {
  let min = clamp(Number(ageMinNumber.value), 14, 60)
  let max = clamp(Number(ageMaxNumber.value), 14, 60)

  if (input === ageMinNumber && min > max) {
    max = min
  }

  if (input === ageMaxNumber && max < min) {
    min = max
  }

  ageMin.value = min
  ageMinNumber.value = min
  ageMax.value = max
  ageMaxNumber.value = max
  ageValue.textContent = `${min}-${max}`
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-zа-яё0-9]+/g, '')
}

function closeLocationSuggestions() {
  if (locationSuggestions) {
    locationSuggestions.classList.add('hidden')
    locationSuggestions.innerHTML = ''
  }
}

function closeProfileCitySuggestions() {
  if (profileCitySuggestions) {
    profileCitySuggestions.classList.add('hidden')
    profileCitySuggestions.innerHTML = ''
  }
}

function selectLocation(value) {
  locationInput.value = value
  closeLocationSuggestions()
}

function updateCitySuggestions(query, suggestionsElement) {
  if (!suggestionsElement) return

  const value = query.trim().toLowerCase()
  if (!value) {
    suggestionsElement.classList.add('hidden')
    suggestionsElement.innerHTML = ''
    return
  }

  const normalizedQuery = normalize(value)
  const exact = locationSynonyms[normalizedQuery]
  const matchesMap = new Map()

  if (exact) {
    matchesMap.set(exact, 1)
  }

  locationCities.forEach((city) => {
    const normalizedCity = normalize(city)
    if (normalizedCity.includes(normalizedQuery) && !matchesMap.has(city)) {
      matchesMap.set(city, normalizedCity.startsWith(normalizedQuery) ? 0 : 1)
    }
  })

  const sorted = Array.from(matchesMap.entries())
    .sort(([aCity, aScore], [bCity, bScore]) => aScore - bScore || aCity.localeCompare(bCity, 'ru'))
    .map(([city]) => city)

  // Defensive: ensure search button triggers filters even if init failed
  if (searchBtn) {
    try {
      searchBtn.addEventListener('click', (e) => { e.preventDefault(); applyFilters() })
    } catch (err) {}
  }

  if (!sorted.length) {
    suggestionsElement.classList.add('hidden')
    suggestionsElement.innerHTML = ''
    return
  }

  suggestionsElement.innerHTML = sorted
    .slice(0, 6)
    .map((city) => `<button type="button" class="autocomplete-item">${city}</button>`)
    .join('')

  suggestionsElement.classList.remove('hidden')
}

function updateLocationSuggestions(query) {
  updateCitySuggestions(query, locationSuggestions)
}

function updateGeoRadius(value) {
  const radius = clamp(Number(value), 5, 150)
  geoRadiusRange.value = radius
  geoRadiusNumber.value = radius
  geoRadiusValue.textContent = `${radius} км`
}

function setGeoRadiusVisible(visible) {
  if (!geoRadiusContainer) return
  geoRadiusContainer.classList.toggle('hidden', !visible)
}

function closeSettingsMenu() {
  if (!settingsMenu) return
  settingsMenu.classList.remove('visible')
  settingsMenu.classList.add('hidden')
  settingsBtn?.classList.remove('active')
  settingsBtn?.setAttribute('aria-expanded', 'false')
}

function toggleSettingsMenu() {
  if (!settingsMenu) return
  const isOpen = settingsMenu.classList.toggle('visible')
  settingsMenu.classList.toggle('hidden', !isOpen)
  settingsBtn?.classList.toggle('active', isOpen)
  settingsBtn?.setAttribute('aria-expanded', String(isOpen))
}

function setActivePill(container, button) {
  const buttons = container.querySelectorAll('.pill')
  buttons.forEach((pill) => pill.classList.toggle('active', pill === button))
}

function applyFilters() {
  try {
    const filters = getCurrentSearchFilters()
    saveSearchFilters(filters)
    const me = getMyProfile()
    const normalizedLocation = (filters.location || '').trim().toLowerCase()
    function guessGender(name) {
      if (!name) return 'unknown'
      const last = name.trim().slice(-1).toLowerCase()
      return (last === 'а' || last === 'я') ? 'female' : 'male'
    }

    let interest = filters.interest
    if (interest === 'men') interest = 'male'
    if (interest === 'women') interest = 'female'

    const results = getAllCandidateProfiles().filter((p) => {
      if (!p) return false
      const age = Number(p.age)
      if (!Number.isNaN(age)) {
        if (age < filters.ageMin || age > filters.ageMax) return false
      }
      if (normalizedLocation) {
        if (!p.city || !p.city.toLowerCase().includes(normalizedLocation)) return false
      }
      if (interest && interest !== 'all') {
        const g = p.gender ? normalizeGender(p.gender) : guessGender(p.name)
        if (interest === 'male' && g !== 'male') return false
        if (interest === 'female' && g !== 'female') return false
      }
      if (filters.geo && me && me.lat && me.lon && filters.geoRadius) {
        if (typeof p.lat === 'number' && typeof p.lon === 'number') {
          const d = haversine(me.lat, me.lon, p.lat, p.lon)
          if (d > filters.geoRadius) return false
        }
      }
      return true
    })

    window.visibleProfiles = results
    currentIndex = 0
    if (results.length) {
      preloadProfileImages()
      setProfile(0)
      showProfilePage()
    } else {
      if (profileNameEl) profileNameEl.textContent = 'Нет результатов'
      if (profileCityEl) profileCityEl.textContent = ''
      if (profileBioEl) profileBioEl.textContent = ''
      showProfilePage()
    }
  } catch (err) {
    console.error('applyFilters error', err)
    if (profileNameEl) profileNameEl.textContent = 'Ошибка поиска'
    alert('Ошибка при применении фильтров — посмотрите консоль.')
  }
}

function setTheme(theme) {
  const normalized = theme === 'dark' || theme === 'pink' || theme === 'sunset' ? theme : 'default'
  document.body.classList.remove('theme-dark', 'theme-pink', 'theme-sunset')
  if (normalized !== 'default') {
    document.body.classList.add(`theme-${normalized}`)
  }
  if (themeToggleBtn) {
    themeToggleBtn.dataset.theme = normalized
    themeToggleBtn.title = normalized === 'default' ? 'Тема по умолчанию' : `Тема ${normalized}`
    const icon = themeToggleBtn.querySelector('img')
    if (icon) {
      icon.src = normalized === 'dark'
        ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nKVUSxbEMAjSvNz/ys5mkmcJUtuyVCH4ad1uEBHB4u7uNP5EpEIWPwRRDJ1U+RWfX10hb7DC7Eo9xHKz4461WXEOh/GHemCJsthYZGxVCWUOcqciV66Y6K7pbhe3WnVzzFCh8/gW9ATmLoupLdPjXKTKmZrhbctPP8XBirpiDPtsVBuYV7i0XM1NLgHvkBV1xNo/WBRjJIVyy2/EzMx+bP2MRqYvUQgAAAAASUVORK5CYII='
        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nK2UUQ7AIAhDi/H+V3ZfJggtYrJ+LdY+gbkZ7lpi3dqLBUTJ0kMBi3uUvwBg/lDVkRtio6+qOih5UxmXoKkMq3A1DtjQtDZcOLZagXzmyE6WaFTFoMnowihoi82w0vVwDzToOcZOZGf0cgaP+XKGnZafPsUhNnVhSf7ayDaILxVbVnOrYOkeMnVg7R9shD2pesvPMAD4ANMgIzEzlPAHAAAAAElFTkSuQmCC'
    }
  }
  try {
    localStorage.setItem('theme', normalized)
  } catch (err) {}
}

function cycleTheme() {
  const current = themeToggleBtn?.dataset.theme || 'default'
  const next = current === 'default' ? 'dark' : current === 'dark' ? 'pink' : current === 'pink' ? 'sunset' : 'default'
  setTheme(next)
}

async function init() {
  const savedTheme = (() => {
    try { return localStorage.getItem('theme') } catch (err) { return null }
  })() || 'default'
  setTheme(savedTheme)

  const webAppReady = await waitForTelegramWebApp(1000)
  if (webAppReady) {
    const webapp = getTelegramWebAppObject()
    try {
      if (webapp?.ready) webapp.ready()
      else if (window.Telegram?.WebApp?.ready) window.Telegram.WebApp.ready()
    } catch (err) {
      console.warn('Telegram WebApp ready failed', err)
    }
  }

  const telegramUser = getTelegramIdFromWebApp()
  if (telegramUser && telegramUser.id) {
    const me = getMyProfile() || {}
    me.telegram_id = String(telegramUser.id)
    me.telegram_username = telegramUser.username || telegramUser.user_name || me.telegram_username
    me.telegram_name = telegramUser.name || telegramUser.first_name || telegramUser.last_name || [telegramUser.first_name, telegramUser.last_name].filter(Boolean).join(' ') || me.telegram_name
    saveMyProfile(me)
    hideTelegramLoginFallback()
  } else {
    showTelegramLoginFallback()
  }

  const hasMainAppUi = Boolean(photoEl && profileNameEl && profileCityEl && profileBioEl && likeBtn && skipBtn && filterBtn)

    if (hasMainAppUi) {
      const supabaseReady = await initSupabase()
        if (supabaseReady) initAuth()
      if (supabaseReady) {
        console.log('VVV: Supabase ready, syncing remote profiles')
        await syncRemoteProfilesToLocal()
      } else {
        console.warn('VVV: Supabase not ready at init')
      }

        const savedFilters = getSavedSearchFilters()
      restoreSearchFilters()
      if (savedFilters) {
        applyFilters()
      } else {
        preloadProfileImages()
        setProfile(currentIndex)
      }
    setRangeLabel()

    const me = getMyProfile()
    if (me) {
      try { if (profileNameInput) profileNameInput.value = me.name || '' } catch(e){}
      try { if (profileAgeInput) profileAgeInput.value = me.age || '' } catch(e){}
      try { if (profileCityInput) profileCityInput.value = me.city || '' } catch(e){}
      try { if (profileBioInput) profileBioInput.value = me.bio || '' } catch(e){}
      if (me.photo && profileAvatar) {
        profileAvatar.style.backgroundImage = `url('${me.photo}')`
        profileAvatar.textContent = ''
        profileAvatar.classList.add('has-image')
      } else if (profileAvatar) {
        profileAvatar.style.backgroundImage = ''
        profileAvatar.textContent = me.avatar || (me.name ? me.name[0].toUpperCase() : 'A')
        profileAvatar.classList.toggle('has-image', false)
      }
    }
    ensureProfilesHaveCoords(me)

    likeBtn.addEventListener('click', () => {
      if (filterPage && !filterPage.classList.contains('hidden')) {
        showProfilePage()
        return
      }
      if (notificationsPage && !notificationsPage.classList.contains('hidden')) {
        showProfilePage()
        return
      }
      const list = getVisibleProfiles()
      const current = list[currentIndex]
      if (current) recordLike(current)
      changeProfile(1)
    })
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        if (filterPage && !filterPage.classList.contains('hidden')) {
          showProfilePage()
          return
        }
        if (notificationsPage && !notificationsPage.classList.contains('hidden')) {
          showProfilePage()
          return
        }
        changeProfile(1)
      })
    }
    filterBtn.addEventListener('click', () => {
      if (filterPage && !filterPage.classList.contains('hidden')) {
        showProfilePage()
        return
      }
      if (notificationsPage && !notificationsPage.classList.contains('hidden')) {
        showProfilePage()
        return
      }
      // show filter page
      if (filterPage && filterPage.classList.contains('hidden')) {
        showFilterPage()
        return
      }
      showProfilePage()
    })
    if (notificationsBtn) {
      notificationsBtn.addEventListener('click', () => {
        if (notificationsPage) {
          if (notificationsPage.classList.contains('hidden')) {
            showNotificationsPage()
          }
          return
        }
        window.location.href = 'notifications.html'
      })
    }
    if (settingsBtn) {
      settingsBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        toggleSettingsMenu()
      })
    }
    
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        cycleTheme()
      })
    }
    if (interestPills) {
      interestPills.addEventListener('click', (event) => {
        const button = event.target.closest('.pill')
        if (!button) return
        setActivePill(interestPills, button)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (showPills) {
      showPills.addEventListener('click', (event) => {
        const button = event.target.closest('.pill')
        if (!button) return
        setActivePill(showPills, button)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (ageMin) {
      ageMin.addEventListener('input', () => {
        syncRange(ageMin)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (ageMax) {
      ageMax.addEventListener('input', () => {
        syncRange(ageMax)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (ageMinNumber) {
      ageMinNumber.addEventListener('input', () => {
        syncNumber(ageMinNumber)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (ageMaxNumber) {
      ageMaxNumber.addEventListener('input', () => {
        syncNumber(ageMaxNumber)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (chatToggle) {
      chatToggle.addEventListener('click', () => {
        const pressed = chatToggle.getAttribute('aria-pressed') === 'true'
        chatToggle.setAttribute('aria-pressed', String(!pressed))
        chatToggle.classList.toggle('active', !pressed)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (relationshipToggle) {
      relationshipToggle.addEventListener('click', () => {
        const pressed = relationshipToggle.getAttribute('aria-pressed') === 'true'
        relationshipToggle.setAttribute('aria-pressed', String(!pressed))
        relationshipToggle.classList.toggle('active', !pressed)
        saveSearchFilters(getCurrentSearchFilters())
      })
    }
    if (profileAvatar && profileAvatarInput) {
      // Clicking avatar opens a full-screen preview overlay (separate elements)
      profileAvatar.addEventListener('click', () => {
        const existingFull = document.getElementById('avatarFull')
        const existingBackdrop = document.getElementById('avatarBackdrop')
        if (existingFull) {
          existingFull.remove()
          if (existingBackdrop) existingBackdrop.remove()
          return
        }
        if (!profileAvatar.classList.contains('has-image')) {
          // no image yet — open file chooser
          profileAvatarInput.click()
          return
        }
        const backdrop = document.createElement('div')
        backdrop.className = 'avatar-backdrop'
        backdrop.id = 'avatarBackdrop'

        const full = document.createElement('div')
        full.className = 'avatar-full'
        full.id = 'avatarFull'
        const bg = profileAvatar.style.backgroundImage || ''
        full.style.backgroundImage = bg

        const close = document.createElement('button')
        close.className = 'close-btn'
        close.textContent = 'Закрыть'
        close.addEventListener('click', () => { full.remove(); backdrop.remove() })
        full.appendChild(close)

        document.body.appendChild(backdrop)
        document.body.appendChild(full)

        backdrop.addEventListener('click', () => { full.remove(); backdrop.remove() })
      })
      if (photoAddBtn) photoAddBtn.addEventListener('click', () => profileAvatarInput.click())
      profileAvatarInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (ev) => {
          const url = ev.target.result
          profileAvatar.style.backgroundImage = `url(${url})`
          profileAvatar.textContent = ''
          profileAvatar.classList.add('has-image')
          if (photoEl) photoEl.style.backgroundImage = `url(${url})`
        }
        reader.readAsDataURL(file)
      })
    }
    if (profileGeoToggle) {
      profileGeoToggle.addEventListener('click', () => {
        const pressed = profileGeoToggle.getAttribute('aria-pressed') === 'true'
        const active = !pressed
        profileGeoToggle.setAttribute('aria-pressed', String(active))
        profileGeoToggle.classList.toggle('active', active)
      })
    }
    if (geoToggle && geoRadiusRange && geoRadiusNumber) {
      geoToggle.addEventListener('click', () => {
        const pressed = geoToggle.getAttribute('aria-pressed') === 'true'
        const active = !pressed
        geoToggle.setAttribute('aria-pressed', String(active))
        geoToggle.classList.toggle('active', active)
        setGeoRadiusVisible(active)
        if (active) {
          updateGeoRadius(geoRadiusRange.value)
        }
        saveSearchFilters(getCurrentSearchFilters())
      })
      geoRadiusRange.addEventListener('input', () => {
        updateGeoRadius(geoRadiusRange.value)
      })
      geoRadiusNumber.addEventListener('input', () => {
        updateGeoRadius(geoRadiusNumber.value)
      })
    }
    if (locationInput) {
      locationInput.addEventListener('input', (event) => {
        updateLocationSuggestions(event.target.value)
        saveSearchFilters(getCurrentSearchFilters())
      })
      locationInput.addEventListener('focus', () => {
        updateLocationSuggestions(locationInput.value)
      })
    }
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.autocomplete-list') && event.target !== locationInput && event.target !== profileCityInput) {
        closeLocationSuggestions()
        closeProfileCitySuggestions()
      }
      if (settingsMenu && settingsMenu.classList.contains('visible') && !event.target.closest('.settings-menu-wrap')) {
        closeSettingsMenu()
      }
    })
    if (locationSuggestions) {
      locationSuggestions.addEventListener('click', (event) => {
        const button = event.target.closest('.autocomplete-item')
        if (!button) return
        selectLocation(button.textContent)
      })
    }
    if (profileCitySuggestions) {
      profileCitySuggestions.addEventListener('click', (event) => {
        const button = event.target.closest('.autocomplete-item')
        if (!button) return
        profileCityInput.value = button.textContent
        closeProfileCitySuggestions()
      })
    }
    if (profileCityInput) {
      profileCityInput.addEventListener('input', (event) => {
        updateCitySuggestions(event.target.value, profileCitySuggestions)
      })
      profileCityInput.addEventListener('focus', () => {
        updateCitySuggestions(profileCityInput.value, profileCitySuggestions)
      })
    }
    if (profileGoalPills) {
      profileGoalPills.addEventListener('click', (event) => {
        const button = event.target.closest('.pill')
        if (!button) return
        setActivePill(profileGoalPills, button)
      })
    }
    if (profileEditBtn) profileEditBtn.addEventListener('click', showProfileEditPage)
    if (profileToSearchBtn) profileToSearchBtn.addEventListener('click', showFilterPage)
    if (humanCheckBtn) {
      humanCheckBtn.addEventListener('click', async () => {
        const me = getMyProfile() || {}
        if (window.Telegram?.WebApp) {
          try {
            window.Telegram.WebApp.ready()
          } catch (err) {
            console.warn('Telegram WebApp ready failed', err)
          }
        }

        const botCheckResult = getTelegramIdFromWebApp()
        if (botCheckResult && botCheckResult.id) {
          me.telegram_id = String(botCheckResult.id)
          me.telegram_username = botCheckResult.username || botCheckResult.user_name || me.telegram_username
          me.telegram_name = botCheckResult.name || botCheckResult.first_name || botCheckResult.last_name || me.telegram_name
          saveMyProfile(me)
          if (humanCheckStatus) {
            humanCheckStatus.textContent = 'Telegram ID зафиксирован. Можно сохранить анкету.'
          }
        } else {
          const debug = getTelegramWebAppDebugInfo()
          console.log('Telegram WebApp debug:', debug)
          if (humanCheckStatus) {
            if (!debug.hasTelegram) {
              humanCheckStatus.textContent = 'В текущем окне Telegram не обнаружен. Откройте через кнопку Web App в боте или используйте вход через Telegram ниже.'
            } else if (!debug.hasTelegramWebAppObject) {
              humanCheckStatus.textContent = 'Telegram найден, но WebApp объект отсутствует. Проверьте запуск из Web App или войдите через Telegram ниже.'
            } else if (!debug.hasInitDataUser) {
              humanCheckStatus.textContent = 'WebApp найден, но данные пользователя не доступны. Попробуйте открыть через кнопку бота или войдите через Telegram ниже.'
            } else {
              humanCheckStatus.textContent = 'Telegram WebApp не обнаружен. Откройте страницу через Telegram или войдите через Telegram ниже.'
            }
          }
          showTelegramLoginFallback()
        }
      })
    }
    if (profileSaveBtn && profileNameInput && profileAgeInput && profileCityInput && profileBioInput && profileAvatar) {
      profileSaveBtn.addEventListener('click', async () => {
        const name = profileNameInput.value.trim() || 'Алина'
        const age = profileAgeInput.value.trim()
        const city = profileCityInput.value.trim() || 'Казань'
        const bio = profileBioInput.value.trim() || 'Описание профиля, короткая биография и интересы.'
        const geoEnabled = profileGeoToggle?.getAttribute('aria-pressed') === 'true'

        const me = getMyProfile() || {}
        me.name = name
        me.age = age
        me.city = city
        me.bio = bio
        me.gender = profileGenderSelect?.value || me.gender || ''
        me.geoEnabled = geoEnabled
        const bg = profileAvatar?.style?.backgroundImage || ''
        const photoUrl = bg.startsWith('url(') ? bg.slice(4, -1).replace(/^"|"$/g, '') : ''
        if (photoUrl) {
          me.photo = photoUrl
        } else {
          delete me.photo
        }
        me.avatar = profileAvatar.textContent || (name ? name[0].toUpperCase() : 'A')
        me._id = me._id || `profile-${Date.now()}-${Math.floor(Math.random() * 10000)}`
        me.createdAt = me.createdAt || Date.now()

        const finishSave = async (p) => {
          saveMyProfile(p)
          refreshGlobalProfiles()
          profileNameEl.textContent = p.age ? `${p.name}, ${p.age}` : p.name
          if (p.geoEnabled) {
            profileCityEl.innerHTML = renderCityWithGeo(p.city, p.distance)
          } else {
            profileCityEl.textContent = p.city
          }
          profileBioEl.textContent = p.bio
          if (p.photo) {
            profileAvatar.style.backgroundImage = `url('${p.photo}')`
            profileAvatar.textContent = ''
            profileAvatar.classList.add('has-image')
          } else {
            profileAvatar.style.backgroundImage = ''
            profileAvatar.textContent = p.avatar
            profileAvatar.classList.remove('has-image')
          }
          ensureProfilesHaveCoords(p)

          if (supabaseEnabled()) {
            console.log('VVV: direct Supabase save path triggered', { profileId: p._id, supabaseClient: Boolean(supabaseClient) })
            addOrUpdateDatabaseProfile(p)
            await syncSupabaseProfile(p)
            console.log('VVV: profile synced to Supabase', p._id)
            window.location.href = 'profile.html'
            return
          }

          console.warn('VVV: Supabase not enabled, saving locally')
          addOrUpdateDatabaseProfile(p)
          window.location.href = 'profile.html'
          return
        }

        if (geoEnabled) {
          requestAndSaveGeo(me, finishSave)
        } else {
          await finishSave(me)
        }
      })
    }
    if (searchBtn) searchBtn.addEventListener('click', applyFilters)

    const profileParam = new URLSearchParams(window.location.search).get('profile')
    if (profileParam) {
      const profileId = isNaN(Number(profileParam)) ? profileParam : Number(profileParam)
      const list = getVisibleProfiles()
      const targetIndex = list.findIndex((p, idx) => p._id === profileId || p.id === profileId || idx === profileId)
      if (targetIndex >= 0) {
        currentIndex = targetIndex
        setProfile(currentIndex)
        showProfilePage()
      }
    }

    if (window.location.hash === '#edit' || new URLSearchParams(window.location.search).get('edit') === '1') {
      showProfileEditPage()
    }
  } else {
    if (notificationsBtn) {
      notificationsBtn.classList.add('active')
    }
    if (settingsBtn) {
      settingsBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        toggleSettingsMenu()
      })
    }
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        cycleTheme()
      })
    }
    document.addEventListener('click', (event) => {
      if (settingsMenu && settingsMenu.classList.contains('visible') && !event.target.closest('.settings-menu-wrap')) {
        closeSettingsMenu()
      }
    })
  }
}

init()
refreshGlobalProfiles()

// Ensure back button works on pages without the main app UI (notifications page etc.)
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
}

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
const themeToggleBtn = document.getElementById('themeToggleBtn')
const settingsBtn = document.getElementById('settingsBtn')
const settingsMenu = document.getElementById('settingsMenu')
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
  try {
    const geoActive = (geoToggle && geoToggle.getAttribute('aria-pressed') === 'true')
    const filters = {
      location: (locationInput && locationInput.value) || '',
      geo: geoActive,
      geoRadius: geoActive && geoRadiusRange ? Number(geoRadiusRange.value) : null,
      // support both 'men'/'women' and 'male'/'female' values
      interest: (interestPills?.querySelector('.pill.active')?.dataset.value) || 'all',
      show: (showPills?.querySelector('.pill.active')?.dataset.value) || 'all',
      ageMin: Number(ageMin?.value || 14),
      ageMax: Number(ageMax?.value || 60),
      wantsChat: chatToggle?.getAttribute('aria-pressed') === 'true',
      wantsRelationship: relationshipToggle?.getAttribute('aria-pressed') === 'true'
    }
    const me = getMyProfile()
    const normalizedLocation = (filters.location || '').trim().toLowerCase()
    function guessGender(name) {
      if (!name) return 'unknown'
      const last = name.trim().slice(-1).toLowerCase()
      return (last === 'а' || last === 'я') ? 'female' : 'male'
    }

    // normalize interest values
    let interest = filters.interest
    if (interest === 'men') interest = 'male'
    if (interest === 'women') interest = 'female'

    const results = profiles.filter((p) => {
      if (!p) return false
      if (typeof p.age === 'number') {
        if (p.age < filters.ageMin || p.age > filters.ageMax) return false
      }
      if (normalizedLocation) {
        if (!p.city || !p.city.toLowerCase().includes(normalizedLocation)) return false
      }
      if (interest && interest !== 'all') {
        const g = guessGender(p.name)
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
function getVisibleProfiles() {
  if (window.visibleProfiles && Array.isArray(window.visibleProfiles) && window.visibleProfiles.length) return window.visibleProfiles
  return profiles
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

function renderCityWithGeo(city, distanceText) {
  const dist = distanceText || randomDistanceKm(50)
  return `${city} <span class="geo-badge" title="Расстояние до вас"><svg viewBox="0 0 64 80" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="20" r="18" fill="#ff4b6b" /><ellipse cx="42" cy="12" rx="6" ry="6" fill="#ff9aa4" opacity="0.65" /><rect x="28" y="36" width="8" height="34" rx="4" fill="#dbe7ee" /></svg><span class="geo-distance">от тебя ${dist}</span></span>`
}

function setProfile(index) {
  if (!photoEl || !profileNameEl || !profileCityEl || !profileBioEl) return
  const list = getVisibleProfiles()
  const profile = list[index]
  if (!profile) return
  photoEl.style.backgroundImage = `url('${profile.img}')`
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
  try {
    const raw = localStorage.getItem('vvv_user')
    return raw ? JSON.parse(raw) : null
  } catch (err) { return null }
}

function saveMyProfile(profile) {
  try {
    localStorage.setItem('vvv_user', JSON.stringify(profile))
  } catch (err) {}
}

function ensureProfilesHaveCoords(userProfile) {
  profiles.forEach((p, i) => {
    if (!p._id) p._id = i
    if (!p.lat || !p.lon) {
      if (userProfile && userProfile.lat && userProfile.lon) {
        // place profiles within ~0.5deg (~50km) of user randomly
        const jitterLat = (Math.random() - 0.5) * 1.0
        const jitterLon = (Math.random() - 0.5) * 1.0
        p.lat = userProfile.lat + jitterLat
        p.lon = userProfile.lon + jitterLon
      } else {
        // random coords inside Russia-ish bounding box
        p.lat = 50 + (Math.random() - 0.5) * 20
        p.lon = 37 + (Math.random() - 0.5) * 40
      }
    }
    if (userProfile && userProfile.lat && userProfile.lon) {
      const d = Math.round(haversine(userProfile.lat, userProfile.lon, p.lat, p.lon))
      p.distance = `${d} км`
    } else if (!p.distance) {
      p.distance = randomDistanceKm(150)
    }
  })
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
    const raw = localStorage.getItem('vvv_likes')
    const likes = raw ? JSON.parse(raw) : []
    if (!likes.includes(profile._id)) likes.push(profile._id)
    localStorage.setItem('vvv_likes', JSON.stringify(likes))
    // simulate a match with some chance
    const matchesRaw = localStorage.getItem('vvv_matches')
    const matches = matchesRaw ? JSON.parse(matchesRaw) : []
    if (Math.random() < 0.25 && !matches.includes(profile._id)) {
      matches.push(profile._id)
      localStorage.setItem('vvv_matches', JSON.stringify(matches))
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
  const geoActive = geoToggle.getAttribute('aria-pressed') === 'true'
  const filters = {
    location: locationInput.value,
    geo: geoActive,
    geoRadius: geoActive ? Number(geoRadiusRange.value) : null,
    interest: interestPills.querySelector('.pill.active')?.dataset.value || 'all',
    show: showPills.querySelector('.pill.active')?.dataset.value || 'all',
    ageMin: Number(ageMin.value),
    ageMax: Number(ageMax.value),
    wantsChat: chatToggle.getAttribute('aria-pressed') === 'true',
    wantsRelationship: relationshipToggle.getAttribute('aria-pressed') === 'true'
  }
  // Build filtered list based on available profile attributes
  const me = getMyProfile()
  const normalizedLocation = (filters.location || '').trim().toLowerCase()
  function guessGender(name) {
    if (!name) return 'unknown'
    const last = name.trim().slice(-1).toLowerCase()
    return (last === 'а' || last === 'я') ? 'female' : 'male'
  }

  const results = profiles.filter((p) => {
    if (!p) return false
    // age
    if (typeof p.age === 'number') {
      if (p.age < filters.ageMin || p.age > filters.ageMax) return false
    }
    // location (simple substring match)
    if (normalizedLocation) {
      if (!p.city || !p.city.toLowerCase().includes(normalizedLocation)) return false
    }
    // interest (gender) filter
    if (filters.interest && filters.interest !== 'all') {
      const g = guessGender(p.name)
      if (filters.interest === 'male' && g !== 'male') return false
      if (filters.interest === 'female' && g !== 'female') return false
    }
    // geo filter (distance), requires user coords
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
    // no results: show main page but clear profile fields
    if (profileNameEl) profileNameEl.textContent = 'Нет результатов'
    if (profileCityEl) profileCityEl.textContent = ''
    if (profileBioEl) profileBioEl.textContent = ''
    showProfilePage()
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

function init() {
  const savedTheme = (() => {
    try { return localStorage.getItem('theme') } catch (err) { return null }
  })() || 'default'
  setTheme(savedTheme)

  const hasMainAppUi = Boolean(photoEl && profileNameEl && profileCityEl && profileBioEl && likeBtn && skipBtn && filterBtn)

    if (hasMainAppUi) {
    preloadProfileImages()
    setProfile(currentIndex)
    setRangeLabel()

    // restore saved user profile and ensure profiles have coords/distances
    const me = getMyProfile()
    if (me) {
      // populate edit inputs
      try { if (profileNameInput) profileNameInput.value = me.name || '' } catch(e){}
      try { if (profileAgeInput) profileAgeInput.value = me.age || '' } catch(e){}
      try { if (profileCityInput) profileCityInput.value = me.city || '' } catch(e){}
      try { if (profileBioInput) profileBioInput.value = me.bio || '' } catch(e){}
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
      // record like for the currently shown (visible) profile
      const list = getVisibleProfiles()
      const current = list[currentIndex]
      if (current) recordLike(current)
      changeProfile(1)
    })
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
    filterBtn.addEventListener('click', () => {
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
      })
    }
    if (showPills) {
      showPills.addEventListener('click', (event) => {
        const button = event.target.closest('.pill')
        if (!button) return
        setActivePill(showPills, button)
      })
    }
    if (ageMin) {
      ageMin.addEventListener('input', () => {
        syncRange(ageMin)
      })
    }
    if (ageMax) {
      ageMax.addEventListener('input', () => {
        syncRange(ageMax)
      })
    }
    if (ageMinNumber) {
      ageMinNumber.addEventListener('input', () => {
        syncNumber(ageMinNumber)
      })
    }
    if (ageMaxNumber) {
      ageMaxNumber.addEventListener('input', () => {
        syncNumber(ageMaxNumber)
      })
    }
    if (chatToggle) {
      chatToggle.addEventListener('click', () => {
        const pressed = chatToggle.getAttribute('aria-pressed') === 'true'
        chatToggle.setAttribute('aria-pressed', String(!pressed))
        chatToggle.classList.toggle('active', !pressed)
      })
    }
    if (relationshipToggle) {
      relationshipToggle.addEventListener('click', () => {
        const pressed = relationshipToggle.getAttribute('aria-pressed') === 'true'
        relationshipToggle.setAttribute('aria-pressed', String(!pressed))
        relationshipToggle.classList.toggle('active', !pressed)
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
        if (profileSaveBtn && profileNameInput && profileAgeInput && profileCityInput && profileBioInput && profileAvatar) {
          profileSaveBtn.addEventListener('click', () => {
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
          me.avatar = profileAvatar.textContent || (name ? name[0].toUpperCase() : 'A')

          const finishSave = (p) => {
            saveMyProfile(p)
            profileNameEl.textContent = p.age ? `${p.name}, ${p.age}` : p.name
            profileCityEl.innerHTML = renderCityWithGeo(p.city, p.distance)
            profileBioEl.textContent = p.bio
            profileAvatar.textContent = p.avatar
            ensureProfilesHaveCoords(p)
            window.location.href = 'profile.html'
          }

          if (geoEnabled) {
            requestAndSaveGeo(me, finishSave)
          } else {
            saveMyProfile(me)
            finishSave(me)
          }
          })
        }
    if (searchBtn) searchBtn.addEventListener('click', applyFilters)

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

// Ensure back button works on pages without the main app UI (notifications page etc.)
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
}

// Fallback: ensure filter button always toggles filter page (defensive)
if (filterBtn) {
  try {
    filterBtn.addEventListener('click', (e) => {
      if (filterPage) {
        if (filterPage.classList.contains('hidden')) showFilterPage()
        else showProfilePage()
        e.preventDefault()
      }
    })
  } catch (err) {}
}

// Defensive: ensure search button triggers filters even if init failed
if (searchBtn) {
  try {
    searchBtn.addEventListener('click', (e) => { e.preventDefault(); applyFilters() })
  } catch (err) {}
}

// K-Culture AI Writer — Enhanced JavaScript with multilingual UI

// ============================================================================
// SAMPLE TEXTS (Fallback when no API key)
// ============================================================================
const sampleTexts = {
  food: {
    friendly: [
      { ko: "치맥(치킨+맥주)은 한국의 야식 문화 대표입니다! 🍗🍺 친구들과 함께 즐겨보세요.", en: "Chimaek (Chicken + Beer) is Korea's ultimate late-night combo! 🍗🍺 Try it with friends.", brief: "Chimaek is a popular Korean pairing of fried chicken and beer." },
      { ko: "비빔밥은 여러 재료를 비벼먹는 건강식이에요. 색색깔이 아름답죠! 🌈", en: "Bibimbap is a colorful, healthy bowl of mixed rice and veggies! 🌈", brief: "Bibimbap means 'mixed rice' - a balanced Korean meal." }
    ],
    informative: [
      { ko: "Korean BBQ는 테이블에서 직접 구워먹으며 쌈(lettuce wraps)으로 싸먹습니다.", en: "Korean BBQ is grilled at your table and eaten with lettuce wraps (ssam).", brief: "Korean BBQ involves grilling meat at the table and wrapping it in lettuce." },
      { ko: "삼겹살(grilled pork belly)은 한국에서 가장 인기 있는 요리 중 하나입니다.", en: "Samgyeopsal (grilled pork belly) is one of Korea's most popular dishes.", brief: "Samgyeopsal is thick-cut pork belly grilled at the table." }
    ],
    humorous: [
      { ko: "연애 상태: 라면과 사랑에 빠짐 🍜❤️", en: "Relationship status: In a committed relationship with ramyeon 🍜❤️", brief: "Ramyeon (instant noodles) is a beloved comfort food in Korea." },
      { ko: "입천장 안 데고 호떡 먹기는 익스트림 스포츠입니다 🔥", en: "Eating hotteok without burning your mouth is an extreme sport 🔥", brief: "Hotteok is a sweet Korean street pancake, notoriously hot when fresh." }
    ],
    inspirational: [
      { ko: "음식을 나누는 것(정)은 한국 문화의 깊은 부분입니다. 함께하는 식사는 마음을 연결합니다.", en: "Sharing food embodies 'jeong' (정) — a Korean concept of warmth and connection.", brief: "Korean dining culture emphasizes sharing meals to build bonds." }
    ]
  },
  kpop: {
    friendly: [
      { ko: "새 컴백 나왔다! 🔥 최애 트랙 뭐예요?", en: "New comeback is out! 🔥 What's your favorite track?", brief: "K-pop 'comeback' means a new album/song release." },
      { ko: "최애 포카 뽑았어요! 😭 역대 최고의 날.", en: "Just pulled my bias's photocard! 😭 Best day ever.", brief: "Photocards are collectible cards included in K-pop albums." }
    ],
    informative: [
      { ko: "K팝 아이돌들은 데뷔 전 몇 년간 노래, 춤, 언어 등을 훈련받습니다.", en: "K-pop idols train for years in singing, dancing, and languages before debut.", brief: "K-pop training involves rigorous preparation before debut." },
      { ko: "'빅4' K팝 기획사는 HYBE, SM, JYP, YG입니다.", en: "The 'Big 4' K-pop agencies are HYBE, SM, JYP, and YG.", brief: "These agencies produced some of the world's biggest K-pop groups." }
    ],
    humorous: [
      { ko: "새 안무 배우려고 할 때... 💃 (내 다리: ❌)", en: "Me trying to learn the new choreography... 💃 (My legs: ❌)", brief: "K-pop choreography is notoriously difficult to master." },
      { ko: "10개 기기로 동시에 새 뮤직비디오 스트리밍하는 중 📱💻", en: "Streaming the new MV on 10 devices at once 📱💻", brief: "Fans often stream MVs on multiple devices to boost view counts." }
    ],
    inspirational: [
      { ko: "작은 기획사에서 글로벌 슈퍼스타가 되기까지, BTS의 여정은 우리에게 큰 꿈을 꾸라고 말해줍니다. 💜", en: "From a small agency to global superstars, BTS's journey reminds us to dream big. 💜", brief: "BTS rose from humble beginnings to worldwide fame." }
    ]
  },
  memes: {
    friendly: [
      { ko: "이거 완전 한국 '국룰'(national rule) 아님? ㄹㅇㅋㅋ!", en: "This is such a Korean 'guk-rul' (national rule) moment! So true!", brief: "'Guk-rul' means an unwritten rule everyone in Korea follows." },
      { ko: "베프한테 이거 바로 보낸다! 😂 태그 ㄱㄱ!", en: "Sending this to my bestie right now! 😂 Tag your friend!", brief: "Korean internet culture is big on sharing relatable memes." }
    ],
    informative: [
      { ko: "'꼰대'는 '나 때는 말이야...'를 연발하는 나이 든 사람을 의미합니다.", en: "'Kkondae' (꼰대) refers to an older person who constantly says 'back in my day...'", brief: "Kkondae is a term for patronizing, old-fashioned people." },
      { ko: "'킹받네'는 짜증 나거나 화나는데, 웃긴 방식으로 표현할 때 쓰는 유행어입니다.", en: "'King-bat-ne' (킹받네) is trendy slang for feeling annoyed in a funny way.", brief: "Korean slang evolves rapidly with new meme expressions." }
    ],
    humorous: [
      { ko: "교수님한테 실수로 반말 썼을 때 😱", en: "When you accidentally use casual speech with your professor 😱", brief: "Korean language has formal/informal speech levels - mixing them up is awkward!" },
      { ko: "배달 왔을 때 그 기분! 🛵💨", en: "That feeling when the delivery arrives! 🛵💨", brief: "Korea has incredibly fast delivery culture ('baedal')." }
    ],
    inspirational: [
      { ko: "한류도 작은 물결에서 시작되었습니다. 여러분이 사랑하는 것을 계속 공유하세요!", en: "Even the Hallyu (Korean Wave) started as a small ripple. Keep sharing what you love!", brief: "Hallyu refers to the global popularity of Korean culture." }
    ]
  },
  festivals: {
    friendly: [
      { ko: "보령 머드 축제 진짜 재밌겠다! 같이 갈 사람? 🎉", en: "Boryeong Mud Festival looks SO fun! Who wants to go? 🎉", brief: "This summer festival features mud wrestling and activities." }
    ],
    informative: [
      { ko: "진주 남강 유등 축제는 원래 군사 신호로 사용되었던 아름다운 불빛의 장관입니다.", en: "The Jinju Lantern Festival features beautiful lights, originally used as military signals.", brief: "Historic festival with lanterns floating on the Nam River." }
    ],
    humorous: [
      { ko: "축제에서의 내 유일한 목표: 모든 푸드트럭 다 먹어보기 🚚", en: "My only goal at the festival: Try ALL the food trucks 🚚", brief: "Korean festivals always have amazing street food." }
    ],
    inspirational: [
      { ko: "축제는 지역 사회를 하나로 모아 삶과 역사, 기쁨을 축하하게 합니다.", en: "Festivals bring communities together to celebrate life, history, and joy.", brief: "Korean festivals preserve cultural heritage through celebration." }
    ]
  },
  traditions: {
    friendly: [
      { ko: "오늘 한복 입어봤어요! 공주가 된 기분 👑", en: "I got to try on a hanbok today! Felt like royalty 👑", brief: "Hanbok is traditional Korean clothing." }
    ],
    informative: [
      { ko: "추석은 가족들이 모여 송편을 먹는 주요 명절입니다.", en: "Chuseok, Korea's Thanksgiving, is when families gather to eat songpyeon (rice cakes).", brief: "Chuseok is a major harvest festival in Korea." },
      { ko: "'온돌'은 한국의 전통 바닥 난방 시스템입니다. 한국인들이 바닥에 앉거나 자는 이유죠.", en: "'Ondol' (온돌) is Korea's traditional underfloor heating system.", brief: "This heating system is why Koreans often sit and sleep on the floor." }
    ],
    humorous: [
      { ko: "떡국 너무 많이 먹고 세배하려 할 때 😅", en: "Trying to do a traditional bow after eating too much rice cake soup 😅", brief: "Seollal (Lunar New Year) involves formal bows and lots of food." }
    ],
    inspirational: [
      { ko: "전통은 재를 보존하는 것이 아니라 불꽃을 전하는 것입니다.", en: "Tradition is not about preserving ashes, but passing on the flame.", brief: "Korea balances preserving tradition with modern innovation." }
    ]
  },
  daily: {
    friendly: [
      { ko: "방금 아이스 아메리카노 샀어요 ☕ 한국인들은 정말 '아아'로 사는 듯!", en: "Just grabbed an iced Americano ☕ Koreans really run on 'ah-ah'!", brief: "'Ah-ah' is short for iced Americano, Korea's favorite drink." }
    ],
    informative: [
      { ko: "한국에서는 학생들이 'PC방'이나 24시간 '스터디 카페'에서 공부하는 것이 흔합니다.", en: "In Korea, students commonly study at PC bangs or 24/7 study cafes.", brief: "Study culture is serious with dedicated study spaces everywhere." },
      { ko: "'빨리빨리' 문화는 '서둘러'를 의미합니다. 한국의 초고속 인터넷과 배달을 설명해 주죠!", en: "'Ppalli-ppalli' (빨리빨리) culture means 'hurry, hurry' — explaining Korea's fast internet and delivery!", brief: "Korea values speed and efficiency in daily life." }
    ],
    humorous: [
      { ko: "지하철 환승 '종료' 알림음 들릴 때... 전력질주 🏃", en: "When you hear the transfer 'closing' chime... sprint mode activated 🏃", brief: "Korean subway transfers are a race against time." }
    ],
    inspirational: [
      { ko: "한강을 따라 걷는 것과 같은 작은 순간도 평화로 가득 찰 수 있습니다.", en: "Even small moments, like walking along the Han River, can be full of peace.", brief: "Han River parks are popular spots for relaxation in Seoul." }
    ]
  }
};

// ============================================================================
// TRANSLATIONS (i18n)
// ============================================================================
const translations = {
  ko: {
    generating: "생성 중...",
    generated: "생성 완료! ✨",
    error: "오류 발생: ",
    fallback: "샘플 텍스트로 생성되었습니다 (API 키 없음)",
    aiFailed: "AI 호출 실패, 샘플로 대체합니다",
    copied: "복사 완료! 📋",
    copyFailed: "복사 실패",
    keyCleared: "API 키가 제거되었습니다 🔑",
    generationCancelled: "생성이 취소되었습니다"
  },
  en: {
    generating: "Generating...",
    generated: "Generated successfully! ✨",
    error: "Error: ",
    fallback: "Generated using sample text (no API key)",
    aiFailed: "AI call failed, using sample text",
    copied: "Copied! 📋",
    copyFailed: "Copy failed",
    keyCleared: "API key cleared 🔑",
    generationCancelled: "Generation cancelled"
  }
};

// ============================================================================
// STATE & DOM ELEMENTS
// ============================================================================
let currentLang = 'ko'; // Default language
let isGenerating = false; // Prevent duplicate requests
let abortController = null; // For cancelling requests

const dom = {
  form: document.getElementById('generator-form'),
  resultContainer: document.getElementById('result-container'),
  koOutput: document.getElementById('ko-output'),
  enOutput: document.getElementById('en-output'),
  briefOutput: document.getElementById('brief-output'),
  apiKeyInput: document.getElementById('api-key'),
  toggleKeyBtn: document.getElementById('toggle-key-visibility'),
  generateBtn: document.getElementById('generate-btn'),
  copyBtn: document.getElementById('copy-btn'),
  copyKoBtn: document.getElementById('copy-ko-btn'),
  copyEnBtn: document.getElementById('copy-en-btn'),
  regenBtn: document.getElementById('regenerate-btn'),
  clearKeyBtn: document.getElementById('clear-key-btn'),
  statusEl: document.getElementById('status'),
  langToggle: document.getElementById('lang-toggle')
};

// ============================================================================
// INITIALIZATION
// ============================================================================
function init() {
  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }

  // Load saved API key from sessionStorage
  const savedKey = sessionStorage.getItem('OPENAI_KEY');
  if (savedKey) dom.apiKeyInput.value = savedKey;

  // Load saved language preference
  const savedLang = localStorage.getItem('UI_LANG') || 'ko';
  currentLang = savedLang;
  updateUILanguage();

  // Event listeners
  dom.form.addEventListener('submit', handleSubmit);
  dom.copyBtn.addEventListener('click', () => copyContent('all'));
  dom.copyKoBtn.addEventListener('click', () => copyContent('ko'));
  dom.copyEnBtn.addEventListener('click', () => copyContent('en'));
  dom.regenBtn.addEventListener('click', generateContent);
  dom.clearKeyBtn.addEventListener('click', clearAPIKey);
  dom.toggleKeyBtn.addEventListener('click', toggleKeyVisibility);
  dom.langToggle.addEventListener('click', toggleLanguage);
  
  // Online/Offline detection
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
  
  // Check initial online status
  if (!navigator.onLine) {
    handleOffline();
  }
}

// ============================================================================
// LANGUAGE TOGGLE
// ============================================================================
function toggleLanguage() {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('UI_LANG', currentLang);
  updateUILanguage();
}

function updateUILanguage() {
  // Update all elements with data-ko and data-en attributes
  document.querySelectorAll('[data-ko][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  // Update language toggle button
  const langText = dom.langToggle.querySelector('.lang-text');
  langText.textContent = currentLang === 'ko' ? 'EN' : '한글';
}

function t(key) {
  return translations[currentLang][key] || key;
}

// ============================================================================
// UI HELPERS
// ============================================================================
function setStatus(msg, duration = 0, type = 'info') {
  dom.statusEl.textContent = msg;
  dom.statusEl.className = `status ${type}`; // 'loading', 'error', 'success', 'info'
  if (duration > 0) {
    setTimeout(() => {
      dom.statusEl.textContent = '';
      dom.statusEl.className = 'status';
    }, duration);
  }
}

function updateButtonState(generating) {
  if (generating) {
    dom.generateBtn.innerHTML = '<span data-ko="⏳ Generating... / 생성 중..." data-en="⏳ Generating... / 생성 중...">⏳ Generating... / 생성 중...</span>';
    dom.generateBtn.classList.add('loading');
    dom.generateBtn.disabled = true;
    if (dom.regenBtn) dom.regenBtn.disabled = true;
  } else {
    dom.generateBtn.innerHTML = '<span data-ko="✨ Generate / 생성하기" data-en="✨ Generate / 생성하기">✨ Generate / 생성하기</span>';
    dom.generateBtn.classList.remove('loading');
    dom.generateBtn.disabled = false;
    if (dom.regenBtn) dom.regenBtn.disabled = false;
  }
}

function showResults() {
  dom.resultContainer.classList.remove('hidden');
  dom.resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function toggleKeyVisibility() {
  const type = dom.apiKeyInput.type === 'password' ? 'text' : 'password';
  dom.apiKeyInput.type = type;
  dom.toggleKeyBtn.querySelector('.eye-icon').textContent = type === 'password' ? '👁️' : '🙈';
}

function handleOnline() {
  setStatus('✅ Back online! / 온라인 복구됨', 3000, 'success');
}

function handleOffline() {
  setStatus('⚠️ Offline mode - using samples only / 오프라인 - 샘플만 사용 가능', 0, 'info');
}

// ============================================================================
// API INTERACTION
// ============================================================================
async function callOpenAI(apiKey, topic, tone, signal = null) {
  const systemPrompt = `You are a helpful assistant specialized in Korean culture. Generate short, engaging social media posts (2-4 sentences each) for sharing Korean culture with international audiences.

Output ONLY valid JSON with this exact structure:
{
  "ko": "Korean text here (2-4 sentences)",
  "en": "English text here (2-4 sentences)",
  "brief": "One sentence explanation in English"
}

Topic: ${topic}
Tone: ${tone}

Make it authentic, culturally accurate, and engaging for social media.`;

  try {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Generate a ${tone} post about ${topic}.` }
        ],
        max_tokens: 400,
        temperature: 0.8
      })
    };
    
    // Add abort signal if provided
    if (signal) {
      fetchOptions.signal = signal;
    }
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    // Extract JSON from response
    const json = extractJSON(content);
    if (!json || !json.ko || !json.en) {
      throw new Error('Invalid JSON response from API');
    }

    return json;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
}

function extractJSON(text) {
  try {
    // Try direct parse first
    return JSON.parse(text);
  } catch (e) {
    // Try to find JSON block in text
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (e2) {
        return null;
      }
    }
    return null;
  }
}

function pickFallback(topic, tone) {
  const topicData = sampleTexts[topic] || sampleTexts['food'];
  const toneData = topicData[tone] || topicData['friendly'];
  const randomIndex = Math.floor(Math.random() * toneData.length);
  return toneData[randomIndex];
}

// ============================================================================
// CONTENT GENERATION
// ============================================================================
async function generateContent() {
  // Prevent duplicate requests
  if (isGenerating) {
    setStatus('Already generating... Please wait.', 2000, 'info');
    return;
  }
  
  isGenerating = true;
  updateButtonState(true);
  
  setStatus(t('generating'), 0, 'loading');
  
  // Create abort controller for this request
  abortController = new AbortController();

  const formData = new FormData(dom.form);
  const topic = formData.get('topic') || 'food';
  const tone = formData.get('tone') || 'friendly';
  const apiKey = dom.apiKeyInput.value.trim();

  // Save API key to session (if provided)
  if (apiKey) {
    sessionStorage.setItem('OPENAI_KEY', apiKey);
  }

  try {
    let result;

    if (apiKey) {
      // Try OpenAI API
      try {
        result = await callOpenAI(apiKey, topic, tone, abortController.signal);
        setStatus(t('generated'), 3000, 'success');
      } catch (error) {
        if (error.name === 'AbortError') {
          setStatus('Request cancelled', 2000, 'info');
          return;
        }
        console.error('AI Error:', error);
        setStatus(`${t('aiFailed')} (${error.message})`, 5000, 'error');
        result = pickFallback(topic, tone);
      }
    } else {
      // Use fallback
      result = pickFallback(topic, tone);
      setStatus(t('fallback'), 3000, 'info');
    }

    // Display results
    dom.koOutput.value = result.ko || '';
    dom.enOutput.value = result.en || '';
    dom.briefOutput.value = result.brief || '';
    
    showResults();
  } catch (error) {
    console.error('Generation Error:', error);
    setStatus(`${t('error')}${error.message}`, 5000, 'error');
  } finally {
    // Re-enable buttons
    isGenerating = false;
    updateButtonState(false);
    abortController = null;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  generateContent();
}

// ============================================================================
// COPY FUNCTIONS
// ============================================================================
async function copyContent(type) {
  let text = '';
  let btn;

  switch (type) {
    case 'ko':
      text = dom.koOutput.value;
      btn = dom.copyKoBtn;
      break;
    case 'en':
      text = dom.enOutput.value;
      btn = dom.copyEnBtn;
      break;
    case 'all':
    default:
      text = `🇰🇷 Korean:\n${dom.koOutput.value}\n\n🇬🇧 English:\n${dom.enOutput.value}\n\n💡 Brief:\n${dom.briefOutput.value}`;
      btn = dom.copyBtn;
      break;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    
    // Visual feedback on button
    const originalHTML = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = btn.innerHTML.replace(/📋|🇰🇷|🇬🇧/, '✓');
    
    setStatus(t('copied'), 2000, 'success');
    
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalHTML;
    }, 2000);
  } catch (error) {
    console.error('Copy Error:', error);
    setStatus(t('copyFailed'), 2000, 'error');
  }
}

function clearAPIKey() {
  dom.apiKeyInput.value = '';
  sessionStorage.removeItem('OPENAI_KEY');
  setStatus(t('keyCleared'), 2000);
}

// ============================================================================
// KEYBOARD SHORTCUTS
// ============================================================================
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + Enter: Generate content
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    if (!isGenerating) {
      generateContent();
    }
  }
  
  // Escape: Cancel generation
  if (e.key === 'Escape' && isGenerating) {
    e.preventDefault();
    if (abortController) {
      abortController.abort();
      setStatus(t('generationCancelled') || 'Generation cancelled', 3000, 'info');
    }
  }
  
  // Ctrl/Cmd + Shift + C: Copy all
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'c') {
    e.preventDefault();
    if (dom.koOutput.value) {
      copyContent('all');
    }
  }
  
  // Ctrl/Cmd + L: Toggle language
  if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
    e.preventDefault();
    dom.langToggle.click();
  }
});

// ============================================================================
// START
// ============================================================================
document.addEventListener('DOMContentLoaded', init);
# K-Culture AI Writer ✨

An AI-powered static web app that automatically generates **bilingual (Korean/English) social media posts** to introduce Korean culture, memes, and trends to international audiences. This project is optimized for performance, accessibility, and security, making it a production-ready Progressive Web App (PWA).

**AI 기반 정적 웹앱으로 한국 문화, 밈, 트렌드를 외국인에게 소개하는 양방향(한영) SNS 포스트를 자동 생성합니다. 이 프로젝트는 성능, 접근성, 보안에 최적화된 PWA(프로그레시브 웹 앱)입니다.**

![K-Culture AI Writer](https://img.shields.io/badge/Korean-Culture-blue) ![AI Powered](https://img.shields.io/badge/AI-OpenAI-green) ![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-orange) ![PWA](https://img.shields.io/badge/PWA-Ready-purple)

## 👨‍💻 Creator Information / 제작자 정보

- **Name / 이름**: Choi Si-woo (최시우)
- **Student ID / 학번**: 2084046
- **Department / 학과**: Department of Tourism Management (관광경영학과)
- **University / 대학**: Pai Chai University (배재대학교)

## 📚 Project Information / 프로젝트 정보

- **Course / 수업**: Tourism Content Creator Practice
- **Professor / 담당 교수**: Prof. Ralph Cousins
- **Objective / 목표**: Develop an automated SNS content generation tool to effectively introduce Korean culture (food, K-pop, memes, festivals, etc.) to international audiences.
  - 한국 문화(음식, K-pop, 밈, 축제 등)를 외국인에게 효과적으로 소개하는 SNS 콘텐츠 자동 생성 도구 개발.

## ✨ Main Features / 주요 기능

### Core Features / 핵심 기능
- **🌐 Multilingual UI**: Toggle between Korean/English interface.
- **🎯 Topic & Tone Selection**: Choose from 6 topics and 4 tones.
- **🤖 AI Integration**: Real content generation using OpenAI GPT-3.5-turbo.
- **📝 Bilingual Output**: Provides Korean, English, and a brief explanation.
- **📋 Copy Functions**: Copy all or individual languages to the clipboard.
- **💾 Sample Fallback**: Works without an API key using built-in samples.

### Enhanced Features / 향상된 기능
- **📱 PWA Support**: Installable on mobile/desktop with offline access.
- **⚡ Performance Optimized**: Asynchronous font loading and deferred scripts.
- **🔒 Enhanced Security**: Content Security Policy (CSP) headers implemented.
- **♿ Accessibility (A11y)**: ARIA roles, screen-reader-friendly structure (`fieldset`, `legend`).
- **🎨 Rich UX Feedback**:
  - **Loading States**: Visual shimmer animation and button text change during generation.
  - **Copy Feedback**: Visual confirmation when copying content.
  - **Status Colors**: Color-coded status messages (loading/success/error/info).
- **🚫 Duplicate Prevention**: Blocks multiple simultaneous requests.
- **⌨️ Keyboard Shortcuts**: `Ctrl+Enter` (Generate), `Ctrl+Shift+C` (Copy), `Esc` (Cancel).
- **📡 Offline Detection**: Notifies user of offline status.
- **📱 Responsive Design**: Optimized for landscape and various screen sizes.
- **🔍 SEO Optimized**: Meta tags for social media sharing.

## 🚀 Quick Start / 빠른 시작

### Method 1: Local Testing (No API key required)

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/k-culture-ai-writer.git
cd k-culture-ai-writer

# Run a simple local server
python3 -m http.server 8000
# or use npx for a more feature-rich server
npx serve

# Open in browser
open http://localhost:8000
```
The app works with built-in sample texts without an API key.

### Method 2: Deploy to GitHub Pages

1. Create a new repository on GitHub.
2. Push the code to the `main` branch.
3. Go to your repository's **Settings → Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `(root)`
4. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` in a few minutes!

## 🔐 Security & API Key Usage

### ⚠️ Direct Browser Use (Convenient but risky)
You can enter your OpenAI API key directly in the browser. However, this is **not recommended for public deployment** as the key can be exposed.

### ✅ Serverless Functions (Recommended)
For secure deployment, use the provided serverless functions with Netlify or Vercel. This keeps your API key safe on the server.

#### Deploying with Netlify
1. Connect your repository to a new Netlify site.
2. Set the `OPENAI_API_KEY` environment variable in **Site settings → Build & deploy → Environment**.
3. Uncomment and use the Netlify version of `callOpenAI` in `script.js`.

## 📁 Project Structure

```
/
├── index.html              # Landing page (Project intro)
├── home.html               # Main application (AI generator)
├── styles.css              # Stylesheet
├── script.js               # Core client-side logic
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker for offline caching
├── README.md               # This file
├── netlify/functions/      # Netlify serverless function
└── api/                    # Vercel serverless function
```

## 🛠️ Development & Customization

### Adding Sample Texts
Add more samples to the `sampleTexts` object in `script.js`.

### Changing Styles
Modify CSS variables in `styles.css` to change the color scheme.
```css
:root {
  --primary-blue: #0077b6;  /* Change to your desired color */
}
```

## 🤝 Contributing
Pull requests are welcome! Feel free to add more sample texts, improve the UI/UX, or fix bugs.

## 📄 License
This project is licensed under the MIT License.

## 🙏 Credits
- **Creator**: Choi Si-woo (Pai Chai University, Dept. of Tourism Management, 2084046)
- **Supervisor**: Prof. Ralph Cousins
- **Course**: Tourism Content Creator Practice
- **Technology**: OpenAI GPT-3.5-turbo, Google Fonts (Noto Sans KR)
- **Made with ❤️ for sharing K-culture worldwide**
---

## 🔧 Troubleshooting

### CORS Error
This happens when calling the OpenAI API directly from the browser. Use the serverless function deployment method for a reliable solution.

### API Key Not Working
- Ensure the key starts with `sk-`.
- Check your OpenAI account for available credits.

### Testing Serverless Functions Locally
**Netlify:**
```bash
npm install -g netlify-cli
netlify dev
```
**Vercel:**
```bash
npm install -g vercel
vercel dev
```
---
**Questions?** Feel free to open an issue! 🚀

## 👨‍💻 Creator Information / 제작자 정보

- **Name / 이름**: Choi Si-woo (최시우)
- **Student ID / 학번**: 2084046
- **Department / 학과**: Department of Tourism Management (관광경영학과)
- **University / 대학**: Pai Chai University (배재대학교)

## 📚 Project Information / 프로젝트 정보

- **Course / 수업**: Tourism Content Creator Practice
- **Professor / 담당 교수**: Prof. Ralph Cousins
- **Objective / 목표**: Develop an automated SNS content generation tool to effectively introduce Korean culture (food, K-pop, memes, festivals, etc.) to international audiences
  - 한국 문화(음식, K-pop, 밈, 축제 등)를 외국인에게 효과적으로 소개하는 SNS 콘텐츠 자동 생성 도구 개발

## ✨ Main Features / 주요 기능

### Core Features / 핵심 기능
- **🌐 Multilingual UI**: Toggle between Korean/English interface
  - 다국어 UI: 한국어/영어 UI 토글 지원
- **🎯 Topic Selection**: Korean Food, K-pop, Memes, Festivals, Traditions, Daily Life
  - 주제 선택: Korean Food, K-pop, Memes, Festivals, Traditions, Daily Life
- **🎨 Tone Selection**: Friendly, Informative, Humorous, Inspirational
  - 톤 선택: Friendly, Informative, Humorous, Inspirational
- **🤖 AI Integration**: Real content generation using OpenAI GPT-3.5-turbo
  - AI 통합: OpenAI GPT-3.5-turbo로 실제 콘텐츠 생성
- **📝 Bilingual Output**: Korean version + English version + Brief explanation
  - 양방향 출력: 한국어 버전 + 영어 버전 + 간단 설명
- **📋 Copy Functions**: Copy All / Korean Only / English Only
  - 복사 기능: 전체/한국어만/영어만 선택 복사
- **💾 Sample Fallback**: Test with sample texts without API key
  - 샘플 폴백: API 키 없이도 샘플 텍스트로 테스트 가능

### Enhanced Features / 향상된 기능
- **📱 PWA Support**: Install as app on mobile/desktop
  - PWA 지원: 모바일/데스크톱에 앱으로 설치 가능
- **⚡ Loading States**: Visual shimmer animation during generation
  - 로딩 상태: 생성 중 시각적 애니메이션 표시
- **🚫 Duplicate Prevention**: Blocks multiple simultaneous requests
  - 중복 방지: 동시 다중 요청 차단
- **♿ Accessibility**: ARIA labels for screen readers
  - 접근성: 스크린 리더를 위한 ARIA 레이블
- **✅ Copy Feedback**: Visual confirmation when copying content
  - 복사 피드백: 복사 시 시각적 확인
- **🎨 Error Colors**: Color-coded status messages (loading/success/error)
  - 에러 색상: 상태별 색상 구분 (로딩/성공/에러)
- **⌨️ Keyboard Shortcuts**: Quick access with keyboard
  - 키보드 단축키: 키보드로 빠른 접근
  - `Ctrl/Cmd + Enter`: Generate content
  - `Ctrl/Cmd + Shift + C`: Copy all
  - `Ctrl/Cmd + L`: Toggle language
  - `Escape`: Cancel generation
- **🔍 SEO Optimized**: Meta tags for social media sharing
  - SEO 최적화: 소셜 미디어 공유를 위한 메타 태그
- **🔒 Security Options**: Protect API key with serverless functions (Netlify/Vercel)
  - 보안 옵션: 서버리스 함수로 API 키 보호 (Netlify/Vercel)

## 🚀 Quick Start / 빠른 시작

### Method 1: Local Testing (No API key required / API 키 불필요)

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/k-culture-ai-writer.git
cd k-culture-ai-writer

# Run simple local server
python3 -m http.server 8000
# or
npx serve

# Open in browser
open http://localhost:8000
```

Works with built-in sample texts without API key.
API 키를 입력하지 않으면 내장된 샘플 텍스트로 동작합니다.

### Method 2: Deploy to GitHub Pages / GitHub Pages에 배포

1. Create a new repository on GitHub
2. Push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**:
   - Source: `main` branch
   - Folder: `/` (root)
4. Access your site at `https://YOUR-USERNAME.github.io/YOUR-REPO/` after a few minutes!

## 🔐 보안 & API 키 사용

### ⚠️ 브라우저에서 직접 사용 (간편하지만 위험)

브라우저에서 OpenAI API 키를 직접 입력할 수 있지만, **키 노출 위험**이 있습니다:
- 네트워크 로그에서 키 확인 가능
- 브라우저 개발자 도구에서 키 확인 가능
- CORS 정책으로 차단될 수 있음

**권장하지 않음**: 프로덕션이나 공개 배포용

### ✅ 서버리스 함수 사용 (권장)

API 키를 서버(환경변수)에 안전하게 보관하고, 프론트엔드는 서버 엔드포인트만 호출:

#### Netlify로 배포

1. **Netlify 계정 생성** (무료): https://netlify.com
2. 리포지토리를 Netlify에 연결
3. 환경변수 설정:
   - Settings → Build & Deploy → Environment
   - 추가: `OPENAI_API_KEY` = `sk-your-key-here`
4. 자동 배포 완료!
5. 프론트엔드에서 서버리스 함수 사용하려면 `script.js`를 수정:

```javascript
// script.js의 callOpenAI 함수를 다음으로 교체:
async function callOpenAI(apiKey, topic, tone) {
  // apiKey 파라미터는 무시하고 서버리스 함수 호출
  const response = await fetch('/.netlify/functions/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, tone })
  });
  
  if (!response.ok) throw new Error(`Function error: ${response.status}`);
  return await response.json();
}
```

#### Vercel로 배포

1. **Vercel 계정 생성** (무료): https://vercel.com
2. 리포지토리를 Vercel에 연결
3. 환경변수 설정:
   - Settings → Environment Variables
   - 추가: `OPENAI_API_KEY` = `sk-your-key-here`
4. 자동 배포 완료!
5. 프론트엔드 수정:

```javascript
// script.js의 callOpenAI 함수를 다음으로 교체:
async function callOpenAI(apiKey, topic, tone) {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, tone })
  });
  
  if (!response.ok) throw new Error(`Function error: ${response.status}`);
  return await response.json();
}
```

## 📁 프로젝트 구조

```
k-culture-ai-writer/
├── index.html              # 랜딩 페이지 (프로젝트 소개)
├── home.html               # 메인 애플리케이션 (AI 글 생성)
├── styles.css              # 스타일시트
├── script.js               # 클라이언트 JavaScript (API 호출)
├── README.md               # 문서
├── package.json            # 프로젝트 메타데이터
├── .gitignore              # Git 무시 파일
├── .env.example            # 환경변수 템플릿
├── netlify.toml            # Netlify 설정
├── vercel.json             # Vercel 설정
├── netlify/
│   └── functions/
│       └── generate.js     # Netlify 서버리스 함수
├── api/
│   └── generate.js         # Vercel 서버리스 함수
└── .github/
    └── copilot-instructions.md  # 프로젝트 가이드
```

## 🛠️ 개발 & 커스터마이징

### 샘플 텍스트 추가

`script.js`의 `sampleTexts` 객체에 더 많은 샘플을 추가할 수 있습니다:

```javascript
const sampleTexts = {
  food: {
    friendly: [
      { ko: "...", en: "...", brief: "..." },
      // 여기에 추가
    ]
  }
};
```

### UI 언어 추가

`script.js`의 `translations` 객체에 다른 언어를 추가:

```javascript
const translations = {
  ko: { ... },
  en: { ... },
  ja: { ... }  // 일본어 추가 예시
};
```

### 스타일 변경

`styles.css`에서 CSS 변수를 수정:

```css
:root {
  --primary-blue: #0077b6;  /* 원하는 색상으로 변경 */
  --secondary-blue: #0096c7;
  /* ... */
}
```

## 📝 사용 예시

### 1단계: 랜딩 페이지
- `index.html`에서 프로젝트 소개, 기술 스택, 제작자 정보 확인
- **"시작하기 / Get Started"** 버튼 클릭

### 2단계: 콘텐츠 생성
1. **주제 선택**: Korean Food 🍜
2. **톤 선택**: Friendly 😊
3. **언어 토글**: 🌐 버튼으로 UI를 한국어/영어로 전환 가능
4. **Generate** 클릭
5. 결과:
   - 🇰🇷 **한국어**: "치맥(치킨+맥주)은 한국의 야식 문화 대표입니다!..."
   - 🇬🇧 **English**: "Chimaek (Chicken + Beer) is Korea's ultimate late-night combo!..."
   - 💡 **Brief**: "Chimaek is a popular Korean pairing of fried chicken and beer."
6. **Copy** 버튼으로 클립보드에 복사 → SNS에 붙여넣기!

### 네비게이션
- 애플리케이션 화면 좌측 상단의 🏠 버튼으로 랜딩 페이지로 돌아갈 수 있습니다.

## 🤝 기여하기

Pull Request 환영합니다!
- 더 많은 샘플 텍스트 추가
- UI/UX 개선
- 버그 수정
- 새로운 주제/톤 추가

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 🙏 Credits / 크레딧

- **Creator / 제작자**: Choi Si-woo (최시우) - Department of Tourism Management, Pai Chai University (배재대학교 관광경영학과, 2084046)
- **Supervisor / 지도교수**: Prof. Ralph Cousins
- **Course / 수업**: Tourism Content Creator Practice
- **Technology / 기술**: OpenAI GPT-3.5-turbo for AI content generation
- **Fonts / 폰트**: Google Fonts (Noto Sans KR) for Korean typography
- **Made with ❤️ for sharing K-culture worldwide**

---

## 🔧 트러블슈팅

### CORS 에러가 발생해요
→ 서버리스 함수(Netlify/Vercel)를 사용하세요. 브라우저에서 직접 OpenAI 호출은 CORS로 차단됩니다.

### API 키를 입력했는데 작동 안 해요
→ 키 형식 확인 (`sk-...`로 시작), OpenAI 계정에 크레딧이 있는지 확인

### 생성된 텍스트가 이상해요
→ 프롬프트를 수정하거나 온도(temperature) 값을 조정하세요 (`script.js` 또는 서버리스 함수 파일)

### 로컬에서 서버리스 함수 테스트하고 싶어요

**Netlify:**
```bash
npm install -g netlify-cli
netlify dev
```

**Vercel:**
```bash
npm install -g vercel
vercel dev
```

---

**Questions?** 이슈를 열어주세요! 🚀
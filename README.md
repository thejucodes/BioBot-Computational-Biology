# BioBot – Computational Biology Assistant 🧬🤖

> **"Explore the Science of Life with AI"**  
> An intelligent, interactive educational platform and conversational AI assistant designed to help students master Computational Biology and Bioinformatics concepts through simple explanations, real-life examples, and interactive visual simulations.

---

## 🌿 Scientific Color Palette

BioBot follows a modern, clean, laboratory-grade scientific interface built on a curated green palette:

| Color Name | Hex Code | Purpose |
|---|---|---|
| **Deep Forest Green** | `#164B35` | Primary brand headers, active cards, text emphasis |
| **Emerald Green** | `#228B5A` | Primary accent, CTA buttons, active state highlights |
| **Sage Green** | `#A8C9A5` | Card borders, subtle dividers, secondary accents |
| **Mint Green** | `#DDF2E1` | Background badges, pill highlights, code backgrounds |
| **Off White** | `#F7FAF6` | Clean readable page and body canvas |

---

## 🌟 Key Features

### 1. Interactive Landing Page
- **Canvas DNA Double Helix:** Real-time 3D rotating DNA model rendered in HTML5 Canvas with connected base pairs and hydrogen rungs.
- **5 Quick Access Pillars:** Dedicated entry points for **DNA**, **RNA**, **Proteins**, **Genetics**, and **Bioinformatics**.
- **Interactive Central Dogma Live Simulator:** Live on-page tool to type or choose DNA sequences and visualize Transcription (DNA ➔ mRNA) and Translation (mRNA ➔ Polypeptide Chain) with codon annotations.

### 2. Conversational AI Chatbot
- **Full Chat Workspace:** Multi-turn conversational interface with chat history automatically preserved in `localStorage`.
- **"Explain Simply" (ELI5) Toggle:** Instantly switches AI explanations to non-technical everyday metaphors (recipes, train tracks, zippers).
- **Target Audience Level Selector:** Adapt answers for *High School*, *College Undergrad*, or *Advanced Research*.
- **Integrated Sequence Analyzer:** Paste any DNA/RNA string (e.g. `ATGCGATCGATCGCTA`) to calculate GC%, transcribe to mRNA, and translate into amino acid reading frames.
- **Dynamic Suggested Prompts:** Follow-up question pills above input box that adapt based on the ongoing conversation.
- **Audio Speech Synthesis:** Built-in "Listen" button for text-to-speech audio playback.
- **Copy & Quiz Actions:** One-click copy, plus immediate "Test Me" and "Explain Simply" buttons for every AI response.

### 3. 12 Core Knowledge Modules
Comprehensive curriculum coverage across all 12 key computational biology domains:
1. **Introduction to Computational Biology** (*In silico* modeling, systems biology, HTS)
2. **Bioinformatics and its Applications** (Drug docking, personalized oncology, pathogen tracking)
3. **DNA and RNA Structure** (Double helix geometry, antiparallel strands, Chargaff's rules)
4. **Protein Structure and Functions** (1°, 2°, 3°, 4° structures, hydrophobic collapse, Sickle Cell mutation)
5. **Central Dogma of Molecular Biology** (DNA ➔ RNA ➔ Protein, reverse transcription exceptions)
6. **DNA Replication** (Helicase, Primase, DNA Polymerase proofreading, Okazaki fragments)
7. **Transcription and Translation** (Promoters, spliceosomes, ribosomes A/P/E sites)
8. **Sequence Alignment Algorithms** (Needleman-Wunsch global, Smith-Waterman local, BLAST heuristic, BLOSUM62)
9. **Genomics and Proteomics** (RNA-Seq, ChIP-Seq, LC-MS/MS Mass Spectrometry, PTMs)
10. **Phylogenetic Trees** (UPGMA, Neighbor-Joining, Maximum Parsimony, molecular clocks)
11. **Biological Databases** (NCBI GenBank, UniProtKB, RCSB PDB, Ensembl, PubMed)
12. **Applications of AI in Biology** (AlphaFold 2/3, RFdiffusion de novo design, CRISPR Cas9 guide AI)

### 4. Interactive Quiz Zone ("Test My Knowledge")
- Filter by topic and difficulty (*Beginner*, *Intermediate*, *Advanced*).
- Instant answer feedback with green/red indicator states.
- Detailed biological rationale for every question.
- Streak counters, score calculation, rank badge awards, and confetti celebrations upon completion.
- One-click "Review with BioBot" button for any missed questions.

### 5. Dual Intelligence Architecture (100% Offline Resilience)
- **Live Gemini AI Integration:** Seamlessly connects to Google Gemini (`gemini-1.5-flash`) when an API key is provided in server `.env`.
- **Zero-Setup Demo Knowledge Engine:** If no API key is supplied, BioBot runs with a high-fidelity built-in neural knowledge engine containing structured college-level answers, sequence translators, and quiz generators.
- **Strict Security:** API keys are secured exclusively on the Node.js backend. Keys are **never** exposed to the frontend client.

---

## 📁 Project Structure

```
biobot/
├── client/                     # Frontend Application (React + Vite + Tailwind)
│   ├── index.html              # HTML entry with Google Fonts & biological favicon
│   ├── package.json            # Client dependencies (React 18, Tailwind, Lucide)
│   ├── vite.config.js          # Vite config with /api reverse proxy
│   ├── tailwind.config.js      # Scientific green color theme configuration
│   └── src/
│       ├── main.jsx            # React root mount
│       ├── App.jsx             # Main router and page coordinator
│       ├── index.css           # Tailwind base styles and DNA glow classes
│       ├── components/
│       │   ├── Navbar.jsx      # Navigation bar with live status indicator
│       │   ├── Footer.jsx      # Scientific references and repository links
│       │   ├── DnaHelixCanvas.jsx # Interactive 3D Canvas DNA double helix
│       │   ├── CentralDogmaVisualizer.jsx # Live DNA ➔ RNA ➔ Protein simulator
│       │   └── MarkdownRenderer.jsx # Markdown parser with sequence highlighting
│       ├── data/
│       │   └── conceptsData.js # 12 knowledge modules metadata
│       └── pages/
│           ├── HomePage.jsx    # Hero, quick access cards, features
│           ├── ChatPage.jsx    # AI chatbot interface with suggested prompts
│           ├── ConceptsPage.jsx# Curriculum browser with search & category filters
│           ├── QuizPage.jsx    # Interactive quiz testing arena
│           └── AboutPage.jsx   # Project architecture and scientific references
├── server/                     # Backend API (Node.js + Express)
│   ├── package.json            # Server dependencies (Express, CORS, Dotenv)
│   ├── index.js                # Express REST API & static server
│   ├── .env.example            # Environment template for GEMINI_API_KEY
│   ├── .env                    # Local environment config
│   ├── data/
│   │   ├── knowledgeBase.js    # Deep structured curriculum data
│   │   └── quizzes.js          # Curated multiple-choice questions & explanations
│   └── services/
│       ├── geminiService.js    # Google Gemini REST integration
│       └── knowledgeEngine.js  # Offline rule & sequence translation engine
├── package.json                # Root workspace launcher
└── README.md                   # Full documentation
```

---

## 🚀 Quickstart & Setup Guide

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher.
- `npm` (bundled with Node.js).

### Step 1: Install Dependencies
Open a terminal in the project directory:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Step 2: (Optional) Configure Google Gemini API Key
BioBot works **100% out of the box** in Demo Knowledge Engine mode with zero configuration.

If you would like to enable live AI responses powered by Google Gemini:
1. Get a free API key at [Google AI Studio](https://aistudio.google.com/).
2. Open `server/.env` and paste your key:
   ```env
   PORT=5000
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   GEMINI_MODEL=gemini-1.5-flash
   ```

### Step 3: Run the Application

#### Option A: Unified Production Build (Recommended)
You can build the frontend and run the complete application from the single backend server:

```bash
# 1. Build frontend
cd client
npm run build

# 2. Start server (serves both API & Frontend on port 5000)
cd ../server
node index.js
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser!

#### Option B: Development Mode (Vite Hot-Reload)
Run the backend and frontend development servers concurrently:

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
# Running on http://localhost:5000
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
# Running on http://localhost:3000 (proxies /api to localhost:5000)
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser!

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | System health, uptime, and AI connection status |
| `GET` | `/api/concepts` | Returns all 12 core curriculum knowledge modules |
| `GET` | `/api/concepts/:id` | Returns specific concept details |
| `GET` | `/api/quizzes` | Returns quiz questions with `?topic=` and `?difficulty=` filters |
| `POST` | `/api/chat` | Main conversational endpoint (accepts `{ messages, explainSimply, educationalLevel }`) |
| `POST` | `/api/analyze-sequence` | Bio-sequence translation and GC-content calculator |

---

## 🎓 College Capstone & Project Presentation Points

When presenting BioBot for academic evaluation:
1. **Interdisciplinary Bridge:** Demonstrates how software engineering (React, Node.js) solves a real pedagogical bottleneck in molecular biology.
2. **Algorithm Grounding:** Explains both dynamic programming (Smith-Waterman, Needleman-Wunsch) and modern heuristics (BLAST seed matching).
3. **Frontier AI Inclusion:** Incorporates Google DeepMind's AlphaFold (CASP14/CASP15) and generative structural diffusion (RFdiffusion).
4. **Resilient Architecture:** Demonstrates graceful degradation—even without an active internet connection or external API key, the system maintains rich educational functionality.

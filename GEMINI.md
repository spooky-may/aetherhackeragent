# GEMINI.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

# AETHER HACKER AGENT — Design System & Implementation Guide

**Project**: Aether Hacker Agent  
**Status**: MVP Phase  
**Foundation**: Hermes Agent design system (adapted) + alanamultiskillagent user flow patterns  
**Last Updated**: 2026-05-02

---

## 1. PROJECT VISION

**Aether Hacker Agent** is a mystical, agent-driven security toolkit inspired by ancient Greek goddess mythology. It combines:
- **Medieval + Mystical Aesthetic**: Parchment warmth with divine, mysterious undertones
- **Skill-Based Architecture**: Modular, composable security tools organized by category and capability
- **User Flow Pattern**: Mirrored from `alanamultiskillagent` — hierarchical skill discovery, detailed skill pages, and execution workflows
- **Technical Rigor**: Enterprise-grade security tool documentation and deployment scripts

The aesthetic bridges the gap between ancient divinity and modern cybersecurity—**not fantasy-cheesy, but sophisticated and authoritative**.

---

## 2. DESIGN SYSTEM

### 2.1 COLOR PALETTE

#### Primary Colors
| Usage | Hex | Name | Role |
|-------|-----|------|------|
| **Background** | `#ffe6cb` | Warm Parchment | Main canvas—approachable, knowledge-holding feel (like ancient scrolls) |
| **Primary Text** | `#041C1C` | Dark Teal | Headers, body text—echoes the goddess's mystical armor |

#### Secondary Accents (Logo-Derived)
| Usage | Hex | Name | Role |
|-------|-----|------|------|
| **Dividers & Borders** | `#17a2a2` | Goddess Teal | Section dividers, ornamental borders, highlights |
| **CTAs & Energy** | `#00dd66` | Divine Green | Buttons, "Execute" actions, bright focal points (goddess's eyes) |
| **Hover & Mystical** | `#b74a9e` | Sacred Purple | Hover states, mystical effects, transitions |
| **Divine Accents** | `#d4af37` | Divine Gold | Special moments, ornaments, halo effects |

#### Color Hierarchy
```
Layer 1 (Background): #ffe6cb (warm, foundational)
Layer 2 (Text): #041C1C (authoritative, mysterious)
Layer 3 (Interaction): #17a2a2 (teal accents, structure)
Layer 4 (Action): #00dd66 (bright, calls to action)
Layer 5 (Emphasis): #b74a9e (mystical, hover)
Layer 6 (Special): #d4af37 (divine, rare moments)
```

### 2.2 TYPOGRAPHY

#### Font Stack
| Usage | Font | Class | Purpose |
|-------|------|-------|---------|
| **Headers** | `rulesexpanded` | `font-expanded` | Large, bold titles—feels like ancient inscriptions |
| **Body Text** | `mondwestfont` | `font-mondwest` | Primary reading—clean, modern sans-serif |
| **Code/Terminal** | `courier_prime` | `font-courier` | Technical commands and output—monospace |
| **Fallback** | `sansfont` | `font-sans` | Semantic headings, branding |

#### Typography Scale
```
H1 (Hero): 2.625rem (42px), font-expanded, bold, tracking-[0.0525rem]
H2 (Sections): 1.875rem (30px), font-expanded, bold
H3 (Subsections): 1.25rem (20px), font-expanded, bold
Body: 1.0625rem (17px), font-mondwest, normal, tracking-normal
Small Labels: 0.9375rem (15px), font-mondwest, uppercase, tracking-[0.1875rem]
Code/Terminal: 0.875rem (14px), font-courier, lowercase
```

#### Text Treatment
- **Uppercase**: Navigation labels, feature names (medieval registry feel)
- **Letter Spacing**: Generous (0.1875rem on labels, 0.0525rem on headers)
- **Antialiased**: Global, smooth rendering

### 2.3 VISUAL ELEMENTS & MEDIEVAL AESTHETICS

#### Decorative Elements
1. **Ornamental Borders**: Greek key patterns, floral dividers between sections
2. **Corner Brackets**: `⌈ ⌉ ⌊ ⌋` for card frames (medieval manuscript style)
3. **Drop Caps**: Large ornamental first letters for section intros
4. **Halo Effects**: Subtle radial glows behind skill cards (echo logo's divine halo)
5. **Divider Lines**: Ornate separators, not just solid lines

#### Micro-Interactions
- **Hover States**: Soft glow in `#17a2a2` (teal) or `#b74a9e` (purple)
- **Skill Cards**: Shimmer/glow effect on hover (goddess-like luminescence)
- **Blend Modes**: `plus-lighter`, `overlay`, `lighten` for depth without noise
- **Transitions**: Smooth 200-250ms, ease-out timing

#### Layout Structure
- **Parchment Feel**: Warm background with subtle texture (optional filler image with low opacity)
- **Grid System**: Centered, column-based (temple-like, not scattered grid)
- **Spacing**: Generous padding (32px on main, 16px on cards)
- **Max-width**: 1600px for content containment

---

## 3. USER FLOW PATTERN (Reference: `alanamultiskillagent`)

### 3.1 Flow Architecture

**Aether Hacker Agent** mirrors the hierarchical skill discovery model from alanamultiskillagent:

```
Landing Page
    ↓
Skill Category Browser (Info Gathering, Exploitation, Post-Exploit, etc.)
    ↓
Individual Skill Page (detailed view, like nmap example)
    ↓
Execution Modal / Terminal Sandbox
    ↓
Result / Output Handling
```

### 2. Skill Page Structure

Each skill is documented as a JSON object with the following structure:

```json
{
  "id": "skill-{tool-name}",
  "name": "Tool Display Name",
  "category": "Category Name (e.g., 'Information Gathering')",
  
  "overview": {
    "short_desc": "One-line summary",
    "long_desc": "Multi-paragraph detailed explanation of what the tool does, its methodology, use cases, and capabilities",
    "features": [
      "Feature 1",
      "Feature 2",
      "..."
    ]
  },
  
  "technical_specs": {
    "language": "Implementation language(s)",
    "license": "License type",
    "difficulty": "Beginner / Intermediate / Advanced"
  },
  
  "sandbox_simulation": {
    "trigger_command": "Example command to trigger the tool",
    "mock_output": [
      "Line 1 of output",
      "[DELAY-800] Line 2 (with simulated delay in ms)",
      "..."
    ]
  },
  
  "download_script": {
    "filename": "install-{tool-name}.sh",
    "content": "Full bash script for installation/deployment"
  },
  
  "tags": ["tag1", "tag2", "..."],
  "author": "Creator / Organization",
  "created_at": "ISO 8601 timestamp",
  "updated_at": "ISO 8601 timestamp"
}
```

### 3.3 Skill Categories

Organize skills hierarchically (like alanamultiskillagent):

- **Information Gathering** (Nmap, Shodan, theHarvester, DNS enumeration, etc.)
- **Vulnerability Scanning** (Nessus, OpenVAS, Nikto, etc.)
- **Exploitation** (Metasploit, Exploit-DB scripts, etc.)
- **Post-Exploitation** (Privilege escalation, lateral movement, persistence)
- **Reverse Engineering** (Ghidra, IDA, Radare2, etc.)
- **Cryptography** (John, Hashcat, SSL/TLS analysis, etc.)
- **Network Analysis** (Wireshark, tcpdump, Zeek, etc.)
- **Malware Analysis** (Cuckoo, VirusTotal integration, YARA, etc.)

---

## 4. COMPONENT PATTERNS

### 4.1 Skill Card (Category Listing Page)

**Visual Structure:**
```
┌─────────────────────────────────────┐
│ ⌈ Skill Name                    ⌉   │
│                                     │
│ Short description of what this      │
│ tool does in 1-2 sentences          │
│                                     │
│ [Category Badge]  [Difficulty]      │
│                                     │
│ [View Details →]                    │
└─────────────────────────────────────┘
```

**Styling:**
- Background: `#ffffff` with 5-10% opacity of `#17a2a2` on hover
- Border: 1px `#17a2a2` (subtle, medieval frame)
- Corner brackets: Optional ornamental corners
- Hover: Glow effect in `#b74a9e` (purple shimmer)
- Padding: 24px (4rem / 2)

### 4.2 Skill Detail Page

**Sections:**
1. **Hero**: Skill name, category, difficulty badge, short description
2. **Overview**: Long description, detailed features list
3. **Technical Specs**: Language, license, difficulty
4. **Sandbox Demo**: Terminal-style output simulation
5. **Installation**: Download script, deployment instructions
6. **Metadata**: Tags, author, dates

**Design:**
- Background: `#ffe6cb` (full parchment)
- Text: `#041C1C` (dark teal)
- Section dividers: Ornate lines in `#17a2a2`
- Code blocks: `font-courier`, `#041C1C` text, subtle background tint
- Buttons: `#00dd66` (divine green) for "Download Script", "Execute Sandbox"

### 4.3 Terminal Sandbox Simulation

**Visual:**
```
┌─ Terminal Emulator ─────────────────┐
│ ● ● ●         [Skill Name]          │
├─────────────────────────────────────┤
│ $ command-goes-here                 │
│ [DELAY-1200] Output line 1          │
│ Output line 2                       │
│ [OUTPUT-1500] Final line            │
│ $                                   │
└─────────────────────────────────────┘
```

**Styling:**
- Border: 4px double `#041C1C` (medieval, sturdy frame)
- Background: `#041C1C` with 40% opacity overlay
- Text: `#00dd66` (divine green terminal text)
- Font: `courier_prime`, lowercase
- Blinking cursor: `#b74a9e` (purple shimmer)
- Delay indicators: Gray, 50% opacity

---

## 5. IMPLEMENTATION GUIDELINES

### 5.1 File Structure

```
aetherhackeragent/
├── GEMINI.md                    # This file
├── logo.jpeg                    # Goddess logo
├── app/
│   ├── page.tsx                # Landing/category browser
│   ├── skill/
│   │   └── [id]/
│   │       └── page.tsx         # Individual skill detail page
│   └── components/
│       ├── SkillCard.tsx
│       ├── SkillDetailHero.tsx
│       ├── TerminalSandbox.tsx
│       └── ...
├── lib/
│   ├── skills.json              # All skill definitions (JSON array)
│   └── utilities.ts             # Parsing, formatting helpers
└── public/
    ├── skills-data/
    │   └── [skill-id]/
    │       └── install-script.sh
```

### 5.2 Next.js Configuration

- **Font loading**: Import `rulesexpanded`, `mondwestfont`, `courier_prime` as custom fonts
- **Color variables**: CSS custom properties at `:root` for dynamic switching (if light mode added later)
- **Tailwind**: Extend with custom color tokens:
  ```javascript
  {
    colors: {
      'parchment': '#ffe6cb',
      'godteal': '#041C1C',
      'accent-teal': '#17a2a2',
      'divine-green': '#00dd66',
      'sacred-purple': '#b74a9e',
      'divine-gold': '#d4af37'
    }
  }
  ```

### 5.3 Content Management

- **Skills data**: Store as `lib/skills.json` (JSON array of skill objects)
- **Scripts**: Store installation scripts in `public/skills-data/{skill-id}/install-{tool}.sh`
- **Updates**: Create new skill entries by extending the JSON array

### 5.4 Responsive Design

- **Mobile** (< 768px): Single-column layout, stacked cards, full-width
- **Tablet** (768px - 1024px): 2-column grid for skill cards
- **Desktop** (> 1024px): 3-column grid, full experience

### 5.5 Sandbox Parser Implementation (Critical)

To create the illusion of a real terminal execution, the frontend must correctly parse the `mock_output` array from `skills.json` and handle the `[DELAY-ms]` markers asynchronously.

**Implementation Rules for the Sandbox Component:**

1. **Never render raw markers:** The string `[DELAY-800]` must NEVER be visible to the user.
2. **Regex Extraction:** Use regex to extract the delay value and the actual text content.
   - Example: `/\[DELAY-(\d+)\]\s*(.*)/`
3. **Asynchronous Queue:** Create an async function (or `useEffect` with timeouts) that iterates through the `mock_output` array:
   - If the line has no delay marker, render it immediately.
   - If the line has `[DELAY-800]`, wait 800ms *before* rendering the text that follows it.
4. **Auto-Scroll:** The terminal container must automatically scroll to the bottom (`scrollTop = scrollHeight`) every time a new line is rendered.

**Example Logic Pattern:**
```javascript
for (const line of mock_output) {
  const match = line.match(/\[DELAY-(\d+)\]\s*(.*)/);
  if (match) {
    const delayMs = parseInt(match[1], 10);
    const text = match[2];
    await new Promise(r => setTimeout(r, delayMs));
    appendLine(text);
  } else {
    appendLine(line);
  }
}
```

### 5.6 File Download Handling

When the user clicks "Download Script", do not route them to a new page. Use a Blob to generate the `.sh` file dynamically on the client-side from the `download_script.content` string.

**Pattern:**
```javascript
const blob = new Blob([skill.download_script.content], { type: 'text/x-sh' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = skill.download_script.filename;
a.click();
URL.revokeObjectURL(url);
```

**Key Points:**
- No server-side file serving needed—everything is client-side generated
- The script content is already embedded in the JSON, so retrieve it directly
- Filename comes from `skill.download_script.filename`
- Always revoke the object URL after download to prevent memory leaks

---

## 6. REFERENCE: alanamultiskillagent User Flow

The user flow is **structurally identical** to alanamultiskillagent:

1. **Landing/Index**: Show all skill categories with card previews
2. **Category Page**: Browse skills within a category (filtered view)
3. **Skill Detail**: Full skill documentation, specs, demo
4. **Execution**: Modal with terminal sandbox, download options
5. **Follow-up**: Links to related skills, next steps

**Differences** (Aether-specific):
- Medieval/mystical visual styling instead of tech-modern
- Goddess logo integration (visible in header, skill cards)
- Color palette swap (warm parchment + teal text)
- Ornamental UI elements (brackets, dividers, glows)

---

## 7. INTERACTION & ANIMATION GUIDELINES

### 7.1 Hover Effects
- **Cards**: Glow in `#b74a9e` (purple) with 250ms ease-out
- **Links**: Color shift to `#17a2a2` (teal) with underline
- **Buttons**: Brighten `#00dd66`, subtle shadow
- **Text**: Subtle shimmer (opacity 0 → 0.5 on pseudo-element)

### 7.2 Transitions
- **Duration**: 200-250ms for micro-interactions
- **Timing**: `ease-out` for natural feel
- **Avoid**: Jarring scale transforms, hard snaps

### 7.3 Special Effects
- **Halo Glow**: Radial gradient in `#17a2a2` (25% opacity) behind skill cards
- **Terminal Cursor Blink**: Purple (`#b74a9e`) with 1s cycle
- **Delay Indicators**: Gray text, `[DELAY-XXX]` markers in sandbox output

---

## 8. CONTENT TONE & VOICE

- **Professional**: Technical accuracy, enterprise security focus
- **Mystical**: Ancient, authoritative, goddess-like tone
- **Accessible**: Complex concepts explained clearly, no gatekeeping
- **Confident**: Skill descriptions convey mastery and reliability

**Example**:
> "Nmap operates as a versatile network discovery and security auditing utility designed to systematically explore network topologies and identify active hosts, open ports, running services, and potential security vulnerabilities. Its architecture employs sophisticated stateful inspection mechanisms..."

---

## 9. FUTURE EXTENSIONS

- [ ] Light mode variant (inverted colors: `#041C1C` bg, `#ffe6cb` text)
- [ ] Dark mode toggle (like Hermes)
- [ ] Skill search & filtering
- [ ] Favorite/bookmark skills
- [ ] User skill execution history
- [ ] Community contributions (new skills from users)
- [ ] Skill versioning & changelog
- [ ] Related skills linking
- [ ] Prerequisite chaining (skill dependencies)

---

## 10. APPROVAL & SIGN-OFF

**Design System**: ✅ Locked (Medieval + Goddess + Colors)  
**User Flow**: ✅ Referenced (alanamultiskillagent pattern)  
**JSON Structure**: ✅ Documented (skill object spec)  
**Color Palette**: ✅ Finalized (Parchment bg, Teal text, Accents defined)  
**Next Phase**: Build → Component development & skill data population

---

**Questions?** Refer back to the Hermes Agent dark mode HTML analysis, logo goddess aesthetic, and alanamultiskillagent user flow architecture.
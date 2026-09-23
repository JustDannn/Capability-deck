# Capability Deck Website — Design & Build Skill

## Purpose

Build an interactive, stakeholder-facing capability deck as a website for a 4-person Semester 5 Data Science student project team from Telkom University Surabaya.

The website is not a commercial agency website, SaaS landing page, or startup pitch.

Its purpose is to let a potential institutional stakeholder quickly understand:

1. Who the team is
2. What the team can actually do
3. How the team approaches problems
4. What the team has built
5. What collaboration with the team looks like
6. How to start a discovery conversation

The site should communicate one central idea:

> **Understand the problem first. Build what actually helps.**

The team should feel capable, reliable, technically strong, curious, and grounded — without overstating professional experience.

---

# 1. PRODUCT POSITIONING

## Team identity

Use this positioning:

> A student project team with complementary capabilities in software engineering, data science, artificial intelligence, and project coordination.

Do NOT position the team as:

- a consulting agency
- a software house
- an AI consultancy
- a professional technology company
- an enterprise development team

The team is made up of four Semester 5 Data Science students at Telkom University Surabaya.

## Brand personality

The experience should communicate:

- Reliable
- Curious
- Technical
- Thoughtful
- Practical
- Adaptable
- Problem-oriented
- Young but credible
- Confident without arrogance

Avoid:

- Corporate jargon
- Startup clichés
- Excessive gradients
- Neon cyberpunk aesthetics
- Overly futuristic AI visuals
- Fake enterprise credibility
- Generic "we transform businesses" messaging
- Excessive animations
- Loud visual effects

---

# 2. VISUAL DIRECTION

## Overall aesthetic

Primary visual language:

> **Minimal Bento + Soft Glassmorphism + Editorial Technology**

The site should feel like a premium interactive digital capability deck.

Use a restrained visual system:

- Soft off-white / near-white background
- Very dark charcoal typography
- Muted turquoise as the primary accent
- Extremely subtle secondary pastel accents
- Translucent glass surfaces
- Thin borders
- Large rounded corners
- Generous whitespace
- Soft shadows
- Fine visual details

The aesthetic should feel calm and sophisticated rather than flashy.

## Suggested palette

Use CSS variables so the palette can be adjusted globally.

```css
--background: #F5F7F7;
--surface: rgba(255, 255, 255, 0.62);
--surface-strong: rgba(255, 255, 255, 0.82);
--text-primary: #172020;
--text-secondary: #657171;
--border: rgba(23, 32, 32, 0.10);
--accent: #39B9B0;
--accent-soft: #DDF4F1;
--accent-dark: #238D87;
```

Do not force every component to use turquoise.

Turquoise should function as an accent, not as the entire color system.

## Typography

Use a modern sans-serif.

Preferred:

- Inter
- Geist
- SF Pro-like system font

Typography hierarchy:

- Huge editorial headline
- Medium-weight section titles
- Compact eyebrow labels
- Comfortable body text
- Small metadata labels

Avoid overly futuristic fonts.

---

# 3. LAYOUT SYSTEM

## Primary layout

Use Bento Grid as the dominant layout language.

Cards should have varying sizes and hierarchy rather than a repetitive 3-column card grid.

Example:

```text
┌──────────────────────────────┬───────────────┐
│                              │               │
│       PRIMARY MESSAGE        │   META /      │
│                              │   TEAM        │
├──────────────┬───────────────┼───────────────┤
│ CAPABILITY   │ CAPABILITY    │ CAPABILITY    │
├──────────────┴───────────────┼───────────────┤
│                              │               │
│       FEATURED PROJECT       │   RESULT      │
│                              │               │
└──────────────────────────────┴───────────────┘
```

Do not make every card identical.

Use:

- Large feature cards
- Small supporting cards
- Horizontal cards
- Tall cards
- Full-width sections
- Floating glass elements

## Responsive behavior

Desktop should feel like the full interactive deck.

Tablet should preserve the hierarchy.

Mobile should become a vertical narrative rather than trying to preserve the desktop bento literally.

Cards can stack naturally.

---

# 4. MOTION / INTERACTION

Use Motion / Framer-style animation principles.

Animation should communicate hierarchy and continuity, not merely decoration.

## Global principles

- Fast
- Soft
- Intentional
- Low amplitude
- Natural easing
- No excessive bouncing
- No constant movement

Preferred timing:

- Micro interactions: 150–250ms
- Card transitions: 300–500ms
- Section reveals: 500–800ms
- Hero choreography: 700–1200ms

Use spring motion selectively.

## Recommended interactions

### Hero

On page load:

1. Background appears
2. Small eyebrow fades upward
3. Main headline reveals
4. Supporting text follows
5. Bento cards subtly float into place

Do not delay the main content unnecessarily.

### Bento cards

On hover:

- Translate upward by 2–5px
- Slightly increase surface opacity
- Border becomes subtly more visible
- Optional very subtle accent glow

Never use dramatic scale effects.

### Navigation

Use a compact floating glass navigation.

Suggested items:

- About
- Capabilities
- Approach
- Work
- Collaboration
- Contact

Scrolling should feel smooth.

### Scroll progress

Optional subtle scroll progress indicator.

Avoid giant scroll animations that make the website difficult to navigate.

### Project cards

Projects can reveal additional information on hover/tap.

Desktop:
- Hover reveals metadata or expands visual treatment.

Mobile:
- Tap / accordion interaction.

---

# 5. INFORMATION ARCHITECTURE

The website should contain exactly these six conceptual sections.

## SECTION 01 — WHO WE ARE

Headline:

> **Building Solutions Around Real Problems.**

Supporting copy:

> We are a team of four Semester 5 Data Science students from Telkom University Surabaya, combining software engineering, data science, artificial intelligence, and project coordination.

Supporting statement:

> Rather than starting with a predetermined technology, we believe a good solution starts with understanding the problem.

Include a bento composition containing:

- Team size
- University
- Data Science
- 4 complementary capabilities

Team:

### Nur Fattah Hamdani
Software Engineering · Web Development · System Analysis

### Muhammad Ridwan
Data Science · Artificial Intelligence · Computer Vision

### Rafif Fikri
Data Science · Machine Learning · AI

### Novena Aurelia Luisma
Coordination · Communication · Documentation

Core principle:

> **Understand the problem first. Build what actually helps.**

---

# 6. SECTION 02 — WHAT WE CAN DO

Headline:

> **From Data to Working Solutions.**

Present four capability areas.

## Software Engineering

- Web-based applications
- Backend development
- Database design & management
- API development
- Authentication & access control
- System analysis & technical documentation
- Deployment

## Data & Analytics

- Data cleaning & preprocessing
- Exploratory data analysis
- Data visualization
- Statistical analysis
- Time-series analysis
- Predictive modeling

## Artificial Intelligence

- Machine learning
- Deep learning
- Computer vision
- Model training & evaluation
- Explainable AI

## Connecting the Pieces

Key message:

> We can connect data → models → software into a solution that people can actually use.

Visualize this as a subtle interactive flow:

```text
DATA
  ↓
INSIGHT
  ↓
MODEL
  ↓
SOFTWARE
  ↓
USE
```

Do not imply that every project requires all five stages.

---

# 7. SECTION 03 — HOW WE WORK

Headline:

> **Problem First. Technology Second.**

Core statement:

> We do not believe every problem needs AI, a new application, or another dashboard.

Use a four-stage interactive process:

## 01 — UNDERSTAND

> We learn how the process currently works.

Questions:
- Who is involved?
- What information is used?
- How does the process flow?

## 02 — EXPLORE

> We identify friction, repetitive work, information gaps, and opportunities for improvement.

## 03 — BUILD

> We select the appropriate approach based on the problem.

Possible interventions:

- Digital system
- Data analysis
- Automation
- AI / machine learning
- Combination of approaches

## 04 — VALIDATE

> We test whether what we build actually addresses the original need.

Closing statement:

> **AI is not the starting point. Technology is not the goal. Solving the right problem is.**

Make this section visually distinct.

A horizontal or radial process animation is appropriate.

---

# 8. SECTION 04 — WHAT WE'VE BUILT

Headline:

> **Experience Across Systems, Data & AI.**

Use large interactive project cards.

## PROJECT 01 — POTIK

Title:

> POTIK — Organizational Web System

Context:

> A web-based system developed for Pojok Statistik Telkom University Surabaya, designed around the organization's activities and workflows.

Role:

> Software Engineering & System Development

Demonstrates:

- System analysis
- Web development
- Database
- Authentication
- Organizational coordination
- Deployment

Important framing:

This was an actual organizational project and is the strongest evidence of building software around an organization's needs.

Do not claim formal consulting/client experience.

---

## PROJECT 02 — TRASH-U

Title:

> TRASH-U — AI-Powered Mobile Application

Context:

> A Kotlin-based mobile application that uses computer vision to classify different types of waste and incorporates gamification through quests and streaks.

Role:

> Mobile Engineering · Data Science · AI

Demonstrates:

- Computer vision
- Model development
- Mobile development
- AI integration
- Product implementation

---

## PROJECT 03 — CARBON INTENSITY RESEARCH

Title:

> Carbon Intensity Research

Context:

> A research project investigating carbon intensity data and forecasting approaches in collaboration with a lecturer.

Demonstrates:

- Data analysis
- Time-series modeling
- Research
- Experimental methodology

---

## PROJECT 04 — ROBUST LUNG DISEASE CLASSIFICATION

Title:

> Robust Lung Disease Classification

Context:

> A research project conducted with a lecturer, exploring robust lung disease classification on an imbalanced dataset using deep learning and explainable AI.

Demonstrates:

- Deep learning
- Computer vision
- Explainable AI
- Research
- Model evaluation

Important:

This project belongs primarily to Muhammad Ridwan's research experience.

Do not represent it as a production medical product.

Do not claim clinical deployment or clinical readiness.

---

# 9. SECTION 05 — WHAT COLLABORATION LOOKS LIKE

Headline:

> **A Collaborative Process, Not a Predefined Product.**

Core message:

> We are not coming with a solution that has already been decided. We want to understand the operational context first, then determine where our capabilities can provide value.

Create a two-sided bento:

## WE BRING

### Technical Capability
Software engineering, data science, and AI capabilities across the team.

### Flexible Approach
We adapt our development process as we learn more about the problem and encounter technical constraints.

### Cross-Disciplinary Thinking
We can approach the same problem from process, software, data, and AI perspectives.

### Willingness to Explore
We are open to discovering that the right solution may be different from what we initially expected.

## WE NEED FROM OUR STAKEHOLDER

### Context
How the current process works.

### Challenges
Where the actual difficulties occur.

### Information
What data, systems, or resources are already available.

### Feedback
Whether a proposed solution genuinely fits the people who will use it.

Closing statement:

> **Not to build more technology — but to build something useful.**

---

# 10. SECTION 06 — LET'S EXPLORE

This should be visually minimal.

Headline:

> **There May Be More to Improve Than Meets the Eye.**

Copy:

> Every organization has processes, information, and data.
>
> Some are already working well.
> Some create unnecessary friction.
> Some contain opportunities that have simply never been explored.

Then:

> We would like to understand how the Logistics unit at Telkom University Surabaya currently works and explore whether there is a problem, process, or opportunity where our team can contribute.

CTA:

> **Start a Discovery Conversation**

Secondary line:

> No predefined solution. No commitment to a specific technology.

Question:

> **What is a process in your work that you wish could work better?**

Footer:

> Student Project Team · Data Science · Telkom University Surabaya

---

# 11. NAVIGATION

Use a floating glass pill.

Desktop:

```text
[ Team ] [ Capabilities ] [ Approach ] [ Work ] [ Collaboration ] [ Explore ]
```

The navigation should remain unobtrusive.

On mobile:

- Compact menu button
- Glass dropdown / sheet
- Smooth section scrolling

Do not use a giant sticky navbar.

---

# 12. HERO DIRECTION

The first screen is extremely important.

Recommended composition:

```text
small eyebrow
STUDENT PROJECT TEAM · DATA SCIENCE · TELKOM UNIVERSITY SURABAYA

large headline
Building Solutions
Around Real Problems.

short supporting paragraph

[ Explore Our Work ]   [ Our Approach ]

                 ┌──────────────┐
                 │ DATA         │
          ┌──────┴──────────────┤
          │ SOFTWARE            │
          ├──────────────┬──────┤
          │ AI           │ TEAM │
          └──────────────┴──────┘
```

The bento visual should suggest the team's capabilities rather than showing generic AI imagery.

Possible visual motifs:

- Data points
- Small charts
- Code snippets
- System nodes
- Subtle grid
- Abstract flow lines
- Tiny metadata labels

Avoid:

- Robot illustrations
- Brain/AI stock graphics
- Generic 3D renders
- Random dashboards
- Excessive code decoration

---

# 13. GLASSMORPHISM RULES

Glass should be subtle.

Use:

```css
background: rgba(255, 255, 255, 0.55);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.65);
box-shadow: 0 12px 40px rgba(20, 30, 30, 0.06);
```

Do not put blur on every element.

Hierarchy:

- Background: flat
- Major cards: glass
- Secondary cards: translucent / lightly bordered
- Important CTA: solid accent
- Small metadata: no container where possible

Glass should create depth, not visual noise.

---

# 14. CONTENT RULES

Never invent:

- Client names
- Stakeholder names
- Project outcomes
- Revenue
- User counts
- Performance statistics
- Production usage
- Enterprise deployments
- Formal consulting experience
- Professional certifications
- Team achievements not provided
- Technology experience not provided

If information is missing, use neutral language or leave a placeholder.

Do not turn student projects into commercial case studies.

Use factual verbs:

- Built
- Developed
- Explored
- Investigated
- Designed
- Implemented
- Collaborated
- Evaluated

Avoid unsupported claims:

- Transformed
- Revolutionized
- Optimized business operations
- Delivered measurable business value
- Industry-leading
- Enterprise-grade
- Production-ready

---

# 15. ACCESSIBILITY & UX

Requirements:

- Strong text contrast
- Keyboard-accessible navigation
- Visible focus states
- Reduced-motion support
- Semantic headings
- Accessible buttons
- Alt text for meaningful images
- Do not rely on animation to communicate information
- Mobile-friendly touch targets

If the user prefers reduced motion, disable or simplify entrance and hover animations.

---

# 16. PERFORMANCE

The website should feel lightweight.

Prefer:

- CSS transitions
- Motion primitives
- SVG
- CSS gradients
- Small assets

Avoid unnecessary:

- Video backgrounds
- Heavy 3D scenes
- Huge image files
- Continuous particle systems
- Scroll-jacking
- Excessive blur layers

Animations must not interfere with reading.

---

# 17. IMPLEMENTATION PRINCIPLES

If using React / Next.js / Framer / Motion:

- Componentize each section
- Create reusable BentoCard components
- Create reusable ProjectCard components
- Keep content data-driven where practical
- Centralize colors and spacing tokens
- Avoid duplicated animation definitions
- Keep animation variants reusable
- Respect reduced motion
- Keep layout responsive

Suggested components:

```text
CapabilityDeck
├── Navigation
├── Hero
├── TeamSection
├── CapabilitySection
│   ├── CapabilityCard
│   └── CapabilityFlow
├── ApproachSection
│   └── ProcessStep
├── WorkSection
│   └── ProjectCard
├── CollaborationSection
│   ├── BringCard
│   └── NeedCard
└── ExploreSection
```

---

# 18. QUALITY BAR

Before considering the site complete, verify:

### Content
- All six sections are present.
- No unsupported claims were added.
- Portfolio descriptions are accurate.
- Ridwan's lung disease research is correctly attributed.
- The team is not presented as a professional agency.

### Visual
- Bento layout is dominant.
- Glassmorphism is subtle.
- Color palette is soft.
- Typography has strong hierarchy.
- Cards have visual variation.
- The page does not feel like a generic SaaS landing page.

### Motion
- Entrance animations are coordinated.
- Hover interactions are subtle.
- Scrolling feels smooth.
- No animation blocks readability.
- Reduced-motion behavior exists.

### UX
- Navigation works.
- Mobile layout is intentionally designed.
- CTA leads naturally to discovery/contact.
- Sections feel like one continuous narrative.

### Final emotional impression

A stakeholder should finish the site thinking:

> **"These students understand technology, but more importantly, they seem willing to understand our problem before trying to build something."**

That is the desired outcome.

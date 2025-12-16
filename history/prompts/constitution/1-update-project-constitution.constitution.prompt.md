---
id: 1
title: Update project constitution
stage: constitution
date: 2025-12-16
surface: agent
model: claude-sonnet-4-5-20250929
feature: AI/Spec-Driven Book with Embedded RAG Chatbot
branch: main
user: [USER]
command: /sp.constitution
labels: ["constitution", "setup", "governance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:
- null
---

## Prompt

/sp.constitution

Project: AI/Spec-Driven Book with Embedded RAG Chatbot

Core principles:
- Spec-first, reproducible development (Spec-Kit Plus)
- Faithful, non-hallucinatory AI behavior
- Clear, developer-focused writing
- Maintainable, documented architecture

Key standards:

Book:
- Authoring: Docusaurus
- Workflow: Claude Code + Spec-Kit Plus
- Hosting: GitHub Pages
- Structured chapters, consistent terminology

RAG chatbot:
- Scope: Answers only from book content
- Modes:
  - Full-book Q&A
  - User-selected text–only Q&A
- Stack (required):
  - OpenAI Agents/ChatKit SDKs
  - FastAPI
  - Neon Serverless Postgres
  - Qdrant Cloud (Free Tier)
- Rules:
  - Retrieve before generate
  - Cite source sections internally
  - Explicit "not found" when no context exists

Constraints:
- Chatbot embedded in Docusaurus site
- Static frontend, documented backend
- Free-tier compatible services

Deliverables:
- GitHub repo with book, specs, and code
- Deployed GitHub Pages site
- FastAPI RAG service + DB schemas

## Response snapshot

Updated the project constitution file (.specify/memory/constitution.md) with the following content:

- Project name: AI/Spec-Driven Book with Embedded RAG Chatbot
- Six core principles:
  1. Spec-First, Reproducible Development
  2. Faithful, Non-Hallucinatory AI Behavior
  3. Clear, Developer-Focused Writing
  4. Maintainable, Documented Architecture
  5. Free-Tier Compatible Services
  6. RAG-Focused Functionality
- Additional constraints and requirements section with technology stack details
- Development workflow and quality standards section
- Governance section with compliance requirements
- Version 1.0.0, ratified on 2025-12-16

## Outcome

- ✅ Impact: Created initial project constitution with clear principles and governance structure
- 🧪 Tests: No tests required for constitution update
- 📁 Files: Updated .specify/memory/constitution.md with project-specific governance document
- 🔁 Next prompts: Proceed with feature specification and planning
- 🧠 Reflection: Constitution provides clear foundation for all future development decisions

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification process
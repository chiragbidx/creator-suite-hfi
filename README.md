# 🐼 Panda Template Manifest – Innovative Startup Template

> **This document defines how AI must understand and operate on the Innovative Startup template inside Panda.**  
> It is the highest authority for AI-driven code suggestions and modifications.

---

## 1. Template Metadata (DO NOT MODIFY STRUCTURE)

```md
# Panda Template Manifest

template_name: "Innovative Startup"
template_id: "panda-innovative-startup-001"
template_version: "1.0.0"
template_type: "marketing-landing"
layout_style: "modern-startup"
technology_stack: ["HTML5", "CSS3"]
responsive: true
dark_mode: false
rtl_supported: false

author: "Panda Templates"
last_updated: "2026-01-04"
```

---

## 2. Template Intent & Design Philosophy

```md
## Template Intent

This template is designed for:
- Tech startups
- Innovative products
- SaaS companies
- Founder-led ventures

Primary goals:
- Communicate innovation clearly
- Build early trust
- Drive sign-ups or inquiries
```

### Design Rules

```md
## Design Rules

- Clean modern layout
- Strong hero messaging
- Balanced use of imagery and copy
- Clear CTA flow
```

⚠️ **AI DESIGN RULE**  
Do NOT introduce disruptive layouts, heavy animation, or new design systems unless explicitly requested.

---

## 3. File & Folder Structure (SOURCE OF TRUTH)

```md
## File Structure

/
├── index.html                         # Primary landing page
├── innovative-startup/
│   ├── standalone.html                # Alternate layout
│   ├── css/
│   │   ├── style.css                  # Core styles (READ-ONLY)
│   │   └── custom.css                 # Custom overrides (READ-ONLY)
│   └── css/line-awesome.min.css
├── vendor/                            # Third-party libraries (READ-ONLY)
├── assets/                            # Images and icons
```

### File Rules

```md
- Do NOT edit vendor files
- Do NOT rename folders or files
- Do NOT inline CSS into HTML
- custom.css is READ-ONLY unless explicitly requested
```

---

## 4. Change Control Rules (CRITICAL – AI ENFORCED)

### styles.css & custom.css (STRICT)

```md
- style.css and custom.css are READ-ONLY by default
- Modify CSS ONLY if the user explicitly requests styling changes
- Vendor CSS must NEVER be edited
```

---

### Images (STRICT)

```md
Images are READ-ONLY by default.

Image changes are allowed ONLY if the user explicitly:
- Mentions the image (filename, path, section, or alt text), OR
- Provides a direct URL for replacement

Vague visual requests must be rejected.
```

---

### Sections (STRICT)

```md
ALL sections across all HTML files are IMMUTABLE by default.

The AI MUST NOT:
- Add sections
- Remove sections
- Reorder sections
- Merge sections

Allowed ONLY if the user explicitly names the section or file.
```

---

## 5. Default AI Assumptions

```md
Unless explicitly stated:

- HTML structure remains unchanged
- CSS remains unchanged
- Images remain unchanged
- All sections remain present
- Only TEXT CONTENT is editable
```

---

## 6. Sections Overview (AI NAVIGATION MAP)

```md
1. Header / Navigation
2. Hero
3. Problem / Solution
4. Product Features
5. How It Works
6. Benefits
7. Testimonials
8. Pricing / Plans
9. Call To Action
10. Footer
```

---

## 7. Section-Level Contracts

```md
## Section: Hero

section_id: "hero"
html_container_id: "hero-section"
css_scope_prefix: ".hero"

Purpose:
- Introduce product vision
- Capture attention

Editable Content:
- Headline
- Subheadline
- CTA labels

Non-Editable:
- Layout
- Animations
- Class names
```

---

## 8. Section Integrity Contract

```md
Sections are IMMUTABLE by default.

AI MAY:
- Edit text content
- Update copy length

AI MUST NOT:
- Change DOM structure
- Rename classes or IDs
- Remove containers
```

---

## 9. CSS Architecture Rules

```md
- Section-scoped styles
- No frameworks
- No !important usage
- Mobile-first approach
```

---

## 10. Typography System

```md
Typography is defined in style.css
AI must NOT change fonts or weights unless explicitly requested
```

---

## 11. Color System

```md
Color palette is defined in CSS
AI must NOT introduce new colors unless explicitly approved
```

---

## 12. AI Code Suggestion Modes

### Full Code Suggestion

```md
- Return full file content
- Use only for large updates
```

### Diff-Based Partial Suggestion

```md
- Return minimal diffs
- Preferred for small edits
```

---

## 13. Mode Conflict Resolution

```md
Priority:
1. Explicit user instruction
2. Diff-based suggestion (default)
3. Full code suggestion
```

---

## 14. Change Permission Matrix

```md
| Change Type       | Default | Explicit |
|------------------|---------|----------|
| Text             | ✅      | ❌       |
| CSS              | ❌      | ✅       |
| Images           | ❌      | ✅       |
| Sections         | ❌      | ✅       |
| Vendor files     | ❌      | ❌       |
| New files        | ❌      | ✅       |
| JavaScript       | ❌      | ✅       |
```

---

## 15. AI Hard Stop Conditions

```md
The AI MUST STOP if:
- CSS change is implied but not requested
- Image change is implied without image reference or URL
- Section change is implied without section name
- Vendor files are targeted
```

---

## 16. Version Notes

```md
v1.0.0
- Initial Innovative Startup template
- Startup-focused messaging
- Vendor-managed assets
```

---

## 17. AI FINAL DIRECTIVE

```md
This manifest is the highest authority.

If conflicts arise:
→ Follow this document
→ Ask for clarification
→ Do NOT assume
```

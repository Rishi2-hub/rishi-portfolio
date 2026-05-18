# 🎨 Rishi Kumar Kushwaha — Personal Portfolio Website

A modern, dark-themed personal portfolio website for **Rishi Kumar Kushwaha**, Graphic Designer & B.Sc. Hons IT Graduate.

---

## 📁 Folder Structure

```
rishi-portfolio/
│
├── index.html              ← Main HTML file (open this in browser)
├── README.md               ← You are here
│
├── css/
│   └── style.css           ← All styles (colours, layout, animations)
│
├── js/
│   └── main.js             ← Cursor, scroll effects, reveal animations
│
└── assets/
    └── images/             ← Put your photos & project images here
```

---

## 🚀 How to Run in VS Code

### Option 1 — Open directly (quickest)
1. Open the `rishi-portfolio` folder in VS Code
2. Right-click `index.html` → **"Open with Live Server"**
   *(Requires the **Live Server** extension — see below)*

### Option 2 — Double-click
Just double-click `index.html` to open it in your browser. No setup needed.

---

## 🔌 Recommended VS Code Extensions

| Extension | Why |
|---|---|
| **Live Server** (Ritwick Dey) | Auto-refreshes browser on save |
| **Prettier** | Auto-formats your HTML/CSS/JS |
| **HTML CSS Support** | Autocomplete for classes |

Install via VS Code → Extensions (`Ctrl+Shift+X`) → search the name above.

---

## ✏️ How to Customise

### 1. Add Your Photo
- Save your photo as `assets/images/rishi.jpg`
- In `index.html`, find the comment `<!-- ✏️ Replace with your actual photo -->`
- Replace the `<div class="photo-placeholder">RK</div>` with:
  ```html
  <img src="assets/images/rishi.jpg" alt="Rishi Kumar Kushwaha" style="width:100%;height:100%;object-fit:cover;">
  ```

### 2. Add Portfolio Project Images
- Save images to `assets/images/` (e.g. `project1.jpg`, `project2.jpg`)
- In `index.html`, find the portfolio section comments `<!-- ✏️ Replace emoji with... -->`
- Replace each `<div class="p-img-inner p1">🎯</div>` with:
  ```html
  <img src="assets/images/project1.jpg" alt="Project Name" style="width:100%;height:100%;object-fit:cover;">
  ```

### 3. Update Contact / Social Links
Search for `✏️` in `index.html` — these mark every place to update:
- LinkedIn URL → `href="https://linkedin.com/in/YOUR-USERNAME"`
- Behance URL  → `href="https://behance.net/YOUR-USERNAME"`
- Instagram    → `href="https://instagram.com/YOUR-USERNAME"`
- Dribbble     → `href="https://dribbble.com/YOUR-USERNAME"`

### 4. Change Colours
Open `css/style.css` and edit the `:root` block at the top:
```css
:root {
  --bg:      #0d0d0d;   /* Page background */
  --surface: #141414;   /* Card/section background */
  --accent:  #e8c87a;   /* Gold highlight colour */
  --text:    #f0ece4;   /* Main text colour */
  --muted:   #7a7672;   /* Subdued text */
}
```

### 5. Update Stats (Hero Section)
In `index.html`, find the `.hero-stats` div and change the numbers:
```html
<div class="stat-num">1.5+</div>  ← years of experience
<div class="stat-num">30+</div>   ← projects done
<div class="stat-num">15+</div>   ← happy clients
```

---

## 📞 Contact Details (already in site)

| Type | Value |
|---|---|
| Gmail | rrishikk07@gmail.com |
| Phone | +977 9851273152 |
| Location | Kathmandu, Nepal |

---

## 🌐 Deploying Online (Free)

### GitHub Pages
1. Create a free account at [github.com](https://github.com)
2. Create a new repository named `rishi-portfolio`
3. Upload all files
4. Go to **Settings → Pages → Source → main branch**
5. Your site will be live at `https://YOUR-USERNAME.github.io/rishi-portfolio`

### Netlify (Drag & Drop — even easier)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag your entire `rishi-portfolio` folder onto the Netlify dashboard
3. Done — you'll get a live URL instantly!

---

## 🛠 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — Cursor, scroll effects, IntersectionObserver
- **Google Fonts** — Playfair Display + DM Sans
- No frameworks, no dependencies — runs anywhere!

---

## 📄 License

This code is for personal use by **Rishi Kumar Kushwaha**.  
Feel free to modify it however you like!

---

*Built with ❤️ | Portfolio v1.0*

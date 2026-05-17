# 🎯 Tile Selector AI

A modern, AI-powered strategic tile selection game built with minesweeper mechanics. Pure PWA (Progressive Web App) with zero dependencies.

**[Play Now →](https://grandpappylongjohnson-alt.github.io/tile-selector-ai/)**

## ✨ Features

### 🤖 **Advanced AI Engine**
- **Probability-based suggestions** that improve as the game progresses
- **Spatial analysis** to spread picks strategically across the board
- **Pattern recognition** for smarter tile recommendations
- **Controlled randomness** for replayability

### 💾 **Full Game Persistence**
- Auto-saves every move to localStorage
- Resume interrupted games instantly
- Track stats: wins, streaks, win rate, total games
- Toggle auto-save on/off anytime
- Clear history button

### ♿ **Accessibility**
- Full keyboard navigation (Tab, Enter, Space)
- ARIA labels for screen readers
- High contrast design for visibility
- Touch-friendly mobile UI
- Responsive grid layout

### 🎨 **Modern Beautiful UI**
- Gradient backgrounds & glow effects
- Smooth animations & transitions
- Real-time stats dashboard
- AI suggestions highlighted with cyan glow
- Dark mode optimized design

### 📱 **Progressive Web App (PWA)**
- Works fully offline after first load
- Install as native app on mobile & desktop
- Service Worker caching strategy
- Manifest.json with icons & metadata
- Fast load times

### 📊 **Game Statistics**
- Win rate percentage
- Best streak tracker
- Total games played
- Modal stats display

## 🎮 How to Play

1. **Select tiles** from the 5×5 grid
2. **Avoid mines** (💣) - one hit and you lose
3. **Find 3 safe tiles** (✓) to win
4. **Follow AI suggestions** (cyan glow) for smart picks
5. **Build your streak** and climb the leaderboard

## 🚀 Installation

### **Play Online**
Visit: [grandpappylongjohnson-alt.github.io/tile-selector-ai](https://grandpappylongjohnson-alt.github.io/tile-selector-ai)

### **Install Locally**
```bash
git clone https://github.com/grandpappylongjohnson-alt/tile-selector-ai.git
cd tile-selector-ai
# Serve with any HTTP server
python -m http.server 8000
# Open http://localhost:8000
```

### **Install as App**
1. Open in supported browser (Chrome, Edge, Safari)
2. Click stats button → "Install Now"
3. App installs to home screen
4. Play offline anytime

## 📁 Project Structure

```
tile-selector-ai/
├── index.html          # Complete game & UI
├── sw.js               # Service Worker (offline support)
├── manifest.json       # PWA metadata & icons
└── README.md           # This file
```

## 🎯 Game Configuration

Edit these constants in `index.html` to customize:

```javascript
const CONFIG = {
  mines: 3,              // Number of mines on board
  maxSafePicks: 3,       // Tiles needed to win
  gridSize: 25           // Total tiles (5×5)
};
```

## 🔒 Privacy

- **All data stored locally** in browser localStorage
- **No server connection** for game data
- **No tracking or analytics**
- **No ads** - completely free

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Offline**: Service Worker + Cache API
- **PWA**: Manifest.json + Web App capabilities
- **Storage**: localStorage API
- **Zero dependencies** - runs anywhere

## 📈 Browser Support

| Browser | Support | PWA Install |
|---------|---------|-------------|
| Chrome  | ✅ Full | ✅ Yes      |
| Edge    | ✅ Full | ✅ Yes      |
| Firefox | ✅ Full | ⚠️ Limited |
| Safari  | ✅ Full | ✅ iOS      |
| Opera   | ✅ Full | ✅ Yes      |

## 🎨 Customization

### Change Colors
Edit CSS variables in `index.html`:
```css
--primary: #00ffd5;    /* Cyan glow */
--danger: #ff6464;     /* Mine red */
--safe: #1f8f4a;       /* Safe green */
```

### Difficulty Levels
```javascript
// Easy
const CONFIG = { mines: 2, maxSafePicks: 5, gridSize: 25 };

// Medium (default)
const CONFIG = { mines: 3, maxSafePicks: 3, gridSize: 25 };

// Hard
const CONFIG = { mines: 5, maxSafePicks: 2, gridSize: 25 };
```

## 📱 Mobile Optimization

- Responsive grid with touch targets ≥44px
- Optimized font sizes using `clamp()`
- Gesture support for all interactions
- Battery-efficient animations
- Works on all screen sizes

## 🔧 Development

### Local Testing
```bash
# Serve over HTTPS for Service Worker
python -m http.server 8000 --certfile=cert.pem --keyfile=key.pem
```

### Performance
- **First Load**: ~50KB (entire game)
- **Subsequent Loads**: <5KB (cached)
- **Offline**: Fully functional
- **Memory**: <1MB runtime

## 🐛 Known Issues

None currently. Report issues via GitHub Issues.

## 🤝 Contributing

Fork → Branch → Commit → Push → PR

Contributions welcome! Areas:
- New game modes
- Difficulty levels
- Leaderboard integration
- Multiplayer support
- Theme customization

## 📄 License

MIT License - Free for personal and commercial use

## 👨‍💻 Author

**grandpappylongjohnson-alt**  
[GitHub Profile](https://github.com/grandpappylongjohnson-alt)

## 🙏 Credits

- Built with ❤️ and vanilla JavaScript
- No external libraries or frameworks
- Inspired by minesweeper classics
- Optimized for PWA standards

---

**Play Now**: [tile-selector-ai.github.io](https://grandpappylongjohnson-alt.github.io/tile-selector-ai)

# 🎮 Tile Selector AI

An intelligent minesweeper-style game with advanced AI suggestions, persistence, and beautiful modern UI.

## Features

✅ **Advanced AI Engine**
- Probability-based tile recommendations
- Spatial analysis (prefers spread-out picks)
- Pattern recognition
- Controlled randomness for engaging gameplay

✅ **Progressive Web App (PWA)**
- Fully offline-capable with Service Worker
- Install as standalone app on mobile/desktop
- Fast load times with caching

✅ **Data Persistence**
- Auto-saves game state to localStorage
- Tracks stats: wins, streaks, win rates
- Toggle auto-save on/off
- Clear statistics anytime

✅ **Accessibility**
- Full keyboard navigation
- ARIA labels for screen readers
- High contrast design
- Mobile-optimized responsive layout

✅ **Beautiful Modern UI**
- Gradient backgrounds
- Smooth animations and transitions
- Glow effects on AI suggestions
- Real-time stats dashboard

## How to Play

1. Click tiles to reveal them
2. Avoid mines 💣 — one mine ends the game
3. Reach 3 safe picks to win ✅
4. Follow AI suggestions (glowing border) for hints
5. Track your win streak and compete against yourself

## Game Stats

- **Win Streak**: Current consecutive wins
- **Total Wins**: Lifetime victories
- **Win Rate**: Percentage of games won
- **Games Played**: Total games completed

## Keyboard Shortcuts

- `R` — Reset / New Game
- `S` — Toggle Auto-Save
- `Enter` / `Space` — Click selected tile
- `Tab` — Navigate between tiles

## Technical Stack

- **HTML5** — Semantic structure
- **CSS3** — Modern styling with gradients & animations
- **Vanilla JavaScript** — No dependencies
- **Service Worker** — Offline support
- **localStorage** — Data persistence

## Configuration

Edit the `CONFIG` object in `index.html`:

```javascript
const CONFIG = {
  mines: 3,           // Number of mines
  maxSafePicks: 3,    // Wins when reached
  gridSize: 25,       // Total tiles (5x5 grid)
  suggestionCount: 3  // AI suggestions shown
};
```

## Installation

### Web
Just open `index.html` in a browser. No build process needed!

### Mobile App (PWA)
1. Open the game in a mobile browser
2. Tap "Install" or "Add to Home Screen"
3. Play it like a native app

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Bundle Size**: ~15KB (minified, no gzip)
- **Load Time**: <500ms
- **Paint Metric**: <200ms
- **Offline Ready**: Yes ✓

## Future Enhancements

- [ ] Difficulty levels (variable mines/target)
- [ ] Leaderboards with cloud sync
- [ ] Sound effects & haptic feedback
- [ ] Replay system
- [ ] AI difficulty adjustments
- [ ] Multiplayer mode

## License

MIT — Feel free to fork, modify, and share!

## Author

Built with 💙 for smart gaming.

---

**Play now**: Open `index.html` in your browser or install as a PWA!
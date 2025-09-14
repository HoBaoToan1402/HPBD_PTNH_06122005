const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ['#ff4081', '#ffd700', '#00e5ff', '#ff1744', '#76ff03'];
  for (let i = 0; i < 30; i++) {
    fireworks.push({
      x: x,
      y: y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 4 + 2,
      radius: Math.random() * 2 + 1,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.02;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.alpha})`;
    ctx.fill();
    if (p.alpha <= 0) fireworks.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#',''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

setInterval(createFirework, 800);
animateFireworks();

const music = document.getElementById('birthdaySong');
const toggleBtn = document.getElementById('toggleMusic');
let isPlaying = false;

toggleBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = '🔇 Tắt nhạc';
  } else {
    music.pause();
    toggleBtn.textContent = '🔊 Bật nhạc';
  }
  isPlaying = !isPlaying;
});

function toggleSecret() {
  const msg = document.getElementById('secretMessage');
  msg.classList.toggle('hidden');
}

function toggleSecret() {
  const msg = document.getElementById('secretMessage');
  const btn = document.querySelector('.btn-secret');

  if (msg.style.display === 'none') {
    msg.style.display = 'block';
    btn.textContent = '🔒 Ẩn điều bí mật';
    btn.style.backgroundColor = '#db7093';
  } else {
    msg.style.display = 'none';
    btn.textContent = '🎁 Điều bí mật';
    btn.style.backgroundColor = '#ff69b4';
  }
}


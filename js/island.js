(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Content                                                             */
  /* ------------------------------------------------------------------ */
  var PROJECTS = {
    sleepypaws: {
      title: 'SleepyPaws', tags: 'UI/UX design | Mobile app | Themed UI assets', date: 'Dec 2024',
      desc: 'A sleep app for tech-savvy young adults, aged 18 to 30, who struggle to keep a steady sleep schedule. I drew the toys and themed UI assets in Procreate and designed the app in Figma. Team: Doris Egbujie, Nicole Shao, La Zhuo Anggilam, Kate (Ann) Crabtree.',
      tools: ['Figma', 'Procreate'],
      steps: [['Research', 'Add your research notes'], ['Wireframes', 'Add your flows and wireframes'], ['Final screens', 'Add the finished UI']]
    },
    frog: {
      title: 'Tamagotchi, no longer in revision', tags: 'Creative coding | Interactive', date: 'Apr 2024',
      desc: 'A Tamagotchi that turns into a translucent glass frog in a Japanese garden where maple leaves fall. I started from a button template, and every mouse press inside the area I defined changes the colors, using a set of color variables I created.',
      tools: ['Processing', 'JavaScript'],
      steps: [['Original idea', 'Add your first idea'], ['Sketches', 'Add your sketches'], ['First iteration', 'Add the first working version']]
    },
    concept: {
      title: 'Character concept art', tags: 'Character design | Client work', date: 'Jan 2026',
      desc: 'Character concept art made in Procreate for the client Board.',
      tools: ['Procreate'], link: ['Visit Board', 'https://board.fun/'],
      steps: [['Thumbnails', 'Add early thumbnails'], ['Exploration', 'Add variations'], ['Final', 'Add the finished character']]
    },
    mango: {
      title: 'Mango and PomPomPudding', tags: '3D modeling | Animation', date: 'Dec 2024',
      desc: 'Two 3D pieces, Mango and PomPomPudding, modeled in Maya 2025 and finished in After Effects. Both began with ideation and a storyboard.',
      tools: ['Maya 2025', 'After Effects'],
      steps: [['Ideation and storyboard', 'Add your storyboard'], ['Modeling', 'Add Maya screenshots'], ['Final render', 'Add the final frames']]
    },
    landscape: {
      title: 'Landscape environment art', tags: 'Background art | Game jam', date: 'Jul 2024',
      desc: 'A painted landscape made as background art for a BlackCat Jam submission, sketched in Procreate and finished in Photoshop.',
      tools: ['Procreate', 'Adobe Photoshop'],
      steps: [['Thumbnails', 'Add thumbnails'], ['Color study', 'Add a color pass'], ['Final', 'Add the finished painting']]
    },
    gameui: {
      title: 'Game UI and art assets', tags: 'Game UI | Game jam', date: 'Oct 2023',
      desc: 'Interface and art assets for my Ludum Dare 54 jam entry. I drew everything in Procreate and put it together in Unity.',
      tools: ['Procreate', 'Unity'], link: ['See my games on itch.io', 'https://la-zhuo-anggilam.itch.io/'],
      steps: [['Sketches', 'Add your sketches'], ['Assets', 'Add asset sheets'], ['In the game', 'Add gameplay captures']]
    },
    ted: {
      title: 'Animated TED Talk clip', tags: '2D animation', date: 'Nov 2024',
      desc: 'An animated clip set to a TED Talk, drawn in Clip Studio and animated in After Effects.',
      tools: ['Clip Studio', 'After Effects'],
      steps: [['Storyboard', 'Add your storyboard'], ['Animation', 'Add key frames'], ['Final clip', 'Add the finished clip']]
    },
    graveyard: {
      title: 'GraveYard Maze', tags: 'Board game | 3D printing', date: '2024',
      desc: 'A small board game set in a graveyard maze. I modeled the pieces in Rhino and prepared them for 3D printing in UltiMaker Cura.',
      tools: ['Rhino', 'UltiMaker Cura'],
      steps: [['Rules and sketches', 'Add your concept'], ['Modeling', 'Add Rhino views'], ['Printed game', 'Add photos of the board']]
    },
    teddy: {
      title: 'Can a teddy bear kill you at night?', tags: 'Game design | Escape room', date: 'Oct 2023',
      desc: 'Game design and art for an escape room built around one uneasy question. Illustrated in Procreate.',
      tools: ['Procreate'],
      steps: [['Room layout', 'Add your floor plan'], ['Puzzles', 'Add puzzle notes'], ['Art', 'Add the final art']]
    },
    experimental: {
      title: 'Experimental making and drawings', tags: 'Drawing | Sculpture', date: '2023 to 2025',
      desc: 'A pile of drawings and handmade things: a still-life sketch of a crab shell, twigs suffering from fungal pathogens, and bitten ice-cream pine trees made for my narrative-driven TTRPG.',
      tools: ['Pencil', 'Illustration pen', 'Soft pastel', 'Gel ballpoint pen', 'Air-dry clay'],
      steps: [['Crab shell', 'Add the still-life sketch'], ['Fungal twigs', 'Add the pastel drawing'], ['Ice-cream pines', 'Add the clay trees']]
    }
  };
  var LIST_ORDER = ['sleepypaws', 'frog', 'concept', 'mango', 'landscape', 'gameui', 'ted', 'graveyard', 'teddy', 'experimental'];

  var STOPS = [
    { title: 'The island', pos: [0, 12, 29], tgt: [0, 0.3, 0] },
    { title: 'Cactus forest', text: 'Spiky, quiet, and full of small secrets.', projects: ['graveyard'], pos: [-0.2, 8.5, -1.8], tgt: [-1.0, 1.8, -9.6] },
    { title: 'Animal pen', text: 'Two odd creatures graze here. A painter left an easel beside the fence.', projects: ['landscape'], pos: [-2.8, 6.2, 4.0], tgt: [-6.0, 0.6, -2.8] },
    { title: 'The mochi house', text: 'Hay, an old TV, and something watching from the bales.', projects: ['ted', 'teddy'], pos: [-10.9, 3.5, 12.6], tgt: [-7.1, 1.1, 6.9] },
    { title: 'Greenhouse cafe', text: 'Step inside: glass, wire, and far too many plants. The coffee is imaginary.', projects: ['mango', 'frog'], pos: [0.3, 2.3, 9.0], tgt: [1.5, 1.0, 5.5] },
    { title: 'Upstairs workspace', text: 'Up a small stair, a loft inside the greenhouse.', projects: ['sleepypaws', 'concept', 'gameui'], pos: [3.1, 3.6, 6.6], tgt: [4.4, 1.9, 1.2] },
    { title: 'The falls and the grey-sand beach', text: 'Water cascades off the edge into a floating pool. Say hi at the sign, or poke the crab.', projects: ['contact'], pos: [17.0, 3.2, 2.6], tgt: [9.6, -3.6, -6.0] }
  ];
  var N = STOPS.length;

  /* ------------------------------------------------------------------ */
  /* DOM                                                                 */
  /* ------------------------------------------------------------------ */
  function $(id) { return document.getElementById(id); }
  var canvas = $('stage'), panel = $('panel'), panelBody = $('panelBody'), panelClose = $('panelClose');
  var introEl = $('intro'), capEl = $('caption'), capTitle = $('capTitle'), capText = $('capText'), capPeeks = $('capPeeks');
  var railEl = $('rail'), hintEl = $('hint'), tip = $('tip');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var maxScroll = 1;
  var lastFocusEl = null;

  $('spacer').style.height = ((N - 1) * 85 + 100) + 'vh';

  function goToStop(i) {
    var y = (i / (N - 1)) * maxScroll;
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* ----- Panel ----- */
  var focusId = null, HS = {}, focusHS = null;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function renderProject(id) {
    var p = PROJECTS[id];
    var h = '<h2 id="panelTitle">' + esc(p.title) + '</h2><p class="tags">' + esc(p.tags) + '</p><p class="date">' + esc(p.date) + '</p>';
    h += '<p>' + esc(p.desc) + '</p>';
    h += '<h3>Tools</h3><ul class="tools">' + p.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
    h += '<h3>In the making</h3><div class="making">' + p.steps.map(function (s) {
      return '<figure><div class="ph">Add image</div><figcaption><strong>' + esc(s[0]) + '</strong><span>' + esc(s[1]) + '</span></figcaption></figure>';
    }).join('') + '</div>';
    if (p.link) h += '<p><a class="btnlink" href="' + p.link[1] + '" target="_blank" rel="noopener">' + esc(p.link[0]) + '</a></p>';
    h += '<p><button type="button" class="btnlink alt" data-act="all">See all projects</button></p>';
    return h;
  }
  function renderContact() {
    return '<h2 id="panelTitle">Say hi</h2><p class="tags">Open to collaborations and internships</p>' +
      '<p>The best way to reach me is email.</p>' +
      '<p><a class="btnlink" href="mailto:zhuo.la@northeastern.edu">zhuo.la@northeastern.edu</a></p>' +
      '<p><a class="btnlink alt" href="https://www.linkedin.com/in/jula-zul" target="_blank" rel="noopener">LinkedIn</a>' +
      '<a class="btnlink alt" href="https://github.com/anggilam" target="_blank" rel="noopener">GitHub</a>' +
      '<a class="btnlink alt" href="https://la-zhuo-anggilam.itch.io/" target="_blank" rel="noopener">itch.io</a></p>';
  }
  function renderList() {
    var h = '<h2 id="panelTitle">All projects</h2><p class="date">Pick one to fly to where it hides on the island.</p><ul class="list">';
    LIST_ORDER.forEach(function (id) {
      var p = PROJECTS[id];
      h += '<li><button type="button" data-open="' + id + '"><strong>' + esc(p.title) + '</strong><span>' + esc(p.tags) + ' | ' + esc(p.date) + '</span></button></li>';
    });
    return h + '</ul>';
  }

  function openPanel(id) {
    if (!panel.classList.contains('open')) lastFocusEl = document.activeElement;
    panelBody.innerHTML = id === 'contact' ? renderContact() : (id === 'all' ? renderList() : renderProject(id));
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('panel-open');
    panel.scrollTop = 0;
    focusId = HS[id] ? id : null;
    if (focusId) { focusHS = HS[focusId]; }
    panelClose.focus({ preventScroll: true });
  }
  function closePanel() {
    if (!panel.classList.contains('open')) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('panel-open');
    focusId = null;
    if (lastFocusEl && lastFocusEl.focus) lastFocusEl.focus({ preventScroll: true });
  }
  panelClose.addEventListener('click', closePanel);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePanel(); });
  panelBody.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.getAttribute('data-act') === 'all') { openPanel('all'); return; }
    var id = b.getAttribute('data-open');
    if (id) { if (HS[id]) goToStop(HS[id].stop); openPanel(id); }
  });
  $('btnAll').addEventListener('click', function () { openPanel('all'); });
  $('btnContact').addEventListener('click', function () { goToStop(N - 1); openPanel('contact'); });
  $('btnStart').addEventListener('click', function () { goToStop(1); });
  $('brand').addEventListener('click', function (e) { e.preventDefault(); closePanel(); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ----- Caption + rail ----- */
  STOPS.forEach(function (s, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('aria-label', s.title); b.title = s.title;
    b.addEventListener('click', function () { goToStop(i); });
    railEl.appendChild(b);
  });
  var shownStop = -1;
  function renderCaption(i) {
    var s = STOPS[i];
    if (!s.projects) return;
    capTitle.textContent = s.title; capText.textContent = s.text; capPeeks.innerHTML = '';
    s.projects.forEach(function (id) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'peek';
      b.textContent = id === 'contact' ? 'Say hi' : PROJECTS[id].title;
      b.addEventListener('click', function () { openPanel(id); });
      capPeeks.appendChild(b);
    });
  }

  function showFallback() {
    document.body.classList.add('nogl');
    document.body.style.minHeight = '100vh';
    introEl.style.setProperty('--a', 1);
    openPanel('all');
  }

  if (typeof THREE === 'undefined') { showFallback(); return; }
  var renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); }
  catch (err) { showFallback(); return; }

  /* ------------------------------------------------------------------ */
  /* Three.js setup                                                      */
  /* ------------------------------------------------------------------ */
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
  var world = new THREE.Group();
  scene.add(world);

  var hemi = new THREE.HemisphereLight(0xfff1e0, 0xb7a6d8, 0.7); scene.add(hemi);
  var sun = new THREE.DirectionalLight(0xfff0d0, 0.8);
  sun.position.set(-14, 22, 16); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -20; sun.shadow.camera.right = 20; sun.shadow.camera.top = 20; sun.shadow.camera.bottom = -20;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 70; sun.shadow.bias = -0.0006;
  scene.add(sun);
  var warm = new THREE.PointLight(0xffc98a, 0.5, 11, 2); warm.position.set(2.5, 3.4, 4.2); scene.add(warm);
  var cabinLight = new THREE.PointLight(0xffd9a0, 0.4, 5, 2); cabinLight.position.set(4.1, 2.9, 2.2); scene.add(cabinLight);
  var bulbMats = [];
  warm.intensity = 1.4; cabinLight.intensity = 1.1;
  // spotlight that follows whatever the camera is looking at, so the focus reads clearly
  var focusSpot = new THREE.SpotLight(0xfff1dc, 0, 18, 0.5, 0.75, 1.4); scene.add(focusSpot); scene.add(focusSpot.target);

  /* ----- Weather: the island's sky follows today's real weather (or a daily mood if offline) ----- */
  var WX = {
    dawn:   { label: 'a purple dawn',    sky: ['#2a1050', '#6a2f8e', '#e0809a'], hemi: [0xc7a2ff, 0x3a1f55, 0.46], sun: [0xffa8c8, 0.55, [-20, 8, 12]], fog: [0x7a3f86, 0.009], cloud: [0xf0b8e0, 0.24] },
    night:  { label: 'a starry night',   sky: ['#030818', '#0d2050', '#1f4a8a'], hemi: [0x8a9cff, 0x141436, 0.32], sun: [0xa8baff, 0.26, [10, 24, -8]], fog: [0x0f2552, 0.010], cloud: [0x8fa2d8, 0.14], stars: 1 },
    cloudy: { label: 'an overcast sky',  sky: ['#1a1f40', '#3a4a86', '#7f92c8'], hemi: [0xd4d8ff, 0x2e3058, 0.46], sun: [0xe8e8ff, 0.3, [-10, 24, 10]], fog: [0x6a76a8, 0.022], cloud: [0xd8dcff, 0.42] },
    snow:   { label: 'soft snow',        sky: ['#1a2148', '#3e4f90', '#a9c0e8'], hemi: [0xe2ecff, 0x2c3466, 0.5], sun: [0xeef2ff, 0.28, [-10, 24, 10]], fog: [0x6f86c0, 0.018], cloud: [0xe8eeff, 0.45], snow: 1 },
    storm:  { label: 'a stormy sky',   sky: ['#0a0820', '#231a5c', '#4b3d8f'], hemi: [0xa89cff, 0x1a1440, 0.32], sun: [0xc0b4ff, 0.14, [-10, 24, 10]], fog: [0x2c2466, 0.02], cloud: [0x6c5fa8, 0.52], rain: 1 }
  };
  var weatherEl = document.getElementById('weather'), flashEl = document.getElementById('flash'), vignetteEl = document.getElementById('vignette');
  var envCur = null, envTo = null, envT = 1;
  scene.fog = new THREE.FogExp2(0x2f4a6e, 0.01);
  function envFromPreset(p) {
    return { sky: p.sky.map(function (c) { return new THREE.Color(c); }), hs: new THREE.Color(p.hemi[0]), hg: new THREE.Color(p.hemi[1]), hi: p.hemi[2],
      sc: new THREE.Color(p.sun[0]), si: p.sun[1], sp: new THREE.Vector3().fromArray(p.sun[2]), fc: new THREE.Color(p.fog[0]), fd: p.fog[1],
      cc: new THREE.Color(p.cloud[0]), co: p.cloud[1], rain: p.rain || 0, snow: p.snow || 0, stars: p.stars || 0, storm: p.storm || 0 };
  }
  function lerpEnv(a, b, k) {
    var o = envFromPreset(WX.dawn);
    o.sky = a.sky.map(function (c, i) { return c.clone().lerp(b.sky[i], k); });
    ['hs', 'hg', 'sc', 'fc', 'cc'].forEach(function (f) { o[f] = a[f].clone().lerp(b[f], k); });
    ['hi', 'si', 'fd', 'co', 'rain', 'snow', 'stars', 'storm'].forEach(function (f) { o[f] = a[f] + (b[f] - a[f]) * k; });
    o.sp = a.sp.clone().lerp(b.sp, k); return o;
  }
  // the island keeps Boston time and Boston weather, wherever the visitor is
  function bostonNow() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', month: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()), o = {};
      parts.forEach(function (p) { o[p.type] = +p.value; });
      return { hour: o.hour % 24, month: o.month - 1 };
    } catch (e) { var d = new Date(); return { hour: d.getHours(), month: d.getMonth() }; }
  }
  function timeOfDay() { var h = bostonNow().hour; return h < 5 || h >= 20 ? 'night' : 'dawn'; }
  function presetFor(cond) {
    var tod = timeOfDay(), base = cond === 'clear' ? WX[tod] : WX[cond];
    var env = envFromPreset(base);
    if (cond !== 'clear' && tod === 'night') env = lerpEnv(env, envFromPreset(WX.night), 0.55), env.stars = 0;
    if (cond !== 'clear' && tod === 'dawn') env = lerpEnv(env, envFromPreset(WX.dawn), 0.35), env.stars = 0;
    var hr = bostonNow().hour, part = hr >= 17 ? 'evening' : hr >= 8 ? 'day' : 'dawn';
    env.label = cond === 'clear' ? (tod === 'dawn' ? (part === 'evening' ? 'a purple evening' : part === 'day' ? 'a purple sky' : 'a purple dawn') : base.label) : base.label + (tod === 'night' ? ' at night' : part === 'evening' ? ' in the evening' : part === 'dawn' ? ' at dawn' : '');
    return env;
  }
  var liveCond = 'clear', liveReal = false, previewing = null;
  function setWeather(cond, real, preview) {
    if (!preview) { liveCond = cond; liveReal = real; if (previewing) return; }
    var next = preview ? envFromPreset(WX[cond]) : presetFor(cond);
    if (preview) next.label = WX[cond].label;
    envTo = next; envT = envCur ? 0 : 1; if (!envCur) envCur = next;
    weatherEl.textContent = 'Island weather: ' + next.label + (preview ? ' (preview)' : real ? ', matched to today\u2019s Boston sky' : '');
    Array.prototype.forEach.call(document.querySelectorAll('.wx-pick button'), function (b) { b.setAttribute('aria-pressed', (preview ? cond : 'live') === b.dataset.wx ? 'true' : 'false'); });
  }
  (function () { // a mood for today, so it changes daily even without a connection
    var d = new Date(), day = Math.floor(d.getTime() / 864e5), m = bostonNow().month;
    var pool = (m >= 10 || m <= 2) ? ['clear', 'cloudy', 'snow', 'clear', 'snow'] : ['clear', 'cloudy', 'clear', 'storm', 'clear'];
    setWeather(pool[((day * 2654435761) >>> 0) % pool.length], false);
  })();
  (function realWeather() {
    if (!window.fetch) return;
    function withTimeout(pr, ms) { return Promise.race([pr, new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, ms); })]); }
    withTimeout(fetch('https://api.open-meteo.com/v1/forecast?latitude=42.36&longitude=-71.06&current=weather_code&timezone=America%2FNew_York').then(function (r) { return r.json(); }), 6000).then(function (w) {
      var c = w && w.current ? w.current.weather_code : null; if (c === null || c === undefined) return;
      var cond = c <= 1 ? 'clear' : (c >= 71 && c <= 77) || c === 85 || c === 86 ? 'snow' : c >= 95 ? 'storm' : 'cloudy';
      setWeather(cond, true);
    }).catch(function () {});
  })();
  // Weather preview buttons. Keep false for the public site; open the site with ?preview to see them anyway.
  var SHOW_WEATHER_BUTTONS = false;
  if (!SHOW_WEATHER_BUTTONS && !/preview/.test(location.search)) Array.prototype.forEach.call(document.querySelectorAll('.wx-pick'), function (el) { el.style.display = 'none'; });
  function previewWeather(cond) {
    if (cond === 'live' || !WX[cond]) { previewing = null; setWeather(liveCond, liveReal); }
    else { previewing = cond; setWeather(cond, false, true); }
  }
  Array.prototype.forEach.call(document.querySelectorAll('.wx-pick button'), function (b) {
    b.addEventListener('click', function () { previewWeather(b.dataset.wx); });
  });
  function hashWeather() { var h = (location.hash || '').replace('#', ''); if (WX[h]) previewWeather(h); }
  window.addEventListener('hashchange', hashWeather); hashWeather();
  // rain, snow and stars
  var RN = 900, rainPos = new Float32Array(RN * 6), rainGeo = new THREE.BufferGeometry();
  for (var ri0 = 0; ri0 < RN; ri0++) { var rx = (Math.random() - 0.5) * 50, ry = -16 + Math.random() * 42, rz = (Math.random() - 0.5) * 50; rainPos.set([rx, ry, rz, rx + 0.12, ry + 0.7, rz], ri0 * 6); }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
  var rainLines = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: 0xb4ccf0, transparent: true, opacity: 0, depthWrite: false })); rainLines.frustumCulled = false; scene.add(rainLines);
  var SNN = 700, snowPos = new Float32Array(SNN * 3), snowGeo = new THREE.BufferGeometry();
  for (var si0 = 0; si0 < SNN; si0++) snowPos.set([(Math.random() - 0.5) * 50, -16 + Math.random() * 42, (Math.random() - 0.5) * 50], si0 * 3);
  snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
  var snowPts = new THREE.Points(snowGeo, new THREE.PointsMaterial({ color: 0xf2f6ff, size: 0.16, transparent: true, opacity: 0, depthWrite: false })); snowPts.frustumCulled = false; scene.add(snowPts);
  var starPos = new Float32Array(500 * 3);
  for (var st0 = 0; st0 < 500; st0++) { var sa0 = Math.random() * 6.283, se0 = 0.08 + Math.random() * 1.4; starPos.set([Math.cos(se0) * Math.cos(sa0) * 90, Math.sin(se0) * 90 - 10, Math.cos(se0) * Math.sin(sa0) * 90], st0 * 3); }
  var starGeo = new THREE.BufferGeometry(); starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  var stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false })); scene.add(stars);
  var cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, transparent: true, opacity: 0.25, depthWrite: false });
  var nextBolt = 6, boltT = -10, lastSky = '';
  function updateEnvironment(t, dt, dimW) {
    if (envT < 1) { envT = Math.min(1, envT + dt / 2.5); envCur = lerpEnv(envCur, envTo, smooth(envT)); if (envT >= 1) envCur = envTo; }
    var e = envCur, dim = 1 - 0.42 * dimW;
    var bolt = 0;
    if (e.storm > 0.5) { if (t > nextBolt) { boltT = t; nextBolt = t + 5 + Math.random() * 9; } var bd = t - boltT; bolt = bd < 0.5 ? Math.max(0, 1 - bd / 0.5) * (bd < 0.08 || (bd > 0.15 && bd < 0.22) ? 1 : 0.35) : 0; }
    flashEl.style.opacity = (bolt * 0.5).toFixed(3);
    hemi.color.copy(e.hs); hemi.groundColor.copy(e.hg); hemi.intensity = e.hi * 1.1 * dim + bolt * 1.4;
    sun.color.copy(e.sc); sun.intensity = (e.si * 1.6 + 0.12) * (1 - 0.18 * dimW) + bolt * 0.8; sun.position.copy(e.sp);
    scene.fog.color.copy(e.fc); scene.fog.density = e.fd * (1 + 0.2 * dimW);
    cloudMat.color.copy(e.cc); cloudMat.opacity = e.co;
    var sky = 'linear-gradient(180deg, #' + e.sky[0].getHexString() + ' 0%, #' + e.sky[1].getHexString() + ' 55%, #' + e.sky[2].getHexString() + ' 100%)';
    if (sky !== lastSky) { document.body.style.background = sky + ' fixed'; lastSky = sky; }
    vignetteEl.style.opacity = (0.35 + 0.5 * dimW).toFixed(3);
    focusSpot.intensity = 2.4 * dimW;
    rainLines.material.opacity = 0.42 * e.rain; rainLines.visible = e.rain > 0.02;
    if (rainLines.visible && !reduce) {
      for (var i = 0; i < RN; i++) { var o = i * 6; rainPos[o + 1] -= 26 * dt; rainPos[o + 4] -= 26 * dt; rainPos[o] -= 3 * dt; rainPos[o + 3] -= 3 * dt; if (rainPos[o + 1] < -16) { var x = (Math.random() - 0.5) * 50, z = (Math.random() - 0.5) * 50; rainPos.set([x, 26, z, x + 0.12, 26.7, z], o); } }
      rainGeo.attributes.position.needsUpdate = true;
    }
    snowPts.material.opacity = 0.85 * e.snow; snowPts.visible = e.snow > 0.02;
    if (snowPts.visible && !reduce) {
      for (var k = 0; k < SNN; k++) { var q = k * 3; snowPos[q + 1] -= 1.3 * dt; snowPos[q] += Math.sin(t * 0.7 + k) * 0.25 * dt; if (snowPos[q + 1] < -16) snowPos[q + 1] = 26; }
      snowGeo.attributes.position.needsUpdate = true;
    }
    stars.material.opacity = 0.85 * e.stars * (0.85 + 0.15 * Math.sin(t * 1.7)); stars.visible = e.stars > 0.02;
  }

  /* ----- Things that fade out of the way when they block the view of what matters ----- */
  var faders = [];
  function glassMat(tint, base) {
    return new THREE.ShaderMaterial({
      uniforms: { tint: { value: new THREE.Color(tint) }, base: { value: base }, fade: { value: 1 } },
      vertexShader: 'varying vec3 vView; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vView = mv.xyz; gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'uniform vec3 tint; uniform float base; uniform float fade; varying vec3 vView; void main(){ vec3 n = normalize(cross(dFdx(vView), dFdy(vView))); vec3 v = normalize(-vView); if (dot(n, v) < 0.0) n = -n; float ndv = clamp(dot(n, v), 0.0, 1.0); float fres = pow(1.0 - ndv, 3.0); vec3 L = normalize(vec3(0.35, 0.75, 0.55)); float spec = pow(max(dot(reflect(-L, n), v), 0.0), 70.0); float sky = smoothstep(0.2, 1.0, n.y) * 0.12; vec3 col = mix(tint, vec3(1.0), fres * 0.75 + sky) + spec * 0.9; gl_FragColor = vec4(col, clamp(base + fres * 0.55 + spec * 0.7 + sky * 0.4, 0.0, 0.95) * fade); }',
      transparent: true, depthWrite: false, side: THREE.DoubleSide, extensions: { derivatives: true }
    });
  }
  // only the pieces actually in the way fade (plus the small object they belong to), never the whole building
  function fadeable(group) {
    var items = [];
    group.traverse(function (o) {
      if (!o.isMesh || !o.material || o.material.visible === false || o.userData.fadeItem || o.userData.noFade) return;
      var m = o.material.clone(); o.material = m;
      var it = { o: o, m: m, k: 1, hit: false, base: m.opacity, baseDW: m.depthWrite, baseT: m.transparent };
      o.userData.fadeItem = it; items.push(it);
    });
    faders.push({ g: group, items: items });
  }
  var fadeRay = new THREE.Raycaster(), fadeTick = 0;
  function updateFaders(dt, camPos, look, targets, off) {
    fadeTick++;
    var pts = off ? [] : [look].concat(targets || []), dir = new THREE.Vector3(), check = fadeTick % 3 === 0;
    faders.forEach(function (f) {
      if (check) {
        f.items.forEach(function (it) { it.hit = false; });
        pts.forEach(function (pt) {
          dir.subVectors(pt, camPos); var dist = dir.length(); dir.normalize();
          fadeRay.set(camPos, dir); fadeRay.far = Math.max(0.1, dist - 0.6);
          fadeRay.intersectObject(f.g, true).forEach(function (h) {
            var it = h.object.userData.fadeItem; if (it) it.hit = true;
            var par = h.object.parent;
            if (par && par !== f.g && par.children.length < 40) par.children.forEach(function (c) { if (c.userData.fadeItem) c.userData.fadeItem.hit = true; });
          });
        });
      }
      f.items.forEach(function (it) {
        it.k += ((it.hit ? 0.12 : 1) - it.k) * (1 - Math.exp(-dt * 6));
        var m = it.m;
        if (m.uniforms && m.uniforms.fade) { m.uniforms.fade.value = it.k; return; }
        m.opacity = it.base * it.k;
        var faded = it.k < 0.98; m.transparent = faded || it.baseT; m.depthWrite = faded ? false : it.baseDW;
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Helpers                                                             */
  /* ------------------------------------------------------------------ */
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var R = rng(11);
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function smooth(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }

  var matCache = {};
  function M(color) {
    if (!matCache[color]) matCache[color] = new THREE.MeshStandardMaterial({ color: color, flatShading: true, roughness: 0.9, metalness: 0 });
    return matCache[color];
  }
  function Mx(color, extra) {
    var o = { color: color, flatShading: true, roughness: 0.6, metalness: 0 };
    for (var k in extra) o[k] = extra[k];
    return new THREE.MeshStandardMaterial(o);
  }
  function add(mesh, x, y, z, p, shadow) {
    mesh.position.set(x, y, z);
    mesh.castShadow = shadow !== false; mesh.receiveShadow = true;
    p.add(mesh); return mesh;
  }
  function box(w, h, d, c, x, y, z, p) { return add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M(c)), x, y, z, p); }
  function cyl(rt, rb, h, s, c, x, y, z, p) { return add(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, s), M(c)), x, y, z, p); }
  function cone(r, h, s, c, x, y, z, p) { return add(new THREE.Mesh(new THREE.ConeGeometry(r, h, s), M(c)), x, y, z, p); }
  function sph(r, c, x, y, z, p, det, sx, sy, sz) {
    var m = add(new THREE.Mesh(new THREE.IcosahedronGeometry(r, det === undefined ? 1 : det), M(c)), x, y, z, p);
    if (sx) m.scale.set(sx, sy, sz); return m;
  }
  function strut(a, b, r, c, p) {
    var d = new THREE.Vector3().subVectors(b, a), len = d.length();
    var m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 5), M(c));
    m.position.copy(a).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    p.add(m); return m;
  }
  function ctex(w, h, fn) {
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var x = c.getContext('2d'); fn(x, w, h);
    var t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; t.anisotropy = 4; return t;
  }
  function poly(x, pts, col) { x.fillStyle = col; x.beginPath(); x.moveTo(pts[0][0], pts[0][1]); for (var i = 1; i < pts.length; i++) x.lineTo(pts[i][0], pts[i][1]); x.closePath(); x.fill(); }
  function plane(w, h, tex, x, y, z, p, transparent) {
    var m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: !!transparent }));
    m.position.set(x, y, z); p.add(m); return m;
  }
  var anims = [];
  // Turns a hand-drawn outline (pixel coords from the sketch) into a soft, puffy 3D piece.
  function drawnShape(pts, ox, oy, scale) {
    var sh = new THREE.Shape(), v = pts.map(function (q) { return new THREE.Vector2((q[0] - ox) * scale, (oy - q[1]) * scale); });
    sh.moveTo(v[0].x, v[0].y); sh.splineThru(v.slice(1).concat([v[0]])); return sh;
  }
  function puffy(shape, depth, bevel, col, rough, lowPoly) {
    var geo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: lowPoly ? 2 : 5, curveSegments: lowPoly ? 1 : 14 });
    geo.translate(0, 0, -depth / 2); geo.computeVertexNormals();
    var m = new THREE.Mesh(geo, lowPoly ? M(col) : new THREE.MeshStandardMaterial({ color: col, roughness: rough || 0.75, metalness: 0 }));
    m.castShadow = true; m.receiveShadow = true; return m;
  }

  /* ------------------------------------------------------------------ */
  /* Painted textures                                                    */
  /* ------------------------------------------------------------------ */
  function texLandscape() {
    return ctex(256, 192, function (x, w, h) {
      var g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#ffb5a0'); g.addColorStop(0.6, '#ffe2b8'); g.addColorStop(1, '#bfe3ff');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      x.fillStyle = '#fff6c9'; x.beginPath(); x.arc(190, 56, 24, 0, 7); x.fill();
      poly(x, [[0, 150], [64, 70], [130, 150]], '#9a86d0'); poly(x, [[90, 150], [176, 84], [256, 150]], '#7d6bbd');
      x.fillStyle = '#6fbf8a'; x.fillRect(0, 148, w, 44);
      for (var i = 0; i < 6; i++) { var px = 20 + i * 42; poly(x, [[px, 170], [px + 12, 130], [px + 24, 170]], '#3f8f65'); }
      x.fillStyle = '#9ad8ee'; x.fillRect(80, 168, 100, 14);
    });
  }
  function texCharacter() {
    return ctex(192, 256, function (x, w, h) {
      var g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#cdb8ff'); g.addColorStop(1, '#ffd1e3'); x.fillStyle = g; x.fillRect(0, 0, w, h);
      x.fillStyle = '#3a2d4d'; x.beginPath(); x.arc(96, 112, 66, 0, 7); x.fill();
      x.beginPath(); x.arc(42, 58, 22, 0, 7); x.fill(); x.beginPath(); x.arc(150, 58, 22, 0, 7); x.fill();
      x.fillStyle = '#7ad1b8'; x.beginPath(); x.ellipse(96, 262, 80, 60, 0, 0, 7); x.fill();
      x.fillStyle = '#ffd9c2'; x.beginPath(); x.arc(96, 130, 52, 0, 7); x.fill();
      x.fillStyle = '#3a2d4d'; x.beginPath(); x.arc(96, 98, 54, Math.PI, 0); x.fill();
      x.fillStyle = '#fff'; x.beginPath(); x.ellipse(74, 130, 11, 14, 0, 0, 7); x.ellipse(118, 130, 11, 14, 0, 0, 7); x.fill();
      x.fillStyle = '#2a2338'; x.beginPath(); x.arc(75, 133, 7, 0, 7); x.arc(119, 133, 7, 0, 7); x.fill();
      x.fillStyle = 'rgba(255,130,150,.55)'; x.beginPath(); x.arc(58, 156, 10, 0, 7); x.arc(134, 156, 10, 0, 7); x.fill();
      x.strokeStyle = '#a2475c'; x.lineWidth = 4; x.beginPath(); x.arc(96, 158, 10, 0.2, Math.PI - 0.2); x.stroke();
    });
  }
  function texTV() {
    return ctex(256, 192, function (x, w, h) {
      x.fillStyle = '#2b2540'; x.fillRect(0, 0, w, h);
      x.fillStyle = '#ff6b81'; x.fillRect(0, 0, w, 22);
      x.fillStyle = '#fff'; x.fillRect(16, 160, 160, 10); x.fillStyle = '#8f86e8'; x.fillRect(16, 160, 70, 10);
      poly(x, [[100, 54], [100, 124], [162, 89]], '#ffffff');
    });
  }
  function texApp() {
    return ctex(256, 160, function (x, w, h) {
      x.fillStyle = '#2a2467'; x.fillRect(0, 0, w, h);
      x.fillStyle = '#ffe9a0'; x.beginPath(); x.arc(80, 70, 34, 0, 7); x.fill();
      x.fillStyle = '#2a2467'; x.beginPath(); x.arc(94, 60, 32, 0, 7); x.fill();
      x.fillStyle = '#fff'; [[150, 30], [190, 60], [170, 100], [220, 38], [130, 120]].forEach(function (s) { x.fillRect(s[0], s[1], 4, 4); });
      x.fillStyle = '#8f86e8'; x.fillRect(24, 124, 150, 14); x.fillStyle = '#ff8fa3'; x.fillRect(24, 124, 80, 14);
    });
  }
  function texHandheld() {
    return ctex(64, 48, function (x, w, h) {
      x.fillStyle = '#b7e4a0'; x.fillRect(0, 0, w, h); x.fillStyle = '#35603a';
      [[10, 30], [14, 26], [18, 26], [22, 30], [14, 22], [18, 22], [30, 12], [34, 12], [34, 16], [46, 32], [50, 32], [48, 28]].forEach(function (p) { x.fillRect(p[0], p[1], 4, 4); });
    });
  }
  function texSign(text, w, h, bg, fg, size) {
    return ctex(w, h, function (x) {
      x.fillStyle = bg; x.fillRect(0, 0, w, h);
      x.strokeStyle = fg; x.lineWidth = 6; x.strokeRect(10, 10, w - 20, h - 20);
      x.fillStyle = fg; x.font = '800 ' + size + 'px "Bricolage Grotesque", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(text, w / 2, h / 2 + 4);
    });
  }
  function texMoon() {
    return ctex(128, 128, function (x) {
      x.fillStyle = '#ffe9a0'; x.beginPath(); x.arc(60, 64, 36, 0, 7); x.fill();
      x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.arc(76, 54, 34, 0, 7); x.fill();
      x.globalCompositeOperation = 'source-over'; x.fillStyle = '#fff';
      [[100, 24], [104, 88], [24, 20]].forEach(function (s) { x.fillRect(s[0], s[1], 5, 5); });
    });
  }
  function texZ() {
    return ctex(128, 64, function (x) {
      x.fillStyle = '#ffffff'; x.font = '800 30px sans-serif'; x.fillText('z', 12, 50); x.font = '800 40px sans-serif'; x.fillText('z', 50, 38); x.font = '800 24px sans-serif'; x.fillText('z', 96, 24);
    });
  }
  var starTexture = ctex(128, 128, function (x) {
    var g = x.createRadialGradient(64, 64, 0, 64, 64, 60);
    g.addColorStop(0, 'rgba(255,250,200,1)'); g.addColorStop(0.25, 'rgba(255,225,140,.5)'); g.addColorStop(1, 'rgba(255,225,140,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128); x.fillStyle = '#fffbe0'; x.beginPath();
    x.moveTo(64, 10); x.quadraticCurveTo(68, 60, 118, 64); x.quadraticCurveTo(68, 68, 64, 118); x.quadraticCurveTo(60, 68, 10, 64); x.quadraticCurveTo(60, 60, 64, 10); x.fill();
  });

  /* ------------------------------------------------------------------ */
  /* Island                                                              */
  /* ------------------------------------------------------------------ */
  var GH_X = 0.5, GH_Z = 2.2, GX = 2, GZ = 2, DX = GX + GH_X, DZ = GZ + GH_Z, DR = 6.2;
  // Domen Aarhus (Dome of Visions 3.0): 24 m across, 10.5 m tall, so the dome is a spherical cap a little lower than a half sphere
  var DOME_RS = DR, DOME_CY = 0; // a half sphere       // greenhouse dome (GX/GZ are local to GH)
  var GH = new THREE.Group(); GH.position.set(GH_X, 0, GH_Z); world.add(GH);
  var DECOR = new THREE.Group(); GH.add(DECOR); // cafe tables and plants, which can fade out of the way
  var LAKE = { x: 7.6, z: -6.0, r: 4.2 };   // big lake hugging the back-right rim
  var CACT = { x: -0.8, z: -9.8 };          // cactus forest, back centre
  var PEN = { x: -6.3, z: -4.2 };           // animal pen, centre-left, the largest open area
  var MOCHI = { x: -7.2, z: 6.9 };          // mochi house, front-left
  var ROCK_TIP = new THREE.Vector3(0, 0, 0), ROCK_FRAGS = [], CRAB = { hit: null, poke: null }, FADE_LATER = [], ISLAND_SIDES = [];
  function hhash(x, y, z) { var s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453; return s - Math.floor(s) - 0.5; }

  (function island() {
    var grass = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 0.4, 80, 1, true), M(0x6fcf4f)); ISLAND_SIDES.push(grass);
    grass.position.y = -0.2; grass.receiveShadow = true; world.add(grass);
    for (var i = 0; i < 12; i++) {
      var a = R() * 6.28, d = R() * 11;
      if (Math.hypot(Math.cos(a) * d - LAKE.x, Math.sin(a) * d - LAKE.z) < 6.6) { R(); continue; }
      var patch = new THREE.Mesh(new THREE.CircleGeometry(0.8 + R() * 1.4, 7), M(i % 2 ? 0x86dc5e : 0x5ec243));
      patch.rotation.x = -Math.PI / 2; patch.position.set(Math.cos(a) * d, 0.012 + i * 0.003, Math.sin(a) * d); patch.receiveShadow = true; world.add(patch);
    }
    var soil = new THREE.Mesh(new THREE.CylinderGeometry(13, 12, 1.2, 80, 2, true), M(0xc98a4f));
    soil.position.y = -1.0; soil.receiveShadow = true; world.add(soil); ISLAND_SIDES.push(soil);
    var rg = new THREE.ConeGeometry(12, 9, 40, 12, true); rg.rotateX(Math.PI);
    var pa = rg.attributes.position;
    function hh(x, y, z) { var s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453; return s - Math.floor(s) - 0.5; }
    for (var k = 0; k < pa.count; k++) {
      var vx = pa.getX(k), vy = pa.getY(k), vz = pa.getZ(k);
      if (vy < 4.4) {
        var th = Math.atan2(vz, vx), rad = Math.hypot(vx, vz);
        var nz = 0.55 * Math.sin(4 * th + 0.9 * vy) + 0.35 * Math.sin(7 * th - 1.4 * vy + 1.3) + 0.25 * Math.sin(13 * th + 2.1 * vy + 0.5);
        var fr = rad > 0.01 ? (rad + nz * 1.1 * (rad / 12 + 0.3)) / rad : 1;
        pa.setXYZ(k, vx * fr, vy + 0.35 * Math.sin(5 * th + vy * 2.3), vz * fr);
      }
    }
    rg.computeVertexNormals();
    var rock = new THREE.Mesh(rg, M(0xe0ac6e)); rock.position.y = -6.1; rock.castShadow = true; world.add(rock); ISLAND_SIDES.push(rock);
    for (var q = 0; q < pa.count; q++) if (pa.getY(q) - 6.1 < ROCK_TIP.y) ROCK_TIP.set(pa.getX(q), pa.getY(q) - 6.1, pa.getZ(q));
  })();

  /* ----- Plants ----- */
  function leafTree(p, x, z, s) {
    var g = new THREE.Group(); g.position.set(x, 0, z); p.add(g);
    cyl(0.12 * s, 0.18 * s, 1.2 * s, 5, 0x8a5a3c, 0, 0.6 * s, 0, g);
    var cols = [0x6cc47a, 0x58b46c, 0x7bd08a];
    sph(0.85 * s, cols[Math.floor(R() * 3)], 0, 1.7 * s, 0, g, 1);
    sph(0.55 * s, cols[Math.floor(R() * 3)], 0.5 * s, 1.35 * s, 0.2 * s, g, 0);
    sph(0.5 * s, cols[Math.floor(R() * 3)], -0.4 * s, 1.5 * s, -0.3 * s, g, 0);
    return g;
  }
  function pine(p, x, z, s) {
    var g = new THREE.Group(); g.position.set(x, 0, z); p.add(g);
    cyl(0.1 * s, 0.14 * s, 0.5 * s, 5, 0x7a5236, 0, 0.25 * s, 0, g);
    for (var i = 0; i < 3; i++) cone((1 - i * 0.25) * 0.75 * s, 0.9 * s, 6, i % 2 ? 0x4aa56e : 0x56b87a, 0, (0.8 + i * 0.6) * s, 0, g);
    return g;
  }
  function bush(p, x, y, z, s, col) {
    var g = new THREE.Group(); g.position.set(x, y, z); p.add(g);
    sph(0.4 * s, col, 0, 0.3 * s, 0, g, 0); sph(0.3 * s, col + 0x0a1408, 0.3 * s, 0.22 * s, 0.1 * s, g, 0); sph(0.28 * s, col, -0.25 * s, 0.2 * s, -0.12 * s, g, 0);
    return g;
  }
  function flower(p, x, z, col) {
    var g = new THREE.Group(); g.position.set(x, 0, z); p.add(g);
    cyl(0.015, 0.015, 0.3, 4, 0x4aa56e, 0, 0.15, 0, g); sph(0.07, col, 0, 0.32, 0, g, 0);
  }
  function cactus(p, x, z, h, col) {
    var g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = R() * 6; p.add(g);
    cyl(0.26, 0.3, h, 7, col, 0, h / 2, 0, g); sph(0.26, col, 0, h, 0, g, 1);
    if (h > 1.1) {
      var a1 = cyl(0.13, 0.13, 0.6, 6, col, 0.42, h * 0.5, 0, g); a1.rotation.z = Math.PI / 2;
      cyl(0.13, 0.13, 0.55, 6, col, 0.7, h * 0.5 + 0.27, 0, g); sph(0.13, col, 0.7, h * 0.5 + 0.55, 0, g, 0);
      if (h > 1.8) { var a2 = cyl(0.12, 0.12, 0.5, 6, col, -0.38, h * 0.38, 0, g); a2.rotation.z = Math.PI / 2; cyl(0.12, 0.12, 0.45, 6, col, -0.62, h * 0.38 + 0.22, 0, g); sph(0.12, col, -0.62, h * 0.38 + 0.45, 0, g, 0); }
    }
    if (R() > 0.4) sph(0.09, 0xff8fb1, 0.06, h + 0.26, 0.04, g, 0);
    return g;
  }
  function palm(p, x, z, s) {
    var g = new THREE.Group(); g.position.set(x, 0, z); p.add(g);
    var t = cyl(0.06 * s, 0.1 * s, 1.8 * s, 5, 0x9a6b45, 0, 0.9 * s, 0, g); t.rotation.z = 0.08;
    for (var i = 0; i < 7; i++) {
      var lg = new THREE.Group(); lg.position.set(0.07 * s, 1.8 * s, 0); lg.rotation.y = i / 7 * 6.28; g.add(lg);
      var l = box(0.16 * s, 0.03, 0.95 * s, i % 2 ? 0x5fbf74 : 0x4aa863, 0, 0, 0.45 * s, lg); l.rotation.x = 0.5;
    }
    return g;
  }
  function monstera(p, x, z, s) {
    var g = new THREE.Group(); g.position.set(x, 0, z); p.add(g);
    cyl(0.25 * s, 0.2 * s, 0.35 * s, 7, 0xd98c6a, 0, 0.17 * s, 0, g);
    for (var i = 0; i < 6; i++) {
      var a = i / 6 * 6.28, h = 0.5 + (i % 3) * 0.2;
      sph(0.3 * s, i % 2 ? 0x4aa863 : 0x5fbf74, Math.cos(a) * 0.3 * s, (0.5 + h) * s, Math.sin(a) * 0.3 * s, g, 0, 1, 0.35, 1.2).rotation.y = a;
    }
    return g;
  }

  /* ----- Scatter trees on free ground ----- */
  (function scatter() {
    var zones = [[DX, DZ, 6.3], [LAKE.x, LAKE.z, 4], [CACT.x, CACT.z, 4.8], [PEN.x, PEN.z, 4.2], [-7.5, 6, 4.6], [-5.8, 0.8, 1.8], [7.4, -0.6, 2.4], [-1, 9.5, 2.2]];
    function free(x, z) { for (var i = 0; i < zones.length; i++) { var d = Math.hypot(x - zones[i][0], z - zones[i][1]); if (d < zones[i][2]) return false; } return true; }
  })();

  /* ----- Clouds ----- */
  var clouds = [];
  (function () {
    for (var i = 0; i < 7; i++) {
      var g = new THREE.Group();
      var n = 3 + Math.floor(R() * 2);
      for (var k = 0; k < n; k++) { var cs = sph(0.9 + R() * 0.8, 0xffffff, k * 1.1 - n * 0.5, R() * 0.4, R() * 0.6, g, 1, 1.3, 0.8, 1); cs.castShadow = false; cs.material = cloudMat; }
      g.position.set(-32 + R() * 64, 17 + R() * 8, -22 + R() * 34); g.scale.setScalar(1.4);
      g.userData.speed = 0.2 + R() * 0.25; scene.add(g); clouds.push(g);
    }
  })();

  /* ------------------------------------------------------------------ */
  /* Cactus forest + GraveYard Maze                                      */
  /* ------------------------------------------------------------------ */
  var hitList = [];
  var cactusGroup = new THREE.Group(); world.add(cactusGroup);
  (function () {
    var sand = new THREE.Mesh(new THREE.CircleGeometry(3.4, 12), M(0xf0d9a0));
    sand.rotation.x = -Math.PI / 2; sand.position.set(CACT.x, 0.065, CACT.z); sand.receiveShadow = true; world.add(sand);
    // a round limb swept along a path, with its radius changing along the way (low poly)
    var CK = 0.0105;
    function limb(g, pts, radii, col, spines) {
      var curve = new THREE.CatmullRomCurve3(pts.map(function (q) { return new THREE.Vector3((q[0] - 270) * CK, (612 - q[1]) * CK, 0); }));
      var segs = (pts.length - 1) * 3, sides = 8, fr = curve.computeFrenetFrames(segs, false), pos = [], idx = [];
      function rad(t) { var f = t * (radii.length - 1), i = Math.min(radii.length - 2, Math.floor(f)); return (radii[i] + (radii[i + 1] - radii[i]) * (f - i)) * CK; }
      for (var i = 0; i <= segs; i++) {
        var t = i / segs, P = curve.getPointAt(t), r = rad(t);
        for (var j = 0; j < sides; j++) { var a = j / sides * Math.PI * 2, n = fr.normals[i].clone().multiplyScalar(Math.cos(a)).add(fr.binormals[i].clone().multiplyScalar(Math.sin(a))); pos.push(P.x + n.x * r, P.y + n.y * r, P.z + n.z * r); }
      }
      for (var i2 = 0; i2 < segs; i2++) for (var j2 = 0; j2 < sides; j2++) {
        var a0 = i2 * sides + j2, a1 = i2 * sides + (j2 + 1) % sides, b0 = a0 + sides, b1 = a1 + sides; idx.push(a0, b0, a1, a1, b0, b1);
      }
      var geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
      var m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: col, flatShading: true, roughness: 0.9, side: THREE.DoubleSide })); m.castShadow = m.receiveShadow = true; g.add(m);
      var end = curve.getPointAt(1); sph(rad(1), col, end.x, end.y, end.z, g, 1);
      for (var s2 = 0; s2 < spines; s2++) {
        var ts = 0.08 + R() * 0.84, fi = Math.round(ts * segs), Ps = curve.getPointAt(ts), as = R() * Math.PI * 2;
        var ns = fr.normals[fi].clone().multiplyScalar(Math.cos(as)).add(fr.binormals[fi].clone().multiplyScalar(Math.sin(as))).normalize(), rs = rad(ts) + 0.1;
        var sp = cyl(0.012, 0.012, 0.22, 3, 0xfff0b8, Ps.x + ns.x * rs, Ps.y + ns.y * rs, Ps.z + ns.z * rs, g);
        sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), ns); sp.castShadow = false;
      }
    }
    // the tall cactus from the sketch: trunk, one small arm up on the right, one big low arm on the left
    var big = new THREE.Group(); big.position.set(-9.8, 0, 0.6); big.rotation.y = 0.35; big.scale.setScalar(1.3); world.add(big); FADE_LATER.push(big);
    limb(big, [[285, 650], [283, 520], [280, 350], [277, 180], [276, 95]], [62, 50, 43, 40, 38], 0x4c9c66, 22);
    limb(big, [[290, 300], [340, 288], [370, 264], [383, 230], [385, 212]], [28, 25, 23, 22, 22], 0x4c9c66, 6);
    limb(big, [[262, 490], [200, 470], [140, 440], [108, 395], [102, 362]], [70, 58, 48, 44, 42], 0x4c9c66, 12);
    // the round-shouldered cactus with a ball on top
    var barrel = new THREE.Group(); barrel.position.set(1.6, 0, -10.2); barrel.rotation.y = -0.2; barrel.scale.setScalar(1.3); world.add(barrel); FADE_LATER.push(barrel);
    var prof = [[0.0, 0.0], [0.24, 0.0], [0.27, 0.14], [0.55, 0.26], [0.76, 0.52], [0.84, 0.95], [0.86, 1.25], [0.83, 1.45], [0.72, 1.56], [0.52, 1.52], [0.32, 1.45], [0.0, 1.43]].map(function (q) { return new THREE.Vector2(q[0] * 1.35, q[1] * 1.35); });
    var bodyGeo = new THREE.LatheGeometry(prof, 9); bodyGeo.computeVertexNormals();
    var body = new THREE.Mesh(bodyGeo, M(0x5fae6e)); body.castShadow = body.receiveShadow = true; barrel.add(body);
    var ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.58, 1), body.material); ball.position.y = 1.43 * 1.35 + 0.42; ball.castShadow = true; barrel.add(ball);
    for (var bi = 0; bi < 22; bi++) {
      var ba = R() * 6.28, by = 0.35 + R() * 1.5, br = 1.16;
      var bs = cyl(0.012, 0.012, 0.22, 3, 0xfff0b8, Math.cos(ba) * br, by, Math.sin(ba) * br, barrel);
      bs.rotation.set(0, -ba, -Math.PI / 2); bs.castShadow = false;
    }
  })();

  function buildGraveyard() {
    var g = new THREE.Group(); g.position.set(-2.4, 0.03, -9.6); g.rotation.y = 0.25; world.add(g);
    box(2.0, 0.1, 2.0, 0x4b4163, 0, 0.05, 0, g);
    var r2 = rng(5), cell = 0.3, off = -0.75;
    for (var i = 0; i < 6; i++) for (var j = 0; j < 6; j++) {
      var cx = off + 0.15 + i * cell, cz = off + 0.15 + j * cell;
      if (r2() < 0.45) box(cell, 0.16, 0.04, 0x9d90c4, cx, 0.18, cz + 0.15, g);
      if (r2() < 0.45) box(0.04, 0.16, cell, 0x9d90c4, cx + 0.15, 0.18, cz, g);
    }
    box(1.9, 0.2, 0.05, 0xb7aadb, 0, 0.2, -0.93, g); box(1.9, 0.2, 0.05, 0xb7aadb, 0, 0.2, 0.93, g);
    box(0.05, 0.2, 1.9, 0xb7aadb, -0.93, 0.2, 0, g); box(0.05, 0.2, 1.9, 0xb7aadb, 0.93, 0.2, 0, g);
    [[-0.5, -0.45], [0.35, 0.1], [-0.2, 0.6], [0.6, -0.6]].forEach(function (s) {
      box(0.18, 0.26, 0.07, 0xd2d2e4, s[0], 0.23, s[1], g);
      var top = cyl(0.09, 0.09, 0.07, 8, 0xd2d2e4, s[0], 0.36, s[1], g); top.rotation.x = Math.PI / 2;
    });
    var ghost = new THREE.Group(); ghost.position.set(0.1, 0.6, -0.1); g.add(ghost);
    sph(0.14, 0xffffff, 0, 0.1, 0, ghost, 1); cone(0.14, 0.26, 7, 0xffffff, 0, -0.08, 0, ghost).rotation.x = Math.PI;
    sph(0.025, 0x2a2338, -0.05, 0.13, 0.12, ghost, 0); sph(0.025, 0x2a2338, 0.05, 0.13, 0.12, ghost, 0);
    anims.push(function (t) { ghost.position.y = 0.6 + Math.sin(t * 1.6) * 0.07; });
    return g;
  }

  /* ------------------------------------------------------------------ */
  /* Animal pen + painter's easel                                        */
  /* ------------------------------------------------------------------ */
  var bobbers = [];
  (function () {
    var px = PEN.x, pz = PEN.z, w = 2.4, d = 1.8;
    // outline of the pen (relative to its centre), traced loosely from the sketch's lumpy enclosure
    var penPts = [[-2.3, 1.2], [-2.6, 0.1], [-2.2, -1.1], [-1.4, -1.9], [-0.2, -2.1], [0.9, -1.7], [1.6, -2.2], [2.5, -1.4], [2.4, -0.2], [2.8, 0.8], [2.0, 1.7], [0.7, 1.6], [-0.4, 2.1], [-1.4, 1.8]];
    penPts = penPts.map(function (q) { return [q[0] * 1.35, q[1] * 1.35]; });
    var penFence = new THREE.Group(); world.add(penFence); FADE_LATER.push(penFence);
    var gate = 11; // leave the segment from point 11 to 12 open as the way in
    for (var pi = 0; pi < penPts.length; pi++) {
      if (pi === gate) continue;
      var A = penPts[pi], B = penPts[(pi + 1) % penPts.length], ax = px + A[0], az = pz + A[1], bx = px + B[0], bz = pz + B[1];
      var len = Math.hypot(bx - ax, bz - az), np = Math.max(1, Math.round(len / 0.6));
      for (var k = 0; k <= np; k++) cyl(0.05, 0.06, 0.8, 5, 0xb98558, ax + (bx - ax) * k / np, 0.4, az + (bz - az) * k / np, penFence);
      var rail = box(0.05, 0.06, len, 0xcf9d6c, (ax + bx) / 2, 0.62, (az + bz) / 2, penFence); rail.rotation.y = Math.atan2(bx - ax, bz - az);
    }
    var dirtShape = new THREE.Shape(); penPts.forEach(function (q, i) { if (i) dirtShape.lineTo(q[0] * 1.04, -q[1] * 1.04); else dirtShape.moveTo(q[0] * 1.04, -q[1] * 1.04); });
    var dirt = new THREE.Mesh(new THREE.ShapeGeometry(dirtShape), M(0xc9b08a)); dirt.rotation.x = -Math.PI / 2; dirt.position.set(px, 0.06, pz); dirt.receiveShadow = true; world.add(dirt);

    function creature(outline, ox, oy, sc, depth, col, eye, tail, x, z, rot, amp) {
      var g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; world.add(g);
      var shp = drawnShape(outline, ox, oy, sc), zf = depth / 2 + 0.08;
      g.add(puffy(shp, depth, 0.1, col, 0.85));
      [-1, 1].forEach(function (side) { sph(0.035, 0x2a2338, (eye[0] - ox) * sc, (oy - eye[1]) * sc, side * zf, g, 0); });
      if (tail) sph(tail[2] * sc, col, (tail[0] - ox) * sc, (oy - tail[1]) * sc, 0, g, 1);
      bobbers.push({ g: g, y: 0, ph: R() * 6, amp: amp }); return g;
    }
    // tall one: head on a long neck, an arched belly, a little round tail
    creature([[292, 320], [285, 250], [282, 180], [290, 145], [310, 130], [330, 140], [340, 165], [350, 200], [372, 228], [410, 235], [440, 250], [445, 285], [440, 320], [410, 322], [400, 290], [380, 262], [355, 262], [335, 285], [330, 320]],
      365, 322, 0.0068, 0.32, 0xf3ece0, [306, 182], [455, 238, 11], px - 0.6, pz - 0.2, 0.5, 0.03);
    // round one: a soft blob with two ears, stubby feet, and a round tail
    creature([[690, 300], [715, 287], [745, 292], [770, 302], [778, 292], [792, 290], [800, 300], [812, 293], [826, 296], [830, 312], [822, 335], [808, 350], [795, 355], [785, 368], [765, 375], [748, 365], [730, 375], [712, 378], [700, 368], [690, 350], [684, 325]],
      757, 378, 0.0082, 0.5, 0xffb3c1, [790, 316], [670, 322, 13], px + 1.0, pz - 0.3, 2.6, 0.025);
    // grass tufts, drawn as little hash marks
    [[-1.4, -0.9], [0.5, -1.2], [1.6, 0.6], [-0.3, 0.9], [-1.7, 0.6]].forEach(function (tf) {
      for (var gb = 0; gb < 5; gb++) {
        var blade = box(0.025, 0.24, 0.025, 0x6fb86a, px + tf[0] + (gb - 2) * 0.06, 0.12, pz + tf[1] + (R() - 0.5) * 0.05, world);
        blade.rotation.z = (R() - 0.5) * 0.5; blade.castShadow = false;
      }
    });
  })();

  function buildEasel() {
    var g = new THREE.Group(); g.position.set(-5.0, 0, 1.0); g.rotation.y = 0.35; world.add(g);
    [[-0.45, 0.25, 1.3], [0.45, 0.25, 1.3], [0, -0.4, 1.3]].forEach(function (l, i) {
      var leg = cyl(0.03, 0.03, 1.5, 5, 0x8a5a3c, l[0] * 0.8, 0.72, i === 2 ? -0.35 : 0.1, g);
      leg.rotation.z = i === 0 ? -0.18 : (i === 1 ? 0.18 : 0); leg.rotation.x = i === 2 ? -0.22 : 0.08;
    });
    box(1.05, 0.82, 0.05, 0xf3ede2, 0, 1.3, 0.05, g);
    plane(0.93, 0.7, texLandscape(), 0, 1.3, 0.085, g);
    box(1.1, 0.05, 0.12, 0xcf9d6c, 0, 0.82, 0.1, g);
    cyl(0.08, 0.08, 0.2, 7, 0x6aa9c9, 0.7, 0.1, 0.4, g); box(0.03, 0.3, 0.03, 0xff8fa3, 0.68, 0.3, 0.4, g); box(0.03, 0.3, 0.03, 0xffd36b, 0.72, 0.3, 0.4, g);
    return g;
  }

  /* ------------------------------------------------------------------ */
  /* Barn                                                                */
  /* ------------------------------------------------------------------ */
  var barnHS = {};
  (function buildBarn() {
    var g = new THREE.Group(); g.position.set(MOCHI.x, 0, MOCHI.z); g.rotation.y = -0.6; world.add(g);
    // a sakuramochi shaped like a soft rounded cube: pink mochi outside, a see-through red bean layer inside,
    // one big bite through both layers (the way in), wrapped in a salt-pickled cherry leaf
    var wrap = new THREE.Group(); g.add(wrap); FADE_LATER.push(wrap);
    var MRm = 2.3, MSY = 0.95, LIFT = 0.42, EL0 = -0.26, BITE = new THREE.Vector3(0.2, 1.3, MRm + 0.15), BR = 1.95;
    var biteN = BITE.clone().normalize(), biteE1 = new THREE.Vector3(0, 1, 0).cross(biteN).normalize(), biteE2 = biteN.clone().cross(biteE1);
    function bitten(x, y, z, r) {
      var v = new THREE.Vector3(x, y, z).sub(BITE), phi = Math.atan2(v.dot(biteE2), v.dot(biteE1));
      return v.length() < r * (1 + 0.09 * (1 - Math.abs(Math.sin(phi * 4.5))));
    }
    var PH = 3.8; // pyramid height
    function rc(az, el, Rr) { // point on a soft square pyramid; el runs from the base (EL0) to the tip (PI/2)
      var v = Math.min(1, Math.max(0, (el - EL0) / (Math.PI / 2 - EL0))), f = Rr / MRm;
      // gently full sides narrowing to a point, with the bottom edge tucked in and under onto the plate
      var w = MRm * f * (1 - v) * (1 + 0.45 * v) * (1 - 0.14 * smooth((0.08 - v) / 0.08));
      var sx = Math.sin(az), sz = Math.cos(az), sq = Math.pow(Math.pow(Math.abs(sx), 4) + Math.pow(Math.abs(sz), 4), -0.25);
      var vy = v < 0.85 ? v : 0.85 + (v - 0.85) * 0.08; // the tip flattens into a small plateau
      return new THREE.Vector3(sx * sq * w, 0.12 + vy * PH * f, sz * sq * w);
    }
    var NA = 64, NE = 16, LAY = [1, 0.94, 0.86], grid = LAY.map(function (f) {
      var rows = []; for (var i = 0; i <= NA; i++) { var col = []; for (var j = 0; j <= NE; j++) col.push(rc(i / NA * Math.PI * 2, EL0 + j / NE * (Math.PI / 2 - EL0), MRm * f)); rows.push(col); } return rows;
    });
    function cellOpen(i, j) { if (j < 0 || j >= NE) return false; i = (i + NA) % NA; var c = rc((i + 0.5) / NA * Math.PI * 2, EL0 + (j + 0.5) / NE * (Math.PI / 2 - EL0), MRm); return bitten(c.x, c.y, c.z, BR); }
    var buf = { outer: [], anko: [], cut: [], ankoCut: [] };
    function quad(arr, a, b, c, d) { arr.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z, a.x, a.y, a.z, c.x, c.y, c.z, d.x, d.y, d.z); }
    for (var ci = 0; ci < NA; ci++) for (var cj = 0; cj < NE; cj++) {
      if (cellOpen(ci, cj)) continue;
      var O = grid[0], Mi = grid[1], I = grid[2];
      quad(buf.outer, O[ci][cj], O[ci + 1][cj], O[ci + 1][cj + 1], O[ci][cj + 1]);
      quad(buf.anko, Mi[ci][cj], Mi[ci + 1][cj], Mi[ci + 1][cj + 1], Mi[ci][cj + 1]);
      quad(buf.anko, I[ci][cj], I[ci + 1][cj], I[ci + 1][cj + 1], I[ci][cj + 1]);
      // where the bite starts, close the layers with their cut faces so they read as one bitten piece
      [[ci + 1, cj, ci + 1, cj, ci + 1, cj + 1], [ci - 1, cj, ci, cj, ci, cj + 1], [ci, cj + 1, ci, cj + 1, ci + 1, cj + 1], [ci, cj - 1, ci, cj, ci + 1, cj]].forEach(function (nb) {
        if (!cellOpen(nb[0], nb[1])) return;
        var a1 = nb[2], b1 = nb[3], a2 = nb[4], b2 = nb[5];
        quad(buf.cut, O[a1][b1], O[a2][b2], Mi[a2][b2], Mi[a1][b1]);
        quad(buf.ankoCut, Mi[a1][b1], Mi[a2][b2], I[a2][b2], I[a1][b1]);
      });
    }
    function meshOf(arr, mat) { var gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); gg.computeVertexNormals(); var m = new THREE.Mesh(gg, mat); m.castShadow = true; m.receiveShadow = true; wrap.add(m); return m; }
    cyl(2.75, 2.8, 0.1, 12, 0xf3ede2, 0, 0.05, 0, g);
    meshOf(buf.outer, new THREE.MeshStandardMaterial({ color: 0xf6b3c6, flatShading: true, roughness: 0.6, side: THREE.DoubleSide, transparent: true, opacity: 0.72, depthWrite: false })).renderOrder = 6;
    meshOf(buf.cut, new THREE.MeshStandardMaterial({ color: 0xffd9e3, flatShading: true, roughness: 0.7, side: THREE.DoubleSide, transparent: true, opacity: 0.8, depthWrite: false })).renderOrder = 6;
    // red beans placed the way the tetrapods are: at uneven gaps around the bottom edge, some alone, some in pairs,
    // a few stacked three high; some sit just inside the mochi and some have spilled onto the plate
    // [position around the edge, outside the mochi?, how many in the pile]
    // sixteen beans spread unevenly all the way round: some alone, some stuck together in little clumps of two or three
    // [angle around the mochi in radians (0 = the bite), outside the mochi?, how many stuck together]
    [[0.3, 1, 1], [0.75, 0, 2], [1.5, 1, 1], [2.1, 1, 3], [2.9, 0, 1], [3.6, 1, 2], [4.3, 0, 1], [5.0, 1, 1], [5.6, 0, 2]].forEach(function (pile) {
      var raz = pile[0] + (R() - 0.5) * 0.12, ep = rc(raz, EL0, MRm), edge = Math.hypot(ep.x, ep.z);
      var rr = Math.min(2.6, edge * (pile[1] ? 1.04 + R() * 0.3 : 0.58 + R() * 0.32)), px0 = Math.sin(raz) * rr, pz0 = Math.cos(raz) * rr, tx = Math.cos(raz), tz = -Math.sin(raz), nx = Math.sin(raz), nz = Math.cos(raz);
      for (var bi = 0; bi < pile[2]; bi++) {
        // clumped beans sit right against each other; the third of a clump nestles in beside the first two
        var third = pile[2] === 3 && bi === 2, off = pile[2] === 1 || third ? 0 : (bi - 0.5) * 0.27, out = third ? 0.23 : 0;
        var bean = sph(0.13, 0x5e1d26, px0 + tx * off + nx * out, 0.2, pz0 + tz * off + nz * out, g, 0, 1.15, 0.9, 1);
        bean.rotation.set((R() - 0.5) * 0.5, R() * 6, (R() - 0.5) * 0.5); bean.castShadow = true;
        var keel = box(0.1, 0.01, 0.018, 0xf3e8dc, 0, 0.125, 0, bean); keel.castShadow = false;
      }
    });
    // a couple of strays that rolled off the plate onto the island
    var strays = 0, stTries = 0;
    while (strays < 2 && stTries < 80) {
      stTries++;
      var sa = (R() < 0.5 ? -1 : 1) * (0.9 + R() * 0.8), sr = 3.0 + R() * 1.1, lx = Math.sin(sa) * sr, lz = Math.cos(sa) * sr; // strays rolled out to either side of the bite
      var wx = MOCHI.x + lx * Math.cos(g.rotation.y) + lz * Math.sin(g.rotation.y), wz = MOCHI.z - lx * Math.sin(g.rotation.y) + lz * Math.cos(g.rotation.y);
      if (Math.hypot(wx, wz) > 12.4 || Math.hypot(wx - DX, wz - DZ) < DR + 0.4) continue;
      var sb = sph(0.13, 0x5e1d26, lx, 0.12, lz, g, 0, 1.15, 0.9, 1); sb.rotation.set((R() - 0.5) * 0.6, R() * 6, (R() - 0.5) * 0.6); sb.castShadow = true;
      box(0.1, 0.01, 0.018, 0xf3e8dc, 0, 0.125, 0, sb).castShadow = false;
      strays++;
    }
    var ankoMat = new THREE.MeshStandardMaterial({ color: 0x8a3048, flatShading: true, roughness: 0.5, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false });
    var am = meshOf(buf.anko, ankoMat); am.castShadow = false;
    var ac = meshOf(buf.ankoCut, ankoMat.clone()); ac.material.opacity = 0.28; ac.castShadow = false;
    // rice grains on the mochi
    for (var gi = 0; gi < 80; gi++) {
      var gaz = R() * Math.PI * 2, gel = 0.1 + R() * 1.35, gp = rc(gaz, gel, MRm * 1.004);
      if (bitten(gp.x, gp.y, gp.z, BR + 0.15)) continue;
      var nrm = rc(gaz, gel, MRm * 1.1).sub(gp).normalize();
      var grain = sph(0.07, gi % 3 ? 0xfac4d3 : 0xf09fb6, gp.x, gp.y, gp.z, wrap, 0, 1.4, 0.7, 0.4);
      grain.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), nrm); grain.rotateZ(R() * 3); grain.castShadow = false;
    }
    // the salt-pickled cherry leaf: oval, rounded at the stem, pointed at the tip, serrated, wrapped diagonally round the back
    var LN = 30, LE = 8, leafPos = [], A0 = Math.PI - 2.0, A1 = Math.PI + 2.0;
    function leafPt(u, v, lift) {
      var pf = Math.pow(u, 0.4) * Math.pow(1 - u, 0.75) / 0.4756;
      var tooth = Math.abs(v) > 0.7 ? 1 - 0.1 * Math.abs((u * 26) % 1 - 0.5) * 2 : 1;
      var e = Math.max(0.02, 0.24 + 0.5 * u + v * 0.52 * pf * tooth);
      return rc(A0 + (A1 - A0) * u, e, MRm * (1.02 + (lift || 0)));
    }
    for (var lu = 0; lu < LN; lu++) for (var lv = 0; lv < LE; lv++) {
      var u0 = lu / LN, u1 = (lu + 1) / LN, v0 = lv / LE * 2 - 1, v1 = (lv + 1) / LE * 2 - 1;
      quad(leafPos, leafPt(u0, v0), leafPt(u1, v0), leafPt(u1, v1), leafPt(u0, v1));
    }
    var leafGeo = new THREE.BufferGeometry(); leafGeo.setAttribute('position', new THREE.Float32BufferAttribute(leafPos, 3)); leafGeo.computeVertexNormals();
    var leaf = new THREE.Mesh(leafGeo, new THREE.MeshStandardMaterial({ color: 0x7f8c3c, flatShading: true, roughness: 0.55, side: THREE.DoubleSide }));
    leaf.castShadow = true; wrap.add(leaf);
    var rib = []; for (var ri = 0; ri <= 24; ri++) rib.push(leafPt(ri / 24, 0, 0.008));
    wrap.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rib), 48, 0.03, 4, false), M(0xb7c27a)));
    for (var vi = 1; vi < 9; vi++) {
      var vu = vi / 10, va = leafPt(vu, 0, 0.008);
      [0.85, -0.85].forEach(function (vv) { strut(va, leafPt(Math.min(0.98, vu + 0.06), vv, 0.008), 0.014, 0xb7c27a, wrap); });
    }
    var stemA = leafPt(0, 0), stemB = stemA.clone().add(new THREE.Vector3(stemA.x * 0.06, -0.14, stemA.z * 0.06));
    strut(stemA, stemB, 0.03, 0x6f6a32, wrap);
    var mochiLight = new THREE.PointLight(0xffe2cc, 0.6, 4.5, 2); mochiLight.position.set(0, 1.4, 0.3); g.add(mochiLight);
    [[-1.2, 0.2, -0.95], [-0.5, 0.2, -1.05], [-0.85, 0.6, -1.0], [1.1, 0.2, -0.85]].forEach(function (b) {
      box(0.75, 0.4, 0.5, 0xe9c46a, b[0], b[1], b[2], g); box(0.77, 0.04, 0.52, 0xb88a3a, b[0], b[1], b[2], g);
    });
    sph(0.42, 0xe9c46a, 1.05, 0.3, 0.45, g, 0, 1.2, 0.6, 1);

    var tv = new THREE.Group(); tv.position.set(-1.0, 0, -0.75); g.add(tv);
    box(0.85, 0.5, 0.6, 0x8a5a3c, 0, 0.25, 0, tv);
    box(0.95, 0.68, 0.5, 0x2f2a3a, 0, 0.84, 0, tv);
    plane(0.78, 0.52, texTV(), 0, 0.84, 0.255, tv);
    cyl(0.01, 0.01, 0.5, 4, 0x2f2a3a, -0.15, 1.35, 0, tv).rotation.z = 0.5; cyl(0.01, 0.01, 0.5, 4, 0x2f2a3a, 0.15, 1.35, 0, tv).rotation.z = -0.5;

    var ted = new THREE.Group(); ted.position.set(0.35, 0.4, -0.55); g.add(ted);
    box(0.8, 0.4, 0.55, 0xe9c46a, 0, -0.2, 0, ted); box(0.82, 0.04, 0.57, 0xb88a3a, 0, -0.2, 0, ted);
    var br = 0x9b6b43;
    sph(0.26, br, 0, 0.28, 0, ted, 1, 1, 1.1, 0.95);
    var head = new THREE.Group(); head.position.set(0, 0.7, 0.04); ted.add(head);
    sph(0.22, br, 0, 0, 0, head, 1); sph(0.09, br, -0.17, 0.17, 0, head, 0); sph(0.09, br, 0.17, 0.17, 0, head, 0);
    sph(0.09, 0xd9b48a, 0, -0.05, 0.19, head, 0); sph(0.03, 0x2a2338, 0, -0.02, 0.27, head, 0);
    sph(0.045, 0xffffff, -0.08, 0.05, 0.18, head, 0); sph(0.045, 0xffffff, 0.08, 0.05, 0.18, head, 0);
    sph(0.022, 0xd9264a, -0.08, 0.05, 0.22, head, 0); sph(0.022, 0xd9264a, 0.08, 0.05, 0.22, head, 0);
    box(0.4, 0.05, 0.05, 0x5b4a45, -0.0, 0.1, 0.19, head).rotation.z = 0;
    box(0.08, 0.1, 0.04, 0xd9264a, 0, 0.5, 0.2, ted);
    sph(0.09, br, -0.25, 0.3, 0.1, ted, 0); sph(0.09, br, 0.25, 0.3, 0.1, ted, 0);
    var key = new THREE.Group(); key.position.set(0.27, 0.34, 0.2); ted.add(key);
    cyl(0.02, 0.02, 0.2, 5, 0xffd36b, 0, 0, 0, key); var kr = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 5, 8), M(0xffd36b)); kr.position.y = 0.13; key.add(kr);
    anims.push(function (t) { head.rotation.z = Math.sin(t * 0.9) * 0.12; head.rotation.y = Math.sin(t * 0.5) * 0.25; });
    barnHS.tv = tv; barnHS.ted = ted;
  })();

  /* ------------------------------------------------------------------ */
  /* Greenhouse dome + cafe                                              */
  /* ------------------------------------------------------------------ */
  var domeShell = null;
  (function buildDome() {
    var g = new THREE.Group(); g.position.set(GX, 0, GZ); GH.add(g);
    var geo = new THREE.IcosahedronGeometry(DR, 1).toNonIndexed(), p = geo.attributes.position, keep = [];
    for (var i = 0; i < p.count; i += 3) {
      var cy = (p.getY(i) + p.getY(i + 1) + p.getY(i + 2)) / 3;
      if (cy > 0.05) for (var k = 0; k < 3; k++) {
        // points that dip below the ground are settled onto the base circle, so nothing sticks in or out at the bottom
        var vx = p.getX(i + k), vy = p.getY(i + k), vz = p.getZ(i + k);
        if (vy < 0.01) { var hr = Math.hypot(vx, vz) || 1; vx *= (DR - 0.12) / hr; vz *= (DR - 0.12) / hr; vy = 0.2; } // tucked just inside the base wall
        keep.push(vx, vy, vz);
      }
    }
    var dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.Float32BufferAttribute(keep, 3)); dg.computeVertexNormals();
    var glass = new THREE.Mesh(dg, new THREE.MeshStandardMaterial({ color: 0xcdeeff, transparent: true, opacity: 0.16, roughness: 0.1, flatShading: true, side: THREE.DoubleSide, depthWrite: false }));
    glass.renderOrder = 5;
    var frameMat = new THREE.MeshStandardMaterial({ color: 0xf4fbff, flatShading: true, roughness: 0.6, transparent: true, opacity: 0.35, depthWrite: false });
    var shell = new THREE.Group(); g.add(shell); shell.add(glass);
    var seen = {}, vseen = {};
    function key(v) { return Math.round(v.x * 50) + ',' + Math.round(v.y * 50) + ',' + Math.round(v.z * 50); }
    for (var t = 0; t < keep.length; t += 9) {
      var vs = [0, 1, 2].map(function (q) { return new THREE.Vector3(keep[t + q * 3], keep[t + q * 3 + 1], keep[t + q * 3 + 2]); });
      for (var e = 0; e < 3; e++) {
        var a = vs[e], b = vs[(e + 1) % 3], ek = [key(a), key(b)].sort().join('|');
        if (!seen[ek]) { seen[ek] = 1; if (!(a.y < 0.25 && b.y < 0.25)) strut(a, b, 0.06, 0xf4fbff, shell).material = frameMat; }
        if (!vseen[key(a)]) { vseen[key(a)] = 1; if (a.y > 0.25) { var j = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), frameMat); j.position.copy(a); shell.add(j); } }
      }
    }
    var wall = new THREE.Mesh(new THREE.CylinderGeometry(DR, DR, 0.45, 72, 1, true), new THREE.MeshStandardMaterial({ color: 0xd9c8aa, flatShading: true, side: THREE.DoubleSide }));
    wall.position.y = 0.22; g.add(wall);
    domeShell = shell;
    var floor = new THREE.Mesh(new THREE.CylinderGeometry(DR - 0.15, DR - 0.15, 0.08, 18), M(0xead9bd)); floor.position.y = 0.05; floor.receiveShadow = true; g.add(floor);
    var inner = new THREE.Mesh(new THREE.CylinderGeometry(4.0, 4.0, 0.04, 14), M(0xf5e8d1)); inner.position.y = 0.1; inner.receiveShadow = true; g.add(inner);
  })();

  function table(x, z, c1, c2) {
    cyl(0.5, 0.5, 0.05, 10, 0xf2e4cc, x, 0.75, z, DECOR); cyl(0.05, 0.08, 0.75, 6, 0x6b5a4e, x, 0.37, z, DECOR);
    cyl(0.1, 0.08, 0.12, 6, 0xffffff, x + 0.15, 0.84, z - 0.05, DECOR);
    [[-0.8, 0.1, c1, 0], [0.8, -0.1, c2, Math.PI]].forEach(function (c) {
      var ch = new THREE.Group(); ch.position.set(x + c[0], 0, z + c[1]); ch.rotation.y = c[3]; DECOR.add(ch);
      box(0.4, 0.05, 0.4, c[2], 0, 0.45, 0, ch); box(0.4, 0.45, 0.05, c[2], 0, 0.7, -0.18, ch);
      [[-0.15, -0.15], [0.15, -0.15], [-0.15, 0.15], [0.15, 0.15]].forEach(function (l) { cyl(0.025, 0.025, 0.45, 4, 0x6b5a4e, l[0], 0.22, l[1], ch); });
    });
  }
  (function cafe() {
    // bar counter
    box(2.7, 0.9, 0.66, 0x5a4636, 1.0, 0.45, 3.6, GH);
    var barPlanks = [0xd9b27c, 0xc9a27a, 0xb08a62, 0xe8dcc4, 0x9a7f62, 0xd2b48c, 0xf0e6d2, 0xa88a68];
    for (var bpk = 0; bpk < 20; bpk++) { var bpb = box(0.13, 0.88, 0.02, barPlanks[(bpk * 5) % barPlanks.length], -0.28 + bpk * 0.135, 0.45, 3.94, GH); bpb.castShadow = false; }
    for (var bps = 0; bps < 5; bps++) [-0.36, 2.36].forEach(function (sx2) { box(0.02, 0.88, 0.13, barPlanks[(bps * 3 + 1) % barPlanks.length], sx2, 0.45, 3.33 + bps * 0.135, GH).castShadow = false; });
    box(2.9, 0.07, 0.86, 0xc9935a, 1.0, 0.93, 3.6, GH);
    // glass cloche with pastries, a jam jar, a little price sign and a vase on the counter
    cyl(0.2, 0.2, 0.015, 12, 0xe8f4ff, -0.05, 0.975, 3.55, GH); cyl(0.03, 0.05, 0.07, 6, 0xe8f4ff, -0.05, 0.94, 3.55, GH);
    sph(0.07, 0xd9a35c, -0.1, 1.02, 3.55, GH, 0, 1.3, 0.6, 1); sph(0.065, 0xe0b06a, 0.02, 1.02, 3.58, GH, 0, 1.2, 0.6, 1);
    var cloche = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xeef8ff, roughness: 0.05, transparent: true, opacity: 0.3, depthWrite: false }));
    cloche.position.set(-0.05, 0.98, 3.55); cloche.scale.y = 1.1; GH.add(cloche); sph(0.025, 0xeef8ff, -0.05, 1.2, 3.55, GH, 0);
    cyl(0.08, 0.08, 0.18, 8, 0x7a2b2b, -0.25, 1.06, 3.75, GH); cyl(0.085, 0.085, 0.03, 8, 0x3a3a3a, -0.25, 1.16, 3.75, GH);
    var price = box(0.18, 0.12, 0.01, 0xffffff, 1.7, 1.03, 3.85, GH); price.rotation.x = -0.25;
    cyl(0.04, 0.05, 0.12, 6, 0x2f3d6b, 2.1, 1.03, 3.55, GH); cone(0.06, 0.18, 4, 0xf6d36b, 2.1, 1.18, 3.55, GH);
    var bd = new THREE.Group(); bd.position.set(3.2, 0, 3.9); bd.rotation.y = -0.4; GH.add(bd);
    box(0.7, 0.9, 0.05, 0x2f3a36, 0, 0.7, 0, bd); plane(0.62, 0.82, texSign('cafe', 128, 192, '#2f3a36', '#f6f1e6', 52), 0, 0.7, 0.03, bd);
    cyl(0.03, 0.03, 0.4, 4, 0x8a5a3c, -0.25, 0.2, -0.15, bd).rotation.x = 0.2; cyl(0.03, 0.03, 0.4, 4, 0x8a5a3c, 0.25, 0.2, -0.15, bd).rotation.x = 0.2;
    table(0.4, -0.6, 0xff8fa3, 0x9d90e0); table(2.4, 6.0, 0xffd36b, 0x6cc4a8); table(4.6, 3.8, 0x7ec8e3, 0xff9f7a);
    for (var i = 0; i < 24; i++) {
      var a = i / 24 * 6.283, m = new THREE.MeshBasicMaterial({ color: 0xffe9a8, transparent: true });
      var b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 0), m);
      b.position.set(GX + Math.cos(a) * 4.6, 3.6 + Math.sin(a * 6) * 0.22, GZ + Math.sin(a) * 4.6); GH.add(b); bulbMats.push(m);
    }
    var pts = []; for (var q = 0; q < 24; q++) { var aa = q / 24 * 6.283; pts.push(new THREE.Vector3(GX + Math.cos(aa) * 4.6, 3.6 + Math.sin(aa * 6) * 0.22 + 0.05, GZ + Math.sin(aa) * 4.6)); }
    GH.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x4a3f55 })));
    [[1.0, 3.0], [3.4, 3.2], [-1.9, 1.5]].forEach(function (h) {
      var top = (Math.sqrt(DOME_RS * DOME_RS - (h[0] - GX) * (h[0] - GX) - (h[1] - GZ) * (h[1] - GZ)) + DOME_CY) * 0.86 - 0.05; // stay under the flat glass facets
      var hg = new THREE.Group(); hg.position.set(h[0], 3.3, h[1]); DECOR.add(hg);
      var purple = h[0] < -1.5; sph(0.22, purple ? 0x2e2e34 : 0xd98c6a, 0, 0, 0, hg, 0, 1, 0.8, 1); sph(0.26, purple ? 0x6a3a8f : 0x62bf78, 0, 0.2, 0, hg, 0); sph(0.18, purple ? 0x8a4fb0 : 0x7bd08a, 0.15, 0.1, 0.1, hg, 0);
      cone(0.06, 0.4, 4, 0x4aa863, 0.2, -0.3, 0, hg).rotation.x = Math.PI; cone(0.06, 0.55, 4, 0x4aa863, -0.2, -0.35, 0.05, hg).rotation.x = Math.PI;
      strut(new THREE.Vector3(h[0], 3.5, h[1]), new THREE.Vector3(h[0], top, h[1]), 0.01, 0x4a3f55, DECOR);
    });
  })();

  (function cuttingsCorner() {
    // free plant cuttings on two pallet tables, under the hanging purple plant
    var cg = new THREE.Group(); cg.position.set(-2.4, 0, 1.3); cg.rotation.y = Math.PI / 2 - 0.15; DECOR.add(cg);
    function pallet(x, z) {
      for (var sl = 0; sl < 6; sl++) box(0.17, 0.035, 0.75, sl === 2 ? 0x9a4a3a : [0xc9a47a, 0xb89470, 0xd4b48a][sl % 3], x - 0.47 + sl * 0.19, 0.56, z, cg);
      [[-0.48, -0.32], [0.48, -0.32], [-0.48, 0.32], [0.48, 0.32], [0, -0.32], [0, 0.32]].forEach(function (b) { box(0.12, 0.54, 0.1, 0xb08a62, x + b[0], 0.27, z + b[1], cg); });
    }
    pallet(-0.55, 0); pallet(0.55, 0.05);
    var jarMat = new THREE.MeshStandardMaterial({ color: 0xe8f6ff, transparent: true, opacity: 0.3, roughness: 0.05, depthWrite: false });
    [[0.25, -0.15], [0.45, 0.15], [0.7, -0.1], [0.85, 0.2], [0.35, 0.05]].forEach(function (j, i) {
      var jar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.16, 8), jarMat); jar.position.set(j[0], 0.66, j[1]); cg.add(jar);
      cyl(0.008, 0.008, 0.3, 3, 0x4a7a3a, j[0], 0.78, j[1], cg).castShadow = false;
      sph(0.06, i % 2 ? 0x6fb86a : 0x8f4fb0, j[0] + 0.03, 0.9, j[1], cg, 0, 1.4, 0.4, 0.8); sph(0.05, i % 2 ? 0x5fa85a : 0x7a3fa0, j[0] - 0.04, 0.84, j[1] + 0.02, cg, 0, 1.4, 0.4, 0.8);
    });
    [[0.95, -0.25], [0.15, 0.25]].forEach(function (pp) { cyl(0.07, 0.05, 0.1, 7, 0xd98c6a, pp[0], 0.63, pp[1], cg); sph(0.08, 0x62bf78, pp[0], 0.72, pp[1], cg, 0); });
    var terr = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 8), jarMat); terr.position.set(-0.8, 0.76, -0.1); cg.add(terr);
    sph(0.1, 0x5fa85a, -0.8, 0.68, -0.1, cg, 0, 1.2, 0.6, 1); cyl(0.03, 0.03, 0.06, 6, 0xe8f6ff, -0.8, 0.95, -0.1, cg);
    sph(0.09, 0x9a9aa2, -0.35, 0.62, 0.2, cg, 0, 1.3, 0.45, 1); sph(0.08, 0xf2b8a8, -0.15, 0.62, 0.2, cg, 0, 1.3, 0.45, 1);
    var note = plane(0.36, 0.22, texSign('Free cuttings!', 256, 156, '#fbf8f1', '#3a3330', 30), 0.6, 0.64, 0.3, cg); note.rotation.x = -Math.PI / 2 + 0.25;
  })();

  // postcards to pick up: tap one and it floats up close with a way to say hi
  var POSTCARDS = { meshes: [], designs: [] };
  (function postcardStand() {
    var pg = new THREE.Group(); pg.position.set(-2.7, 0, 3.0); pg.rotation.y = Math.PI / 2 - 0.35; DECOR.add(pg);
    box(1.1, 0.05, 0.5, 0xc9a47a, 0, 0.7, 0, pg);
    [[-0.5, -0.2], [0.5, -0.2], [-0.5, 0.2], [0.5, 0.2]].forEach(function (l) { box(0.06, 0.7, 0.06, 0xb08a62, l[0], 0.35, l[1], pg); });
    var designs = [
      { bg: ['#2a1050', '#6a2f8e', '#e0809a'], title: 'Greetings from', big: 'the floating island', ink: '#fff4e8', art: 'island' },
      { bg: ['#ffe3ea', '#f9c4d2', '#f6b3c6'], title: 'Say hi to', big: 'the mochi house', ink: '#5a2a3a', art: 'mochi' },
      { bg: ['#cfeede', '#a8dcc0', '#7fc6a0'], title: 'Wish you were', big: 'here with the frog', ink: '#1f3d2e', art: 'frog' },
      { bg: ['#fff1d6', '#f6dcae', '#e8c088'], title: 'Hello from', big: 'the cactus forest', ink: '#4a3220', art: 'cactus' },
      { bg: ['#1c2a44', '#2f4f7a', '#5f86b0'], title: 'Greetings from', big: 'the black-sand beach', ink: '#f4f0e6', art: 'crab' }
    ];
    designs.forEach(function (d, i) {
      var tex = ctex(512, 340, function (x, w, h) {
        var gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, d.bg[0]); gr.addColorStop(0.55, d.bg[1]); gr.addColorStop(1, d.bg[2]); x.fillStyle = gr; x.fillRect(0, 0, w, h);
        x.strokeStyle = 'rgba(255,255,255,0.85)'; x.lineWidth = 10; x.strokeRect(12, 12, w - 24, h - 24);
        if (d.art === 'island') { x.fillStyle = '#e0ac6e'; x.beginPath(); x.moveTo(150, 205); x.lineTo(362, 205); x.lineTo(300, 260); x.lineTo(256, 300); x.lineTo(212, 260); x.closePath(); x.fill(); x.fillStyle = '#9bd48b'; x.beginPath(); x.ellipse(256, 200, 110, 24, 0, 0, 7); x.fill(); x.fillStyle = 'rgba(223,243,255,0.7)'; x.beginPath(); x.arc(290, 196, 36, Math.PI, 0); x.fill(); x.fillStyle = '#4c9c66'; x.fillRect(196, 150, 14, 46); }
        if (d.art === 'mochi') { x.fillStyle = '#fbe9ee'; x.beginPath(); x.ellipse(256, 290, 120, 18, 0, 0, 7); x.fill(); x.fillStyle = '#f6a9bf'; x.beginPath(); x.moveTo(160, 288); x.lineTo(352, 288); x.lineTo(286, 168); x.lineTo(226, 168); x.closePath(); x.fill(); x.fillStyle = '#7f8c3c'; x.beginPath(); x.ellipse(330, 250, 30, 60, 0.5, 0, 7); x.fill(); }
        if (d.art === 'frog') { x.fillStyle = '#4aa863'; x.beginPath(); x.ellipse(256, 280, 110, 22, 0, 0, 7); x.fill(); x.fillStyle = '#7fd08a'; x.beginPath(); x.ellipse(256, 245, 64, 42, 0, 0, 7); x.fill(); x.fillStyle = '#fff'; [226, 286].forEach(function (ex) { x.beginPath(); x.arc(ex, 205, 16, 0, 7); x.fill(); }); x.fillStyle = '#2a2338'; [226, 286].forEach(function (ex) { x.beginPath(); x.arc(ex, 207, 7, 0, 7); x.fill(); }); }
        if (d.art === 'cactus') { x.fillStyle = '#e8c088'; x.beginPath(); x.ellipse(256, 292, 140, 18, 0, 0, 7); x.fill(); x.fillStyle = '#4c9c66'; x.beginPath(); x.roundRect ? x.roundRect(232, 150, 48, 142, 24) : x.rect(232, 150, 48, 142); x.fill(); x.beginPath(); x.roundRect ? x.roundRect(186, 196, 30, 66, 15) : x.rect(186, 196, 30, 66); x.fill(); x.fillRect(200, 248, 40, 18); x.beginPath(); x.roundRect ? x.roundRect(296, 176, 28, 58, 14) : x.rect(296, 176, 28, 58); x.fill(); x.fillRect(272, 222, 38, 16); }
        if (d.art === 'crab') { x.fillStyle = '#2a2930'; x.fillRect(24, 262, 464, 64); x.fillStyle = '#ff6a45'; x.beginPath(); x.ellipse(256, 248, 56, 32, 0, 0, 7); x.fill(); [-1, 1].forEach(function (sd) { x.beginPath(); x.arc(256 + sd * 78, 216, 18, 0, 7); x.fill(); x.fillRect(256 + sd * 44 - 4, 222, 8, 24); }); x.fillStyle = '#fff'; [240, 272].forEach(function (ex) { x.beginPath(); x.arc(ex, 214, 8, 0, 7); x.fill(); }); x.fillStyle = '#2a2338'; [240, 272].forEach(function (ex) { x.beginPath(); x.arc(ex, 215, 4, 0, 7); x.fill(); }); }
        x.fillStyle = d.ink; x.textAlign = 'center';
        x.font = '500 26px "DM Sans", sans-serif'; x.fillText(d.title, w / 2, 62);
        x.font = '800 40px "Bricolage Grotesque", sans-serif'; x.fillText(d.big, w / 2, 108);
      });
      // laid flat on the table in a loose stack of five, each one a little off from the one below
      var lay = [[-0.05, 0.03, -0.25], [0.09, -0.04, 0.18], [-0.11, -0.02, 0.42], [0.04, 0.06, -0.08], [0.0, -0.01, 0.06]][i];
      var card = plane(0.42, 0.28, tex, lay[0], 0.729 + i * 0.005, lay[1], pg); card.rotation.set(-Math.PI / 2, 0, lay[2]);
      card.userData.pc = i; POSTCARDS.meshes.push(card); POSTCARDS.designs.push(tex);
    });
  })();

  (function interiorPlants() {
    function ok(x, z) {
      if (Math.hypot(x - GX, z - GZ) > 5.1) return false;
      if (x > 1.7 && x < 6.2 && z > -2.8 && z < 1.3) return false;             // loft
      if (x > 4.6 && x < 6.1 && z > 1.0 && z < 3.0) return false;             // its stair
      if (x > -1.2 && x < 4.2 && z > 1.4 && z < 4.7) return false;            // counter deck
      if (Math.hypot(x - 0.8, z - 0.4) < 0.9) return false;                     // ice bars
      if (x > -3.4 && x < 0.6 && z > 3.8 && z < 7.6) return false;             // frog and the view to it
      if (x > -3.8 && x < 0.8 && z > -1.2 && z < 4.6) return false;            // nothing green behind the frog
      if (x > -3.6 && x < -1.2 && z > 0.2 && z < 3.8) return false;            // plant cuttings and postcards
      if ([[0.4, -0.6], [2.4, 6.0], [4.6, 3.8]].some(function (t) { return Math.hypot(x - t[0], z - t[1]) < 1.3; })) return false;
      return true;
    }
    var n = 0, tries = 0, types = ['monstera', 'pot', 'bush'];
    while (n < 0 && tries < 400) { // no loose bushes or potted plants scattered on the floor
      tries++;
      var a = R() * 6.28, d = 1.6 + R() * 2.7, x = GX + Math.cos(a) * d, z = GZ + Math.sin(a) * d;
      if (!ok(x, z)) continue;
      var t = types[Math.floor(R() * types.length)];
      if (t === 'palm') palm(DECOR, x, z, 0.9 + R() * 0.5);
      else if (t === 'monstera') monstera(DECOR, x, z, 0.9 + R() * 0.5);
      else if (t === 'tree') leafTree(DECOR, x, z, 0.65 + R() * 0.35);
      else if (t === 'pot') { cyl(0.22, 0.17, 0.32, 7, 0xd98c6a, x, 0.16, z, DECOR); bush(DECOR, x, 0.32, z, 0.8, 0x62bf78); }
      else bush(DECOR, x, 0.05, z, 1 + R() * 0.5, 0x5fbf74);
      n++;
    }
    monstera(GH, 0.8, 0.4, 1.5);
    function tallTree(x, z, H, cols) {
      var g = new THREE.Group(); g.position.set(x, 0, z); GH.add(g);
      cyl(0.12, 0.2, 1.0, 6, 0x8a5a3c, 0, 0.5, 0, g);
      var by = 1.0 + (H - 1.0) / 2, sy = (H - 1.0) / 2 / 0.6;
      sph(0.6, cols[0], 0, by, 0, g, 1, 1, sy, 1);
      sph(0.42, cols[1], 0.28, by - 0.5, 0.15, g, 1, 1, sy * 0.7, 1);
      sph(0.38, cols[2], -0.25, by + 0.3, -0.1, g, 1, 1, sy * 0.6, 1);
    }
  })();

  /* ------------------------------------------------------------------ */
  /* Cabin + workspace                                                   */
  /* ------------------------------------------------------------------ */
  var cabinParts = {};
  var loftGroup = null;
  (function buildCabin() {
    var wood = 0xb98558, FL = 1.4; // upstairs floor height
    var loft = new THREE.Group(); GH.add(loft); loftGroup = loft;
    // open loft deck on posts, no walls and no roof
    box(3.8, 0.12, 3.4, 0xd8b48a, 3.9, FL - 0.06, -0.7, loft).userData.noFade = true;
    [[2.05, -2.35], [5.75, -2.35], [2.05, 0.95], [5.75, 0.95], [3.9, 0.95], [3.9, -2.35]].forEach(function (q) { cyl(0.07, 0.07, FL, 6, 0x8a5a3c, q[0], FL / 2, q[1], loft); });
    function railRun(x1, z1, x2, z2) {
      var len = Math.hypot(x2 - x1, z2 - z1), rl = box(0.05, 0.05, len, 0x8a5a3c, (x1 + x2) / 2, FL + 0.5, (z1 + z2) / 2, loft); rl.rotation.y = Math.atan2(x2 - x1, z2 - z1);
      var nb = Math.max(1, Math.round(len / 0.35));
      for (var k = 0; k <= nb; k++) cyl(0.018, 0.018, 0.5, 4, 0x8a5a3c, x1 + (x2 - x1) * k / nb, FL + 0.25, z1 + (z2 - z1) * k / nb, loft).castShadow = false;
    }
    railRun(2.0, 1.0, 5.0, 1.0); railRun(2.0, -2.4, 2.0, 1.0); railRun(5.8, -2.4, 5.8, 1.0); railRun(2.0, -2.4, 5.8, -2.4);
    // small stair up to the loft
    var stepN = 7, rise = FL / stepN, run = 0.22, sx = 5.35;
    for (var st = 0; st < stepN; st++) box(0.5, 0.05, run + 0.02, 0xcf9d6c, sx, rise * (st + 1) - 0.025, 1.0 + (stepN - st - 0.5) * run, loft);
    [-0.27, 0.27].forEach(function (o) {
      strut(new THREE.Vector3(sx + o, 0, 1.0 + stepN * run), new THREE.Vector3(sx + o, FL, 1.0), 0.03, 0x8a5a3c, loft);
    });
    strut(new THREE.Vector3(sx + 0.28, 0.85, 1.0 + stepN * run), new THREE.Vector3(sx + 0.28, FL + 0.55, 1.0), 0.02, 0x8a5a3c, loft);
    cyl(0.02, 0.02, 0.85, 4, 0x8a5a3c, sx + 0.28, 0.425, 1.0 + stepN * run, loft);
    box(1.9, 0.02, 1.5, 0x8fc49a, 3.7, FL + 0.025, 0.0, GH); // rug
    var barLight = new THREE.PointLight(0xffe2b8, 0.6, 5, 2); barLight.position.set(1.2, 2.2, 3.4); GH.add(barLight);

    // bed + cat: the bed runs front to back at the back left of the loft; the cat curls near the edge of the futon
    box(0.95, 0.25, 1.5, 0x8a5a3c, 2.7, FL + 0.13, -1.5, GH);
    box(0.88, 0.16, 1.42, 0xf4e9ff, 2.7, FL + 0.31, -1.5, GH);
    box(0.9, 0.1, 0.8, 0x8f86e8, 2.7, FL + 0.42, -1.2, GH);
    box(0.55, 0.1, 0.28, 0xffffff, 2.7, FL + 0.45, -2.05, GH);
    var cat = new THREE.Group(); cat.position.set(2.98, FL + 0.57, -1.3); GH.add(cat); cabinParts.cat = cat;
    sph(0.2, 0xf6c27a, 0, 0.03, 0, cat, 1, 1, 0.7, 1.5); sph(0.14, 0xf6c27a, 0, 0.05, 0.3, cat, 1);
    cone(0.05, 0.1, 4, 0xf6c27a, -0.07, 0.19, 0.3, cat); cone(0.05, 0.1, 4, 0xf6c27a, 0.07, 0.19, 0.3, cat);
    var tail = cyl(0.03, 0.03, 0.35, 5, 0xf6c27a, 0.18, 0.02, -0.28, cat); tail.rotation.x = Math.PI / 2; tail.rotation.z = 0.6;
    box(0.07, 0.015, 0.01, 0x2a2338, -0.05, 0.08, 0.43, cat); box(0.07, 0.015, 0.01, 0x2a2338, 0.05, 0.08, 0.43, cat);
    var z = new THREE.Sprite(new THREE.SpriteMaterial({ map: texZ(), transparent: true, depthWrite: false })); z.scale.set(0.5, 0.25, 1); z.position.set(0.2, 0.5, 0.3); cat.add(z);
    anims.push(function (t) { cat.scale.y = 1 + Math.sin(t * 1.8) * 0.05; z.position.y = 0.4 + ((t * 0.3) % 1) * 0.35; z.material.opacity = 1 - ((t * 0.3) % 1); });

    // desk, moved up to the front right of the loft
    box(1.15, 0.06, 0.55, 0xe8c898, 4.9, FL + 0.74, 0.1, GH);
    [[-0.5, -0.2], [0.5, -0.2], [-0.5, 0.2], [0.5, 0.2]].forEach(function (l) { cyl(0.03, 0.03, 0.72, 4, 0x6b5a4e, 4.9 + l[0], FL + 0.37, 0.1 + l[1], GH); });
    box(0.55, 0.36, 0.05, 0x2f2a3a, 4.9, FL + 1.07, -0.05, GH); box(0.07, 0.15, 0.07, 0x2f2a3a, 4.9, FL + 0.85, -0.05, GH);
    plane(0.5, 0.31, texApp(), 4.9, FL + 1.07, -0.022, GH);
    sph(0.1, 0xd98c6a, 4.45, FL + 0.86, -0.05, GH, 0); sph(0.12, 0x62bf78, 4.45, FL + 0.98, -0.05, GH, 0);
    var chair = new THREE.Group(); chair.position.set(4.9, FL, 0.75); GH.add(chair);
    box(0.4, 0.05, 0.4, 0x9d90e0, 0, 0.45, 0, chair); box(0.4, 0.4, 0.05, 0x9d90e0, 0, 0.7, 0.18, chair); cyl(0.03, 0.03, 0.45, 4, 0x6b5a4e, 0, 0.22, 0, chair);

    // handheld console
    var hh = new THREE.Group(); hh.position.set(5.22, FL + 0.8, 0.27); hh.rotation.set(-0.35, -0.2, 0); GH.add(hh); cabinParts.console = hh;
    box(0.34, 0.04, 0.2, 0xff7a9a, 0, 0, 0, hh); plane(0.14, 0.1, texHandheld(), 0, 0.025, 0, hh).rotation.x = -Math.PI / 2;
    cyl(0.018, 0.018, 0.012, 6, 0x2f2a3a, -0.12, 0.025, 0.02, hh); cyl(0.014, 0.014, 0.012, 6, 0xffd36b, 0.11, 0.025, 0.0, hh); cyl(0.014, 0.014, 0.012, 6, 0x6cc4a8, 0.14, 0.025, 0.03, hh);

    // easel with character painting
    var e = new THREE.Group(); e.position.set(4.1, FL, -1.3); GH.add(e); cabinParts.easel = e;
    // a proper A-frame easel: two front legs leaning back to meet at the top, a back leg propping it up,
    // a ledge the canvas stands on, and a clamp holding its top, so the canvas leans back at a slope
    var V3e = THREE.Vector3, ewood = 0x8a5a3c, slope = Math.atan2(0.3, 1.6);
    strut(new V3e(-0.32, 0, 0.12), new V3e(-0.02, 1.6, -0.18), 0.024, ewood, e); strut(new V3e(0.32, 0, 0.12), new V3e(0.02, 1.6, -0.18), 0.024, ewood, e);
    strut(new V3e(0, 0, -0.6), new V3e(0, 1.52, -0.19), 0.022, ewood, e);
    strut(new V3e(-0.14, 1.2, -0.105), new V3e(0.14, 1.2, -0.105), 0.016, ewood, e);
    var ledge = box(0.72, 0.035, 0.09, ewood, 0, 0.55, 0.06, e); ledge.rotation.x = -slope;
    box(0.72, 0.05, 0.015, ewood, 0, 0.585, 0.1, e).rotation.x = -slope;
    var canv = new THREE.Group(); canv.position.set(0, 0.57 + 0.39 * Math.cos(slope), 0.12 - 0.1875 * 0.95 + 0.045); canv.rotation.x = -slope; e.add(canv);
    box(0.6, 0.78, 0.04, 0xf3ede2, 0, 0, 0, canv); plane(0.52, 0.7, texCharacter(), 0, 0, 0.025, canv);
    box(0.14, 0.05, 0.09, ewood, 0, 0.4, 0, canv);
    cyl(0.05, 0.05, 0.1, 6, 0x6aa9c9, 0.4, 0.05, 0.25, e);
  })();

  /* ------------------------------------------------------------------ */
  /* Frog, mango + pudding                                               */
  /* ------------------------------------------------------------------ */
  function buildFrog() {
    var g = new THREE.Group(); g.position.set(0.8, 0.82, 0.4); GH.add(g);
    cyl(0.5, 0.45, 0.04, 7, 0x4aa863, 0, 0, 0, g);
    var frog = new THREE.Group(); frog.position.y = 0.2; g.add(frog);
    var gm = function (c) { return new THREE.MeshStandardMaterial({ color: c, transparent: true, opacity: 0.72, roughness: 0.15, flatShading: true, emissive: 0x2a8f6a, emissiveIntensity: 0.25 }); };
    var body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), gm(0x9cf0cf)); body.scale.set(1, 0.8, 1.2); body.position.y = 0.02; frog.add(body);
    [-1, 1].forEach(function (s) {
      var eye = new THREE.Mesh(new THREE.IcosahedronGeometry(0.075, 0), gm(0xbff7e0)); eye.position.set(0.1 * s, 0.17, 0.15); frog.add(eye);
      sph(0.03, 0x2a2338, 0.1 * s, 0.18, 0.21, frog, 0);
      var leg = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 0), gm(0x9cf0cf)); leg.scale.set(1, 0.6, 1.6); leg.position.set(0.2 * s, -0.08, -0.08); frog.add(leg);
      var arm = new THREE.Mesh(new THREE.IcosahedronGeometry(0.06, 0), gm(0x9cf0cf)); arm.position.set(0.14 * s, -0.1, 0.18); frog.add(arm);
    });
    sph(0.05, 0xff9fb3, 0, 0.0, 0.0, frog, 0, 1, 0.5, 1).visible = false;
    var leaves = [];
    for (var i = 0; i < 4; i++) {
      var lf = cone(0.08, 0.04, 5, i % 2 ? 0xe8553f : 0xf2923a, 0, 0, 0, g); lf.castShadow = false; lf.userData.ph = i * 1.7; leaves.push(lf);
    }
    anims.push(function (t) {
      frog.position.y = 0.2 + Math.abs(Math.sin(t * 1.4)) * 0.03; frog.scale.set(1, 1 + Math.sin(t * 2.8) * 0.04, 1);
      leaves.forEach(function (lf) {
        var u = ((t * 0.22 + lf.userData.ph) % 1);
        lf.position.set(Math.sin(u * 8 + lf.userData.ph) * 0.35, 1.0 - u * 1.0, Math.cos(u * 6 + lf.userData.ph) * 0.35);
        lf.rotation.set(u * 9, u * 5, u * 7);
      });
    });
    return g;
  }
  function buildMango() {
    var g = new THREE.Group(); g.position.set(1.0, 0.98, 3.6); GH.add(g);
    var mango = new THREE.Group(); mango.position.set(-0.35, 0.16, 0); g.add(mango);
    sph(0.15, 0xffb03a, 0, 0, 0, mango, 1, 1, 1.15, 0.85); sph(0.1, 0xf26a4b, 0.06, -0.03, 0.06, mango, 0, 1, 1.1, 0.8);
    cone(0.04, 0.14, 4, 0x4aa863, 0.04, 0.2, 0, mango).rotation.z = -0.6;
    sph(0.02, 0x2a2338, -0.05, 0.02, 0.12, mango, 0); sph(0.02, 0x2a2338, 0.05, 0.02, 0.12, mango, 0);
    var pud = new THREE.Group(); pud.position.set(0.35, 0.0, 0); g.add(pud);
    cyl(0.1, 0.17, 0.2, 8, 0xfff0c9, 0, 0.1, 0, pud); cyl(0.115, 0.1, 0.05, 8, 0xb5693a, 0, 0.225, 0, pud); sph(0.045, 0xe8394f, 0, 0.29, 0, pud, 0);
    sph(0.018, 0x2a2338, -0.04, 0.12, 0.15, pud, 0); sph(0.018, 0x2a2338, 0.04, 0.12, 0.15, pud, 0);
    cyl(0.28, 0.28, 0.02, 10, 0xffffff, 0, 0.0, 0, pud);
    anims.push(function (t) { mango.rotation.y = t * 0.8; pud.position.y = Math.abs(Math.sin(t * 2)) * 0.015; });
    return g;
  }

  /* ------------------------------------------------------------------ */
  /* Pine ice bars (cafe), lake, dock, sign                              */
  /* ------------------------------------------------------------------ */
  function buildExperimental() {
    var g = new THREE.Group(); g.position.set(0.8, 0, 0.4); g.rotation.y = 0.35; GH.add(g);
    cyl(0.3, 0.34, 0.45, 8, 0xb98558, 0, 0.225, 0, g);
    box(0.7, 0.16, 0.3, 0xcf9d6c, 0, 0.53, 0, g);
    // an ice bar on a stick, shaped like a pine tree; one has a bite taken out
    function iceBar(x, col, bitten, tilt) {
      var sh = new THREE.Shape(), hw = [0.34, 0.27, 0.2], ys = [0, 0.3, 0.56], top = 0.86;
      sh.moveTo(-hw[0], ys[0]); sh.lineTo(hw[0], ys[0]);
      sh.lineTo(hw[1] * 0.55, ys[1]); sh.lineTo(hw[1], ys[1]);
      sh.lineTo(hw[2] * 0.55, ys[2]); sh.lineTo(hw[2], ys[2]);
      if (bitten) { sh.lineTo(0.166, 0.666); sh.absarc(0.125, 0.727, 0.0735, -0.98, 2.16, true); }
      sh.lineTo(0, top);
      sh.lineTo(-hw[2], ys[2]); sh.lineTo(-hw[2] * 0.55, ys[2]);
      sh.lineTo(-hw[1], ys[1]); sh.lineTo(-hw[1] * 0.55, ys[1]); sh.lineTo(-hw[0], ys[0]);
      var bar = new THREE.Group(); bar.position.set(x, 0.61, 0); bar.rotation.z = tilt; g.add(bar);
      box(0.07, 0.36, 0.03, 0xe0c08a, 0, 0.1, 0, bar);
      var m = puffy(sh, 0.06, 0.04, col, 0.5); m.position.y = 0.24; bar.add(m);
    }
    iceBar(-0.22, 0xbff0dc, false, 0.08); iceBar(0.04, 0xffc9dc, true, -0.04); iceBar(0.27, 0xfff3cf, false, -0.12);
    return g;
  }

  (function lakeAndDock() {
    var V3 = THREE.Vector3, UPV = new V3(0, 1, 0);
    var basalt = [0x2c2b36, 0x383745, 0x23222c];
    function hh(x, y, z) { var s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453; return s - Math.floor(s) - 0.5; }

    // black sand beach: speckled volcanic grains with a few glints
    var sandTex = ctex(256, 256, function (x, w, h) {
      x.fillStyle = '#4b4a52'; x.fillRect(0, 0, w, h);
      for (var i = 0; i < 3200; i++) {
        var v = Math.floor(52 + R() * 40);
        x.fillStyle = 'rgb(' + v + ',' + v + ',' + (v + 6) + ')';
        x.fillRect(R() * w, R() * h, 1 + R() * 2, 1 + R() * 2);
      }
      for (var j = 0; j < 60; j++) { x.fillStyle = 'rgba(220,225,255,' + (0.3 + R() * 0.4) + ')'; x.fillRect(R() * w, R() * h, 1.2, 1.2); }
    });
    sandTex.wrapS = sandTex.wrapT = THREE.RepeatWrapping; sandTex.repeat.set(0.35, 0.35);
    var sandMat = new THREE.MeshStandardMaterial({ map: sandTex, roughness: 0.95, metalness: 0 });
    var wetMat = new THREE.MeshStandardMaterial({ map: sandTex, color: 0x8a8896, roughness: 0.35, metalness: 0.05 });
    // the pier sits on the lake's front side, facing the beach camera
    var dirFront = new V3(11.5 - LAKE.x, 0, 0 - LAKE.z).normalize(), bulge = Math.atan2(dirFront.z, dirFront.x);
    var outA = Math.atan2(LAKE.z, LAKE.x);
    function angDiff(a, b) { return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b))); }
    function clampR(want, a, rimLimit, domePad, minR) {
      var r = want;
      while (r > minR) {
        var x = LAKE.x + Math.cos(a) * r, z = LAKE.z + Math.sin(a) * r;
        if (Math.hypot(x, z) < rimLimit && Math.hypot(x - DX, z - DZ) > DR + domePad) break;
        r -= 0.04;
      }
      return r;
    }
    function radAt(list, a) {
      for (var i = 0; i < list.length; i++) {
        var A = list[i], B = list[(i + 1) % list.length], a0 = A[0], a1 = B[0] <= a0 ? B[0] + Math.PI * 2 : B[0], t = a < a0 ? a + Math.PI * 2 : a;
        if (t >= a0 && t <= a1) { var f = (t - a0) / (a1 - a0 || 1); return A[1] + (B[1] - A[1]) * f; }
      }
      return list[0][1];
    }
    // shoreline: uneven and angular; it hugs the rim, and only spills where the waterfall is
    function rimDist(a) { var c0 = Math.cos(a), s0 = Math.sin(a), b = LAKE.x * c0 + LAKE.z * s0, c = LAKE.x * LAKE.x + LAKE.z * LAKE.z - 12.97 * 12.97; return -b + Math.sqrt(b * b - c); }
    var PHI_L = Math.atan2(LAKE.z, LAKE.x), PSI = 0.19; // island angles where the onsen breaks through the edge
    function isSpill(a) { var r = rimDist(a), x = LAKE.x + Math.cos(a) * r, z = LAKE.z + Math.sin(a) * r; return r < LAKE.r * 1.2 && angDiff(Math.atan2(z, x), PHI_L) < PSI; }
    var SHORE = [];
    for (var la = 0; la < 30; la++) {
      var lang = (la + (R() - 0.5) * 0.5) / 30 * Math.PI * 2, spill = isSpill(lang);
      var lw = LAKE.r * (0.82 + R() * 0.18);
      SHORE.push([lang, spill ? rimDist(lang) : clampR(lw, lang, 12.35, 1.1, 1.2)]);
    }
    function edgeR(a) { return isSpill(a) ? rimDist(a) : radAt(SHORE, a); }
    // sand outline: straight, uneven segments around the lake
    var SAND = []; // [angle, radius, atRim]
    var SN = 36;
    for (var sa = 0; sa < SN; sa++) {
      var ang = (sa + (R() - 0.5) * 0.6) / SN * Math.PI * 2;
      var want = Math.max(radAt(SHORE, ang) + 0.9, 4.7 + 1.4 * Math.pow(Math.max(0, Math.cos(angDiff(ang, bulge))), 2) + (R() - 0.5) * 0.7 + (sa % 3 === 0 ? -0.3 : 0));
      var r = clampR(want, ang, 12.85, 0.9, 1.2);
      SAND.push([ang, r, r < want - 0.05]);
    }
    function shapeAt(rad, rot) {
      var sh = new THREE.Shape();
      rad.forEach(function (q, i) { var b = -q[0] - (rot || 0), x = Math.cos(b) * q[1], y = Math.sin(b) * q[1]; if (i) sh.lineTo(x, y); else sh.moveTo(x, y); });
      return sh;
    }
    function strip(inner, outer, y, mat) {
      var NS = 160, pos = [], uv = [], idx = [];
      for (var i = 0; i <= NS; i++) {
        var a = i / NS * Math.PI * 2, ri = inner(a), ro = Math.max(ri, outer(a));
        [ri, ro].forEach(function (r) { var x = LAKE.x + Math.cos(a) * r, z = LAKE.z + Math.sin(a) * r; pos.push(x, y, z); uv.push(x - LAKE.x, LAKE.z - z); });
      }
      for (var k = 0; k < NS; k++) { var a0 = k * 2, b0 = a0 + 2; if (pos[(a0 + 1) * 3] === pos[a0 * 3] && pos[(b0 + 1) * 3] === pos[b0 * 3]) continue; idx.push(a0, b0, a0 + 1, b0, b0 + 1, a0 + 1); }
      var g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
      var m = new THREE.Mesh(g, mat); m.receiveShadow = true; world.add(m); return m;
    }
    strip(edgeR, function (a) { return radAt(SAND, a); }, 0.026, sandMat);
    strip(edgeR, function (a) { return Math.min(radAt(SAND, a) - 0.1, edgeR(a) + 0.28 + 0.12 * Math.sin(a * 7)); }, 0.03, wetMat);
    // grass top of the island with the onsen basin cut out of it
    var capShape = new THREE.Shape();
    for (var ci = 0; ci < 96; ci++) { var ca = ci / 96 * Math.PI * 2; if (ci) capShape.lineTo(Math.cos(ca) * 13, -Math.sin(ca) * 13); else capShape.moveTo(13, 0); }
    var hole = new THREE.Path();
    for (var hi = 0; hi < 144; hi++) { var ha = hi / 144 * Math.PI * 2, hr = Math.min(edgeR(ha), rimDist(ha) - 0.005), hx = LAKE.x + Math.cos(ha) * hr, hz = LAKE.z + Math.sin(ha) * hr; if (hi) hole.lineTo(hx, -hz); else hole.moveTo(hx, -hz); }
    capShape.holes.push(hole);
    var cap = new THREE.Mesh(new THREE.ShapeGeometry(capShape), M(0x6fcf4f)); cap.rotation.x = -Math.PI / 2; cap.receiveShadow = true; world.add(cap);

    // the deep, irregular cave-like basin under the clear onsen
    (function basin() {
      var BA = 96, L = 8, STEP = 0.85, T = 0.9, OPEN = 0.72, BOTTOM = -STEP * L, TIP = -8.6;
      var strata = [0xe9b77a, 0xd8a266, 0xc68f5c, 0xb07c56, 0x986a52, 0x80594f, 0x6a4b4e, 0x56404c, 0x46384b].map(function (c) { return new THREE.Color(c); });
      function rr(k) { return Math.pow(1 - k / (L + 1), 0.85); }
      function wob(a, k) { return 1 + 0.04 * Math.sin(3 * a + 1.3 * k) + 0.02 * Math.sin(5 * a + 0.7 * k); }
      function isOpen(a) { return angDiff(a, outA) < OPEN; }
      // rows from the rim down: an undercut wall then a ledge for each layer
      var RR = [], RY = [], RC = [];
      function addRow(fr, fy, col) { var r = [], y = []; for (var i = 0; i < BA; i++) { var a = i / BA * Math.PI * 2; r.push(fr(a)); y.push(fy(a)); } RR.push(r); RY.push(y); RC.push(col); }
      addRow(function (a) { return Math.min(edgeR(a), rimDist(a) - 0.005); }, function () { return 0; }, strata[0]);
      for (var k = 1; k <= L; k++) (function (k) {
        addRow(function (a) { return edgeR(a) * rr(k - 1) * 1.04 * wob(a, k); }, function (a) { return -STEP * k * (1 + 0.04 * Math.sin(2 * a + k)) + 0.08; }, strata[k - 1]);
        addRow(function (a) { return edgeR(a) * rr(k) * wob(a, k + 0.5); }, function (a) { return -STEP * k * (1 + 0.04 * Math.sin(2 * a + k)); }, strata[k].clone().offsetHSL(0, 0, 0.04));
      })(k);
      var NR = RR.length;
      function P(ri, i, extra) { var a = i / BA * Math.PI * 2, r = RR[ri][i] + (extra || 0); return [LAKE.x + Math.cos(a) * r, RY[ri][i] - (extra && ri === 0 ? 0.03 : 0), LAKE.z + Math.sin(a) * r]; }
      var shellJ = function (ri, i) { return T * (1 + 0.15 * Math.sin(i * 0.7 + ri * 1.3)); };
      var cave = { pos: [], col: [] }, shellB = { pos: [], col: [] }, cutB = { pos: [], col: [] }, glass = [];
      function tri(B, a, b, c, col) { B.pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]); for (var q = 0; q < 3; q++) B.col.push(col.r, col.g, col.b); }
      function quad(B, a, b, c, d, col) { tri(B, a, b, c, col); tri(B, a, c, d, col); }
      for (var ri = 0; ri < NR - 1; ri++) for (var i = 0; i < BA; i++) {
        var i2 = (i + 1) % BA, mid = (i + 0.5) / BA * Math.PI * 2, col = RC[ri];
        if (isOpen(mid)) continue;
        quad(cave, P(ri, i), P(ri + 1, i), P(ri + 1, i2), P(ri, i2), col);
        quad(shellB, P(ri, i, shellJ(ri, i)), P(ri, i2, shellJ(ri, i2)), P(ri + 1, i2, shellJ(ri + 1, i2)), P(ri + 1, i, shellJ(ri + 1, i)), new THREE.Color(0xc98a4f).lerp(strata[Math.min(8, ri >> 1)], 0.5));
      }
      // closed bottom of the cave and the tapering rock tip of the shell, all the way round
      var cB = [LAKE.x, BOTTOM - 0.25, LAKE.z], tB = [LAKE.x, TIP, LAKE.z];
      for (var i3 = 0; i3 < BA; i3++) {
        var j3 = (i3 + 1) % BA;
        tri(cave, cB, P(NR - 1, j3), P(NR - 1, i3), strata[8]);
        tri(shellB, tB, P(NR - 1, i3, shellJ(NR - 1, i3)), P(NR - 1, j3, shellJ(NR - 1, j3)), new THREE.Color(0xb07c56));
      }
      // cut faces where the cave is broken open: both sides and the bottom lip show the layers
      for (var bi = 0; bi < BA; bi++) {
        var bn = (bi + 1) % BA, aPrev = (bi - 0.5) / BA * Math.PI * 2, aNext = (bi + 0.5) / BA * Math.PI * 2;
        if (isOpen(aPrev) !== isOpen(aNext)) for (var r3 = 0; r3 < NR - 1; r3++) quad(cutB, P(r3, bi), P(r3 + 1, bi), P(r3 + 1, bi, shellJ(r3 + 1, bi)), P(r3, bi, shellJ(r3, bi)), RC[r3]);
        if (isOpen(aNext)) {
          quad(cutB, P(NR - 1, bi), P(NR - 1, bn), P(NR - 1, bn, shellJ(NR - 1, bn)), P(NR - 1, bi, shellJ(NR - 1, bi)), strata[7]);
          // a clear sheet of onsen water closing the open front, following the outer walls down
          for (var r4 = 0; r4 < NR - 1; r4 += (r4 === 0 ? 1 : 2)) {
            var rn = r4 === 0 ? 1 : Math.min(NR - 1, r4 + 2), A = P(r4, bi), B2 = P(r4, bn), C = P(rn, bn), D = P(rn, bi);
            glass.push(A[0], A[1], A[2], C[0], C[1], C[2], B2[0], B2[1], B2[2], A[0], A[1], A[2], D[0], D[1], D[2], C[0], C[1], C[2]);
          }
        }
      }
      function build(B, mat) { var g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(B.col, 3)); g.computeVertexNormals(); var m = new THREE.Mesh(g, mat); m.receiveShadow = true; world.add(m); return m; }
      var rockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, flatShading: true, roughness: 0.95, side: THREE.DoubleSide });
      build(cave, rockMat); build(shellB, rockMat).castShadow = true; build(cutB, rockMat);
      var gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(glass, 3)); gg.computeVertexNormals();
      var front = new THREE.Mesh(gg, new THREE.MeshStandardMaterial({ color: 0x7fe7e0, emissive: 0x0f8a96, emissiveIntensity: 0.25, roughness: 0.05, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false }));
      front.renderOrder = 2; world.add(front);
      // a few rock spires on the cave floor, below the water line
      for (var sp = 0; sp < 6; sp++) {
        var sa = R() * 6.28; if (isOpen(sa)) sa += Math.PI;
        var sr = Math.sqrt(R()) * 0.5 * edgeR(sa) * rr(L - 2), h = 0.8 + R() * 1.2;
        var spire = new THREE.Mesh(new THREE.ConeGeometry(0.25 + R() * 0.2, h, 5), M(sp % 2 ? 0x6b4f4a : 0x8a6550));
        spire.position.set(LAKE.x + Math.cos(sa) * sr, BOTTOM + h / 2 - 0.1, LAKE.z + Math.sin(sa) * sr); spire.rotation.set((R() - 0.5) * 0.3, R() * 6, (R() - 0.5) * 0.3); world.add(spire);
      }
      // carve the island's own sides away wherever the cave and its rock shell sit, so nothing cuts through
      function shellR(a, y) {
        var i = Math.round(a / (Math.PI * 2) * BA); i = ((i % BA) + BA) % BA;
        if (y >= RY[0][i]) return RR[0][i] + T;
        for (var r = 0; r < NR - 1; r++) if (y <= RY[r][i] && y >= RY[r + 1][i]) { var f = (RY[r][i] - y) / (RY[r][i] - RY[r + 1][i] || 1); return RR[r][i] + (RR[r + 1][i] - RR[r][i]) * f + T; }
        var last = RY[NR - 1][i]; if (y < TIP) return 0;
        return (RR[NR - 1][i] + T) * (y - TIP) / (last - TIP);
      }
      ISLAND_SIDES.forEach(function (m) {
        var g0 = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry, pa = g0.attributes.position, keep = [], oy = m.position.y;
        for (var q = 0; q < pa.count; q += 3) {
          var cx = (pa.getX(q) + pa.getX(q + 1) + pa.getX(q + 2)) / 3, cy = (pa.getY(q) + pa.getY(q + 1) + pa.getY(q + 2)) / 3 + oy, cz = (pa.getZ(q) + pa.getZ(q + 1) + pa.getZ(q + 2)) / 3;
          var dl = Math.hypot(cx - LAKE.x, cz - LAKE.z), al = Math.atan2(cz - LAKE.z, cx - LAKE.x);
          if (dl < shellR(al, cy) + 0.15) continue;
          for (var k2 = 0; k2 < 9; k2++) keep.push(pa.array[q * 3 + k2]);
        }
        var ng = new THREE.BufferGeometry(); ng.setAttribute('position', new THREE.Float32BufferAttribute(keep, 3)); ng.computeVertexNormals();
        m.geometry = ng; m.material.side = THREE.DoubleSide;
      });
    })();

    var pierR = radAt(SHORE, bulge) + 0.5;
    var P0 = new V3(LAKE.x + dirFront.x * pierR, 0, LAKE.z + dirFront.z * pierR);

    // lake, drifting toward the rim where it spills off
    var wd = new V3(LAKE.x, 0, LAKE.z).normalize(), wAng = Math.atan2(wd.x, wd.z), wt = new V3(-wd.z, 0, wd.x);
    var outTheta = Math.atan2(-wd.z, wd.x);
    // a natural onsen: smooth, gently moving milky-turquoise water, deeper in the middle,
    // that runs right up to the rim where it pours over as the waterfall
    var ONSEN_EDGE = new THREE.Color(0xa6f3ea), ONSEN_DEEP = new THREE.Color(0x2fbfd3);
    var waterMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.06, metalness: 0.05, emissive: 0x0a7f8f, emissiveIntensity: 0.18, transparent: true, opacity: 0.5, depthWrite: false });
    var OA = 96, OK = 8, oPos = [], oCol = [], oBase = [], oIdx = [];
    for (var ok = 0; ok <= OK; ok++) for (var oa = 0; oa < OA; oa++) {
      var oang = oa / OA * Math.PI * 2, spillA = isSpill(oang), f = ok / OK;
      var er = edgeR(oang) * f, ox = LAKE.x + Math.cos(oang) * er, oz = LAKE.z + Math.sin(oang) * er;
      var damp = spillA ? 1 - smooth((f - 0.55) / 0.45) : 1 - 0.5 * smooth((f - 0.7) / 0.3);
      oPos.push(ox, 0.05, oz); oBase.push(ox, oz, damp);
      var oc = ONSEN_DEEP.clone().lerp(ONSEN_EDGE, Math.pow(f, 1.5)); oCol.push(oc.r, oc.g, oc.b);
    }
    for (var ok2 = 0; ok2 < OK; ok2++) for (var oa2 = 0; oa2 < OA; oa2++) {
      var ia = ok2 * OA + oa2, ib = ok2 * OA + (oa2 + 1) % OA, ic = ia + OA, id = ib + OA; oIdx.push(ia, ib, ic, ib, id, ic);
    }
    var onsenGeo = new THREE.BufferGeometry();
    onsenGeo.setAttribute('position', new THREE.Float32BufferAttribute(oPos, 3)); onsenGeo.setAttribute('color', new THREE.Float32BufferAttribute(oCol, 3)); onsenGeo.setIndex(oIdx); onsenGeo.computeVertexNormals();
    var water = new THREE.Mesh(onsenGeo, waterMat); water.receiveShadow = true; water.renderOrder = 1; world.add(water);
    anims.push(function (t) {
      var op = onsenGeo.attributes.position;
      for (var i = 0; i < op.count; i++) {
        var x = oBase[i * 3], z = oBase[i * 3 + 1], d = oBase[i * 3 + 2];
        op.setY(i, 0.05 + d * (Math.sin(x * 1.9 + t * 1.2) * Math.cos(z * 1.6 - t * 0.9) * 0.022 + Math.sin((x + z) * 3.1 - t * 2.0) * 0.008));
      }
      op.needsUpdate = true; onsenGeo.computeVertexNormals();
    });
    var ripTex = ctex(256, 256, function (x, w, h) {
      x.clearRect(0, 0, w, h); x.lineCap = 'round';
      for (var i = 0; i < 46; i++) {
        var rx = R() * w, ry = R() * h, len = 14 + R() * 40;
        x.strokeStyle = 'rgba(235,248,255,' + (0.4 + R() * 0.5) + ')'; x.lineWidth = 1.5 + R() * 2;
        [0, -h, h].forEach(function (o) { x.beginPath(); x.moveTo(rx, ry + o); x.quadraticCurveTo(rx + 5, ry + o + len / 2, rx, ry + o + len); x.stroke(); });
      }
    });
    ripTex.wrapS = ripTex.wrapT = THREE.RepeatWrapping; ripTex.repeat.set(0.35, 0.35);
    var ripG = new THREE.Group(); ripG.position.set(LAKE.x, 0.085, LAKE.z); ripG.rotation.y = outTheta; world.add(ripG);
    var rip = new THREE.Mesh(new THREE.ShapeGeometry(shapeAt(SHORE.map(function (q) { return [q[0], q[1] - 0.06]; }), outTheta)), new THREE.MeshBasicMaterial({ map: ripTex, transparent: true, opacity: 0.2, depthWrite: false }));
    rip.rotation.x = -Math.PI / 2; ripG.add(rip);
    anims.push(function (t) { ripTex.offset.x = -t * 0.13; });

    // falling water: every ribbon pours off the floating island into open sky
    var streak = ctex(64, 256, function (x, w, h) {
      x.fillStyle = '#000'; x.fillRect(0, 0, w, h);
      for (var i = 0; i < 26; i++) {
        var sx = R() * w, sw = 2 + R() * 4, sy = R() * h, sl = 30 + R() * 110, v = Math.floor(90 + R() * 165);
        x.fillStyle = 'rgb(' + v + ',' + v + ',' + v + ')';
        x.fillRect(sx, sy, sw, sl); x.fillRect(sx, sy - h, sw, sl);
      }
    });
    streak.wrapT = THREE.RepeatWrapping; streak.wrapS = THREE.RepeatWrapping;
    var wfVert = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
    var wfFrag = 'uniform sampler2D map; uniform float time; uniform float rep; uniform float op; varying vec2 vUv; void main(){ vec4 s = texture2D(map, vec2(vUv.x, vUv.y * rep + time)); float fade = smoothstep(0.0, 0.55, vUv.y); float strands = mix(step(0.4, s.r), 1.0, smoothstep(0.15, 0.6, vUv.y)); float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x); vec3 col = mix(vec3(0.1, 0.85, 1.0), vec3(0.9, 1.0, 1.0), s.r); col = pow(col, vec3(0.8)); gl_FragColor = vec4(col, (0.55 + 0.45 * s.r) * fade * strands * edge * op); }';
    var wfMats = [];
    function fall(px, py, pz, ang, width, len, speed, ph, op, crossed) {
      var m = new THREE.ShaderMaterial({ uniforms: { map: { value: streak }, time: { value: 0 }, rep: { value: len / 7 }, op: { value: op } }, vertexShader: wfVert, fragmentShader: wfFrag, transparent: true, depthWrite: false, side: THREE.DoubleSide });
      [0, 1].slice(0, crossed ? 2 : 1).forEach(function (k) {
        var mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, len), m);
        mesh.position.set(px, py - len / 2, pz); mesh.rotation.y = ang + k * Math.PI / 2; mesh.renderOrder = 4; world.add(mesh);
      });
      wfMats.push({ m: m, speed: speed, ph: ph });
    }
    // the lake's main fall
    var PD = 15.0, PY = -8.6; // the floating pool the fall lands in
    function cascadePt(t, phi) { // from the broken rim, outward and down along a falling arc
      var Rr = 12.97 + (PD - 12.97) * Math.pow(t, 0.8);
      return new V3(Math.cos(phi) * Rr, 0.05 + PY * t * t * (1.2 - 0.2 * t), Math.sin(phi) * Rr);
    }
    function cascadeGeo(span, out, seedK) {
      var LS = 10, WS = 10, pos = [], uv = [], idx = [], col = [];
      for (var i = 0; i <= LS; i++) for (var j = 0; j <= WS; j++) {
        var t = i / LS, phi = PHI_L + (j / WS - 0.5) * 2 * PSI * span;
        var jit = (i > 0 && i < LS) ? Math.sin(i * 12.9 + j * 7.7 + seedK) * 0.22 : 0, jo = (j > 0 && j < WS) ? Math.cos(i * 5.1 + j * 3.3 + seedK) * 0.12 / 13 : 0;
        var P = cascadePt(t, phi + jo), nx = Math.cos(phi), nz = Math.sin(phi);
        pos.push(P.x + nx * (out + jit), P.y + jit * 0.4, P.z + nz * (out + jit));
        uv.push(j / WS, 1 - t); var cc = ONSEN_EDGE.clone().lerp(new THREE.Color(0x5ff0ff), smooth(t / 0.35)); col.push(cc.r, cc.g, cc.b);
      }
      for (var i2 = 0; i2 < LS; i2++) for (var j2 = 0; j2 < WS; j2++) {
        var a = i2 * (WS + 1) + j2, b = a + 1, c = a + WS + 1, d = c + 1; idx.push(a, c, b, b, c, d);
      }
      var g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
    }
    var facetMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, emissive: 0x18b6e6, emissiveIntensity: 0.45, flatShading: true, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false });
    var facetMat2 = facetMat.clone(); facetMat2.opacity = 0.32;
    var castFrag = 'uniform sampler2D map; uniform float time; uniform float rep; uniform float op; varying vec2 vUv; void main(){ vec4 s = texture2D(map, vec2(vUv.x, vUv.y * rep + time)); float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x); float foot = smoothstep(0.0, 0.08, vUv.y); gl_FragColor = vec4(mix(vec3(0.55, 0.97, 1.0), vec3(1.0), s.r), (0.08 + 0.55 * s.r) * edge * foot * op); }';
    [[1.0, 0, facetMat, 0.0], [0.85, 0.22, facetMat2, 3.0]].forEach(function (L, li) {
      var geo = cascadeGeo(L[0], L[1], L[3]);
      var sheet = new THREE.Mesh(geo, L[2]); sheet.renderOrder = 4; world.add(sheet);
      var sm = new THREE.ShaderMaterial({ uniforms: { map: { value: streak }, time: { value: 0 }, rep: { value: 1.6 }, op: { value: 0.9 } }, vertexShader: wfVert, fragmentShader: castFrag, transparent: true, depthWrite: false, side: THREE.DoubleSide });
      var flow = new THREE.Mesh(geo, sm); flow.renderOrder = 5; world.add(flow); wfMats.push({ m: sm, speed: 0.6 + li * 0.25, ph: li * 0.4 });
    });
    var strataCols = [0xe9b77a, 0xd39c63, 0xbb845a, 0x9c6c55, 0x7c5752, 0x5f4552];
    [-1, 1].forEach(function (side) { // broken walls at both ends of the notch
      for (var bw = 0; bw < 4; bw++) {
        var bphi = PHI_L + side * (PSI + 0.012 + bw * 0.01), bR = 12.55 + bw * 0.12;
        var blk = box(0.42, 0.5 + R() * 0.3, 0.5, strataCols[bw % 3], Math.cos(bphi) * bR, -0.1 + bw * 0.08, Math.sin(bphi) * bR, world);
        blk.rotation.set((R() - 0.5) * 0.2, -bphi + (R() - 0.5) * 0.4, (R() - 0.5) * 0.2);
      }
    });
    // the floating lower pool: a sandstone basin with a meadow rim, wide enough to catch the whole fall
    var PC = new V3(wd.x * PD, PY, wd.z * PD);
    var basinGeo = new THREE.CylinderGeometry(3.5, 1.6, 1.6, 10, 2), bpa = basinGeo.attributes.position;
    for (var bk = 0; bk < bpa.count; bk++) { var bx = bpa.getX(bk), by = bpa.getY(bk), bz = bpa.getZ(bk); if (by < 0.7) bpa.setXYZ(bk, bx * (1 + hhash(bx, by, bz) * 0.3), by + hhash(bz, bx, by) * 0.3, bz * (1 + hhash(by, bz, bx) * 0.3)); }
    basinGeo.computeVertexNormals();
    add(new THREE.Mesh(basinGeo, M(0xe0ac6e)), PC.x, PY - 0.8, PC.z, world);
    var tipGeo = new THREE.ConeGeometry(1.7, 2.6, 7); tipGeo.rotateX(Math.PI);
    add(new THREE.Mesh(tipGeo, M(0xc98a4f)), PC.x, PY - 2.75, PC.z, world);
    // the floating pool is filled right up to its brim
    var rimM = new THREE.Mesh(new THREE.RingGeometry(3.42, 3.56, 20), M(0x6fcf4f)); rimM.rotation.x = -Math.PI / 2; rimM.position.set(PC.x, PY + 0.035, PC.z); world.add(rimM);
    var poolMat = new THREE.MeshStandardMaterial({ color: 0x3fe6ff, emissive: 0x13a8d8, emissiveIntensity: 0.5, flatShading: true, roughness: 0.1, transparent: true, opacity: 0.88, side: THREE.DoubleSide });
    var poolW = new THREE.Mesh(new THREE.CircleGeometry(3.45, 20), poolMat);
    var poolSide = new THREE.Mesh(new THREE.CylinderGeometry(3.46, 3.46, 0.16, 20, 1, true), poolMat); poolSide.position.set(PC.x, PY - 0.05, PC.z); world.add(poolSide);
    poolW.rotation.x = -Math.PI / 2; poolW.position.set(PC.x, PY + 0.03, PC.z); world.add(poolW);
    // soft foam gathering where the water lands
    var foamMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, transparent: true, opacity: 0.8, flatShading: true });
    var foams = [];
    for (var fo = 0; fo < 26; fo++) {
      var fa = PHI_L + (R() - 0.5) * 2.1 * PSI, fr2 = PD + (R() - 0.5) * 0.9, fm2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16 + R() * 0.3, 0), foamMat2);
      fm2.position.set(Math.cos(fa) * fr2, PY, Math.sin(fa) * fr2); fm2.scale.y = 0.35; world.add(fm2); foams.push({ m: fm2, ph: R() * 6, s: 0.8 + R() * 0.4 });
    }
    var foamRings = [];
    for (var frg = 0; frg < 3; frg++) {
      var rm = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.75, 14), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
      var rphi = PHI_L + (frg - 1) * PSI * 0.6;
      rm.rotation.x = -Math.PI / 2; rm.position.set(Math.cos(rphi) * PD, PY + 0.045, Math.sin(rphi) * PD); world.add(rm); foamRings.push({ m: rm, ph: frg * 0.33 });
    }
    // mist hanging around the splash zone
    var mistTex = ctex(64, 64, function (x, w, h) { var gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, w, h); });
    var MP = 70, mpPos = new Float32Array(MP * 3), mpData = [];
    for (var mq = 0; mq < MP; mq++) mpData.push({ a: PHI_L + (R() - 0.5) * 2.6 * PSI, r: PD + (R() - 0.5) * 2.2, ph: R(), sp: 0.05 + R() * 0.08 });
    var mpGeo = new THREE.BufferGeometry(); mpGeo.setAttribute('position', new THREE.BufferAttribute(mpPos, 3));
    var mistPts = new THREE.Points(mpGeo, new THREE.PointsMaterial({ map: mistTex, color: 0xe6fdff, size: 0.55, transparent: true, opacity: 0.55, depthWrite: false, sizeAttenuation: true }));
    world.add(mistPts);
    var puffs = [];
    for (var pf = 0; pf < 7; pf++) {
      var sp2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: mistTex, color: 0xdffbff, transparent: true, opacity: 0.28, depthWrite: false }));
      sp2.scale.setScalar(2.2 + R() * 1.6); world.add(sp2); puffs.push({ m: sp2, a: PHI_L + (R() - 0.5) * 2.4 * PSI, r: PD + (R() - 0.5) * 1.6, ph: R() * 6 });
    }
    anims.push(function (t) {
      foams.forEach(function (f) { var k = f.s * (1 + Math.sin(t * 2.2 + f.ph) * 0.12); f.m.scale.set(k, 0.35 * k, k); });
      foamRings.forEach(function (r) { var u = (t * 0.45 + r.ph) % 1; r.m.scale.setScalar(1 + u * 2.4); r.m.material.opacity = 0.55 * (1 - u); });
      for (var i = 0; i < MP; i++) {
        var d = mpData[i], u = (t * d.sp + d.ph) % 1, a = d.a + Math.sin(t * 0.3 + i) * 0.02, rr = d.r + u * 0.8;
        mpPos[i * 3] = Math.cos(a) * rr; mpPos[i * 3 + 1] = PY + 0.1 + u * 3.2; mpPos[i * 3 + 2] = Math.sin(a) * rr;
      }
      mpGeo.attributes.position.needsUpdate = true;
      puffs.forEach(function (p) { var a = p.a + Math.sin(t * 0.2 + p.ph) * 0.03; p.m.position.set(Math.cos(a) * p.r, PY + 0.7 + Math.sin(t * 0.5 + p.ph) * 0.35, Math.sin(a) * p.r); });
    });
    // the water bends smoothly over the rim: one continuous sheet from the onsen surface into the fall
    (function tongue() {
      var rows = [], CW = 14, pos = [], col = [], idx = [];
      [12.45, 12.7, 12.9].forEach(function (R0) { rows.push({ R: R0, t: -1 }); });
      for (var i = 0; i <= 5; i++) rows.push({ t: i / 5 * 0.16 });
      rows.forEach(function (r) {
        for (var j = 0; j <= CW; j++) {
          var phi = PHI_L + (j / CW - 0.5) * 2 * PSI, P = r.t < 0 ? new V3(Math.cos(phi) * r.R, 0.058, Math.sin(phi) * r.R) : cascadePt(r.t, phi);
          pos.push(P.x, r.t < 0 ? P.y : P.y + 0.006, P.z);
          var cc = ONSEN_EDGE.clone().lerp(new THREE.Color(0x5ff0ff), Math.max(0, r.t) / 0.16 * 0.4); col.push(cc.r, cc.g, cc.b);
        }
      });
      for (var i2 = 0; i2 < rows.length - 1; i2++) for (var j2 = 0; j2 < CW; j2++) {
        var a = i2 * (CW + 1) + j2, b = a + 1, c = a + CW + 1, d = c + 1; idx.push(a, c, b, b, c, d);
      }
      var tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); tg.setIndex(idx); tg.computeVertexNormals();
      var tm = waterMat.clone(); tm.side = THREE.DoubleSide; tm.opacity = 0.62;
      var tongueM = new THREE.Mesh(tg, tm); tongueM.renderOrder = 3; world.add(tongueM);
    })();
    // onsen steam drifting up off the water
    var steam = [];
    for (var sti = 0; sti < 16; sti++) {
      var stm = new THREE.Sprite(new THREE.SpriteMaterial({ map: mistTex, color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
      world.add(stm); steam.push({ m: stm, ph: R(), sp: 0.07 + R() * 0.05, a: R() * 6.28, rr: Math.sqrt(R()) * 0.7 });
    }
    // bubbles rising and popping at the surface
    var bubMat = new THREE.MeshStandardMaterial({ color: 0xeafffb, roughness: 0.1, transparent: true, opacity: 0.85, emissive: 0x7fe0d8, emissiveIntensity: 0.3 });
    var bubs = [];
    for (var bbi = 0; bbi < 16; bbi++) {
      var bm = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), bubMat); world.add(bm);
      var br2 = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
      br2.rotation.x = -Math.PI / 2; world.add(br2);
      bubs.push({ m: bm, ring: br2, ph: R(), sp: 0.35 + R() * 0.4, k: bbi });
    }
    function onsenSpot(seed, spread) { var a = (hhash(seed, 1.7, 3.1) + 0.5) * Math.PI * 2, r = Math.sqrt(hhash(2.3, seed, 7.9) + 0.5) * spread * radAt(SHORE, a); return [LAKE.x + Math.cos(a) * r, LAKE.z + Math.sin(a) * r]; }
    anims.push(function (t) {
      steam.forEach(function (st) {
        var u = (t * st.sp + st.ph) % 1, cyc = Math.floor(t * st.sp + st.ph), spot = onsenSpot(cyc * 3.7 + st.a, 0.75);
        st.m.position.set(spot[0] + Math.sin(u * 3 + st.a) * 0.3, 0.25 + u * 2.6, spot[1] + Math.cos(u * 2 + st.a) * 0.3);
        st.m.scale.setScalar(0.9 + u * 2.2); st.m.material.opacity = 0.26 * Math.sin(u * Math.PI);
      });
      bubs.forEach(function (b) {
        var u = (t * b.sp + b.ph) % 1, cyc = Math.floor(t * b.sp + b.ph), spot = onsenSpot(cyc * 5.3 + b.k * 1.9, 0.8);
        if (u < 0.75) { b.m.visible = true; b.m.position.set(spot[0], 0.07, spot[1]); b.m.scale.setScalar(0.03 + u * 0.09); b.ring.material.opacity = 0; }
        else { var v = (u - 0.75) / 0.25; b.m.visible = false; b.ring.position.set(spot[0], 0.075, spot[1]); b.ring.scale.setScalar(0.08 + v * 0.35); b.ring.material.opacity = 0.7 * (1 - v); }
      });
    });
    // springs bursting from the island's cliff face
    [[wAng + 0.3, 0.55, 10], [wAng - 0.32, 0.45, 9], [wAng - 0.78, 0.35, 8], [0.55, 0.5, 10], [-0.95, 0.4, 9], [3.6, 0.45, 9]].forEach(function (f, i) {
      fall(Math.sin(f[0]) * 13.06, -0.5, Math.cos(f[0]) * 13.06, f[0], f[1], f[2], 0.6 + i * 0.07, i * 0.29, 0.85);
    });
    // streams dripping off the underside of the floating rock
    fall(ROCK_TIP.x, ROCK_TIP.y + 0.2, ROCK_TIP.z, 0.3, 0.34, 11, 0.7, 0.5, 0.9, true);
    ROCK_FRAGS.forEach(function (f, i) { fall(f.x, f.y + 0.1, f.z, i, 0.2, 6.5, 0.85, i * 0.4, 0.75, true); });
    anims.push(function (t) { wfMats.forEach(function (w) { w.m.uniforms.time.value = t * w.speed * 0.5 + w.ph; }); });

    var dir = dirFront.clone().negate(), perp = new V3(-dir.z, 0, dir.x);
    // a few tiny concrete tetrapods breaking up the beach
    var concrete = [0xbdb8af, 0xa9a49b, 0xc8c3ba];
    var TET = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map(function (d) { return new V3(d[0], d[1], d[2]).normalize(); });
    var qUp = new THREE.Quaternion().setFromUnitVectors(TET[0], UPV);
    function tetrapod(x, y, z, s, rx, ry, rz) {
      var g = new THREE.Group(), col = concrete[Math.floor(R() * 3)];
      TET.forEach(function (d) {
        var v = d.clone().applyQuaternion(qUp);
        var geo = new THREE.CylinderGeometry(0.1 * s, 0.19 * s, 0.5 * s, 6); geo.translate(0, 0.25 * s, 0);
        var leg = new THREE.Mesh(geo, M(col)); leg.quaternion.setFromUnitVectors(UPV, v); leg.castShadow = true; leg.receiveShadow = true; g.add(leg);
      });
      sph(0.17 * s, col, 0, 0, 0, g, 0);
      g.position.set(x, y, z); g.rotation.set(rx, ry, rz); world.add(g); return g;
    }
    // tetrapods along the sand edge at uneven gaps, a couple stacked
    var pierStart = P0.clone(), SIGN = P0.clone().addScaledVector(perp, 1.1).addScaledVector(dirFront, 0.2);
    function onPath(x, z) {
      for (var k = 0; k <= 12; k++) { var q = pierStart.clone().addScaledVector(dir, -k * 0.25); if (Math.hypot(x - q.x, z - q.z) < 0.75) return true; }
      return false;
    }
    var cands = [];
    for (var ti = 0; ti < 360; ti++) {
      var tAng = ti / 360 * Math.PI * 2, best = null;
      for (var k2 = 0; k2 < SAND.length; k2++) {
        var A = SAND[k2], B = SAND[(k2 + 1) % SAND.length], a0 = A[0], a1 = B[0] < a0 ? B[0] + Math.PI * 2 : B[0], ta = tAng < a0 ? tAng + Math.PI * 2 : tAng;
        if (ta >= a0 && ta <= a1) { best = [A, B, (ta - a0) / (a1 - a0 || 1)]; break; }
      }
      if (!best || best[0][2] || best[1][2]) continue;
      var tr = best[0][1] * (1 - best[2]) + best[1][1] * best[2] - 0.35;
      var tx = LAKE.x + Math.cos(tAng) * tr, tz = LAKE.z + Math.sin(tAng) * tr;
      if (Math.hypot(tx - SIGN.x, tz - SIGN.z) < 0.8) continue;
      cands.push([tx, tz]);
    }
    // [position along the edge, size, stacked on the previous one?]
    var TP = [[0.03, 1.0, 0], [0.03, 0.5, 1], [0.03, 0.5, 1], [0.12, 0.5, 0], [0.26, 0.5, 0], [0.31, 0.5, 1], [0.47, 0.5, 0], [0.6, 1.0, 0], [0.6, 0.5, 1], [0.7, 0.5, 0], [0.8, 0.5, 0], [0.85, 0.5, 1], [0.95, 0.5, 0]];
    TP.forEach(function (q) {
      if (!cands.length) return;
      var c = cands[Math.floor(q[0] * cands.length) % cands.length];
      if (q[2]) { var la2 = R() * 6.28; tetrapod(c[0] + Math.cos(la2) * 0.55, 0.13, c[1] + Math.sin(la2) * 0.55, q[1], (R() - 0.5) * 0.5, R() * 6, (R() - 0.5) * 0.5); }
      else tetrapod(c[0], 0.2 * q[1], c[1], q[1], 0, R() * 6, 0);
    });

    // the crab, scuttling sideways back and forth on the sand; poke it and it hops, snaps and dashes off
    var crab = new THREE.Group(); crab.scale.setScalar(1.3); world.add(crab);
    var crabBody = new THREE.Group(); crab.add(crabBody);
    sph(0.15, 0xff6a45, 0, 0.1, 0, crabBody, 1, 1.3, 0.7, 1);
    sph(0.025, 0xffffff, -0.06, 0.2, 0.1, crabBody, 0); sph(0.025, 0xffffff, 0.06, 0.2, 0.1, crabBody, 0);
    sph(0.012, 0x2a2338, -0.06, 0.215, 0.12, crabBody, 0); sph(0.012, 0x2a2338, 0.06, 0.215, 0.12, crabBody, 0);
    var claws = [-1, 1].map(function (sd) {
      var cg = new THREE.Group(); cg.position.set(0.2 * sd, 0.13, 0.1); crabBody.add(cg);
      sph(0.06, 0xff6a45, 0, 0, 0, cg, 0);
      var up = cone(0.03, 0.09, 4, 0xff6a45, 0.02 * sd, 0.03, 0.06, cg); up.rotation.x = 1.2;
      return cg;
    });
    var crabLegs = [];
    [-1, 1].forEach(function (sd) { for (var i = 0; i < 3; i++) { var lg = cyl(0.012, 0.012, 0.18, 3, 0xe9553f, 0.22 * sd, 0.05, -0.05 + i * 0.07, crabBody); lg.rotation.z = 1.0 * sd; crabLegs.push({ m: lg, sd: sd, i: i }); } });
    var crabHit = new THREE.Mesh(new THREE.SphereGeometry(0.45, 8, 6), new THREE.MeshBasicMaterial({ visible: false })); crabHit.position.y = 0.15; crab.add(crabHit);
    CRAB.hit = crabHit;
    var crabMid = bulge + 0.6, crabPh = 0, crabLast = 0, pokeAt = -10, crabSpin = 0;
    var bang = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctex(64, 64, function (x) { x.clearRect(0, 0, 64, 64); x.fillStyle = '#ffffff'; x.beginPath(); x.arc(32, 32, 28, 0, 7); x.fill(); x.fillStyle = '#ff5a3c'; x.font = '800 44px "Bricolage Grotesque", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('!', 32, 35); }), transparent: true, depthWrite: false, opacity: 0 }));
    bang.scale.set(0.35, 0.35, 1); bang.position.y = 0.55; crab.add(bang);
    CRAB.poke = function () { pokeAt = crabLast; };
    anims.push(function (t) {
      var dt = Math.min(0.05, Math.max(0, t - crabLast)); crabLast = t;
      var since = t - pokeAt, startled = since < 2.2;
      crabPh += dt * 0.35 * (startled ? 4 : 1);
      var u = Math.sin(crabPh), a = crabMid + u * 0.28, sp = Math.cos(crabPh);
      var crabR = radAt(SHORE, a) + 0.9, cx = LAKE.x + Math.cos(a) * crabR, cz = LAKE.z + Math.sin(a) * crabR;
      var hop = since < 0.9 ? Math.abs(Math.sin(since * Math.PI * 2.2)) * 0.35 * (1 - since / 0.9) : 0;
      crab.position.set(cx, 0.03 + hop, cz);
      crabSpin = since < 0.6 ? since / 0.6 * Math.PI * 2 : 0;
      crab.rotation.y = Math.atan2(LAKE.x - cx, LAKE.z - cz) + crabSpin;
      var snap = startled ? Math.max(0, Math.sin(since * 18)) * 0.7 : Math.max(0, Math.sin(t * 1.3)) * 0.15;
      claws.forEach(function (c, i) { c.rotation.z = (i ? -1 : 1) * snap; c.position.y = 0.13 + (startled ? 0.06 : 0); });
      crabLegs.forEach(function (l) { l.m.rotation.x = Math.sin(t * (startled ? 22 : 9) + l.i * 2 + l.sd) * 0.45 * Math.min(1, Math.abs(sp) * 3 + (startled ? 1 : 0)); });
      bang.material.opacity = since < 1.4 ? Math.min(1, (1.4 - since) * 2) : 0; bang.position.y = 0.55 + Math.min(0.2, since * 0.4);
    });

    // sign
    var sg = new THREE.Group(); sg.position.set(SIGN.x, 0, SIGN.z); sg.rotation.y = Math.atan2(dirFront.x, dirFront.z) + 0.4; world.add(sg);
    cyl(0.05, 0.06, 1.2, 5, 0x8a5a3c, 0, 0.6, 0, sg); box(0.95, 0.5, 0.06, 0xa9744f, 0, 1.15, 0.05, sg);
    plane(0.9, 0.45, texSign('say hi', 256, 128, '#a9744f', '#fff4dc', 62), 0, 1.15, 0.085, sg);
    cabinParts.sign = sg;

  })();

  /* ------------------------------------------------------------------ */
  /* Hotspots                                                            */
  /* ------------------------------------------------------------------ */
  var hovered = null;
  function register(id, stop, group, hitR, off, markY) {
    world.updateMatrixWorld(true);
    var pos = new THREE.Vector3(); group.getWorldPosition(pos);
    var hit = new THREE.Mesh(new THREE.SphereGeometry(hitR, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.copy(pos); hit.userData.hs = id; scene.add(hit); hitList.push(hit);
    var spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture, transparent: true, depthTest: false, depthWrite: false }));
    spr.position.copy(pos); spr.position.y += markY; spr.renderOrder = 30; scene.add(spr);
    HS[id] = { id: id, stop: stop, group: group, pos: pos, off: new THREE.Vector3(off[0], off[1], off[2]), spr: spr, hover: 0, base: spr.position.y, ph: Math.random() * 6 };
  }
  register('graveyard', 1, buildGraveyard(), 1.2, [0.6, 1.9, 2.8], 0.8);
  if (loftGroup) fadeable(loftGroup); FADE_LATER.forEach(fadeable); fadeable(DECOR); // the dome's frame and glass always stay as they are
  register('landscape', 2, buildEasel(), 0.9, [0.7, 0.4, 3.0], 1.3);
  register('ted', 3, barnHS.tv, 0.7, [-1.6, 0.8, 2.4], 1.5);
  register('teddy', 3, barnHS.ted, 0.6, [-1.5, 0.7, 2.2], 1.1);
  register('mango', 4, buildMango(), 0.6, [0.3, 0.6, 1.9], 0.5);
  register('frog', 4, buildFrog(), 0.6, [0.5, 0.5, 1.9], 0.7);
  register('sleepypaws', 5, cabinParts.cat, 0.6, [0.9, 0.9, 2.4], 0.6);
  register('concept', 5, cabinParts.easel, 0.7, [-0.3, 1.1, 2.3], 1.3);
  register('gameui', 5, cabinParts.console, 0.4, [0.1, 0.8, 1.5], 0.45);
  register('contact', 6, cabinParts.sign, 0.6, [0.2, 0.7, 2.3], 1.1);

  /* ------------------------------------------------------------------ */
  /* Camera path                                                         */
  /* ------------------------------------------------------------------ */
  var aspect = 1, posCurve, lookCurve;
  function buildCurves() {
    var k = aspect < 1 ? 1 + (1 - aspect) * 0.9 : 1;
    var pp = [], ll = [];
    STOPS.forEach(function (s, i) {
      var tgt = new THREE.Vector3(s.tgt[0], s.tgt[1], s.tgt[2]);
      var pos = new THREE.Vector3(s.pos[0], s.pos[1], s.pos[2]);
      pos.sub(tgt).multiplyScalar(k).add(tgt);
      pp.push(pos); ll.push(tgt);
    });
    posCurve = new THREE.CatmullRomCurve3(pp, false, 'catmullrom', 0.5);
    lookCurve = new THREE.CatmullRomCurve3(ll, false, 'catmullrom', 0.5);
  }
  var viewW = 1, viewH = 1, lastShift = -1;
  // Slides the picture sideways (for the intro text) without turning the camera, so the island stays level.
  function applyView(shift) {
    if (Math.abs(shift - lastShift) < 0.0005) return;
    lastShift = shift;
    var yoff = aspect < 0.9 ? viewH * 0.1 : 0;
    if (!shift && !yoff) camera.clearViewOffset(); else camera.setViewOffset(viewW, viewH, -shift * viewW, yoff, viewW, viewH);
    camera.updateProjectionMatrix();
  }
  function resize() {
    var w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    aspect = w / h; camera.aspect = aspect;
    viewW = w; viewH = h; lastShift = -1; applyView(0);
    buildCurves();
    maxScroll = Math.max(1, document.documentElement.scrollHeight - h);
  }
  window.addEventListener('resize', resize);
  resize();
  window.addEventListener('load', function () { maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); });

  /* ------------------------------------------------------------------ */
  /* Pointer interaction                                                 */
  /* ------------------------------------------------------------------ */
  var ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), mouse = { x: 0, y: 0 };
  // the floating postcard view
  var pcWrap = document.getElementById('postcard'), pcCard = document.getElementById('pcCard'), pcFront = document.getElementById('pcFront'), pcOpenIdx = -1, pcLastFocus = null;
  function openPostcard(i, cx, cy) {
    pcOpenIdx = i; pcLastFocus = document.activeElement;
    POSTCARDS.meshes[i].visible = false;
    pcFront.style.backgroundImage = 'url(' + POSTCARDS.designs[i].image.toDataURL() + ')';
    pcCard.classList.remove('flipped');
    pcWrap.style.setProperty('--ox', (cx || window.innerWidth / 2) + 'px'); pcWrap.style.setProperty('--oy', (cy || window.innerHeight / 2) + 'px');
    pcWrap.hidden = false; requestAnimationFrame(function () { pcWrap.classList.add('on'); });
    document.getElementById('pcFlip').focus();
  }
  function closePostcard() {
    if (pcOpenIdx < 0) return;
    pcWrap.classList.remove('on'); var idx = pcOpenIdx; pcOpenIdx = -1;
    setTimeout(function () { pcWrap.hidden = true; POSTCARDS.meshes[idx].visible = true; }, 380);
    if (pcLastFocus && pcLastFocus.focus) pcLastFocus.focus();
  }
  document.getElementById('pcFlip').addEventListener('click', function () { pcCard.classList.toggle('flipped'); });
  document.getElementById('pcClose').addEventListener('click', closePostcard);
  pcWrap.addEventListener('click', function (e) { if (e.target === pcWrap) closePostcard(); });
  pcCard.addEventListener('click', function (e) { if (!e.target.closest('a,button')) pcCard.classList.toggle('flipped'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePostcard(); });
  function pick(e) {
    var r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    var hits = ray.intersectObjects(hitList.concat(CRAB.hit ? [CRAB.hit] : [], POSTCARDS.meshes), false);
    if (!hits.length) return null;
    var o = hits[0].object;
    return o === CRAB.hit ? 'crab' : o.userData.pc !== undefined ? 'pc:' + o.userData.pc : o.userData.hs;
  }
  canvas.addEventListener('pointermove', function (e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    if (e.pointerType === 'touch') return;
    var id = pick(e); hovered = id === 'crab' || (id && id.indexOf('pc:') === 0) ? null : id;
    canvas.style.cursor = id ? 'pointer' : 'default';
    if (id) { tip.textContent = id === 'crab' ? 'Poke the crab' : id.indexOf('pc:') === 0 ? 'Pick up a postcard' : id === 'contact' ? 'Say hi' : PROJECTS[id].title; tip.style.left = e.clientX + 'px'; tip.style.top = e.clientY + 'px'; tip.classList.add('on'); }
    else tip.classList.remove('on');
  });
  canvas.addEventListener('pointerleave', function () { hovered = null; tip.classList.remove('on'); });
  // free look camera
  var FREE = { on: false, T: new THREE.Vector3(), r: 20, th: 0, ph: 1, drag: null, moved: 0, keys: {}, pts: {} };
  var freeBtn = document.getElementById('freeBtn'), freeHelp = document.getElementById('freeHelp');
  function setFree(on) {
    FREE.on = on; document.body.classList.toggle('free', on); freeBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    freeBtn.textContent = on ? 'Back to the tour' : 'Explore freely'; freeHelp.hidden = !on;
    document.documentElement.style.overflow = on ? 'hidden' : ''; canvas.style.touchAction = on ? 'none' : '';
    if (on) {
      if (focusId) closePanel();
      FREE.T.copy(vL); var off = new THREE.Vector3().subVectors(vP, vL);
      FREE.r = off.length(); FREE.th = Math.atan2(off.x, off.z); FREE.ph = Math.acos(clamp(off.y / FREE.r, -1, 1));
    }
  }
  freeBtn.addEventListener('click', function () { setFree(!FREE.on); });
  function freePan(dx, dy) {
    var fwd = new THREE.Vector3().subVectors(FREE.T, camera.position).normalize(), right = new THREE.Vector3().crossVectors(fwd, UP).normalize(), up = new THREE.Vector3().crossVectors(right, fwd);
    FREE.T.addScaledVector(right, -dx * FREE.r * 0.0016).addScaledVector(up, dy * FREE.r * 0.0016);
  }
  canvas.addEventListener('contextmenu', function (e) { if (FREE.on) e.preventDefault(); });
  canvas.addEventListener('pointerdown', function (e) {
    if (!FREE.on) return;
    canvas.setPointerCapture(e.pointerId); FREE.pts[e.pointerId] = [e.clientX, e.clientY]; FREE.moved = 0;
    FREE.drag = { pan: e.button === 2 || e.shiftKey, x: e.clientX, y: e.clientY };
  });
  canvas.addEventListener('pointermove', function (e) {
    if (!FREE.on || !FREE.pts[e.pointerId]) return;
    var ids = Object.keys(FREE.pts), prev = FREE.pts[e.pointerId]; FREE.pts[e.pointerId] = [e.clientX, e.clientY];
    var dx = e.clientX - prev[0], dy = e.clientY - prev[1]; FREE.moved += Math.abs(dx) + Math.abs(dy);
    if (ids.length >= 2) {
      var a = FREE.pts[ids[0]], b = FREE.pts[ids[1]], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      if (FREE.pinch) FREE.r = clamp(FREE.r * FREE.pinch / d, 0.6, 70); FREE.pinch = d; freePan(dx / 2, dy / 2); return;
    }
    if (FREE.drag && FREE.drag.pan) freePan(dx, dy);
    else { FREE.th -= dx * 0.006; FREE.ph = clamp(FREE.ph - dy * 0.006, 0.03, Math.PI - 0.03); }
  });
  function freeUp(e) { delete FREE.pts[e.pointerId]; FREE.pinch = null; if (!Object.keys(FREE.pts).length) FREE.drag = null; }
  canvas.addEventListener('pointerup', freeUp); canvas.addEventListener('pointercancel', freeUp);
  window.addEventListener('wheel', function (e) { if (!FREE.on) return; e.preventDefault(); FREE.r = clamp(FREE.r * Math.exp(e.deltaY * 0.0012), 0.6, 70); }, { passive: false });
  document.addEventListener('keydown', function (e) { if (FREE.on && !/INPUT|TEXTAREA/.test(e.target.tagName)) { FREE.keys[e.key.toLowerCase()] = true; if (/^arrow/.test(e.key.toLowerCase())) e.preventDefault(); } });
  document.addEventListener('keyup', function (e) { FREE.keys[e.key.toLowerCase()] = false; });
  function freeStep(dt) {
    var k = FREE.keys, sp = Math.max(2, FREE.r * 0.7) * dt, fwd = new THREE.Vector3(-Math.sin(FREE.th), 0, -Math.cos(FREE.th)), right = new THREE.Vector3(-fwd.z, 0, fwd.x);
    if (k.w || k.arrowup) FREE.T.addScaledVector(fwd, sp); if (k.s || k.arrowdown) FREE.T.addScaledVector(fwd, -sp);
    if (k.d || k.arrowright) FREE.T.addScaledVector(right, sp); if (k.a || k.arrowleft) FREE.T.addScaledVector(right, -sp);
    if (k.e) FREE.T.y += sp; if (k.q) FREE.T.y -= sp;
    vL.copy(FREE.T); vP.set(FREE.T.x + FREE.r * Math.sin(FREE.ph) * Math.sin(FREE.th), FREE.T.y + FREE.r * Math.cos(FREE.ph), FREE.T.z + FREE.r * Math.sin(FREE.ph) * Math.cos(FREE.th));
  }

  canvas.addEventListener('click', function (e) {
    if (FREE.on && FREE.moved > 6) return;
    var id = pick(e);
    if (id === 'crab') { if (CRAB.poke) CRAB.poke(); }
    else if (id && id.indexOf('pc:') === 0) openPostcard(+id.slice(3), e.clientX, e.clientY);
    else if (id) openPanel(id);
  });

  /* ------------------------------------------------------------------ */
  /* Animation loop                                                      */
  /* ------------------------------------------------------------------ */
  var clock = new THREE.Clock();
  var cur = 0, focusBlend = 0;
  var vP = new THREE.Vector3(), vL = new THREE.Vector3(), fP = new THREE.Vector3(), fL = new THREE.Vector3(), dirV = new THREE.Vector3(), rightV = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);

  function frame() {
    requestAnimationFrame(frame);
    var dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    var target = FREE.on ? cur : clamp(window.scrollY / maxScroll, 0, 1);
    cur += (target - cur) * (1 - Math.exp(-dt * (reduce ? 14 : 4.5)));

    var u = cur * (N - 1), i = Math.min(N - 2, Math.floor(u)), s = u - i;
    var tt = (i + smooth((s - 0.2) / 0.6)) / (N - 1);
    posCurve.getPoint(tt, vP); lookCurve.getPoint(tt, vL);
    if (!reduce && !FREE.on) { vP.x += mouse.x * 0.35; vP.y -= mouse.y * 0.2; }

    focusBlend += ((focusId ? 1 : 0) - focusBlend) * (1 - Math.exp(-dt * 4));
    if (focusBlend < 0.003 && !focusId) { focusBlend = 0; }
    if (focusHS && focusBlend > 0) {
      var sc = aspect < 1 ? 1.35 : 1;
      fP.copy(focusHS.pos).addScaledVector(focusHS.off, sc);
      fL.copy(focusHS.pos);
      dirV.subVectors(fL, fP).normalize(); rightV.crossVectors(dirV, UP).normalize();
      if (window.innerWidth > 760) fL.addScaledVector(rightV, 0.9 * sc); else fL.y -= 0.55 * sc;
      var b = smooth(focusBlend);
      vP.lerp(fP, b); vL.lerp(fL, b);
    }
    if (FREE.on) freeStep(dt);
    applyView(FREE.on ? 0 : 0.17 * clamp((aspect - 0.9) / 0.5, 0, 1) * (1 - smooth(u / 0.9)) * (1 - focusBlend));
    camera.position.copy(vP); camera.lookAt(vL);
    var dimW = FREE.on ? 0.25 : Math.max(smooth(u / 0.8), focusBlend);
    focusSpot.position.set(vL.x + 1.5, vL.y + 7, vL.z + 3); focusSpot.target.position.copy(vL);
    updateEnvironment(t, dt, dimW);
    var showing = focusHS && focusBlend > 0.3 ? [focusHS.pos] : Object.keys(HS).filter(function (k) { return HS[k].stop === Math.round(u); }).map(function (k) { return HS[k].pos; });
    updateFaders(dt, vP, vL, FREE.on ? null : showing, FREE.on);

    var near = Math.round(u), d = Math.abs(u - near), a = 1 - smooth(d / 0.38);
    if (near !== shownStop) {
      shownStop = near; renderCaption(near);
      Array.prototype.forEach.call(railEl.children, function (b2, k) { b2.setAttribute('aria-current', k === near ? 'true' : 'false'); });
    }
    introEl.style.setProperty('--a', near === 0 ? a : 0);
    introEl.style.visibility = near === 0 && a > 0.02 ? 'visible' : 'hidden';
    capEl.style.setProperty('--a', near === 0 ? 0 : a);
    capEl.classList.toggle('live', near !== 0 && a > 0.6);
    capEl.style.visibility = near === 0 ? 'hidden' : 'visible';
    hintEl.style.setProperty('--a', near === 0 ? a : 0);

    for (var q = 0; q < anims.length; q++) anims[q](t);
    if (!reduce) {
      bobbers.forEach(function (b3) { b3.g.position.y = Math.abs(Math.sin(t * 1.5 + b3.ph)) * b3.amp; });
      clouds.forEach(function (c) { c.position.x += c.userData.speed * dt; if (c.position.x > 34) c.position.x = -34; });
      bulbMats.forEach(function (m, k) { m.opacity = 0.75 + 0.25 * Math.sin(t * 2 + k); });
    }
    Object.keys(HS).forEach(function (k) {
      var h = HS[k], on = hovered === k ? 1 : 0;
      h.hover += (on - h.hover) * 0.2;
      h.group.scale.setScalar(1 + 0.08 * h.hover);
      var dist = camera.position.distanceTo(h.pos);
      var active = h.stop === near ? 1 : 0.55;
      var pulse = reduce ? 1 : 1 + Math.sin(t * 2.4 + h.ph) * 0.12;
      var size = clamp(dist * 0.045, 0.4, 1.3) * active * pulse * (1 + h.hover * 0.4);
      h.spr.scale.set(size, size, 1);
      h.spr.material.opacity = (focusBlend > 0.5 ? 0.0 : 1) * (h.stop === near ? 1 : 0.5);
      h.spr.position.y = h.base + (reduce ? 0 : Math.sin(t * 1.8 + h.ph) * 0.05);
    });
    renderer.render(scene, camera);
  }
  frame();
})();

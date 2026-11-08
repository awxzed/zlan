(() => {
  "use strict";

  /* ================= helpers ================= */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (s) => esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/==(.+?)==/g, "<mark>$1</mark>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
  const ficheById = (id) => FICHES.find((f) => f.id === id);
  const ficheLabel = (id) => { const f = ficheById(id); return f ? `${f.emoji} Fiche ${f.num}` : ""; };

  /* ================= persistence ================= */
  const KEY = "zilan-constit-v1";
  let state = { read: {}, best: null, known: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved) state = Object.assign(state, saved);
  } catch (e) { /* stockage indisponible : on continue sans */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  /* ================= textes rigolos ================= */
  const MASCOT_LINES = [
    "Objection ! Tu es beaucoup trop forte.",
    "Miaou. Ça veut dire « art. 89 » en chat.",
    "Je suis inamovible de ton cœur 💖",
    "La QPC ? Question Prioritaire de Câlins.",
    "Les hommes passent, les croquettes demeurent.",
    "J'ai été nommé par le président du Sénat. Le Sénat des chats.",
    "Le gouvernement des juges ? Non. Le gouvernement des chats.",
    "Rappel : c'est Bodin. Pas Gaudin. Pas Bob.",
    "12 milles marins, pas 12 000. Je nage pas si loin, moi.",
    "Pause eau 💧 puis tu reviens me voir. C'est un ordre (impératif, donc nul, mais bon).",
    "Mon monocle voit les pièges jusqu'à 200 milles. C'est ma ZEE.",
    "Je ne peux pas m'autosaisir. Mais toi tu peux me caresser.",
    "Hobbes disait pas de rébellion. Moi je dis pas de procrastination.",
    "Ronron à valeur constitutionnelle 🐾",
    "Marbury v. Madison. Pas « Margary versus Maddison ». Je surveille 👀"
  ];
  const LOVE = [
    "Tu vas tout déchirer lundi, j'en mets ma main à couper 💖",
    "Même le Conseil constitutionnel te déclarerait conforme à mes rêves.",
    "Pause câlin autorisée : art. 1 de notre Constitution à nous.",
    "Tu es ma souveraineté : indivisible et inaliénable.",
    "Une fiche de plus = un bisou de plus 😘",
    "Je crois en toi plus que Rousseau ne croit en la volonté générale.",
    "Courage mon cœur, lundi 13h30 c'est TA journée.",
    "Révision approuvée à l'unanimité de mon cœur (3/5 c'était pas assez).",
    "Tu es la seule norme supérieure de ma hiérarchie 💕",
    "Bois de l'eau, mange un truc, et souviens-toi que tu es incroyable."
  ];
  const GOOD = [
    "Conforme à la Constitution ✨",
    "Objection rejetée : t'as raison 😎",
    "Le Conseil constitutionnel valide !",
    "Maître Moustache applaudit avec ses petites pattes 👏",
    "Décision : génie. Sans recours possible.",
    "Même Montesquieu n'aurait pas fait mieux.",
    "Souveraine, comme la nation 👑",
    "Inamovible dans l'excellence 💅",
    "Adoptée en termes identiques par les deux chambres !",
    "Bodin serait fier. Gaudin aussi, s'il existait."
  ];
  const BAD = [
    "Non conforme… mais disposition séparable, on continue 😿",
    "Objection retenue 🙈",
    "Le Sénat oppose son veto à cette réponse.",
    "Maître Moustache a fait tomber son monocle.",
    "Retour à l'état de nature 🌿",
    "Petite cohabitation entre toi et la bonne réponse.",
    "Abrogée ! Mais avec effet différé, tu peux te rattraper.",
    "C'est pas grave : la révision est devenue un acte banal 😌"
  ];
  const STREAK = { 3: "3 d'affilée ! 🔥", 5: "5 d'affilée ! Tu es en mode Cour suprême 🔥🔥", 8: "8 d'affilée ?! Marbury v. Zilan 🔥🔥🔥", 12: "12 d'affilée. On appelle ça un PFRLR maintenant 🤯" };

  /* ================= toast & confetti ================= */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    t.style.animation = "none"; void t.offsetWidth; t.style.animation = "";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }
  function confetti(n = 70) {
    const box = $("#confetti");
    const items = ["💖", "✨", "⚖️", "🎉", "💜", "🌸", "📜", "⭐"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("i");
      c.textContent = pick(items);
      c.style.left = Math.random() * 100 + "vw";
      c.style.fontSize = 14 + Math.random() * 20 + "px";
      c.style.animationDuration = 2.2 + Math.random() * 2.5 + "s";
      c.style.animationDelay = Math.random() * .8 + "s";
      box.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }
  }

  /* ================= router ================= */
  const VIEWS = ["accueil", "fiches", "fiche", "flash", "quiz", "memo"];
  function route() {
    const hash = location.hash.replace("#", "") || "accueil";
    const [view, param] = hash.split("/");
    const v = VIEWS.includes(view) ? view : "accueil";
    VIEWS.forEach((name) => { $("#view-" + name).hidden = name !== v; });
    const navKey = v === "fiche" ? "fiches" : v;
    $$(".tabs a").forEach((a) => a.classList.toggle("active", a.dataset.nav === navKey));
    if (v === "accueil") renderHome();
    if (v === "fiches") renderFichesList();
    if (v === "fiche") renderFiche(param);
    if (v === "flash") renderFlash();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ================= accueil ================= */
  function renderHome() {
    const nRead = FICHES.filter((f) => state.read[f.id]).length;
    $("#st-fiches").textContent = nRead;
    $("#bar-fiches").style.width = (nRead / FICHES.length) * 100 + "%";
    $("#st-best").textContent = state.best ? state.best.pct + " %" : "—";
    const nKnown = Object.values(state.known).filter(Boolean).length;
    $("#st-flash").textContent = `${nKnown} / ${FLASHCARDS.length} flashcard${nKnown > 1 ? "s" : ""} maîtrisée${nKnown > 1 ? "s" : ""}`;
  }
  let lastLine = "";
  $("#mascotBtn").addEventListener("click", () => {
    let line;
    do { line = pick(MASCOT_LINES); } while (line === lastLine);
    lastLine = line;
    const b = $("#bubble");
    b.textContent = line;
    b.style.animation = "none"; void b.offsetWidth; b.style.animation = "";
    const m = $("#mascotBtn");
    m.classList.remove("wiggle"); void m.offsetWidth; m.classList.add("wiggle");
  });
  function newLove() {
    const el = $("#loveTxt");
    let t;
    do { t = pick(LOVE); } while (t === el.textContent && LOVE.length > 1);
    el.textContent = t;
  }
  $("#loveBtn").addEventListener("click", newLove);
  newLove();

  // countdown — lundi 9 novembre 2026, 13h30
  const EXAM = new Date(2026, 10, 9, 13, 30, 0);
  function tick() {
    const diff = EXAM - new Date();
    if (diff <= 0) {
      $("#countdown").innerHTML = "<div><b>🎉</b><span>c'est fait !</span></div>";
      $("#cd-msg").textContent = "Examen passé. Maintenant : repos, câlins et pizza.";
      return;
    }
    const h = Math.floor(diff / 3.6e6), m = Math.floor((diff % 3.6e6) / 6e4), s = Math.floor((diff % 6e4) / 1000);
    $("#cd-h").textContent = h;
    $("#cd-m").textContent = String(m).padStart(2, "0");
    $("#cd-s").textContent = String(s).padStart(2, "0");
    $("#cd-msg").textContent = h < 3 ? "Dernière ligne droite, tu es prête 💪" : h < 24 ? "Moins d'un jour : relis le pense-bête 📌" : "Respire, tu gères.";
  }
  tick();
  setInterval(tick, 1000);

  /* ================= fiches ================= */
  function renderFichesList() {
    const groups = [];
    FICHES.forEach((f) => {
      let g = groups.find((x) => x.name === f.groupe);
      if (!g) groups.push(g = { name: f.groupe, items: [] });
      g.items.push(f);
    });
    $("#fichesList").innerHTML = groups.map((g) => `
      <h3 class="groupe-title">${esc(g.name)}</h3>
      <div class="fiche-grid">
        ${g.items.map((f) => `
          <a class="fiche-tile ${state.read[f.id] ? "read" : ""}" href="#fiche/${f.id}" style="text-decoration:none">
            <span class="em">${f.emoji}</span>
            <span class="num">Fiche ${f.num}</span>
            <span class="tt">${esc(f.titre)}</span>
          </a>`).join("")}
      </div>`).join("");
  }

  function renderFiche(id) {
    const i = FICHES.findIndex((f) => f.id === id);
    if (i < 0) { location.hash = "#fiches"; return; }
    const f = FICHES[i], prev = FICHES[i - 1], next = FICHES[i + 1];
    const nq = QUIZ.filter((q) => q.f === f.id).length;
    let html = `
      <div class="fiche-nav">
        <a class="btn btn-small btn-ghost" href="#fiches">← Toutes les fiches</a>
        <span style="display:flex;gap:.5rem;flex-wrap:wrap">
          ${prev ? `<a class="btn btn-small btn-ghost" href="#fiche/${prev.id}">‹ Fiche ${prev.num}</a>` : ""}
          ${next ? `<a class="btn btn-small btn-ghost" href="#fiche/${next.id}">Fiche ${next.num} ›</a>` : ""}
        </span>
      </div>
      <div class="fiche-header">
        <span class="em">${f.emoji}</span>
        <div><p class="kicker">${esc(f.groupe)} · Fiche ${f.num}</p><h2>${esc(f.titre)}</h2></div>
      </div>`;
    f.sections.forEach((s) => {
      html += `<div class="card sec"><h3>${esc(s.h)}</h3><ul class="nice-list">${s.items.map((it) => `<li>${fmt(it)}</li>`).join("")}</ul>${s.piege ? `<div class="piege">${fmt(s.piege)}</div>` : ""}</div>`;
    });
    if (f.tableau) {
      html += `<div class="card"><h3>📊 Le tableau à connaître</h3><div class="table-wrap"><table class="cmp"><thead><tr>${f.tableau.cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${f.tableau.rows.map((r) => `<tr><th>${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
    }
    html += `
      <div class="fiche-actions">
        <button class="btn btn-ghost btn-read ${state.read[f.id] ? "on" : ""}" id="readBtn">${state.read[f.id] ? "✓ Fiche lue" : "☐ J'ai lu cette fiche"}</button>
        ${nq ? `<button class="btn btn-primary" id="ficheQuiz">Quiz sur cette fiche (${nq}) 🎯</button>` : ""}
        <button class="btn btn-ghost" id="ficheFlash">Ses flashcards 🃏</button>
      </div>`;
    $("#ficheDetail").innerHTML = html;
    $("#readBtn").addEventListener("click", (e) => {
      state.read[f.id] = !state.read[f.id];
      save();
      e.currentTarget.classList.toggle("on", state.read[f.id]);
      e.currentTarget.textContent = state.read[f.id] ? "✓ Fiche lue" : "☐ J'ai lu cette fiche";
      if (state.read[f.id]) {
        const n = FICHES.filter((x) => state.read[x.id]).length;
        if (n === FICHES.length) { confetti(110); toast("Toutes les fiches lues !!! Tu es une légende 👑"); }
        else toast(pick(["Bien joué 💖", "Une de plus ! 🎉", "Maître Moustache est fier 🐱", "Hop, dans la tête 🧠"]) + ` (${n}/${FICHES.length})`);
      }
    });
    const qb = $("#ficheQuiz");
    if (qb) qb.addEventListener("click", () => { quizSel = new Set([f.id]); location.hash = "#quiz"; startQuiz(); });
    $("#ficheFlash").addEventListener("click", () => { flashFilter = f.id; flashDeck = null; location.hash = "#flash"; });
  }

  /* ================= flashcards ================= */
  let flashFilter = "all";
  let flashDeck = null;
  let flashPos = 0;

  function buildDeck() {
    let ids = FLASHCARDS.map((_, i) => i);
    if (flashFilter === "todo") ids = ids.filter((i) => !state.known[i]);
    else if (flashFilter !== "all") ids = ids.filter((i) => FLASHCARDS[i].f === flashFilter);
    flashDeck = ids;
    flashPos = 0;
  }
  function renderFlashFilter() {
    const opts = [["all", "Toutes"], ["todo", "🙈 À revoir"]].concat(
      FICHES.filter((f) => FLASHCARDS.some((c) => c.f === f.id)).map((f) => [f.id, `${f.emoji} ${f.num}`])
    );
    $("#flashFilter").innerHTML = opts.map(([k, l]) => `<button class="chip ${flashFilter === k ? "on" : ""}" data-k="${k}">${l}</button>`).join("");
    $$("#flashFilter .chip").forEach((c) => c.addEventListener("click", () => {
      flashFilter = c.dataset.k;
      buildDeck();
      renderFlash();
    }));
  }
  function renderFlash() {
    if (!flashDeck) buildDeck();
    renderFlashFilter();
    const card = $("#flashcard");
    card.classList.remove("flipped");
    const done = flashPos >= flashDeck.length;
    $(".flash-actions").hidden = done;
    $("#flashShuffle").hidden = done;
    if (done) {
      card.hidden = true;
      $("#flashCount").innerHTML = "";
      let doneBox = $("#flashDone");
      if (!doneBox) {
        doneBox = document.createElement("div");
        doneBox.id = "flashDone";
        doneBox.className = "card flash-done";
        card.after(doneBox);
      }
      doneBox.hidden = false;
      const empty = flashDeck.length === 0;
      doneBox.innerHTML = empty
        ? `<div class="big">🌈</div><h3>Rien à revoir ici !</h3><p>Toutes les cartes de cette sélection sont maîtrisées. Bravo mon cœur.</p>`
        : `<div class="big">🎉</div><h3>Paquet terminé !</h3><p>${flashDeck.filter((i) => state.known[i]).length} / ${flashDeck.length} maîtrisées.</p><div class="hero-cta center-row"><button class="btn btn-primary" id="flashAgain">Recommencer 🔁</button><button class="btn btn-ghost" id="flashTodo">Que les « à revoir » 🙈</button></div>`;
      const again = $("#flashAgain");
      if (again) again.addEventListener("click", () => { flashDeck = shuffle(flashDeck); flashPos = 0; renderFlash(); });
      const todo = $("#flashTodo");
      if (todo) todo.addEventListener("click", () => { flashFilter = "todo"; buildDeck(); renderFlash(); });
      return;
    }
    const dbox = $("#flashDone");
    if (dbox) dbox.hidden = true;
    card.hidden = false;
    const c = FLASHCARDS[flashDeck[flashPos]];
    $("#flashCount").textContent = `Carte ${flashPos + 1} / ${flashDeck.length}`;
    $("#flashFront").textContent = c.r;
    $("#flashBack").textContent = c.v;
    $("#flashTagF").textContent = ficheLabel(c.f);
    $("#flashTagB").textContent = ficheLabel(c.f);
  }
  function flip() { $("#flashcard").classList.toggle("flipped"); }
  function flashAnswer(known) {
    if (!flashDeck || flashPos >= flashDeck.length) return;
    state.known[flashDeck[flashPos]] = known;
    save();
    if (known && Math.random() < .3) toast(pick(["Trop forte 😎", "Évidemment 💅", "Facile pour toi ✨"]));
    flashPos++;
    renderFlash();
  }
  $("#flashcard").addEventListener("click", flip);
  $("#flashYes").addEventListener("click", () => flashAnswer(true));
  $("#flashNo").addEventListener("click", () => flashAnswer(false));
  $("#flashShuffle").addEventListener("click", () => { flashDeck = shuffle(flashDeck); flashPos = 0; renderFlash(); toast("Paquet mélangé 🔀"); });

  /* ================= quiz ================= */
  let quizSel = new Set(FICHES.map((f) => f.id));
  let quizN = 20;
  let Q = null; // { list, i, score, streak, answered, errors, sourceList }

  function renderQuizChips() {
    const all = quizSel.size === FICHES.length;
    $("#quizChips").innerHTML =
      `<button class="chip ${all ? "on" : ""}" data-k="all">✨ Tout</button>` +
      FICHES.map((f) => `<button class="chip ${quizSel.has(f.id) && !all ? "on" : ""}" data-k="${f.id}">${f.emoji} ${f.num}</button>`).join("");
    $$("#quizChips .chip").forEach((c) => c.addEventListener("click", () => {
      const k = c.dataset.k;
      if (k === "all") quizSel = new Set(FICHES.map((f) => f.id));
      else {
        if (quizSel.size === FICHES.length) quizSel = new Set();
        quizSel.has(k) ? quizSel.delete(k) : quizSel.add(k);
        if (quizSel.size === 0) quizSel = new Set(FICHES.map((f) => f.id));
      }
      renderQuizChips();
    }));
  }
  renderQuizChips();
  $$("#quizCount .chip").forEach((c) => c.addEventListener("click", () => {
    $$("#quizCount .chip").forEach((x) => x.classList.remove("on"));
    c.classList.add("on");
    quizN = +c.dataset.n;
  }));

  function showQuizPane(name) {
    $("#quizSetup").hidden = name !== "setup";
    $("#quizPlay").hidden = name !== "play";
    $("#quizEnd").hidden = name !== "end";
  }

  function startQuiz(customList) {
    let list = customList || shuffle(QUIZ.filter((q) => quizSel.has(q.f))).slice(0, quizN);
    list = list.map((q) => {
      const order = shuffle(q.o.map((_, i) => i));
      // garder Vrai/Faux dans un ordre logique
      const isVF = q.o.length === 2 && q.o.includes("Vrai") && q.o.includes("Faux");
      const finalOrder = isVF ? [q.o.indexOf("Vrai"), q.o.indexOf("Faux")] : order;
      return { ...q, opts: finalOrder.map((i) => q.o[i]), good: finalOrder.indexOf(q.a), orig: q };
    });
    Q = { list, i: 0, score: 0, streak: 0, answered: false, errors: [] };
    showQuizPane("play");
    renderQuestion();
  }

  function renderQuestion() {
    const q = Q.list[Q.i];
    Q.answered = false;
    $("#quizBar").style.width = (Q.i / Q.list.length) * 100 + "%";
    $("#quizScore").textContent = `${Q.score} ✨`;
    $("#quizTag").textContent = ficheLabel(q.f);
    $("#quizNum").textContent = `Question ${Q.i + 1} / ${Q.list.length}`;
    $("#quizQ").textContent = q.q;
    $("#quizOpts").innerHTML = q.opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join("");
    $$("#quizOpts .opt").forEach((b) => b.addEventListener("click", () => answer(+b.dataset.i)));
    $("#quizFb").hidden = true;
    $("#quizCard").classList.remove("shake");
  }

  function answer(i) {
    if (Q.answered) return;
    Q.answered = true;
    const q = Q.list[Q.i];
    const ok = i === q.good;
    $$("#quizOpts .opt").forEach((b, j) => {
      b.disabled = true;
      if (j === q.good) b.classList.add("good");
      else if (j === i) b.classList.add("bad");
      else b.classList.add("dim");
    });
    const fb = $("#quizFb");
    fb.className = "quiz-feedback " + (ok ? "ok" : "ko");
    if (ok) {
      Q.score++; Q.streak++;
      $("#fbTitle").textContent = STREAK[Q.streak] || pick(GOOD);
      if (STREAK[Q.streak]) confetti(25);
    } else {
      Q.streak = 0;
      Q.errors.push({ q, chosen: i });
      $("#fbTitle").textContent = pick(BAD);
      const card = $("#quizCard");
      void card.offsetWidth; card.classList.add("shake");
    }
    $("#fbExpl").innerHTML = (ok ? "" : `Bonne réponse : <strong>${esc(q.opts[q.good])}</strong>. `) + esc(q.e);
    $("#quizScore").textContent = `${Q.score} ✨`;
    $("#quizNext").textContent = Q.i + 1 < Q.list.length ? "Suivante →" : "Voir le verdict ⚖️";
    fb.hidden = false;
    $("#quizNext").focus({ preventScroll: true });
  }

  function nextQuestion() {
    if (!Q || !Q.answered) return;
    Q.i++;
    if (Q.i >= Q.list.length) endQuiz();
    else renderQuestion();
  }
  $("#quizNext").addEventListener("click", nextQuestion);

  function endQuiz() {
    showQuizPane("end");
    $("#quizBar").style.width = "100%";
    const total = Q.list.length;
    const pct = Math.round((Q.score / total) * 100);
    const tiers = [
      [100, "👑", "Présidente du Conseil constitutionnel", "Score parfait. Aucun recours possible. Maître Moustache s'incline (et réclame des croquettes)."],
      [85, "🏛️", "Membre de droit, à vie", "Quasi parfait ! Tu pourrais siéger demain."],
      [70, "⚖️", "Sage de la rue de Montpensier", "Très solide. Encore un petit tour sur tes erreurs et c'est plié."],
      [50, "🗳️", "Députée en pleine ascension", "La moitié est acquise ! On relit les fiches concernées et on retente."],
      [30, "🪙", "Citoyenne active (elle a payé le cens)", "Ça progresse ! Un passage par les flashcards et ça va monter."],
      [0, "🌿", "Retour à l'état de nature", "Pas de panique, même Hobbes a commencé quelque part. Relis une fiche et réessaie 💖"]
    ];
    const [, emo, title, msg] = tiers.find((t) => pct >= t[0]);
    $("#resEmoji").textContent = emo;
    $("#resTitle").textContent = title;
    $("#resScore").textContent = `${Q.score} / ${total} · ${pct} %`;
    let extra = "";
    if (!state.best || pct > state.best.pct) {
      if (state.best) extra = " 🎉 Nouveau record !";
      state.best = { pct, score: Q.score, total };
      save();
    }
    $("#resMsg").textContent = msg + extra;
    if (pct >= 70) confetti(pct === 100 ? 140 : 80);
    $("#resErrors").hidden = Q.errors.length === 0;
    $("#resReview").innerHTML = Q.errors.length
      ? `<h3 style="margin:1.5rem 0 .8rem">🙈 Tes erreurs à retenir</h3>` + Q.errors.map(({ q, chosen }) => `
        <div class="card review-item">
          <span class="flash-tag" style="position:static;display:inline-block;margin-bottom:.4rem">${ficheLabel(q.f)}</span>
          <p class="q">${esc(q.q)}</p>
          <p class="bad-a">${esc(q.opts[chosen])}</p>
          <p class="good-a">✓ ${esc(q.opts[q.good])}</p>
          <p class="tiny">${esc(q.e)}</p>
        </div>`).join("")
      : "";
  }

  $("#quizStart").addEventListener("click", () => startQuiz());
  $("#quizQuit").addEventListener("click", () => { Q = null; showQuizPane("setup"); });
  $("#resRetry").addEventListener("click", () => startQuiz());
  $("#resErrors").addEventListener("click", () => startQuiz(shuffle(Q.errors.map((e) => e.q.orig))));
  $("#resSetup").addEventListener("click", () => { renderQuizChips(); showQuizPane("setup"); });

  /* ================= pense-bête ================= */
  $("#memoDist").innerHTML = DISTINCTIONS.map(([a, b]) => `<div class="dist"><b>${esc(a)}</b>${esc(b)}</div>`).join("");
  $("#memoNums").innerHTML = CHIFFRES.map(([a, b]) => `<div class="num"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("");
  $("#memoDates").innerHTML = DATES.map(([a, b]) => `<li><b>${esc(a)}</b>${esc(b)}</li>`).join("");
  $("#memoPieges").innerHTML = PIEGES.map((p) => `<li>${esc(p)}</li>`).join("");

  /* ================= clavier ================= */
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea") || e.ctrlKey || e.metaKey || e.altKey) return;
    if (!$("#view-flash").hidden && !$("#flashcard").hidden) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
      else if (e.key === "ArrowRight") flashAnswer(true);
      else if (e.key === "ArrowLeft") flashAnswer(false);
    }
    if (!$("#view-quiz").hidden && !$("#quizPlay").hidden && Q) {
      const n = parseInt(e.key, 10);
      if (!Q.answered && n >= 1 && n <= Q.list[Q.i].opts.length) answer(n - 1);
      else if (Q.answered && e.key === "Enter") { e.preventDefault(); nextQuestion(); }
    }
  });

  route();
})();

/* 一對手作 CraftDate HK — 互動邏輯
   純前端示範：預約意向只保存在 localStorage。 */

(function () {
  'use strict';

  var STORE_KEY = 'craftdate_mvp_intents';
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function money(n) {
    return 'HK$' + Number(n).toLocaleString('en-US');
  }

  function routeArt(id) {
    var shapes = {
      a: '<circle cx="250" cy="34" r="66" fill="#fff" opacity=".55"/><circle cx="60" cy="118" r="42" fill="#C4655A" opacity=".22"/><path d="M110 90q70 60 140 0" stroke="#C4655A" stroke-width="3" fill="none" opacity=".55"/>',
      b: '<circle cx="70" cy="30" r="60" fill="#fff" opacity=".5"/><rect x="215" y="70" width="90" height="90" rx="22" fill="#5F8067" opacity=".25"/><path d="M40 120h280" stroke="#5F8067" stroke-width="2" opacity=".35"/>',
      c: '<circle cx="285" cy="26" r="58" fill="#fff" opacity=".5"/><path d="M30 120l60-70 60 70z" fill="#B58A45" opacity=".22"/><circle cx="210" cy="60" r="34" fill="#B58A45" opacity=".18"/>'
    };
    return '<svg viewBox="0 0 340 132" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + shapes[id] + '</svg>';
  }

  function renderRoutes() {
    var grid = $('#routeGrid');
    if (!grid) return;
    grid.innerHTML = ROUTES.map(function (r) {
      return '' +
        '<article class="route-card">' +
          '<div class="route-art ' + r.id + '">' + routeArt(r.id) + '<span class="badge">' + esc(r.theme) + '</span></div>' +
          '<div class="route-body">' +
            '<h3>' + esc(r.name) + '</h3>' +
            '<div class="route-tags">' + r.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
            '<p>' + esc(r.blurb) + '</p>' +
            '<div class="route-facts"><span>時間 <b>' + esc(r.duration) + '</b></span><span>地點 <b>' + esc(r.area) + '</b></span><span>難度 <b>' + esc(r.level) + '</b></span></div>' +
            '<div class="route-price"><b>' + esc(r.priceNote) + '</b><span>兩人合計</span></div>' +
          '</div>' +
          '<div class="route-actions">' +
            '<button class="btn btn-ghost" type="button" data-detail="' + r.id + '">查看行程</button>' +
            '<button class="btn btn-primary" type="button" data-pick="' + r.id + '">選這條</button>' +
          '</div>' +
        '</article>';
    }).join('');

    $$('[data-detail]', grid).forEach(function (b) {
      b.addEventListener('click', function () { openModal(b.getAttribute('data-detail')); });
    });
    $$('[data-pick]', grid).forEach(function (b) {
      b.addEventListener('click', function () { pickRoute(b.getAttribute('data-pick')); });
    });
  }

  function openModal(id) {
    var r = ROUTES.filter(function (x) { return x.id === id; })[0];
    if (!r) return;
    var html = '' +
      '<div class="modal-head">' +
        '<span class="eyebrow">' + esc(r.theme) + '</span>' +
        '<h2 id="modalTitle">' + esc(r.name) + '</h2>' +
        '<p>' + esc(r.blurb) + '</p>' +
        '<div class="modal-tags">' + r.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '</div>' +
      '<div class="modal-section"><h3>當日時間軸</h3>' +
        r.timeline.map(function (t) {
          return '<div class="tl-item ' + (t.kind === 'calm' ? 'calm' : '') + '">' +
            '<div class="tl-time">' + esc(t.time) + '</div>' +
            '<div class="tl-rail"><div class="dot"></div></div>' +
            '<div class="tl-content"><b>' + esc(t.title) + '</b><p>' + esc(t.desc) + '</p></div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<div class="modal-section"><h3>預算參考（兩人）</h3><div class="budget-box">' +
        r.budget.map(function (b) { return '<div class="budget-row"><span>' + esc(b[0]) + '</span><b>' + esc(b[1]) + '</b></div>'; }).join('') +
        '<div class="budget-row" style="border-top:1px dashed var(--line);margin-top:8px;padding-top:10px"><span><b>起價</b></span><b style="color:var(--rose)">' + esc(r.priceNote) + '</b></div>' +
      '</div></div>' +
      '<p class="fineprint">' + esc(r.highlight) + ' 價錢與時段以工作室最新公布為準。</p>' +
      '<div class="modal-cta">' +
        '<button class="btn btn-primary" type="button" data-modal-pick="' + r.id + '">選這條路線</button>' +
        '<button class="btn btn-ghost" type="button" data-close>稍後再說</button>' +
      '</div>';

    $('#modalContent').innerHTML = html;
    var modal = $('#routeModal');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $$('[data-close]', modal).forEach(function (el) {
      if (!el.dataset.bound) { el.addEventListener('click', closeModal); el.dataset.bound = '1'; }
    });
    $$('[data-modal-pick]', modal).forEach(function (b) {
      b.addEventListener('click', function () { pickRoute(b.getAttribute('data-modal-pick')); closeModal(); });
    });
    $('.modal-close', modal).focus();
  }

  function closeModal() {
    var modal = $('#routeModal');
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  function pickRoute(id) {
    var sel = $('#routeSelect');
    if (sel) sel.value = id;
    updateTotal();
    var target = $('#booking');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderWorkshops() {
    var cats = ['全部'];
    WORKSHOPS.forEach(function (w) { if (cats.indexOf(w.cat) === -1) cats.push(w.cat); });
    var filters = $('#wsFilters');
    filters.innerHTML = cats.map(function (c, i) {
      return '<button class="fbtn' + (i === 0 ? ' on' : '') + '" type="button" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
    }).join('');
    $$('.fbtn', filters).forEach(function (b) {
      b.addEventListener('click', function () {
        $$('.fbtn', filters).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        paintWorkshops(b.getAttribute('data-cat'));
      });
    });
    paintWorkshops('全部');
  }

  function paintWorkshops(cat) {
    var grid = $('#wsGrid');
    var list = WORKSHOPS.filter(function (w) { return cat === '全部' || w.cat === cat; });
    grid.innerHTML = list.map(function (w) {
      return '<article class="ws">' +
        '<h3>' + esc(w.name) + '</h3>' +
        '<div class="ws-meta"><span class="tag">' + esc(w.cat) + '</span><span class="tag">' + esc(w.area) + '</span></div>' +
        '<p>' + esc(w.desc) + '</p>' +
        '<div class="ws-foot"><b>' + esc(w.price) + '</b><span>' + '★'.repeat(w.stars) + '</span></div>' +
      '</article>';
    }).join('');
  }

  function renderForm() {
    var sel = $('#routeSelect');
    sel.innerHTML = '<option value="">請選擇路線</option>' + ROUTES.map(function (r) {
      return '<option value="' + r.id + '">' + esc(r.name) + ' — ' + esc(r.theme) + '</option>';
    }).join('');

    var list = $('#addonList');
    list.innerHTML = ADDONS.map(function (a) {
      return '<label class="addon"><input type="checkbox" value="' + a.id + '">' +
        '<span><b>' + esc(a.name) + ' +' + money(a.price) + '</b><span>' + esc(a.desc) + '</span></span></label>';
    }).join('');

    var today = new Date();
    var local = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    $('#dateInput').min = local;

    sel.addEventListener('change', updateTotal);
    $$('input[type=checkbox]', list).forEach(function (c) { c.addEventListener('change', updateTotal); });
    updateTotal();
  }

  function updateTotal() {
    var id = $('#routeSelect').value;
    var route = ROUTES.filter(function (r) { return r.id === id; })[0];
    var sum = route ? route.basePrice : 0;
    $$('#addonList input:checked').forEach(function (c) {
      var a = ADDONS.filter(function (x) { return x.id === c.value; })[0];
      if (a) sum += a.price;
    });
    $('#totalPrice').textContent = money(sum);
    $('#priceHint').textContent = route
      ? '以「' + route.name + '」起價計算，實際以工作室與餐廳確認為準。'
      : '先選一條路線，加上加購項目後會即時計算。';
  }

  function getIntents() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '[]'); }
    catch (e) { return []; }
  }

  function updateCount() {
    var el = $('#localCount');
    if (el) el.textContent = getIntents().length;
  }

  function submitForm(e) {
    e.preventDefault();
    var err = $('#formError');
    var routeId = $('#routeSelect').value;
    var date = $('#dateInput').value;
    var name = $('#nameInput').value.trim();
    var contact = $('#contactInput').value.trim();

    if (!routeId || !date || !name || !contact) {
      err.textContent = '請填寫路線、日期、稱呼與聯絡方式。';
      err.hidden = false;
      return;
    }
    err.hidden = true;

    var route = ROUTES.filter(function (r) { return r.id === routeId; })[0];
    var chosen = $$('#addonList input:checked').map(function (c) { return c.value; });
    var addonNames = ADDONS.filter(function (a) { return chosen.indexOf(a.id) !== -1; }).map(function (a) { return a.name; });
    var total = route.basePrice + ADDONS.reduce(function (s, a) { return s + (chosen.indexOf(a.id) !== -1 ? a.price : 0); }, 0);

    var intent = {
      ref: 'CD-' + Date.now().toString(36).toUpperCase().slice(-6),
      route: route.name,
      date: date,
      time: $('#timeInput').value,
      name: name,
      contact: contact,
      note: $('#noteInput').value.trim(),
      addons: addonNames,
      total: total,
      createdAt: new Date().toISOString()
    };

    var intents = getIntents();
    intents.push(intent);
    try { localStorage.setItem(STORE_KEY, JSON.stringify(intents)); } catch (ignore) {}

    $('#successRef').textContent = intent.ref;
    $('#successSummary').innerHTML =
      '<div><span>路線</span><b>' + esc(intent.route) + '</b></div>' +
      '<div><span>日期時間</span><b>' + esc(intent.date) + ' ' + esc(intent.time) + '</b></div>' +
      '<div><span>加購</span><b>' + esc(intent.addons.length ? intent.addons.join('、') : '無') + '</b></div>' +
      '<div><span>預計總價</span><b>' + money(intent.total) + '</b></div>';

    $('#bookingForm').hidden = true;
    $('#successBox').hidden = false;
    updateCount();
  }

  function init() {
    renderRoutes();
    renderWorkshops();
    renderForm();
    updateCount();

    var modal = $('#routeModal');
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    $('#bookingForm').addEventListener('submit', submitForm);
    $('#resetBtn').addEventListener('click', function () {
      $('#bookingForm').reset();
      $('#bookingForm').hidden = false;
      $('#successBox').hidden = true;
      updateTotal();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

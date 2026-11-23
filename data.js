/* 一對手作 CraftDate HK — 示範資料
   所有價錢均為港幣，屬公開資料整理的參考值。 */

const ROUTES = [
  {
    id: 'a',
    name: '中環對戒約會',
    theme: '經典儀式感',
    area: '中環 · 上環',
    duration: '約 6 小時',
    level: '容易',
    basePrice: 3080,
    priceNote: 'HK$3,080–4,180 / 對',
    tags: ['銀戒指', '古董街', '維港黃昏'],
    blurb: '在 PMQ 親手鎚打一對銀戒，牽手走過荷李活道，黃昏到中環海濱看維港。最適合紀念日與「認真一點」的約會。',
    highlight: '核心作品：一對可刻字銀戒指，即日帶走。',
    timeline: [
      { time: '10:30', title: 'PMQ 元創方報到', desc: '早 15 分鐘到，逛 H402 展廳與設計小店，挑選喜歡的紋理與刻字靈感。', kind: 'calm' },
      { time: '11:00', title: 'Obellery 銀戒指製作班', desc: '約 1.5–2 小時，由切割、退火、焊接到打磨拋光，親手做出一對戒指。', kind: 'craft' },
      { time: '13:00', title: '荷李活道古董街散步', desc: '帶著新手作去曬太陽，沿途古董店、畫廊與老店都很好拍。', kind: 'calm' },
      { time: '13:45', title: 'SOHO 午餐／大館打卡', desc: '半山扶梯沿線餐廳選擇多；想節省預算可到大館公共空間坐坐。', kind: 'calm' },
      { time: '16:30', title: '中環海濱 · 摩天輪或遊船', desc: '摩天輪約 HK$20／位；想升級可選張保仔維港遊船約 HK$270／位。', kind: 'craft' },
      { time: '19:00', title: '中環／上環晚餐收尾', desc: '建議預訂靠窗或露天座位，把戒指戴上再拍一張合照。', kind: 'calm' }
    ],
    budget: [
      ['Obellery 銀戒指班 ×2', 'HK$1,840'],
      ['午餐＋咖啡', 'HK$400–600'],
      ['摩天輪／遊船', 'HK$40–540'],
      ['晚餐', 'HK$800–1,200']
    ]
  },
  {
    id: 'b',
    name: '東九龍手作雙拼',
    theme: '高性價比',
    area: '新蒲崗 · 觀塘',
    duration: '約 7 小時',
    level: '容易',
    basePrice: 1900,
    priceNote: 'HK$1,900–2,600 / 對',
    tags: ['拉坯', '馬賽克燭台', '西九日落'],
    blurb: '上午在工廈拉坯，下午到觀塘做馬賽克燭台，黃昏在西九海濱看日落。兩場工作坊都常有買一送一。',
    highlight: '核心作品：手拉坯器皿＋土耳其風馬賽克燭台。',
    timeline: [
      { time: '10:00', title: 'K Studio 水墨紋拉坯', desc: '約 1–1.5 小時，平台常有買一送一。兩人各自拉一件器皿。', kind: 'craft' },
      { time: '11:45', title: '新蒲崗／彩虹一帶午餐', desc: '工廈與街坊小店林立，人均 HK$100–150 就能吃得很滿足。', kind: 'calm' },
      { time: '13:30', title: '觀塘 Mosaic Art Studio', desc: '土耳其風馬賽克燈／燭台製作，約 2–3 小時，晚上就能用。', kind: 'craft' },
      { time: '16:30', title: '觀塘工廈咖啡小店', desc: '預留一小時休息，順便拍拍作品。想換口味可改做 Tufting。', kind: 'calm' },
      { time: '17:45', title: '西九文化區海濱', desc: '從觀塘搭地鐵到九龍站，沿海濱看日落；M+ 外牆也是打卡位。', kind: 'calm' },
      { time: '19:30', title: '圓方／西九晚餐', desc: '以燭台作餐桌主角，為這一日畫上句點。', kind: 'calm' }
    ],
    budget: [
      ['K Studio 拉坯（買一送一）', '約 HK$650'],
      ['Mosaic 燭台（買一送一）', 'HK$600–900'],
      ['午餐＋咖啡', 'HK$300–450'],
      ['晚餐＋交通', 'HK$350–600']
    ]
  },
  {
    id: 'c',
    name: '藝村慢活雙紀念',
    theme: '深度文青',
    area: '石硤尾 · 深水埗 · 荔枝角',
    duration: '約 8 小時',
    level: '中等',
    basePrice: 3160,
    priceNote: 'HK$3,160–4,460 / 對',
    tags: ['玻璃印畫', '大南街', '刻字銀戒'],
    blurb: '把合照燒成一件玻璃藝術品，走進深水埗的咖啡與布料小店，再到荔枝角親手做一對可刻字銀戒。',
    highlight: '核心作品：玻璃印畫＋刻字銀戒，雙重紀念。',
    timeline: [
      { time: '10:00', title: 'JCCAC 賽馬會創意藝術中心', desc: '先逛藝廊與公共空間，舊廠廈本身就是很好的拍攝場景。', kind: 'calm' },
      { time: '10:45', title: 'Ruby Woo Glass 玻璃印畫', desc: '自選一張合照，用玻璃粉與色片熔合成玻璃畫，2 小時完成。', kind: 'craft' },
      { time: '13:00', title: '深水埗大南街散策＋午餐', desc: '獨立書店、布料店、懷舊咖啡廳；想吃地道可試豆腐花。', kind: 'calm' },
      { time: '15:00', title: 'Silver Workshop by Chaz', desc: '親手退火、打磨、拋光，最後刻上兩人的名字或日期。', kind: 'craft' },
      { time: '17:30', title: '西九文化區海濱日落', desc: '帶著剛做好的戒指散步，黃昏光線最適合拍合照。', kind: 'calm' },
      { time: '19:30', title: '圓方／西九晚餐', desc: '以一套「玻璃作品＋對戒」作結。', kind: 'calm' }
    ],
    budget: [
      ['玻璃印畫工作坊 ×2', 'HK$1,160'],
      ['銀戒／手鐲 ×2', 'HK$1,000–1,800'],
      ['午餐＋咖啡', 'HK$400–600'],
      ['晚餐＋交通', 'HK$600–900']
    ]
  }
];

const WORKSHOPS = [
  { name: 'Obellery 手工首飾工作坊', cat: '金工銀飾', area: '中環 PMQ', price: 'HK$920 起／位', stars: 5, desc: '專業珠寶設計師指導，親手鎚打銀戒指、手鐲，完成品即日帶走。' },
  { name: 'Silver Workshop by Chaz', cat: '金工銀飾', area: '荔枝角', price: 'HK$500–900／位', stars: 5, desc: '退火、打磨、拋光全程親手做，完成後可刻上專屬文字。' },
  { name: 'The Handcrafter Workshop', cat: '金工銀飾', area: '葵興', price: 'HK$500 起／位', stars: 4, desc: '自選吊墜、戒指、耳環或手鐲，適合一人做一件再交換。' },
  { name: 'Dirty Hand Studio 銅手鐲', cat: '金工銀飾', area: '葵涌', price: '二人同行價', stars: 4, desc: '由鍛打到打磨做出獨一無二的銅手鐲。' },
  { name: 'K Studio 陶藝工作坊', cat: '陶藝拉坯', area: '新蒲崗', price: 'HK$325 起／位', stars: 5, desc: '水墨紋拉坯、浮雕裝飾等多款體驗，平台常有買一送一。' },
  { name: 'CC ART STUDIO', cat: '陶藝拉坯', area: '太子', price: '買一送一', stars: 4, desc: '雲石紋拉坯、陶瓷御守、耳環與茶具，地鐵站 1 分鐘。' },
  { name: '無用生活 Useless Studio', cat: '陶藝拉坯', area: '新蒲崗', price: 'HK$580 起／位', stars: 4, desc: '設拉坯課室，提供恆常班與單堂體驗，氛圍安靜。' },
  { name: '木華陶冶 陶瓷拉坯', cat: '陶藝拉坯', area: '北角', price: 'HK$280–600／位', stars: 4, desc: '由拉坯、修坯到上釉全程參與，可製作馬克杯與花瓶。' },
  { name: 'GET TOGETHER 簇絨地氈', cat: '簇絨馬賽克', area: '觀塘', price: '買一送一', stars: 5, desc: '無限時 Tufting，自由設計圖案，慢慢玩夠一日。' },
  { name: 'Mosaic Art Studio 燭台', cat: '簇絨馬賽克', area: '觀塘', price: '買一送一', stars: 5, desc: '土耳其風馬賽克燈及燭台，晚上點起成品氣氛十足。' },
  { name: 'Best Day Ever Tufting', cat: '簇絨馬賽克', area: '新蒲崗', price: 'HK$650 起／位', stars: 4, desc: '地氈、掛氈、枱墊、地氈鏡等方案，零經驗也可。' },
  { name: 'Perfume Talk 香水工作坊', cat: '香氛蠟燭', area: '尖沙咀', price: 'HK$400–700／位', stars: 4, desc: '50ml 專屬香水，1–1.5 小時調配送給另一半的氣味。' },
  { name: 'LCM Leather Workshop', cat: '皮革', area: '銅鑼灣', price: 'HK$385 起／位', stars: 4, desc: '皮革銀包、卡套、皮玫瑰等小物，完成品即日帶走。' },
  { name: 'Bakebe 自助烘焙', cat: '烘焙', area: '銅鑼灣', price: 'HK$400 起／位', stars: 4, desc: '100 多款甜品蛋糕，材料全包，完成後有精美包裝。' },
  { name: 'Home.焙小日子', cat: '烘焙', area: '旺角', price: 'HK$200 起／位', stars: 3, desc: '自助烘焙店，曲奇、蛋糕、班戟款式齊全。' },
  { name: 'Ruby Woo Glass 玻璃印畫', cat: '玻璃工藝', area: '石硤尾 JCCAC', price: 'HK$580／位', stars: 5, desc: '自選照片創作玻璃畫，運用玻璃粉與色片熔合。' }
];

const ADDONS = [
  { id: 'photo', name: '30 分鐘跟拍', price: 800, desc: '在工作坊與打卡位拍一組合照' },
  { id: 'flower', name: '季節花束', price: 300, desc: '約會當天送到工作坊' },
  { id: 'cruise', name: '維港黃昏遊船', price: 540, desc: '張保仔 aqualuna 二人票' },
  { id: 'cake', name: '驚喜蛋糕', price: 380, desc: '晚餐前送到餐廳' }
];

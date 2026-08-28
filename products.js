const CATEGORIES=["All","Herbs","Medicines","Supplements","Oils"];

/* ============================================================
   🧴 PRODUCT VARIANTS — EACH PRODUCT HAS UNIQUE MRP & SALE PRICE
   ============================================================ */
const PRODUCTS = [
  {id:"p1",name:"Ashwagandha Powder", tag:"Bestseller", cat:"Herbs", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/17ef0d789-1d3f-4ad9-8f06-4c080ae3fa54.png", desc:"Ancient adaptogenic herb for stress relief, vitality & strength. 100% pure root powder.",
    variants:[
      {label:"50g", mrp:499, price:119},
      {label:"100g", mrp:799, price:229}
    ]},
  {id:"p2",name:"Tulsi Leaves (Holy Basil)", tag:"New", cat:"Herbs", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/1b5772cb3-09fa-43be-8c45-bf0b005c5817.png", desc:"Sacred holy basil â boosts immunity, respiratory health & natural healing.",
    variants:[
      {label:"50g", mrp:399, price:99},
      {label:"100g", mrp:649, price:199}
    ]},
  {id:"p3",name:"Amba Haldi ( Turmeric )", tag:"Pure", cat:"Herbs", wt:0.12, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/16cab38b2-259f-4ca6-95c9-aca7999262d9.png", desc:"High-curcumin turmeric in easy-to-take. Anti-inflammatory & antioxidant.",
    variants:[
      {label:"50g", mrp:100, price:50},
      {label:"100g", mrp:200, price:90}
    ]},
  {id:"p4",name:"Triphala Churna", tag:"Ayurvedic", cat:"Herbs", wt:0.15, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/1c4ea4fcf-b6a6-4336-b841-a7ad65acabe5.png", desc:"Three-fruit ayurvedic formula for digestion, detox & healthy bowel movement.",
    variants:[
      {label:"100g", mrp:349, price:199},
      {label:"200g", mrp:599, price:349}
    ]},
  {id:"p5",name:"Neem Oil", tag:"Pure", cat:"Oils", wt:0.12, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/115705c2a-84ce-4ae3-b498-c699264127f3.png", desc:"Cold-pressed pure neem oil for skin, hair & natural pest control.",
    variants:[
      {label:"50ml", mrp:349, price:199},
      {label:"100ml", mrp:599, price:349}
    ]},
  {id:"p6",name:"Brahmi Tablets", tag:"Popular", cat:"Medicines", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/15c7089be-5bb9-4878-a6bf-b2e409ee5014.png", desc:"Memory enhancer & brain tonic. Improves focus, calmness & mental clarity.",
    variants:[
      {label:"SOLID OUT", mrp:0, price:0}
    ]},
  {id:"p7",name:"Giloy Juice", tag:"Immunity", cat:"Supplements", wt:0.25, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/18a9c272f-44f3-4e80-be60-b79eb7a4f96c.png", desc:"Powerful immunity booster. Purifies blood & supports fever recovery.",
    variants:[
      {label:"100g", mrp:200, price:99},
      {label:"200ml", mrp:400, price:199},
      {label:"500ml", mrp:0, price:399}
    ]},
  {id:"p8",name:"Amla Powder", tag:"Bestseller", cat:"Herbs", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/117ba196d-cfea-4d17-a35c-9fa63a8689ba.png", desc:"Richest natural source of Vitamin C. Hair, skin & immunity superfood.",
    variants:[
      {label:"100g", mrp:299, price:149},
      {label:"250g", mrp:599, price:399}
    ]},
  {id:"p9",name:"Shilajit Resin", tag:"Premium", cat:"Supplements", wt:0.05, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/18d849303-73ae-48f7-b893-9709faf131be.png", desc:"Pure Himalayan mineral pitch. Boosts energy, stamina & vitality naturally.",
    variants:[
      {label:"10g", mrp:1299, price:400},
      {label:"20g", mrp:2299, price:800}
    ]},
  {id:"p10",name:"Moringa Powder", tag:"New", cat:"Herbs", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/13953a736-b5fd-4098-9373-038693bf23f3.png", desc:"Nutrient-dense miracle tree powder. Rich in iron, calcium & antioxidants.",
    variants:[
      {label:"100g", mrp:449, price:279},
      {label:"250g", mrp:899, price:549},
      {label:"500g", mrp:1599, price:949}
    ]},
  {id:"p11",name:"Aloe Vera Gel", tag:"Pure", cat:"Oils", wt:0.2, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/16c121521-d31d-4656-a392-ee236daaaee2.png", desc:"100% pure aloe vera gel for skin hydration, healing & digestive health.",
    variants:[
      {label:"100ml", mrp:299, price:179},
      {label:"200ml", mrp:499, price:299},
      {label:"500ml", mrp:999, price:599}
    ]},
  {id:"p12",name:"Fenugreek Seeds", tag:"Classic", cat:"Herbs", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/14d5a10fb-5e5d-4626-8653-58c4144ad350.png", desc:"Traditional remedy for blood sugar control, digestion & lactation support.",
    variants:[
      {label:"100g", mrp:199, price:99},
      {label:"250g", mrp:399, price:199},
      {label:"500g", mrp:699, price:300}
    ]},
  {id:"p13",name:"Herbal Cough Syrup", tag:"New", cat:"Medicines", wt:0.25, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/1306fa5a0-5397-4a17-9566-01b0b7e0094f.png", desc:"Honey-ginger herbal syrup for cough, cold & sore throat relief.",
    variants:[
      {label:"50ml", mrp:170, price:99},
      {label:"100ml", mrp:349, price:199}
    ]},
  {id:"p14",name:"Digestive Tablets", tag:"Bestseller", cat:"Medicines", wt:0.08, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/1e78ad2cc-8184-4eac-a511-563b986b58c8.png", desc:"Fennel-mint blend for bloating, gas & complete digestive comfort.",
    variants:[
      {label:"30 Tablets", mrp:299, price:179},
      {label:"60 Tablets", mrp:549, price:329}
    ]},
  {id:"p15",name:"Immunity Booster", tag:"Bestseller", cat:"Supplements", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/10f86a849-9ced-43dd-9cfa-f43eb0c0409d.png", desc:"Echinacea-ginger capsules for year-round immune system support.",
    variants:[
      {label:"30 Capsules", mrp:599, price:379},
      {label:"60 Capsules", mrp:1049, price:649}
    ]},
  {id:"p16",name:"Joint Pain Relief Oil", tag:"Therapeutic", cat:"Oils", wt:0.12, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/179a872d3-baab-4ac1-81a3-5a3984d06728.png", desc:"Ayurvedic massage oil with 21 herbs for arthritis & joint pain relief.",
    variants:[
      {label:"50ml", mrp:449, price:279},
      {label:"100ml", mrp:749, price:449}
    ]},
  {id:"p17",name:"Hair Growth Oil", tag:"New", cat:"Oils", wt:0.12, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/17fa5f45b-c8d6-4cec-8710-cbd84add542f.png", desc:"Amla-bhringraj-hibiscus blend for hair growth, thickness & shine.",
    variants:[
      {label:"100ml", mrp:499, price:299}
    ]},
  {id:"p18",name:"Diabetes Care Powder", tag:"Bestseller", cat:"Medicines", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/1af060ea5-7912-4423-9520-5b2ce78a0341.png", desc:"Fenugreek-bitter gourd blend to support healthy blood sugar levels.",
    variants:[
      {label:"100g", mrp:549, price:329},
      {label:"250g", mrp:1099, price:649}
    ]},
  {id:"p19",name:"Chyawanprash", tag:"Bestseller", cat:"Supplements", wt:0.5, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/107b8d255-76c4-4d5c-b4ff-ad48a5a61dd1.png", desc:"Traditional 40-herb immunity jam with amla, honey & saffron.",
    variants:[
      {label:"250g", mrp:449, price:279},
      {label:"500g", mrp:799, price:479}
    ]},
  {id:"p20",name:"Multivitamin Tablets", tag:"New", cat:"Supplements", wt:0.1, img:"https://image.qwenlm.ai/public_source/76bdda63-5849-4756-a67f-7eac5c562bcb/145b483b6-e2f2-4a95-9178-56f0faf8371b.png", desc:"Complete daily nutrition from natural sources. Energy & vitality support.",
    variants:[
      {label:"30 Tablets", mrp:499, price:299},
      {label:"60 Tablets", mrp:899, price:549}
    ]},
  {id:"p21",name:"Su-Herb", tag:"Bestseller", cat:"Medicines", wt:0.07, img:"https://lh3.googleusercontent.com/d/1GmGFZ0XpeBzI3GJKZvX8-pMmafiOPB9P=s500", desc:"Su-Herb a versatile dermatological preparation used to treat various skin conditions including hyperkeratotic lesions (thickened skin), minor wounds, acne, and bacterial infections.",
    variants:[
      {label:"75g", mrp:249, price:119}
    ]},
  {id:"p22",name:"Velvet Root", tag:"Bestseller", cat:"Supplements", wt:0, img:"https://lh3.googleusercontent.com/d/104KLO1GjXmnz8OlyPeaz9J91Hd7G1NoW=s600", desc:"These five herbs are cornerstone botanical remedies in Traditional Ayurvedic medicine, often combined in revitalizing rasayana formulations to boost vitality, reduce stress, and improve physical performance.",
    variants:[
      {label:"100g", mrp:1399, price:899}
    ]},
  {id:"p23",name:"Endura Root v1", tag:"New", cat:"Medicines", wt:0, img:"https://lh3.googleusercontent.com/d/1jx_F6goEBd5lj7ihuVhsX-gSq3t8NuuM=s600", desc:"Herbal sexual performance supplements are natural dietary formulas designed to enhance libido, stamina, energy, and blood flow using traditional botanicals.",
    variants:[
      {label:"100g", mrp:1999, price:999}
    ]},
  {id:"p24",name:"BulkVeda Powder Formula 1", tag:"Premium", cat:"Herbs", wt:0, img:"https://lh3.googleusercontent.com/d/1CHc7vsoIP-TU-ebJjFi-suq0FksNItmc=s500", desc:"cornerstone botanical remedies in Traditional Ayurvedic medicine, often combined in revitalizing rasayana formulations to boost vitality, reduce stress, and improve physical performance.",
    variants:[
      {label:"100g", mrp:999, price:699}
    ]},
  {id:"p25",name:"NidraShakti Powder", tag:"Premium", cat:"Herbs", wt:0, img:"https://lh3.googleusercontent.com/d/1ke9WpucAlh6LYF2R78JnvqUM_fqo_-yZ=s500", desc:"100% herbal formulation designed to promote peaceful, restorative sleep and overall relaxation. Formulated to soothe the mind and body, it helps reduce stress and anxiety while supporting brain function, memory, focus, and mental clarity.",
    variants:[
      {label:"100g", mrp:899, price:499}
    ]},
  {id:"p26",name:"FungoNeem", tag:"Bestseller", cat:"Medicines", wt:0, img:"https://lh3.googleusercontent.com/d/1YNL72yF00ywCKj8s4dkwC4G15KQT65xv=s500", desc:"Fungoneem Herbal Anti-Fungal Cream is a natural formulation designed to provide soothing relief from skin irritation and fungal conditions. It targets symptoms such as itching, burning sensations, redness, and red patches to restore healthy-looking skin.",
    variants:[
      {label:"75g", mrp:200, price:99}
    ]}
];

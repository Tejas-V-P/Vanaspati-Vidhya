// data/plants.js — All 10 medicinal plant data objects
// Loaded before React components so PLANTS_DATA is globally available

export const PLANTS_DATA = [
  {
    id: "tulsi",
    name: "Tulsi",
    subtitle: "Holy Basil — तुलसी — Queen of Herbs",
    latin: "Ocimum tenuiflorum",
    emoji: "🌿",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tulsi_in_pot.jpg/640px-Tulsi_in_pot.jpg",
    bg: "bg-tulsi",
    badge: "Sacred Herb",
    badgeClass: "badge-gold",
    category: ["immunity", "skin"],
    desc: "Revered as 'the Mother Medicine of Nature,' Tulsi is worshipped in every Hindu household and is one of Ayurveda's most potent adaptogens with 3,000 years of documented use.",
    tabs: {
      trad: [
        "Consumed as <strong>kadha</strong> (herbal decoction) for cold, cough and fever relief",
        "Used as a <strong>Rasayana</strong> (rejuvenator) for longevity in Charaka Samhita",
        "Leaves chewed daily to purify blood and improve digestion",
        "Applied topically to treat ringworm, insect bites and skin infections",
        "Grown in every Indian home — believed to purify air and ward off disease"
      ],
      benefits: [
        "<strong>Adaptogen</strong> — reduces stress hormones, cortisol and anxiety levels",
        "Powerful antimicrobial active against bacteria, viruses and fungi",
        "Supports respiratory health — relieves asthma and bronchitis symptoms",
        "Helps regulate blood sugar levels in type 2 diabetes patients",
        "Anti-inflammatory — comparable to aspirin and ibuprofen in several studies"
      ],
      science: [
        "Key compounds: <strong>Eugenol, Rosmarinic acid, Ursolic acid, Linalool</strong>",
        "Eugenol inhibits COX-2 enzyme — same mechanism as anti-inflammatory drugs",
        "Clinical trials show 25% reduction in fasting blood glucose (FBG)",
        "Contains ~1% volatile oil with proven broad-spectrum antimicrobial activity",
        "Rich in Vitamins C, A, calcium, iron, zinc — essential micronutrients"
      ]
    }
  },
  {
    id: "neem",
    name: "Neem",
    subtitle: "Sarva Roga Nivarini — नीम — Village Pharmacy",
    latin: "Azadirachta indica",
    emoji: "🌳",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Neem_Flowers_%26_Leaves.jpg/640px-Neem_Flowers_%26_Leaves.jpg",
    bg: "bg-neem",
    badge: "Village Pharmacy",
    badgeClass: "badge-green",
    category: ["skin", "immunity"],
    desc: "Every part of the Neem tree — leaf, bark, seed, oil — has medicinal value. Called 'Sarva Roga Nivarini' (cure of all ailments), it has been India's natural pharmacy for 4,000+ years.",
    tabs: {
      trad: [
        "Neem twigs used as <strong>datun</strong> — natural toothbrushes for oral hygiene",
        "Leaves added to bathing water to treat chickenpox and skin diseases",
        "Paste applied to wounds, burns, ulcers to prevent and treat infection",
        "Neem oil used in lamps during Diwali — acts as natural mosquito repellent",
        "Flowers consumed during Ugadi festival — bitter-sweet symbolism of life"
      ],
      benefits: [
        "Broad-spectrum <strong>antibacterial</strong> — active against 14+ bacteria strains",
        "Natural antifungal — effective against Candida and dermatophytes",
        "Treats severe acne, eczema, psoriasis and chronic dandruff",
        "WHO-approved natural insecticide — used in organic farming globally",
        "Anti-malarial and anti-viral properties documented in clinical studies"
      ],
      science: [
        "Key compounds: <strong>Azadirachtin, Nimbin, Nimbidin, Nimbidol, Gedunin</strong>",
        "Azadirachtin disrupts insect juvenile hormone — proven natural pesticide",
        "Nimbin shows anti-inflammatory activity comparable to phenylbutazone",
        "Gedunin exhibits significant antimalarial activity in clinical research",
        "Used in 300+ commercial products — from toothpaste to biopesticides globally"
      ]
    }
  },
  {
    id: "turmeric",
    name: "Turmeric",
    subtitle: "Haldi — हल्दी — The Golden Healer",
    latin: "Curcuma longa",
    emoji: "🌾",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Curcuma_longa_roots.jpg/640px-Curcuma_longa_roots.jpg",
    bg: "bg-turmeric",
    badge: "Golden Spice",
    badgeClass: "badge-amber",
    category: ["immunity", "digestive"],
    desc: "Called 'Indian Saffron,' Turmeric's curcumin is among the world's most researched natural compounds — with over 10,000 peer-reviewed publications validating its therapeutic properties.",
    tabs: {
      trad: [
        "<strong>Haldi ceremony</strong> — brightening paste applied before Hindu weddings",
        "Haldi doodh (golden milk) consumed for colds, injuries and inflammation",
        "Applied directly to cuts, burns and wounds as a natural antiseptic",
        "Ayurvedic treatment for liver disorders and digestive complaints",
        "Used in kumkum (tilak) — sacred powder applied on forehead during puja"
      ],
      benefits: [
        "Most potent natural <strong>anti-inflammatory</strong> — rivals some pharmaceutical drugs",
        "Powerful antioxidant — neutralises free radicals directly and indirectly",
        "Increases BDNF (brain neurotrophic factor) — may improve memory and mood",
        "Reduces symptoms of arthritis — stiffness, pain and joint swelling",
        "Supports liver function and bile production for efficient fat digestion"
      ],
      science: [
        "Active compound: <strong>Curcumin (2–5% dry weight)</strong> + demethoxycurcumin",
        "Inhibits <strong>NF-κB pathway</strong> — master regulator of inflammatory gene expression",
        "Bioavailability enhanced <strong>2000%</strong> by piperine (black pepper)",
        "Phase II cancer prevention clinical trials ongoing in 17 countries",
        "10,000+ PubMed studies — one of most-researched natural compounds globally"
      ]
    }
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    subtitle: "Indian Ginseng — अश्वगंधा — Strength of Horse",
    latin: "Withania somnifera",
    emoji: "🌸",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Withania_somnifera_-_Koehler%E2%80%93s_Medizinal-Pflanzen-283.jpg/480px-Withania_somnifera_-_Koehler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    bg: "bg-ashwa",
    badge: "Adaptogen",
    badgeClass: "badge-violet",
    category: ["stress", "immunity"],
    desc: "The premier Ayurvedic adaptogen — used for 3,000 years to combat stress, improve vitality, enhance cognitive function and balance the endocrine system for whole-body resilience.",
    tabs: {
      trad: [
        "Root powder taken with warm milk and honey for strength and stamina",
        "Used in <strong>Rasayana therapy</strong> — Ayurvedic rejuvenation protocol",
        "Prescribed for insomnia, anxiety and nervous exhaustion",
        "Traditional men's tonic for reproductive health and fertility",
        "Children given small doses for healthy brain and bone development"
      ],
      benefits: [
        "Significantly reduces <strong>cortisol</strong> — primary stress hormone by 27.9%",
        "Improves sleep quality, onset time and deep sleep duration",
        "Increases muscle strength, power output and exercise recovery",
        "Supports thyroid function in sub-clinical hypothyroidism",
        "Enhances memory, focus and reaction time in clinical studies"
      ],
      science: [
        "Key bioactives: <strong>Withanolides, Alkaloids (somnine), Saponins, Sitoindosides</strong>",
        "Withanolides modulate <strong>HPA axis</strong> — hypothalamic-pituitary-adrenal stress axis",
        "RCTs show <strong>27.9% reduction</strong> in serum cortisol levels vs placebo",
        "Neuroprotective via acetylcholinesterase inhibition — Alzheimer's research target",
        "GABAergic activity confirmed — 'somnifera' = sleep-inducing in Latin"
      ]
    }
  },
  {
    id: "aloe",
    name: "Aloe Vera",
    subtitle: "Ghritkumari — घृतकुमारी — Plant of Immortality",
    latin: "Aloe barbadensis miller",
    emoji: "🪴",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/640px-Aloe_vera_flower_inset.png",
    bg: "bg-aloe",
    badge: "Soothing",
    badgeClass: "badge-teal",
    category: ["skin", "digestive"],
    desc: "Ancient Egyptians called it 'the plant of immortality.' In India, Ghritkumari means 'young girl' — symbolising its legendary rejuvenating power for skin, digestion and immunity.",
    tabs: {
      trad: [
        "Fresh gel applied directly to burns, sunburns, cuts and abrasions",
        "Juice consumed for constipation, IBS and digestive system complaints",
        "Used in Siddha medicine for liver, spleen and kidney disorders",
        "Mixed with turmeric powder for natural anti-acne face treatments",
        "Used in Unani medicine as <strong>Musabbar</strong> for menstrual regulation"
      ],
      benefits: [
        "Accelerates <strong>wound and burn healing</strong> — reduces healing time by 9 days",
        "Relieves constipation via anthraquinone laxative compounds",
        "Moisturises skin, reduces UV damage and treats eczema effectively",
        "Lowers fasting blood sugar in type 2 diabetes clinical trials",
        "Anti-plaque — as effective as chlorhexidine mouthwash in dental studies"
      ],
      science: [
        "Key compounds: <strong>Acemannan, Anthraquinones, Glucomannans, Phytosterols</strong>",
        "Acemannan activates macrophages — stimulates innate immune response",
        "Anthraquinones (aloin, barbaloin) exhibit antiviral and antibacterial activity",
        "Phytosterols shown to lower LDL cholesterol and total triglycerides",
        "Contains 75 active compounds including Vitamins B1, B2, B6, C, E and folic acid"
      ]
    }
  },
  {
    id: "amla",
    name: "Amla",
    subtitle: "Indian Gooseberry — आँवला — Amalaki",
    latin: "Phyllanthus emblica",
    emoji: "🫐",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Phyllanthus_emblica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg/480px-Phyllanthus_emblica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
    bg: "bg-amla",
    badge: "Vitamin C Rich",
    badgeClass: "badge-olive",
    category: ["immunity", "digestive"],
    desc: "One berry of Amla contains as much Vitamin C as 20 oranges. It is the primary ingredient in Chyawanprash — India's most famous Ayurvedic immunity formulation, used for 2,500+ years.",
    tabs: {
      trad: [
        "Core ingredient in <strong>Chyawanprash</strong> — the classic Ayurvedic immunity formulation",
        "Constitutes 1/3 of <strong>Triphala</strong> — the great digestive rejuvenator",
        "Amla oil massaged into scalp for hair growth and prevention of greying",
        "Pickled amla (achar) consumed to improve digestion and appetite daily",
        "Sacred in Hindu tradition — bathing in amla juice during Kartik month"
      ],
      benefits: [
        "Highest natural <strong>Vitamin C content</strong> — 600–900 mg per 100g of fruit",
        "Powerful antioxidant — reduces oxidative stress markers by up to 45%",
        "Promotes hair growth, reduces hair fall and delays premature greying",
        "Lowers LDL cholesterol and protects against cardiovascular disease",
        "Anti-aging — activates cellular repair and collagen synthesis pathways"
      ],
      science: [
        "Key compounds: <strong>Emblicanin A&B, Gallic acid, Ellagic acid, Quercetin</strong>",
        "Emblicanins are superoxide radical scavengers — unique and exclusive to Amla",
        "Vitamin C stable due to tannin-protein complexes — uniquely survives cooking",
        "Inhibits ACE enzyme — cardioprotective effects confirmed in clinical RCTs",
        "Gallic acid induces apoptosis in cancer cells — active area of oncology research"
      ]
    }
  },
  {
    id: "brahmi",
    name: "Brahmi",
    subtitle: "Water Hyssop — ब्राह्मी — Herb of Grace",
    latin: "Bacopa monnieri",
    emoji: "🔵",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bacopa_monnieri_1.jpg/640px-Bacopa_monnieri_1.jpg",
    bg: "bg-brahmi",
    badge: "Brain Tonic",
    badgeClass: "badge-blue",
    category: ["stress"],
    desc: "Named after Brahma (the god of creation), Brahmi is Ayurveda's premier cognitive enhancer — used for 3,000 years to sharpen memory, reduce anxiety and support neurological function.",
    tabs: {
      trad: [
        "Given to students before exams to improve <strong>memory and concentration</strong>",
        "Brahmi ghee (clarified butter infusion) consumed for daily brain nourishment",
        "Used in <strong>Medhya Rasayana</strong> — cognitive rejuvenation therapy",
        "Applied as scalp oil — believed to cool the brain and reduce anxiety",
        "Prescribed for epilepsy, insanity and nervous breakdown in Charaka texts"
      ],
      benefits: [
        "Improves memory formation, retention and recall in RCTs",
        "Reduces anxiety and depression — acts on serotonin and GABA pathways",
        "Neuroprotective against age-related cognitive decline",
        "Improves attention, learning speed and processing in children with ADHD",
        "Reduces cortisol and physiological stress response markers significantly"
      ],
      science: [
        "Key compounds: <strong>Bacosides A&B, Bacopasides, Brahmine alkaloid, Hersaponin</strong>",
        "Bacosides enhance <strong>synaptic plasticity</strong> — strengthen neural connections",
        "Inhibit acetylcholinesterase — increases acetylcholine (memory neurotransmitter)",
        "12-week RCT: 38% improvement in verbal learning and memory tests vs placebo",
        "Antioxidant protection of neurons — reduces beta-amyloid plaque accumulation"
      ]
    }
  },
  {
    id: "giloy",
    name: "Giloy",
    subtitle: "Guduchi — गिलोय — Divine Nectar",
    latin: "Tinospora cordifolia",
    emoji: "🍃",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tinospora_cordifolia.jpg/640px-Tinospora_cordifolia.jpg",
    bg: "bg-giloy",
    badge: "Immunity",
    badgeClass: "badge-lime",
    category: ["immunity"],
    desc: "Called 'Amrita' (divine nectar of immortality) in Sanskrit, Giloy is one of Ayurveda's three most crucial herbs — legendary for treating fever, boosting immunity and combating chronic disease.",
    tabs: {
      trad: [
        "Stem juice drunk to reduce chronic fever including <strong>dengue and malaria</strong>",
        "Used as <strong>Amritarishta</strong> — fermented tonic for immune weakness",
        "Prescribed for gout — clears excess uric acid from the joints",
        "Boiled with neem for enhanced antibacterial and antifungal effects",
        "Included in the Ministry of AYUSH's COVID-19 preventive protocol"
      ],
      benefits: [
        "Powerful <strong>immunomodulator</strong> — stimulates and balances immunity simultaneously",
        "Reduces fever — comparable to paracetamol in certain clinical studies",
        "Anti-arthritic — reduces joint pain, swelling and morning stiffness",
        "Hepatoprotective — shields liver from toxin damage and alcohol-induced injury",
        "Antidiabetic — lowers fasting blood glucose in clinical trials"
      ],
      science: [
        "Key compounds: <strong>Berberine, Tinosporin, Palmatine, Tinosporaside</strong>",
        "Berberine activates AMPK — regulates glucose metabolism and insulin sensitivity",
        "Polysaccharides stimulate macrophage activity by <strong>up to 300%</strong> in studies",
        "Anti-leishmanial and anti-malarial activity confirmed in vitro studies",
        "Tinosporin shows significant hepatoprotective effects in CCl4-induced liver damage"
      ]
    }
  },
  {
    id: "shatavari",
    name: "Shatavari",
    subtitle: "Wild Asparagus — शतावरी — She of a Hundred Husbands",
    latin: "Asparagus racemosus",
    emoji: "🌺",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Asparagus_racemosus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-168.jpg/480px-Asparagus_racemosus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-168.jpg",
    bg: "bg-shatavari",
    badge: "Women's Herb",
    badgeClass: "badge-pink",
    category: ["stress", "immunity"],
    desc: "The premier Ayurvedic herb for women's health at every life stage — puberty through menopause. Its name implies it gives a woman the strength and vitality of a hundred.",
    tabs: {
      trad: [
        "Root powder with milk given to women for <strong>hormonal balance</strong>",
        "Prescribed to nursing mothers to increase breast milk production",
        "Used in Ayurvedic treatment of infertility and PCOS",
        "Given during menopause to manage hot flashes and mood swings",
        "Prescribed as <strong>Shatavari Kalpa</strong> — classical rejuvenation preparation"
      ],
      benefits: [
        "Phytoestrogenic activity — balances female hormones naturally without side effects",
        "Significantly increases breast milk volume (galactagogue) in nursing women",
        "Reduces PMS symptoms — bloating, menstrual cramps and mood swings",
        "Adaptogen — reduces cortisol and physiological stress markers",
        "Immunomodulatory — increases white blood cell count in clinical studies"
      ],
      science: [
        "Key compounds: <strong>Shatavarins I–IV (steroidal saponins), Isoflavones, Mucilage</strong>",
        "Shatavarin IV exhibits phytoestrogenic activity — binds estrogen receptors selectively",
        "Immunomodulatory via enhancement of humoral and cell-mediated immunity",
        "Anti-ulcer activity — inhibits H. pylori in gastric mucosal studies",
        "Clinical trial: 33% increase in serum prolactin in lactating women vs control"
      ]
    }
  },
  {
    id: "triphala",
    name: "Triphala",
    subtitle: "Three Fruits — त्रिफला — The Great Rejuvenator",
    latin: "Haritaki + Bibhitaki + Amalaki",
    emoji: "🍂",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Terminalia_chebula_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-272.jpg/480px-Terminalia_chebula_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-272.jpg",
    bg: "bg-triphala",
    badge: "Formulation",
    badgeClass: "badge-brown",
    category: ["digestive", "immunity"],
    desc: "The most prescribed Ayurvedic formulation — a synergistic blend of Haritaki, Bibhitaki, and Amla. Used for 2,000+ years as Ayurveda's ultimate digestive tonic and systemic detoxifier.",
    tabs: {
      trad: [
        "Taken nightly in warm water — the definitive <strong>digestive tonic</strong>",
        "Used as eye wash for conjunctivitis and for improving vision",
        "Core of <strong>Panchakarma</strong> detox therapy — cleanses all three doshas",
        "Prescribed for obesity, constipation, IBS and hyperacidity",
        "Considered the single most important Rasayana in all of Ayurveda"
      ],
      benefits: [
        "Powerful digestive tonic — relieves constipation and IBS symptoms effectively",
        "Detoxifies the colon — removes accumulated ama (digestive toxins)",
        "Anti-obesity — reduces BMI and body fat percentage in clinical trials",
        "Anti-diabetic — lowers fasting glucose and improves insulin sensitivity",
        "Anti-cariogenic — reduces dental plaque as effectively as chlorhexidine"
      ],
      science: [
        "Key compounds: <strong>Chebulic acid, Gallic acid, Ellagic acid, Emblicanin, Bellericanin</strong>",
        "Synergistic effect — three fruits together are more potent than individually",
        "Anti-cancer: chebulagic acid induces apoptosis in tumour cell lines",
        "Prebiotic action — increases beneficial Lactobacillus and Bifidobacterium strains",
        "Inhibits matrix metalloproteinases — anti-metastatic potential under research"
      ]
    }
  },
  {
    id: "arjuna",
    name: "Arjuna",
    subtitle: "Heartwood Tonic — अर्जुन",
    latin: "Terminalia arjuna",
    emoji: "💖",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Terminalia_arjuna_in_Hyderabad%2C_AP_W_IMG_9729.jpg/640px-Terminalia_arjuna_in_Hyderabad%2C_AP_W_IMG_9729.jpg",
    bg: "bg-arjuna",
    badge: "Cardioprotective",
    badgeClass: "badge-pink",
    category: ["immunity"],
    desc: "A legendary Ayurvedic heart tonic, the bark of the Arjuna tree has been used for centuries to strengthen the cardiovascular system and emotional heart.",
    tabs: {
      trad: [
        "Bark decoction consumed daily as a powerful <strong>heart tonic</strong>",
        "Used in Ayurveda to heal emotional trauma and heartbreak",
        "Applied as a paste for bone healing and treating fractures",
        "Traditionally believed to give the strength and courage of the warrior Arjuna",
        "Prescribed for all varieties of cardiovascular imbalances"
      ],
      benefits: [
        "Significantly <strong>lowers blood pressure</strong> in clinical trials",
        "Improves cardiac muscle strength and pumping capacity",
        "Reduces LDL cholesterol and triglyceride levels",
        "Rich in Coenzyme Q-10 which supports cellular energy in the heart",
        "Potent antioxidant properties that protect against oxidative stress"
      ],
      science: [
        "Key compounds: <strong>Arjunolic acid, Tannins, Flavonoids, CoQ10</strong>",
        "Arjunolic acid provides potent inotropic and chronotropic effects",
        "Increases coronary artery flow and protects myocardium against ischemic damage",
        "Clinical trials show improvement in angina pectoris symptoms",
        "Exhibits significant anti-atherogenic properties"
      ]
    }
  },
  {
    id: "guggul",
    name: "Guggul",
    subtitle: "Sacred Resin — गुग्गुल",
    latin: "Commiphora mukul",
    emoji: "🔥",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Commiphora_wightii_03.JPG/640px-Commiphora_wightii_03.JPG",
    bg: "bg-guggul",
    badge: "Metabolism",
    badgeClass: "badge-amber",
    category: ["digestive", "skin"],
    desc: "The resin of the Mukul myrrh tree, Guggul is Ayurveda's most potent scraping agent (Lekhana), famous for clearing deep-seated toxins and balancing lipid levels.",
    tabs: {
      trad: [
        "Burned as incense (dhoop) to purify air and clear negative energy",
        "Core ingredient in <strong>Yogaraj Guggulu</strong> for joint health",
        "Prescribed as a primary treatment for obesity and sluggish metabolism",
        "Used topically to treat acne and chronic skin diseases",
        "Known to 'scrape' ama (toxins) from the deep tissues of the body"
      ],
      benefits: [
        "Potent <strong>hyperlipidemic</strong> agent — lowers LDL and raises HDL",
        "Reduces joint inflammation and symptoms of osteoarthritis",
        "Enhances thyroid function and basal metabolic rate",
        "Highly effective natural treatment for nodular cystic acne",
        "Supports cardiovascular health by preventing artery plaque buildup"
      ],
      science: [
        "Key compounds: <strong>Guggulsterones E and Z, Diterpenes, Sterols</strong>",
        "Guggulsterones act as antagonists to the farnesoid X receptor (FXR)",
        "Increases hepatic LDL receptor expression, boosting cholesterol clearance",
        "Inhibits NF-κB inflammatory pathways similar to pharmaceutical NSAIDs",
        "Has shown profound anti-obesity effects in multiple controlled studies"
      ]
    }
  },
  {
    id: "gotukola",
    name: "Gotu Kola",
    subtitle: "Mandukaparni — मण्डूकपर्णी",
    latin: "Centella asiatica",
    emoji: "🍀",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Centella_asiatica_in_Kadavoor.jpg/640px-Centella_asiatica_in_Kadavoor.jpg",
    bg: "bg-gotukola",
    badge: "Longevity",
    badgeClass: "badge-green",
    category: ["stress", "skin"],
    desc: "A staple in both Ayurvedic and Daoist medicine, Gotu Kola is revered as the 'herb of longevity' and a powerful brain tonic that also heals the skin.",
    tabs: {
      trad: [
        "Eaten by elephants in the wild — believed to be the source of their memory",
        "Used by yogis to enhance meditation and awaken the crown chakra",
        "Applied topically as a poultice for wound healing and leprosy",
        "Considered a premier <strong>Medhya Rasayana</strong> (brain rejuvenator)",
        "Consumed as a leafy green vegetable in traditional diets"
      ],
      benefits: [
        "Enhances <strong>neuroplasticity</strong> and cognitive function",
        "Accelerates wound healing and minimizes scar tissue/stretch marks",
        "Improves venous circulation and treats varicose veins",
        "Reduces anxiety and exerts a mild calming effect on the nervous system",
        "Promotes collagen synthesis for youthful, glowing skin"
      ],
      science: [
        "Key compounds: <strong>Asiaticoside, Madecassoside, Asiatic acid</strong>",
        "Madecassoside stimulates type I and III collagen production",
        "Increases neurite outgrowth in brain cells, aiding neural repair",
        "Protects against amyloid-beta toxicity in Alzheimer's models",
        "Demonstrates significant venotonic activity in clinical trials"
      ]
    }
  },
  {
    id: "bael",
    name: "Bael",
    subtitle: "Bilva — बिल्व — Sacred Fruit",
    latin: "Aegle marmelos",
    emoji: "🍈",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aegle_marmelos-_Flora_of_India.jpg/640px-Aegle_marmelos-_Flora_of_India.jpg",
    bg: "bg-bael",
    badge: "Digestive Aid",
    badgeClass: "badge-olive",
    category: ["digestive"],
    desc: "A tree profoundly sacred to Lord Shiva, the Bael fruit is one of Ayurveda's most effective remedies for chronic digestive issues and intestinal repair.",
    tabs: {
      trad: [
        "Trifoliate leaves offered to Lord Shiva representing creation, preservation, destruction",
        "Unripe fruit used to treat severe diarrhea, dysentery and cholera",
        "Ripe fruit consumed as a cooling summer drink (sherbet)",
        "Considered one of the <strong>Dashamoola</strong> (ten sacred roots) of Ayurveda",
        "Balances Vata and Kapha doshas while healing the gut lining"
      ],
      benefits: [
        "Unrivaled <strong>anti-diarrheal</strong> and astringent properties",
        "Heals gastric ulcers and soothes inflammatory bowel conditions",
        "Acts as a gentle laxative when consumed fully ripe",
        "Exhibits broad-spectrum antimicrobial action against gut pathogens",
        "Regulates blood sugar levels and protects pancreatic beta cells"
      ],
      science: [
        "Key compounds: <strong>Marmelosin, Luvangetin, Tannins, Aegeline</strong>",
        "High tannin content provides astringent action to halt diarrhea",
        "Aegeline exhibits significant anti-hyperglycemic activity",
        "Protects the gastric mucosa by stimulating mucus secretion",
        "Marmelosin acts as a cardiac depressant and mild sedative"
      ]
    }
  },
  {
    id: "punarnava",
    name: "Punarnava",
    subtitle: "The Renewer — पुनर्नवा",
    latin: "Boerhavia diffusa",
    emoji: "🌱",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Boerhavia_diffusa_in_Talakona_forest_AP_W_IMG_8277.jpg/640px-Boerhavia_diffusa_in_Talakona_forest_AP_W_IMG_8277.jpg",
    bg: "bg-punarnava",
    badge: "Detoxifier",
    badgeClass: "badge-lime",
    category: ["immunity", "skin"],
    desc: "Meaning 'that which renews the body,' Punarnava is a powerful rejuvenative herb that supports the kidneys, flushes fluids, and restores cellular vitality.",
    tabs: {
      trad: [
        "Given the name 'Renewer' because the plant springs back to life after drying out",
        "Premier Ayurvedic diuretic for fluid retention and edema",
        "Used to treat kidney stones and urinary tract infections",
        "Considered a powerful Rasayana for the liver and blood",
        "Used as a paste to reduce swelling in joints and tissues"
      ],
      benefits: [
        "Powerful <strong>nephroprotective</strong> — protects and regenerates kidneys",
        "Acts as a natural, safe diuretic without potassium depletion",
        "Rejuvenates liver function and helps treat jaundice and hepatitis",
        "Anti-inflammatory action reduces arthritis pain and swelling",
        "Helps manage obesity by shifting cellular fluid balance"
      ],
      science: [
        "Key compounds: <strong>Punarnavine, Boeravinones, Rotenoids</strong>",
        "Punarnavine demonstrates significant diuretic and immunomodulatory activity",
        "Boeravinones show potent spasmolytic action on the gastrointestinal tract",
        "Protects against acetaminophen-induced hepatotoxicity in animal models",
        "Exhibits significant anti-proliferative effects against certain cancer cells"
      ]
    }
  }
];

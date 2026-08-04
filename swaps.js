// =====================================================================
// SESSION SWAPS — alternate session templates organised by slot
// =====================================================================
// Each slot represents a session type (e.g. Monday football, Wed swim,
// long run, easy run). When the user taps "Swap" on a session, the app
// picks the closest matching slot and shows its alternates.
//
// Each alternate is a full session object matching the plans.js schema
// (name, meta, headline, warmUp, mainSet, coolDown, focus, paces,
// considerations, importance).
// =====================================================================

window.COACH_SWAPS = {

  // ================================================================
  // Slot: FOOTBALL (Monday, or any football session)
  // ================================================================
  'football': {
    title: 'Monday alternatives',
    hint: 'Football off? Here are the alternatives for the Monday anaerobic/quality slot.',
    alternates: [
      {
        id: 'threshold-4x1km',
        label: 'Threshold — 4 × 1 km',
        icon: 'run',
        reason: 'Football off, want run quality',
        session: {
          name: 'Threshold reps — 4 × 1 km',
          meta: '9 km · 50 min',
          headline: 'Football off — threshold quality swaps in',
          warmUp: [
            '15 min easy jog at 5:00–5:15/km — deliberately slow first 5 min',
            '4 × 100m strides on a flat stretch — build to fast, not sprints'
          ],
          mainSet: [
            '1 km at 3:55–4:00/km — controlled hard, RPE 7',
            '90s easy jog recovery — HR drops to <145',
            '1 km at 3:55–4:00/km — same effort',
            '90s easy jog recovery',
            '1 km at 3:55–4:00/km — hold form',
            '90s easy jog recovery',
            '1 km at 3:55–4:00/km — finish strong but controlled'
          ],
          coolDown: '10 min easy jog at 5:00–5:15/km — do NOT stop at the end of the last rep.',
          focus: 'Even effort across all reps. Rep 1 should feel almost too easy.',
          paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s jog', 'HR 165–172'],
          considerations: [
            'Same pace you cleaned in Week 4 — familiar territory',
            'Bail rule: if rep 1 feels wrong, do 3 × 1 km',
            'Even effort > faster start'
          ],
          importance: 'Threshold reps are where the 10K race pace ceiling lifts. Sub-37 pathway.'
        }
      },
      {
        id: 'fartlek-6x2min',
        label: 'Fartlek — 6 × 2 min',
        icon: 'run',
        reason: 'Want quality but less structured',
        session: {
          name: 'Fartlek — 6 × 2 min at threshold effort',
          meta: '8 km · 45 min',
          headline: 'Unstructured quality — effort-based, no GPS obsessing',
          warmUp: [
            '15 min easy jog at 5:00–5:15/km',
            '4 × 100m strides'
          ],
          mainSet: [
            '6 × 2 min at threshold effort (RPE 7, ~3:55–4:05/km if you check)',
            '90s easy jog recovery between each',
            'Effort > pace — read the terrain, run by feel'
          ],
          coolDown: '10 min easy jog at 5:00–5:15/km.',
          focus: 'Effort-based session. Legs and lungs are the metric, not the watch.',
          paces: ['RPE 7 during efforts', 'HR 165–172', 'Recovery: <145'],
          considerations: [
            'Fartlek is great when you can\'t face structured intervals',
            'Perfect for undulating terrain — hills become natural intensity',
            'Bail rule: 3 × 2 min if the first three feel harder than expected'
          ],
          importance: 'Fartlek gives you 12 min at threshold effort — same physiological stimulus as 4 × 1 km, less mental load. Useful mid-block variety.'
        }
      },
      {
        id: 'easy-run-6km',
        label: 'Easy run — 6 km',
        icon: 'run',
        reason: 'Legs tired, keep it aerobic',
        session: {
          name: 'Easy run — 6 km',
          meta: '6 km · 35 min',
          headline: 'Easy aerobic — protects the week\'s quality slots',
          warmUp: 'First km deliberately slow.',
          mainSet: '6 km continuous at easy aerobic pace.',
          coolDown: 'Last 500m drop to walk. 3 min walking after.',
          focus: 'Conversational. No pace targets. No strides. Just movement.',
          paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
          considerations: [
            'Right call if legs are stiff or under-slept',
            'Aerobic minutes are the base — never wasted'
          ],
          importance: 'Recognising when to be easy is a skill. Missing quality when you should have been easy costs more than missing easy when you could have gone hard.'
        }
      },
      {
        id: 'home-sc-30',
        label: 'Home S&C — 30 min',
        icon: 'strength',
        reason: 'Rain, no gear, want indoor work',
        session: {
          name: 'Home S&C — bodyweight',
          meta: '30 min · home',
          headline: 'Full-body bodyweight session — no kit needed',
          warmUp: '5 min: arm circles, leg swings, hip openers, walk on the spot.',
          mainSet: [
            '3 rounds, 60s rest between:',
            '12 bodyweight squats — slow, controlled',
            '8 push-ups — knees or full',
            '10 reverse lunges (5 each leg)',
            '8 single-leg RDLs each leg',
            '30s plank hold'
          ],
          coolDown: '5 min: pigeon pose, hamstring stretch, hip flexor stretch.',
          focus: 'Form > load. Slow eccentrics on squats and RDLs.',
          paces: ['RPE 5–6', 'Form > speed'],
          considerations: [
            'Anywhere works — living room, hotel, spare bedroom',
            'Skip if you did football alternatives earlier — one Monday load-source is enough'
          ],
          importance: 'Bodyweight S&C wakes the neuromuscular system without taxing the aerobic engine. Useful maintenance when gym isn\'t available.'
        }
      },
      {
        id: 'easy-swim-1500',
        label: 'Easy swim — 1500m',
        icon: 'swim',
        reason: 'Pool\'s free, legs want a break from impact',
        session: {
          name: 'Easy swim — technique',
          meta: '1500m · 40 min',
          headline: 'Cross-discipline swap — no-impact aerobic work',
          warmUp: '200m easy freestyle.',
          mainSet: [
            '2 × 50m catch-up drill with 20s rest',
            '6 × 100m at 1:45–1:50 with 20s rest — steady, no pressure',
            '200m easy'
          ],
          coolDown: '100m easy, mixed strokes.',
          focus: 'Zero-impact aerobic day — a genuine alternative when legs need a break but you still want to move.',
          paces: ['Main: 1:45–1:50 /100m', 'Easy: 1:55–2:05 /100m'],
          considerations: [
            'Doesn\'t replace the week\'s Wednesday swim — this is a bonus/substitute for Monday specifically',
            'Good option if legs are carrying fatigue from the weekend'
          ],
          importance: 'Cross-training keeps the week\'s total load consistent without adding to running/football\'s impact cost.'
        }
      },
      {
        id: 'rest',
        label: 'Full rest',
        icon: 'rest',
        reason: 'Life is heavy, take the day',
        session: {
          name: 'Rest',
          meta: 'No structured training',
          headline: 'Rest day — deliberate, not accidental',
          warmUp: '—',
          mainSet: 'No structured training. Walking and casual movement fine.',
          coolDown: '—',
          focus: 'Sleep, hydration, food.',
          paces: [],
          considerations: [
            'Choosing rest > forcing a compromised session',
            'One extra rest day rarely hurts a block',
            'Optional 15 min mobility if you\'re restless'
          ],
          importance: 'Rest is a training decision, not the absence of one.'
        }
      }
    ]
  },

  // ================================================================
  // Slot: EASY RUN (Tue easy, Friday optional, general easy)
  // ================================================================
  'run-easy': {
    title: 'Easy run alternatives',
    hint: 'Different flavours of easy or a change of stimulus.',
    alternates: [
      {
        id: 'easy-run-longer',
        label: 'Easy run — 9 km',
        icon: 'run',
        reason: 'Legs feel fresh, add volume',
        session: {
          name: 'Easy run — 9 km',
          meta: '9 km · 50 min',
          headline: 'Extended easy — banking aerobic minutes',
          warmUp: 'First km deliberately slow.',
          mainSet: '9 km continuous at easy aerobic pace.',
          coolDown: 'Last 500m drop to walk. 3–5 min walking after.',
          focus: 'Conversational. No pace-chasing.',
          paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
          considerations: [
            'Only add if legs are genuinely fresh',
            'Don\'t make Tuesday the volume-dumping ground — it should feed Thursday\'s quality'
          ],
          importance: 'Volume builds the aerobic engine. Easy km compound.'
        }
      },
      {
        id: 'recovery-run-4km',
        label: 'Recovery jog — 4 km',
        icon: 'run',
        reason: 'Legs cooked, keep them moving',
        session: {
          name: 'Recovery jog — 4 km',
          meta: '4 km · 25 min',
          headline: 'Recovery-pace shuffle — active recovery only',
          warmUp: 'Walk 3 min then jog into it slowly.',
          mainSet: '4 km at recovery pace (slower than easy).',
          coolDown: 'Walk 5 min.',
          focus: 'Slower than "easy". No effort, no target, no strides.',
          paces: ['5:20–5:40 /km', 'RPE 2', 'HR <140'],
          considerations: [
            'If it feels tough, walk part of it',
            'Recovery pace is genuinely easy — no pride'
          ],
          importance: 'Blood flow beats sitting still after a hard session. But no faster than recovery pace.'
        }
      },
      {
        id: 'mobility-20',
        label: 'Mobility — 20 min',
        icon: 'mobility',
        reason: 'No time to run, want movement',
        session: {
          name: 'Mobility routine — 20 min',
          meta: '20 min · home',
          headline: 'Focused mobility instead of a run',
          warmUp: '—',
          mainSet: [
            '5 min: hip flexor + pigeon pose (both sides)',
            '5 min: hamstring + calf stretches',
            '5 min: thoracic spine mobility (cat-cow, thread the needle)',
            '5 min: glute bridges + bird-dogs for activation'
          ],
          coolDown: '—',
          focus: 'Stretch what\'s tight, activate what\'s dormant.',
          paces: [],
          considerations: [
            'Foam roll first if you have one — 5 min then stretch',
            'This isn\'t a workout — it\'s maintenance'
          ],
          importance: 'Mobility maintains range of motion that running gradually removes. 20 min a week compounds.'
        }
      },
      {
        id: 'easy-bike-45',
        label: 'Easy bike — 45 min Z2',
        icon: 'bike',
        reason: 'Run niggle, want cross-train aerobic',
        session: {
          name: 'Easy bike spin — Z2',
          meta: '45 min · Z2',
          headline: 'Aerobic minutes without impact',
          warmUp: '10 min easy building to Z2.',
          mainSet: '30 min steady Z2 spinning.',
          coolDown: '5 min easy spin.',
          focus: 'Cross-train aerobic. Useful if a run niggle is threatening.',
          paces: ['RPE 3–4', 'HR 130–145'],
          considerations: [
            'Zwift, turbo, or outdoor all fine',
            'Legs still working, just no impact'
          ],
          importance: 'Cross-training maintains aerobic fitness when running would risk aggravating something. Bike + run share ~70% of the cardiovascular adaptation.'
        }
      },
      {
        id: 'rest',
        label: 'Full rest',
        icon: 'rest',
        reason: 'Genuinely tired, take the day',
        session: {
          name: 'Rest',
          meta: 'No structured training',
          headline: 'Rest day',
          warmUp: '—',
          mainSet: 'No structured training.',
          coolDown: '—',
          focus: 'Sleep, hydration, food.',
          paces: [],
          considerations: ['Optional 15 min mobility if restless'],
          importance: 'Rest is a training decision.'
        }
      }
    ]
  },

  // ================================================================
  // Slot: QUALITY RUN (Thu threshold, or any interval/tempo session)
  // ================================================================
  'run-quality': {
    title: 'Quality run alternatives',
    hint: 'Different flavours of hard — pick what your legs feel.',
    alternates: [
      {
        id: 'threshold-5x1km',
        label: 'Threshold — 5 × 1 km',
        icon: 'run',
        reason: 'Progression: more reps at same pace',
        session: {
          name: 'Threshold reps — 5 × 1 km',
          meta: '10 km · 55 min',
          headline: 'Progressive threshold — one more rep',
          warmUp: [
            '15 min easy jog',
            '4 × 100m strides'
          ],
          mainSet: [
            '5 × 1 km at 3:55–4:00/km',
            '90s easy jog recovery between reps'
          ],
          coolDown: '10 min easy jog.',
          focus: 'Same pace as 4 × 1 km, one more rep. Consistency across all 5.',
          paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s', 'HR 165–172'],
          considerations: [
            'Only progress when 4 × 1 km felt controlled',
            'Bail rule: 4 reps if rep 3 already feels labour'
          ],
          importance: 'Volume progression at fixed pace is safer than pace progression at fixed volume.'
        }
      },
      {
        id: 'threshold-3x2km',
        label: 'Threshold — 3 × 2 km',
        icon: 'run',
        reason: 'Longer reps, sustained effort',
        session: {
          name: 'Threshold reps — 3 × 2 km',
          meta: '10 km · 55 min',
          headline: 'Longer reps at slightly softer pace',
          warmUp: [
            '15 min easy jog',
            '4 × 100m strides'
          ],
          mainSet: [
            '3 × 2 km at 4:00–4:05/km',
            '2:30 easy jog recovery'
          ],
          coolDown: '10 min easy jog.',
          focus: 'Longer time at threshold — mental discipline is the challenge.',
          paces: ['Reps: 4:00–4:05 /km', 'Recovery: 2:30 jog', 'HR 165–172'],
          considerations: [
            'Sub-37 pathway — this comes after 5 × 1 km lands cleanly',
            'Bail rule: 2 × 2 km if rep 1 feels rougher than expected',
            'Pace slightly softer than 1 km reps — sustained is the point'
          ],
          importance: 'Longer reps train race-pace discipline. 2 km is the smallest chunk that teaches you to hold effort when the mind wants to bail.'
        }
      },
      {
        id: 'hills-10x30s',
        label: 'Hill reps — 10 × 30s',
        icon: 'run',
        reason: 'Strength stimulus, low injury risk',
        session: {
          name: 'Hill reps — 10 × 30s',
          meta: '8 km · 50 min',
          headline: 'Neuromuscular strength via hills',
          warmUp: [
            '15 min easy jog to a hill',
            '4 × 100m strides'
          ],
          mainSet: [
            '10 × 30s hard uphill (RPE 8, controlled effort)',
            'Walk/jog down for recovery (60–90s)',
            'Hill grade: ~5–8% — steep enough to force form, not so steep it\'s a bear crawl'
          ],
          coolDown: '10 min easy jog on the flat.',
          focus: 'Uphill running is strength work disguised as running. Drive the knees, pump the arms.',
          paces: ['RPE 8 on the reps', 'Recovery: walk/jog down', 'HR 170+'],
          considerations: [
            'Great for building leg strength without gym',
            'Low injury risk — uphill reduces impact',
            'Bail rule: 6–8 reps if legs are struggling'
          ],
          importance: 'Hills build power and running economy. Once in a while replacing flat threshold with hills prevents staleness and builds strength that translates back to flat speed.'
        }
      },
      {
        id: 'vo2-6x3min',
        label: 'VO2 — 6 × 3 min',
        icon: 'run',
        reason: 'Sharper top-end stimulus',
        session: {
          name: 'VO2 reps — 6 × 3 min',
          meta: '9 km · 55 min',
          headline: 'Top-end aerobic power — for later in the build, not early',
          warmUp: [
            '15 min easy jog',
            '4 × 100m strides — build to genuinely fast'
          ],
          mainSet: [
            '6 × 3 min at VO2 effort (RPE 9, 3:30–3:40/km if you check pace)',
            '2:30 easy jog recovery between reps'
          ],
          coolDown: '10 min easy jog.',
          focus: 'Hard. This is the sharpening-phase tool, not a base-phase one — use sparingly this early in the build.',
          paces: ['Reps: 3:30–3:40 /km', 'Recovery: 2:30 jog', 'HR 172+'],
          considerations: [
            'Save this mostly for Oct–Nov (the sharpen phase) — an occasional early taste is fine but don\'t make it a habit yet',
            'Bail rule: 4 reps if form breaks down',
            'Needs full recovery either side — don\'t stack with a hard Sat'
          ],
          importance: 'VO2 work lifts the aerobic ceiling above threshold — it\'s what eventually makes 3:42/km race pace feel like threshold, not max effort. Held in reserve for when the build calls for it.'
        }
      },
      {
        id: 'easy-run-6km',
        label: 'Easy run — 6 km',
        icon: 'run',
        reason: 'Quality was supposed to happen but legs said no',
        session: {
          name: 'Easy run — 6 km',
          meta: '6 km · 35 min',
          headline: 'Downgrade to easy — smart decision',
          warmUp: 'First km deliberately slow.',
          mainSet: '6 km continuous at easy aerobic pace.',
          coolDown: 'Walk 3 min after.',
          focus: 'Aerobic. No quality when quality was planned but legs said no.',
          paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
          considerations: [
            'Downgrading is a skill, not a failure',
            'The session you\'re protecting is Saturday\'s long+tempo'
          ],
          importance: 'A wasted hard session (going hard on tired legs) costs more than a smart easy one.'
        }
      },
      {
        id: 'rest',
        label: 'Full rest',
        icon: 'rest',
        reason: 'Something\'s not right, skip it',
        session: {
          name: 'Rest',
          meta: 'No structured training',
          headline: 'Rest — the smart call today',
          warmUp: '—',
          mainSet: 'No structured training.',
          coolDown: '—',
          focus: 'Sleep, hydration, food.',
          paces: [],
          considerations: [
            'If you\'re debating rest, the answer is usually rest',
            'One skipped quality session ≠ blown block'
          ],
          importance: 'Injuries come from pushing through when you shouldn\'t.'
        }
      }
    ]
  },

  // ================================================================
  // Slot: LONG RUN (Sat)
  // ================================================================
  'run-long': {
    title: 'Long run alternatives',
    hint: 'Different flavours of Saturday long — pick based on legs and partner plans.',
    alternates: [
      {
        id: 'long-easy-12km',
        label: 'Long easy — 12 km',
        icon: 'run',
        reason: 'Skip the tempo, just accumulate km',
        session: {
          name: 'Long easy — 12 km',
          meta: '12 km · 65 min',
          headline: 'Pure aerobic long run — no quality',
          warmUp: 'First 1–2 km deliberately slow.',
          mainSet: '12 km continuous at easy aerobic pace.',
          coolDown: 'Walk 5 min after. Refuel within 20 min.',
          focus: 'Aerobic minutes. If legs need it, downgrade the tempo to easy.',
          paces: ['4:45–5:00 /km', 'HR <150', 'RPE 3–4'],
          considerations: [
            'Downgrade from tempo when Thu quality hit harder than expected',
            'No quality on Saturday one week doesn\'t break the arc'
          ],
          importance: 'Long easy runs still build the aerobic engine — sometimes the "no quality" version is what a block needs.'
        }
      },
      {
        id: 'long-easy-15km',
        label: 'Long easy — 15 km',
        icon: 'run',
        reason: 'Longer, still no quality',
        session: {
          name: 'Long easy — 15 km',
          meta: '15 km · 80 min',
          headline: 'Extended long — pure aerobic',
          warmUp: 'First 1–2 km slow.',
          mainSet: '15 km continuous at easy aerobic pace.',
          coolDown: 'Walk 5 min after. Refuel.',
          focus: 'Aerobic capacity. Fuel every 30 min after the first hour.',
          paces: ['4:50–5:05 /km', 'HR <150', 'RPE 3–4'],
          considerations: [
            'Fuelling matters — 30g carbs per hour after 60 min',
            'Only if the week has already banked quality (Mon or Thu)',
            'Partner swap: join her for a long training run'
          ],
          importance: 'Sub-37 build ultimately needs long runs of 15–18 km. Extending gradually across the summer.'
        }
      },
      {
        id: 'short-quality-8km',
        label: 'Short quality — 8 km with 4 × 1 km',
        icon: 'run',
        reason: 'Time-crunched, want quality',
        session: {
          name: 'Short quality — 4 × 1 km',
          meta: '8 km · 45 min',
          headline: 'Compressed quality when time is short',
          warmUp: [
            '15 min easy jog',
            '4 × 100m strides'
          ],
          mainSet: [
            '4 × 1 km at 3:55–4:00/km',
            '90s easy jog recovery'
          ],
          coolDown: '5 min easy jog.',
          focus: 'Quality salvaged when the long run isn\'t possible.',
          paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s'],
          considerations: [
            'Not a replacement for the long run — a fallback',
            'Better than nothing when the day\'s compressed'
          ],
          importance: 'Salvaging quality when a full long run isn\'t on protects the week\'s stimulus.'
        }
      },
      {
        id: 'partner-swap',
        label: 'Join partner\'s session',
        icon: 'run',
        reason: 'Partner has a run/ride/OWS today',
        session: {
          name: 'Partner\'s session — swap in',
          meta: 'Match her plan',
          headline: 'Weekend flex — match her session, log what you did',
          warmUp: '—',
          mainSet: 'Whatever her session is — long run, long ride, or OWS. Match her pace/distance where sensible.',
          coolDown: 'Cool down as normal for the activity.',
          focus: 'Partner time. Log what you actually did — I\'ll adjust next week if needed.',
          paces: [],
          considerations: [
            'Long ride: log distance + time, roughly Z2 assumed',
            'Long run: log distance + pace, likely easier than solo',
            'OWS: log time + rough distance — good aerobic + bonus swim',
            'Whatever it is, log it honestly in notes so next week\'s plan makes sense'
          ],
          importance: 'Weekends flex with partner\'s plans by design. Consistency across time > perfect adherence any given week.'
        }
      },
      {
        id: 'ows-40min',
        label: 'Open water swim — 40 min',
        icon: 'swim',
        reason: 'Partner OWS or you fancy it',
        session: {
          name: 'Open water swim — 40 min steady',
          meta: '40 min · outdoor',
          headline: 'Steady OWS — aerobic swim in open water',
          warmUp: '5 min easy — get used to the water temperature.',
          mainSet: '30 min steady aerobic — sighting every 6–8 strokes, straight line where possible.',
          coolDown: '5 min easy — mixed strokes.',
          focus: 'Sighting, straight-line swimming, breathing bilaterally in chop.',
          paces: ['Steady aerobic effort', 'RPE 4–5'],
          considerations: [
            'Wetsuit if the water\'s under 20°C',
            'Never swim alone — partner or safety kayak',
            'This is aerobic — not a race pace effort'
          ],
          importance: 'OWS builds specific race-conditions fitness that pool swimming can\'t. Sighting and straight-line efficiency are triathlon-specific skills.'
        }
      },
      {
        id: 'rest',
        label: 'Full rest',
        icon: 'rest',
        reason: 'Life priorities won',
        session: {
          name: 'Rest',
          meta: 'No structured training',
          headline: 'Rest day',
          warmUp: '—',
          mainSet: 'No structured training.',
          coolDown: '—',
          focus: 'Life takes priority. One weekend won\'t break the arc.',
          paces: [],
          considerations: ['Optional mobility if restless'],
          importance: 'Consistency across months matters more than perfect adherence any given week.'
        }
      }
    ]
  },

  // ================================================================
  // Slot: SWIM (any swim session)
  // ================================================================
  'swim': {
    title: 'Swim alternatives',
    hint: 'Rotating swim menu — pick a type that\'s not this week\'s.',
    alternates: [
      {
        id: 'swim-type-a',
        label: 'Type A — Technique + aerobic',
        icon: 'swim',
        reason: 'Drills + 8 × 100m',
        session: {
          name: 'Swim — technique + aerobic (Type A)',
          meta: '1900m · 50 min',
          headline: 'Drills-focused with 8 × 100m aerobic set',
          warmUp: [
            '200m easy freestyle',
            '100m kick with board',
            '100m build to moderate pace'
          ],
          mainSet: [
            '2 × 50m front sculling with 20s rest',
            '2 × 50m single-arm freestyle with 20s rest',
            '2 × 50m catch-up drill with 20s rest',
            '8 × 100m at 1:42–1:47 with 20s rest',
            '4 × 50m at 1:38–1:42 with 30s rest'
          ],
          coolDown: '200m easy freestyle, mixing strokes.',
          focus: 'Feel the catch — fingers point down before pulling.',
          paces: ['Main: 1:42–1:47 /100m', 'Speed: 1:38–1:42 /100m', 'Easy: 1:55–2:05 /100m'],
          considerations: ['Bring a kickboard', 'Front sculling is the key drill'],
          importance: 'Technique + aerobic is the baseline swim — drills refine, 100s build.'
        }
      },
      {
        id: 'swim-type-b',
        label: 'Type B — Endurance',
        icon: 'swim',
        reason: 'Longer chunks — 3 × 400m',
        session: {
          name: 'Swim — endurance (Type B)',
          meta: '2400m · 60 min',
          headline: 'Longer continuous chunks — race-relevant',
          warmUp: [
            '200m easy freestyle',
            '100m kick with board',
            '4 × 50m as 25 drill / 25 swim'
          ],
          mainSet: [
            '3 × 400m at 1:48–1:52 /100m with 45s rest',
            '4 × 50m at 1:38–1:42 /100m with 20s rest'
          ],
          coolDown: '200m easy freestyle.',
          focus: 'Long chunks train pace discipline. Stroke count stable across 400s.',
          paces: ['Long/endurance: 1:48–1:52 /100m', 'Speed: 1:38–1:42 /100m'],
          considerations: ['Count strokes on first + last 25 of each 400', 'Alternative: 2 × 600m at 1:50 /100m'],
          importance: 'Endurance swims build the aerobic ceiling and teach pace over long chunks.'
        }
      },
      {
        id: 'swim-type-c',
        label: 'Type C — Speed/form',
        icon: 'swim',
        reason: '50s + descending 100s',
        session: {
          name: 'Swim — speed/form (Type C)',
          meta: '2100m · 55 min',
          headline: 'Sharper turnover work',
          warmUp: [
            '200m easy freestyle',
            '100m kick with board',
            '4 × 50m as 25 drill / 25 swim'
          ],
          mainSet: [
            '10 × 50m at 1:38–1:42 with 20s rest',
            '100m easy',
            '4 × 100m descending (1:47 → 1:40) with 30s rest',
            '100m easy',
            '4 × 50m at 1:38–1:42 with 25s rest'
          ],
          coolDown: '200m easy freestyle.',
          focus: 'Turnover + clean catch. 50s sharp but sustainable.',
          paces: ['Speed: 1:38–1:42 /100m', 'Descending 100s: 1:47 → 1:40'],
          considerations: ['Count strokes on 50s', 'Descending teaches pace control'],
          importance: 'Speed work develops top-end and refines catch under load.'
        }
      },
      {
        id: 'swim-type-d',
        label: 'Type D — Tri pace',
        icon: 'swim',
        reason: '800m TT + race pace intervals',
        session: {
          name: 'Swim — tri pace (Type D)',
          meta: '2000m · 55 min',
          headline: 'Race-pace specificity',
          warmUp: [
            '200m easy freestyle',
            '100m kick with board',
            '2 × 50m build to race pace'
          ],
          mainSet: [
            '800m time trial — steady sustained effort at 1:43–1:47/100m',
            '200m easy recovery',
            '4 × 200m at race pace (1:43–1:47) with 30s rest'
          ],
          coolDown: '100m easy freestyle.',
          focus: 'Race-pace effort held over race-relevant distances.',
          paces: ['Race pace: 1:43–1:47 /100m', 'Easy: 1:55–2:05 /100m'],
          considerations: [
            '800m TT gives a benchmark — log the time',
            'This is the hardest swim session in the rotation — recover accordingly'
          ],
          importance: 'Tri-pace sessions build race-day capacity. Do this closer to any tri races.'
        }
      },
      {
        id: 'ows-40min',
        label: 'Open water swim — 40 min',
        icon: 'swim',
        reason: 'Outdoor, weekend, partner',
        session: {
          name: 'Open water swim — 40 min steady',
          meta: '40 min · outdoor',
          headline: 'Steady OWS — aerobic swim in open water',
          warmUp: '5 min easy',
          mainSet: '30 min steady aerobic — sighting every 6–8 strokes.',
          coolDown: '5 min easy, mixing strokes.',
          focus: 'Sighting, straight-line, bilateral breathing.',
          paces: ['Steady aerobic', 'RPE 4–5'],
          considerations: ['Wetsuit if under 20°C', 'Never solo'],
          importance: 'Race-specific fitness the pool can\'t provide.'
        }
      },
      {
        id: 'recovery-swim-1200',
        label: 'Recovery swim — 1200m easy',
        icon: 'swim',
        reason: 'Fatigued, want water time',
        session: {
          name: 'Recovery swim — 1200m easy',
          meta: '1200m · 30 min',
          headline: 'Easy recovery — no intensity',
          warmUp: '200m easy',
          mainSet: '800m continuous easy at 2:00–2:10 /100m',
          coolDown: '200m easy, mixed strokes',
          focus: 'Movement + rhythm. No pace targets.',
          paces: ['Easy: 2:00–2:10 /100m', 'RPE 2'],
          considerations: [
            'Half the normal volume, half the intensity',
            'Good on a heavy training week'
          ],
          importance: 'Recovery swim is genuine recovery — swimming easy for pleasure, not stimulus.'
        }
      },
      {
        id: 'easy-run-6km-fallback',
        label: 'Easy run — 6km instead',
        icon: 'run',
        reason: 'Pool inaccessible entirely — run instead of skipping',
        session: {
          name: 'Easy run — 6 km (swim fallback)',
          meta: '6 km · 35 min',
          headline: 'Cross-discipline swap — running instead of a missed swim',
          warmUp: 'First km deliberately slow.',
          mainSet: '6 km continuous at easy aerobic pace.',
          coolDown: 'Last 500m drop to walk.',
          focus: 'Not a swim replacement in training-specificity terms, but keeps the week\'s total aerobic load intact.',
          paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
          considerations: [
            'Genuine fallback for when the pool is properly out of reach, not a first choice',
            'Doesn\'t build swim fitness — just fills the aerobic gap for the week'
          ],
          importance: 'Better to bank aerobic minutes somewhere than skip entirely when the swim genuinely can\'t happen.'
        }
      },
      {
        id: 'rest',
        label: 'Skip swim',
        icon: 'rest',
        reason: 'Pool closed, no time, life',
        session: {
          name: 'Skip — swap for rest or optional easy',
          meta: 'No swim',
          headline: 'No swim this week',
          warmUp: '—',
          mainSet: 'Skip swim. Rest or a 30 min easy activity instead.',
          coolDown: '—',
          focus: 'One missed swim doesn\'t derail the block.',
          paces: [],
          considerations: [
            'Missed swims are the most forgivable — swim rebuilds fastest',
            'If missing repeatedly, flag it at Sunday check-in'
          ],
          importance: 'For a 10K-focused block, missed swims are the cheapest miss.'
        }
      }
    ]
  },

  // ================================================================
  // Slot: LONG BIKE (Sun)
  // ================================================================
  'bike-long': {
    title: 'Long bike alternatives',
    hint: 'Different flavours of Sunday long ride — SS variants or Z2 only.',
    alternates: [
      {
        id: 'bike-z2-only',
        label: 'Long Z2 only',
        icon: 'bike',
        reason: 'No intensity, just aerobic',
        session: {
          name: 'Long bike — Z2 only',
          meta: '1:45 · ~45 km',
          headline: 'Pure aerobic ride — no intensity',
          warmUp: '15 min easy building to Z2.',
          mainSet: '1:20 steady Z2.',
          coolDown: '10 min easy spin.',
          focus: 'Volume at intensity is the goal — not pushing watts.',
          paces: ['RPE 3–4', 'HR 130–145'],
          considerations: [
            'Right call when Sat long+tempo was hard',
            'Bike Z2 is the safest way to add aerobic volume without run cost'
          ],
          importance: 'Not every long bike needs intensity. Z2-only rides build aerobic base cheaply.'
        }
      },
      {
        id: 'bike-ss-1x20',
        label: 'Long + 1 × 20 SS',
        icon: 'bike',
        reason: 'One longer SS block instead of two',
        session: {
          name: 'Long bike — 1 × 20 sweet spot',
          meta: '2:00 · ~50 km',
          headline: 'Single longer SS block — mental focus',
          warmUp: '15 min easy building to Z2.',
          mainSet: [
            '40 min steady Z2',
            '20 min sweet spot — RPE 6–7, HR 145–155',
            '45 min steady Z2'
          ],
          coolDown: '10 min easy spin.',
          focus: 'Longer single block trains sustained SS discipline.',
          paces: ['Z2: RPE 3–4', 'SS: RPE 6–7, HR 145–155'],
          considerations: [
            'One 20-min block is harder mentally than 2 × 15',
            'Cap RPE at 7 — this isn\'t threshold'
          ],
          importance: 'Progression toward 2 × 20 SS. Single-block variant is a useful stepping stone.'
        }
      },
      {
        id: 'bike-vo2-6x3min',
        label: 'Bike VO2 — 6 × 3 min',
        icon: 'bike',
        reason: 'Sharper bike stimulus for variety',
        session: {
          name: 'Long bike — VO2 intervals',
          meta: '2:00 · ~45 km',
          headline: 'Hard bike intervals — a change of stimulus from steady sweet spot',
          warmUp: '15 min easy building to Z2, 3 × 1 min hard efforts to open the legs.',
          mainSet: [
            '30 min steady Z2',
            '6 × 3 min at VO2 effort (RPE 8–9) with 3 min easy spin recovery',
            '25 min steady Z2'
          ],
          coolDown: '10 min easy spin.',
          focus: 'Short, hard, repeatable efforts — different training effect to sustained sweet spot.',
          paces: ['Z2: RPE 3–4', 'VO2: RPE 8–9'],
          considerations: [
            'Good occasional variety — not a weekly habit while the run block is the priority',
            'Demanding — don\'t stack with a hard Sat run the day before'
          ],
          importance: 'VO2 bike work develops a different part of the aerobic system to sweet spot — useful variety without adding to weekly volume.'
        }
      },
      {
        id: 'bike-ss-2x20',
        label: 'Long + 2 × 20 SS',
        icon: 'bike',
        reason: 'Progression from 2 × 15',
        session: {
          name: 'Long bike — 2 × 20 sweet spot',
          meta: '2:30 · ~60 km',
          headline: 'Progressive SS — doubled blocks',
          warmUp: '15 min easy building to Z2.',
          mainSet: [
            '25 min steady Z2',
            '20 min sweet spot',
            '10 min easy recovery',
            '20 min sweet spot',
            '30 min steady Z2'
          ],
          coolDown: '10 min easy spin.',
          focus: 'Second block should match first. Discipline is the training.',
          paces: ['SS: RPE 6–7, HR 145–155', 'Z2: RPE 3–4'],
          considerations: [
            'Only progress when 2 × 15 lands cleanly',
            'Fuelling: 50g carbs/hour after first 60 min'
          ],
          importance: 'Real FTP progression. Don\'t skip the intermediate steps.'
        }
      },
      {
        id: 'partner-run-swap',
        label: 'Swap for long run (partner)',
        icon: 'run',
        reason: 'Partner\'s doing a long run',
        session: {
          name: 'Long run — partner swap',
          meta: 'Match her long run',
          headline: 'Weekend flex — long run instead of long bike',
          warmUp: 'First 1–2 km slow.',
          mainSet: 'Whatever her long run is — likely 10–14 km at conversational pace.',
          coolDown: 'Walk 5 min after. Refuel.',
          focus: 'Partner\'s pace = your easy pace. No tempo, no strides.',
          paces: ['Match her pace', 'RPE 3'],
          considerations: [
            'Log the distance in notes — I\'ll shift the bike to next week if it needs it',
            'If she\'s running fast, back off to your Z2'
          ],
          importance: 'Weekend flex. Consistency across time > perfect adherence any given week.'
        }
      },
      {
        id: 'ows-40min',
        label: 'Open water swim — 40 min',
        icon: 'swim',
        reason: 'Partner OWS or fancy the water',
        session: {
          name: 'Open water swim — 40 min steady',
          meta: '40 min · outdoor',
          headline: 'Steady OWS instead of bike',
          warmUp: '5 min easy',
          mainSet: '30 min steady aerobic',
          coolDown: '5 min easy',
          focus: 'Sighting, straight-line',
          paces: ['Steady aerobic', 'RPE 4–5'],
          considerations: ['Wetsuit if cold', 'Never solo'],
          importance: 'Race-specific OWS fitness. Bike gets bumped to a weekday if you can, otherwise skip.'
        }
      },
      {
        id: 'rest',
        label: 'Full rest',
        icon: 'rest',
        reason: 'Body needs it',
        session: {
          name: 'Rest',
          meta: 'No structured training',
          headline: 'Sunday rest',
          warmUp: '—',
          mainSet: 'No structured training. Walking fine.',
          coolDown: '—',
          focus: 'Sleep, food, family.',
          paces: [],
          considerations: ['One skipped Sunday won\'t break the block'],
          importance: 'Recovery is training.'
        }
      }
    ]
  },

  // ================================================================
  // Slot: REST (Thu, Fri optional, general rest)
  // ================================================================
  'rest': {
    title: 'Rest day alternatives',
    hint: 'Rest, mobility, or gentle movement.',
    alternates: [
      {
        id: 'rest',
        label: 'Full rest',
        icon: 'rest',
        reason: 'The default',
        session: {
          name: 'Rest',
          meta: 'No structured training',
          headline: 'Rest day',
          warmUp: '—',
          mainSet: 'No structured training. Walking and casual movement fine.',
          coolDown: '—',
          focus: 'Sleep, hydration, food.',
          paces: [],
          considerations: ['Optional 15 min mobility if restless'],
          importance: 'Rest is a training decision.'
        }
      },
      {
        id: 'mobility-20',
        label: 'Mobility — 20 min',
        icon: 'mobility',
        reason: 'Feel stiff, want to loosen up',
        session: {
          name: 'Mobility routine — 20 min',
          meta: '20 min · home',
          headline: 'Focused mobility',
          warmUp: '—',
          mainSet: [
            '5 min: hip flexor + pigeon pose',
            '5 min: hamstring + calf stretches',
            '5 min: thoracic spine mobility',
            '5 min: glute + core activation'
          ],
          coolDown: '—',
          focus: 'Range of motion maintenance.',
          paces: [],
          considerations: ['Foam roll first if you have one'],
          importance: 'Mobility maintains what running removes.'
        }
      },
      {
        id: 'walk-30',
        label: 'Walk — 30 min',
        icon: 'mobility',
        reason: 'Movement without impact',
        session: {
          name: 'Walk — 30 min',
          meta: '30 min · outdoor',
          headline: 'Gentle movement — active recovery',
          warmUp: '—',
          mainSet: '30 min brisk walk, ideally outdoors.',
          coolDown: '—',
          focus: 'Movement, daylight, headspace.',
          paces: ['Brisk walk, RPE 2'],
          considerations: ['Bring the partner or dog if you have one', 'Podcast + walk = free time'],
          importance: 'Walking after hard training days is under-rated. Blood flow, decompression, life.'
        }
      },
      {
        id: 'recovery-swim-1200',
        label: 'Recovery swim — 1200m',
        icon: 'swim',
        reason: 'Water time without stimulus',
        session: {
          name: 'Recovery swim — 1200m easy',
          meta: '1200m · 30 min',
          headline: 'Easy pool time',
          warmUp: '200m easy',
          mainSet: '800m continuous easy at 2:00–2:10 /100m',
          coolDown: '200m easy, mixed strokes',
          focus: 'Movement + rhythm.',
          paces: ['Easy: 2:00–2:10 /100m', 'RPE 2'],
          considerations: ['Good on high-volume weeks'],
          importance: 'Genuine recovery, not stimulus.'
        }
      }
    ]
  }

};

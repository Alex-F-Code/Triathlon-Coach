// =====================================================================
// COACH LIBRARY — drills, exercises, and stretching routines
// =====================================================================
// To extend: add entries to the relevant section below.
// =====================================================================

window.COACH_LIBRARY = {

  // ================================================================
  // STRETCHES — sequenced routines you can follow with a timer
  // ================================================================
  stretches: [
    {
      id: 'pre-bed',
      name: 'Pre-bed mobility flow',
      duration: '10 min',
      description: 'Full body wind-down before sleep. Calms the nervous system and targets the common training-tight areas (hips, hamstrings, lower back).',
      stretches: [
        { name: 'Cat-cow', duration: 60, cues: 'On all fours. Inhale to drop belly + look up. Exhale to round spine + look at navel. Slow, breath-driven.' },
        { name: "Child's pose", duration: 60, cues: 'Knees wide, hips back to heels, arms long forward. Forehead to floor. Breathe into your lower back.' },
        { name: "World's greatest stretch — left", duration: 45, cues: 'Lunge with left foot forward. Left elbow drops toward instep. Right arm reaches to sky. Rotate gently.' },
        { name: "World's greatest stretch — right", duration: 45, cues: 'Lunge with right foot forward. Right elbow drops toward instep. Left arm reaches to sky.' },
        { name: '90/90 hip stretch — left', duration: 60, cues: 'Both knees at 90°, front leg outside hip, back leg outside hip. Sit tall. Lean forward over the front leg.' },
        { name: '90/90 hip stretch — right', duration: 60, cues: 'Swap legs. Sit tall, lean forward.' },
        { name: 'Pigeon pose — left', duration: 60, cues: 'Left shin forward, right leg extended back. Square hips. Sink into the front hip. Keep breath steady.' },
        { name: 'Pigeon pose — right', duration: 60, cues: 'Swap. Right shin forward, left leg back.' },
        { name: 'Seated forward fold', duration: 60, cues: 'Legs extended. Hinge from hips, not lower back. Soft knees if hamstrings are tight.' },
        { name: 'Supine spinal twist — left', duration: 45, cues: 'On back. Drop both knees to the left. Arms wide. Look over right shoulder. Let gravity do the work.' },
        { name: 'Supine spinal twist — right', duration: 45, cues: 'Drop knees to the right. Look over left shoulder.' },
        { name: 'Legs up the wall', duration: 90, cues: 'Lie on back, hips close to wall, legs straight up. Stay there. Breathe.' }
      ]
    },
    {
      id: 'post-run',
      name: 'Post-run cool down',
      duration: '8 min',
      description: 'Targets the running-specific tight spots — calves, hip flexors, hamstrings, quads, IT band. Best done within 30 min of finishing.',
      stretches: [
        { name: 'Walking it out', duration: 60, cues: 'Just walk slowly. Let HR come down. Shake out the legs.' },
        { name: 'Standing calf stretch — left', duration: 45, cues: 'Wall or pole in front. Left foot back, heel down, leg straight. Lean into wall.' },
        { name: 'Standing calf stretch — right', duration: 45, cues: 'Swap. Right foot back.' },
        { name: 'Standing quad stretch — left', duration: 45, cues: 'Pull left heel toward glute. Knees together. Slight forward hip tilt to deepen.' },
        { name: 'Standing quad stretch — right', duration: 45, cues: 'Swap.' },
        { name: 'Standing hip flexor — left (lunge)', duration: 60, cues: 'Right foot forward in a lunge. Squeeze left glute and push hips slightly forward. Should feel front of left hip.' },
        { name: 'Standing hip flexor — right (lunge)', duration: 60, cues: 'Swap.' },
        { name: 'Standing hamstring — left', duration: 45, cues: 'Left heel on a low step. Hinge at hips, chest toward toes. Keep back flat.' },
        { name: 'Standing hamstring — right', duration: 45, cues: 'Swap.' },
        { name: 'Figure-4 stretch — left', duration: 45, cues: 'Sit or lie down. Left ankle over right knee. Pull right thigh in. Glute stretch.' },
        { name: 'Figure-4 stretch — right', duration: 45, cues: 'Swap.' }
      ]
    },
    {
      id: 'post-bike',
      name: 'Post-bike cool down',
      duration: '6 min',
      description: 'Specific to cycling tightness — hip flexors, quads, lower back. Counters the seated, hunched bike position.',
      stretches: [
        { name: 'Walking it out', duration: 60, cues: 'Just walk slowly off the bike.' },
        { name: 'Hip flexor on knee — left', duration: 60, cues: 'Right foot forward in kneeling lunge, left knee down. Squeeze left glute, slight forward push. Long stretch through front of hip.' },
        { name: 'Hip flexor on knee — right', duration: 60, cues: 'Swap.' },
        { name: 'Pigeon pose — left', duration: 60, cues: 'Square hips. Sink into the front (left) hip.' },
        { name: 'Pigeon pose — right', duration: 60, cues: 'Swap.' },
        { name: 'Standing quad stretch — left', duration: 45, cues: 'Pull left heel to glute. Knees together.' },
        { name: 'Standing quad stretch — right', duration: 45, cues: 'Swap.' },
        { name: 'Cat-cow', duration: 45, cues: 'On all fours. Articulate the spine — counters the bike hunch.' }
      ]
    },
    {
      id: 'hip-focused',
      name: 'Hip-focused mobility',
      duration: '8 min',
      description: "All hip openers. Tight hips drive most of the niggles runners and cyclists pick up. Do this if you've been sitting all day or after long rides.",
      stretches: [
        { name: '90/90 hip — left', duration: 60, cues: 'Front leg at 90°, back leg at 90°. Sit tall. Lean over front leg.' },
        { name: '90/90 hip — right', duration: 60, cues: 'Swap.' },
        { name: 'Lizard pose — left', duration: 60, cues: 'Lunge with left foot forward, slightly wider than hip. Hands inside foot. Sink hips down.' },
        { name: 'Lizard pose — right', duration: 60, cues: 'Swap.' },
        { name: 'Couch stretch — left', duration: 60, cues: 'Back knee against wall/couch with foot up wall. Front foot forward. Long stretch through left quad and hip flexor.' },
        { name: 'Couch stretch — right', duration: 60, cues: 'Swap.' },
        { name: 'Half-frog — left', duration: 45, cues: 'On all fours, slide left knee wide. Lower forearms down. Adductor stretch.' },
        { name: 'Half-frog — right', duration: 45, cues: 'Swap.' },
        { name: 'Pigeon — left', duration: 60, cues: 'Square hips, sink in.' },
        { name: 'Pigeon — right', duration: 60, cues: 'Swap.' }
      ]
    },
    {
      id: 'desk-break',
      name: 'Quick desk-break mobility',
      duration: '3 min',
      description: 'Mid-work-day reset. Stand up, do this, sit back down feeling less tight. Especially good before evening sessions.',
      stretches: [
        { name: 'Shoulder rolls', duration: 30, cues: 'Big slow rolls — 10 backward, 10 forward.' },
        { name: 'Standing forward fold', duration: 30, cues: 'Soft knees, hang heavy. Let head dangle.' },
        { name: 'Standing side bend — left', duration: 20, cues: 'Reach right arm overhead, lean to left. Side body stretch.' },
        { name: 'Standing side bend — right', duration: 20, cues: 'Swap.' },
        { name: 'Wrist circles + flexor stretch', duration: 30, cues: 'Wrists in circles, then press palm into wall to stretch flexors.' },
        { name: 'Standing quad stretch — left', duration: 30, cues: 'Heel to glute.' },
        { name: 'Standing quad stretch — right', duration: 30, cues: 'Swap.' },
        { name: 'Neck rolls', duration: 30, cues: 'Slow rolls. Stop if any pinching.' }
      ]
    }
  ],

  // ================================================================
  // DRILLS — swim and run technique work
  // ================================================================
  drills: {
    swim: [
      {
        name: 'Catch-up drill',
        description: 'Classic timing drill — one hand stays out front until the other touches it.',
        cues: [
          'Long stroke, full extension forward',
          'Touch your hands together at the front',
          'Focus on stretching not rushing',
          "Common mistake: dropping the front hand too early"
        ],
        whenToUse: 'Warm-up or technique-focused main set. Reinforces a long stroke.'
      },
      {
        name: 'Fingertip drag',
        description: 'Drag your fingertips along the water surface during the recovery phase.',
        cues: [
          'Encourages high-elbow recovery',
          'Relaxed wrist',
          "Actually drag, don't try to skim",
          'Keeps the stroke compact and efficient'
        ],
        whenToUse: 'Warm-up or whenever you notice the elbow dropping.'
      },
      {
        name: 'Front sculling',
        description: 'Small figure-8 movements with hands extended in front, palms down.',
        cues: [
          'Palms down, hands shoulder-width',
          'Small movements — not big sweeps',
          'Forearms close to vertical, feel water pressure',
          'Foundational for finding the catch position'
        ],
        whenToUse: 'Warm-up — wakes up the feel for the water. Or as a focused drill block.'
      },
      {
        name: 'Single-arm freestyle',
        description: 'Swim with one arm only — the other extended in front. Alternate by length.',
        cues: [
          'Exaggerates each stroke — feel the catch and pull',
          'Pull all the way through to your hip',
          'Breathe to the side of the active arm',
          'Keep the resting arm long and still'
        ],
        whenToUse: 'Technique sessions — isolates each side, exposes the weaker arm.'
      },
      {
        name: '6-1-6 drill',
        description: 'Six kicks on one side, one full stroke, six kicks on the other side.',
        cues: [
          'Tests body position on each side',
          'Lower hand reaches forward, upper hand at hip',
          'Look at the bottom of the pool, not forward',
          'Builds rotation and body awareness'
        ],
        whenToUse: 'When body position needs work, particularly if one side is dropping.'
      },
      {
        name: 'Side kick',
        description: "Kick on your side with bottom arm extended forward, top arm at hip.",
        cues: [
          'Look at the bottom of the pool',
          'Hips stacked over each other',
          'Strong kick from the hips, not the knees',
          'Builds body position and balance'
        ],
        whenToUse: 'Warm-up or as part of a kick set.'
      }
    ],
    run: [
      {
        name: 'A-skips',
        description: 'Skipping forward with high knee drive and opposite arm swing.',
        cues: [
          'Knee comes up to hip height',
          'Land on the ball of your foot',
          'Quick ground contact, immediate next step',
          'Arms drive opposite to knees'
        ],
        whenToUse: 'Run warm-up before any quality session. Neuromuscular activation.'
      },
      {
        name: 'B-skips',
        description: 'Like A-skips but with a forward leg extension and a sweep-down at the top.',
        cues: [
          'Adds a paw-back motion at the top of the knee drive',
          'Builds hamstring activation',
          'Slower and more deliberate than A-skips',
          'Useful for improving running form economy'
        ],
        whenToUse: 'Warm-up before quality sessions.'
      },
      {
        name: 'High knees',
        description: 'Run on the spot or moving forward with knees coming up high.',
        cues: [
          'Knee to hip height',
          'Quick turnover',
          'Stay tall through the torso',
          'Arms drive aggressively'
        ],
        whenToUse: 'Activation, last part of warm-up before fast work.'
      },
      {
        name: 'Strides',
        description: '~100m efforts at roughly 5K–mile race pace, fully recovered between each.',
        cues: [
          'Build the first 30m, hold the middle 40m, decelerate the last 30m',
          'Not a sprint — relaxed fast',
          'Walk back to fully recover (~60s)',
          'Focus on form and turnover, not maximum speed'
        ],
        whenToUse: 'After warm-up before quality sessions. Also on easy days for form maintenance — 4–6 of them in the last km of an easy run.'
      },
      {
        name: 'Bounding',
        description: 'Exaggerated running with long ground contact and powerful push-off.',
        cues: [
          'Drive aggressively off the back leg',
          'Stay tall — no leaning',
          'Focus on power, not speed',
          '5–6 reps of 20–30m'
        ],
        whenToUse: 'Strength-oriented warm-up, hill session prep, or as a stand-alone power session.'
      }
    ]
  },

  // ================================================================
  // S&C EXERCISES — compound, accessory, core
  // ================================================================
  strength: {
    compound: [
      {
        name: 'Back squat',
        description: 'Barbell on upper back, descend to parallel or below.',
        cues: [
          'Brace abs hard before descent',
          'Knees track over toes — don\'t let them collapse in',
          'Chest up, weight in the midfoot',
          'Drive through the hips out of the bottom'
        ],
        sets: '4 × 6–8 for strength · 3 × 8–12 for endurance'
      },
      {
        name: 'Goblet squat',
        description: 'Hold a dumbbell or kettlebell at chest, squat.',
        cues: [
          'Easier to learn than barbell — great if new',
          'Keep elbows tucked under the weight',
          'Sit between your hips, not back',
          'Great as a warm-up or accessory'
        ],
        sets: '3 × 8–12'
      },
      {
        name: 'Romanian deadlift (RDL)',
        description: 'Hip hinge with slight knee bend. Barbell or dumbbells.',
        cues: [
          'Hips back, not down',
          'Bar stays close to legs throughout',
          'Stop when hamstring stretch limits you — don\'t round',
          'Drive hips forward to return to standing'
        ],
        sets: '3 × 8–10'
      },
      {
        name: 'Bench press',
        description: 'Barbell or dumbbell press on a flat bench.',
        cues: [
          'Shoulder blades pinched together, planted',
          'Bar to mid-chest, not throat',
          'Feet driving into the floor — full body tension',
          'Don\'t bounce off the chest'
        ],
        sets: '4 × 6–8'
      },
      {
        name: 'Overhead press',
        description: 'Press barbell or dumbbells overhead from shoulders.',
        cues: [
          'Brace core hard',
          'Press through the bar, not up',
          'Don\'t lean back',
          'Lockout overhead with bar slightly forward of head'
        ],
        sets: '3 × 6–8'
      },
      {
        name: 'Bulgarian split squat',
        description: 'Rear foot elevated, descend on the front leg.',
        cues: [
          'Front shin should be near-vertical at the bottom',
          'Front knee tracks over toes',
          'Hips facing forward — don\'t twist',
          'Pause briefly at the bottom'
        ],
        sets: '3 × 8–10 each leg'
      },
      {
        name: 'Pull-ups (or lat pulldown)',
        description: 'Vertical pull from arms extended to chin over the bar.',
        cues: [
          'Engage lats before pulling',
          'Chest to bar, not bar to chin',
          'Control the descent',
          'Lat pulldown is a fine substitute if pull-ups aren\'t there yet'
        ],
        sets: '4 × 5–8 (or AMRAP)'
      }
    ],
    accessory: [
      {
        name: 'Calf raises',
        description: 'Rise onto the balls of your feet, full range.',
        cues: [
          'Full range — heels below toes if on a step',
          'Pause at the top',
          'Slow descent (count to 3)',
          'Single-leg variations are harder and more useful'
        ],
        sets: '3 × 12 (or 3 × 8 single-leg)'
      },
      {
        name: 'Single-arm row',
        description: 'Pull a dumbbell from arm extended to ribs, hinged over.',
        cues: [
          'Brace core, hinge slightly forward',
          'Pull elbow back, not up',
          'Squeeze shoulder blade at the top',
          'Don\'t twist the body'
        ],
        sets: '3 × 8 each side'
      },
      {
        name: 'Hip thrust',
        description: 'Upper back on a bench, drive hips up with weight on lap.',
        cues: [
          'Upper back on bench, feet flat',
          'Drive through heels',
          'Squeeze glutes hard at the top',
          'Knees track over toes'
        ],
        sets: '3 × 10'
      },
      {
        name: 'Single-leg RDL',
        description: 'Hinge on one leg, the other extends behind for counterbalance.',
        cues: [
          'Hinge on one leg, other extends behind',
          'Stay square to the floor — don\'t rotate',
          'Slight bend in standing leg',
          'Tougher than it looks — start light'
        ],
        sets: '3 × 8 each leg'
      }
    ],
    core: [
      {
        name: 'Plank',
        description: 'Hold a rigid straight body position on forearms or hands.',
        cues: [
          'Straight line from head to heels',
          'Squeeze glutes and quads',
          'Don\'t let hips sag or pike up',
          'Breathe normally'
        ],
        sets: '3 × 30–60s'
      },
      {
        name: 'Dead bug',
        description: 'On back, alternate lowering opposite arm and leg.',
        cues: [
          'Lower back pressed to floor throughout',
          'Slow controlled movements',
          'Opposite arm and leg lower together',
          'Stop if back lifts'
        ],
        sets: '3 × 8 each side'
      },
      {
        name: 'Pallof press',
        description: 'Hold cable or band at chest, press straight out — resist rotation.',
        cues: [
          'Anti-rotation core work',
          'Resist the cable pulling you sideways',
          'Press straight out, return slow',
          'Hips and shoulders stay square'
        ],
        sets: '3 × 10 each side'
      },
      {
        name: 'Hanging leg raise',
        description: 'Hang from bar, raise legs up.',
        cues: [
          'Hang from bar with active grip',
          'Avoid swinging — control the rep',
          'Knees up first, progress to straight legs',
          'Control the descent — that\'s where the work is'
        ],
        sets: '3 × 8–12'
      },
      {
        name: 'Side plank',
        description: 'Plank on one side, supported by forearm and feet.',
        cues: [
          'Stack feet on top of each other',
          'Hips up — don\'t sag',
          'Straight line from head to feet',
          'Drive top hand toward ceiling for a harder variation'
        ],
        sets: '3 × 30s each side'
      }
    ]
  }
};

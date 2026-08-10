// =====================================================================
// COACH PLANS — all weekly training plan data
// =====================================================================
// To add a new week: append a new entry to the `weeks` array below.
// The most recently-added week is shown by default when the page loads.
// =====================================================================

window.COACH_PLANS = {

  // Your own email — used for the "Email a copy to myself" button on the check-in form.
  // Change this when you move to a personal email post-Newton.
  userEmail: 'alexander.field@newtoneurope.com',

  // The committed goal — shown in the sidebar with a live countdown.
  // Update raceWindow to the real date once a race is booked.
  goal: {
    label: 'Sub-37 10K',
    raceWindow: '2027-01-15',
    racePace: '3:42 /km'
  },

  weeks: [

    // ================================================================
    // WEEK 1 — Foundation (18–24 May 2026)
    // ================================================================
    {
      id: 'w01',
      number: 1,
      title: 'Foundation',
      dateRange: '18–24 May',
      year: 2026,
      todayId: null, // historical week — no "today" highlight
      archived: true,
      stats: {
        runKm: '~31 km',
        bikeKm: '~100 km',
        swimM: '~1800m',
        totalHours: '~6:30'
      },
      focusHtml: 'Foundation week of the block. First quality stimuli across all three disciplines. Restructured mid-week: football replaced Mon run quality, Saturday long run gained a threshold finish.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '18 May',
          name: 'Football + Upper S&C', meta: '60 + 50 min',
          sessions: [
            {
              name: 'Football (5-a-side)', meta: '60 min',
              headline: 'Anaerobic stimulus from football — Monday quality',
              warmUp: '5–10 min jog + dynamic mobility + 3–4 sharp accelerations building to 80–90%.',
              mainSet: 'Play normally. Repeat sprints, change of direction, anaerobic work.',
              focus: 'Warm up properly — change of direction without warm-up is the top injury vector.',
              paces: ['Intermittent intensity', 'Anaerobic stimulus'],
              considerations: [
                'Rehydrate post-game',
                'Eat within 60 min (carbs + protein)',
                'Light walk to settle'
              ],
              importance: 'Football covers the anaerobic stimulus that Monday run intervals would otherwise provide. Structured threshold work moves to Saturday this week and going forward.'
            },
            {
              name: 'Upper body S&C', meta: '45–60 min',
              headline: 'Compound-focused upper body — same day as football',
              warmUp: '5 min dynamic mobility before lifting.',
              mainSet: [
                'Bench press: 4 × 6–8',
                'Pull-ups or lat pulldown: 4 × 6–8',
                'Overhead press: 3 × 8',
                'Single-arm row: 3 × 8 each side',
                'Core: 3 sets plank variation or ab wheel'
              ],
              focus: 'Progressive overload — add a small load or one rep from last similar session.',
              paces: ['Compounds: 6–8 reps', 'Rest 90s between sets'],
              considerations: ['Lift before or after football, not during'],
              importance: 'Upper body S&C maintains muscle mass through endurance training. Two S&C sessions per week is the minimum effective dose.'
            }
          ]
        },
        {
          id: 'tue', day: 'Tue', date: '19 May',
          name: 'Easy run', meta: '8 km · 45 min',
          sessions: [{
            name: 'Easy run', meta: '8 km · 45 min',
            headline: 'Aerobic stimulus + active recovery from football',
            warmUp: 'First km deliberately slow to let HR settle.',
            mainSet: 'Continuous 8 km at easy aerobic pace.',
            focus: 'Conversational throughout — the most important rule of easy runs is making them easy.',
            paces: ['4:45–5:15 /km', 'HR <145', 'RPE 3'],
            considerations: [
              'Drop to 6 km if legs feel rough from football',
              'Optional 15–20 min mobility in evening',
              'Swap for recovery swim if legs really hammered'
            ],
            importance: 'Easy days build aerobic base without adding fatigue. Discipline here makes Saturday quality possible.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '20 May',
          name: 'Swim — technique + aerobic', meta: '1800m · 50 min',
          sessions: [{
            name: 'Swim — technique + aerobic', meta: '1800m · 50 min',
            headline: 'First swim of the block — technique-first focus',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '100m choice, building gradually'
            ],
            mainSet: [
              '2 × 50m catch-up drill with 20s rest — long stroke, one hand waits',
              '2 × 50m fingertip drag with 20s rest — high elbow recovery',
              '2 × 50m 6-1-6 drill with 20s rest — body position, rotation',
              '8 × 100m steady aerobic at 1:55–2:00 with 20s rest',
              '4 × 50m moderate, build the 2nd 25m with 20s rest',
              '100m easy cool-down'
            ],
            focus: 'Body position — swim "downhill" with head low, hips up, eyes on the bottom.',
            paces: ['Steady: 1:55–2:00 /100m', 'Easy: 2:05–2:15 /100m'],
            considerations: ['Bring a kickboard', 'Focus on body position cue throughout'],
            importance: 'At your level, swim gains come from technique not fitness. Drills compound — every session this block has them.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '21 May',
          name: 'Rest', meta: 'No structured exercise', rest: true,
          sessions: [{
            name: 'Rest', meta: 'No structured exercise',
            headline: 'Full rest day',
            warmUp: '—',
            mainSet: 'No structured exercise.',
            focus: 'Sleep, food, hydration.',
            paces: [],
            considerations: ['Walking fine', 'Foam roll, light stretching, sauna OK'],
            importance: 'Adaptation happens during recovery. Skipping rest days is the fastest route to injury or stalled progress.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '22 May',
          name: 'Bike + Lower S&C', meta: '60 + 50 min',
          sessions: [
            {
              name: 'Bike sweet spot', meta: '60 min',
              headline: '2 × 15 min sweet spot — classic re-entry session',
              warmUp: ['15 min easy spinning', '3 × 30s building accelerations'],
              mainSet: [
                '15 min at RPE 6–7 (sweet spot)',
                '5 min easy spin recovery',
                '15 min at RPE 6–7',
                '10 min easy cool-down'
              ],
              focus: 'Sweet spot is comfortably hard — short sentences possible.',
              paces: ['RPE 6–7', 'HR 140–155'],
              considerations: ['Indoor trainer easier to control', 'Outdoor fine on uninterrupted route'],
              importance: 'Sweet spot drives aerobic adaptation without trashing you. 2×15 is the classic dose.'
            },
            {
              name: 'Lower body S&C', meta: '50 min',
              headline: 'Compound-focused lower body',
              warmUp: '5 min dynamic mobility',
              mainSet: [
                'Back squat or goblet squat: 4 × 6–8',
                'Romanian deadlift: 3 × 8',
                'Bulgarian split squat: 3 × 8 each leg',
                'Calf raises: 3 × 12',
                'Core: 3 sets'
              ],
              focus: 'Form before load.',
              paces: ['Compounds: 6–8 reps', 'Rest 90s between sets'],
              considerations: ['Lift AFTER the bike'],
              importance: 'Maintains muscle mass through endurance volume.'
            }
          ]
        },
        {
          id: 'sat', day: 'Sat', date: '23 May',
          name: 'Long run', meta: '14 km · 75 min',
          sessions: [{
            name: 'Long run with threshold finish', meta: '14 km · 75 min',
            headline: 'Long run with 4 km threshold — restructured mid-week',
            warmUp: 'First 1–2 km deliberately slow.',
            mainSet: [
              '9 km easy at 4:45–5:00 /km',
              '4 km at 4:00–4:05 /km threshold',
              '1 km easy cool-down'
            ],
            focus: 'Even effort across the threshold block — first km should feel almost too easy.',
            paces: ['Easy: 4:45–5:00 /km', 'Threshold: 4:00–4:05 /km'],
            considerations: ['Bail rule: 1 km in and threshold feels wrong, run easy'],
            importance: 'Restructured mid-week from "easy long run" to add quality, since football replaced Monday intervals. Saturday becomes the primary structured run quality day.'
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '24 May',
          name: 'Long bike + brick', meta: '2h + 15 min',
          sessions: [
            {
              name: 'Long bike', meta: '2 hours',
              headline: 'Z2 endurance ride at all-day pace',
              warmUp: 'First 10 min very easy.',
              mainSet: '2 hours at Z2 (RPE 3–4, HR 130–145).',
              focus: 'All-day pace — finish thinking you could do another hour.',
              paces: ['Z2 / RPE 3–4', 'HR 130–145'],
              considerations: ['Fuel 30–60g carbs/hour'],
              importance: 'Builds the aerobic engine that everything else stands on.'
            },
            {
              name: 'Brick run', meta: '15 min',
              headline: 'Easy run off the bike',
              warmUp: 'Change shoes within 5 min of finishing the bike.',
              mainSet: '15 min at 4:50–5:10 /km.',
              focus: 'High cadence (180+ steps/min) to find run legs faster.',
              paces: ['4:50–5:10 /km', 'Cadence 180+'],
              considerations: ['Legs feel weird for first 5 min — normal'],
              importance: 'Brick run trains the off-bike legs — unique skill, doesn\'t develop any other way.'
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 2 — Consolidate (25–31 May 2026)
    // ================================================================
    {
      id: 'w02',
      number: 2,
      title: 'Consolidate',
      dateRange: '25–31 May',
      year: 2026,
      todayId: null, // historical week — no "today" highlight
      archived: true,
      stats: {
        runKm: '~31 km',
        bikeKm: '~100 km',
        swimM: '~1900m',
        totalHours: '~6:30'
      },
      focusHtml: 'Re-execute what got missed in Week 1. Same volumes — no notch up until you land a clean week. The two non-negotiables were <strong>Friday</strong> (bike) and <strong>Saturday</strong> (threshold). Fri missed again — confirmed structural problem.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '25 May',
          name: 'Open water swim', meta: '45 min',
          sessions: [{
            name: 'Open water swim', meta: '45 min',
            headline: 'Triathlon-specific stimulus — added as bonus',
            warmUp: 'Easy front crawl from the shore for 5 min, gradually building tempo.',
            mainSet: '45 min continuous open water freestyle.',
            focus: 'Body position high in the water and sighting every 6–8 strokes.',
            paces: ['Effort: easy to moderate', 'No specific pace targets'],
            considerations: [
              'Wetsuit if water below 18°C',
              'Stay close to safety buoys',
              'Practice bilateral breathing'
            ],
            importance: 'Smart triathlon-specific call. Open water is meaningfully harder than pool — sighting, chop, no walls.'
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '26 May',
          name: 'Easy run', meta: '6 km · 35 min',
          sessions: [{
            name: 'Easy run', meta: '6 km · 35 min',
            headline: 'Light shake-out — four days in a row, keep it easy',
            warmUp: 'First 1 km deliberately slow.',
            mainSet: 'Continuous 6 km at easy aerobic pace.',
            focus: 'Conversational effort throughout.',
            paces: ['4:50–5:10 /km', 'HR <145', 'RPE 3'],
            considerations: [
              'Drop to 5 km if legs feel rough from the bike block',
              'Swap for 20 min mobility if hammered'
            ],
            importance: 'Easy days build aerobic base without adding fatigue. Most amateurs run easy days too hard — discipline here pays off Saturday.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '27 May',
          name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
          sessions: [{
            name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
            headline: 'Updated pace targets — main set sped up after Week 1 strong session',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '100m build to moderate'
            ],
            mainSet: [
              '2 × 50m front sculling with 20s rest — catch position',
              '2 × 50m single-arm freestyle with 20s rest — full pull',
              '2 × 50m catch-up with 20s rest — long stroke',
              '8 × 100m at 1:45–1:50 with 20s rest — steady aerobic',
              '4 × 50m at 1:40–1:45 with 30s rest — build the 2nd 25m',
              '200m easy cool-down'
            ],
            focus: 'Feel the catch — fingers point down before pulling.',
            paces: ['Main: 1:45–1:50 /100m', 'Speed: 1:40–1:45 /100m'],
            considerations: ['Drill focus shifts to catch + pull (sculling, single-arm)'],
            importance: 'You held 1:45 for 8×100m off 20s — significantly faster than the 1:55–2:00 I prescribed Week 1. Targets bumped permanently.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '28 May',
          name: 'Rest', meta: 'No structured exercise', rest: true,
          sessions: [{
            name: 'Rest', meta: 'No structured exercise',
            headline: 'Full rest day',
            warmUp: '—',
            mainSet: 'No structured exercise.',
            focus: 'Sleep, food, hydration.',
            paces: [],
            considerations: ['Walking fine', 'Foam roll, light stretching, sauna OK'],
            importance: 'Adaptation happens during recovery. Non-negotiable.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '29 May',
          name: 'Bike + Lower S&C', meta: '60 + 50 min (MISSED)',
          sessions: [
            {
              name: 'Bike sweet spot', meta: '60 min',
              headline: 'Sweet spot intervals — MISSED this week (no time)',
              warmUp: ['15 min easy spinning', '3 × 30s building'],
              mainSet: [
                '15 min at RPE 6–7',
                '5 min easy spin',
                '15 min at RPE 6–7',
                '10 min easy cool-down'
              ],
              focus: 'Was planned. Did not happen — second consecutive miss flagged as structural.',
              paces: ['RPE 6–7', 'HR 140–155'],
              considerations: ['Fallback: 30-min indoor with 2×10 sweet spot'],
              importance: 'Two consecutive misses confirmed Friday as a structural problem. Bike intensity will move to Sunday in the post-holiday redesign.'
            },
            {
              name: 'Lower body S&C', meta: '50 min',
              headline: 'Lower S&C — MISSED this week',
              warmUp: '5 min dynamic mobility',
              mainSet: [
                'Squat: 4 × 6–8',
                'RDL: 3 × 8',
                'Bulgarian split squat: 3 × 8 each leg',
                'Calf raises: 3 × 12',
                'Core: 3 sets'
              ],
              focus: 'Did not happen — only got one S&C session this week.',
              paces: [],
              considerations: ['Need to find a permanent home for this session post-holiday'],
              importance: 'Without lower S&C, the muscle-mass retention drops to one session per week. Below minimum effective dose.'
            }
          ]
        },
        {
          id: 'sat', day: 'Sat', date: '30 May',
          name: 'Long run + threshold', meta: '14 km · 75 min',
          sessions: [{
            name: 'Long run with threshold finish', meta: '14 km · 75 min',
            headline: 'Replaced with easy 30 km bike + 3 km brick at 4:20',
            warmUp: 'Was meant to be: first 1–2 km deliberately slow.',
            mainSet: [
              'Planned: 9 km easy at 4:45–5:00 /km',
              'Planned: 4 km at 4:00–4:05 /km threshold',
              'Planned: 1 km easy cool-down'
            ],
            focus: 'Did not happen — substituted with bike + brick.',
            paces: ['Easy: 4:45–5:00 /km', 'Threshold: 4:00–4:05 /km'],
            considerations: ['No structured run quality this week as a result'],
            importance: 'Saturday was meant to be the primary run quality day. Substituting bike + brick means losing the threshold stimulus for the week.'
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '31 May',
          name: 'Long bike + brick', meta: '70 km easy',
          sessions: [
            {
              name: 'Long bike', meta: '~2.5 hours, 70 km',
              headline: 'Big aerobic ride — went a bit longer than 2hr',
              warmUp: 'First 10 min very easy.',
              mainSet: '70 km at Z2 — solid aerobic stimulus.',
              focus: 'All-day pace — held discipline despite duration.',
              paces: ['Z2 / RPE 3–4', 'HR 130–145'],
              considerations: ['Sat + Sun combined was 100 km of aerobic bike — biggest bike block of the block'],
              importance: 'Strong aerobic stimulus on the bike. Felt strong in cycling per check-in.'
            },
            {
              name: 'Brick run', meta: 'Skipped',
              headline: 'Brick run — not done',
              warmUp: '—',
              mainSet: 'Skipped after long ride.',
              focus: '—',
              paces: [],
              considerations: ['OWS done Monday counted as triathlon-specific stimulus instead'],
              importance: 'Brick was the most expendable session — appropriate to drop given the long bike.'
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 3 — Pre-holiday compressed (1–7 June 2026)
    // ================================================================
    {
      id: 'w03',
      number: 3,
      title: 'Pre-holiday compressed',
      dateRange: '1–7 June',
      year: 2026,
      todayId: null,
      stats: {
        runKm: '~28 km',
        bikeKm: '0 km',
        swimM: '~1900m',
        totalHours: '~3:30'
      },
      focusHtml: 'Compressed pre-holiday week. Land <strong>Mon–Thu</strong> cleanly with two quality stimuli (Tue threshold reps, Thu long run + tempo). Friday confirmed as a structural problem — accepting the rest. Sat travel, Sun holiday begins. Template gets redesigned for your return.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '1 Jun',
          name: 'Easy run', meta: '5–6 km · 30 min',
          sessions: [{
            name: 'Easy run', meta: '5–6 km · 30 min',
            headline: 'Light shake-out — heavy legs, no quality today',
            warmUp: 'First km deliberately slow to let HR settle.',
            mainSet: '5–6 km at easy aerobic pace, continuous effort.',
            focus: 'Conversational throughout. Heavy legs at easy pace is useful aerobic work — teaches recovery.',
            paces: ['4:50–5:10 /km', 'HR <145', 'RPE 3'],
            considerations: [
              'Drop to 4 km if legs are really hammered',
              'Swap for 20 min mobility if running feels wrong',
              "Don't chase pace — easy is the work today",
              'Football skipped this Monday — quality threshold reps move to Tuesday'
            ],
            importance: "Skipping quality reps today preserves Tuesday's threshold session. Heavy legs at easy pace adds aerobic volume without taking from the engine. A wasted hard session is worse than a smart easy one."
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '2 Jun',
          name: 'Run quality — 4 × 1km', meta: '10 km · 60 min',
          sessions: [{
            name: 'Run quality — 4 × 1km threshold', meta: '10 km · 60 min',
            headline: 'Main quality run of the week — threshold reps',
            warmUp: [
              '15 min easy jog at 5:00–5:15/km',
              '4 × 100m strides on a flat stretch — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 4:00–4:05/km — controlled hard, RPE 7',
              '90s easy jog recovery — HR drops to <145',
              '1 km at 4:00–4:05/km — same effort as rep 1',
              '90s easy jog recovery',
              '1 km at 4:00–4:05/km — hold form, don\'t push pace',
              '90s easy jog recovery',
              '1 km at 4:00–4:05/km — finish strong but controlled',
              '10 min easy jog cool-down'
            ],
            focus: 'Even effort across all 4 reps. Three-to-four word sentences only. First rep should feel almost too easy — that means you\'ve paced it right.',
            paces: ['Reps: 4:00–4:05 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              'Even effort > faster start — first rep should feel sustainable',
              "If rep 4 needs to be 4:05, that's fine — even effort wins",
              'HR should recover to <145 between reps',
              'Bail rule: if rep 1 already feels wrong, do 3 × 1km instead'
            ],
            importance: 'Your main run quality stimulus for the week. With Monday football skipped, this carries the threshold work. Threshold sessions are where the aerobic ceiling lifts — non-negotiable for getting faster.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '3 Jun',
          name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
          sessions: [{
            name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
            headline: 'Technique-led aerobic swim with updated pace targets',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board — small fast kicks from the hips, not knees',
              '100m build to moderate pace'
            ],
            mainSet: [
              '2 × 50m front sculling with 20s rest — focus on the catch position, palms down with small figure-8 motions',
              '2 × 50m single-arm freestyle (25m each arm) with 20s rest — full pull all the way through the hip',
              '2 × 50m catch-up drill with 20s rest — long stroke, one hand waits out front until the other touches it',
              '8 × 100m at 1:45–1:50 with 20s rest — steady aerobic, smooth and sustainable stroke',
              '4 × 50m at 1:40–1:45 pace with 30s rest — build the 2nd 25m of each rep stronger',
              '200m easy cool-down'
            ],
            focus: 'Feel the catch — fingers point down before you start pulling, water "sticks" to your forearm.',
            paces: ['Main: 1:45–1:50 /100m', 'Speed: 1:40–1:45 /100m', 'Easy: 2:05–2:15 /100m'],
            considerations: [
              'Bring a kickboard',
              'Front sculling is the key drill this week',
              'Effort builds gradually across the main set — last 2 reps push to 1:43',
              'Last pool swim before holiday — sea/lake swim during holiday is bonus if possible'
            ],
            importance: 'At your level (14:30 / 800m), swim gains come from technique not fitness. Drills compound — 20% of session time on drills returns most of the long-term gain. Catch is where the most untapped speed lives for you.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '4 Jun',
          name: 'Long run with tempo finish', meta: '12 km · 60 min',
          sessions: [{
            name: 'Long run + tempo', meta: '12 km · 60 min',
            headline: 'Compressed long run with 3 km tempo finish — moved from Saturday',
            warmUp: 'First 1–2 km deliberately slow — let HR rise naturally to easy zone.',
            mainSet: [
              "9 km easy at 4:45–5:00 /km (HR <150) — settle into rhythm, don't chase pace",
              '3 km at 4:10–4:15 /km tempo (HR 155–165) — marathon pace effort, "comfortably hard but conversational in bursts"'
            ],
            focus: "Tempo is softer than threshold — marathon pace, not 10K race pace. Don't go off too fast.",
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:15 /km', 'Tempo HR: 155–165'],
            considerations: [
              "Moved from Saturday — you're travelling",
              "Compressed in length (12 km not 14) and softened in intensity (tempo not threshold) — don't burn a match before holiday",
              'Bail rule: 1 km into tempo and it feels wrong, run the rest easy',
              'Eat 1–2 hours before — long run on fumes is a misery'
            ],
            importance: "Final long run before two-week pause. Tempo finish trains aerobic capacity at sub-threshold — useful stimulus that doesn't take a week to recover from. Lighter than full threshold so you arrive at holiday fresh, not fried."
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '5 Jun',
          name: 'Rest / mobility', meta: 'No structured exercise', rest: true,
          sessions: [{
            name: 'Rest / mobility', meta: 'Travel prep',
            headline: 'True rest day — pack and prepare for travel',
            warmUp: '—',
            mainSet: 'No structured exercise.',
            focus: 'Sleep, hydration, packing. No expectations.',
            paces: [],
            considerations: [
              'Optional: 20 min mobility, stretching, foam roll',
              'Sauna or extra sleep both fine',
              'Friday confirmed as a structural problem — accepting rest here removes the guilt of skipping',
              'Saves stress for travel day tomorrow'
            ],
            importance: "Rest before travel is more useful than forcing a session. With Friday confirmed as a continued miss, planning rest here removes the guilt of skipping. We'll redesign the week template post-holiday so Friday isn't a required day."
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '6 Jun',
          name: 'Travel — optional jog', meta: '30–40 min optional',
          sessions: [{
            name: 'Optional easy jog', meta: '30–40 min',
            headline: 'Travel day — optional shake-out jog if time and energy allow',
            warmUp: '—',
            mainSet: '30–40 min easy jog at 5:00–5:30 /km if you fit it in.',
            focus: 'Movement only — no targets, no pace pressure.',
            paces: ['Easy 5:00–5:30 /km', 'RPE 2–3'],
            considerations: [
              'Before or after travel — whichever fits',
              'Skip without guilt if travel is heavy',
              'Holiday officially begins Sunday',
              'Trainers + 30 min is all you need'
            ],
            importance: "Optional shake-out resets legs after Thursday's long run and before sitting on a plane/car for hours. Quality-of-life session — not training. Skipping is fine."
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '7 Jun',
          name: 'Holiday begins', meta: 'Plan paused 2 weeks', rest: true,
          sessions: [{
            name: 'Holiday begins', meta: 'Plan paused for 2 weeks',
            headline: 'Plan paused — 2 weeks holiday until 21 June',
            warmUp: '—',
            mainSet: 'No structured training. Minimum-effective-dose options below if motivated.',
            focus: 'Re-enter fresh Week 4 — not detrained, not exhausted.',
            paces: [],
            considerations: [
              'Min effective dose: 2 easy runs per week, 30–45 min each, all easy',
              'Bonus: 1 bodyweight S&C (20 min) — push-ups, lunges, single-leg RDLs, planks',
              'Bonus: swim if pool/sea available — play, no structure',
              'Walking, hiking, sightseeing cycling all count as aerobic',
              'Doing nothing = 5–10% fitness loss, ~1 week to recover',
              'Doing minimum = re-enter cleanly with no rebuild needed'
            ],
            importance: 'Recovery and adaptation happen during rest. Two weeks off is more useful than two weeks of forced training when life is disrupted. Re-entry Week 4 (16 June) will be lighter to ease back in, with a restructured weekly template that drops Friday as a required day.'
          }]
        }
      ]
    },

    // ================================================================
    // WEEK 4 — Re-entry (22–28 June 2026)
    // ================================================================
    {
      id: 'w04',
      number: 4,
      title: 'Re-entry',
      dateRange: '22–28 June',
      year: 2026,
      todayId: null,
      stats: {
        runKm: '~12 km',
        bikeKm: '~45 km',
        swimM: '0m',
        totalHours: '~4:00'
      },
      focusHtml: 'First week back after a 2.5 week pause. <strong>No quality, no swim.</strong> Wed home S&amp;C wakes the body up, Fri easy run + Sat light option + Sun long Z2 bike rebuilds aerobic minutes. Volume ~60% of pre-holiday baseline. Week 5 returns to normal structure with the Friday redesign baked in.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '22 Jun',
          name: 'Travel / rest', meta: 'No training', rest: true,
          sessions: [{
            name: 'Travel / rest', meta: 'Holiday end',
            headline: 'Tail end of holiday — no training expected',
            warmUp: '—',
            mainSet: 'Rest day. Movement only if it fits — walking, packing, travel.',
            focus: 'Sleep, hydrate, eat properly.',
            paces: [],
            considerations: [
              'Travel days are their own load',
              'No guilt about doing nothing today'
            ],
            importance: "Returning home is its own stress. No training here is the smart call — protects the energy for the rest of the week."
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '23 Jun',
          name: 'Optional easy movement', meta: '20–30 min if wanted', rest: true,
          sessions: [{
            name: 'Optional movement', meta: '20–30 min',
            headline: 'Optional light reset — no real training stimulus',
            warmUp: '—',
            mainSet: '20–30 min easy walk, light yoga, or mobility routine. Pick whatever fits.',
            focus: 'Movement only. Skip without guilt if travel-tired.',
            paces: ['RPE 1–2'],
            considerations: [
              'Walking, foam roll, mobility all count',
              'No real stimulus expected — just blow off the rust',
              'Skip entirely if knackered'
            ],
            importance: "Two weeks off plus travel is a real load. Optional easy movement is a hand on the wheel, not a session."
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '24 Jun',
          name: 'Home S&C — bodyweight', meta: '30 min · home',
          sessions: [{
            name: 'Home S&C — bodyweight', meta: '30 min · home',
            headline: 'First session back — gentle full-body movement, no impact',
            warmUp: '5 min: arm circles, leg swings, hip openers, walk on the spot — wake the joints up before loading them.',
            mainSet: [
              '3 rounds (no equipment needed, 60s rest between rounds):',
              '12 bodyweight squats — slow, controlled, knees track over toes',
              '8 push-ups — knees or full, whichever lets you keep form',
              '10 reverse lunges (5 each leg) — step back, drop straight down',
              '8 single-leg RDLs each leg — slow, balance-focused (hand on wall is fine)',
              '30s plank hold — ribs down, glutes squeezed'
            ],
            focus: 'Move well. This is technique re-entry, not a workout to push hard.',
            paces: ['RPE 4–5', 'Form > speed'],
            considerations: [
              'No equipment needed — living room, hotel, anywhere works',
              'Drop to 2 rounds if shoulders or legs feel stiff after the first',
              'Single-leg RDLs: use a chair or wall for balance — no shame',
              'This is the first session back — gentle is the point, not the compromise'
            ],
            importance: "Two weeks off detunes more than people expect. Bodyweight S&C wakes the neuromuscular system without taxing the cardiovascular engine. Sets up cleaner running later in the week — running into Friday with cold legs is asking for a niggle."
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '25 Jun',
          name: 'Rest', meta: 'Usual rest day', rest: true,
          sessions: [{
            name: 'Rest', meta: 'Usual rest day',
            headline: 'Thursday rest day stays a rest day',
            warmUp: '—',
            mainSet: 'No structured training. Walking and casual movement fine.',
            focus: 'Sleep, hydration, food.',
            paces: [],
            considerations: [
              'Optional 20 min mobility or foam roll if you fancy it',
              'Don\'t use the time off to do an extra session — rest is the training today'
            ],
            importance: "Rest day stays a rest day even after time off. Protects the building stimulus across Fri/Sat/Sun — three light sessions back to back need a fresh start."
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '26 Jun',
          name: 'Easy run — re-entry', meta: '5–6 km · 30 min',
          sessions: [{
            name: 'Easy run — re-entry', meta: '5–6 km · 30 min',
            headline: 'First run back — conversational only, no targets',
            warmUp: '1 km deliberately slow — let HR settle and let the legs find their rhythm.',
            mainSet: '5–6 km continuous at easy pace, conversational throughout.',
            focus: "Pace will feel weird after 2.5 weeks off — that's normal. Effort is the metric, not pace.",
            paces: ['5:00–5:30 /km', 'HR <150', 'RPE 3–4'],
            considerations: [
              'Pace likely 10–20 sec/km slower than pre-holiday — expected and fine',
              'Drop to 4 km if legs feel sluggish — finish wanting more',
              'Morning run is great — sets the day and beats the heat',
              'Bail rule: if anything actively hurts (not just tight), walk it home'
            ],
            importance: "First run back is diagnostic, not training. The point is to see how the legs respond — sharp pain is a sign recovery isn't done. Easy aerobic minutes are the safest way to nudge fitness back without risking a niggle."
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '27 Jun',
          name: 'Light aerobic — choose your option', meta: '40–60 min',
          sessions: [{
            name: 'Light aerobic — pick the option that fits', meta: '40–60 min',
            headline: 'Light aerobic day — flexible, no quality',
            warmUp: '—',
            mainSet: [
              'Option A: Easy 7–8 km run, conversational pace (~40 min)',
              'Option B: 60 min walk or hike + 20 min upper-body home work (push-ups, dips off a chair, pike push-ups, bird-dog)',
              'Option C: Rest if Fri\'s run felt rougher than expected'
            ],
            focus: "Aerobic movement, not training. Don't add any intensity — no strides, no tempo, no Strava segments.",
            paces: ['Run: 5:00–5:30 /km', 'RPE 3–4'],
            considerations: [
              "Save the engine for Sunday's long bike",
              'No quality work this week — Saturday usually carries threshold, this week it doesn\'t',
              'If Friday\'s run revealed tightness, rest today — don\'t double down',
              'Eat properly Sat night — Sunday\'s bike needs fuel'
            ],
            importance: "Saturday usually carries the week's threshold work. Skipping that this week is deliberate — re-entry weeks shouldn't include quality. Easy minutes here protect Sunday's long bike from being half-fuelled."
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '28 Jun',
          name: 'Long bike — Z2', meta: '1:30–2:00 · ~45 km',
          sessions: [{
            name: 'Long bike — Z2 only', meta: '1:30–2:00 · ~45 km',
            headline: 'Long Z2 ride to rebuild aerobic base — no intensity',
            warmUp: '10–15 min easy spinning, gradually building to Z2.',
            mainSet: '1:15–1:45 at steady Z2 — RPE 3–4, HR 130–145, conversational throughout.',
            focus: "Volume at intensity is the goal — not pushing the watts. Time on the saddle compounds.",
            paces: ['RPE 3–4', 'HR 130–145', 'Easy Z2 only'],
            considerations: [
              'No sweet spot, no surges, no Strava segments — Z2 only this week',
              'Fuel: ~30g carbs/hour after the first 60 min (a bar or gel)',
              'Drink to thirst — more in heat',
              'If quads feel hammered from Friday, cap at 1:15 and call it done',
              "Pure aerobic ride — re-introduces volume without intensity. Sweet spot work returns in Week 5."
            ],
            importance: 'Long Z2 rides are how the aerobic engine rebuilds with minimal injury risk. Cycling delivers aerobic load without impact, which is exactly what re-entry needs. Save bike intensity for Week 5 once the legs are back in rhythm — pushing watts on a re-entry ride is how niggles happen.'
          }]
        }
      ]
    },

    // ================================================================
    // WEEK 5 — New normal (29 June – 5 July 2026)
    // First week of the redesigned template: lower S&C → Tue,
    // Friday optional, bike intensity → Sun long ride.
    // ================================================================
    {
      id: 'w05',
      number: 5,
      title: 'New normal',
      dateRange: '29 June – 5 July',
      year: 2026,
      todayId: 'mon',
      stats: {
        runKm: '~20 km',
        bikeKm: '~50 km',
        swimM: '~1900m',
        totalHours: '~6:30'
      },
      focusHtml: 'Normal structure resumes with the post-holiday template baked in. <strong>Lower S&amp;C moves to Tuesday</strong> (same-day clustering with easy run), <strong>Friday becomes optional</strong>, <strong>bike intensity shifts to Sunday</strong> with 1 × 15 sweet spot embedded in the long ride. First quality week back — Sat long run gets a 3 km tempo finish, Sun bike adds one sweet-spot block. Build into Week 6 with 2 × 15 sweet spot.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '29 Jun',
          name: 'Football + upper S&C', meta: '60+45 min',
          sessions: [
            {
              name: 'Football', meta: '60 min · work fixture',
              headline: 'Weekly 5-a-side — anaerobic/neuromuscular stimulus',
              warmUp: 'Active warm-up before kick-off: skips, lateral shuffles, accelerations. Heart rate up before the first sprint, not during it.',
              mainSet: '60 min 5-a-side football.',
              focus: 'Sprints, change of direction, reactive movement. Football replaces what would otherwise be Monday intervals.',
              paces: ['RPE 6–8 in bursts', 'HR variable'],
              considerations: [
                'No additional run quality on Mondays — football is the quality',
                'Stretch off after — calves and hip flexors take the heaviest hit',
                'Hydrate properly post-game before lifting'
              ],
              importance: 'Football is your Monday anaerobic dose. It covers neuromuscular work (sprinting, cutting, decelerating) that interval running would otherwise provide — which is why Mondays have no run quality.'
            },
            {
              name: 'Upper-body S&C', meta: '45 min · gym',
              headline: 'Maintenance upper-body lifting after football',
              warmUp: '5–8 min: band pull-aparts, scap push-ups, shoulder dislocates. Wake the shoulders up before loading them.',
              mainSet: [
                '3 × 6–8 bench press OR push-up variation (challenging)',
                '3 × 8 pull-ups (band-assisted if needed) OR lat pulldown',
                '3 × 10 overhead press (DB or barbell)',
                '3 × 10 single-arm DB row each side',
                '3 × 12 face pulls — rear delts and upper back'
              ],
              focus: 'Quality reps, moderate load. Goal is maintenance of mass and definition, not hypertrophy peak.',
              paces: ['RPE 7 on top sets', 'Leave 2–3 reps in reserve'],
              considerations: [
                "Don't lift to failure — football already taxed the nervous system",
                'Progressive overload still applies — add a small amount of weight each week if reps stay clean',
                'Skip face pulls if pressed for time — keep the compounds'
              ],
              importance: 'Upper body lifting protects shoulder durability for swimming and maintains muscle mass — the explicit goal is staying strong, not just light. Mondays are the right slot because legs are already loaded by football.'
            }
          ]
        },
        {
          id: 'tue', day: 'Tue', date: '30 Jun',
          name: 'Easy run + lower S&C', meta: '6 km + 45 min',
          sessions: [
            {
              name: 'Easy run', meta: '6 km · 35 min',
              headline: 'Recovery aerobic run before the lift',
              warmUp: 'First km deliberately slow — let HR settle into easy zone.',
              mainSet: '6 km continuous at easy aerobic pace.',
              focus: 'Conversational throughout. This run is to set up the lift, not a session in itself.',
              paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
              considerations: [
                'If football left calves trashed, drop to 4 km or swap for 20 min mobility',
                'Easy means easy — pace will feel slow, that\'s correct',
                'Eat properly in between the run and the lift — 1–2 hours gap is ideal'
              ],
              importance: 'Easy aerobic minutes are the backbone of the running engine. Pairing them with lower-body S&C uses one set of legs efficiently — both done with one warm-up cost.'
            },
            {
              name: 'Lower-body S&C', meta: '45 min · gym',
              headline: 'Lower-body lifting — same-day same-system clustering',
              warmUp: '8 min: glute bridges, bodyweight squats, leg swings, banded clamshells. Hips firing before loading them.',
              mainSet: [
                '3 × 5–6 back squat OR goblet squat (load matters)',
                '3 × 6 each leg Bulgarian split squat OR rear-foot-elevated split squat',
                '3 × 8 Romanian deadlift (DB or barbell)',
                '3 × 10 each leg single-leg calf raise',
                '3 × 12 single-leg glute bridge each side'
              ],
              focus: 'Form > load. Squats and RDLs are the prime movers — single-leg work locks in stability.',
              paces: ['RPE 7 on top sets', 'Leave 2 reps in reserve'],
              considerations: [
                'Lower S&C on Tue (post-run) is the new template — same-day same-system clustering means one fresh warm-up, two stimuli',
                "Don't load squats heavy after a hard football game on Monday — listen to the legs",
                'Single-leg work is the gold for run injury prevention — don\'t skip it',
                'Friday is no longer the lower S&C day — that slot is now optional'
              ],
              importance: 'Moving lower S&C to Tuesday is the structural redesign you committed to post-holiday. Friday was consistently getting skipped — clustering lower-body work with the easy run on Tuesday makes both more likely to land. Single-leg loading protects against the asymmetries that produce running injuries.'
            }
          ]
        },
        {
          id: 'wed', day: 'Wed', date: '1 Jul',
          name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
          sessions: [{
            name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
            headline: 'First pool session back — re-establish feel before pushing pace',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board — small fast kicks from the hips',
              '100m build to moderate pace'
            ],
            mainSet: [
              '2 × 50m front sculling with 20s rest — re-feel the catch position',
              '2 × 50m single-arm freestyle (25m each arm) with 20s rest',
              '2 × 50m catch-up drill with 20s rest',
              '8 × 100m at 1:45–1:50 with 20s rest — steady aerobic, smooth stroke',
              '4 × 50m at 1:40–1:45 pace with 30s rest — build the 2nd 25m of each rep',
              '200m easy cool-down'
            ],
            focus: 'Feel the catch — open water swim last week probably loosened the stroke. Tighten the technique back up in the pool.',
            paces: ['Main: 1:45–1:50 /100m', 'Speed: 1:40–1:45 /100m', 'Easy: 2:05–2:15 /100m'],
            considerations: [
              'Bring a kickboard',
              "Open water last week was good for fitness — pool today is for technique",
              'If pace targets feel hard after the layoff, drop 5 sec/100m — rebuild gradually',
              'Last 2 reps of the 100s push to 1:43 if feeling smooth'
            ],
            importance: 'At your level (likely sub-14 min 800m now), swim gains come from technique not fitness. Coming back into the pool after open water swimming is the right moment to re-tighten the catch — open water tends to bias toward survival stroke.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '2 Jul',
          name: 'Rest', meta: 'No structured training', rest: true,
          sessions: [{
            name: 'Rest', meta: 'Usual rest day',
            headline: 'Thursday rest — protects the Sat/Sun double',
            warmUp: '—',
            mainSet: 'No structured training. Optional mobility or foam roll.',
            focus: 'Sleep, hydration, fuelling — particularly important before Saturday\'s long run.',
            paces: [],
            considerations: [
              'Optional 15–20 min mobility if you feel stiff from Mon/Tue',
              "Don't sneak in an extra easy run — Thursday rest is what allows Sat/Sun quality"
            ],
            importance: 'The rest day before Saturday\'s quality run is non-negotiable. Hard run on tired legs is the fastest way to a tendon issue.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '3 Jul',
          name: 'Optional easy run', meta: '30–40 min · optional', rest: true,
          sessions: [{
            name: 'Optional easy run', meta: '30–40 min',
            headline: 'Friday is now optional — no expectations',
            warmUp: '—',
            mainSet: '30–40 min easy jog if it fits — or rest, or 20 min mobility.',
            focus: 'No structure. No targets. Movement only if it serves the weekend.',
            paces: ['5:00–5:30 /km', 'RPE 2–3'],
            considerations: [
              'Friday is the new flex day — no longer a required session',
              'Skip without guilt — Sat/Sun is where the week\'s training lives',
              'If work has been heavy, definitely skip',
              'A short shake-out is fine if you fancy it'
            ],
            importance: 'The Friday redesign is the structural change you committed to post-holiday — Friday was consistently being missed, so it\'s now genuinely optional. Sat/Sun carry the real training. Removing Friday\'s mandate also removes the guilt of skipping it.'
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '4 Jul',
          name: 'Long run + tempo finish', meta: '11 km · 60 min',
          sessions: [{
            name: 'Long run + 3km tempo finish', meta: '11 km · 60 min',
            headline: 'First quality session back — long run with a moderate tempo finish',
            warmUp: 'First 1–2 km deliberately slow — let HR rise naturally.',
            mainSet: [
              "8 km easy at 4:45–5:00 /km (HR <150) — settle into rhythm, no chasing pace",
              '3 km at 4:10–4:20 /km tempo (HR 155–165) — marathon-pace effort, comfortably hard but conversational in bursts'
            ],
            focus: "Tempo is softer than threshold — marathon pace, not 10K race pace. Don't go off too fast.",
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:20 /km', 'Tempo HR: 155–165'],
            considerations: [
              'You handled 4 × 5 min at 4:00/km last week — 4:10–4:20 tempo is comfortably below that',
              "First long run with quality back — keep the tempo controlled, don't chase the lower end of the range",
              'Bail rule: 1 km into the tempo and it feels wrong, run the rest easy',
              'Eat 1–2 hours before — long run on fumes is a misery'
            ],
            importance: "Saturday is your main run quality day. 11 km with a 3 km tempo finish is a measured first step back into quality — it trains aerobic capacity at sub-threshold without taxing the system the way full threshold reps would. You handled harder than this last week, so this should land cleanly."
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '5 Jul',
          name: 'Long bike + 15 SS + brick', meta: '2:00 + 15 min · ~50 km',
          sessions: [
            {
              name: 'Long bike — 1 × 15 sweet spot', meta: '2:00 · ~50 km',
              headline: 'First long ride with intensity — single 15 min sweet spot block embedded',
              warmUp: '15 min easy spinning, building from very easy to steady Z2 in the final 5 min.',
              mainSet: [
                '40 min steady Z2 — RPE 3–4, HR 130–145',
                '15 min sweet spot — RPE 6–7, HR 145–155 (a touch under threshold, sustainable but working)',
                '5 min easy spin recovery',
                '45 min steady Z2 — settle back into aerobic rhythm',
                '5 min cool-down spin'
              ],
              focus: 'Sweet spot is RPE 6–7 — hard enough to be working, comfortable enough you could hold it for 30+ min if you had to. Not threshold.',
              paces: ['Z2: RPE 3–4, HR 130–145', 'Sweet spot: RPE 6–7, HR 145–155'],
              considerations: [
                'First intensity back on the bike — keep the sweet spot block controlled, don\'t drift into threshold',
                "Sweet spot before the back half of the Z2 — fresher legs = better quality of the working block",
                'Fuel: 30–40 g carbs/hour after the first 60 min',
                'If quads feel hammered from Sat\'s long run, hold the sweet spot block at RPE 6, not 7',
                'Next week (Week 6) builds to 2 × 15 sweet spot'
              ],
              importance: 'Bike intensity moves to Sunday — the structural redesign post-holiday. One 15 min sweet spot block this week is a measured re-introduction; the long Z2 around it keeps total stimulus aerobic-dominant. Sweet spot trains FTP without the cost of threshold work, which is exactly what you want when the legs are still rebuilding.'
            },
            {
              name: 'Brick run', meta: '15 min easy off the bike',
              headline: 'Short easy run straight off the bike — neuromuscular only',
              warmUp: 'Straight into running — that\'s the point of a brick.',
              mainSet: '15 min easy off the bike at conversational pace.',
              focus: 'Goal is teaching the legs to run on cycling-trashed quads — not pace, not heart rate, just turnover.',
              paces: ['5:00–5:30 /km', 'RPE 3'],
              considerations: [
                'Legs will feel weird for the first 5 min — that\'s the whole point of a brick',
                'Don\'t chase pace — this is neuromuscular only',
                'Skip if quads are completely cooked from the sweet spot block — better to bank the bike clean'
              ],
              importance: "Brick runs train the bike-to-run transition that makes or breaks triathlons. Even a short one teaches the body the pattern. Sunday after a long Z2 ride is the right moment — Saturday's long run already covered the running quality."
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 6 — Endurance swim + bike SS build (6–12 July 2026)
    // Second week of new template. Swim rotates to endurance (Type B).
    // Bike sweet spot builds from 1×15 → 2×15. Sat run tempo extends.
    // Weekend sessions are flexible — swap for partner's plans.
    // ================================================================
    {
      id: 'w06',
      number: 6,
      title: 'Endurance swim + bike SS + Mon quality',
      dateRange: '6–12 July',
      year: 2026,
      todayId: null,
      stats: {
        runKm: '~28 km',
        bikeKm: '~55 km',
        swimM: '~2400m',
        totalHours: '~7:00'
      },
      focusHtml: 'Football off Monday — <strong>threshold quality moves to Monday</strong> (previewing next week\'s Thu slot). <strong>Swim rotates to endurance</strong> (Type B, 2400m). <strong>Bike sweet spot builds 1 × 15 → 2 × 15</strong>. <strong>Sat tempo extends 3 km → 5 km</strong>. Fri drops to true rest (not optional) to protect Sat. Run volume ~28 km — legitimate jump given the Mon swap. Weekend sessions flex around partner\'s plans.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '6 Jul',
          name: 'Run quality — 4–5 × 1 km threshold', meta: '9 km · 50 min',
          sessions: [{
            name: 'Threshold reps — 4–5 × 1 km', meta: '9 km · 50 min',
            headline: 'Football off today — threshold quality swaps in',
            warmUp: [
              '15 min easy jog at 5:00–5:15/km — deliberately slow first 5 min to let HR settle',
              '4 × 100m strides on a flat stretch — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 3:55–4:00/km — controlled hard, RPE 7',
              '90s easy jog recovery — HR drops to <145',
              '1 km at 3:55–4:00/km — same effort as rep 1',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — hold form, don\'t chase pace',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — finish strong but controlled',
              'Optional 5th rep at 3:55–4:00/km if the first 4 felt controlled — decide with 500m to go on rep 4'
            ],
            coolDown: '10 min easy jog at 5:00–5:15/km — HR drops back to Z2 before you stop. Do not stop at the end of the last rep; keep moving for at least 5 min.',
            focus: 'Even effort across all reps. Three-to-four word sentences only during reps. Rep 1 should feel almost too easy — that means the pace is right.',
            paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              "Swapped in for football today — a preview of Week 7's Thursday quality slot",
              'Same pace you cleaned as 4 × 5 min in Week 4 — should feel familiar',
              'Even effort > faster start — first rep should feel sustainable',
              'HR should recover to <145 between reps',
              'Bail rule: if rep 1 feels wrong, do 3 × 1 km instead',
              'Fri is now a true rest day (not optional) to protect Saturday\'s long + tempo',
              '5 days between this and Sat = plenty of recovery — no need to hold back today'
            ],
            importance: "Threshold reps are where the 10K race pace ceiling lifts. For sub-37 you need to hold 3:42/km for 10 km — training at 3:55–4:00 makes race pace feel achievable. This session opens the 10K build a week early. Football's neuromuscular hit is absent this week — Tuesday's easy run compensates."
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '7 Jul',
          name: 'Easy run', meta: '7 km · 40 min',
          sessions: [{
            name: 'Easy run', meta: '7 km · 40 min',
            headline: 'Recovery aerobic run — building base volume',
            warmUp: 'First km deliberately slow — HR settles into easy zone.',
            mainSet: '7 km continuous at easy aerobic pace.',
            focus: 'Conversational throughout. Aerobic base work — the substrate that makes threshold sessions possible.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'If football left calves trashed, drop to 5 km or swap for mobility',
              'Easy means easy — pace will feel slow, that\'s correct',
              'Optional 15–20 min home lower-body work after (bodyweight squats, RDLs, single-leg glute bridges, planks) — not prescribed but useful if fancied'
            ],
            importance: 'Aerobic base is what makes the Thursday threshold and Saturday tempo sessions possible. Building weekly km slowly (this week 7, next week 8) is the safest way to grow the engine without a niggle.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '8 Jul',
          name: 'Swim — endurance', meta: '2400m · 60 min',
          sessions: [{
            name: 'Swim — endurance (Type B)', meta: '2400m · 60 min',
            headline: 'Longer continuous chunks — first endurance swim of the rotation',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '4 × 50m as 25m drill / 25m swim (pick a drill: catch-up, fingertip drag, or 6-1-6)'
            ],
            mainSet: [
              '3 × 400m at 1:48–1:52 /100m with 45s rest — long continuous chunks, hold form as fatigue builds',
              '(alternative shape: 2 × 600m at 1:50 /100m with 60s rest — even longer if you fancy it)',
              '4 × 50m at 1:38–1:42 pace with 20s rest — sharp finish to remind the arms what fast feels like',
              '200m easy cool-down'
            ],
            focus: 'Long chunks train the aerobic engine in the swim differently to 100s — less rest, so you can\'t hide behind the wall. Stroke count per length should stay stable across all 400s.',
            paces: ['Long / endurance: 1:48–1:52 /100m', 'Speed: 1:38–1:42 /100m', 'Easy: 1:55–2:05 /100m'],
            considerations: [
              'First endurance swim in the rotation — pace targets nudged down from Week 5 based on how the 100s landed',
              'Count strokes on the first and last 25 of each 400 — if strokes-per-length rises by more than 2, pace is too hot',
              'The 600m option is available if you\'re feeling it — same total volume, longer chunks, harder mental load',
              'Bring a kickboard for the warm-up',
              'Week 7 = speed/form (Type C). Week 8 = tri pace (Type D). Then rotate back to A.'
            ],
            importance: 'Endurance swims build the aerobic ceiling in the water and teach pace discipline over long chunks — critical for open-water racing where you can\'t reset every 100m. The pace bump is a response to Week 5\'s 100s landing comfortably; targets are flexible, hit slower if a set feels rough.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '9 Jul',
          name: 'Rest', meta: 'No structured training', rest: true,
          sessions: [{
            name: 'Rest', meta: 'Usual rest day',
            headline: 'Thursday rest — protects the Sat/Sun double',
            warmUp: '—',
            mainSet: 'No structured training. Optional mobility or foam roll.',
            focus: 'Sleep, hydration, fuelling — particularly before Saturday\'s long run.',
            paces: [],
            considerations: [
              'Optional 15–20 min mobility if you feel stiff from Mon/Tue',
              'Don\'t sneak in extra easy work — Thursday rest is what allows Sat/Sun quality'
            ],
            importance: 'The rest day before Saturday\'s quality run is non-negotiable. Hard run on tired legs is the fastest way to a tendon issue.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '10 Jul',
          name: 'Rest', meta: 'True rest — protects Sat', rest: true,
          sessions: [{
            name: 'Rest', meta: 'True rest day',
            headline: 'Rest day — 2 quality runs this week means Friday matters',
            warmUp: '—',
            mainSet: 'No structured training. Walking, casual movement fine.',
            focus: 'Recovery for Saturday\'s long + tempo. Sleep, food, hydration.',
            paces: [],
            considerations: [
              'Fri normally optional — this week it\'s a true rest because you\'ve added Monday quality',
              'Optional 15–20 min mobility if you feel stiff — no running',
              "Sat's long + 5 km tempo is the second quality of the week — protect it"
            ],
            importance: 'Two quality run sessions in a week (Mon + Sat) means the recovery day between them needs to be real. Optional-easy Friday works when the week has one quality; two qualities need honest rest.'
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '11 Jul',
          name: 'Long run + tempo finish', meta: '12 km · 65 min',
          sessions: [{
            name: 'Long run + 5km tempo finish', meta: '12 km · 65 min',
            headline: 'Long run with an extended 5 km tempo finish — main run quality',
            warmUp: 'First 1–2 km deliberately slow — HR rises naturally to easy zone.',
            mainSet: [
              '7 km easy at 4:45–5:00 /km (HR <150) — settle in, no chasing pace',
              '5 km at 4:10–4:20 /km tempo (HR 155–165) — marathon-pace effort, comfortably hard but conversational in bursts'
            ],
            focus: 'Tempo extends from 3 km (last week) to 5 km — the same effort held longer. Don\'t drop the pace, hold the effort.',
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:20 /km', 'Tempo HR: 155–165'],
            considerations: [
              'Last week\'s 3 km tempo landed — 5 km at the same pace is the natural progression',
              'Even effort > faster start — first km of tempo should feel almost too easy',
              'Bail rule: 2 km into tempo and it feels wrong, run the rest easy',
              'Weekend flex: if partner has a long run planned Sat, join her for the easy 7 km and add the tempo alone — or swap this session to Sunday and shift the bike',
              'Eat 1–2 hours before'
            ],
            importance: "Saturday's long run is your primary run quality slot. 5 km tempo is the sustained aerobic-power stimulus — the ceiling for how fast you can hold marathon pace lifts here. Progressing tempo distance is safer than progressing pace at this stage."
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '12 Jul',
          name: 'Long bike + 2×15 SS + brick', meta: '2:15 + 15 min · ~55 km',
          sessions: [
            {
              name: 'Long bike — 2 × 15 sweet spot', meta: '2:15 · ~55 km',
              headline: 'Long ride with two 15 min sweet spot blocks — bike intensity progression',
              warmUp: '15 min easy spinning, building from very easy to steady Z2 in the final 5 min.',
              mainSet: [
                '30 min steady Z2 — RPE 3–4, HR 130–145',
                '15 min sweet spot — RPE 6–7, HR 145–155',
                '10 min easy spin recovery',
                '15 min sweet spot — RPE 6–7, HR 145–155 (aim to hit the same power/HR as the first block)',
                '35 min steady Z2 — settle back into aerobic',
                '5 min cool-down spin'
              ],
              focus: 'Second sweet spot block is the meaningful one — the goal is holding the same output on the second one as the first. If block 2 drops significantly, block 1 was too hard.',
              paces: ['Z2: RPE 3–4, HR 130–145', 'Sweet spot: RPE 6–7, HR 145–155'],
              considerations: [
                'Building from 1 × 15 (Week 5) to 2 × 15 sweet spot — same block, doubled',
                'Even effort across both blocks > pushing block 1',
                'Fuel: 40–50 g carbs/hour after the first 60 min — you\'re working now, not just riding',
                'If quads feel hammered from Sat\'s long run, hold sweet spots at RPE 6 not 7 — or drop to 1 × 15 and log it',
                'Weekend flex: if partner has a long ride, join her for the aerobic sections and slot the two SS blocks in when she\'s taking a coffee stop — or swap the whole session for her ride and I\'ll adjust',
                'Next progression (Week 7 or 8): 2 × 20 sweet spot'
              ],
              importance: 'Sweet spot is where bike FTP grows without the recovery cost of full threshold work. Two 15 min blocks is the standard first proper progression — trains aerobic power and tolerance to sustained effort. Bike intensity on Sunday keeps the run schedule uncomplicated.'
            },
            {
              name: 'Brick run', meta: '15 min easy off the bike',
              headline: 'Short easy run straight off the bike — neuromuscular only',
              warmUp: 'Straight into running.',
              mainSet: '15 min easy off the bike at conversational pace.',
              focus: 'Teaching the legs to run on cycling-loaded quads. Turnover, not pace.',
              paces: ['5:00–5:30 /km', 'RPE 3'],
              considerations: [
                'Legs will feel weird for the first 5 min — that\'s the point',
                'Don\'t chase pace — neuromuscular only',
                'Skip if quads are cooked from the second SS block — protect the bike investment'
              ],
              importance: "Brick runs train the bike-to-run transition. Even a short one teaches the pattern. Building the brick run gradually — 15 min now, will extend to 20–25 min as sweet spot work stabilises."
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 7 — 10K build begins (13–19 July 2026)
    // First week of the run-focused template targeting sub-37 10K in Jan.
    // Thu quality slot introduced. S&C ghosted to optional home work.
    // ================================================================
    {
      id: 'w07',
      number: 7,
      title: '10K build — Thu quality intro',
      dateRange: '13–19 July',
      year: 2026,
      todayId: 'mon',
      stats: {
        runKm: '~26 km',
        bikeKm: '~50 km',
        swimM: '~2100m',
        totalHours: '~7:00'
      },
      focusHtml: 'First week of the <strong>sub-37 10K build</strong>. <strong>Adjusted for lighter Week 6</strong> — Monday football off so easy run + optional S&amp;C (not a repeat threshold), Sat tempo trimmed 5 → 3 km, Sun bike back to 1 × 15 SS. <strong>Thu 4 × 1 km threshold at 3:55–4:00/km stays the main session</strong> — bank this one. Solo weekend so Sat/Sun are yours to hit.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '13 Jul',
          name: 'Easy run + optional home S&C', meta: '6 km + 30 min',
          sessions: [{
            name: 'Easy run + optional home S&C', meta: '6 km · 35 min + optional S&C',
            headline: 'Football off — easy aerobic to re-set after last week\'s off-feeling week',
            warmUp: 'First km deliberately slow — let HR settle. If legs feel dead by 2 km, cut it short without guilt.',
            mainSet: '6 km continuous at easy aerobic pace — conversational throughout.',
            coolDown: 'Last 500m drop to walk, 3 min walking after. Then optional home S&C: 3 rounds of 12 squats / 8 push-ups / 10 reverse lunges / 8 single-leg RDLs / 30s plank.',
            focus: 'Deliberately not a repeat of last week\'s missed threshold. Easy today protects Thursday\'s quality, which is the main session of the week.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Not chasing quality today — last week\'s "off" feeling is a real signal',
              'If legs feel genuinely fresh and you want quality, swap to Fartlek 6×2min via the swap button',
              'Home S&C is optional bonus — skip if legs still feel heavy',
              'Thursday\'s 4×1km is the priority quality this week — protect it'
            ],
            importance: "Last Monday's threshold didn't happen because the engine wasn't ready. Repeating the same prescription today would likely produce the same outcome. Easy + optional S&C banks a session, keeps consistency, and leaves the tank for Thursday. If you feel great, the swap library is one tap away."
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '14 Jul',
          name: 'Easy run', meta: '8 km · 40 min',
          sessions: [{
            name: 'Easy run', meta: '8 km · 40 min',
            headline: 'Aerobic base — building week-on-week',
            warmUp: 'First km deliberately slow — HR settles.',
            mainSet: '8 km continuous at easy aerobic pace.',
            coolDown: 'Last 500m drop to a walk — 3–5 min of walking after helps HR come down properly and starts recovery for Thursday.',
            focus: 'Conversational. This is aerobic engine building, not a session to push.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Up 1 km from last week\'s 7 km',
              'If football left legs trashed, drop to 6 km',
              'No strides, no tempo — save the legs for Thursday quality',
              'Optional 15–20 min home lower work after if fancied — not required'
            ],
            importance: 'Tue easy is the aerobic base session. Weekly volume creeps up slowly — 7 → 8 → 9 km over the coming weeks. The build to 10K race fitness lives in these easy km more than in the interval sessions.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '15 Jul',
          name: 'Swim — speed/form', meta: '2100m · 55 min',
          sessions: [{
            name: 'Swim — speed/form (Type C)', meta: '2100m · 55 min',
            headline: 'Third rotation — sharper 50s and descending 100s',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '4 × 50m as 25 drill / 25 swim'
            ],
            mainSet: [
              '10 × 50m at 1:38–1:42 pace with 20s rest — sharp, controlled speed reps',
              '100m easy between blocks',
              '4 × 100m descending (start at 1:47, finish at 1:40) with 30s rest — each 100 slightly faster than the last',
              '100m easy',
              '4 × 50m at 1:38–1:42 with 25s rest — last block, hold form as fatigue builds'
            ],
            coolDown: '200m easy freestyle at 2:00–2:10 /100m — mixing strokes fine (backstroke, breaststroke). Focus on long, easy strokes to flush the arms.',
            focus: 'Speed is about turnover and clean catch, not muscling. 50s should feel sharp but sustainable — leave a rep in the tank.',
            paces: ['Speed: 1:38–1:42 /100m', 'Descending 100s: 1:47 → 1:40', 'Easy: 1:55–2:05 /100m'],
            considerations: [
              'Third session in the rotation — speed/form (Type C)',
              'Descending 100s teach pace control — if you go too fast on rep 1, rep 4 won\'t descend',
              'Count strokes on the 50s — good speed comes with clean, powerful strokes, not thrashing',
              'Week 8 = Type D (tri pace). Then rotate back to A.'
            ],
            importance: 'Speed/form work develops the top end of the swim range and refines the catch under load. Even for triathlon (where you never sprint), speed work teaches the stroke to be efficient — which is what matters at every pace.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '16 Jul',
          name: 'Run quality — threshold', meta: '8 km · 45 min',
          sessions: [{
            name: 'Threshold reps — 4 × 1km', meta: '8 km · 45 min',
            headline: 'First threshold session of the 10K build — re-introducing what you handled in Week 4',
            warmUp: [
              '15 min easy jog at 5:00–5:15/km — deliberately slow first 5 min',
              '4 × 100m strides on a flat stretch — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 3:55–4:00/km — controlled hard, RPE 7',
              '90s easy jog recovery — HR drops to <145',
              '1 km at 3:55–4:00/km — same effort as rep 1',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — hold form, don\'t chase pace',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — finish strong but controlled'
            ],
            coolDown: '10 min easy jog at 5:00–5:15/km — HR drops back to Z2 before you stop. Do not stop at the end of the last rep; keep moving for at least 5 min.',
            focus: 'Even effort across all 4 reps. Three-to-four word sentences only. First rep should feel almost too easy — that means the pace is right.',
            paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              'You held 4 × 5 min at 4:00/km clean in Week 4 — this is the same pace, slightly shorter reps, more recoveries',
              'Even effort > faster start — first rep should feel sustainable',
              'HR should recover to <145 between reps',
              'Bail rule: if rep 1 already feels wrong, do 3 × 1km instead',
              'Sub-37 pathway: this session progresses to 5 × 1km, then 6 × 1km, then 3 × 2km, then hills, then VO2 — 20+ week arc'
            ],
            importance: 'Threshold reps are where the 10K race pace ceiling lifts. For sub-37 you need to hold 3:42/km for 10 km — training at 3:55–4:00 makes race pace feel easier. This session is the load-bearing weekly stimulus of the 10K build.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '17 Jul',
          name: 'Rest or 30 min easy', meta: 'Optional easy', rest: true,
          sessions: [{
            name: 'Optional easy run OR rest', meta: '30 min · optional',
            headline: 'Recovery day after Thursday quality — rest or shake-out only',
            warmUp: '—',
            mainSet: '30 min easy jog if legs feel good, or full rest.',
            focus: 'Recovery. If Thursday reps hit hard, take the rest.',
            paces: ['5:00–5:30 /km if running', 'RPE 2'],
            considerations: [
              'Friday is the flex day — no expectation',
              'If Thursday reps landed harder than expected, take the rest',
              'Short shake-out is fine if legs feel fresh — but easy only, no strides',
              'Saturday long+tempo is the second quality session — protect it'
            ],
            importance: 'Two quality run sessions per week (Thu + Sat) means Friday recovery matters. This is what changed from the old template — Friday is now genuinely optional, not "should but often skipped".'
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '18 Jul',
          name: 'Long run + short tempo', meta: '12 km · 65 min',
          sessions: [{
            name: 'Long run + 3km tempo finish', meta: '12 km · 65 min',
            headline: 'Long run with modest tempo finish — dialled back from 5 → 3 km after lighter Week 6',
            warmUp: 'First 1–2 km deliberately slow — HR rises naturally.',
            mainSet: [
              '9 km easy at 4:45–5:00 /km (HR <150) — settle in',
              '3 km at 4:10–4:20 /km tempo (HR 155–165) — marathon-pace effort, comfortably hard'
            ],
            coolDown: 'Do NOT stop at the end of the tempo — jog 5 min easy at 5:00–5:30 /km to bring HR down. Walk 5 min after. Refuel within 20 min.',
            focus: 'Trimmed tempo distance to 3 km — a moderate return to Sat quality after a lighter week. Downgrade to full easy if legs feel off from Thu threshold.',
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:20 /km', 'Tempo HR: 155–165'],
            considerations: [
              'Tempo trimmed 5 → 3 km given Week 6 was lighter than planned',
              'Downgrade rule: if legs feel off after Thu threshold, drop tempo entirely and run the 12 km easy',
              'Second quality of the week after Thu — this one is optional if Thu drained you',
              'No partner training this weekend so this is yours to hit or bail'
            ],
            importance: "Sat long trains tempo tolerance with cumulative fatigue — different stimulus to Thu's fresh-legs threshold. Modest tempo distance protects against the same pattern as Week 6 where quality got skipped altogether."
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '19 Jul',
          name: 'Long bike + 1×15 SS + brick', meta: '2:00 + 15 min · ~50 km',
          sessions: [
            {
              name: 'Long bike — 1 × 15 sweet spot', meta: '2:00 · ~50 km',
              headline: 'Dialled back to 1 × 15 SS after lighter Week 6 — bike waits behind the run block',
              warmUp: '15 min easy spinning, building from very easy to Z2.',
              mainSet: [
                '40 min steady Z2 — RPE 3–4, HR 130–145',
                '15 min sweet spot — RPE 6–7, HR 145–155',
                '5 min easy spin recovery',
                '45 min steady Z2',
                '5 min cool-down spin'
              ],
              coolDown: '5 min easy spin at RPE 2 — legs flush before you dismount. Do NOT skip this if you\'re doing the brick run.',
              focus: 'One sweet spot block only this week — the second block waits until Sat + Thu quality land cleanly. Run is priority.',
              paces: ['Z2: RPE 3–4, HR 130–145', 'Sweet spot: RPE 6–7, HR 145–155'],
              considerations: [
                'Dropped 2 × 15 → 1 × 15 given Week 6 was lighter and this Sat has quality',
                'No partner ride this weekend — this is yours',
                'Fuel: 30–40 g carbs/hour after 60 min',
                'If Sat tempo was hard, drop SS to Z2-only and log a clean ride',
                'Bike progression resumes next week if this Thu + Sat both land clean'
              ],
              importance: 'Bike supports the run block — not competing with it. Holding steady this week protects the two run qualities. The 2 × 15 SS returns as soon as the run schedule stabilises.'
            },
            {
              name: 'Brick run', meta: '15 min easy off the bike',
              headline: 'Short easy brick — neuromuscular only',
              warmUp: 'Straight into running.',
              mainSet: '15 min easy off the bike at conversational pace.',
              coolDown: 'Walk 5 min after — the brick was already short, so no formal jog cool-down needed. Refuel within 20 min.',
              focus: 'Teaching the legs to run on cycling-loaded quads.',
              paces: ['5:00–5:30 /km', 'RPE 3'],
              considerations: [
                'Skip if legs are cooked from Sat + Sun SS blocks',
                'Don\'t chase pace — neuromuscular only',
                'Brick trains the transition, doesn\'t train fitness'
              ],
              importance: 'Bricks teach the bike-to-run transition. Even short ones matter. Keep them light while run volume ramps.'
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 8 — Consolidate, travel-adjusted (20–26 July 2026)
    // Swim moves to Tue, full rest Wed (travel). Thu holds 5×1km.
    // Sat tempo returns (4 km). Sun bike gets 2×15 SS — contained
    // intensity after last week's overcooked ride. W9 is a down week.
    // ================================================================
    {
      id: 'w08',
      number: 8,
      title: 'Consolidate — travel-adjusted',
      dateRange: '20–26 July',
      year: 2026,
      todayId: 'mon',
      stats: {
        runKm: '~29 km',
        bikeKm: '~55 km',
        swimM: '~2000m',
        totalHours: '~7:30'
      },
      focusHtml: 'Consolidation week with travel baked in: <strong>swim moves to Tuesday</strong> (Type D — includes an 800m benchmark TT), <strong>Wednesday is full rest</strong>. Thu holds 5 × 1 km — own last week\'s jump before building further. <strong>Sat tempo returns (4 km)</strong> after two quiet Saturdays. Sun bike gets the <strong>2 × 15 sweet spot</strong> you clearly wanted — intensity lives in the blocks, everything else honest Z2. Week 9 is a planned down week, so land this one and back off next.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '20 Jul',
          name: 'Football', meta: '60 min',
          sessions: [{
            name: 'Football', meta: '60 min · work fixture',
            headline: 'Weekly 5-a-side — the Monday anaerobic dose',
            warmUp: 'Active warm-up before kick-off: skips, lateral shuffles, a few accelerations. HR up before the first sprint, not during it.',
            mainSet: '60 min 5-a-side football.',
            coolDown: 'Walk 5 min after the final whistle, then stretch calves, hip flexors, adductors, hamstrings — 10 min now saves Tuesday\'s tightness.',
            focus: 'Sprints, change of direction, reactive movement. The week\'s neuromuscular work.',
            paces: ['RPE 6–8 in bursts', 'HR variable'],
            considerations: [
              'No additional run quality on Mondays — football is the quality',
              'Optional 20 min home upper-body work after if you fancy it — not prescribed',
              'Legs were heavy at the end of last week — if they still feel flat tonight, play smart, not max'
            ],
            importance: 'Football covers the sprint/agility stimulus that would otherwise cost a run session. With Thursday holding 5 × 1 km, keep tonight fun rather than flat-out.'
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '21 Jul',
          name: 'Swim — tri pace + 800m TT', meta: '2000m · 55 min',
          sessions: [{
            name: 'Swim — tri pace (Type D) with 800m TT', meta: '2000m · 55 min',
            headline: 'Benchmark session — 800m time trial plus race-pace 200s',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '2 × 50m build to race pace with 20s rest'
            ],
            mainSet: [
              '800m TIME TRIAL — sustained steady effort, aim 1:43–1:47 /100m. Even pacing: first 100 should feel controlled, not fast',
              'LOG THE TIME — this is the benchmark. Old PB is 14:30; current fitness suggests 13:45–14:00 is on',
              '200m very easy recovery',
              '4 × 200m at race pace (1:43–1:47 /100m) with 30s rest — hold form as fatigue builds'
            ],
            coolDown: '100m easy freestyle, long slow strokes to flush the arms.',
            focus: 'Even pacing on the TT — the classic error is a fast first 200 and a fading back half. Settle into rhythm by 100m and hold it.',
            paces: ['TT + 200s: 1:43–1:47 /100m', 'Easy: 1:55–2:05 /100m'],
            considerations: [
              'Moved from Wednesday — travel tomorrow',
              'Type D is the fourth session in the rotation — back to Type A next swim',
              'TT wants clear water — if the pool is rammed, do the 200s first and TT when a lane opens',
              'Write the 800m time in the session notes — it recalibrates all your swim zones'
            ],
            importance: 'First hard swim benchmark since the 14:30 800m baseline. The result tells us whether the pace bumps have been keeping up with your actual fitness — and race-pace 200s are the single most triathlon-specific pool work there is.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '22 Jul',
          name: 'Rest — travel', meta: 'No training', rest: true,
          sessions: [{
            name: 'Rest — travel day', meta: 'Full rest',
            headline: 'Full rest day — travel takes the slot',
            warmUp: '—',
            mainSet: 'No structured training. Travel is its own load.',
            coolDown: '—',
            focus: 'Sleep, hydration, decent food on the road.',
            paces: [],
            considerations: [
              'Well-timed rest — it sits right before Thursday\'s quality session',
              'Optional 10–15 min stretch in the evening if you\'ve been sat travelling all day',
              'Hydrate properly — travel dehydration is what makes Thursday reps feel wooden'
            ],
            importance: 'A full rest day before threshold reps is a gift, not a loss. Thursday gets fresh legs — use them.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '23 Jul',
          name: 'Run quality — 5 × 1 km threshold', meta: '10 km · 55 min',
          sessions: [{
            name: 'Threshold reps — 5 × 1 km', meta: '10 km · 55 min',
            headline: 'Hold last week\'s progression — own 5 reps before building to 6',
            warmUp: [
              '15 min easy jog at 5:00–5:15/km — deliberately slow first 5 min',
              '4 × 100m strides — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 3:55–4:00/km — controlled hard, RPE 7',
              '90s easy jog recovery — HR back under 145',
              '1 km at 3:55–4:00/km — same effort as rep 1',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — hold form',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — stay honest, no surging',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — finish strong but controlled'
            ],
            coolDown: '10 min easy jog at 5:00–5:15/km — keep moving at least 5 min after the last rep.',
            focus: 'Consolidation, not progression. You jumped to 5 reps yourself last week — this week is about doing it again with even splits and full control. That\'s what earns 6 × 1 km.',
            paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              'Fresh off a full rest day — reps should feel strong',
              'Even effort across all 5 — if rep 5 is your fastest, you sandbagged; if it\'s 10s slower, you overcooked',
              'Bail rule: 4 reps if travel has flattened you',
              '6 × 1 km comes once Sat tempo is re-established alongside this'
            ],
            importance: 'The priority session of the week. Repeating 5 × 1 km cleanly cements the progression — sub-37 is built on stacking repeatable weeks, not one-off hero sessions.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '24 Jul',
          name: 'Easy run', meta: '5 km · 30 min',
          sessions: [{
            name: 'Easy run — 5 km', meta: '5 km · 30 min',
            headline: 'Easy aerobic — covers the volume the Tuesday run usually carries',
            warmUp: 'First km deliberately slow.',
            mainSet: '5 km continuous at easy aerobic pace, conversational throughout.',
            coolDown: 'Last 500m drop to a walk, 3 min walking after.',
            focus: 'Genuine easy. This exists because Tuesday\'s easy run became the swim this week.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Skip freely if Thursday left the legs heavy — Saturday matters more',
              'No strides, no pace-chasing — Z2 shuffle is the assignment'
            ],
            importance: 'Keeps weekly run volume on the build curve (~29 km) with the Tuesday slot given to the swim. Easy km are the cheapest fitness you can buy — but not at Saturday\'s expense.'
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '25 Jul',
          name: 'Long run + 4 km tempo', meta: '13 km · 70 min',
          sessions: [{
            name: 'Long run + 4 km tempo finish', meta: '13 km · 70 min',
            headline: 'The tempo returns — first Sat quality in three weeks',
            warmUp: 'First 1–2 km deliberately slow — let HR climb on its own.',
            mainSet: [
              '9 km easy at 4:45–5:00 /km (HR <150) — settle in, no pace-chasing',
              '4 km at 4:10–4:20 /km tempo (HR 155–165) — marathon-pace effort, comfortably hard'
            ],
            coolDown: 'Do NOT stop at the end of the tempo — 5 min easy jog, then 5 min walk. Refuel within 20 min.',
            focus: 'This is the session that\'s been slipping — 4 km is the honest middle between the 3 km you last hit and the 5 km the arc wants. Even effort, first tempo km should feel almost too easy.',
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:20 /km', 'Tempo HR: 155–165'],
            considerations: [
              'Sat tempo has been dropped two weeks running — landing it matters more than Thursday progressing',
              'Bail rule: 2 km into the tempo and it feels wrong, run the rest easy and say so at check-in',
              'No partner plans this weekend so the day is yours — morning run beats afternoon heat',
              'Eat properly 1–2 hours before'
            ],
            importance: 'Thu lifts the ceiling on fresh legs; Sat teaches you to hold pace on tired ones. Sub-37 needs both, and the Sat half of that pair is the one that\'s been missing. Getting 4 km of tempo in the bank this week re-opens the path to 5 km and then race-pace work.'
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '26 Jul',
          name: 'Long bike + 2×15 SS + brick', meta: '2:15 + 15 min · ~55 km',
          sessions: [
            {
              name: 'Long bike — 2 × 15 sweet spot', meta: '2:15 · ~55 km',
              headline: 'The progression you wanted — with a deal attached',
              warmUp: '15 min easy spinning, building to Z2 in the last 5 min.',
              mainSet: [
                '30 min steady Z2 — RPE 3–4, HR 130–145 — and Z2 means Z2',
                '15 min sweet spot — RPE 6–7, HR 145–155',
                '10 min easy spin recovery',
                '15 min sweet spot — RPE 6–7, matching block 1\'s effort',
                '35 min steady Z2 — honest aerobic, no half-wheeling imaginary rivals'
              ],
              coolDown: '5 min easy spin at RPE 2 before dismounting — non-negotiable if you\'re running the brick.',
              focus: 'Last week you sent the ride harder than planned. So here\'s the deal: the intensity is sanctioned and it lives in the two 15-min blocks. Everything around them is genuinely easy. If the Z2 sections drift into tempo, the blocks come back out next week.',
              paces: ['Z2: RPE 3–4, HR 130–145', 'Sweet spot: RPE 6–7, HR 145–155'],
              considerations: [
                'Blocks matched: if block 2 can\'t hold block 1\'s output, block 1 was too hard',
                'Fuel: 40–50 g carbs/hour after the first 60 min',
                'If Saturday\'s tempo was rough, drop to 1 × 15 and bank a clean ride',
                'Week 9 is a down week — this is the last full-load Sunday before it'
              ],
              importance: 'Contained intensity beats freelanced intensity — the SS blocks train FTP properly, and the honest Z2 around them is what lets Monday football and next Thursday\'s reps happen. Heavy legs last week came from spreading effort everywhere; this structure puts it where it counts.'
            },
            {
              name: 'Brick run', meta: '15 min easy off the bike',
              headline: 'Short easy brick — neuromuscular only',
              warmUp: 'Straight into running — that\'s the point.',
              mainSet: '15 min easy off the bike at conversational pace.',
              coolDown: 'Walk 5 min. Refuel within 20 min.',
              focus: 'Turnover on cycling-loaded quads. Not pace, not HR.',
              paces: ['5:00–5:30 /km', 'RPE 3'],
              considerations: [
                'Skip if the second SS block emptied the legs',
                'First 5 min will feel weird — that is the training'
              ],
              importance: 'Keeps the bike-to-run pattern ticking over while the run block builds.'
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 9 — Down week + restart (27 Jul – 2 Aug 2026)
    // Week 8 mostly didn't happen after Tue (life, not injury) — restarted
    // Mon 27 with an unplanned 9km easy run. This lands right on top of
    // the down week that was already scheduled, so no extra pull-back
    // needed: reduced quality, no tempo, no bike SS, easy volume only.
    // ================================================================
    {
      id: 'w09',
      number: 9,
      title: 'Down week + restart',
      dateRange: '27 Jul – 2 Aug',
      year: 2026,
      todayId: 'tue',
      stats: {
        runKm: '~27 km',
        bikeKm: '~40 km',
        swimM: '~1800m',
        totalHours: '~6:00'
      },
      focusHtml: 'Planned down week, and it lands right after a disrupted one — good timing. Week 8 stopped after Tuesday for life reasons, not injury; no pattern, no action needed beyond noting it. <strong>Reduced load across the board</strong>: Thu quality trims to 3 × 1 km, Sat drops the tempo (easy long only), Sun bike is Z2-only (no sweet spot blocks). One goal this week — land it clean and arrive at Week 10 ready to build again.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '27 Jul',
          name: 'Easy run — restart', meta: '9 km · 50 min',
          sessions: [{
            name: 'Easy run — restart', meta: '9 km · 50 min',
            headline: 'Already done — logged here for the record',
            warmUp: 'First km deliberately slow.',
            mainSet: '9 km continuous at easy aerobic pace.',
            coolDown: 'Walk a few minutes after, refuel normally.',
            focus: 'Getting back into rhythm after a disrupted week. Nothing wrong with jumping straight back to 9 km.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Self-directed — a good instinct after five days off',
              'Tap this complete in the app if you want it on the record'
            ],
            importance: 'One easy run is the right way back in after an unplanned gap. No ramp-up drama needed for a 5-day break.'
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '28 Jul',
          name: 'Rest or light optional', meta: '20–30 min · optional', rest: true,
          sessions: [{
            name: 'Rest or light optional movement', meta: '20–30 min optional',
            headline: 'Deliberately light — yesterday\'s run covered today\'s aerobic need',
            warmUp: '—',
            mainSet: 'Full rest, or 20–30 min easy spin / walk / mobility if you feel like moving.',
            coolDown: '—',
            focus: 'No training debt to repay. This is a genuinely free day.',
            paces: ['RPE 1–2 if moving at all'],
            considerations: [
              'Swim moves back to its normal Wednesday slot this week — no rush today',
              'Skip entirely with zero guilt'
            ],
            importance: 'Down weeks work by having easy days that are actually easy. Yesterday\'s run already re-opened the week — today just holds the line.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '29 Jul',
          name: 'Swim — technique + aerobic', meta: '1800m · 45 min',
          sessions: [{
            name: 'Swim — technique + aerobic (Type A, lighter)', meta: '1800m · 45 min',
            headline: 'Back to the normal Wednesday slot — reduced volume for the down week',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '100m build to moderate pace'
            ],
            mainSet: [
              '2 × 50m front sculling with 20s rest — re-groove the catch',
              '2 × 50m catch-up drill with 20s rest',
              '6 × 100m at 1:42–1:47 with 20s rest — steady, no need to chase last week\'s TT pace',
              '200m easy cool-down'
            ],
            coolDown: '—',
            focus: 'Easy technique week. Last Tuesday\'s TT was the hard swim — this one is recovery for the stroke.',
            paces: ['Main: 1:42–1:47 /100m', 'Easy: 1:55–2:05 /100m'],
            considerations: [
              'Trimmed from the usual 1900–2400m for the down week',
              'If you logged last Tuesday\'s 800m TT time, that number now sets your swim zones — flag it at check-in if it moved things'
            ],
            importance: 'A lighter technique swim lets the week absorb load from the run/bike side without adding more.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '30 Jul',
          name: 'Run quality — 3 × 1 km threshold', meta: '7 km · 40 min',
          sessions: [{
            name: 'Threshold reps — 3 × 1 km', meta: '7 km · 40 min',
            headline: 'Trimmed quality for the down week — same pace, fewer reps',
            warmUp: [
              '12 min easy jog at 5:00–5:15/km',
              '4 × 100m strides — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 3:55–4:00/km — controlled hard, RPE 7',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — same effort',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — finish controlled'
            ],
            coolDown: '8 min easy jog — keep moving, don\'t stop cold.',
            focus: 'Same pace band you\'ve been holding, just 3 reps instead of 5 — the down week trims volume, not intensity.',
            paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              'Keeps the threshold habit alive without adding to the week\'s load',
              'Bail rule: 2 reps if legs still feel like last week\'s disruption',
              'Back to 5–6 reps next week once this down week is banked'
            ],
            importance: 'Down weeks hold intensity and cut volume — this is exactly that. Skipping quality entirely would lose feel for the pace; 3 reps keeps it sharp cheaply.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '31 Jul',
          name: 'Rest', meta: 'No structured training', rest: true,
          sessions: [{
            name: 'Rest', meta: 'Usual rest/optional day',
            headline: 'Rest day',
            warmUp: '—',
            mainSet: 'No structured training. Optional 20 min mobility.',
            coolDown: '—',
            focus: 'Sleep, hydration, food.',
            paces: [],
            considerations: ['Protects Saturday\'s long run'],
            importance: 'Down week or not, the rest day before the weekend still matters.'
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '1 Aug',
          name: 'Long easy — no tempo', meta: '11 km · 60 min',
          sessions: [{
            name: 'Long easy run — 11 km', meta: '11 km · 60 min',
            headline: 'Pure aerobic long run — tempo sits out this week',
            warmUp: 'First 1–2 km deliberately slow.',
            mainSet: '11 km continuous at easy aerobic pace — no quality finish.',
            coolDown: 'Walk 5 min after. Refuel within 20 min.',
            focus: 'Full easy. The tempo work resumes next week once this down week has done its job.',
            paces: ['4:45–5:00 /km', 'HR <150', 'RPE 3–4'],
            considerations: [
              'No tempo finish this week — deliberate, not a downgrade',
              'This is the one week where "just get the distance in" is the whole assignment'
            ],
            importance: 'Down weeks need a genuinely easy long run, not a quieter version of a hard one. This is where the previous three weeks of building actually get absorbed.'
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '2 Aug',
          name: 'Long bike — Z2 only', meta: '1:30 · ~40 km',
          sessions: [{
            name: 'Long bike — Z2 only, no SS', meta: '1:30 · ~40 km',
            headline: 'Pure aerobic ride — sweet spot sits out this week too',
            warmUp: '10 min easy building to Z2.',
            mainSet: '1:10 steady Z2 — RPE 3–4, HR 130–145, no intensity blocks.',
            coolDown: '10 min easy spin.',
            focus: 'Genuinely easy. No brick this week either — full recovery day for the legs.',
            paces: ['RPE 3–4', 'HR 130–145'],
            considerations: [
              'No sweet spot blocks this week — they resume in Week 10',
              'No brick run today — the whole point of a down week is a full stand-down',
              'Shorter than the usual 2:00–2:15 — that\'s intentional'
            ],
            importance: 'The down week only works if every session actually backs off. A Z2-only ride with no brick closes the week having asked nothing hard of the legs since Thursday.'
          }]
        }
      ]
    },

    // ================================================================
    // WEEK 10 — Build resumes (3–9 Aug 2026)
    // Down week done (Wed swim + Sat run missed, Sun bike + bonus brick
    // done). Football off Monday again. Thu holds at 5x1km to re-confirm
    // before 6. Sat tempo returns (3km) — hasn't landed in ~4 weeks, worth
    // treating gently rather than jumping distance. Sun SS resumes at
    // 1x15 (last validated block was Week 7 — don't assume 2x15 holds).
    // ================================================================
    {
      id: 'w10',
      number: 10,
      title: 'Build resumes',
      dateRange: '3–9 August',
      year: 2026,
      todayId: 'mon',
      stats: {
        runKm: '~30 km',
        bikeKm: '~50 km',
        swimM: '~1900m',
        totalHours: '~6:30'
      },
      focusHtml: 'Build resumes after the down week. <strong>Thu holds at 5 × 1 km</strong> — re-confirming the progression in a normal week before pushing to 6. <strong>Sat tempo returns at 3 km</strong> — it hasn\'t actually landed since Week 6, so this is a reset rather than a continuation; land this cleanly before extending it again. <strong>Sun sweet spot returns at 1 × 15</strong> (not 2 × 15 — that block was never re-validated after Week 7). Monday adjusted for no football.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '3 Aug',
          name: 'Easy run + optional home S&C', meta: '6 km + optional',
          sessions: [{
            name: 'Easy run + optional home S&C', meta: '6 km · 35 min + optional S&C',
            headline: 'Football off — easy aerobic, not a repeat of Thursday\'s quality',
            warmUp: 'First km deliberately slow.',
            mainSet: '6 km continuous at easy aerobic pace, conversational throughout.',
            coolDown: 'Last 500m drop to walk. Then optional: 3 rounds of 12 squats / 8 push-ups / 10 reverse lunges / 8 single-leg RDLs / 30s plank.',
            focus: 'Easy only. Thursday is this week\'s quality session — no need to double up on Monday.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Football off again this week — same pattern as recent weeks',
              'Home S&C optional bonus, skip if not in the mood',
              'Swap to fartlek via the app if legs feel genuinely fresh and you want more — otherwise easy is the right call'
            ],
            importance: 'Keeps Monday\'s aerobic contribution without competing with Thursday, which is the session actually carrying this week\'s progression test.'
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '4 Aug',
          name: 'Easy run', meta: '7 km · 40 min',
          sessions: [{
            name: 'Easy run', meta: '7 km · 40 min',
            headline: 'Aerobic base — normal Tuesday slot',
            warmUp: 'First km deliberately slow.',
            mainSet: '7 km continuous at easy aerobic pace.',
            coolDown: 'Last 500m drop to walk.',
            focus: 'Conversational. Nothing fancy — this is base-building, not a session to push.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Back to the normal weekly rhythm',
              'No strides, no pace-chasing — save it for Thursday'
            ],
            importance: 'Easy aerobic volume is what makes the harder sessions later in the week possible.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '5 Aug',
          name: 'Swim — technique + aerobic', meta: '1900m · 50 min',
          sessions: [{
            name: 'Swim — technique + aerobic (Type A)', meta: '1900m · 50 min',
            headline: 'Back to the pool after last week\'s miss',
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
            focus: 'Feel the catch. No pressure to chase the 800m TT pace today — this is technique maintenance.',
            paces: ['Main: 1:42–1:47 /100m', 'Speed: 1:38–1:42 /100m', 'Easy: 1:55–2:05 /100m'],
            considerations: [
              'Missed last week — no drama, just get back in',
              'Bring a kickboard',
              'Next Type D benchmark (with an 800m TT) is a few weeks out — this one is just maintenance'
            ],
            importance: 'One missed swim is a non-issue on its own; the pattern only matters if it repeats. Getting back in cleanly this week closes the loop.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '6 Aug',
          name: 'Run quality — 5 × 1 km threshold', meta: '10 km · 55 min',
          sessions: [{
            name: 'Threshold reps — 5 × 1 km', meta: '10 km · 55 min',
            headline: 'Re-confirm 5 reps in a normal week before building to 6',
            warmUp: [
              '15 min easy jog at 5:00–5:15/km — deliberately slow first 5 min',
              '4 × 100m strides — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 3:55–4:00/km — controlled hard, RPE 7',
              '90s easy jog recovery — HR back under 145',
              '1 km at 3:55–4:00/km — same effort as rep 1',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — hold form',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — stay honest, no surging',
              '90s easy jog recovery',
              '1 km at 3:55–4:00/km — finish strong but controlled'
            ],
            coolDown: '10 min easy jog at 5:00–5:15/km — keep moving at least 5 min after the last rep.',
            focus: 'You self-progressed to 5 reps three weeks ago but it\'s never been retested in a clean, normal week since (Week 8 got disrupted, Week 9 was a down week at 3 reps). This is that retest.',
            paces: ['Reps: 3:55–4:00 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              'Same pace band you\'ve been holding — the question this week is whether 5 reps feels routine',
              'Even effort across all 5 — if rep 5 is fastest, you had more in the tank; if it fades badly, 5 is still the right number for now',
              'Bail rule: 4 reps if legs aren\'t cooperating',
              '6 × 1 km is the next step once this lands clean'
            ],
            importance: 'The priority session of the week. Sub-37 is built on repeatable weeks, not one good session three weeks ago — this confirms the progression actually holds before pushing further.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '7 Aug',
          name: 'Rest or optional easy', meta: '30 min · optional', rest: true,
          sessions: [{
            name: 'Rest or optional easy run', meta: '30 min optional',
            headline: 'Recovery day — protects Saturday',
            warmUp: '—',
            mainSet: 'Full rest, or 30 min easy jog if legs feel good.',
            coolDown: '—',
            focus: 'Saturday\'s tempo matters this week — don\'t spend the legs today.',
            paces: ['5:00–5:30 /km if running', 'RPE 2'],
            considerations: [
              'Optional — take the rest if Thursday was hard',
              'Saturday is the session to protect'
            ],
            importance: 'Tempo is finally back on Saturday after a long absence — worth arriving fresh.'
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '8 Aug',
          name: 'Long run + 3km tempo', meta: '12 km · 65 min',
          sessions: [{
            name: 'Long run + 3km tempo finish', meta: '12 km · 65 min',
            headline: 'Tempo returns — first Sat quality since Week 6',
            warmUp: 'First 1–2 km deliberately slow — let HR rise naturally.',
            mainSet: [
              '9 km easy at 4:45–5:00 /km (HR <150) — settle in, no pace-chasing',
              '3 km at 4:10–4:20 /km tempo (HR 155–165) — marathon-pace effort, comfortably hard'
            ],
            coolDown: 'Do NOT stop at the end of the tempo — 5 min easy jog, then 5 min walk. Refuel within 20 min.',
            focus: 'This is a reset, not a continuation — it\'s been almost a month since tempo actually happened. Land 3 km cleanly before thinking about extending it.',
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:20 /km', 'Tempo HR: 155–165'],
            considerations: [
              'Deliberately modest distance given how long it\'s been since this landed',
              'Bail rule: 2 km into the tempo and it feels wrong, run the rest easy — say so at check-in either way',
              'This is the session to protect this week, more than Thursday even'
            ],
            importance: 'Thu lifts the ceiling on fresh legs; Sat teaches you to hold pace on tired ones. The build has been getting the first half consistently but not the second — landing this closes that gap.'
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '9 Aug',
          name: 'Long bike + 1×15 SS + brick', meta: '2:00 + 15 min · ~50 km',
          sessions: [
            {
              name: 'Long bike — 1 × 15 sweet spot', meta: '2:00 · ~50 km',
              headline: 'Sweet spot returns — 1 × 15, not 2 × 15',
              warmUp: '15 min easy spinning, building to Z2 in the last 5 min.',
              mainSet: [
                '40 min steady Z2 — RPE 3–4, HR 130–145',
                '15 min sweet spot — RPE 6–7, HR 145–155',
                '5 min easy spin recovery',
                '45 min steady Z2',
                '5 min cool-down spin'
              ],
              coolDown: '5 min easy spin at RPE 2 before dismounting.',
              focus: 'The last validated sweet-spot block was Week 7\'s single 15-min effort — the 2×15 from Week 8 never actually got tested. Starting from what\'s proven, not what was planned.',
              paces: ['Z2: RPE 3–4, HR 130–145', 'Sweet spot: RPE 6–7, HR 145–155'],
              considerations: [
                'One block, done properly, beats two blocks with the middle one freelanced',
                'Z2 sections should stay genuinely easy — that was the issue three weeks back',
                'Fuel: 30–40 g carbs/hour after the first 60 min',
                '2 × 15 returns next week if this lands controlled'
              ],
              importance: 'Progression should be built on what\'s actually been validated, not on intent. One clean sweet-spot block this week re-opens the door to building back up properly.'
            },
            {
              name: 'Brick run', meta: '15 min easy off the bike',
              headline: 'Short easy brick — neuromuscular only',
              warmUp: 'Straight into running.',
              mainSet: '15 min easy off the bike at conversational pace.',
              coolDown: 'Walk 5 min. Refuel within 20 min.',
              focus: 'Turnover, not pace — you clearly enjoy these, last week\'s bonus brick was a good sign.',
              paces: ['5:00–5:30 /km', 'RPE 3'],
              considerations: [
                'Skip if the SS block emptied the legs',
                'Genuinely easy — this isn\'t the place to push'
              ],
              importance: 'Keeps the bike-to-run transition pattern alive heading toward any future triathlon racing.'
            }
          ]
        }
      ]
    },

    // ================================================================
    // WEEK 11 — New standing template (10–16 Aug 2026)
    // Football is gone for good and Saturday keeps losing to real life,
    // so the two anchors that used to hold the week's shape are gone.
    // New skeleton: quality moves Thu → Tue, long+tempo moves Sat → Fri,
    // with Thu as the rest day protecting Friday. Same logic as before
    // (quality mid-week, rest, second quality, flexible weekend), just
    // shifted two days earlier. Sat is now genuinely open — OWS fits well.
    // ================================================================
    {
      id: 'w11',
      number: 11,
      title: 'New standing template',
      dateRange: '10–16 August',
      year: 2026,
      todayId: 'mon',
      stats: {
        runKm: '~29 km',
        bikeKm: '~50 km',
        swimM: '~2400m',
        totalHours: '~7:00'
      },
      focusHtml: 'New standing weekly template starting this week — football\'s gone for good and Saturday keeps losing to real life, so the week reshapes around what actually happens. <strong>Quality moves Thu → Tue</strong> (6 × 1 km, progressing off last week\'s excellent 5 × 1 km at sub-3:52). <strong>Long run + tempo moves Sat → Fri</strong>, with Thursday as the rest day protecting it. Saturday is now genuinely open — OWS is a good fit there given how well it\'s been going. This is the new default shape, not a one-off adjustment.',
      days: [
        {
          id: 'mon', day: 'Mon', date: '10 Aug',
          name: 'Easy run', meta: '7 km · 40 min',
          sessions: [{
            name: 'Easy run', meta: '7 km · 40 min',
            headline: 'Aerobic base — Monday\'s new permanent shape without football',
            warmUp: 'First km deliberately slow.',
            mainSet: '7 km continuous at easy aerobic pace, conversational throughout.',
            coolDown: 'Last 500m drop to walk.',
            focus: 'Genuinely easy. Tuesday carries this week\'s first quality — no need to add anything here.',
            paces: ['4:50–5:10 /km', 'HR <150', 'RPE 3'],
            considerations: [
              'Football\'s gone for good, so this is now just the standard Monday shape — nothing to adjust week to week',
              'Optional 15–20 min home S&C after if you fancy it — not required',
              'The swap library still has the VO2 bike option if you want more some weeks — that worked well last Monday'
            ],
            importance: 'Easy Monday protects Tuesday\'s quality, which is now the week\'s primary running session.'
          }]
        },
        {
          id: 'tue', day: 'Tue', date: '11 Aug',
          name: 'Run quality — 6 × 1 km threshold', meta: '11 km · 60 min',
          sessions: [{
            name: 'Threshold reps — 6 × 1 km', meta: '11 km · 60 min',
            headline: 'Quality moves here permanently — progressing to 6 reps off last week\'s clean 5',
            warmUp: [
              '15 min easy jog at 5:00–5:15/km — deliberately slow first 5 min',
              '4 × 100m strides — build to fast, not sprints'
            ],
            mainSet: [
              '1 km at 3:50–3:55/km — controlled hard, RPE 7',
              '90s easy jog recovery — HR back under 145',
              '1 km at 3:50–3:55/km — same effort',
              '90s easy jog recovery',
              '1 km at 3:50–3:55/km — hold form',
              '90s easy jog recovery',
              '1 km at 3:50–3:55/km — stay honest',
              '90s easy jog recovery',
              '1 km at 3:50–3:55/km — hold the effort, not just the pace',
              '90s easy jog recovery',
              '1 km at 3:50–3:55/km — finish strong but controlled'
            ],
            coolDown: '10 min easy jog at 5:00–5:15/km — keep moving at least 5 min after the last rep.',
            focus: 'Pace nudged down from 3:55–4:00 to 3:50–3:55 — you ran sub-3:52 comfortably last time, so the band moves to match. One more rep is the main progression; the tighter pace reflects where you actually are.',
            paces: ['Reps: 3:50–3:55 /km', 'Recovery: 90s jog', 'HR 165–172'],
            considerations: [
              'First week of quality on Tuesday — full week ahead to recover before Friday\'s tempo',
              'Even effort across all 6 — last week\'s reps got quicker as they went, so you have room to hold this pace steady rather than negative-split',
              'Bail rule: 5 reps if the 6th feels like a genuine reach',
              'Next progression: 3 × 2 km, once 6 × 1 km at this pace feels routine'
            ],
            importance: 'This is now the week\'s primary quality session. Landing 6 reps at a tighter pace band confirms last week\'s strong session wasn\'t a one-off — that\'s what sub-37 is actually built on.'
          }]
        },
        {
          id: 'wed', day: 'Wed', date: '12 Aug',
          name: 'Swim — endurance', meta: '2400m · 60 min',
          sessions: [{
            name: 'Swim — endurance (Type B)', meta: '2400m · 60 min',
            headline: 'Rotation continues — longer continuous chunks',
            warmUp: [
              '200m easy freestyle',
              '100m kick with board',
              '4 × 50m as 25m drill / 25m swim'
            ],
            mainSet: [
              '3 × 400m at 1:46–1:50 /100m with 45s rest — pace nudged down slightly given how strong recent swims have felt',
              '4 × 50m at 1:36–1:40 /100m with 20s rest — sharp finish'
            ],
            coolDown: '200m easy freestyle, mixing strokes.',
            focus: 'Long chunks, stable stroke count. Last Wednesday\'s 1:41 average was excellent — see if that translates to sustained 400m efforts too.',
            paces: ['Long/endurance: 1:46–1:50 /100m', 'Speed: 1:36–1:40 /100m', 'Easy: 1:55–2:05 /100m'],
            considerations: [
              'Pace bands nudged down slightly off last week\'s strong technique swim — not a full zone rewrite, just a small honest adjustment',
              'Count strokes on first/last 25 of each 400 — rising stroke count means the pace is too hot',
              'Alternative: 2 × 600m at 1:48 /100m if you\'d rather fewer, longer reps'
            ],
            importance: 'Endurance swims build the aerobic ceiling and pace discipline over race-relevant distances. Continuing the rotation keeps variety while tracking the recent fitness bump.'
          }]
        },
        {
          id: 'thu', day: 'Thu', date: '13 Aug',
          name: 'Rest', meta: 'Protects Friday', rest: true,
          sessions: [{
            name: 'Rest', meta: 'Usual rest day',
            headline: 'Rest — the buffer between Tuesday\'s quality and Friday\'s tempo',
            warmUp: '—',
            mainSet: 'No structured training. Optional 15–20 min mobility.',
            coolDown: '—',
            focus: 'This is the day that makes the new template work — the gap between Tuesday and Friday\'s hard sessions.',
            paces: [],
            considerations: [
              'Don\'t sneak in an easy run — this is what protects Friday',
              'Sleep, hydration, food'
            ],
            importance: 'Two hard running days need a genuine rest day between them, not just a cross-training day. This is that day.'
          }]
        },
        {
          id: 'fri', day: 'Fri', date: '14 Aug',
          name: 'Long run + 3km tempo', meta: '12 km · 65 min',
          sessions: [{
            name: 'Long run + 3km tempo finish', meta: '12 km · 65 min',
            headline: 'Tempo moves here permanently — landing it matters more than distance right now',
            warmUp: 'First 1–2 km deliberately slow — let HR rise naturally.',
            mainSet: [
              '9 km easy at 4:45–5:00 /km (HR <150) — settle in, no pace-chasing',
              '3 km at 4:10–4:20 /km tempo (HR 155–165) — marathon-pace effort, comfortably hard'
            ],
            coolDown: 'Do NOT stop at the end of the tempo — 5 min easy jog, then 5 min walk. Refuel within 20 min.',
            focus: 'Kept deliberately at 3 km again — this session has been missing or swapped for over a month, so the job this week is simply landing it clean, not extending it.',
            paces: ['Easy: 4:45–5:00 /km', 'Tempo: 4:10–4:20 /km', 'Tempo HR: 155–165'],
            considerations: [
              'This is now the week\'s second quality, permanently on Friday — Saturday is yours from here on',
              'Bail rule: 2 km into the tempo and it feels wrong, run the rest easy',
              'Once this lands clean two weeks running, tempo extends to 4 km'
            ],
            importance: "Tuesday lifts the ceiling on fresh legs; this teaches you to hold pace on tired ones. Both matter for sub-37, and this is the half that's been missing for over a month — the new Friday slot exists specifically to fix that."
          }]
        },
        {
          id: 'sat', day: 'Sat', date: '15 Aug',
          name: 'Flexible — no fixed session', meta: 'Your call', rest: true,
          sessions: [{
            name: 'Flexible day — OWS, easy movement, or rest', meta: 'Your call',
            headline: 'Genuinely open — this is what Saturday is now',
            warmUp: '—',
            mainSet: 'Whatever fits: open water swim, an easy short run, a walk, or full rest. No prescription this week — you said Saturday won\'t work for the long run, so nothing is expected here.',
            coolDown: '—',
            focus: 'No guilt, no bail rule needed — there\'s nothing to bail from.',
            paces: [],
            considerations: [
              'OWS has been going brilliantly recently — a great fit for this slot if it\'s on offer',
              'The long run + tempo now lives on Friday, so Saturday carries no training obligation',
              'Log whatever you end up doing so next week\'s plan accounts for it'
            ],
            importance: 'Saturday kept losing to real life for two months — rather than keep fighting that, the week is now built around it. This slot exists for whatever life or motivation offers that day.'
          }]
        },
        {
          id: 'sun', day: 'Sun', date: '16 Aug',
          name: 'Long bike + 1×15 SS + brick', meta: '2:00 + 15 min · ~50 km',
          sessions: [
            {
              name: 'Long bike — 1 × 15 sweet spot', meta: '2:00 · ~50 km',
              headline: 'Sweet spot progression resumes — kept flexible given a genuinely uncertain weekend',
              warmUp: '15 min easy spinning, building to Z2 in the last 5 min.',
              mainSet: [
                '40 min steady Z2 — RPE 3–4, HR 130–145',
                '15 min sweet spot — RPE 6–7, HR 145–155',
                '5 min easy spin recovery',
                '45 min steady Z2',
                '5 min cool-down spin'
              ],
              coolDown: '5 min easy spin at RPE 2 before dismounting.',
              focus: 'Same shape as two weeks ago — one clean block, matched effort, honest Z2 around it.',
              paces: ['Z2: RPE 3–4, HR 130–145', 'Sweet spot: RPE 6–7, HR 145–155'],
              considerations: [
                'Fully skippable this week if the weekend doesn\'t allow it — no pressure, log what actually happens',
                'Fuel: 30–40 g carbs/hour after 60 min',
                '2 × 15 returns once this lands clean twice running'
              ],
              importance: 'Bike sits behind the run priority — this resumes the thread from two weeks back without forcing it if life doesn\'t cooperate.'
            },
            {
              name: 'Brick run', meta: '15 min easy off the bike',
              headline: 'Short easy brick — only if the bike happens',
              warmUp: 'Straight into running.',
              mainSet: '15 min easy off the bike at conversational pace.',
              coolDown: 'Walk 5 min. Refuel within 20 min.',
              focus: 'Turnover, not pace.',
              paces: ['5:00–5:30 /km', 'RPE 3'],
              considerations: [
                'Skip if the bike doesn\'t happen or legs are cooked',
                'Genuinely easy'
              ],
              importance: 'Keeps the bike-to-run transition pattern alive for any future triathlon racing.'
            }
          ]
        }
      ]
    }

  ]
};

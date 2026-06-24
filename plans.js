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
      todayId: 'wed',
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
    }

  ]
};

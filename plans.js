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
    // WEEK 3 — Pre-holiday compressed (1–7 June 2026)
    // ================================================================
    {
      id: 'w03',
      number: 3,
      title: 'Pre-holiday compressed',
      dateRange: '1–7 June',
      year: 2026,
      todayId: 'mon',
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
    }

    // ================================================================
    // FUTURE WEEKS — add new entries here
    // ================================================================
    // {
    //   id: 'w04',
    //   number: 4,
    //   title: 'Re-entry',
    //   ...
    // }

  ]
};

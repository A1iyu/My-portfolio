/**
 * CERTIFICATE / PROGRAMME DETAILS
 * To add photos: drop the image into assets/gallery/<id>/ and add a line to that
 * entry's "gallery" list below, e.g.
 *   { src: "assets/gallery/icse/team.jpg", caption: "With the ICSE team" }
 * Use "type: 'pdf'" for a PDF certificate to open it in a new tab, "fit: 'contain'" to show
 * a wide image (like a certificate) without cropping, "verifyUrl" for a verification link, and
 * "type: 'video'" with src + poster for a video (it plays in the viewer). Optional "thumb" = smaller preview image.
 */
const CERT_DATA = {
  "dta": {
    title: "Cybersecurity",
    issuer: "Digital Training Academy (DTA) and Coursera",
    badge: "In progress", badgeClass: "badge-in-progress",
    logo: "assets/logo_dta.png",
    tags: ["Threat Analysis", "Defense", "Coursera"],
    description: "Cybersecurity training delivered through the Digital Training Academy (DTA) alongside Coursera courses. Currently in progress.",
    gallery: []
  },
  "tvet": {
    title: "Electrical and Solar PV installation and maintenance",
    issuer: "FME TVET Initiative · John Bosco Institute of Technology Nigeria (JOBITECH)",
    badge: "In progress", badgeClass: "badge-in-progress",
    logo: "assets/logo_tvet_jobitech.png",
    tags: ["Solar PV", "Electrical", "JOBITECH"],
    description: "Hands-on technical training in electrical work and solar PV installation and maintenance under the FME TVET Initiative. Currently in progress.",
    layout: "story",
    galleryHeading: "My TVET Story",
    gallery: [
      { src: "assets/gallery/tvet/tvet-workshop-selfie.jpg", thumb: "assets/gallery/tvet/tvet-workshop-selfie-thumb.jpg",
        title: "Day One Energy", tagline: "Starting the day in the workshop with my classmates",
        caption: "Selfie with classmates in the workshop",
        story: ["Hard hats on, coveralls zipped up, and a quick selfie before the practical started. The electrical workshop is where this programme stops being theory and starts being something you do with your hands."] },
      { src: "assets/gallery/tvet/tvet-group-photo.jpg", thumb: "assets/gallery/tvet/tvet-group-photo-thumb.jpg",
        title: "The Crew", tagline: "Still full of energy",
        caption: "Group photo in coveralls and hard hats",
        story: ["Still just having fun at the workshop, and still full of energy, here with some of the crew."] },
      { src: "assets/gallery/tvet/tvet-wiring-practice.jpg", thumb: "assets/gallery/tvet/tvet-wiring-practice-thumb.jpg",
        title: "Hands on the Wiring", tagline: "Where the practice happens",
        caption: "Wiring practice at the electrical training board",
        story: ["At the training board, we practised installing and connecting electrical components. Slow, careful, step-by-step work is how the basics become habits."] },
      { src: "assets/gallery/tvet/tvet-training-board.jpg", thumb: "assets/gallery/tvet/tvet-training-board-thumb.jpg",
        title: "A Job Well Done", tagline: "Selfie in front of the finished work",
        caption: "Selfie in front of a finished job at the training board",
        story: ["The wiring was done, so I took a quick selfie in front of the finished job. There is a good feeling in seeing something you installed yourself come together."] },
      { type: "video", src: "assets/gallery/tvet/tvet-video-1.mp4", poster: "assets/gallery/tvet/tvet-video-1-poster.jpg",
        title: "Learning the Tools", tagline: "Practical skills beyond the board",
        caption: "Practical session: working on a wall with a power tool",
        story: ["Not everything in the programme happens at a desk. In this practical session I got hands-on with a power tool, working on a wall the way an installer would."] },
      { src: "assets/gallery/tvet/tvet-solar-roof.jpg", thumb: "assets/gallery/tvet/tvet-solar-roof-thumb.jpg",
        title: "Up on the Roof", tagline: "From the workshop to the real thing",
        caption: "Solar panel installation on the roof",
        story: ["The Solar PV part of the programme took us out of the workshop and onto a roof. Planning, safety and teamwork all have to come together up here."] },
      { type: "video", src: "assets/gallery/tvet/tvet-video-2.mp4", poster: "assets/gallery/tvet/tvet-video-2-poster.jpg",
        title: "Panels Going Up", tagline: "It takes a team to lift a panel",
        caption: "Solar panels going up to the roof",
        story: ["Getting solar panels from the ground to the roof is a team job: someone on the ladder, someone guiding from below, everyone watching the weight and the edge."] },
      { type: "video", src: "assets/gallery/tvet/tvet-video-3.mp4", poster: "assets/gallery/tvet/tvet-video-3-poster.jpg",
        title: "Fixing It in Place", tagline: "The final stretch on the roof",
        caption: "Working on the roof during the solar installation",
        story: ["Once the panels are up, they have to be secured properly. A close-up of the work on the roof, where every fixing matters."] }
    ]
  },
  "3mtt": {
    title: "Software Development Programme",
    issuer: "3 Million Technical Talent (3MTT), Federal Government of Nigeria",
    badge: "Sep 2026", badgeClass: "badge-date",
    logo: "assets/logo_3mtt.png",
    tags: ["Frontend", "JavaScript", "Federal Govt"],
    description: "Completed the Software Development course under the Federal Government's 3MTT Initiative on 5 September 2026. The programme focused on frontend development with HTML, CSS, JavaScript and Git/GitHub workflows.",
    verifyUrl: "https://app.3mtt.training/verify?id=FE/23/23077464",
    gallery: [
      { src: "assets/gallery/3mtt/certificate.png", caption: "Certificate of Completion, 5 September 2026", fit: "contain" },
      { src: "assets/gallery/3mtt/3mtt-software-development-certificate.pdf", caption: "Download certificate (PDF)", type: "pdf" }
    ]
  },
  "iita-yas": {
    title: "Youth in Agribusiness Programme",
    issuer: "International Institute of Tropical Agriculture (IITA YAS)",
    badge: "May 2025", badgeClass: "badge-date",
    logo: "assets/logo_iita_yas.png",
    tags: ["Agribusiness Tech", "IITA", "CGIAR"],
    description: "Youth in Agribusiness programme run by IITA, with hands-on training in apiary (beekeeping) and yam seed production.",
    layout: "story",
    galleryHeading: "My IITA YAS Story",
    gallery: [
      { src: "assets/gallery/iita-yas/yas-field-selfie.jpg", thumb: "assets/gallery/iita-yas/yas-field-selfie-thumb.jpg",
        title: "Into the Field", tagline: "Green coveralls, big smiles",
        caption: "Selfie in green coveralls at the yam seed production site",
        story: [
          "Suited up in green coveralls and out at the yam seed production site, with rows of grow bags lined up behind us. The YAS programme was classroom and field in equal parts, and this was the field.",
          "Yam is not grown from true seeds but from pieces of tuber, so good planting material is scarce and expensive. Seeing a production site laid out with plants in bags rather than on open ridges showed me one way that supply problem can be tackled."] },
      { src: "assets/gallery/iita-yas/yas-yam-vines.jpg", thumb: "assets/gallery/iita-yas/yas-yam-vines-thumb.jpg",
        title: "Yams Reaching Up", tagline: "Where the seed yams grow",
        caption: "Yam vines growing in bags and climbing stakes",
        story: [
          "Yam vines growing out of bags and climbing stakes tied together with string lines. Training the vines upward keeps the leaves off the ground and in the light, which supports healthy growth and makes each plant easier to inspect.",
          "Growing in bags also keeps the setup compact and lets you manage soil, water and pests plant by plant. It is a good example of agribusiness thinking: get more out of a small space."] },
      { src: "assets/gallery/iita-yas/yas-yam-demo.jpg", thumb: "assets/gallery/iita-yas/yas-yam-demo-thumb.jpg",
        title: "Learning the Process", tagline: "A demonstration for the whole group",
        caption: "Group watching a yam seed demonstration",
        story: [
          "A hands-on demonstration with the whole group gathered around, tubers and pans laid out on the table. We watched how yam is prepared and handled before planting, then asked questions.",
          "Seeing each step done in front of you makes it much easier to understand why it matters for the quality of the planting material, and to try it yourself afterwards."] },
      { src: "assets/gallery/iita-yas/yas-yam-seed-crate.jpg", thumb: "assets/gallery/iita-yas/yas-yam-seed-crate-thumb.jpg",
        title: "Seed Yams", tagline: "The raw material for the next crop",
        caption: "A crate of yam tubers and cut pieces",
        story: [
          "A crate of yam tubers and cut pieces, the starting material for the next crop. Because yam is propagated from pieces of tuber, the size, health and handling of each piece decides how well it sprouts.",
          "Quality planting material is one of the biggest bottlenecks for yam farmers, which is exactly why seed production is a business opportunity in itself."] },
      { src: "assets/gallery/iita-yas/yas-apiary-group.jpg", thumb: "assets/gallery/iita-yas/yas-apiary-group-thumb.jpg",
        title: "Into the Apiary", tagline: "Learning beekeeping among the trees",
        caption: "The cohort in green coveralls at the apiary",
        story: [
          "The cohort in green coveralls gathering in the woodland where the apiary is set up, ready for the beekeeping sessions.",
          "Beekeeping can be started with modest space and capital, and it adds honey, wax and pollination benefits to a farm, which is why it sat alongside crop production in the programme."] },
      { src: "assets/gallery/iita-yas/yas-bee-suits.jpg", thumb: "assets/gallery/iita-yas/yas-bee-suits-thumb.jpg",
        title: "Suited Up for the Bees", tagline: "Protection comes first",
        caption: "Putting on beekeeping protective suits",
        story: [
          "Protective suits, veils and gloves come before anything else when working near a hive. Here the group practises putting them on while a trainer helps with the fit.",
          "A small gap at the wrist or neck is enough to let bees in, so checking every fastening matters. Good protection keeps you calm, and calm handling keeps the colony calm."] },
      { src: "assets/gallery/iita-yas/yas-hives-group.jpg", thumb: "assets/gallery/iita-yas/yas-hives-group-thumb.jpg",
        title: "Meeting the Hives", tagline: "The team at the apiary",
        caption: "Group photo at the apiary beside the beehives",
        story: [
          "The group beside the hives, set among the trees on simple benches. A photo that sums up the day at the apiary.",
          "Hives do best in a quiet, shaded and sheltered spot, which is what this site offered."] },
      { src: "assets/gallery/iita-yas/yas-hive-lid.jpg", thumb: "assets/gallery/iita-yas/yas-hive-lid-thumb.jpg",
        title: "Up Close with a Hive", tagline: "The box where the colony lives",
        caption: "Close-up of a wooden beehive lid",
        story: [
          "A close-up of a wooden hive: the box and lid that form a colony’s home. The roof keeps rain and sun off the colony while the boxes underneath hold the combs.",
          "Seeing a hive built from plain wooden boards made beekeeping feel achievable. With basic carpentry and the right know-how, a hive can be built locally."] },
      { src: "assets/gallery/iita-yas/yas-cohort.jpg", thumb: "assets/gallery/iita-yas/yas-cohort-thumb.jpg",
        title: "The Cohort", tagline: "Everyone together at the end",
        caption: "Group photo of the cohort with certificates",
        story: [
          "The whole cohort together at the end of the training, certificates in hand, in front of the venue.",
          "The YAS project, implemented by IITA with its partners, brought people from different backgrounds together to learn how innovative technologies can help scale agribusiness."] },
      { src: "assets/gallery/iita-yas/yas-certificate-day.jpg", thumb: "assets/gallery/iita-yas/yas-certificate-day-thumb.jpg",
        title: "Certificate Day", tagline: "A proud moment",
        caption: "Receiving the certificate",
        story: [
          "Collecting my certificate at the end of the programme.",
          "A proud moment after the classes and field sessions on yam seed production and beekeeping."] },
      { src: "assets/gallery/iita-yas/yas-certificate.jpg", thumb: "assets/gallery/iita-yas/yas-certificate-thumb.jpg",fit: "contain",
        title: "Certificate of Participation", tagline: "Awarded May 2025",
        caption: "Certificate of Participation, May 2025",
        story: [
          "The Certificate of Participation for the agribusiness training organised by the Youth in Agribusiness project, enabling the scaling of innovative technologies for sustainable food solutions. It is signed by the YAS project’s Executive Manager and Training Coordinator.",
          "Click the image to read it in full."] },
      { src: "assets/gallery/iita-yas/yas-broilnest-cert.jpg", thumb: "assets/gallery/iita-yas/yas-broilnest-cert-thumb.jpg",fit: "contain",
        title: "What Came Next: Broilnest Ventures", tagline: "From training to a registered business",
        caption: "Certificate of Registration for Broilnest Ventures",
        story: [
          "After completing the YAS programme, I took the next step and registered Broilnest Ventures, a farming business, with the Corporate Affairs Commission (CAC).",
          "The certificate is dated 1 September 2025 and registers the business name under the Companies and Allied Matters Act 2020. It is where the agribusiness training stopped being a course and became something I am building."] }
    ]
  },
  "siyb": {
    title: "Start Your Business Programme",
    issuer: "International Labour Organization (ILO SYB)",
    badge: "Aug 2025", badgeClass: "badge-date",
    logo: "assets/logo_siyb_ilo.png",
    tags: ["Business Planning", "ILO SIYB", "Enterprise"],
    description: "Entrepreneurship training from the ILO Start and Improve Your Business (SIYB) programme, covering business planning and enterprise basics.",
    layout: "story",
    galleryHeading: "My SIYB Story",
    gallery: [
      { src: "assets/gallery/siyb/siyb-group-steps.jpg", thumb: "assets/gallery/siyb/siyb-group-steps-thumb.jpg",
        title: "Day One at SYB", tagline: "The cohort on the steps",
        caption: "The SIYB cohort on the steps outside the venue",
        story: [
          "The cohort gathered on the steps outside the training venue for a group photo. We came from different backgrounds and with different business ideas, all there to learn how to start a business properly.",
          "The ILO’s Start and Improve Your Business (SIYB) programme is designed for people at the very beginning of the entrepreneurship journey, helping turn an idea into a plan."] },
      { src: "assets/gallery/siyb/siyb-classroom.jpg", thumb: "assets/gallery/siyb/siyb-classroom-thumb.jpg",
        title: "In Class", tagline: "Learning to plan the business",
        caption: "Facilitator presenting the Start Your Business course",
        story: [
          "A facilitator walks the class through a session, with the Start Your Business slides on the projector and workbooks and notes spread across the table.",
          "The course works through the essentials of starting out, such as testing your business idea, understanding customers and competitors, costing and pricing, and planning your finances, so that you finish with a business plan of your own."] },
      { src: "assets/gallery/siyb/siyb-workbooks.jpg", thumb: "assets/gallery/siyb/siyb-workbooks-thumb.jpg",
        title: "Workbooks in Hand", tagline: "The plan starts here",
        caption: "Participants holding their Start Your Business workbooks",
        story: [
          "With our Start Your Business workbooks outside the venue. The workbook is at the heart of the course, and its exercises are completed for your own business idea.",
          "Working on your own idea as you go makes the course practical rather than theoretical, and gives you something real to take away."] }
    ]
  },
  "icse": {
    title: "International Conference on Smart Education and Digital Literacy (ICSE)",
    issuer: "UBEC Digital Resource Center (DRC) · Volunteer",
    badge: "6 to 9 May 2025", badgeClass: "badge-date",
    logo: "assets/logo_icse_ubec.png",
    tags: ["Smart Education", "Timekeeping & AV", "UBEC DRC"],
    description: "Volunteered at ICSE 2025 with the UBEC Digital Resource Center, supporting timekeeping and audio-visual needs during the conference.",
    gallery: [
      { src: "assets/gallery/icse/icse-stage-timer.jpg", caption: "Session timer running on the stage screen" },
      { src: "assets/gallery/icse/icse-stage-backdrop.jpg", caption: "Main stage and sponsor backdrop at ICSE 2025" },
      { src: "assets/gallery/icse/icse-guests.jpg", caption: "Guests and delegates at the conference venue" },
      { src: "assets/gallery/icse/icse-official-badge.jpg", caption: "My Officials badge for ICSE 2025" }
    ]
  }
};

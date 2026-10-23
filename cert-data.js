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
        story: ["Suited up in green coveralls and out at the yam seed production site, with the grow bags lined up behind us. The programme was as hands-on as it gets."] },
      { src: "assets/gallery/iita-yas/yas-yam-vines.jpg", thumb: "assets/gallery/iita-yas/yas-yam-vines-thumb.jpg",
        title: "Yams Reaching Up", tagline: "Where the seed yams grow",
        caption: "Yam vines growing in bags on stakes",
        story: ["Yam vines growing in bags and trained up poles. This is the setup used for yam seed production, and a good look at how the crop is grown on a small footprint."] },
      { src: "assets/gallery/iita-yas/yas-yam-demo.jpg", thumb: "assets/gallery/iita-yas/yas-yam-demo-thumb.jpg",
        title: "Learning the Process", tagline: "A demonstration for the whole group",
        caption: "Group watching a yam seed demonstration",
        story: ["Everyone gathered around for a hands-on demonstration of how yam is prepared and handled in seed production."] },
      { src: "assets/gallery/iita-yas/yas-yam-seed-crate.jpg", thumb: "assets/gallery/iita-yas/yas-yam-seed-crate-thumb.jpg",
        title: "Seed Yams", tagline: "The raw material for the next crop",
        caption: "A crate of yam tubers and cut pieces",
        story: ["A crate of yam tubers and cut pieces, the starting material for planting the next crop."] },
      { src: "assets/gallery/iita-yas/yas-apiary-group.jpg", thumb: "assets/gallery/iita-yas/yas-apiary-group-thumb.jpg",
        title: "Into the Apiary", tagline: "Learning beekeeping among the trees",
        caption: "The cohort in green coveralls at the apiary",
        story: ["The cohort in green coveralls gathering in the woodland where the apiary is set up, ready to learn beekeeping first-hand."] },
      { src: "assets/gallery/iita-yas/yas-bee-suits.jpg", thumb: "assets/gallery/iita-yas/yas-bee-suits-thumb.jpg",
        title: "Suited Up for the Bees", tagline: "Protection comes first",
        caption: "Putting on beekeeping protective suits",
        story: ["Protective suits, veils and gloves come before anything else when working near a hive. Here the group practises putting them on properly."] },
      { src: "assets/gallery/iita-yas/yas-hives-group.jpg", thumb: "assets/gallery/iita-yas/yas-hives-group-thumb.jpg",
        title: "Meeting the Hives", tagline: "The team at the apiary",
        caption: "Group photo at the apiary beside the beehives",
        story: ["A group photo beside the hives, a nice moment from the apiary training."] },
      { src: "assets/gallery/iita-yas/yas-hive-lid.jpg", thumb: "assets/gallery/iita-yas/yas-hive-lid-thumb.jpg",
        title: "Up Close with a Hive", tagline: "The box where the colony lives",
        caption: "Close-up of a wooden beehive lid",
        story: ["A close-up of a wooden beehive, the box and lid that give a colony its home and, in time, produce honey."] },
      { src: "assets/gallery/iita-yas/yas-cohort.jpg", thumb: "assets/gallery/iita-yas/yas-cohort-thumb.jpg",
        title: "The Cohort", tagline: "Everyone together at the end",
        caption: "Group photo of the cohort with certificates",
        story: ["The whole cohort together at the end of the training, certificates in hand."] },
      { src: "assets/gallery/iita-yas/yas-certificate-day.jpg", thumb: "assets/gallery/iita-yas/yas-certificate-day-thumb.jpg",
        title: "Certificate Day", tagline: "A proud moment",
        caption: "Receiving the certificate",
        story: ["Collecting my certificate at the end of the programme."] },
      { src: "assets/gallery/iita-yas/yas-certificate.jpg", thumb: "assets/gallery/iita-yas/yas-certificate-thumb.jpg", fit: "contain",
        title: "Certificate of Participation", tagline: "Awarded May 2025",
        caption: "Certificate of Participation, May 2025",
        story: ["The Certificate of Participation for the agribusiness training organised by the Youth in Agribusiness project, enabling the scaling of innovative technologies for sustainable food solutions. Click the image to read it in full."] }
    ]
  },
  "siyb": {
    title: "Start Your Business Programme",
    issuer: "International Labour Organization (ILO SYB)",
    badge: "Aug 2025", badgeClass: "badge-date",
    logo: "assets/logo_siyb_ilo.png",
    tags: ["Business Planning", "ILO SIYB", "Enterprise"],
    description: "Entrepreneurship training from the ILO Start and Improve Your Business (SIYB) programme, covering business planning and enterprise basics.",
    gallery: []
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

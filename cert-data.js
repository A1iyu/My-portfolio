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
    badge: "Jan 2024", badgeClass: "badge-date",
    logo: "assets/logo_iita_yas.png",
    tags: ["Agribusiness Tech", "IITA", "CGIAR"],
    description: "Youth in Agribusiness programme run by IITA (Youth Agripreneurs).",
    gallery: []
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

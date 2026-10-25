/**
 * CERTIFICATE / PROGRAMME DETAILS
 * To add photos: drop the image into assets/gallery/<id>/ and add an entry to that programme's "gallery" list.
 *
 * Plain grid entries:   { src, thumb?, caption, fit?: "contain" | type: "pdf" | type: "video" + poster }
 * Story layout ("layout: 'story'") entries also take:
 *   title, tagline, story: ["paragraph", ...],
 *   group: "Heading shown above this story",
 *   more:  [ extra photos/videos shown under the main one ]
 * And the programme can have:
 *   intro: { title, tagline, text: [...] }   (shown above the stories)
 *   outro: { title, tagline, text: [...] }   (shown after the stories)
 *   verifyUrl: link to verify the credential
 */
const CERT_DATA = {
  "dta": {
    "title": "Cybersecurity",
    "issuer": "Digital Training Academy (DTA) and Coursera",
    "badge": "In progress",
    "badgeClass": "badge-in-progress",
    "logo": "assets/logo_dta.png",
    "tags": [
      "Threat Analysis",
      "Defense",
      "Coursera"
    ],
    "description": "Cybersecurity training delivered through the Digital Training Academy (DTA) alongside Coursera courses. Currently in progress.",
    "gallery": []
  },
  "tvet": {
    "title": "Electrical and Solar PV installation and maintenance",
    "issuer": "FME TVET Initiative · John Bosco Institute of Technology Nigeria (JOBITECH)",
    "badge": "In progress",
    "badgeClass": "badge-in-progress",
    "logo": "assets/logo_tvet_jobitech.png",
    "tags": [
      "Solar PV",
      "Electrical",
      "JOBITECH"
    ],
    "description": "Hands-on technical training in electrical work and solar PV installation and maintenance under the FME TVET Initiative. Currently in progress.",
    "layout": "story",
    "gallery": [
      {
        "src": "assets/gallery/tvet/tvet-workshop-selfie.jpg",
        "thumb": "assets/gallery/tvet/tvet-workshop-selfie-thumb.jpg",
        "title": "Before the Work Begins",
        "tagline": "Every practical session starts somewhere.",
        "caption": "Before the Work Begins",
        "story": [
          "Hard hats on, coveralls zipped up, and a quick selfie with my classmates before getting started. A little moment before the tools came out and the real work began."
        ]
      },
      {
        "src": "assets/gallery/tvet/tvet-group-photo.jpg",
        "thumb": "assets/gallery/tvet/tvet-group-photo-thumb.jpg",
        "title": "Good Company, Good Energy",
        "tagline": "Learning is better with a team.",
        "caption": "Good Company, Good Energy",
        "story": [
          "The workshop wasn’t just about the technical skills. It was also about learning alongside people, sharing the experience, and making memories along the way."
        ]
      },
      {
        "src": "assets/gallery/tvet/tvet-wiring-practice.jpg",
        "thumb": "assets/gallery/tvet/tvet-wiring-practice-thumb.jpg",
        "title": "Connecting the Pieces",
        "tagline": "Learning the work, one connection at a time.",
        "caption": "Connecting the Pieces",
        "story": [
          "At the training board, we practised installing and connecting electrical components. Each step required attention and care, reminding me that getting the basics right is what makes the bigger picture work."
        ]
      },
      {
        "src": "assets/gallery/tvet/tvet-training-board.jpg",
        "thumb": "assets/gallery/tvet/tvet-training-board-thumb.jpg",
        "title": "Seeing the Work Come Together",
        "tagline": "There’s a difference between learning a process and seeing the result.",
        "caption": "Seeing the Work Come Together",
        "story": [
          "With the wiring completed, I took a moment to appreciate the finished work. It’s satisfying to see the individual connections come together into something you can actually point to and say, \"I worked on that.\""
        ]
      },
      {
        "type": "video",
        "src": "assets/gallery/tvet/tvet-video-1.mp4",
        "poster": "assets/gallery/tvet/tvet-video-1-poster.jpg",
        "title": "Beyond the Training Board",
        "tagline": "Getting comfortable with the tools of the trade.",
        "caption": "Beyond the Training Board",
        "story": [
          "Practical training means learning to work with the tools involved, not just understanding the theory. This session gave me another opportunity to build familiarity with the equipment used in installation work."
        ]
      },
      {
        "src": "assets/gallery/tvet/tvet-solar-roof.jpg",
        "thumb": "assets/gallery/tvet/tvet-solar-roof-thumb.jpg",
        "title": "Taking It to the Roof",
        "tagline": "From the workshop to a real installation setting.",
        "caption": "Taking It to the Roof",
        "story": [
          "The solar PV sessions took us onto the roof, where the work introduced another set of considerations. Working at height called for attention to safety, coordination, and how each stage of the installation fitted into the next."
        ]
      },
      {
        "type": "video",
        "src": "assets/gallery/tvet/tvet-video-2.mp4",
        "poster": "assets/gallery/tvet/tvet-video-2-poster.jpg",
        "title": "Getting the Panels into Position",
        "tagline": "Some jobs are better done together.",
        "caption": "Getting the Panels into Position",
        "story": [
          "Moving solar panels onto the roof required teamwork and coordination. Everyone had a part to play, from guiding the panels to handling them carefully as they were lifted into position."
        ]
      },
      {
        "type": "video",
        "src": "assets/gallery/tvet/tvet-video-3.mp4",
        "poster": "assets/gallery/tvet/tvet-video-3-poster.jpg",
        "title": "Securing the Installation",
        "tagline": "The details matter just as much as the big picture.",
        "caption": "Securing the Installation",
        "story": [
          "With the panels in position, the next step was securing them properly. It was a reminder that an installation isn’t just about getting everything into place; the details and the way each component is fixed matter too."
        ]
      }
    ],
    "intro": {
      "title": "TVET: Electrical and Solar Installation",
      "tagline": "Learning by doing, one connection at a time.",
      "text": [
        "Some skills make more sense when you get your hands on them. Through the TVET programme, I began exploring electrical installation and solar PV through practical sessions, working with tools, connecting components, and learning alongside my classmates. It was an opportunity to move beyond what I could learn from a screen and experience the work firsthand."
      ]
    },
    "outro": {
      "title": "More Than a Training Certificate",
      "tagline": "Building skills I can continue to develop.",
      "text": [
        "This programme gave me an opportunity to explore a practical field beyond my usual computer-based work. I’m still learning, but every hands-on experience adds something new to what I know and what I can work towards next."
      ]
    }
  },
  "3mtt": {
    "title": "Software Development Programme",
    "issuer": "3 Million Technical Talent (3MTT), Federal Government of Nigeria",
    "badge": "Sep 2026",
    "badgeClass": "badge-date",
    "logo": "assets/logo_3mtt.png",
    "tags": [
      "Frontend",
      "JavaScript",
      "Federal Govt"
    ],
    "description": "Completed the Software Development course under the Federal Government's 3MTT Initiative on 5 September 2026. The programme focused on frontend development with HTML, CSS, JavaScript and Git/GitHub workflows.",
    "verifyUrl": "https://app.3mtt.training/verify?id=FE/23/23077464",
    "gallery": [
      {
        "src": "assets/gallery/3mtt/certificate.png",
        "caption": "Certificate of Completion, 5 September 2026",
        "fit": "contain"
      },
      {
        "src": "assets/gallery/3mtt/3mtt-software-development-certificate.pdf",
        "caption": "Download certificate (PDF)",
        "type": "pdf"
      }
    ]
  },
  "iita-yas": {
    "title": "Youth in Agribusiness Programme",
    "issuer": "International Institute of Tropical Agriculture (IITA YAS)",
    "badge": "May 2025",
    "badgeClass": "badge-date",
    "logo": "assets/logo_iita_yas.png",
    "tags": [
      "Agribusiness Tech",
      "IITA",
      "CGIAR"
    ],
    "description": "Youth in Agribusiness programme run by IITA, with hands-on training in apiary (beekeeping) and yam seed production.",
    "layout": "story",
    "gallery": [
      {
        "src": "assets/gallery/iita-yas/yas-field-selfie.jpg",
        "thumb": "assets/gallery/iita-yas/yas-field-selfie-thumb.jpg",
        "title": "Learning from the Ground Up",
        "tagline": "Every harvest begins with learning.",
        "caption": "Learning from the Ground Up",
        "story": [
          "The journey started with understanding the process behind yam production. These field sessions helped me connect what I was learning with the practical work involved in growing yam."
        ],
        "group": "Yam Seed Production",
        "more": [
          {
            "src": "assets/gallery/iita-yas/yas-yam-demo.jpg",
            "thumb": "assets/gallery/iita-yas/yas-yam-demo-thumb.jpg",
            "caption": "Learning from the Ground Up"
          }
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-yam-vines.jpg",
        "thumb": "assets/gallery/iita-yas/yas-yam-vines-thumb.jpg",
        "title": "More Than Just a Yam",
        "tagline": "",
        "caption": "More Than Just a Yam",
        "story": [
          "Seeing the rows of vines developing made the process more tangible, giving me a closer look at an approach to yam propagation and the work involved in producing planting material."
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-yam-seed-crate.jpg",
        "thumb": "assets/gallery/iita-yas/yas-yam-seed-crate-thumb.jpg",
        "title": "Growing Beyond the Traditional Method",
        "tagline": "Exploring yam production through vine propagation.",
        "caption": "Growing Beyond the Traditional Method",
        "story": [
          "We also worked with yam vines grown in bags, an approach that introduced me to another aspect of yam propagation. It was an opportunity to learn about the process of growing planting material and the possibilities it offers for future production."
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-apiary-group.jpg",
        "thumb": "assets/gallery/iita-yas/yas-apiary-group-thumb.jpg",
        "title": "A Different Side of Agriculture",
        "tagline": "Discovering that agriculture has more than one path.",
        "caption": "A Different Side of Agriculture",
        "story": [
          "After exploring yam production, the apiary training introduced me to another side of agriculture. It was an opportunity to step into an unfamiliar area, broaden my perspective, and discover a different set of skills and possibilities within the agricultural space."
        ],
        "group": "Apiary Training"
      },
      {
        "src": "assets/gallery/iita-yas/yas-bee-suits.jpg",
        "thumb": "assets/gallery/iita-yas/yas-bee-suits-thumb.jpg",
        "title": "Stepping into the Experience",
        "tagline": "Some lessons are best experienced firsthand.",
        "caption": "Stepping into the Experience",
        "story": [
          "Getting suited up was part of stepping into an experience that was new to me. Beyond the classroom, I was getting a closer look at what beekeeping involves and experiencing another aspect of agricultural practice for myself."
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-hives-group.jpg",
        "thumb": "assets/gallery/iita-yas/yas-hives-group-thumb.jpg",
        "title": "Among the Hives",
        "tagline": "Getting closer to a world I was still learning about.",
        "caption": "Among the Hives",
        "story": [
          "Being around the hives gave me a different perspective on beekeeping. It was one thing to learn about another area of agriculture, but another to experience its environment firsthand and begin to appreciate the work behind it."
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-hive-lid.jpg",
        "thumb": "assets/gallery/iita-yas/yas-hive-lid-thumb.jpg",
        "title": "Another Piece of the Picture",
        "tagline": "Every new experience broadens the perspective.",
        "caption": "Another Piece of the Picture",
        "story": [
          "The apiary sessions added another dimension to my time with YAS. Alongside yam production, they helped me appreciate the variety within agriculture and the different opportunities that can grow from understanding it."
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-cohort.jpg",
        "thumb": "assets/gallery/iita-yas/yas-cohort-thumb.jpg",
        "title": "One Journey, Shared with Others",
        "tagline": "Celebrating the end of a learning experience.",
        "caption": "One Journey, Shared with Others",
        "story": [
          "The cohort completion ceremony marked the end of this stage of the programme. It was a moment to celebrate what we had learned and the experience we had shared with fellow participants."
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-certificate-day.jpg",
        "thumb": "assets/gallery/iita-yas/yas-certificate-day-thumb.jpg",
        "title": "A Record of the Journey",
        "tagline": "The certificate is a milestone, not the finish line.",
        "caption": "A Record of the Journey",
        "story": [
          "Receiving my certificate of completion was a reminder of the time and effort invested in the programme. More importantly, it gave me something to build on as I continued exploring opportunities in agriculture."
        ],
        "more": [
          {
            "src": "assets/gallery/iita-yas/yas-certificate.jpg",
            "thumb": "assets/gallery/iita-yas/yas-certificate-thumb.jpg",
            "fit": "contain",
            "caption": "Certificate of Participation, May 2025"
          }
        ]
      },
      {
        "src": "assets/gallery/iita-yas/yas-broilnest-cert.jpg",
        "thumb": "assets/gallery/iita-yas/yas-broilnest-cert-thumb.jpg",
        "fit": "contain",
        "title": "What Came Next: Broilnest Ventures",
        "tagline": "From training to a registered business.",
        "caption": "What Came Next: Broilnest Ventures",
        "story": [
          "Completing the YAS programme was one milestone. Taking a step towards building something of my own was another.",
          "After the programme, I registered Broilnest Ventures, a farming business, with the Corporate Affairs Commission (CAC).",
          "For me, this was a way of taking what I had been learning beyond the training environment. The programme introduced me to practical aspects of agriculture, while registering the business gave me a starting point for developing my own agribusiness journey.",
          "There is still more to learn and build, but Broilnest Ventures represents a step from learning about agriculture to working towards putting that knowledge into practice.",
          "The training was a chapter. Building something of my own is the next one."
        ]
      }
    ],
    "intro": {
      "title": "YAS: Learning Agriculture Beyond the Classroom",
      "tagline": "Two areas of agriculture. One journey of learning.",
      "text": [
        "My experience with YAS introduced me to two different sides of agriculture: yam seed production and beekeeping. From working with yam vines and growing in bags to learning about apiary practices, the programme gave me an opportunity to experience agriculture through practical training rather than theory alone."
      ]
    }
  },
  "siyb": {
    "title": "Start Your Business Programme",
    "issuer": "International Labour Organization (ILO SYB)",
    "badge": "Aug 2025",
    "badgeClass": "badge-date",
    "logo": "assets/logo_siyb_ilo.png",
    "tags": [
      "Business Planning",
      "ILO SIYB",
      "Enterprise"
    ],
    "description": "Entrepreneurship training from the ILO Start and Improve Your Business (SIYB) programme, covering business planning and enterprise basics.",
    "layout": "story",
    "gallery": [
      {
        "src": "assets/gallery/siyb/siyb-group-steps.jpg",
        "thumb": "assets/gallery/siyb/siyb-group-steps-thumb.jpg",
        "title": "Beyond Having an Idea",
        "tagline": "Every business starts somewhere.",
        "caption": "Beyond Having an Idea",
        "story": [
          "Having a business idea is one thing; understanding what it takes to turn that idea into something sustainable is another. The SIYB programme gave me an opportunity to explore the thinking behind starting and running a business, looking beyond the idea itself to the decisions that help it grow."
        ]
      },
      {
        "src": "assets/gallery/siyb/siyb-classroom.jpg",
        "thumb": "assets/gallery/siyb/siyb-classroom-thumb.jpg",
        "title": "The Business Behind the Idea",
        "tagline": "Learning to look at the bigger picture.",
        "caption": "The Business Behind the Idea",
        "story": [
          "The experience helped me consider entrepreneurship from a more practical perspective: planning, understanding customers, managing resources, and thinking about what makes a business work. These are lessons that go beyond starting a business; they’re about making thoughtful decisions as it develops."
        ]
      },
      {
        "src": "assets/gallery/siyb/siyb-workbooks.jpg",
        "thumb": "assets/gallery/siyb/siyb-workbooks-thumb.jpg",
        "title": "Taking the Lessons Forward",
        "tagline": "Learning today, building for tomorrow.",
        "caption": "Taking the Lessons Forward",
        "story": [
          "I see the knowledge gained through SIYB as something I can carry into future ventures. Whether developing an existing idea or exploring a new opportunity, understanding the business side of things is an important part of turning ambition into action."
        ]
      }
    ],
    "intro": {
      "title": "SIYB: Learning to Think Like an Entrepreneur",
      "tagline": "Turning ideas into something that can work.",
      "text": []
    }
  },
  "icse": {
    "title": "International Conference on Smart Education and Digital Literacy (ICSE)",
    "issuer": "UBEC Digital Resource Center (DRC) · Volunteer",
    "badge": "6 to 9 May 2025",
    "badgeClass": "badge-date",
    "logo": "assets/logo_icse_ubec.png",
    "tags": [
      "Smart Education",
      "Timekeeping & AV",
      "UBEC DRC"
    ],
    "description": "Volunteered at ICSE 2025 with the UBEC Digital Resource Center, supporting timekeeping and audio-visual needs during the conference.",
    "gallery": [
      {
        "src": "assets/gallery/icse/icse-stage-timer.jpg",
        "caption": "Session timer running on the stage screen"
      },
      {
        "src": "assets/gallery/icse/icse-stage-backdrop.jpg",
        "caption": "Main stage and sponsor backdrop at ICSE 2025"
      },
      {
        "src": "assets/gallery/icse/icse-guests.jpg",
        "caption": "Guests and delegates at the conference venue"
      },
      {
        "src": "assets/gallery/icse/icse-official-badge.jpg",
        "caption": "My Officials badge for ICSE 2025"
      }
    ]
  }
};

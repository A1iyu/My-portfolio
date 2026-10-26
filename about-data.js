/**
 * ABOUT ME STORY: PHOTOS
 * Drop your pictures into assets/story/ and list them under the chapter number.
 * Each chapter's photo box shows your photo beside the text.
 *
 * Chapters: 1 Where Curiosity Met Creativity, 2 When the Plan Changed, 3 A Different Route, New Possibilities,
 *           4 Finding My Way into Software Development, 5 From Building Software to Securing It,
 *           6 Me Outside School and Work
 *
 * Example:
 *   1: [ { src: "assets/story/childhood.jpg", alt: "Building things as a kid" } ],
 */
const STORY_PHOTOS = {
  1: [ { src: "assets/story/childhood.jpg", alt: "Me as a child, in front of a gear backdrop" } ],
  2: [ { src: "assets/story/atbu.jpg", alt: "At ATBU, Bauchi" } ],
  3: [ { src: "assets/story/tvet-roof.jpg", alt: "Fixing a mounting rail on a roof during the solar PV training" } ],
  4: [ { src: "assets/story/coding.jpg", alt: "Code on a screen" } ],
  5: [ { src: "assets/story/cybersecurity.jpg", alt: "Padlock and shield illustration" } ],
  6: [ { src: "assets/story/halo-infinite.jpg", alt: "Halo Infinite multiplayer" } ]
};

// Show a soft "Photo coming soon" frame on stops that have no photo yet (set to false to hide them)
const SHOW_PHOTO_PLACEHOLDERS = true;

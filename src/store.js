import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 2,
  pages: 2,
  zoom: 75,
  paragraphs: [
    {
      offset: 0.27,
      factor: 5,
      header: "Portfolio",
      image: "/photo-1515036551567-bf1198cccc35.png",
      aspect: 1.51,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    },
    {
      offset: 1,
      factor: 2.0,
      header: "React visual builder",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text:
        "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Catalina",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text:
        "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Building 21",
      image: "/ph3.jpg",
      aspect: 0.665,
      text:
        "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Sector 8",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text:
        "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    },
    { offset: 7, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0, pos: new Vector3(), scale: 14, factor: 60 },
    { x: 1, offset: 0, pos: new Vector3(), scale: 0, factor: 40 },
    // { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    // { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    // { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    // { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    // { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    // { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state

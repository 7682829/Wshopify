import { Testimonials } from "./ui/testimonials"

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    text: "I'm blown away by the versatility of the components in this library. They make UI development a breeze!",
    name: "Alice Johnson",
    username: "@alicejohnson",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    text: "Using this component library has significantly speed up our development process. The quality and ease of integration are remarkable!",
    name: "David Smith",
    username: "@davidsmith",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    text: "The components in this library are not just well-designed but also highly customizable. It's a developer's dream!",
    name: "Emma Brown",
    username: "@emmabrown",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "I love how intuitive and well-documented this component library is. It has significantly improved our UI consistency across projects.",
    name: "James Wilson",
    username: "@jameswilson",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Implementing this component library was a game-changer for our team. It has elevated our project's UI to a whole new level!",
    name: "Sophia Lee",
    username: "@sophialee",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Using this library has been a game-changer for our product development.",
    name: "Michael Davis",
    username: "@michaeldavis",
    social: "https://twitter.com",
  }
]

export function TestimonialsSection() {
  return (
    <div className="container py-10">
      <Testimonials testimonials={testimonials} />
    </div>
  )
}

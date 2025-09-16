import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './new_sample_1.png'
import sample_img_2 from './new_sample_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  razorpay_logo,
  stripe_logo,
}

export const stepsData = [
  {
    title: 'Craft Your Vision',
    description:
      'Write a detailed description of the image you want to create using natural language.',
    icon: step_icon_1,
  },
  {
    title: 'AI Magic Happens',
    description:
      'Our advanced AI technology transforms your words into stunning, high-quality visuals in moments.',
    icon: step_icon_2,
  },
  {
    title: 'Save & Enjoy',
    description:
      'Download your masterpiece or share it instantly with friends and social media.',
    icon: step_icon_3,
  },
]

export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'Marcus Chen',
    role: 'Graphic Designer',
    stars: 5,
    text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
  },
  {
    image: profile_img_2,
    name: 'Evelyn Reed',
    role: 'Content Creator',
    stars: 5,
    text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
  },
  {
    image: profile_img_1,
    name: 'Sophia Dubois',
    role: ' Graphic Designer',
    stars: 5,
    text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
  },
]

export const plans = [
  {
    id: 'Basic',
    price: 100,
    credits: 100,
    desc: 'Best for personal use.',
  },
  {
    id: 'Advanced',
    price: 200,
    credits: 500,
    desc: 'Best for business use.',
  },
  {
    id: 'Business',
    price: 500,
    credits: 5000,
    desc: 'Best for enterprise use.',
  },
]

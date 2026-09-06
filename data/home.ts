type RasterAsset = {
  src: string;
  width: number;
  height: number;
};

type Course = {
  title: string;
  image: RasterAsset;
};

type Benefit = {
  title: string;
  description: string;
  color: string;
  softColor: string;
  icon: string;
  darkText?: boolean;
};

type Facilitator = {
  name: string;
  role: string;
  image: RasterAsset;
};

type Testimonial = {
  name: string;
  role: string;
  image: RasterAsset;
  flag: RasterAsset;
  headline: string;
  quote: string;
};

const raster = (src: string, width: number, height: number): RasterAsset => ({ src, width, height });
const nigeriaFlag = raster("/assets/flag-ng.png", 3000, 1500);

export const courses: Course[] = [
  { title: "Product Design", image: raster("/assets/course-product-design.png", 657, 438) },
  { title: "Product Management", image: raster("/assets/course-product-management.png", 657, 438) },
  { title: "Data Analytics", image: raster("/assets/course-data-analytics.png", 657, 493) },
  { title: "Virtual Assistant", image: raster("/assets/course-virtual-assistant.png", 705, 470) },
  { title: "Technical Writing", image: raster("/assets/course-technical-writing.png", 466, 704) },
  { title: "Cybersecurity", image: raster("/assets/course-cybersecurity.png", 705, 470) },
  { title: "Software Engineering", image: raster("/assets/course-software-engineering.png", 705, 470) },
  { title: "Mobile Development", image: raster("/assets/course-mobile-development.png", 704, 451) },
  { title: "Project Management", image: raster("/assets/course-project-management.png", 704, 468) },
  { title: "AI Automation", image: raster("/assets/course-ai-automation.png", 705, 470) },
  { title: "Business Analytics", image: raster("/assets/course-business-analytics.png", 705, 470) },
  { title: "Web Development", image: raster("/assets/course-web-development.png", 564, 705) },
];

export const benefits: Benefit[] = [
  {
    title: "Meaningful Connection",
    description: "Connect with like-minded techies who are as passionate about product development as you are.",
    color: "#ff574e",
    softColor: "#ffeeed",
    icon: "/assets/benefit-connection.svg",
  },
  {
    title: "Collaborate on Project",
    description: "Collaboration is at the heart of what we do. As a member of our community, you will have access to exciting opportunities.",
    color: "#8665d9",
    softColor: "#f6f2ff",
    icon: "/assets/benefit-collaboration.svg",
  },
  {
    title: "Non-stop Inspiration",
    description: "Hear inspiring stories and success journeys from accomplished professionals.",
    color: "#ff9625",
    softColor: "#fff4e9",
    icon: "/assets/benefit-inspiration.svg",
  },
  {
    title: "Access to Resources",
    description: "As a member of Product Hub Africa, you will have access to a wealth of resources and tools.",
    color: "#2e6cff",
    softColor: "#eaf0ff",
    icon: "/assets/benefit-resources.svg",
  },
  {
    title: "Community Support",
    description: "Experience the power of a supportive community that encourages collaboration and growth.",
    color: "#47ba39",
    softColor: "#edf8eb",
    icon: "/assets/benefit-community.svg",
  },
  {
    title: "Job Placement",
    description: "Experience the power of a supportive community that encourages collaboration and growth.",
    color: "#ffffff",
    softColor: "#f4f4f4",
    icon: "/assets/benefit-job.svg",
    darkText: true,
  },
];

export const facilitators: Facilitator[] = [
  { name: "Adegboye Opeyemi", role: "Product Design", image: raster("/assets/facilitator-1.png", 2096, 2620) },
  { name: "John", role: "Cyber Security", image: raster("/assets/facilitator-2.png", 2380, 2972) },
  { name: "Amaddin Iyobosa M.", role: "AI Automation", image: raster("/assets/facilitator-3.png", 2096, 2620) },
  { name: "Benjamin Amponsash", role: "Business Analysis", image: raster("/assets/facilitator-4.png", 2096, 2620) },
  { name: "Yusuf Isa", role: "Data Analytics", image: raster("/assets/facilitator-5.png", 2476, 3020) },
  { name: "Innocent Ughochukwu", role: "Project/Programs Management", image: raster("/assets/facilitator-6.png", 2528, 3524) },
  { name: "Ariyibi Baseet", role: "Web Development", image: raster("/assets/facilitator-7.png", 2500, 2996) },
  { name: "Yusuf Isa", role: "Product Management", image: raster("/assets/facilitator-8.png", 2464, 2884) },
  { name: "Wuraoluwa Aniyi", role: "Virtual Assistant", image: raster("/assets/facilitator-9.png", 2376, 2972) },
  { name: "Blessing Iyare", role: "Project management", image: raster("/assets/facilitator-10.png", 897, 1280) },
  { name: "Halimat Thanni", role: "Data Analysis", image: raster("/assets/facilitator-11.png", 722, 1280) },
  { name: "Benjamin Amponsah", role: "Business Analysis", image: raster("/assets/facilitator-12.png", 828, 1025) },
];

export const testimonials: Testimonial[] = [
  {
    name: "Omoseyitan Ojomo",
    role: "Graduate",
    image: raster("/assets/testimonial-1.png", 562, 578),
    flag: nigeriaFlag,
    headline: "Impactful",
    quote: '"Every moment of the bootcamp was impactful, helping me achieve my goals and build a strong professional network. I gained skills in prioritization, stakeholder management, and performance metrics analysis."',
  },
  {
    name: "Efundunni Sowemimo",
    role: "Lawyer/New to tech",
    image: raster("/assets/testimonial-2.png", 562, 578),
    flag: nigeriaFlag,
    headline: "Rewarding",
    quote: '"As a lawyer and a newbie in tech, my most significant highlight was working on the capstone project with my group members, it was a rewarding experience putting all we had learnt to work on a product. It was a great initiative to have a collaborative task."',
  },
  {
    name: "Melusi Nyoni",
    role: "Analyst",
    image: raster("/assets/testimonial-3.png", 562, 578),
    flag: raster("/assets/flag-za.png", 275, 183),
    headline: "Fantastic",
    quote: '"Coming from a rough diamond analyst background, my experience with Product Hub was fantastic, I was able to connect with colleagues and like minds and I learnt from industry experts making the whole learning journey enriching."',
  },
  {
    name: "Temitope Dada",
    role: "Product Designer",
    image: raster("/assets/testimonial-4.png", 562, 578),
    flag: nigeriaFlag,
    headline: "Transformative",
    quote: '"It was a wonderful journey, I had no experience whatsoever in Product Management. I learnt a lot and I have been able to connect with like minds and wonderful people and I believe this strategic relationship will enhance my growth."',
  },
  {
    name: "Geoffrey Logovi",
    role: "Developer Relations",
    image: raster("/assets/testimonial-5.png", 562, 578),
    flag: raster("/assets/flag-gh.png", 275, 183),
    headline: "Impactful",
    quote: '"Every moment of the bootcamp was impactful, helping me achieve my goals and build a strong professional network. I gained skills in prioritization, stakeholder management, and performance metrics analysis."',
  },
  {
    name: "Nakitha Ineza",
    role: "Graduate",
    image: raster("/assets/testimonial-6.png", 562, 578),
    flag: raster("/assets/flag-rw.png", 1280, 854),
    headline: "Engaging",
    quote: '"The Bootcamp was interactive and enjoyable. I loved the group sessions where we tackled projects together, forming friendships. I gained crucial skills in detail, data cleansing, and research."',
  },
  {
    name: "Mutiat Adepoju",
    role: "Technical Writer",
    image: raster("/assets/testimonial-7.png", 562, 578),
    flag: nigeriaFlag,
    headline: "Invaluable",
    quote: '"During the technical writing bootcamp, the highlight for me was the invaluable mentorship from our coach, who guided us through every step. I picked up new skills that truly sharpened my writing."',
  },
  {
    name: "Confidence Ezeamaka",
    role: "Graduate",
    image: raster("/assets/testimonial-8.png", 562, 578),
    flag: nigeriaFlag,
    headline: "Interactive",
    quote: '"I would like to emphasize that the Bootcamp was a very interactive and engaging program. I enjoyed the group sessions the most because we got to do hands on projects together."',
  },
  {
    name: "Prest Eyituoyor",
    role: "Graduate",
    image: raster("/assets/testimonial-9.png", 562, 578),
    flag: nigeriaFlag,
    headline: "Beginner-friendly",
    quote: '"The facilitators were amazing, with a beginner-friendly approach that made learning enjoyable. The dedication of my classmates enriched the experience."',
  },
];

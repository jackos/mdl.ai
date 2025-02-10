export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

const siteData: SiteDataProps = {
  name: "Markdown Lab",
  title:
    "Markdown Lab",
  description:
    "Run markdown code blocks interactively in a notebook with any programming language, and generate code blocks with LLMs.",
  useViewTransitions: true,
  useAnimations: true,
  author: {
    name: "Jack Clayton",
    email: "jackos@me.com",
    twitter: "jack_clayto",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/site-logo.jpg",
    alt: "Markdown Lab logo",
  },
};

export default siteData;

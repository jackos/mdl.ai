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
  name: "MDL.AI",
  title:
    "Markdown Deep Learning AI - Generate code blocks with AI and run them in markdown files",
  description:
    "A VS Code extension for running codeblocks interactively in markdown files using AI.",
  useViewTransitions: true,
  useAnimations: true,
  author: {
    name: "Jack Clayton",
    email: "jackos@me.com",
    twitter: "mdl_ai",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/site-logo.jpg",
    alt: "MDL.AI logo",
  },
};

export default siteData;

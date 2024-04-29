export interface FaqItem {
  question: string; // this is the question of the accordion
  answer: string; // these are the details seen after expanding the accordion
}

// replace this data with whatever you want in your FAQ section
export const faqData: FaqItem[] = [
  {
    question: "Is the project open source?",
    answer: `Yes the project is open source and accepting contributions, so you can add your own language!`,
  },
  {
    question: "Will there be regular updates for MDL.AI?",
    answer: `Yes, We will add features and languages regularly. <a href="https://github.com/jackos/mdl/blob/main/CHANGELOG.md" class="text-primary hover:text-green-600 transition-all"> Check out the changelog here.</a>`,
  },
  {
    question: "Do you collect any telemetry data?",
    answer: `No, we collect no telemetry or data.`,
  },
];

export default faqData;

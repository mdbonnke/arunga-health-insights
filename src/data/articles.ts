export interface Article {
  title: string;
  /** ISO date string YYYY-MM-DD */
  date: string;
  excerpt: string;
  url: string;
  source: string;
  category: string;
}

export const articles: Article[] = [
  {
    title: 'When "Dr" Doesn\'t Mean Doctor',
    date: "2025-06-30",
    excerpt:
      "How title misuse on social media is eroding trust, risking patient safety, and what we can do about it.",
    url: "ADD_LINK_HERE",
    source: "LinkedIn Newsletter",
    category: "Digital Health / Public Trust",
  },
  {
    title: "AI Has Changed Freelance Writing: Here Is How to Pivot and Thrive in 2025",
    date: "2025-07-28",
    excerpt:
      "AI has reshaped freelance writing. This article explains how to niche down, charge higher, and stay relevant in a changing market.",
    url: "ADD_LINK_HERE",
    source: "LinkedIn Newsletter",
    category: "Medical Writing / Career Strategy",
  },
];

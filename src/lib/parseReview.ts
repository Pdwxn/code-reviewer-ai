
export type Section = {
    title: string;
    content: string;
  };
  
  export function parseReview(text: string): Section[] {
    const sections = text.split("##").filter(Boolean);
  
    return sections.map((section) => {
      const [titleLine, ...rest] = section.trim().split("\n");
      
      return {
        title: titleLine.trim(),
        content: rest.join("\n").trim(),
      };
    });
  }
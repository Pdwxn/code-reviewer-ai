
const getColor = (title: string) => {
    if (title.includes("Bugs")) return "text-red-400";
    if (title.includes("Issues")) return "text-yellow-400";
    if (title.includes("Suggestions")) return "text-green-400";
    if (title.includes("Explanation")) return "text-blue-400";
    return "text-accent";
  };

type Props = {
    title: string;
    content: string;
  };
  
  export default function ReviewSection({ title, content }: Props) {
    return (
      <div className="bg-panel border border-border rounded-2xl p-4 shadow-sm">
        
        <h3 className={`font-semibold mb-2 ${getColor(title)}`}>
          {title}
        </h3>
  
        <div className="text-sm whitespace-pre-wrap text-gray-300">
          {content}
        </div>
  
      </div>
    );
  }
import { Share2 } from "lucide-react";

interface JobResultProps {
  title: string;
  description: string;
}

const JobResult = ({ title, description }: JobResultProps) => {
  const handleShare = () => {
    const text = `I just found out I'm '${title}!' 🌟\n\nDiscover your personality trait too—are you an Adventurer, Social Butterfly, Quiet Thinker, or Cozy Homebody? 🎉 \nTake the quiz and find out - https://sanikasuryawanshi.vercel.app`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#1A1F2C]/90 backdrop-blur-md rounded-xl shadow-lg p-6 animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC857]/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative">
            <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl md:text-5xl mb-5 font-bold text-[#FFECC7] drop-shadow-lg">
                {title}
            </h2>
            <button
                onClick={handleShare}
                className="group flex items-center gap-2 px-4 py-2 bg-[#FFC857]/10 hover:bg-[#FFC857]/80 rounded-lg transition-all duration-300 text-[#F8FAFC] shadow-lg"
            >
                <Share2 className="w-4 h-4 transition-transform group-hover:scale-110 text-[#F8FAFC]" />
                <span className="text-sm md:text-base">Share on X</span>
            </button>
            </div>
            <p className="text-[#ecebe8] md:text-[1.5rem] leading-relaxed drop-shadow-md font-mona-sans">
            {description}
            </p>
        </div>
    </div>
  );
};

export default JobResult;
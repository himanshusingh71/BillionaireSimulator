"use client";
import { useAppContext } from "../context/AppContext";

// const billionaires = [
//   { name: "Elon Musk", netWorth: 376000000000, profession: "Entrepreneur", image: "/musk.jpg" },
//   { name: "Jerry Seinfeld", netWorth: 1100000000, profession: "Actor", image: "/jerry.jpg" },
//   { name: "Warren Buffett", netWorth: 160000000000, profession: "Investor", image: "/buffett.jpg" },
//   { name: "Jay-Z", netWorth: 2500000000, profession: "Musician", image: "/jayz.jpg" },
//   { name: "Michael Jordan", netWorth: 2500000000, profession: "Athlete", image: "/jordan.jpg" },
//   { name: "J.K. Rowling", netWorth: 1000000000, profession: "Author", image: "/jkrowling.jpg" },
//   { name: "Jimmy Donaldson", netWorth: 1000000000, profession: "YouTuber", image: "/mrbeast.jpg" },
//   { name: "Giorgio Armani", netWorth: 12000000000, profession: "Fashion Designer", image: "/armani.jpg" },
//   { name: "Oprah Winfrey", netWorth: 2800000000, profession: "TV Personality", image: "/oprah.jpg" },
//   { name: "Marques Brownlee", netWorth: 45000000, profession: "Tech Influencer", image: "/mkbhd.jpg" },
//   { name: "Tiger Woods", netWorth: 1300000000, profession: "Golfer", image: "/tigerwoods.jpg" },
//   { name: "Dr. Dre", netWorth: 500000000, profession: "Music Producer", image: "/drdre.jpg" },
//   { name: "James Patterson", netWorth: 800000000, profession: "Novelist", image: "/patterson.jpg" },
//   { name: "Kylie Jenner", netWorth: 710000000, profession: "Entrepreneur & Social Media", image: "/kylie.jpg" },
//   { name: "LeBron James", netWorth: 1200000000, profession: "Basketball Player", image: "/lebron.jpg" },
//   { name: "Steven Spielberg", netWorth: 5300000000, profession: "Film Director", image: "/spielberg.jpg" },
//   { name: "Martha Stewart", netWorth: 400000000, profession: "Businesswoman & TV Host", image: "/martha.jpg" },
//   { name: "Gordon Ramsay", netWorth: 220000000, profession: "Chef", image: "/gordon.jpg" },
//   { name: "Annie Leibovitz", netWorth: 50000000, profession: "Photographer", image: "/annie.jpg" },
//   { name: "Kevin Hart", netWorth: 450000000, profession: "Comedian", image: "/kevin.jpg" },
//   { name: "Michael Bloomberg", netWorth: 104000000000, profession: "Politician", image: "/bloomberg.jpg" },
//   { name: "Johan 'Ntail' Sundstein", netWorth: 70000000, profession: "Professional Gamer", image: "/n0tail.jpg" },
//   { name: "Norman Foster", netWorth: 240000000, profession: "Architect", image: "/foster.jpg" },
//   { name: "Rupert Murdoch", netWorth: 22000000000, profession: "Journalist", image: "/murdoch.jpg" }
//   // Add more with their image paths
// ];

const billionaires = [
  { name: "Elon Musk", netWorth: 376000000000, profession: "Entrepreneur", image: "/musk.jpg" },
  { name: "Jerry Seinfeld", netWorth: 1100000000, profession: "Actor", image: "/jerry.jpg" },
  { name: "Warren Buffett", netWorth: 160000000000, profession: "Investor", image: "/buffet.jpeg" },
  { name: "Jay-Z", netWorth: 2500000000, profession: "Musician", image: "/jayz.jpg" },
  { name: "Michael Jordan", netWorth: 2500000000, profession: "Athlete", image: "/jordon.jpg" },
  { name: "J.K. Rowling", netWorth: 1000000000, profession: "Author", image: "/rowling.jpg" },
  { name: "Jimmy Donaldson", netWorth: 1000000000, profession: "YouTuber", image: "/jimmy.jpg" },
  { name: "Giorgio Armani", netWorth: 12000000000, profession: "Fashion Designer", image: "/armani.jpg" },
  { name: "Oprah Winfrey", netWorth: 2800000000, profession: "TV Personality", image: "/oprah.jpg" },
  { name: "Marques Brownlee", netWorth: 45000000, profession: "Tech Influencer", image: "/marques.jpg" },
  { name: "Tiger Woods", netWorth: 1300000000, profession: "Golfer", image: "/woods.jpg" },
  { name: "Dr. Dre", netWorth: 500000000, profession: "Music Producer", image: "/dre.jpg" },
  { name: "James Patterson", netWorth: 800000000, profession: "Novelist", image: "/patterson.jpg" },
  { name: "Kylie Jenner", netWorth: 710000000, profession: "Entrepreneur & Social Media", image: "/kylie.jpg" },
  { name: "LeBron James", netWorth: 1200000000, profession: "Basketball Player", image: "/lebron.jpg" },
  { name: "Steven Spielberg", netWorth: 5300000000, profession: "Film Director", image: "/steven.jpeg" },
  { name: "Martha Stewart", netWorth: 400000000, profession: "Businesswoman & TV Host", image: "/martha.jpeg" },
  { name: "Gordon Ramsay", netWorth: 220000000, profession: "Chef", image: "/gordon.jpg" },
  { name: "Annie Leibovitz", netWorth: 50000000, profession: "Photographer", image: "/annie.jpg" },
  { name: "Kevin Hart", netWorth: 450000000, profession: "Comedian", image: "/kevin.jpeg" },
  { name: "Michael Bloomberg", netWorth: 104000000000, profession: "Politician", image: "/bloomberg.jpg" },
  { name: "Johan 'Ntail' Sundstein", netWorth: 70000000, profession: "Professional Gamer", image: "/johan.jpg" },
  { name: "Norman Foster", netWorth: 240000000, profession: "Architect", image: "/norman.jpg" },
  { name: "Rupert Murdoch", netWorth: 22000000000, profession: "Journalist", image: "/murdoch.jpg" }
];


export default function BillionaireCarousel() {
  const { selectedBillionaire, setSelectedBillionaire } = useAppContext();
  return (
    <div className="relative p-4 max-w-full bg-gray-200 min-h-[320px]">
      <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        <div className="flex space-x-4 w-max px-4">
          {billionaires.map((b) => (
            <div
              key={b.name}
              onClick={() => setSelectedBillionaire(b)}
className={`snap-start cursor-pointer p-4 rounded min-w-[180px] text-center transition-all duration-300 transform
  border-2 hover:scale-120 hover:shadow-xl hover:z-20
  ${selectedBillionaire?.name === b.name
    ? "border-blue-600 bg-blue-200"
    : "border-black bg-white"}
`}
            >
              <img
                src={b.image}
                alt={b.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-2"
              />
              <h4 className="text-md font-bold">{b.name}</h4>
              <h1 className="text-sm">{b.profession}</h1>
              <p className="text-lg">
                Net Worth: $ 
                 {b.netWorth >= 1e9
                  ? `${Math.round(b.netWorth / 1e9)}B`
                  : `${Math.round(b.netWorth / 1e6)}M`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

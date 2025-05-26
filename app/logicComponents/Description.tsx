"use client";

export default function Description() {
return (
  <div className="max-w-2xl mx-auto text-center bg-gray-300 text-gray-900 p-6 rounded-2xl space-y-4">
    <h2 className="text-3xl font-bold">Experience Wealth Like a Billionaire</h2>
    <p className="text-lg leading-relaxed">
      This simulator helps you grasp just how insanely rich billionaires are by comparing their net worth to your own.
    </p>
    <p className="text-lg leading-relaxed">
      Simply enter your net worth, select a billionaire, and explore a list of items priced relative to your financial standing.
    </p>
    <p className="text-base font-mono bg-gray-100 p-3 rounded border border-gray-300">
      Adjusted Item Price = (Your Net Worth × Item Price) / Billionaire's Net Worth
    </p>
    <p className="text-lg leading-relaxed">
      Buy items and watch your balance shrink — or barely move — just like it would for the ultra-rich. 
    </p>
        <p className="text-lg leading-relaxed">
      Once you start purchasing, a “Your Purchases” section will appear, showing everything you've added to your billionaire basket.
    </p>
  </div>
);

}

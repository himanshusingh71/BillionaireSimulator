"use client";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const items = [
  {
    "name": "Big Mac",
    "price": 5,
    "image": "images/big-mac.jpg"
  },
  {
    "name": "Flip Flops",
    "price": 15,
    "image": "images/flip-flops.jpg"
  },
  {
    "name": "Coca-Cola Pack",
    "price": 4,
    "image": "images/coca-cola-pack.jpg"
  },
  {
    "name": "Movie Ticket",
    "price": 14,
    "image": "images/movie-ticket.jpg"
  },
  {
    "name": "Book",
    "price": 20,
    "image": "images/book.jpg"
  },
  {
    "name": "Lobster Dinner",
    "price": 70,
    "image": "images/lobster-dinner.jpg"
  },
  {
    "name": "Video Game",
    "price": 60,
    "image": "images/video-game.jpg"
  },
  {
    "name": "Amazon Echo",
    "price": 100,
    "image": "images/amazon-echo.jpg"
  },
  {
    "name": "Year of Netflix",
    "price": 180,
    "image": "images/year-of-netflix.jpg"
  },
  {
    "name": "Air Jordans",
    "price": 150,
    "image": "images/air-jordans.jpg"
  },
  {
    "name": "Airpods",
    "price": 170,
    "image": "images/airpods.jpg"
  },
  {
    "name": "Gaming Console",
    "price": 300,
    "image": "images/gaming-console.jpg"
  },
  {
    "name": "Drone",
    "price": 350,
    "image": "images/drone.jpg"
  },
  {
    "name": "Smartphone",
    "price": 700,
    "image": "images/smartphone.jpg"
  },
  {
    "name": "Bike",
    "price": 800,
    "image": "images/bike.jpg"
  },
  {
    "name": "Kitten",
    "price": 100,
    "image": "images/kitten.jpg"
  },
  {
    "name": "Puppy",
    "price": 300,
    "image": "images/puppy.jpg"
  },
  {
    "name": "Auto Rickshaw",
    "price": 1500,
    "image": "images/auto-rickshaw.jpg"
  },
  {
    "name": "Horse",
    "price": 2000,
    "image": "images/horse.jpg"
  },
  {
    "name": "Acre of Farmland",
    "price": 4000,
    "image": "images/acre-of-farmland.jpg"
  },
  {
    "name": "Designer Handbag",
    "price": 2500,
    "image": "images/designer-handbag.jpg"
  },
  {
    "name": "Hot Tub",
    "price": 6000,
    "image": "images/hot-tub.jpg"
  },
  {
    "name": "Luxury Wine",
    "price": 150,
    "image": "images/luxury-wine.jpg"
  },
  {
    "name": "Diamond Ring",
    "price": 10000,
    "image": "images/diamond-ring.jpg"
  },
  {
    "name": "Jet Ski",
    "price": 12000,
    "image": "images/jet-ski.jpg"
  },
  {
    "name": "Rolex",
    "price": 15000,
    "image": "images/rolex.jpg"
  },
  {
    "name": "Ford F-150",
    "price": 30000,
    "image": "images/ford-f-150.jpg"
  },
  {
    "name": "Tesla",
    "price": 75000,
    "image": "images/tesla.jpg"
  },
  {
    "name": "Monster Truck",
    "price": 150000,
    "image": "images/monster-truck.jpg"
  },
  {
    "name": "Ferrari",
    "price": 250000,
    "image": "images/ferrari.jpg"
  },
  {
    "name": "Single Family Home",
    "price": 300000,
    "image": "images/single-family-home.jpg"
  },
  {
    "name": "Gold Bar",
    "price": 700000,
    "image": "images/gold-bar.jpg"
  },
  {
    "name": "McDonalds Franchise",
    "price": 1500000,
    "image": "images/mcdonalds-franchise.jpg"
  },
  {
    "name": "Superbowl Ad",
    "price": 5000000,
    "image": "images/superbowl-ad.jpg"
  },
  {
    "name": "Yacht",
    "price": 7000000,
    "image": "images/yacht.jpg"
  },
  {
    "name": "M1 Abrams",
    "price": 8500000,
    "image": "images/m1-abrams.jpg"
  },
  {
    "name": "Formula 1 Car",
    "price": 15000000,
    "image": "images/formula-1-car.jpg"
  },
  {
    "name": "Apache Helicopter",
    "price": 31000000,
    "image": "images/apache-helicopter.jpg"
  },
  {
    "name": "Mansion",
    "price": 45000000,
    "image": "images/mansion.jpg"
  },
  {
    "name": "Make a Movie",
    "price": 100000000,
    "image": "images/make-a-movie.jpg"
  },
  {
    "name": "Boeing 747",
    "price": 148000000,
    "image": "images/boeing-747.jpg"
  },
  {
    "name": "Mona Lisa",
    "price": 780000000,
    "image": "images/mona-lisa.jpg"
  },
  {
    "name": "Skyscraper",
    "price": 850000000,
    "image": "images/skyscraper.jpg"
  },
  {
    "name": "Cruise Ship",
    "price": 930000000,
    "image": "images/cruise-ship.jpg"
  },
  {
    "name": "NBA Team",
    "price": 2000000000,
    "image": "images/nba-team.jpg"
  }
];

export default function ItemShop() {
  const [purchaseCounts, setPurchaseCounts] = useState<{ [key: string]: number }>({});
  const [showModal, setShowModal] = useState(false);
  const [totalSpent,setTotalSpent] = useState(0);

  const { addItem, salary, selectedBillionaire } = useAppContext();


  const handleBuy = (item : { name: string; price: number }) => {
  addItem(item);
  setTotalSpent(totalSpent + item.price);
  setPurchaseCounts((prev) => ({
    ...prev,
    [item.name]: (prev[item.name] || 0) + 1,
  }));
};

const purchasedItems = items.filter((item) => purchaseCounts[item.name] > 0);

return (
  <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 border-20 rounded border-green-200">
    {items.map((item) => (
      <div key={item.name} className="border rounded p-4 flex flex-col justify-between items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-32 object-cover mb-2 rounded"
        />
        <h4 className="font-semibold text-xl">{item.name}</h4>
        <p className="text-xl"> $ {item.price.toLocaleString('en-US')}</p>
        <p>
      Adjusted Price :  $
          {selectedBillionaire
            ? (Number(salary) * item.price / selectedBillionaire.netWorth).toFixed(7)
            : salary}
        </p>
        <div className="mt-2 flex items-center space-x-2">
          <button
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 text-2xl"
            onClick={() => handleBuy(item)}
          >
            Buy
          </button>
          <span className="text-2xl font-medium">
            x{purchaseCounts[item.name] || 0}
          </span>
        </div>
      </div>
    ))}

      {/* Button to open purchases modal */}
{purchasedItems.length > 0 && (
  <div className="fixed bottom-10 right-5 z-50">
    <button
      className="bg-blue-600 text-white text-xl font-semibold px-6 py-3 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 ring-2 ring-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
      onClick={() => setShowModal(true)}
      title="View your purchases"
    >
      🛒 View Purchases ({purchasedItems.length})
    </button>
  </div>
)}

      {/* Modal popup */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)} // Close modal on clicking outside content
        >
          <div
            className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Your Purchases (Actual Prices in USD)</h2>
            <p className="text-xl font-medium text-center mb-4"> Total Money Spent : ${Number(totalSpent).toLocaleString('en-US')}</p>
            {purchasedItems.length === 0 ? (
              <p>You haven't bought anything yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {purchasedItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center border p-2 rounded"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded mb-2"
                    />
                    <p className="font-semibold text-xl">{item.name}</p>
                    <p className="text-lg font-medium">${Number(item.price).toLocaleString('en-US')} x {purchaseCounts[item.name]}</p>
                    <p className="text-lg font-medium">  cost : ${Number(purchaseCounts[item.name] * item.price ).toLocaleString('en-US')}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 text-right">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
  </div>
);

}



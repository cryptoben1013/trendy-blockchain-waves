import { WalletConnect } from "@/components/WalletConnect";
import { NFTCard } from "@/components/NFTCard";

const FEATURED_NFTS = [
  {
    name: "Cosmic Dreamer #1",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
    price: "0.85",
    creator: "CryptoArtist"
  },
  {
    name: "Digital Soul #24",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    price: "1.2",
    creator: "DigitalMaster"
  },
  {
    name: "Abstract Mind #7",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    price: "0.95",
    creator: "ArtBlock"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          NFT Market
        </h1>
        <WalletConnect />
      </header>

      <main>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_NFTS.map((nft, index) => (
              <NFTCard key={index} {...nft} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
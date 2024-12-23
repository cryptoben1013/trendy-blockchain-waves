import { Card } from "@/components/ui/card";

interface NFTCardProps {
  name: string;
  image: string;
  price: string;
  creator: string;
}

export const NFTCard = ({ name, image, price, creator }: NFTCardProps) => {
  return (
    <Card className="glass-card overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">by {creator}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-medium">{price} ETH</span>
          <button className="px-4 py-1 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            View
          </button>
        </div>
      </div>
    </Card>
  );
};
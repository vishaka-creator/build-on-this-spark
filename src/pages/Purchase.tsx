import BottomNav from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";

const cartItems = [
  { id: 1, name: "Classic Marble White", quantity: 25, price: 89, unit: "sqm" },
  { id: 2, name: "Modern Stone Grey", quantity: 15, price: 75, unit: "sqm" },
];

const Purchase = () => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-card border-b border-border p-4">
        <h1 className="text-2xl font-bold text-center">Purchase</h1>
      </header>

      <div className="p-4 space-y-6">
        {cartItems.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
              <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button>Browse Gallery</Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-muted rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} {item.unit} × ${item.price}
                        </p>
                        <p className="font-bold mt-1">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>${total + 50}</span>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Purchase;

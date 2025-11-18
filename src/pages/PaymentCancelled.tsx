import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft } from "lucide-react";

const PaymentCancelled = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-600">Betaling Geannuleerd</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Je betaling is geannuleerd. Je kunt het opnieuw proberen wanneer je wilt.
              </p>
              
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full bg-kk-gradient hover:opacity-90 text-white">
                  <Link to="/checkout/basis">
                    Probeer Opnieuw
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Terug naar Dashboard
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, description, redirectUrl, webhookUrl, metadata } = await req.json();

    const mollieApiKey = Deno.env.get("MOLLIE_API_KEY");
    if (!mollieApiKey) {
      throw new Error("MOLLIE_API_KEY is not configured");
    }

    const paymentData = {
      amount: {
        currency: "EUR",
        value: amount, // Should be in format like "10.00"
      },
      description: description,
      redirectUrl: redirectUrl,
      webhookUrl: webhookUrl,
      metadata: metadata,
    };

    const response = await fetch("https://api.mollie.com/v2/payments", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${mollieApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Mollie API error:", errorData);
      throw new Error(`Mollie API error: ${response.status}`);
    }

    const payment = await response.json();

    return new Response(JSON.stringify({
      success: true,
      paymentUrl: payment._links.checkout.href,
      paymentId: payment.id,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error creating Mollie payment:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
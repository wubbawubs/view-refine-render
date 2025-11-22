import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Zap, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>KlikKlaar - AI-Powered SEO & Website Optimization</title>
        <meta name="description" content="Transform your website with AI-powered SEO optimization. Get real-time insights, automated improvements, and data-driven content strategies." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered SEO Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                Optimize Your Website
                <span className="block text-primary mt-2">In One Click</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your website's performance with AI-driven SEO insights, 
                automated optimizations, and data-backed content strategies that drive results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/login">
                  <Button size="lg" className="text-lg px-8">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Dashboard Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to help you optimize, analyze, and grow your online presence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Real-Time Analytics</h3>
                <p className="text-muted-foreground">
                  Monitor your website's performance with live data and actionable insights 
                  that help you make informed decisions.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Automated Optimizations</h3>
                <p className="text-muted-foreground">
                  Let AI handle the heavy lifting. Get automated SEO improvements 
                  and suggestions implemented with a single click.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Content Strategy</h3>
                <p className="text-muted-foreground">
                  Generate data-driven content ideas and strategies that resonate 
                  with your audience and boost your rankings.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Why Choose KlikKlaar?
                </h2>
                
                <div className="space-y-6">
                  {[
                    "AI-powered recommendations tailored to your website",
                    "Automatic implementation of SEO best practices",
                    "Real-time performance tracking and alerts",
                    "Content ideas based on trending keywords",
                    "Comprehensive weekly reports and insights",
                    "Easy-to-use dashboard with no technical knowledge required"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img 
                    src="/dashboard-desktop.png" 
                    alt="KlikKlaar Dashboard Preview"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of businesses using KlikKlaar to optimize their online presence 
              and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 KlikKlaar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;

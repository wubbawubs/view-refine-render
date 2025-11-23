import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Login = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const texts = {
    nl: {
      welcome: 'Welkom terug',
      subtitle: 'Log in op uw KlikKlaar dashboard',
      emailLabel: 'E-mailadres',
      emailPlaceholder: 'uw@email.nl',
      passwordLabel: 'Wachtwoord',
      passwordPlaceholder: 'Voer uw wachtwoord in',
      loginButton: 'Inloggen',
      forgotPassword: 'Wachtwoord vergeten?',
      noAccount: 'Nog geen account?',
      signUp: 'Registreren',
      language: 'Taal'
    },
    en: {
      welcome: 'Welcome back',
      subtitle: 'Log in to your KlikKlaar dashboard',
      emailLabel: 'Email address',
      emailPlaceholder: 'your@email.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      loginButton: 'Sign in',
      forgotPassword: 'Forgot password?',
      noAccount: 'Don\'t have an account?',
      signUp: 'Sign up',
      language: 'Language'
    }
  };

  const t = texts[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'll connect to your backend
    console.log('Login attempt:', { email, password });
    // For now, redirect to dashboard
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center premium-dashboard-bg p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kk-gradient opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-kk-gradient opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Language Toggle - Top Right */}
      <div className="absolute top-4 right-4 flex gap-2 items-center">
        <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
          <SelectTrigger className="w-[80px] sm:w-[100px] text-xs bg-card border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nl">🇳🇱 NL</SelectItem>
            <SelectItem value="en">🇬🇧 EN</SelectItem>
          </SelectContent>
        </Select>
        <ThemeToggle />
      </div>

      {/* Main Login Card */}
      <Card className="w-full max-w-md mx-auto shadow-luxury border-border/50 bg-card/95 backdrop-blur-sm relative z-10">
        <CardHeader className="text-center space-y-4 pb-6">
          {/* Logo */}
          <div className="mx-auto w-20 h-20 flex items-center justify-center">
            <img 
              src="/klikklaar-logo-gradient-new.png" 
              alt="KlikKlaar Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Title */}
          <div>
            <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {t.welcome}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t.subtitle}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                {t.emailLabel}
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="pl-10 h-11 border-border focus:border-kk-violet focus:ring-kk-violet/20"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                {t.passwordLabel}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="pl-10 pr-10 h-11 border-border focus:border-kk-violet focus:ring-kk-violet/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-kk-violet hover:text-kk-fuchsia transition-colors"
              >
                {t.forgotPassword}
              </button>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full bg-kk-gradient hover:opacity-90 text-white h-11 font-medium shadow-lg transition-all duration-200"
            >
              {t.loginButton}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">{t.noAccount} </span>
            <button
              type="button"
              className="text-kk-violet hover:text-kk-fuchsia font-medium transition-colors"
            >
              {t.signUp}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
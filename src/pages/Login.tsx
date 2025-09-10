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
      orContinueWith: 'Of ga verder met',
      googleLogin: 'Inloggen met Google',
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
      orContinueWith: 'Or continue with',
      googleLogin: 'Sign in with Google',
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
          <div className="mx-auto w-16 h-16 bg-kk-gradient rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">K</span>
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

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                {t.orContinueWith}
              </span>
            </div>
          </div>

          {/* Google Login Button */}
          <Button 
            type="button" 
            variant="outline" 
            className="w-full h-11 border-border hover:bg-accent"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20">
              <path fill="#4285F4" d="m19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34Z"/>
              <path fill="#34A853" d="M10 20c2.7 0 4.96-.89 6.62-2.41l-3.16-2.45c-.88.59-2.03.94-3.46.94-2.65 0-4.92-1.8-5.74-4.21H1.1v2.52C2.78 17.13 6.13 20 10 20Z"/>
              <path fill="#FBBC04" d="M4.26 11.88c-.22-.65-.35-1.35-.35-2.05s.13-1.4.35-2.05V5.26H1.1C.4 6.68 0 8.25 0 9.83s.4 3.15 1.1 4.57l3.16-2.52Z"/>
              <path fill="#EA4335" d="M10 3.88c1.54 0 2.59.53 3.18 1.2l2.33-2.33C14.96.99 12.7 0 10 0 6.13 0 2.78 2.87 1.1 6.61l3.16 2.52C5.08 5.68 7.35 3.88 10 3.88Z"/>
            </svg>
            {t.googleLogin}
          </Button>

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
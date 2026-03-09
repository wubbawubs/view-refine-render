
-- Klanten tabel
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  website_url TEXT,
  ga4_property_id TEXT,
  seo_score INTEGER DEFAULT 0,
  plan TEXT DEFAULT 'basis',
  status TEXT DEFAULT 'actief',
  auto_optimize BOOLEAN DEFAULT false,
  weekly_report BOOLEAN DEFAULT true,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Optimalisaties tabel
CREATE TABLE public.optimizations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL DEFAULT 'seo',
  status TEXT NOT NULL DEFAULT 'pending',
  priority TEXT DEFAULT 'medium',
  page_url TEXT,
  accepted BOOLEAN,
  accepted_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Keywords tabel
CREATE TABLE public.keywords (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
  keyword TEXT NOT NULL,
  position INTEGER,
  previous_position INTEGER,
  search_volume INTEGER,
  page_url TEXT,
  tracked_since TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Email logs tabel
CREATE TABLE public.email_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  recipient_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  template_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'sent',
  error_message TEXT,
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS inschakelen
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.optimizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

-- Publieke leestoegang (voor nu zonder auth, later aan te passen)
CREATE POLICY "Allow all access to clients" ON public.clients FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to optimizations" ON public.optimizations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to keywords" ON public.keywords FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to email_logs" ON public.email_logs FOR ALL USING (true) WITH CHECK (true);

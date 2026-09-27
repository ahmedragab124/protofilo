-- ========================================================
-- SUPABASE SCHEMAS & RLS SECURITY POLICIES
-- Portfolio + Self-Hosted Admin Dashboard
-- ========================================================

-- 1. Create Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id TEXT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  demo_url TEXT,
  github_url TEXT,
  tags TEXT[] DEFAULT '{}',
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Experiences Table
CREATE TABLE IF NOT EXISTS public.experiences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  node_id TEXT NOT NULL,
  node_label TEXT NOT NULL,
  node_sub TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  bullets TEXT[] DEFAULT '{}',
  skills TEXT[] DEFAULT '{}',
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Services Table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link_text TEXT DEFAULT 'Learn More',
  link_url TEXT DEFAULT '#contact',
  icon_name TEXT DEFAULT 'FaCode',
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create Skills Matrix Table
CREATE TABLE IF NOT EXISTS public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_title TEXT NOT NULL,
  badge TEXT NOT NULL,
  badge_color TEXT DEFAULT 'bg-teal-500/10 text-teal-700 border-teal-500/30',
  icon_name TEXT DEFAULT 'FaCode',
  skills_list TEXT[] DEFAULT '{}',
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Create Contact Messages Table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ========================================================

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Clean existing policies
DROP POLICY IF EXISTS "Public Read Projects" ON public.projects;
DROP POLICY IF EXISTS "Admin All Projects" ON public.projects;

DROP POLICY IF EXISTS "Public Read Experiences" ON public.experiences;
DROP POLICY IF EXISTS "Admin All Experiences" ON public.experiences;

DROP POLICY IF EXISTS "Public Read Services" ON public.services;
DROP POLICY IF EXISTS "Admin All Services" ON public.services;

DROP POLICY IF EXISTS "Public Read Skills" ON public.skills;
DROP POLICY IF EXISTS "Admin All Skills" ON public.skills;

DROP POLICY IF EXISTS "Public Insert Messages" ON public.messages;
DROP POLICY IF EXISTS "Admin All Messages" ON public.messages;

-- Projects Policies
CREATE POLICY "Public Read Projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Admin All Projects" ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Experiences Policies
CREATE POLICY "Public Read Experiences" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Admin All Experiences" ON public.experiences FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Services Policies
CREATE POLICY "Public Read Services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Admin All Services" ON public.services FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Skills Policies
CREATE POLICY "Public Read Skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Admin All Skills" ON public.skills FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Messages Policies
CREATE POLICY "Public Insert Messages" ON public.messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admin All Messages" ON public.messages FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- ========================================================
-- PRE-LOAD INITIAL PORTFOLIO DATA
-- ========================================================

INSERT INTO public.projects (project_id, title, description, category, image, demo_url, github_url, tags, order_index)
VALUES
('01', 'Jawla — AI Tourism Platform', 'AI-powered Egypt travel platform featuring smart itinerary planning, interactive map gems, certified tour guide booking, and luxury UI.', 'AI Web App', 'https://images.unsplash.com/photo-1572252821143-035a0247c458?w=800&auto=format&fit=crop&q=80', 'https://jawla-egypt.vercel.app', 'https://github.com/ahmedragab124/jawla-app', ARRAY['React 18', 'Vite', 'Tailwind CSS', 'Google Gemini AI', 'Supabase'], 1),
('02', 'ICPC SVNU Community Platform', 'Educational problem-solving portal and algorithm training dashboard for South Valley National University competitive programming community.', 'Educational Platform', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80', 'https://github.com/ahmedragab124', 'https://github.com/ahmedragab124', ARRAY['React 19', 'C++', 'Data Structures', 'REST API', 'Framer Motion'], 2),
('03', 'DEPI E-Commerce Storefront', 'High-performance e-commerce frontend built as a capstone project for the Digital Egypt Pioneers Initiative with filtering, cart, and form validation.', 'E-Commerce', 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80', 'https://github.com/ahmedragab124', 'https://github.com/ahmedragab124', ARRAY['React', 'React Hook Form', 'Zod', 'Tailwind CSS'], 3)
ON CONFLICT DO NOTHING;

INSERT INTO public.experiences (node_id, node_label, node_sub, role, company, period, description, bullets, skills, order_index)
VALUES
('01', 'DEPI React Track', 'Digital Egypt Pioneers', 'React Frontend Specialist', 'Digital Egypt Pioneers Initiative (DEPI)', '2024 – Present', 'Specialized intensive scholarship program by the Ministry of Communications and Information Technology (MCIT) focusing on advanced React, modern JavaScript, state management, and production web architecture.', ARRAY['Mastered React 19, Hooks, State Management, and Component Lifecycles.', 'Built production-ready web applications adhering to modern UI/UX design standards.', 'Collaborated with agile teams on capstone projects and peer code reviews.'], ARRAY['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Git & GitHub', 'REST APIs'], 1),
('02', 'NTI Training', 'National Telecom Inst.', 'Web Development Trainee', 'National Telecommunication Institute (NTI Tanta)', '2024', 'Practical technical training on frontend fundamentals, responsive design layouts, web performance optimization, and cross-browser compatibility.', ARRAY['Developed responsive grid and flexbox layouts for complex web interfaces.', 'Implemented accessible HTML5 semantics and CSS3 animations.', 'Learned client-side API integrations and asynchronous data handling.'], ARRAY['HTML5 & CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap/Tailwind'], 2),
('03', 'ICPC Mentor', 'Algorithms Coach', 'ICPC Community Mentor', 'South Valley National University (SVNU)', '2023 – Present', 'Coaching undergraduate students in Data Structures, Advanced Algorithms, and C++ competitive problem solving for ECPC/ACPC contests.', ARRAY['Mentored over 50+ students in algorithmic problem solving and time complexity analysis.', 'Authored practice contest problem sets and editorial explanations.', 'Organized university-level competitive programming bootcamps.'], ARRAY['C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Leadership'], 3),
('04', 'CS & AI Undergrad', 'SVNU Student', 'Computer Science & AI Student', 'South Valley National University', '2023 – 2028 (Expected)', 'Pursuing Bachelor of Science in Computers and Artificial Intelligence with a strong focus on Software Engineering, Object-Oriented Design, and AI fundamentals.', ARRAY['Maintaining top academic performance in CS core courses.', 'Participating in ECPC and ACPC regional competitive programming finals.', 'Developing full stack web projects alongside academic research.'], ARRAY['Object-Oriented Programming', 'Database Design', 'Software Engineering', 'C++ / Python'], 4)
ON CONFLICT DO NOTHING;

INSERT INTO public.services (service_id, title, description, link_text, link_url, icon_name, order_index)
VALUES
('01', 'Frontend Web Development', 'Building ultra-fast, responsive, and accessible web applications using React 19, Vite, and modern CSS frameworks tailored for seamless user experiences.', 'Discuss Project', '#contact', 'FaLaptopCode', 1),
('02', 'React & UI Component Design', 'Crafting custom design systems, reusable component libraries, and interactive interfaces with Framer Motion animations and clean code structure.', 'Explore Components', '#work', 'FaCode', 2),
('03', 'C++ & Algorithmic Problem Solving', 'Optimizing software performance, developing efficient algorithms, and consulting on data structures and complex logic for technical platforms.', 'Hire Specialist', '#contact', 'FaBrain', 3),
('04', 'API Integration & Performance', 'Connecting web applications to REST APIs, Supabase backends, form validations (React Hook Form & Zod), and Lighthouse speed optimization.', 'Get Audit', '#contact', 'FaGears', 4)
ON CONFLICT DO NOTHING;

INSERT INTO public.skills (category_title, badge, badge_color, icon_name, skills_list, order_index)
VALUES
('Frontend Engineering', 'PRIMARY STACK', 'bg-teal-500/10 text-teal-700 border-teal-500/30', 'FaCode', ARRAY['React.js (React 19)', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite & Build Tools', 'Framer Motion', 'Responsive Web Design', 'HTML5 & Semantic UI'], 1),
('Core CS & Algorithms', 'COMPETITIVE RANKED', 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30', 'FaBrain', ARRAY['C++ Programming', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Competitive Programming (ECPC Finalist)', 'Problem Solving', 'Analytical Thinking'], 2),
('Architecture & Tools', 'PRODUCTION READY', 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30', 'FaGears', ARRAY['RESTful API Integration', 'Git & GitHub Version Control', 'React Hook Form & Zod', 'State Management', 'Lighthouse Performance Optimization', 'Clean Code Architecture'], 3),
('Professional Competencies', 'DEPI CERTIFIED', 'bg-teal-600/10 text-teal-800 border-teal-600/30', 'FaUserCheck', ARRAY['DEPI React Track Graduate', 'ICPC SVNU Community Mentor', 'Business English Communication', 'Agile & Team Collaboration', 'Freelancing & Client Delivery'], 4)
ON CONFLICT DO NOTHING;

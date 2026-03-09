import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe,
  Menu,
  X
} from 'lucide-react';
import { PROJECTS, SKILLS, CONTACT } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Kỹ năng', href: '#skills' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg">T</div>
          <span>THANH TÚ</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-neutral-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
            SẴN SÀNG CHO CÁC DỰ ÁN MỚI
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Nguyễn Trần <br />
            <span className="text-neutral-400">Thanh Tú.</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
            Tôi là sinh viên năm 3 chuyên ngành Kỹ thuật phần mềm tại Trường Đại học Sài Gòn. 
            Tôi đam mê lập trình và luôn tìm kiếm cơ hội để áp dụng kiến thức vào thực tế, 
            đặc biệt là trong phát triển Web và ứng dụng Desktop.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-neutral-800 transition-all flex items-center gap-2">
              Xem dự án <ChevronRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href={CONTACT.github} target="_blank" className="text-neutral-400 hover:text-black transition-colors">
                <Github size={24} />
              </a>
              <a href={CONTACT.linkedin} target="_blank" className="text-neutral-400 hover:text-black transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-200 shadow-2xl">
            <img 
              src="avt_SGU.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-400 rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Tools', 'Other'];
  
  return (
    <section id="skills" className="py-20 bg-neutral-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title mb-2">Trình độ chuyên môn</h2>
            <p className="text-neutral-500">Những công nghệ tôi sử dụng để hiện thực hóa ý tưởng.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <motion.div 
              key={cat}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-100 rounded-lg">
                  {cat === 'Frontend' && <Globe size={20} />}
                  {cat === 'Backend' && <Cpu size={20} />}
                  {cat === 'DevOps' && <Code2 size={20} />}
                  {cat === 'Tools' && <Terminal size={20} />}
                </div>
                <h3 className="font-bold">{cat}</h3>
              </div>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-neutral-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Dự án nổi bật</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-100 rounded text-neutral-500">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                {project.title}
                <a href={project.link} className="text-neutral-400 hover:text-black transition-colors">
                  <ExternalLink size={18} />
                </a>
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Hãy cùng tạo nên <br />điều gì đó tuyệt vời.</h2>
            <p className="text-neutral-400 mb-12 max-w-md">
              Tôi luôn cởi mở với các cơ hội hợp tác, dự án freelance hoặc đơn giản là một cuộc trò chuyện về công nghệ.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-400 transition-colors">{CONTACT.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Điện thoại</p>
                  <p>{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Vị trí</p>
                  <p>{CONTACT.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Họ tên</label>
                  <input type="text" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Chủ đề</label>
                <input type="text" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Hợp tác dự án" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Tin nhắn</label>
                <textarea rows={4} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Tôi muốn trao đổi về..."></textarea>
              </div>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-200 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Thanh Tú. Đã đăng ký bản quyền.
        </p>
        <div className="flex items-center gap-6">
          <a href={CONTACT.github} target="_blank" className="text-neutral-400 hover:text-black transition-colors"><Github size={20} /></a>
          <a href={CONTACT.linkedin} target="_blank" className="text-neutral-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
          <a href={`mailto:${CONTACT.email}`} className="text-neutral-400 hover:text-black transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

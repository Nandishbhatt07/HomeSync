import React, { useState, useEffect } from 'react';
import { Home, Thermometer, Zap, Droplets, Wind, Tv, Wifi, Lamp, UtensilsCrossed, Bed, Bath, Sun, Moon, Settings, Bell, Menu, Plus, ChevronRight, TrendingUp, Activity, Power, Clock, Calendar, User, LogOut, CreditCard, Shield, Users, BarChart3, Smartphone, Globe, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Camera, Lightbulb, Speaker, DoorClosed, Trash2, Edit, Search, Filter, Download, Share2, RefreshCw, Maximize2, PlayCircle, PauseCircle } from 'lucide-react';

export default function HomeSyncApp() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (email, password) => {
    setUserData({
      name: 'Alex Johnson',
      email: email,
      plan: 'Premium',
      devices: 28,
      rooms: 6,
      avatar: 'AJ'
    });
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    if (currentPage === 'landing') {
      return <LandingPage onNavigate={setCurrentPage} />;
    }

    if (!isAuthenticated) {
      if (currentPage === 'signup') {
        return <SignupPage onSignup={handleLogin} onLogin={() => setCurrentPage('login')} onBack={() => setCurrentPage('landing')} />;
      }
      if (currentPage === 'login') {
        return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} onBack={() => setCurrentPage('landing')} />;
      }
      return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} onBack={() => setCurrentPage('landing')} />;
    }

    switch(currentPage) {
      case 'dashboard':
        return <Dashboard userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'devices':
        return <DevicesPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'analytics':
        return <AnalyticsPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'automation':
        return <AutomationPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'security':
        return <SecurityPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'settings':
        return <SettingsPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      default:
        return <Dashboard userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
    }
  };

  return <div className="min-h-screen" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>{renderPage()}</div>;
}

function LandingPage({ onNavigate }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'AI-powered temperature management adapts to your preferences and weather patterns',
      color: 'from-blue-500 to-cyan-500',
      stats: '±0.5°C accuracy'
    },
    {
      icon: Zap,
      title: 'Energy Intelligence',
      description: 'Real-time monitoring with predictive analytics to minimize your carbon footprint',
      color: 'from-yellow-500 to-orange-500',
      stats: 'Save up to 35%'
    },
    {
      icon: Shield,
      title: 'Security Hub',
      description: 'Advanced monitoring with facial recognition and instant alerts',
      color: 'from-purple-500 to-pink-500',
      stats: '24/7 protection'
    },
    {
      icon: Speaker,
      title: 'Voice Control',
      description: 'Natural language processing for hands-free home management',
      color: 'from-green-500 to-emerald-500',
      stats: '20+ languages'
    },
    {
      icon: Activity,
      title: 'Smart Automation',
      description: 'Learn your routines and automate everything with intelligent scenes',
      color: 'from-indigo-500 to-blue-500',
      stats: 'Set & forget'
    },
    {
      icon: BarChart3,
      title: 'Deep Analytics',
      description: 'Comprehensive insights with actionable recommendations and forecasting',
      color: 'from-red-500 to-pink-500',
      stats: 'ML-powered'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-2xl border-b border-white/10 z-50 transition-all duration-300" style={{ boxShadow: scrollY > 50 ? '0 10px 40px rgba(0,0,0,0.3)' : 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Home className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black text-white tracking-tight">Homey<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sync</span></span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('login')}
                className="px-6 py-2.5 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold"
              >
                Sign In
              </button>
              <button 
                onClick={() => onNavigate('signup')}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold transform hover:scale-105"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">Trusted by 50,000+ smart homes</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Your Home,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              Intelligently Yours
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation home automation with AI-powered intelligence, 
            seamless control, and energy optimization that learns from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold text-lg transform hover:scale-105 flex items-center gap-3 group"
            >
              Start Free Trial
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-bold text-lg flex items-center gap-3">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '1.5M+', label: 'Devices Connected' },
              { value: '40%', label: 'Energy Saved' },
              { value: '4.9★', label: 'User Rating' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need for a truly intelligent home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-400 font-semibold">{feature.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


     

{/* How It Works */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Get started in minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect Devices', desc: 'Link your smart devices to HomeSync in seconds', icon: Wifi },
              { step: '02', title: 'Customize Settings', desc: 'Set up rooms, routines, and preferences', icon: Settings },
              { step: '03', title: 'Enjoy Automation', desc: 'Relax as your home learns and adapts to you', icon: Activity }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-6xl font-black text-purple-500/30 mb-4">{item.step}</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Loved by Homeowners</h2>
            <p className="text-xl text-gray-400">See what our users are saying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Mitchell', role: 'Homeowner', comment: 'HomeSync transformed my daily routine. The automation is incredibly intuitive!', rating: 5 },
              { name: 'James Chen', role: 'Tech Enthusiast', comment: 'Best smart home platform I\'ve used. The analytics are game-changing.', rating: 5 },
              { name: 'Emma Thompson', role: 'Busy Parent', comment: 'Saves me so much time. My home practically runs itself now!', rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-black text-white mb-6">Ready to Transform Your Home?</h2>
              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Join thousands experiencing the future of living. Start your 14-day free trial today.</p>
              
              <button 
                onClick={() => onNavigate('signup')}
                className="px-12 py-5 bg-white text-purple-600 rounded-2xl hover:shadow-2xl transition-all duration-300 font-black text-lg transform hover:scale-105 inline-flex items-center gap-3"
              >
                Create Free Account
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <p className="text-sm text-purple-200 mt-6">No credit card required • Cancel anytime • 24/7 support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">Home<span className="text-purple-400">Sync</span></span>
              </div>
              <p className="text-gray-400 text-sm">Making homes smarter, safer, and more sustainable.</p>
            </div>
            
            {[
              { title: 'Product', links: [
                { name: 'Features', page: 'features' },
                { name: 'Pricing', page: 'pricing' },
                { name: 'Security', page: 'security' },
                { name: 'Integrations', page: 'integrations' }
              ]},
              { title: 'Company', links: [
                { name: 'About', page: 'about' },
                { name: 'Careers', page: 'careers' },
                { name: 'Blog', page: 'blog' },
                { name: 'Contact', page: 'contact' }
              ]},
              { title: 'Support', links: [
                { name: 'Help Center', page: 'help' },
                { name: 'Documentation', page: 'documentation' },
                { name: 'API', page: 'api' },
                { name: 'Community', page: 'community' }
              ]}
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <button 
                        onClick={() => onNavigate(link.page)}
                        className="text-gray-400 hover:text-white transition text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 HomeSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoginPage({ onLogin, onSignup, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="font-medium">Back</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to HomeSync</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Don't have an account?</p>
          <button onClick={onSignup} className="text-purple-400 hover:text-purple-300 font-bold">Create Account</button>
        </div>
      </div>
    </div>
  );
}

function SignupPage({ onSignup, onLogin, onBack }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData.email, formData.password, formData.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="font-medium">Back</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Join HomeSync today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Already have an account?</p>
          <button onClick={onLogin} className="text-purple-400 hover:text-purple-300 font-bold">Sign In</button>
        </div>
      </div>
    </div>
  );
}

function InfoPage({ page, onNavigate }) {
  const pageContent = {
    features: {
      title: 'Features',
      subtitle: 'Everything you need for intelligent home automation',
      icon: Activity,
      sections: [
        { title: 'AI-Powered Climate Control', desc: 'Smart temperature management that learns your preferences and adapts to weather patterns for optimal comfort and efficiency.', icon: Thermometer },
        { title: 'Energy Intelligence', desc: 'Real-time monitoring with predictive analytics to minimize your carbon footprint and reduce energy costs by up to 35%.', icon: Zap },
        { title: 'Advanced Security', desc: '24/7 monitoring with facial recognition, instant alerts, and integrated smart locks for complete peace of mind.', icon: Shield },
        { title: 'Voice Control', desc: 'Natural language processing in 20+ languages for hands-free home management through any smart speaker.', icon: Speaker },
        { title: 'Smart Automation', desc: 'Create intelligent scenes and routines that learn from your behavior and automate your entire home effortlessly.', icon: Activity },
        { title: 'Deep Analytics', desc: 'Comprehensive energy insights with ML-powered forecasting and actionable recommendations to optimize usage.', icon: BarChart3 }
      ]
    },
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the perfect plan for your smart home',
      icon: CreditCard,
      sections: [
        { title: 'Starter - Free', desc: 'Perfect for getting started. Includes up to 5 devices, basic automation, mobile app access, and community support.', icon: Home },
        { title: 'Premium - $9.99/month', desc: 'Most popular plan. Unlimited devices, advanced automation, energy analytics, priority support, and voice control integration.', icon: Star },
        { title: 'Pro - $19.99/month', desc: 'For power users. Everything in Premium plus AI predictions, custom integrations, API access, and dedicated account manager.', icon: Zap },
        { title: 'Enterprise - Custom', desc: 'For large properties and businesses. White-label options, multi-property management, SLA guarantees, and on-premise deployment.', icon: Globe }
      ]
    },
    // ... other info pages can be added here
  };

  const content = pageContent[page] || pageContent.features;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => onNavigate('landing')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">Home<span className="text-purple-400">Sync</span></span>
            </button>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('login')}
                className="px-6 py-2.5 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold"
              >
                Sign In
              </button>
              <button 
                onClick={() => onNavigate('signup')}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <content.icon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-black text-white mb-4">{content.title}</h1>
          <p className="text-xl text-gray-400">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.sections.map((section, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
              <p className="text-gray-300 leading-relaxed">{section.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold text-lg"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}



function LoginPage({ onLogin, onSignup, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="font-medium">Back</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to HomeySync</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(email, password); }} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Don't have an account?</p>
          <button onClick={onSignup} className="text-purple-400 hover:text-purple-300 font-bold">Create Account</button>
        </div>
      </div>
    </div>
  );
}

function SignupPage({ onSignup, onLogin, onBack }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="font-medium">Back</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Join HomeySync today</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSignup(formData.email, formData.password); }} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Already have an account?</p>
          <button onClick={onLogin} className="text-purple-400 hover:text-purple-300 font-bold">Sign In</button>
        </div>
      </div>
    </div>
  );
}

function Navigation({ currentPage, onNavigate, onLogout }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'devices', label: 'Devices', icon: Smartphone },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'automation', label: 'Automation', icon: Activity },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-800">Home<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Sync</span></span>
            </div>
            
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <button onClick={onLogout} className="flex items-center gap-2 px-5 py-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 font-semibold">
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Dashboard({ userData, onNavigate, onLogout }) {
  const [temp, setTemp] = useState(22);
  const [devices, setDevices] = useState({
    ac: true,
    lights: false,
    tv: true,
    security: true
  });

  const rooms = [
    { name: 'Living Room', icon: Home, usage: 245, color: 'from-cyan-400 to-blue-500', trend: '+5%', devices: 8 },
    { name: 'Kitchen', icon: UtensilsCrossed, usage: 187, color: 'from-orange-400 to-red-500', trend: '-2%', devices: 6 },
    { name: 'Bedroom', icon: Bed, usage: 312, color: 'from-pink-400 to-purple-500', trend: '+12%', devices: 7 },
    { name: 'Bathroom', icon: Bath, usage: 145, color: 'from-blue-400 to-cyan-500', trend: '-8%', devices: 4 },
    { name: 'Office', icon: Smartphone, usage: 198, color: 'from-green-400 to-emerald-500', trend: '+3%', devices: 9 },
    { name: 'Garage', icon: DoorClosed, usage: 89, color: 'from-gray-400 to-slate-500', trend: '-5%', devices: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Welcome back, {userData?.name}! 👋</h1>
          <p className="text-gray-600 text-lg">Here's what's happening in your home today</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Active Devices', value: '24/28', icon: Power, color: 'from-green-400 to-emerald-500', change: '+2 today' },
                { label: 'Energy Usage', value: '1,176 kWh', icon: Zap, color: 'from-yellow-400 to-orange-500', change: '-5% vs yesterday' },
                { label: 'Monthly Cost', value: '$142', icon: CreditCard, color: 'from-blue-400 to-cyan-500', change: 'On track' },
                { label: 'Automation', value: '12 Active', icon: Activity, color: 'from-purple-400 to-pink-500', change: '3 running now' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">{stat.label}</div>
                  <div className="text-2xl font-black text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Room Overview */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-800">Room Overview</h2>
                  <p className="text-sm text-gray-600">Real-time consumption by room</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                  <Plus className="w-4 h-4" />
                  Add Room
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {rooms.map((room, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${room.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                        <room.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 font-semibold">{room.devices} devices</div>
                        <div className={`text-xs font-bold ${room.trend.includes('+') ? 'text-red-500' : 'text-green-500'}`}>
                          {room.trend}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{room.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-gray-800">{room.usage}</span>
                      <span className="text-sm text-gray-500 font-semibold">kWh</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Climate Control */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Wind className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Climate Control</h3>
                      <p className="text-xs text-gray-600">Living Room AC</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setDevices({...devices, ac: !devices.ac})}
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${devices.ac ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${devices.ac ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-center my-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="50%" cy="50%" r="45%" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <circle 
                        cx="50%" cy="50%" r="45%" 
                        stroke="url(#tempGradient)" 
                        strokeWidth="12" 
                        fill="none" 
                        strokeDasharray="565" 
                        strokeDashoffset={565 - (565 * (temp - 16) / 14)} 
                        strokeLinecap="round"
                        className="transition-all duration-700"
                      />
                      <defs>
                        <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{temp}°</div>
                        <div className="text-xs text-gray-500 font-semibold mt-2">Target Temperature</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setTemp(Math.max(16, temp - 1))} 
                    className="flex-1 h-14 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 border-2 border-blue-200 group"
                  >
                    <span className="text-3xl text-blue-600 font-black group-hover:scale-125 transition-transform">−</span>
                  </button>
                  <button 
                    onClick={() => setTemp(Math.min(30, temp + 1))} 
                    className="flex-1 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
                  >
                    <span className="text-3xl text-white font-black group-hover:scale-125 transition-transform">+</span>
                  </button>
                </div>
              </div>

              {/* Quick Controls */}
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
                  <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Quick Controls
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { key: 'lights', name: 'Smart Lights', icon: Lamp, color: 'from-yellow-400 to-orange-500', count: '12 devices' },
                      { key: 'tv', name: 'Entertainment', icon: Tv, color: 'from-blue-400 to-indigo-500', count: '3 devices' },
                      { key: 'security', name: 'Security System', icon: Shield, color: 'from-green-400 to-emerald-500', count: 'Armed' }
                    ].map((device, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${device.color} rounded-xl flex items-center justify-center shadow-md`}>
                            <device.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-800">{device.name}</p>
                            <p className="text-xs text-gray-500">{device.count}</p>
                          </div>
                          <button 
                            onClick={() => setDevices({...devices, [device.key]: !devices[device.key]})}
                            className={`w-12 h-6 rounded-full relative transition-all duration-300 ${devices[device.key] ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${devices[device.key] ? 'right-0.5' : 'left-0.5'}`}></div>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Energy Insights */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6" />
                    <h3 className="font-bold text-lg">Energy Insights</h3>
                  </div>
                  <p className="text-purple-100 text-sm mb-4">You're using 15% less energy than last month! Keep it up.</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">This Month</span>
                      <span className="font-black">$142.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl ring-4 ring-white text-white text-3xl font-black">
                {userData?.avatar}
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-1">{userData?.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{userData?.email}</p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <CheckCircle className="w-4 h-4" />
                {userData?.plan} Member
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-black text-gray-800">{userData?.devices}</div>
                  <div className="text-xs text-gray-600 font-semibold">Devices</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-800">{userData?.rooms}</div>
                  <div className="text-xs text-gray-600 font-semibold">Rooms</div>
                </div>
              </div>
            </div>

            {/* Weather */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm opacity-90 mb-1">
                      <Calendar className="w-4 h-4" />
                      Today
                    </div>
                    <p className="text-lg font-bold">Your Location</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-6xl font-black mb-2">24°C</div>
                    <p className="text-sm opacity-90">Feels like 22°C</p>
                  </div>
                  <Sun className="w-24 h-24 text-yellow-300" />
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <p className="font-bold mb-1">Sunny & Clear</p>
                  <p className="text-xs opacity-90">Perfect conditions for energy savings</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {[
                  { time: '2 min ago', text: 'Living room lights turned on', icon: Lamp, color: 'bg-yellow-500' },
                  { time: '15 min ago', text: 'AC temperature adjusted to 22°C', icon: Wind, color: 'bg-blue-500' },
                  { time: '1 hour ago', text: 'Security system armed', icon: Shield, color: 'bg-green-500' },
                  { time: '2 hours ago', text: 'Morning routine executed', icon: Activity, color: 'bg-purple-500' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <div className={`w-10 h-10 ${activity.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevicesPage({ userData, onNavigate, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRoom, setFilterRoom] = useState('all');
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room AC', type: 'Climate', room: 'Living Room', status: true, power: 1200, icon: Wind, color: 'from-blue-500 to-cyan-500', battery: null },
    { id: 2, name: 'Kitchen Fridge', type: 'Appliance', room: 'Kitchen', status: true, power: 150, icon: Activity, color: 'from-green-500 to-emerald-500', battery: null },
    { id: 3, name: 'Bedroom TV', type: 'Entertainment', room: 'Bedroom', status: false, power: 0, icon: Tv, color: 'from-purple-500 to-pink-500', battery: null },
    { id: 4, name: 'Main WiFi Router', type: 'Network', room: 'Living Room', status: true, power: 12, icon: Wifi, color: 'from-indigo-500 to-blue-500', battery: null },
    { id: 5, name: 'Smart Lamp', type: 'Lighting', room: 'Bedroom', status: true, power: 15, icon: Lamp, color: 'from-yellow-500 to-orange-500', battery: 85 },
    { id: 6, name: 'Bathroom Heater', type: 'Climate', room: 'Bathroom', status: false, power: 0, icon: Thermometer, color: 'from-orange-500 to-red-500', battery: null },
    { id: 7, name: 'Security Camera', type: 'Security', room: 'Garage', status: true, power: 8, icon: Camera, color: 'from-gray-500 to-slate-600', battery: 92 },
    { id: 8, name: 'Smart Speaker', type: 'Audio', room: 'Living Room', status: true, power: 5, icon: Speaker, color: 'from-pink-500 to-rose-500', battery: null }
  ]);

  const toggleDevice = (id) => {
    setDevices(devices.map(d => d.id === id ? {...d, status: !d.status, power: d.status ? 0 : (d.power || 100)} : d));
  };

  const filteredDevices = devices.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRoom = filterRoom === 'all' || d.room === filterRoom;
    return matchesSearch && matchesRoom;
  });

  const totalPower = devices.filter(d => d.status).reduce((sum, d) => sum + d.power, 0);
  const activeDevices = devices.filter(d => d.status).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="devices" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Device Management</h1>
          <p className="text-gray-600 text-lg">Monitor and control all your smart devices</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Power className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Active Devices</p>
                <p className="text-3xl font-black text-gray-800">{activeDevices}/{devices.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Current Power</p>
                <p className="text-3xl font-black text-gray-800">{totalPower}W</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Total Rooms</p>
                <p className="text-3xl font-black text-gray-800">{userData?.rooms}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Auto Updates</p>
                <p className="text-3xl font-black text-gray-800">On</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search devices..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={filterRoom}
                onChange={(e) => setFilterRoom(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800 font-semibold"
              >
                <option value="all">All Rooms</option>
                <option value="Living Room">Living Room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Garage">Garage</option>
              </select>
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-bold">
                <Plus className="w-5 h-5" />
                Add Device
              </button>
            </div>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDevices.map((device) => (
            <div key={device.id} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${device.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <device.icon className="w-8 h-8 text-white" />
                </div>
                <button 
                  onClick={() => toggleDevice(device.id)}
                  className={`w-14 h-7 rounded-full relative transition-all duration-300 ${device.status ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${device.status ? 'right-0.5' : 'left-0.5'}`}></div>
                </button>
              </div>
              
              <h3 className="text-xl font-black text-gray-800 mb-1">{device.name}</h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">{device.type} • {device.room}</p>
              
              {device.battery && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2 font-semibold">
                    <span>Battery</span>
                    <span>{device.battery}%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${device.battery > 50 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-orange-400 to-red-500'}`}
                      style={{ width: `${device.battery}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${device.status ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-sm text-gray-600 font-semibold">{device.status ? 'Active' : 'Inactive'}</span>
                </div>
                <span className="text-lg font-black text-gray-700">{device.power}W</span>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-all duration-300">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsPage({ userData, onNavigate, onLogout }) {
  const weeklyData = [
    { day: 'Mon', usage: 52, cost: 6.2, peak: 75 },
    { day: 'Tue', usage: 58, cost: 7.0, peak: 82 },
    { day: 'Wed', usage: 45, cost: 5.4, peak: 68 },
    { day: 'Thu', usage: 71, cost: 8.5, peak: 95 },
    { day: 'Fri', usage: 63, cost: 7.6, peak: 88 },
    { day: 'Sat', usage: 79, cost: 9.5, peak: 105 },
    { day: 'Sun', usage: 68, cost: 8.2, peak: 92 }
  ];

  const maxUsage = Math.max(...weeklyData.map(d => d.usage));
  const totalWeeklyCost = weeklyData.reduce((sum, d) => sum + d.cost, 0).toFixed(2);
  const avgDailyUsage = (weeklyData.reduce((sum, d) => sum + d.usage, 0) / 7).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="analytics" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Energy Analytics</h1>
          <p className="text-gray-600 text-lg">Comprehensive insights and intelligent forecasting</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Weekly Total', value: `${totalWeeklyCost}`, icon: CreditCard, color: 'from-green-400 to-emerald-500', change: '↓ 5% from last week', positive: true },
            { label: 'Avg Daily Usage', value: `${avgDailyUsage} kWh`, icon: Zap, color: 'from-blue-400 to-cyan-500', change: 'Per day average', positive: true },
            { label: 'Peak Usage', value: '105 kWh', icon: TrendingUp, color: 'from-orange-400 to-red-500', change: 'Saturday 8PM', positive: false },
            { label: 'Cost/kWh', value: '$0.12', icon: BarChart3, color: 'from-purple-400 to-pink-500', change: 'Current rate', positive: true }
          ].map((metric, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-600 font-semibold">{metric.label}</span>
              </div>
              <p className="text-4xl font-black text-gray-800 mb-2">{metric.value}</p>
              <p className={`text-xs font-semibold ${metric.positive ? 'text-green-600' : 'text-gray-600'}`}>{metric.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Usage Chart */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-800">Weekly Energy Usage</h2>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all duration-300 font-semibold text-sm">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
            <div className="flex items-end justify-between h-72 gap-3">
              {weeklyData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 group">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-600 via-purple-500 to-pink-400 rounded-t-2xl transition-all duration-300 hover:from-purple-700 hover:via-purple-600 hover:to-pink-500 cursor-pointer relative" 
                    style={{ height: `${(item.usage / maxUsage) * 100}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-bold">
                      {item.usage} kWh<br/>${item.cost}
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-700 mt-3">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-800">Daily Cost Breakdown</h2>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all duration-300 font-semibold text-sm">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
            <div className="space-y-4">
              {weeklyData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-700 w-14">{item.day}</span>
                  <div className="flex-1 bg-gray-200 h-10 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-end pr-4 transition-all duration-700"
                      style={{ width: `${(item.cost / Math.max(...weeklyData.map(d => d.cost))) * 100}%` }}
                    >
                      <span className="text-sm font-black text-white">${item.cost.toFixed(2)}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold w-16">{item.usage} kWh</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8" />
              <h3 className="text-xl font-black">Peak Hours</h3>
            </div>
            <p className="text-blue-100 mb-4">Your highest usage is on weekends between 6-9 PM. Consider shifting heavy appliances to off-peak hours.</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
              <p className="text-sm font-bold">Potential savings: $15-20/month</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Wind className="w-8 h-8" />
              <h3 className="text-xl font-black">AC Optimization</h3>
            </div>
            <p className="text-purple-100 mb-4">Reducing AC temperature by 2°C during off-peak hours can save up to 15% on cooling costs.</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
              <p className="text-sm font-bold">Estimated savings: $18/month</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8" />
              <h3 className="text-xl font-black">Standby Power</h3>
            </div>
            <p className="text-orange-100 mb-4">Turn off devices completely when not in use. Standby mode accounts for 8% of your consumption.</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
              <p className="text-sm font-bold">Potential savings: $12/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationPage({ userData, onNavigate, onLogout }) {
  const [automations, setAutomations] = useState([
    { id: 1, name: 'Morning Routine', trigger: '7:00 AM', actions: ['Turn on lights', 'Start coffee maker', 'Adjust temperature'], active: true, icon: Sun, color: 'from-yellow-400 to-orange-500' },
    { id: 2, name: 'Away Mode', trigger: 'When leaving home', actions: ['Turn off all lights', 'Lock doors', 'Arm security'], active: true, icon: DoorClosed, color: 'from-blue-400 to-indigo-500' },
    { id: 3, name: 'Night Mode', trigger: '10:00 PM', actions: ['Dim lights', 'Lower temperature', 'Close blinds'], active: true, icon: Moon, color: 'from-purple-400 to-pink-500' },
    { id: 4, name: 'Energy Saver', trigger: 'Peak hours', actions: ['Reduce AC', 'Turn off unused devices'], active: false, icon: Zap, color: 'from-green-400 to-emerald-500' }
  ]);

  const toggleAutomation = (id) => {
    setAutomations(automations.map(a => a.id === id ? {...a, active: !a.active} : a));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="automation" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Smart Automation</h1>
          <p className="text-gray-600 text-lg">Create intelligent routines that adapt to your lifestyle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {[
            { label: 'Active Routines', value: automations.filter(a => a.active).length, icon: PlayCircle, color: 'from-green-400 to-emerald-500' },
            { label: 'Total Automations', value: automations.length, icon: Activity, color: 'from-purple-400 to-pink-500' },
            { label: 'Time Saved', value: '2.5 hrs/day', icon: Clock, color: 'from-blue-400 to-cyan-500' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">{stat.label}</p>
                  <p className="text-3xl font-black text-gray-800">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-gray-800">Your Automations</h2>
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-bold">
              <Plus className="w-5 h-5" />
              Create New
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automations.map((auto) => (
              <div key={auto.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${auto.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <auto.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-800">{auto.name}</h3>
                      <p className="text-sm text-gray-600 font-semibold">{auto.trigger}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleAutomation(auto.id)}
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${auto.active ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${auto.active ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  {auto.actions.map((action, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">{action}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-all duration-300 font-semibold text-sm">
                    Edit
                  </button>
                  <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
          <h2 className="text-2xl font-black text-gray-800 mb-6">Automation Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Welcome Home', desc: 'Lights, temperature, music when you arrive', icon: Home },
              { name: 'Good Night', desc: 'Turn everything off at bedtime', icon: Moon },
              { name: 'Vacation Mode', desc: 'Simulate presence while away', icon: Shield }
            ].map((template, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <template.icon className="w-10 h-10 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-black text-gray-800 mb-2">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{template.desc}</p>
                <button className="text-purple-600 hover:text-purple-700 font-bold text-sm flex items-center gap-2">
                  Use Template
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityPage({ userData, onNavigate, onLogout }) {
  const [securityStatus, setSecurityStatus] = useState('armed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="security" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Security Center</h1>
          <p className="text-gray-600 text-lg">Monitor and protect your home 24/7</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Security Status */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 text-center">
              <div className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl ${securityStatus === 'armed' ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-orange-400 to-red-500'}`}>
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-2">System {securityStatus === 'armed' ? 'Armed' : 'Disarmed'}</h2>
              <p className="text-gray-600 mb-6">All zones are secure</p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setSecurityStatus('armed')}
                  className="px-8 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-bold"
                >
                  Arm System
                </button>
                <button 
                  onClick={() => setSecurityStatus('disarmed')}
                  className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl transition-all duration-300 font-bold"
                >
                  Disarm
                </button>
              </div>
            </div>

            {/* Cameras */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-gray-800 mb-6">Live Cameras</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Front Door', 'Backyard', 'Garage', 'Living Room'].map((location, idx) => (
                  <div key={idx} className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-600" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white font-bold text-sm">{location}</p>
                      <p className="text-green-400 text-xs font-semibold">● Live</p>
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-gray-800" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Events */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-black text-gray-800 mb-4">Recent Events</h3>
              <div className="space-y-3">
                {[
                  { time: '2 min ago', event: 'Front door unlocked', icon: DoorClosed, color: 'bg-blue-500' },
                  { time: '15 min ago', event: 'Motion detected - Backyard', icon: Activity, color: 'bg-orange-500' },
                  { time: '1 hour ago', event: 'System armed', icon: Shield, color: 'bg-green-500' },
                  { time: '2 hours ago', event: 'Camera offline - Garage', icon: AlertCircle, color: 'bg-red-500' }
                ].map((event, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className={`w-10 h-10 ${event.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <event.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 truncate">{event.event}</p>
                      <p className="text-xs text-gray-500">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-6 shadow-xl text-white">
              <AlertCircle className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-black mb-2">Emergency</h3>
              <p className="text-red-100 text-sm mb-4">Immediate help when you need it</p>
              <button className="w-full bg-white text-red-600 py-3 rounded-xl font-black hover:shadow-lg transition-all duration-300">
                Call Emergency Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsPage({ userData, onNavigate, onLogout }) {
  const [settings, setSettings] = useState({
    notifications: true,
    autoMode: false,
    darkMode: false,
    voiceControl: true
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="settings" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1400px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600 text-lg">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl ring-4 ring-white text-white text-4xl font-black">
                {userData?.avatar}
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-1">{userData?.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{userData?.email}</p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-6">
                <CheckCircle className="w-4 h-4" />
                {userData?.plan} Member
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-bold">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-gray-800 mb-4">Account Settings</h2>
              <div className="space-y-3">
                {[
                  { icon: User, label: 'Edit Profile', desc: 'Update your personal information' },
                  { icon: Lock, label: 'Change Password', desc: 'Update your password' },
                  { icon: CreditCard, label: 'Billing & Subscription', desc: 'Manage your subscription plan' },
                  { icon: Mail, label: 'Email Preferences', desc: 'Manage email notifications' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-gray-800 mb-4">Preferences</h2>
              <div className="space-y-4">
                {[
                  { key: 'notifications', icon: Bell, label: 'Push Notifications', desc: 'Receive alerts and updates' },
                  { key: 'autoMode', icon: Activity, label: 'Auto Mode', desc: 'Automatic device optimization' },
                  { key: 'voiceControl', icon: Speaker, label: 'Voice Control', desc: 'Enable voice commands' },
                  { key: 'darkMode', icon: Moon, label: 'Dark Mode', desc: 'Coming soon' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-gray-600" />
                      <div>
                        <p className="font-bold text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSettings({...settings, [item.key]: !settings[item.key]})}
                      className={`w-14 h-7 rounded-full relative transition-all duration-300 ${settings[item.key] ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${settings[item.key] ? 'right-0.5' : 'left-0.5'}`}></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-gray-800 mb-4">Support & About</h2>
              <div className="space-y-3">
                {[
                  { icon: Globe, label: 'Help Center', desc: 'FAQs and support articles' },
                  { icon: Shield, label: 'Privacy Policy', desc: 'How we protect your data' },
                  { icon: Mail, label: 'Contact Support', desc: 'Get help from our team' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-gray-600" />
                      <div>
                        <p className="font-bold text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-red-200/50">
              <h2 className="text-2xl font-black text-red-700 mb-4">Danger Zone</h2>
              <div className="space-y-3">
                <button className="w-full bg-white border-2 border-red-300 text-red-600 py-4 rounded-xl hover:bg-red-50 transition-all duration-300 font-bold">
                  Delete Account
                </button>
                <p className="text-xs text-red-600 text-center font-semibold">This action cannot be undone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

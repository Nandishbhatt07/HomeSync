
import React, { useState, useEffect } from 'react';
import { Home, Thermometer, Zap, Droplets, Wind, Tv, Wifi, Lamp, UtensilsCrossed, Bed, Bath, Sun, Moon, Settings, Bell, Menu, Plus, ChevronRight, TrendingUp, Activity, Power, Clock, Calendar, User, LogOut, CreditCard, Shield, Users, BarChart3, Smartphone, Globe, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Camera, Lightbulb, Speaker, DoorClosed, Trash2, Edit, Search, Filter, Download, Share2, RefreshCw, Maximize2, PlayCircle, PauseCircle, Star, HelpCircle, MessageSquare, Phone, FileText, BookOpen, Code, Briefcase } from 'lucide-react';

// ===================================================================================
// 1. Reusable UI Components
// ===================================================================================

function Navigation({ currentPage, onNavigate, onLogout }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'devices', label: 'Devices', icon: Smartphone },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'automation', label: 'Automation', icon: Activity },
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

// ===================================================================================
// 2. Public & Authentication Pages
// ===================================================================================

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
              <span className="text-3xl font-black text-white tracking-tight">Home<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sync</span></span>
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


// ===================================================================================
// 3. Authenticated App Pages
// ===================================================================================

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

            {/* Climate Control & Quick Controls */}
            {/* ... rest of the dashboard JSX ... */}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Profile Card, Weather, Recent Activity */}
            {/* ... rest of the dashboard JSX ... */}
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
    // ... other devices
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

        {/* Stats, Search/Filter, Devices Grid */}
        {/* ... rest of the DevicesPage JSX ... */}
      </div>
    </div>
  );
}

function AnalyticsPage({ userData, onNavigate, onLogout}) {
  const weeklyData = [
    { day: 'Mon', usage: 52, cost: 6.2, peak: 75 },
    { day: 'Tue', usage: 58, cost: 7.0, peak: 82 },
    // ... other days
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

        {/* Key Metrics, Usage Chart, Cost Breakdown, Insights */}
        {/* ... rest of the AnalyticsPage JSX ... */}
      </div>
    </div>
  );
}

function AutomationPage({ userData, onNavigate, onLogout }) {
  const [automations, setAutomations] = useState([
    { id: 1, name: 'Morning Routine', trigger: '7:00 AM', actions: ['Turn on lights', 'Start coffee maker', 'Adjust temperature'], active: true, icon: Sun, color: 'from-yellow-400 to-orange-500' },
    { id: 2, name: 'Away Mode', trigger: 'When leaving home', actions: ['Turn off all lights', 'Lock doors', 'Arm security'], active: true, icon: DoorClosed, color: 'from-blue-400 to-indigo-500' },
    // ... other automations
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

        {/* Stats, Automations List, Templates */}
        {/* ... rest of the AutomationPage JSX ... */}
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

        {/* Profile, Account Settings, Preferences, Support, Danger Zone */}
        {/* ... rest of the SettingsPage JSX ... */}
      </div>
    </div>
  );
}

// ===================================================================================
// 4. Main App Component (The Orchestrator)
// ===================================================================================

export default function HomeSyncApp() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (email, password, name) => {
    setUserData({
      name: name || 'Alex Johnson',
      email: email,
      plan: 'Premium',
      devices: 28,
      rooms: 6,
      avatar: name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'AJ'
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

    // Info pages accessible without login
    if (['features', 'pricing', 'security', 'integrations', 'about', 'careers', 'blog', 'contact', 'help', 'documentation', 'api', 'community'].includes(currentPage)) {
      return <InfoPage page={currentPage} onNavigate={setCurrentPage} />;
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
      case 'settings':
        return <SettingsPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      default:
        return <Dashboard userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
    }
  };

  return <div className="min-h-screen" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>{renderPage()}</div>;
}

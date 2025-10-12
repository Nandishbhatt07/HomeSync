import React, { useState, useEffect } from 'react';
import { Home, Thermometer, Zap, Droplets, Wind, Tv, Wifi, Lamp, UtensilsCrossed, Bed, Bath, Sun, Moon, Settings, Bell, Menu, Plus, ChevronRight, TrendingUp, Activity, Power, Clock, Calendar, User, LogOut, CreditCard, Shield, Users, BarChart3, Smartphone, Globe, Mail, Lock, Eye, EyeOff } from 'lucide-react';

// Main App Component with Routing
export default function HomSyncApp() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (email, password) => {
    // Simulate authentication
    setUserData({
      name: 'Alex Jonthon',
      email: email,
      plan: 'Premium',
      devices: 24,
      rooms: 4
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
    // Landing page is accessible without authentication
    if (currentPage === 'landing') {
      return <LandingPage onNavigate={setCurrentPage} />;
    }

    // Login and Signup pages
    if (!isAuthenticated) {
      if (currentPage === 'signup') {
        return <SignupPage onSignup={handleLogin} onLogin={() => setCurrentPage('login')} onBack={() => setCurrentPage('landing')} />;
      }
      if (currentPage === 'login') {
        return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} onBack={() => setCurrentPage('landing')} />;
      }
      // If trying to access protected pages, redirect to login
      return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} onBack={() => setCurrentPage('landing')} />;
    }

    switch(currentPage) {
      case 'dashboard':
        return <Dashboard userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'devices':
        return <DevicesPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'analytics':
        return <AnalyticsPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'settings':
        return <SettingsPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      default:
        return <Dashboard userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
}

// Landing Page Component
function LandingPage({ onNavigate }) {
  const features = [
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Smart temperature and humidity management for perfect comfort',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Energy Monitoring',
      description: 'Track and optimize your energy consumption in real-time',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Remote Access',
      description: 'Control your home from anywhere with our mobile app',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Get insights and recommendations to save energy and money',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Bank-level encryption to keep your home data safe',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Activity,
      title: 'Automation',
      description: 'Set schedules and triggers for fully automated home management',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-white">HomSync</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onNavigate('login')}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-xl transition font-medium"
              >
                Sign In
              </button>
              <button 
                onClick={() => onNavigate('signup')}
                className="px-6 py-2 bg-white text-blue-600 rounded-xl hover:shadow-lg transition font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Home,
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
              Smarter Than Ever
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the future of home automation. Control, monitor, and optimize your entire home from one intelligent platform.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition border border-white/30 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Demo Dashboard Preview */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/20 to-transparent rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-2 border border-white/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=700&fit=crop" 
              alt="Dashboard Preview" 
              className="w-full rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl items-center justify-center">
              <div className="text-center text-white">
                <Home className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-xl font-semibold">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/5 backdrop-blur-lg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-blue-200">Powerful features to make your home truly smart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-200">Devices Connected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">35%</div>
              <div className="text-blue-200">Energy Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">4.9★</div>
              <div className="text-blue-200">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of users who are already saving energy and money</p>
            <button 
              onClick={() => onNavigate('signup')}
              className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              Create Free Account
            </button>
            <p className="text-sm text-blue-200 mt-4">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xl font-bold text-white">HomSync</span>
              </div>
              <p className="text-blue-200 text-sm">Making homes smarter, one device at a time.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-sm">
            <p>© 2025 HomSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Login Page Component
function LoginPage({ onLogin, onSignup, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your HomSync account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Forgot password?
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-3">Don't have an account?</p>
          <button
            onClick={onSignup}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Create Account
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          Demo: Use any email/password to login
        </div>
      </div>
    </div>
  );
}

// Signup Page Component
function SignupPage({ onSignup, onLogin, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      onSignup(formData.email, formData.password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Join HomSync today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-3">Already have an account?</p>
          <button
            onClick={onLogin}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

// Navigation Component
function Navigation({ currentPage, onNavigate, onLogout }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'devices', label: 'Devices', icon: Smartphone },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">HomSync</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
                    currentPage === item.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

// Dashboard Component (Original Design)
function Dashboard({ userData, onNavigate, onLogout }) {
  const [temp, setTemp] = useState(16);
  const [acPower, setAcPower] = useState(true);
  const [lampPower, setLampPower] = useState(false);
  const [tvPower, setTvPower] = useState(true);
  const [humidity, setHumidity] = useState(25);
  const [currentTemp, setCurrentTemp] = useState(30);

  const rooms = [
    { name: 'Living Room', icon: Home, usage: 190, color: 'bg-cyan-400', trend: '+5%' },
    { name: 'Kitchen', icon: UtensilsCrossed, usage: 140, color: 'bg-orange-400', trend: '-2%' },
    { name: 'Bed Room', icon: Bed, usage: 278, color: 'bg-pink-400', trend: '+12%' },
    { name: 'Bath Room', icon: Bath, usage: 112, color: 'bg-blue-400', trend: '-8%' }
  ];

  const electricityData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 38 },
    { month: 'Apr', value: 65 },
    { month: 'May', value: 78 },
    { month: 'Jun', value: 90 },
    { month: 'Jul', value: 85 },
    { month: 'Aug', value: 75 },
    { month: 'Sep', value: 70 }
  ];

  const maxValue = Math.max(...electricityData.map(d => d.value));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Navigation currentPage="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1600px] mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Overview Section */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Room Overview</h2>
                  <p className="text-sm text-gray-500">Last 7 days consumption</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {rooms.map((room, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white to-gray-50 backdrop-blur rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-white/50">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600 font-medium">{room.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 ${room.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition`}>
                        <room.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{room.usage}</div>
                        <div className="text-xs text-gray-500">kWh</div>
                        <div className={`text-xs font-semibold ${room.trend.includes('+') ? 'text-red-500' : 'text-green-500'}`}>
                          {room.trend}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Control Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Air Conditioner */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <Wind className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 block">Air Conditioner</span>
                      <span className="text-xs text-gray-500">Climate Control</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAcPower(!acPower)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${acPower ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${acPower ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-center my-6">
                  <div className="relative w-56 h-56">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="50%" cy="50%" r="45%" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                      <circle 
                        cx="50%" cy="50%" r="45%" 
                        stroke="url(#gradient)" 
                        strokeWidth="8" 
                        fill="none" 
                        strokeDasharray="628" 
                        strokeDashoffset={628 - (628 * (temp - 16) / 14)} 
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{temp}°C</div>
                        <div className="text-xs text-gray-500 mt-1">Target Temp</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={() => setTemp(Math.max(16, temp - 1))} 
                    className="flex-1 h-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-blue-200"
                  >
                    <span className="text-2xl text-blue-500 font-bold">−</span>
                  </button>
                  <Thermometer className="w-6 h-6 text-gray-400" />
                  <button 
                    onClick={() => setTemp(Math.min(30, temp + 1))} 
                    className="flex-1 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-2xl text-white font-bold">+</span>
                  </button>
                </div>
              </div>

              {/* Environmental Sensors */}
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">Humidity</span>
                        <span className="text-xs text-gray-500">Current Level</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setHumidity(Math.max(0, humidity - 5))} className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition">
                        <ChevronRight className="w-4 h-4 text-blue-500 rotate-90" />
                      </button>
                      <button onClick={() => setHumidity(Math.min(100, humidity + 5))} className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition">
                        <ChevronRight className="w-4 h-4 text-blue-500 -rotate-90" />
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-500">{humidity}%</div>
                    <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 rounded-full" 
                        style={{ width: `${humidity}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                        <Thermometer className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">Temperature</span>
                        <span className="text-xs text-gray-500">Indoor Climate</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setCurrentTemp(Math.max(0, currentTemp - 1))} className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center hover:bg-orange-100 transition">
                        <ChevronRight className="w-4 h-4 text-orange-500 rotate-90" />
                      </button>
                      <button onClick={() => setCurrentTemp(Math.min(50, currentTemp + 1))} className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center hover:bg-orange-100 transition">
                        <ChevronRight className="w-4 h-4 text-orange-500 -rotate-90" />
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500">{currentTemp}°</div>
                    <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-500 rounded-full" 
                        style={{ width: `${(currentTemp / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electricity Summary */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Electricity Summary</h2>
                  <p className="text-sm text-gray-500">Monthly consumption</p>
                </div>
              </div>
              
              <div className="flex items-end justify-between h-48 gap-2">
                {electricityData.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 group">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500 cursor-pointer relative" 
                      style={{ height: `${(item.value / maxValue) * 100}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition">{item.value}</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-2 font-medium">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* User Profile */}
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl text-center border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg ring-4 ring-white">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{userData?.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{userData?.plan} user</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{userData?.devices}</div>
                  <div className="text-xs text-gray-500">Devices</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{userData?.rooms}</div>
                  <div className="text-xs text-gray-500">Rooms</div>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('settings')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl hover:shadow-lg transition text-sm font-semibold"
              >
                View Profile
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <h3 className="font-bold text-gray-800 mb-4">Quick Controls</h3>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-md">
                      <Lamp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">Smart Lamp</p>
                      <p className="text-xs text-gray-500">4 devices</p>
                    </div>
                    <button 
                      onClick={() => setLampPower(!lampPower)}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${lampPower ? 'bg-yellow-500' : 'bg-gray-300'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${lampPower ? 'right-0.5' : 'left-0.5'}`}></div>
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                      <Tv className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">Television</p>
                      <p className="text-xs text-gray-500">2 devices</p>
                    </div>
                    <button 
                      onClick={() => setTvPower(!tvPower)}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${tvPower ? 'bg-blue-500' : 'bg-gray-300'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${tvPower ? 'right-0.5' : 'left-0.5'}`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm opacity-90 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Today
                    </p>
                    <p className="text-lg font-semibold">Your Location</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between my-6">
                  <div>
                    <div className="text-5xl font-bold mb-1">22°C</div>
                    <p className="text-sm opacity-90">Feels like 20°C</p>
                  </div>
                  <Sun className="w-20 h-20 text-yellow-300" />
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <p className="text-sm font-semibold mb-1">Sunny Day</p>
                  <p className="text-xs opacity-90">Perfect weather conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Devices Page
function DevicesPage({ userData, onNavigate, onLogout }) {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room AC', type: 'Air Conditioner', room: 'Living Room', status: true, power: 1200, icon: Wind, color: 'bg-blue-500' },
    { id: 2, name: 'Kitchen Fridge', type: 'Refrigerator', room: 'Kitchen', status: true, power: 150, icon: Activity, color: 'bg-green-500' },
    { id: 3, name: 'Bedroom TV', type: 'Television', room: 'Bedroom', status: false, power: 0, icon: Tv, color: 'bg-purple-500' },
    { id: 4, name: 'Main WiFi Router', type: 'Router', room: 'Living Room', status: true, power: 12, icon: Wifi, color: 'bg-indigo-500' },
    { id: 5, name: 'Smart Lamp', type: 'Lighting', room: 'Bedroom', status: true, power: 15, icon: Lamp, color: 'bg-yellow-500' },
    { id: 6, name: 'Bathroom Heater', type: 'Heater', room: 'Bathroom', status: false, power: 0, icon: Thermometer, color: 'bg-orange-500' },
  ]);

  const toggleDevice = (id) => {
    setDevices(devices.map(device => 
      device.id === id ? { ...device, status: !device.status, power: device.status ? 0 : device.power || 100 } : device
    ));
  };

  const totalPower = devices.filter(d => d.status).reduce((sum, d) => sum + d.power, 0);
  const activeDevices = devices.filter(d => d.status).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Navigation currentPage="devices" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1600px] mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Device Management</h1>
          <p className="text-gray-600">Monitor and control all your smart devices</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Power className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Devices</p>
                <p className="text-2xl font-bold text-gray-800">{activeDevices}/{devices.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Power</p>
                <p className="text-2xl font-bold text-gray-800">{totalPower}W</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Rooms</p>
                <p className="text-2xl font-bold text-gray-800">{userData?.rooms}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">All Devices</h2>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:shadow-lg transition">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {devices.map((device) => (
              <div key={device.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-white/50 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${device.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition`}>
                    <device.icon className="w-7 h-7 text-white" />
                  </div>
                  <button 
                    onClick={() => toggleDevice(device.id)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${device.status ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${device.status ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-1">{device.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{device.type} • {device.room}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${device.status ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                    <span className="text-xs text-gray-600">{device.status ? 'Active' : 'Inactive'}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{device.power}W</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Page
function AnalyticsPage({ userData, onNavigate, onLogout }) {
  const weeklyData = [
    { day: 'Mon', usage: 45, cost: 5.4 },
    { day: 'Tue', usage: 52, cost: 6.2 },
    { day: 'Wed', usage: 38, cost: 4.6 },
    { day: 'Thu', usage: 65, cost: 7.8 },
    { day: 'Fri', usage: 58, cost: 7.0 },
    { day: 'Sat', usage: 72, cost: 8.6 },
    { day: 'Sun', usage: 50, cost: 6.0 }
  ];

  const maxUsage = Math.max(...weeklyData.map(d => d.usage));
  const totalWeeklyCost = weeklyData.reduce((sum, d) => sum + d.cost, 0).toFixed(2);
  const avgDailyUsage = (weeklyData.reduce((sum, d) => sum + d.usage, 0) / 7).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Navigation currentPage="analytics" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1600px] mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Energy Analytics</h1>
          <p className="text-gray-600">Track your energy consumption and costs</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-600">Weekly Total</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">${totalWeeklyCost}</p>
            <p className="text-xs text-green-600 mt-1">↓ 5% from last week</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-600">Avg Daily Usage</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">{avgDailyUsage} kWh</p>
            <p className="text-xs text-gray-500 mt-1">Per day average</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-600">Peak Usage</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">72 kWh</p>
            <p className="text-xs text-gray-500 mt-1">Saturday</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-600">Cost/kWh</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">$0.12</p>
            <p className="text-xs text-gray-500 mt-1">Current rate</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Usage Chart */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Weekly Energy Usage</h2>
            <div className="flex items-end justify-between h-64 gap-3">
              {weeklyData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 group">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-500 cursor-pointer relative" 
                    style={{ height: `${(item.usage / maxUsage) * 100}%` }}
                  >
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
                      {item.usage} kWh
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 mt-3">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Daily Cost Breakdown</h2>
            <div className="space-y-4">
              {weeklyData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700 w-12">{item.day}</span>
                  <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                      style={{ width: `${(item.cost / Math.max(...weeklyData.map(d => d.cost))) * 100}%` }}
                    >
                      <span className="text-xs font-bold text-white">${item.cost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 shadow-xl text-white">
          <h2 className="text-xl font-bold mb-4">💡 Energy Saving Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <h3 className="font-semibold mb-2">Peak Hours</h3>
              <p className="text-sm opacity-90">Your highest usage is on weekends. Consider shifting heavy appliances to off-peak hours.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <h3 className="font-semibold mb-2">AC Optimization</h3>
              <p className="text-sm opacity-90">Reducing AC temperature by 2°C can save up to 15% on cooling costs.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <h3 className="font-semibold mb-2">Standby Power</h3>
              <p className="text-sm opacity-90">Turn off devices completely when not in use to reduce phantom power consumption.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Page
function SettingsPage({ userData, onNavigate, onLogout }) {
  const [notifications, setNotifications] = useState(true);
  const [autoMode, setAutoMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Navigation currentPage="settings" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1200px] mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg ring-4 ring-white">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{userData?.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{userData?.email}</p>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                {userData?.plan} Plan
              </div>
            </div>
          </div>

          {/* Settings Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Settings */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Edit Profile</p>
                      <p className="text-xs text-gray-500">Update your personal information</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Change Password</p>
                      <p className="text-xs text-gray-500">Update your password</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Billing & Subscription</p>
                      <p className="text-xs text-gray-500">Manage your subscription plan</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Notifications</p>
                      <p className="text-xs text-gray-500">Receive alerts and updates</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setNotifications(!notifications)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${notifications ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${notifications ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Auto Mode</p>
                      <p className="text-xs text-gray-500">Automatic device optimization</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAutoMode(!autoMode)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${autoMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${autoMode ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Moon className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Dark Mode</p>
                      <p className="text-xs text-gray-500">Coming soon</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${darkMode ? 'bg-purple-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${darkMode ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Support & About</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Help Center</p>
                      <p className="text-xs text-gray-500">FAQs and support articles</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Privacy Policy</p>
                      <p className="text-xs text-gray-500">How we protect your data</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Contact Support</p>
                      <p className="text-xs text-gray-500">Get help from our team</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-red-200/50">
              <h2 className="text-xl font-bold text-red-700 mb-4">Danger Zone</h2>
              <div className="space-y-3">
                <button className="w-full bg-white border border-red-300 text-red-600 py-3 rounded-xl hover:bg-red-50 transition font-semibold">
                  Delete Account
                </button>
                <p className="text-xs text-red-600 text-center">This action cannot be undone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

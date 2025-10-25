import React, { useState, useEffect } from 'react';
import { Home, Thermometer, Zap, Droplets, Wind, Tv, Wifi, Lamp, UtensilsCrossed, Bed, Bath, Sun, Moon, Settings, Bell, Menu, Plus, ChevronRight, TrendingUp, Activity, Power, Clock, Calendar, User, LogOut, CreditCard, Shield, Users, BarChart3, Smartphone, Globe, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Camera, Lightbulb, Speaker, DoorClosed, Trash2, Edit, Search, Filter, Download, Share2, RefreshCw, Maximize2, PlayCircle, PauseCircle, Github, Twitter, Facebook, Cloud, CloudRain, CloudSnow } from 'lucide-react';

// Initialize Firebase (using config from your file)


// Simulated Firebase Auth Functions
const mockAuthService = {
  signUpWithEmail: async (email, password, name) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = {
      uid: 'user_' + Date.now(),
      email,
      name,
      createdAt: new Date().toISOString()
    };
    return user;
  },
  
  signInWithEmail: async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      uid: 'user_demo',
      email,
      name: 'Alex Johnson'
    };
  },
  
  signInWithProvider: async (provider) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      uid: 'user_' + provider + '_' + Date.now(),
      email: `user@${provider}.com`,
      name: `${provider} User`,
      provider
    };
  },
  
  signOut: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  }
};

// Weather API Service
const weatherService = {
  getCurrentWeather: async (city = 'Surat') => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'];
    const temp = Math.floor(Math.random() * 15) + 20;
    
    return {
      temp,
      feelsLike: temp - 2,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      city,
      icon: temp > 28 ? Sun : temp > 22 ? Cloud : CloudRain
    };
  }
};

// Activity Tracker
const activityTracker = {
  activities: [],
  
  logActivity: (action, deviceName, details = {}) => {
    const activity = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      action,
      deviceName,
      details,
      timeAgo: 'Just now'
    };
    activityTracker.activities.unshift(activity);
    if (activityTracker.activities.length > 50) {
      activityTracker.activities = activityTracker.activities.slice(0, 50);
    }
    return activity;
  },
  
  getRecent: (limit = 10) => {
    return activityTracker.activities.slice(0, limit).map(activity => ({
      ...activity,
      timeAgo: activityTracker.formatTimeAgo(activity.timestamp)
    }));
  },
  
  formatTimeAgo: (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
  }
};

// Analytics Engine
const analyticsEngine = {
  calculateEnergyUsage: (devices) => {
    const activeDevices = devices.filter(d => d.status);
    const totalPower = activeDevices.reduce((sum, d) => sum + d.power, 0);
    const dailyKwh = (totalPower * 24) / 1000;
    const monthlyCost = dailyKwh * 30 * 0.12;
    
    return {
      totalPower,
      dailyKwh: dailyKwh.toFixed(2),
      monthlyCost: monthlyCost.toFixed(2),
      activeDevices: activeDevices.length,
      totalDevices: devices.length
    };
  },
  
  generateWeeklyData: () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      usage: Math.floor(Math.random() * 40) + 40,
      cost: (Math.random() * 4 + 4).toFixed(2),
      peak: Math.floor(Math.random() * 40) + 60
    }));
  },
  
  getRoomBreakdown: (rooms) => {
    return rooms.map(room => ({
      ...room,
      percentage: Math.floor(Math.random() * 30) + 10,
      trend: Math.random() > 0.5 ? 'up' : 'down',
      trendValue: Math.floor(Math.random() * 15) + 1
    }));
  }
};

// AI Recommendation Engine
const aiRecommendations = {
  generateRecommendations: (devices, analytics, weather) => {
    const recommendations = [];
    
    if (analytics.totalPower > 1500) {
      recommendations.push({
        type: 'energy',
        priority: 'high',
        title: 'High Power Consumption Detected',
        message: `Your current power usage is ${analytics.totalPower}W. Consider turning off unused devices to save energy.`,
        action: 'View Devices',
        savings: '$15-20/month'
      });
    }
    
    if (weather && weather.temp > 28) {
      recommendations.push({
        type: 'climate',
        priority: 'medium',
        title: 'Optimize AC Settings',
        message: `It's ${weather.temp}°C outside. Increasing AC temperature by 2°C can save 15% energy without affecting comfort.`,
        action: 'Adjust Temperature',
        savings: '$18/month'
      });
    }
    
    const alwaysOnDevices = devices.filter(d => d.status && d.power > 100);
    if (alwaysOnDevices.length > 3) {
      recommendations.push({
        type: 'automation',
        priority: 'low',
        title: 'Create Power-Saving Automation',
        message: `${alwaysOnDevices.length} high-power devices are always on. Set up schedules to reduce standby consumption.`,
        action: 'Create Automation',
        savings: '$12/month'
      });
    }
    
    return recommendations;
  }
};

// Notification System
const notificationSystem = {
  notifications: [],
  
  addNotification: (title, message, type = 'info') => {
    const notification = {
      id: Date.now(),
      title,
      message,
      type,
      timestamp: new Date().toISOString(),
      read: false
    };
    notificationSystem.notifications.unshift(notification);
    return notification;
  },
  
  getUnread: () => {
    return notificationSystem.notifications.filter(n => !n.read);
  },
  
  markAsRead: (id) => {
    const notif = notificationSystem.notifications.find(n => n.id === id);
    if (notif) notif.read = true;
  }
};

// IoT Device Simulator
const iotSimulator = {
  simulateDeviceUpdate: (device) => {
    if (device.status) {
      const fluctuation = Math.floor(Math.random() * 20) - 10;
      device.power = Math.max(0, device.basePower + fluctuation);
    }
    
    if (device.battery && device.status) {
      device.battery = Math.max(0, device.battery - 0.1);
    }
    
    return device;
  },
  
  simulateEnvironment: (temp) => {
    return temp + (Math.random() * 0.5 - 0.25);
  }
};

export default function HomeSyncApp() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadWeather();
      const weatherInterval = setInterval(loadWeather, 600000);
      return () => clearInterval(weatherInterval);
    }
  }, [isAuthenticated]);

  const loadWeather = async () => {
    const weatherData = await weatherService.getCurrentWeather();
    setWeather(weatherData);
  };

  const handleSignup = async (email, password, name) => {
    setLoading(true);
    try {
      const user = await mockAuthService.signUpWithEmail(email, password, name);
      setUserData({
        name: name || 'User',
        email: email,
        plan: 'Free',
        devices: 0,
        rooms: 0,
        avatar: name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U',
        uid: user.uid,
        joinedDate: new Date().toLocaleDateString()
      });
      setIsAuthenticated(true);
      setCurrentPage('dashboard');
      notificationSystem.addNotification('Welcome!', 'Your account has been created successfully.', 'success');
    } catch (error) {
      alert('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const user = await mockAuthService.signInWithEmail(email, password);
      setUserData({
        name: user.name,
        email: email,
        plan: 'Premium',
        devices: 28,
        rooms: 6,
        avatar: user.name.split(' ').map(n => n[0]).join('').toUpperCase(),
        uid: user.uid,
        joinedDate: '2024-01-15'
      });
      setIsAuthenticated(true);
      setCurrentPage('dashboard');
      activityTracker.logActivity('User Login', 'System', { email });
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    try {
      const user = await mockAuthService.signInWithProvider(provider);
      setUserData({
        name: user.name,
        email: user.email,
        plan: 'Premium',
        devices: 28,
        rooms: 6,
        avatar: user.name.split(' ').map(n => n[0]).join('').toUpperCase(),
        uid: user.uid,
        provider,
        joinedDate: new Date().toLocaleDateString()
      });
      setIsAuthenticated(true);
      setCurrentPage('dashboard');
    } catch (error) {
      alert(`${provider} login failed. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await mockAuthService.signOut();
      activityTracker.logActivity('User Logout', 'System', { email: userData.email });
      setIsAuthenticated(false);
      setUserData(null);
      setCurrentPage('landing');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const renderPage = () => {
    if (currentPage === 'landing') {
      return <LandingPage onNavigate={setCurrentPage} />;
    }

    if (!isAuthenticated) {
      if (currentPage === 'signup') {
        return <SignupPage onSignup={handleSignup} onLogin={() => setCurrentPage('login')} onBack={() => setCurrentPage('landing')} onSocialLogin={handleSocialLogin} loading={loading} />;
      }
      if (currentPage === 'login') {
        return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} onBack={() => setCurrentPage('landing')} onSocialLogin={handleSocialLogin} loading={loading} />;
      }
      return <LoginPage onLogin={handleLogin} onSignup={() => setCurrentPage('signup')} onBack={() => setCurrentPage('landing')} onSocialLogin={handleSocialLogin} loading={loading} />;
    }

    switch(currentPage) {
      case 'dashboard':
        return <Dashboard userData={userData} weather={weather} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'devices':
        return <DevicesPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'analytics':
        return <AnalyticsPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'automation':
        return <AutomationPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'security':
        return <SecurityPage userData={userData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'settings':
        return <SettingsPage userData={userData} setUserData={setUserData} onNavigate={setCurrentPage} onLogout={handleLogout} />;
      default:
        return <Dashboard userData={userData} weather={weather} onNavigate={setCurrentPage} onLogout={handleLogout} />;
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
    { icon: Thermometer, title: 'Climate Control', description: 'AI-powered temperature management adapts to your preferences', color: 'from-blue-500 to-cyan-500', stats: '±0.5°C accuracy' },
    { icon: Zap, title: 'Energy Intelligence', description: 'Real-time monitoring with predictive analytics', color: 'from-yellow-500 to-orange-500', stats: 'Save up to 35%' },
    { icon: Shield, title: 'Security Hub', description: 'Advanced monitoring with instant alerts', color: 'from-purple-500 to-pink-500', stats: '24/7 protection' },
    { icon: Speaker, title: 'Voice Control', description: 'Natural language processing for hands-free control', color: 'from-green-500 to-emerald-500', stats: '20+ languages' },
    { icon: Activity, title: 'Smart Automation', description: 'Learn your routines and automate everything', color: 'from-indigo-500 to-blue-500', stats: 'Set & forget' },
    { icon: BarChart3, title: 'Deep Analytics', description: 'Comprehensive insights with actionable recommendations', color: 'from-red-500 to-pink-500', stats: 'ML-powered' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <button onClick={() => onNavigate('login')} className="px-6 py-2.5 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold">
                Sign In
              </button>
              <button onClick={() => onNavigate('signup')} className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold transform hover:scale-105">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>

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
            Experience next-generation home automation with AI-powered intelligence, seamless control, and energy optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button onClick={() => onNavigate('signup')} className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold text-lg transform hover:scale-105 flex items-center gap-3 group">
              Start Free Trial
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-bold text-lg flex items-center gap-3">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

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

      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need for a truly intelligent home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
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

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-black text-white mb-6">Ready to Transform Your Home?</h2>
              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Join thousands experiencing the future of living.</p>
              <button onClick={() => onNavigate('signup')} className="px-12 py-5 bg-white text-purple-600 rounded-2xl hover:shadow-2xl transition-all duration-300 font-black text-lg transform hover:scale-105 inline-flex items-center gap-3">
                Create Free Account
                <ChevronRight className="w-6 h-6" />
              </button>
              <p className="text-sm text-purple-200 mt-6">No credit card required • Cancel anytime • 24/7 support</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 HomeSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoginPage({ onLogin, onSignup, onBack, onSocialLogin, loading }) {
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
          <p className="text-gray-400">Sign in to HomeSync</p>
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

          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button onClick={() => onSocialLogin('google')} disabled={loading} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50">
              <Globe className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => onSocialLogin('github')} disabled={loading} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50">
              <Github className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => onSocialLogin('facebook')} disabled={loading} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50">
              <Facebook className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Don't have an account?</p>
          <button onClick={onSignup} className="text-purple-400 hover:text-purple-300 font-bold">Create Account</button>
        </div>
      </div>
    </div>
  );
}

function SignupPage({ onSignup, onLogin, onBack, onSocialLogin, loading }) {
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
          <p className="text-gray-400">Join HomeSync today</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSignup(formData.email, formData.password, formData.name); }} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500" placeholder="John Doe" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500" placeholder="your@email.com" required />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-white placeholder-gray-500" placeholder="••••••••" required />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button onClick={() => onSocialLogin('google')} disabled={loading} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50">
              <Globe className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => onSocialLogin('github')} disabled={loading} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50">
              <Github className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => onSocialLogin('facebook')} disabled={loading} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50">
              <Facebook className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Already have an account?</p>
          <button onClick={onLogin} className="text-purple-400 hover:text-purple-300 font-bold">Sign In</button>
        </div>
      </div>
    </div>
  );
}

function Navigation({ currentPage, onNavigate, onLogout }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notificationSystem.getUnread().length;

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
                <button key={item.id} onClick={() => onNavigate(item.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold ${currentPage === item.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' : 'text-gray-600 hover:bg-gray-100'}`}>
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">{unreadCount}</span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-800">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notificationSystem.notifications.slice(0, 5).map(notif => (
                      <div key={notif.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!notif.read ? 'bg-blue-50' : ''}`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${notif.type === 'success' ? 'bg-green-500' : notif.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 text-sm">{notif.title}</p>
                            <p className="text-xs text-gray-600">{notif.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button onClick={onLogout} className="flex items-center gap-2 px-5 py-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 font-semibold">
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Dashboard({ userData, weather, onNavigate, onLogout }) {
  const [temp, setTemp] = useState(22);
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room AC', status: true, power: 1200, basePower: 1200, icon: Wind },
    { id: 2, name: 'Smart Lights', status: false, power: 0, basePower: 60, icon: Lamp },
    { id: 3, name: 'TV', status: true, power: 150, basePower: 150, icon: Tv },
    { id: 4, name: 'Security System', status: true, power: 25, basePower: 25, icon: Shield }
  ]);

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prevDevices => prevDevices.map(device => iotSimulator.simulateDeviceUpdate({...device})));
      setTemp(prev => iotSimulator.simulateEnvironment(prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (weather) {
      const analytics = analyticsEngine.calculateEnergyUsage(devices);
      const recs = aiRecommendations.generateRecommendations(devices, analytics, weather);
      setRecommendations(recs);
    }
  }, [devices, weather]);

  const toggleDevice = (id, deviceName) => {
    setDevices(devices.map(d => {
      if (d.id === id) {
        const newStatus = !d.status;
        activityTracker.logActivity(newStatus ? 'Device Turned On' : 'Device Turned Off', deviceName);
        notificationSystem.addNotification(`${deviceName} ${newStatus ? 'activated' : 'deactivated'}`, `Power consumption ${newStatus ? 'increased' : 'decreased'}`, 'info');
        return {...d, status: newStatus, power: newStatus ? d.basePower : 0};
      }
      return d;
    }));
  };

  const adjustTemp = (newTemp) => {
    setTemp(newTemp);
    activityTracker.logActivity('Temperature Adjusted', 'Climate Control', { temperature: newTemp });
    notificationSystem.addNotification('Temperature Updated', `Climate control set to ${newTemp}°C`, 'success');
  };

  const analytics = analyticsEngine.calculateEnergyUsage(devices);
  const recentActivities = activityTracker.getRecent(4);

  const rooms = [
    { name: 'Living Room', icon: Home, usage: 245, color: 'from-cyan-400 to-blue-500', trend: '+5%', devices: 8 },
    { name: 'Kitchen', icon: UtensilsCrossed, usage: 187, color: 'from-orange-400 to-red-500', trend: '-2%', devices: 6 },
    { name: 'Bedroom', icon: Bed, usage: 312, color: 'from-pink-400 to-purple-500', trend: '+12%', devices: 7 },
    { name: 'Bathroom', icon: Bath, usage: 145, color: 'from-blue-400 to-cyan-500', trend: '-8%', devices: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Welcome back, {userData?.name}! 👋</h1>
          <p className="text-gray-600 text-lg">Here's what's happening in your home today</p>
        </div>

        {recommendations.length > 0 && (
          <div className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-black text-xl mb-2">💡 AI Recommendation</h3>
                <p className="text-purple-100 mb-3">{recommendations[0].message}</p>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 bg-white text-purple-600 rounded-xl font-bold text-sm hover:shadow-lg transition-all">{recommendations[0].action}</button>
                  <span className="text-sm font-semibold">💰 Potential savings: {recommendations[0].savings}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Active Devices', value: `${analytics.activeDevices}/${analytics.totalDevices}`, icon: Power, color: 'from-green-400 to-emerald-500', change: '+2 today' },
                { label: 'Current Power', value: `${analytics.totalPower}W`, icon: Zap, color: 'from-yellow-400 to-orange-500', change: 'Real-time' },
                { label: 'Daily Usage', value: `${analytics.dailyKwh} kWh`, icon: Activity, color: 'from-blue-400 to-cyan-500', change: 'Estimated' },
                { label: 'Monthly Cost', value: `${analytics.monthlyCost}`, icon: CreditCard, color: 'from-purple-400 to-pink-500', change: 'Projected' }
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

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-800">Room Overview</h2>
                  <p className="text-sm text-gray-600">Real-time consumption by room</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {rooms.map((room, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${room.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                        <room.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 font-semibold">{room.devices} devices</div>
                        <div className={`text-xs font-bold ${room.trend.includes('+') ? 'text-red-500' : 'text-green-500'}`}>{room.trend}</div>
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
                  <button onClick={() => toggleDevice(1, 'Living Room AC')} className={`w-14 h-7 rounded-full relative transition-all duration-300 ${devices[0].status ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${devices[0].status ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-center my-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="50%" cy="50%" r="45%" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <circle cx="50%" cy="50%" r="45%" stroke="url(#tempGradient)" strokeWidth="12" fill="none" strokeDasharray="565" strokeDashoffset={565 - (565 * (temp - 16) / 14)} strokeLinecap="round" className="transition-all duration-700" />
                      <defs>
                        <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{Math.round(temp)}°</div>
                        <div className="text-xs text-gray-500 font-semibold mt-2">Target Temperature</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button onClick={() => adjustTemp(Math.max(16, temp - 1))} className="flex-1 h-14 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 border-2 border-blue-200 group">
                    <span className="text-3xl text-blue-600 font-black group-hover:scale-125 transition-transform">−</span>
                  </button>
                  <button onClick={() => adjustTemp(Math.min(30, temp + 1))} className="flex-1 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
                    <span className="text-3xl text-white font-black group-hover:scale-125 transition-transform">+</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
                  <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Quick Controls
                  </h3>
                  
                  <div className="space-y-3">
                    {devices.slice(1).map((device, idx) => (
                      <div key={device.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${idx === 0 ? 'from-yellow-400 to-orange-500' : idx === 1 ? 'from-blue-400 to-indigo-500' : 'from-green-400 to-emerald-500'} rounded-xl flex items-center justify-center shadow-md`}>
                            <device.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-800">{device.name}</p>
                            <p className="text-xs text-gray-500">{device.power}W</p>
                          </div>
                          <button onClick={() => toggleDevice(device.id, device.name)} className={`w-12 h-6 rounded-full relative transition-all duration-300 ${device.status ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${device.status ? 'right-0.5' : 'left-0.5'}`}></div>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6" />
                    <h3 className="font-bold text-lg">Energy Insights</h3>
                  </div>
                  <p className="text-purple-100 text-sm mb-4">You're using {analytics.totalPower}W right now. Current daily estimate: {analytics.dailyKwh} kWh.</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">Projected Monthly</span>
                      <span className="font-black">${analytics.monthlyCost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
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

            {weather && (
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-sm opacity-90 mb-1">
                        <Calendar className="w-4 h-4" />
                        Live Weather
                      </div>
                      <p className="text-lg font-bold">{weather.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-6xl font-black mb-2">{weather.temp}°C</div>
                      <p className="text-sm opacity-90">Feels like {weather.feelsLike}°C</p>
                    </div>
                    <weather.icon className="w-24 h-24 text-yellow-300" />
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <p className="font-bold mb-1">{weather.condition}</p>
                    <div className="flex items-center justify-between text-xs opacity-90">
                      <span>💧 {weather.humidity}%</span>
                      <span>💨 {weather.windSpeed} km/h</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivities.map((activity, idx) => (
                  <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <div className={`w-10 h-10 ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-blue-500' : 'bg-purple-500'} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.deviceName} • {activity.timeAgo}</p>
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
    { id: 1, name: 'Living Room AC', type: 'Climate', room: 'Living Room', status: true, power: 1200, basePower: 1200, icon: Wind, color: 'from-blue-500 to-cyan-500', battery: null },
    { id: 2, name: 'Kitchen Fridge', type: 'Appliance', room: 'Kitchen', status: true, power: 150, basePower: 150, icon: Activity, color: 'from-green-500 to-emerald-500', battery: null },
    { id: 3, name: 'Bedroom TV', type: 'Entertainment', room: 'Bedroom', status: false, power: 0, basePower: 120, icon: Tv, color: 'from-purple-500 to-pink-500', battery: null },
    { id: 4, name: 'Main WiFi Router', type: 'Network', room: 'Living Room', status: true, power: 12, basePower: 12, icon: Wifi, color: 'from-indigo-500 to-blue-500', battery: null },
    { id: 5, name: 'Smart Lamp', type: 'Lighting', room: 'Bedroom', status: true, power: 15, basePower: 15, icon: Lamp, color: 'from-yellow-500 to-orange-500', battery: 85 },
    { id: 6, name: 'Bathroom Heater', type: 'Climate', room: 'Bathroom', status: false, power: 0, basePower: 800, icon: Thermometer, color: 'from-orange-500 to-red-500', battery: null },
    { id: 7, name: 'Security Camera', type: 'Security', room: 'Garage', status: true, power: 8, basePower: 8, icon: Camera, color: 'from-gray-500 to-slate-600', battery: 92 },
    { id: 8, name: 'Smart Speaker', type: 'Audio', room: 'Living Room', status: true, power: 5, basePower: 5, icon: Speaker, color: 'from-pink-500 to-rose-500', battery: null }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prevDevices => prevDevices.map(device => iotSimulator.simulateDeviceUpdate({...device})));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleDevice = (id) => {
    setDevices(devices.map(d => {
      if (d.id === id) {
        const newStatus = !d.status;
        activityTracker.logActivity(newStatus ? 'Device Activated' : 'Device Deactivated', d.name);
        return {...d, status: newStatus, power: newStatus ? d.basePower : 0};
      }
      return d;
    }));
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Active Devices', value: `${activeDevices}/${devices.length}`, icon: Power, color: 'from-green-400 to-emerald-500' },
            { label: 'Current Power', value: `${Math.round(totalPower)}W`, icon: Zap, color: 'from-yellow-400 to-orange-500' },
            { label: 'Total Rooms', value: userData?.rooms, icon: Home, color: 'from-purple-400 to-pink-500' },
            { label: 'Auto Updates', value: 'On', icon: RefreshCw, color: 'from-blue-400 to-cyan-500' }
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search devices..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800" />
            </div>
            <div className="flex gap-3">
              <select value={filterRoom} onChange={(e) => setFilterRoom(e.target.value)} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800 font-semibold">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDevices.map((device) => (
            <div key={device.id} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${device.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <device.icon className="w-8 h-8 text-white" />
                </div>
                <button onClick={() => toggleDevice(device.id)} className={`w-14 h-7 rounded-full relative transition-all duration-300 ${device.status ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${device.status ? 'right-0.5' : 'left-0.5'}`}></div>
                </button>
              </div>
              
              <h3 className="text-xl font-black text-gray-800 mb-1">{device.name}</h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">{device.type} • {device.room}</p>
              
              {device.battery && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2 font-semibold">
                    <span>Battery</span>
                    <span>{Math.round(device.battery)}%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${device.battery > 50 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-orange-400 to-red-500'}`} style={{ width: `${device.battery}%` }}></div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${device.status ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-sm text-gray-600 font-semibold">{device.status ? 'Active' : 'Inactive'}</span>
                </div>
                <span className="text-lg font-black text-gray-700">{Math.round(device.power)}W</span>
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
  const weeklyData = analyticsEngine.generateWeeklyData();
  const maxUsage = Math.max(...weeklyData.map(d => d.usage));
  const totalWeeklyCost = weeklyData.reduce((sum, d) => sum + parseFloat(d.cost), 0).toFixed(2);
  const avgDailyUsage = (weeklyData.reduce((sum, d) => sum + d.usage, 0) / 7).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="analytics" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Energy Analytics</h1>
          <p className="text-gray-600 text-lg">Comprehensive insights and intelligent forecasting</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Weekly Total', value: `${totalWeeklyCost}`, icon: CreditCard, color: 'from-green-400 to-emerald-500', change: '↓ 5% from last week' },
            { label: 'Avg Daily Usage', value: `${avgDailyUsage} kWh`, icon: Zap, color: 'from-blue-400 to-cyan-500', change: 'Per day average' },
            { label: 'Peak Usage', value: '105 kWh', icon: TrendingUp, color: 'from-orange-400 to-red-500', change: 'Saturday 8PM' },
            { label: 'Cost/kWh', value: '$0.12', icon: BarChart3, color: 'from-purple-400 to-pink-500', change: 'Current rate' }
          ].map((metric, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-600 font-semibold">{metric.label}</span>
              </div>
              <p className="text-4xl font-black text-gray-800 mb-2">{metric.value}</p>
              <p className="text-xs font-semibold text-green-600">{metric.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
                  <div className="w-full bg-gradient-to-t from-purple-600 via-purple-500 to-pink-400 rounded-t-2xl transition-all duration-300 hover:from-purple-700 hover:via-purple-600 hover:to-pink-500 cursor-pointer relative" style={{ height: `${(item.usage / maxUsage) * 100}%` }}>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-bold">
                      {item.usage} kWh<br/>${item.cost}
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-700 mt-3">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
            <h2 className="text-2xl font-black text-gray-800 mb-6">AI Insights</h2>
            <div className="space-y-4">
              {[
                { title: 'Peak Hours', desc: 'Highest usage on weekends 6-9 PM', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
                { title: 'AC Optimization', desc: 'Reduce temperature by 2°C to save 15%', icon: Wind, color: 'from-purple-500 to-pink-500' },
                { title: 'Standby Power', desc: 'Turn off devices to reduce 8% waste', icon: Activity, color: 'from-orange-500 to-red-500' }
              ].map((insight, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${insight.color} rounded-2xl p-4 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <insight.icon className="w-6 h-6" />
                    <h3 className="font-black text-lg">{insight.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{insight.desc}</p>
                </div>
              ))}
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
    setAutomations(automations.map(a => {
      if (a.id === id) {
        const newStatus = !a.active;
        activityTracker.logActivity(newStatus ? 'Automation Enabled' : 'Automation Disabled', a.name);
        notificationSystem.addNotification(`${a.name} ${newStatus ? 'enabled' : 'disabled'}`, `Automation will ${newStatus ? 'now' : 'no longer'} run automatically`, 'info');
        return {...a, active: newStatus};
      }
      return a;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="automation" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Smart Automation</h1>
          <p className="text-gray-600 text-lg">Create intelligent routines that adapt to your lifestyle</p>
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
                  <button onClick={() => toggleAutomation(auto.id)} className={`w-14 h-7 rounded-full relative transition-all duration-300 ${auto.active ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${auto.active ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>

                <div className="space-y-2">
                  {auto.actions.map((action, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">{action}</span>
                    </div>
                  ))}
                </div>
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

  const handleSecurityToggle = (newStatus) => {
    setSecurityStatus(newStatus);
    activityTracker.logActivity(`Security System ${newStatus === 'armed' ? 'Armed' : 'Disarmed'}`, 'Security Hub');
    notificationSystem.addNotification(`Security ${newStatus === 'armed' ? 'Armed' : 'Disarmed'}`, `Your home security system is now ${newStatus}`, newStatus === 'armed' ? 'success' : 'warning');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="security" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Security Center</h1>
          <p className="text-gray-600 text-lg">Monitor and protect your home 24/7</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 text-center">
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl ${securityStatus === 'armed' ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-orange-400 to-red-500'}`}>
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">System {securityStatus === 'armed' ? 'Armed' : 'Disarmed'}</h2>
          <p className="text-gray-600 mb-6">All zones are secure</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => handleSecurityToggle('armed')} className="px-8 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-bold">
              Arm System
            </button>
            <button onClick={() => handleSecurityToggle('disarmed')} className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl transition-all duration-300 font-bold">
              Disarm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsPage({ userData, setUserData, onNavigate, onLogout }) {
  const [settings, setSettings] = useState({
    notifications: true,
    autoMode: false,
    voiceControl: true
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: userData?.name || '',
    email: userData?.email || ''
  });

  const handleSaveProfile = () => {
    setUserData({
      ...userData,
      name: formData.name,
      email: formData.email,
      avatar: formData.name.split(' ').map(n => n[0]).join('').toUpperCase()
    });
    setEditMode(false);
    notificationSystem.addNotification('Profile Updated', 'Your profile information has been saved successfully', 'success');
    activityTracker.logActivity('Profile Updated', 'Settings');
  };

  const toggleSetting = (key) => {
    setSettings({...settings, [key]: !settings[key]});
    notificationSystem.addNotification('Settings Updated', `${key} has been ${!settings[key] ? 'enabled' : 'disabled'}`, 'info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navigation currentPage="settings" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="max-w-[1400px] mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600 text-lg">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl ring-4 ring-white text-white text-4xl font-black">
                {userData?.avatar}
              </div>
              
              {editMode ? (
                <div className="space-y-3 mb-4">
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-center font-bold" placeholder="Full Name" />
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-center" placeholder="Email" />
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-gray-800 mb-1">{userData?.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{userData?.email}</p>
                </>
              )}
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-6">
                <CheckCircle className="w-4 h-4" />
                {userData?.plan} Member
              </div>
              
              {editMode ? (
                <div className="flex gap-2">
                  <button onClick={handleSaveProfile} className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-bold">
                    Save
                  </button>
                  <button onClick={() => setEditMode(false)} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition-all duration-300 font-bold">
                    Cancel
                  </button>
                </div>
              ) : (
                <button onClick={() => setEditMode(true)} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-bold">
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-gray-800 mb-4">Preferences</h2>
              <div className="space-y-4">
                {[
                  { key: 'notifications', icon: Bell, label: 'Push Notifications', desc: 'Receive alerts and updates' },
                  { key: 'autoMode', icon: Activity, label: 'Auto Mode', desc: 'Automatic device optimization' },
                  { key: 'voiceControl', icon: Speaker, label: 'Voice Control', desc: 'Enable voice commands' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-gray-600" />
                      <div>
                        <p className="font-bold text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <button onClick={() => toggleSetting(item.key)} className={`w-14 h-7 rounded-full relative transition-all duration-300 ${settings[item.key] ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-300'}`}>
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all duration-300 shadow-md ${settings[item.key] ? 'right-0.5' : 'left-0.5'}`}></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <h2 className="text-2xl font-black text-gray-800 mb-4">Account Information</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-bold text-gray-800">Member Since</p>
                    <p className="text-sm text-gray-600">{userData?.joinedDate}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-bold text-gray-800">Account Type</p>
                    <p className="text-sm text-gray-600">{userData?.plan} Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "@/layouts/Root";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const AuthButtons = ({ mobile = false, onClose = () => {} }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  if (isAuthenticated) {
    return (
      <Button 
        onClick={handleLogout}
        size="sm" 
        variant="outline"
        className={`flex items-center ${mobile ? 'w-full justify-center' : ''}`}
      >
        <ApperIcon name="LogOut" className="w-4 h-4 mr-2" />
        Logout
      </Button>
    );
  }

  return (
    <div className={`flex ${mobile ? 'flex-col w-full' : ''} gap-2`}>
      <Link to="/login" onClick={onClose}>
        <Button size="sm" variant="outline" className={mobile ? 'w-full' : ''}>
          Login
        </Button>
      </Link>
      <Link to="/signup" onClick={onClose}>
        <Button size="sm" className={mobile ? 'w-full' : ''}>
          Sign Up
        </Button>
      </Link>
    </div>
  );
};
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Equipment", path: "/equipment" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name="Factory" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Industrial Hub</h1>
              <p className="text-xs text-gray-500">Manufacturing Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
{/* CTA Button and Auth */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button size="sm" className="flex items-center">
                <ApperIcon name="Phone" className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </Link>
            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ApperIcon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
<div className="px-3 pt-4 space-y-3">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full flex items-center justify-center">
                  <ApperIcon name="Phone" className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </Link>
              <AuthButtons mobile onClose={() => setIsMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
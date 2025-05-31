import api from "@/utils/api";
import axios from "axios";
import { VITE_REST_API_URL } from "@/utils/config";

interface RegisterRequest {
  email: string;
  password: string;
  fullName?: string;
  phoneNumber?: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
}

interface AuthResponse {
  token: string;
  user: UserProfile;
}

// Create authentication service
const AuthService = {
  // Register a new user
  register: async (userData: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', userData);
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response.data;
  },
  
  // Login user
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response.data;
  },
  
  // Login with Google
  loginWithGoogle: () => {
    window.location.href = `${VITE_REST_API_URL}/auth/google`;
  },
  
  // Get the current user profile
  getProfile: async (): Promise<UserProfile> => {
    const response = await api.get('/auth/profile');
    return response.data.user;
  },
  
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  },
  
  // Logout user
  logout: (): void => {
    localStorage.removeItem('token');
    // Optionally redirect to login page
    // window.location.href = '/login';
  },
  
  // Get the current authentication token
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },
  
  // Check authentication status
  checkAuthStatus: async (): Promise<boolean> => {
    try {
      await api.get('/auth/profile');
      return true;
    } catch (error) {
      // If there's an error, user is not authenticated
      localStorage.removeItem('token');
      return false;
    }
  }
};

export default AuthService;

// Utility functions for auth state management
export const getCurrentUser = (): UserProfile | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch (e) {
    localStorage.removeItem('user');
    return null;
  }
};

export const saveUserToStorage = (user: UserProfile): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

// Handle Google OAuth callback
export const handleOAuthCallback = async (): Promise<UserProfile | null> => {
  // This would be called on your OAuth callback page
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  
  if (!code) return null;
  
  try {
    // Exchange code for token (if your backend handles this, you may not need this step)
    const response = await axios.get(`${VITE_REST_API_URL}/google/callback?code=${code}`, {
      withCredentials: true
    });
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      
      if (response.data.user) {
        saveUserToStorage(response.data.user);
        return response.data.user;
      }
    }
    
    return null;
  } catch (error) {
    console.error('OAuth callback error:', error);
    return null;
  }
};
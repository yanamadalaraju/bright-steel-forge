// frontend/src/lib/api.ts
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Health & Status
  HEALTH: '/api/health',
  DB_STATUS: '/api/db-status',
  
  // Contact
  CONTACT: '/api/contact',
  
  // Admin
  ADMIN_LOGIN: '/api/admin/login',
  ADMIN_SUBMISSIONS: '/api/admin/submissions',
  ADMIN_SUBMISSION: (id: number) => `/api/admin/submissions/${id}`,
  ADMIN_SUBMISSION_STATUS: (id: number) => `/api/admin/submissions/${id}/status`,
};

export const getApiUrl = (endpoint: string) => {
  return `${API_BASE_URL}${endpoint}`;
};

export const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
  return {
    'Authorization': token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
};
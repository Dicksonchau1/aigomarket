import { getAccessToken } from './supabase';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiCall(endpoint, options = {}) {
  const token = await getAccessToken();

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  });

  return response.json();
}

export const marketplace = {
  list: () => apiCall('/api/marketplace'),
};

export const diagnostics = {
  run: () => apiCall('/api/diagnostics'),
};
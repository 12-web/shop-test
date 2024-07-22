import { Product } from '@/interfaces/common';
import { ApiClient } from './api-client';

const apiClient = new ApiClient().instance;

export const getProducts = async (): Promise<Product[]> => apiClient.get('data.json');

export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    message?: string;
    token: string;
  }
  
  export interface SelectProductRequest {
    productId: number;
  }
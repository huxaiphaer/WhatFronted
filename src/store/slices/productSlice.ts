import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

interface ProductState {
  products: Product[];
  searchTerm: string;
  userEmail: string | null;
}

const initialState: ProductState = {
  products: [],
  searchTerm: '',
  userEmail: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string | null>) => {
      state.userEmail = action.payload;
    },
    selectProduct: (state, action: PayloadAction<number>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.selected = true;
      }
    },
  },
});

export const { setProducts, setSearchTerm, setUserEmail, selectProduct } = productSlice.actions;
export default productSlice.reducer;

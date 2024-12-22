"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserEmail } from "@/store/slices/productSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import apiClient from "@/lib/axios";
import { toast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiClient.post("/auth/login/", { email, password });
      if (response.data.access) {
        dispatch(setUserEmail(email));
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("userEmail", email);
        toast({
          title: "Success",
          description: "Login successful! Welcome back.",
          duration: 5000,
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <Card className="w-full max-w-md mx-auto my-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative w-full">
              <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
                  disabled={loading}
              >
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70">
                      <div className="loader border-t-2 border-white rounded-full w-6 h-6 animate-spin"></div>
                    </div>
                )}
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
  );
};

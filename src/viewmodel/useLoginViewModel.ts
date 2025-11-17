import { useState } from "react";
import User from "../model/entities/User";
import AuthService from "../model/services/AuthService";

type loginState = {
  userId: string | null;
  loading: boolean;
  error: string | null;
};

type loginAction = {
  handleLogin: (email: string, password: string) => Promise<void>;
};

export function useLoginViewModel(): loginState & loginAction {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const service = new AuthService();

  async function handleLogin(email : string, password : string) {
    try {
        setLoading(true);
        setError(null);
        const user : User = await service.login(email, password);
        setUserId(user.Id);
    } catch (error : any) {
        setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return {
    userId, loading, error, handleLogin
  }
}

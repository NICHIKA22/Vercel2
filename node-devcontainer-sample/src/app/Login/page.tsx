"use client";

import React, { useState } from 'react';
//import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
//import { userNameAtom } from '../atom/userAtom';

// MUI コンポーネントのインポート
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from '@mui/material';

export default function Login() {
  //const [_, setUserName] = useAtom(userNameAtom);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!inputValue.trim()) {
      setError('ユーザー名を入力してください。');
      return;
    }
    setError('');
    //setUserName(inputValue.trim());
    router.push('/Home');
  };

  return (
    <Box
      // 背景の青系グラデーション設定
      sx={{
        background: 'linear-gradient(to right, #2196f3, #3f51b5)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth: '90%',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', fontWeight: 'bold', color: 'gray' }}
          >
            Welcome to Jotai App
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="ユーザー名"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              fontWeight: 'bold',
            }}
          >
            ログイン
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

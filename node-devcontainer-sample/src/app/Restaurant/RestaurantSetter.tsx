'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { restaurantAtom } from './restaurantAtom'; // 正しいアトムをインポート

interface Restaurant {
  Name: string;
  PK: number;
  CreatedOn: string;
  UpdatedOn: string;
}

export function RestaurantSetter({ restaurants }: { restaurants: Restaurant[] }) {
  const [, setRestaurants] = useAtom(restaurantAtom); // restaurantAtomを使用

  useEffect(() => {
    setRestaurants(restaurants); // Restaurant[]型のデータを設定
  }, [restaurants, setRestaurants]);

  return null;
}

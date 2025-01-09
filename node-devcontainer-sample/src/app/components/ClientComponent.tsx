"use client";

import React, { useContext } from "react";
import { userNameAtom } from "../atom/userAtom";
import { useAtom } from "jotai";
import { HobbyContext } from "@/context/HobbyContext";
import { DataGrid, GridColDef } from "@mui/x-data-grid"; // DataGridとGridColDefをインポート

interface Restaurant {
  Name: string;
  PK: number;
  CreatedOn: string;
  UpdatedOn: string;
  DeletedOn: string | null;
  CreatedByName: string;
  CreatedByID: string;
  UpdatedByName: string;
  UpdatedByID: string;
  DeletedByName: string | null;
  DeletedByID: string | null;
}

export default function ClientComponent({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  const [userName] = useAtom(userNameAtom);
  const { hobby } = useContext(HobbyContext);

  // DataGridのカラム定義（型を指定）
  const columns: GridColDef[] = [
    { field: "PK", headerName: "PK", width: 100 },
    { field: "Name", headerName: "Name", width: 200 },
    { field: "CreatedOn", headerName: "Created Date", width: 150 },
    { field: "CreatedByName", headerName: "Created By", width: 200 },
  ];

  // DataGridの行データを作成
  const rows = restaurants.map((restaurant, index) => ({
    id: index,
    PK: restaurant.PK,
    Name: restaurant.Name,
    CreatedOn: restaurant.CreatedOn,
    CreatedByName: restaurant.CreatedByName,
  }));

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      {/* ヘッダー部分 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ margin: 0 }}>Restaurant List</h2>
        <div>
          {/* ユーザー名表示 */}
          {userName && (
            <div style={{ fontSize: "14px", color: "#555" }}>
              Logged in as: <span style={{ fontWeight: "bold" }}>{userName}</span>
            </div>
          )}
          {/* Hobbyの表示 */}
          {hobby && (
            <div
              style={{
                fontSize: "14px",
                color: "#555",
                marginTop: "8px",
              }}
            >
              Hobby: <span style={{ fontWeight: "bold" }}>{hobby}</span>
            </div>
          )}
        </div>
      </div>

      {/* レストラン一覧 */}
      {restaurants.length > 0 ? (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5]}
          />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

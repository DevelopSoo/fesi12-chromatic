// src/app/page.tsx

"use client";

import { Button } from "@/stories/Button";

export default function Home() {
  return (
    <>
      <Button
        label="스토리북 버튼"
        size="large"
        onClick={() => {
          alert("버튼 클릭");
        }}
      />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";

const OnboardingModal = dynamic(() => import("@/components/OnboardingModal"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      메인 화면
      <OnboardingModal />
    </div>
  );
}

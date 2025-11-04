"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const modalInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalInputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <input autoFocus type="text" className="border-2 border-gray-300" />
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        모달 열기
      </button>
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black"
        >
          <div className="rounded bg-white p-6 shadow-lg">
            <h2 id="modal-title" className="text-xl font-bold">
              모달 제목
            </h2>
            <p>모달 내용입니다.</p>
            <input
              ref={modalInputRef}
              type="text"
              className="border-2 border-gray-300"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

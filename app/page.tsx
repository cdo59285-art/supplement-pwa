"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Supplement PWA
      </h1>

      <button
        className="bg-white text-black px-6 py-3 rounded-xl"
        onClick={() => {
          alert("提醒测试成功")
        }}
      >
        测试提醒
      </button>
    </main>
  )
}
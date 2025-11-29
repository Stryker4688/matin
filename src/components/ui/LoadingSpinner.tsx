export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center shadow-luxury mx-auto mb-4 animate-pulse">
          <span className="text-black font-bold text-2xl">MS</span>
        </div>
        <h2 className="text-white text-xl font-bold">شرکت مستر شایان</h2>
        <p className="text-gray-400 mt-2">در حال بارگذاری...</p>
      </div>
    </div>
  );
}

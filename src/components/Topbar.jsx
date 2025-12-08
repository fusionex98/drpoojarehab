'use client';

export default function TopBar() {
  return (
    <div className="bg-white border-b-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 text-sm py-2 sm:py-3">
          <div className="text-gray-700 text-xs sm:text-sm">
            <span className="block sm:inline">We are here to help you! Call us at</span>{' '}
            <a
              href="tel:09870082657"
              className="font-semibold text-primary underline ml-0 sm:ml-2 whitespace-nowrap"
            >
              +91 98700 82657
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:09870082657"
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md"
              role="button"
              aria-label="Request a call"
            >
              CHAT ON WhatsApp
            </a>

            <a
              href="tel:+919870082657"
              className="sm:hidden inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1.5 rounded-md"
              aria-label="Call now"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import { WHATSAPP_URL } from "./constants";

export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full" />
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.696 4.604 1.893 6.475L4 29l7.74-1.85A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.6c-1.86 0-3.591-.51-5.079-1.39l-.364-.215-4.595 1.097 1.122-4.475-.236-.376A9.575 9.575 0 0 1 6.4 15c0-5.302 4.299-9.6 9.601-9.6 5.303 0 9.6 4.298 9.6 9.6 0 5.303-4.297 9.6-9.6 9.6Zm5.275-7.187c-.289-.144-1.71-.844-1.974-.94-.265-.097-.458-.144-.65.144-.193.289-.747.94-.916 1.133-.169.193-.337.217-.626.072-.289-.144-1.221-.45-2.327-1.434-.86-.767-1.44-1.715-1.61-2.004-.168-.289-.018-.445.127-.589.131-.13.289-.337.434-.506.144-.169.193-.289.289-.482.097-.193.048-.361-.024-.506-.072-.144-.65-1.564-.89-2.143-.234-.561-.474-.485-.65-.494l-.554-.01a1.063 1.063 0 0 0-.77.361c-.265.289-1.012.989-1.012 2.41 0 1.422 1.036 2.795 1.18 2.988.144.193 2.04 3.115 4.94 4.367.69.298 1.228.476 1.648.61.692.22 1.322.189 1.82.115.555-.083 1.71-.698 1.951-1.373.241-.674.241-1.252.169-1.373-.072-.121-.265-.193-.554-.337Z" />
      </svg>
      <span className="hidden sm:inline">Chat With Us</span>
    </a>
  );
}

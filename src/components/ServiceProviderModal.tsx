'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ServiceProviderModalProps = {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export default function ServiceProviderModal({ open, onClose }: ServiceProviderModalProps) {
  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-[#130824] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh]">
        <div className="grid md:grid-cols-2">
          <div
            className="min-h-[260px] bg-center bg-cover"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(14,3,28,0.7), rgba(14,3,28,0.4)), url('/sections/service-provider.jpg')",
            }}
          />
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-orange-400 text-sm font-semibold mb-2">Service Providers</p>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Built for the people who power every event.
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-white transition"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5">
              The Service Provider experience is on the way. We’re crafting tools for DJs, photographers,
              caterers, decorators, and security teams to showcase services, manage inquiries, and get hired
              faster with verified reviews and smart matching.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Want early access? Join the waitlist and we’ll notify you when provider profiles and booking
              tools go live.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">Join Provider Waitlist</button>
              <button className="btn-secondary" onClick={onClose} type="button">
                Noted
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

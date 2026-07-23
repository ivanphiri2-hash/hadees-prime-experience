import { useState } from 'react'
import { CreditCard, Smartphone, QrCode, CheckCircle2, XCircle, AlertCircle, Mail, FileText, Lock } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustBadges from '../components/TrustBadges'

export default function Payments() {
  const [status, setStatus] = useState<'idle' | 'success' | 'cancelled' | 'failed'>('idle')

  return (
    <>
      <SEO
        title="Payments | Hadees Trading"
        description="Secure online payments via PayFast. Accept Visa, Mastercard, Instant EFT, Capitec Pay, and Scan to Pay."
        canonical="https://hadeestrading.co.za/payments"
      />
      <PageHero
        title="Payments"
        subtitle="Secure checkout powered by PayFast. Pay for your services with confidence."
        breadcrumb="Home / Payments"
      />

      <section className="section-padding pt-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {status === 'idle' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Payment Methods */}
              <div className="space-y-6">
                <div className="card-glass">
                  <h2 className="font-display text-xl font-bold mb-4">Payment Methods</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Visa', icon: CreditCard, gradient: 'from-blue-600 to-blue-800' },
                      { name: 'Mastercard', icon: CreditCard, gradient: 'from-orange-500 to-red-600' },
                      { name: 'Instant EFT', icon: Smartphone, gradient: 'from-green-500 to-emerald-600' },
                      { name: 'Capitec Pay', icon: Smartphone, gradient: 'from-amber-500 to-yellow-600' },
                      { name: 'Scan to Pay', icon: QrCode, gradient: 'from-violet-500 to-purple-600' },
                      { name: 'PayFast', icon: Lock, gradient: 'from-teal-500 to-cyan-600' },
                    ].map((m) => (
                      <div key={m.name} className="glass rounded-xl p-4 flex flex-col items-center gap-2 glass-hover">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${m.gradient}`}>
                          <m.icon size={20} className="text-white" />
                        </div>
                        <span className="text-xs font-medium text-white/70">{m.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-glass">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock size={18} className="text-gold-400" />
                    <h3 className="font-semibold">Secure Checkout</h3>
                  </div>
                  <p className="text-sm text-white/50">
                    All payments are processed securely through PayFast. Your card details are encrypted and never stored on our servers.
                  </p>
                </div>

                {/* Payment Status Previews */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button onClick={() => setStatus('success')} className="glass rounded-xl p-4 glass-hover text-center">
                    <CheckCircle2 size={24} className="mx-auto text-green-400" />
                    <p className="mt-2 text-xs text-white/60">Payment Success Preview</p>
                  </button>
                  <button onClick={() => setStatus('cancelled')} className="glass rounded-xl p-4 glass-hover text-center">
                    <XCircle size={24} className="mx-auto text-orange-400" />
                    <p className="mt-2 text-xs text-white/60">Payment Cancelled Preview</p>
                  </button>
                  <button onClick={() => setStatus('failed')} className="glass rounded-xl p-4 glass-hover text-center">
                    <AlertCircle size={24} className="mx-auto text-red-400" />
                    <p className="mt-2 text-xs text-white/60">Payment Failed Preview</p>
                  </button>
                </div>
              </div>

              {/* Order Summary + Invoice */}
              <div className="space-y-6">
                <div className="card-glass">
                  <h2 className="font-display text-xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Service</span>
                      <span className="text-white/80">Business Website Package</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Delivery Time</span>
                      <span className="text-white/80">4–7 Days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Subtotal</span>
                      <span className="text-white/80">R5,999.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">VAT (15%)</span>
                      <span className="text-white/80">R899.85</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold gold-text text-lg">R6,898.85</span>
                    </div>
                  </div>
                  <button className="gold-btn w-full mt-6 inline-flex items-center justify-center gap-2">
                    <Lock size={16} /> Proceed to PayFast Checkout
                  </button>
                  <p className="mt-3 text-xs text-white/40 text-center">
                    You will be redirected to PayFast's secure payment page.
                  </p>
                </div>

                <div className="card-glass">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={18} className="text-gold-400" />
                    <h3 className="font-semibold">Invoice Preview</h3>
                  </div>
                  <div className="space-y-2 text-sm text-white/50">
                    <div className="flex justify-between"><span>Invoice #</span><span>HT-2025-0001</span></div>
                    <div className="flex justify-between"><span>Date</span><span>{new Date().toLocaleDateString()}</span></div>
                    <div className="flex justify-between"><span>Due Date</span><span>Upon Receipt</span></div>
                    <div className="flex justify-between"><span>Status</span><span className="text-gold-400">Pending</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payment Success */}
          {status === 'success' && (
            <div className="max-w-lg mx-auto text-center card-glass">
              <CheckCircle2 size={64} className="mx-auto text-green-400" />
              <h2 className="mt-4 font-display text-2xl font-bold">Payment Successful</h2>
              <p className="mt-2 text-white/60">Thank you for your payment. Your transaction has been completed successfully.</p>
              <div className="mt-6 glass rounded-xl p-4 text-left space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/50">Transaction ID</span><span className="text-white/80">PF-001-2025</span></div>
                <div className="flex justify-between"><span className="text-white/50">Amount</span><span className="text-white/80">R6,898.85</span></div>
                <div className="flex justify-between"><span className="text-white/50">Date</span><span className="text-white/80">{new Date().toLocaleDateString()}</span></div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/50">
                <Mail size={16} /> A receipt has been sent to your email.
              </div>
              <button onClick={() => setStatus('idle')} className="outline-btn mt-6">Back to Payments</button>
            </div>
          )}

          {/* Payment Cancelled */}
          {status === 'cancelled' && (
            <div className="max-w-lg mx-auto text-center card-glass">
              <XCircle size={64} className="mx-auto text-orange-400" />
              <h2 className="mt-4 font-display text-2xl font-bold">Payment Cancelled</h2>
              <p className="mt-2 text-white/60">Your payment was cancelled. No charges have been made.</p>
              <button onClick={() => setStatus('idle')} className="gold-btn mt-6">Try Again</button>
            </div>
          )}

          {/* Payment Failed */}
          {status === 'failed' && (
            <div className="max-w-lg mx-auto text-center card-glass">
              <AlertCircle size={64} className="mx-auto text-red-400" />
              <h2 className="mt-4 font-display text-2xl font-bold">Payment Failed</h2>
              <p className="mt-2 text-white/60">Your payment could not be processed. Please try again or contact support.</p>
              <button onClick={() => setStatus('idle')} className="gold-btn mt-6">Try Again</button>
            </div>
          )}

          <div className="mt-12">
            <TrustBadges variant="grid" />
          </div>
        </div>
      </section>
    </>
  )
}

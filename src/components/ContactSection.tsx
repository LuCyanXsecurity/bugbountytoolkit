import { useState } from 'react';
import { Send, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setFormState({
      email: '',
      message: '',
      submitted: true,
      loading: false
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setFormState(prev => ({ ...prev, submitted: false }));
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(34, 211, 238, 0.08)', border: '1px solid rgba(34, 211, 238, 0.15)' }}>
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs text-cyan-400 font-medium">Get in Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="gradient-text-cyan">Me</span>
          </h2>
          <p className="section-subtitle">
            Have questions, suggestions, or just want to connect? Feel free to reach out. I'm always open to discussions about security, bug bounty, or collaborations.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl p-8" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            {formState.submitted ? (
              <div className="text-center py-8 animate-scale-in">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                  <CheckCircle className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-500 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-600 w-4 h-4" />
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      placeholder="youremail@example.com"
                      className="input-search pl-11"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="input-search resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.loading}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${formState.loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {formState.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-zinc-600 text-xs mb-4">Or connect with me directly</p>
            <div className="flex justify-center gap-3">
              <a
                href="mailto:lucyanxsecurity@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white transition-all duration-200"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
              <a
                href="https://twitter.com/LuCyanXsecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white transition-all duration-200"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
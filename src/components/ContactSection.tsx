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

    try {
      const response = await fetch('https://formspree.io/f/mwvlvgjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formState.email,
          message: formState.message
        })
      });

      if (response.ok) {
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
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormState({ ...formState, loading: false });
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Get in Touch</span>
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
          <div className="glass rounded-2xl p-8 glow-red-hover">
            {formState.submitted ? (
              <div className="text-center py-8 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      placeholder="youremail@example.com"
                      className="input-search pl-12"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Or connect with me directly</p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:lucyanxsec@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://twitter.com/LuCyanXsecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
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
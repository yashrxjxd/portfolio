import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { portfolioApi } from "../services/api";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactInfo = ({ icon, label, value, href, isClickable = false }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-lg border border-zinc-700 hover:border-green-500/50 transition-all duration-300 group">
      <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
        <div className="text-green-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        {isClickable ? (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-green-500 transition-colors duration-300"
          >
            {value}
          </a>
        ) : (
          <p className="text-white font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = ({ data }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Use data prop if available, otherwise use fallback
  const personal = data?.personal || {
    email: "zyashraj4@gmail.com",
    phone: "+91 9979204955"
  };
  const social = data?.social || {
    github: "https://github.com/zala-yashraj",
    linkedin: "https://linkedin.com/in/zala-yashraj",
    email: "zyashraj4@gmail.com"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await portfolioApi.submitContactForm(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent Successfully!",
          description: response.message || "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(response.error || "Failed to send message");
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      isClickable: true
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      isClickable: true
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ahmedabad, India",
      href: null,
      isClickable: false
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: social.github,
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: social.linkedin,
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: `mailto:${personal.email}`,
      color: "hover:text-green-400"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on innovative AI/ML projects? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-in slide-in-from-left-4 duration-1000 delay-300">
              <h3 className="text-2xl font-bold mb-8 text-green-500">Get In Touch</h3>
              
              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <ContactInfo
                    key={index}
                    icon={method.icon}
                    label={method.label}
                    value={method.value}
                    href={method.href}
                    isClickable={method.isClickable}
                  />
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-green-500 mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-zinc-800/50 border border-zinc-700 rounded-lg text-gray-400 ${social.color} hover:border-green-500/50 hover:scale-110 transition-all duration-300`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-6 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 font-semibold">Available for Opportunities</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Currently seeking internships, research opportunities, and exciting AI/ML projects. 
                  Open to collaborations and discussions about innovative technology solutions.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in slide-in-from-right-4 duration-1000 delay-500">
              <Card className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-500 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Send a Message
                  </CardTitle>
                  <p className="text-gray-400">
                    Have a project in mind? Let's discuss the possibilities.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-600 text-white focus:border-green-500 focus:ring-green-500"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-600 text-white focus:border-green-500 focus:ring-green-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-zinc-900 border-zinc-600 text-white focus:border-green-500 focus:ring-green-500"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-zinc-900 border-zinc-600 text-white focus:border-green-500 focus:ring-green-500 min-h-[120px]"
                        placeholder="Tell me about your project or opportunity..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white border-0 font-medium transition-all duration-300 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-zinc-700 text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <p className="text-gray-400 mb-4">
              © 2025 Zala Yashraj. Built with passion for AI and innovation.
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
              <span>Powered by</span>
              <span className="text-green-500 font-medium">React</span>
              <span>•</span>
              <span className="text-green-500 font-medium">FastAPI</span>
              <span>•</span>
              <span className="text-green-500 font-medium">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
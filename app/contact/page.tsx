"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Send, Mail, MessageCircle, Sparkles } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
              <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{
                  x: Math.random() * 1200,
                  y: Math.random() * 800,
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * 800],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-12 h-12 mx-auto text-yellow-300" />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  Let's Connect
                </span>
              </h1>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We're here to bring your vision to life
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a href="tel:+96594701850">
                  <Button size="lg" variant="secondary" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg"
                  onClick={() => {
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Contact Info Cards with Beautiful Animations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Get In Touch
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-200 transition-all duration-300 h-full group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Phone className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-4 text-gray-800">Phone</h3>
                    <a href="tel:+96594701850" className="block text-gray-600 hover:text-blue-600 transition-colors text-lg mb-2 font-medium">
                      +965 94701850
                    </a>
                    <a href="tel:+96598732371" className="block text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium">
                      +965 98732371
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <a
                  href="https://maps.app.goo.gl/Vu5kBqgxu5Uxgnb3A?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="relative overflow-hidden border-2 border-transparent hover:border-purple-200 transition-all duration-300 h-full group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 text-center relative z-10">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MapPin className="h-10 w-10 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-xl mb-4 text-gray-800">Address</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Benid Al-Gar, Block 1<br />
                        AL Manar Complex, Villa 3
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="relative overflow-hidden border-2 border-transparent hover:border-orange-200 transition-all duration-300 h-full group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Clock className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-4 text-gray-800">Opening Hours</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      8:00 AM – 4:00 PM<br />
                      Daily
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form Section */}
            <div id="contact-form" className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 md:p-10 rounded-2xl shadow-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Send Us a Message
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Fill out the form below and we'll get back to you shortly
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-base font-semibold mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          className={`w-full h-14 text-base transition-all duration-300 ${
                            focusedField === 'name' ? 'ring-2 ring-blue-500 border-transparent' : ''
                          }`}
                        />
                        {focusedField === 'name' && (
                          <motion.div
                            className="absolute inset-0 rounded-md border-2 border-blue-500 pointer-events-none"
                            layoutId="input-focus"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Email and Phone Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-base font-semibold mb-2 text-gray-700">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="john@example.com"
                            className={`h-14 text-base transition-all duration-300 ${
                              focusedField === 'email' ? 'ring-2 ring-blue-500 border-transparent' : ''
                            }`}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="phone" className="block text-base font-semibold mb-2 text-gray-700">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="+965 1234 5678"
                            className={`h-14 text-base transition-all duration-300 ${
                              focusedField === 'phone' ? 'ring-2 ring-blue-500 border-transparent' : ''
                            }`}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Subject Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="subject" className="block text-base font-semibold mb-2 text-gray-700">
                        Subject *
                      </label>
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="How can we help you?"
                          className={`w-full h-14 text-base transition-all duration-300 ${
                            focusedField === 'subject' ? 'ring-2 ring-blue-500 border-transparent' : ''
                          }`}
                        />
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="message" className="block text-base font-semibold mb-2 text-gray-700">
                        Message *
                      </label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your project..."
                          rows={6}
                          className={`w-full text-base resize-none transition-all duration-300 ${
                            focusedField === 'message' ? 'ring-2 ring-blue-500 border-transparent' : ''
                          }`}
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
                        >
                          <Send className="w-5 h-5" />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </div>
              </motion.div>

              {/* Info Sidebar */}
              <motion.div
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Location Image */}
                <a 
                  href="https://maps.app.goo.gl/Vu5kBqgxu5Uxgnb3A?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                >
                  <img
                    src="/modern-office-building-contact-location-map-view.jpg"
                    alt="Office Location"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                      <p className="text-white/90">We'd love to meet you in person</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </a>

                {/* Quick Contact Info */}
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Call Us</p>
                        <a href="tel:+96594701850" className="hover:underline block">+965 94701850</a>
                        <a href="tel:+96598732371" className="hover:underline block">+965 98732371</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Visit Us</p>
                        <a 
                          href="https://maps.app.goo.gl/Vu5kBqgxu5Uxgnb3A?g_st=iw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 hover:text-white hover:underline transition-colors"
                        >
                          Benid Al-Gar, Block 1<br />AL Manar Complex, Villa 3
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Working Hours</p>
                        <p className="text-white/90">8:00 AM – 4:00 PM<br />Daily</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

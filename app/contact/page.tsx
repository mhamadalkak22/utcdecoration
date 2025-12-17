"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
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

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-96 flex items-center justify-center overflow-hidden pt-16 sm:pt-24 lg:pt-28">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
            }}
          >
            <img
              src="/contact-us-customer-service-professional-office.jpg"
              alt="Contact Us"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">Get in touch with our team</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">Phone</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">+965 1234 5678</p>
                  <p className="text-gray-600 text-xs sm:text-sm">+965 8765 4321</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">Email</h3>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">info@techsolutions.com</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">support@techsolutions.com</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">Address</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Kuwait City</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Kuwait</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">Working Hours</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Sun - Thu: 8AM - 5PM</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Fri - Sat: Closed</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-balance">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  Have a question or need more information about our services? Fill out the form and our team will get
                  back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-11 sm:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-11 sm:h-12 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm sm:text-base font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+965 1234 5678"
                        className="h-11 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm sm:text-base font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full h-11 sm:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project..."
                      rows={6}
                      className="w-full text-sm sm:text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="relative h-80 sm:h-96 lg:h-full lg:min-h-[500px] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-office-building-contact-location-map-view.jpg"
                  alt="Office Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

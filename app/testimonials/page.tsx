import PageHeader from "@/components/page-header"
import RainAnimation from "@/components/rain-animation"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Jane",
      text: "Thank you for the great job you did on my windows and guttering, highly recommend...",
    },
    {
      id: 2,
      name: "Amy",
      text: "Left windows looking really clean and they are now gleaming on both my Salon and house. Would definitely recommend. Fair price and hard-working traditional window cleaner. Thank you!",
    },
    {
      id: 3,
      name: "Rachel",
      text: "Laurence has been cleaning our windows, frames, and gutters for quite some time and he really does take the time to make sure they are perfectly cleaned in the traditional way. He takes pride in his work and it really shows in the results. Thank you, Laurence, for a fantastic reliable service. I highly recommend!!",
    },
    {
      id: 4,
      name: "Mark",
      text: "Excellent service, very professional and thorough. My windows have never looked so clean! Will definitely be using Reflect again.",
    },
    {
      id: 5,
      name: "Sarah",
      text: "I've been using Reflect for over a year now and they never disappoint. Reliable, friendly service and great attention to detail. Highly recommended!",
    },
    {
      id: 6,
      name: "David",
      text: "Fantastic job on our gutters. They were completely blocked and now they're like new. Very reasonable price too. Will definitely use again.",
    },
  ]

  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader title="Testimonials" subtitle="What our customers say about our services" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We're proud of the service we provide and the feedback we receive from our satisfied customers.
            </p>
            <div className="w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 rounded-lg bg-blue-50 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


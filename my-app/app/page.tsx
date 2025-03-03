import { AnimatedHeader } from "@/components/animated-header"
import { PackageCard } from "@/components/package-card"
import { Footer } from "@/components/footer"

export default function Home() {
  const packages = [
    {
      id: "7-day-economy",
      title: "7 Days Economy Umrah Package",
      price: "BDT 210,000",
      duration: "7 Days",
      description: "Perfect for those seeking a brief but fulfilling spiritual journey.",
      features: [
        "3★ Hotel in Makkah (3 nights)",
        "3★ Hotel in Madinah (2 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Guided Ziyarah Tours",
        "Daily Breakfast",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      id: "10-day-standard",
      title: "10 Days Standard Umrah Package",
      price: "BDT 266,000",
      duration: "10 Days",
      description: "Our most popular package with balanced stay in both holy cities.",
      features: [
        "4★ Hotel in Makkah (5 nights)",
        "4★ Hotel in Madinah (3 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Guided Ziyarah Tours",
        "Daily Breakfast & Dinner",
      ],
      image: "https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg",
    },
    {
      id: "15-day-premium",
      title: "15 Days Premium Umrah Package",
      price: "BDT 392,000",
      duration: "15 Days",
      description: "Luxury experience with extended stay for complete spiritual immersion.",
      features: [
        "5★ Hotel in Makkah (8 nights)",
        "5★ Hotel in Madinah (5 nights)",
        "Return Flights from Dubai or Qatar",
        "Premium Visa Processing",
        "Private Airport Transfers",
        "Extensive Guided Ziyarah Tours",
        "All Meals Included",
        "Personal Guide",
      ],
      image: "https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00",
    },
    {
      id: "hajj-package",
      title: "Complete Hajj Package 2025",
      price: "BDT 840,000",
      duration: "21 Days",
      description: "Comprehensive Hajj package with all arrangements taken care of.",
      features: [
        "5★ Hotel in Makkah (10 nights)",
        "5★ Hotel in Madinah (5 nights)",
        "Premium Tents in Mina & Arafat",
        "Return Flights from Dubai or Qatar",
        "Hajj Visa Processing",
        "All Transportation",
        "Guided Rituals",
        "All Meals Included",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      id: "family-umrah",
      title: "Family Umrah Package",
      price: "BDT 238,000 per person",
      duration: "10 Days",
      description: "Special package designed for families with children.",
      features: [
        "4★ Family Rooms in Makkah (5 nights)",
        "4★ Family Rooms in Madinah (3 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Family-friendly Ziyarah Tours",
        "All Meals Included",
        "Children's Activities",
      ],
      image: "https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg",
    },
    {
      id: "ramadan-umrah",
      title: "Ramadan Umrah Special",
      price: "BDT 322,000",
      duration: "15 Days",
      description: "Experience the blessed month of Ramadan in the holy cities.",
      features: [
        "4★ Hotel in Makkah (10 nights)",
        "4★ Hotel in Madinah (3 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Iftar & Suhoor Meals",
        "Special Ramadan Programs",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
  ]

  return (
    <main className="min-h-screen">
      <AnimatedHeader />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Available Umrah Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TRUSTED-ALLY offers comprehensive Umrah and Hajj packages from Bangladesh, designed to provide a peaceful
              and spiritually fulfilling journey to the holy cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose TRUSTED-ALLY?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional service and support throughout your spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
              <p className="text-gray-600">
                With years of experience, we ensure a hassle-free and spiritually enriching journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our experienced guides provide support throughout your spiritual journey.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Packages</h3>
              <p className="text-gray-600">We offer competitive pricing without compromising on quality and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


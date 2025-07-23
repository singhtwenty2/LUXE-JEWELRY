import Image from "next/image"
import { Award, Users, Globe, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Exceptional Craftsmanship",
      description:
        "Every piece is meticulously handcrafted by master artisans with decades of experience, ensuring unparalleled quality and attention to detail.",
    },
    {
      icon: Heart,
      title: "Timeless Elegance",
      description:
        "We create jewelry that transcends trends, focusing on classic designs that remain beautiful and relevant for generations.",
    },
    {
      icon: Users,
      title: "Personal Service",
      description:
        "Our dedicated team provides personalized consultation and service, helping you find the perfect piece for every special moment.",
    },
    {
      icon: Globe,
      title: "Ethical Sourcing",
      description:
        "We are committed to responsible sourcing of materials, ensuring our jewelry is created with respect for people and the environment.",
    },
  ]

  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description: "Luxe Jewelry was founded with a vision to create exceptional handcrafted jewelry.",
    },
    {
      year: "1995",
      title: "Heritage Collection",
      description: "Launched our signature Heritage Collection, celebrating traditional Indian craftsmanship.",
    },
    {
      year: "2005",
      title: "International Recognition",
      description: "Received international acclaim for our innovative designs and superior quality.",
    },
    {
      year: "2015",
      title: "Contemporary Line",
      description: "Introduced our Contemporary Collection, blending modern aesthetics with traditional techniques.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Embraced digital technology to enhance customer experience and accessibility.",
    },
    {
      year: "2025",
      title: "Sustainable Future",
      description: "Leading the industry in sustainable practices and ethical jewelry creation.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image src="/images/about-heritage.png" alt="Luxe Jewelry Heritage" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight">Our Story</h1>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              Four decades of passion, craftsmanship, and dedication to creating jewelry that celebrates life's most
              precious moments
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">
              Crafting Dreams Since 1985
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Luxe Jewelry began as a small family workshop in the heart of Mumbai, driven by a passion for creating
                exceptional handcrafted jewelry. What started as a dream to preserve traditional Indian jewelry-making
                techniques has evolved into a renowned brand that seamlessly blends heritage craftsmanship with
                contemporary design.
              </p>
              <p>
                Our founder, inspired by the rich legacy of Indian jewelry artisans, established Luxe Jewelry with a
                simple yet profound vision: to create pieces that not only adorn but also tell stories, celebrate
                milestones, and become treasured heirlooms passed down through generations.
              </p>
              <p>
                Today, we continue to honor this legacy while embracing innovation, ensuring that each piece of Luxe
                Jewelry represents the perfect harmony between timeless tradition and modern elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              These core principles guide everything we do, from the selection of materials to the final polish of each
              piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">Master Craftsmanship</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Our artisans are the heart of Luxe Jewelry. Each craftsperson brings decades of experience and an
                  unwavering commitment to excellence, ensuring that every piece meets our exacting standards.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">Traditional Techniques</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    We preserve ancient jewelry-making techniques, including hand-engraving, traditional stone setting,
                    and time-honored polishing methods.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">Modern Innovation</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    While honoring tradition, we embrace modern technology and design principles to create pieces that
                    resonate with contemporary sensibilities.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">Quality Assurance</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Every piece undergoes rigorous quality checks at multiple stages, ensuring that only the finest
                    jewelry bears the Luxe name.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/images/about-craftsman.png" alt="Master Craftsman at work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">Our Journey</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Four decades of growth, innovation, and unwavering commitment to excellence
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-medium text-gray-900 tracking-wide">{milestone.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/about-workshop.png" alt="Luxe Jewelry Workshop" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">Our Workshop</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Step into our workshop, where tradition meets innovation. Here, skilled artisans work with
                  time-honored tools alongside modern equipment, creating jewelry that embodies both heritage and
                  contemporary appeal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">40+</div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">25+</div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">Master Artisans</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">50,000+</div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
                  <p className="text-sm text-gray-600 font-light tracking-wide">Handcrafted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">Our Commitment</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              At Luxe Jewelry, we believe that jewelry is more than mere adornment—it's a celebration of life's most
              precious moments. Whether it's an engagement ring that symbolizes eternal love, a necklace that marks a
              milestone, or earrings that add elegance to everyday life, each piece we create is designed to become a
              treasured part of your story.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We are committed to maintaining the highest standards of craftsmanship, ethical sourcing, and customer
              service. Our promise is simple: to create jewelry that not only meets but exceeds your expectations,
              pieces that you'll cherish for a lifetime and pass down to future generations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaPencilAlt, FaCog, FaTruck } from "react-icons/fa"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.21, 1.11, 0.81, 0.99], // spring-like easing
      }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-[2rem]">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.3,
                ease: "easeOut",
              }}
              className="mt-1 p-4 text-[3rem] font-bold flex items-center justify-center rounded-full bg-amber-100 text-amber-400"
            >
              {icon}
            </motion.div>
            <div>
              <motion.h3
                className="text-[3rem] font-semibold mb-2 text-wrenixBlue"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.4,
                }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.5,
                }}
              >
                {description}
              </motion.p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const services = [
  {
    icon: <FaPencilAlt className="w-6 h-6 text-amber-400" />,
    title: "We Design",
    description: "Stunning, Modern web solutions that capture attention and convert visitors to clients.",
  },
  {
    icon: <FaCog className="w-6 h-6 text-amber-400" />,
    title: "We Develop",
    description: "Secure, High-Performance web solutions built for speed and reliability.",
  },
  {
    icon: <FaTruck className="w-6 h-6 text-amber-400" />,
    title: "We Deliver",
    description: "On time, Every time, Ensuring your project launches smoothly and flawlessly.",
  },
]

export default function WrenixIntro() {
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    }),
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div className="max-w-xl">
            <motion.div
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-wrap items-baseline gap-x-4"
            >
              <div className="flex items-baseline gap-x-4 text-[9rem]">
                <motion.span custom={0} variants={letterAnimation} className="text-wrenixGray">
                  We
                </motion.span>
                <motion.span custom={1} variants={letterAnimation} className="text-wrenixGray">
                  are
                </motion.span>
              </div>
              <div className="flex items-baseline text-[10rem]">
                <motion.span custom={2} variants={letterAnimation} className="text-wrenixBlue">
                  Wreni
                </motion.span>
                <motion.span custom={3} variants={letterAnimation} className="text-wrenixYellow">
                  x
                </motion.span>
                <motion.span custom={4} variants={letterAnimation} className="text-wrenixYellow">
                  ,
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="h-1 w-24 bg-wrenixBlue mt-6"
              initial={{ width: 0 }}
              animate={{ width: 450 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.21, 1.11, 0.81, 0.99],
              }}
            />
          </div>

          {/* Right Column - Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


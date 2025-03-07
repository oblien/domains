"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DomainSearch() {
    const [domain, setDomain] = useState("")
    const [extension, setExtension] = useState(".com")
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            // video.playbackRate = 0.75 // Slow down the video slightly for better visual effect

            const handleLoadedData = () => {
                setIsVideoLoaded(true)
            }

            video.addEventListener("loadeddata", handleLoadedData)

            return () => {
                video.removeEventListener("loadeddata", handleLoadedData)
            }
        }
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, this would search for domain availability
        console.log(`Searching for ${domain}${extension}`)
    }

    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay to ensure text readability */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
                >
                    <source src="/domain-video-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Fallback image while video loads */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-black transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-10 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
                            Find Your Perfect Domain
                        </h1>
                        <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                            Register domains at the lowest possible cost - directly from DNS providers with transparent pricing.
                        </p>
                    </div>

                    {/* Glassy Search Bar */}
                    <div className="w-full max-w-3xl mx-auto backdrop-blur-md bg-white/10 dark:bg-black/20 p-6 rounded-xl border border-white/20 shadow-lg">
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <Input
                                        type="text"
                                        placeholder="Find your perfect domain name"
                                        className="w-full h-14 pl-4 pr-4 text-lg bg-white/80 dark:bg-black/50 border-white/30 dark:border-gray-700/50 backdrop-blur-sm"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        required
                                    />
                                </div>
                                <Select value={extension} onValueChange={setExtension}>
                                    <SelectTrigger className="w-full md:w-32 h-14 bg-white/80 dark:bg-black/50 border-white/30 dark:border-gray-700/50 backdrop-blur-sm">
                                        <SelectValue placeholder=".com" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
                                        <SelectItem value=".com">.com</SelectItem>
                                        <SelectItem value=".org">.org</SelectItem>
                                        <SelectItem value=".net">.net</SelectItem>
                                        <SelectItem value=".io">.io</SelectItem>
                                        <SelectItem value=".dev">.dev</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button type="submit" className="h-14 px-8 bg-primary/90 hover:bg-primary backdrop-blur-sm">
                                    <Search className="mr-2 h-4 w-4" />
                                    Search
                                </Button>
                            </div>
                        </form>

                        {/* Domain Pricing */}
                        <div className="flex flex-wrap justify-center gap-6 mt-6 text-white">
                            <div className="flex items-center">
                                <span className="font-medium">.com</span>
                                <span className="mx-2">$8.99</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium">.org</span>
                                <span className="mx-2">$9.99</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium">.net</span>
                                <span className="mx-2">$10.99</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium">.io</span>
                                <span className="mx-2">$29.99</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium">.dev</span>
                                <span className="mx-2">$14.99</span>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button
                            size="lg"
                            className="px-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20"
                        >
                            Learn More
                        </Button>
                        <Button size="lg" className="px-8 bg-primary/90 hover:bg-primary text-white backdrop-blur-sm">
                            View Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
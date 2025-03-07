import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Lock, BarChart3, Settings, CreditCard } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { DomainSearch } from "@/components/domain-search" 

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="fixed top-0 z-50 w-full border-b bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/30">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.jpg" alt="Oblien Domains Logo" width={40} height={40} className="rounded-md" />
                        <span className="text-xl font-bold">Oblien Domains</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#features" className="text-sm font-medium hover:text-primary">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
                            How It Works
                        </Link>
                        <Link href="#pricing" className="text-sm font-medium hover:text-primary">
                            Pricing
                        </Link>
                        <Link href="#faq" className="text-sm font-medium hover:text-primary">
                            FAQ
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link href="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                {/* Domain Search Hero Section */}
                <DomainSearch />

                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Oblien Domains?</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our platform integrates with OpenSRS and other registrars to offer transparent pricing and advanced
                                    domain management capabilities.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <Globe className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Direct Registration</CardTitle>
                                    <CardDescription>Register domains directly from DNS providers with no markup</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CreditCard className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Lowest Cost</CardTitle>
                                    <CardDescription>Get the cheapest domain registration and renewal prices available</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Settings className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Easy Management</CardTitle>
                                    <CardDescription>Manage all your domains in one place with our intuitive interface</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Lock className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Secure DNS</CardTitle>
                                    <CardDescription>Configure secure DNS settings with DNSSEC support</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Settings className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Advanced Settings</CardTitle>
                                    <CardDescription>Access advanced domain settings and configurations</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <BarChart3 className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Domain Analytics</CardTitle>
                                    <CardDescription>Monitor your domain performance with detailed analytics</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Rest of the sections remain the same */}
                <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Oblien Domains makes domain registration and management simple and transparent.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    1
                                </div>
                                <h3 className="text-xl font-bold">Search for a Domain</h3>
                                <p className="text-muted-foreground">Find the perfect domain name for your website or project</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    2
                                </div>
                                <h3 className="text-xl font-bold">Register at Cost</h3>
                                <p className="text-muted-foreground">
                                    Register your domain at the lowest possible price with no markup
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    3
                                </div>
                                <h3 className="text-xl font-bold">Manage with Ease</h3>
                                <p className="text-muted-foreground">
                                    Manage DNS, renewals, and settings through our intuitive dashboard
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Transparent Pricing</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    We offer domains at the lowest possible cost - directly from DNS providers with no markup.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>.com Domains</CardTitle>
                                    <CardDescription>The most popular domain extension</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="text-4xl font-bold">$8.99</div>
                                    <p className="text-sm text-muted-foreground">per year</p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>Free DNS Management</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>Free Email Forwarding</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>DNSSEC Support</span>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Register Now</Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>.org Domains</CardTitle>
                                    <CardDescription>Perfect for organizations</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="text-4xl font-bold">$9.99</div>
                                    <p className="text-sm text-muted-foreground">per year</p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>Free DNS Management</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>Free Email Forwarding</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>DNSSEC Support</span>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Register Now</Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>.io Domains</CardTitle>
                                    <CardDescription>Popular for tech companies</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="text-4xl font-bold">$29.99</div>
                                    <p className="text-sm text-muted-foreground">per year</p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>Free DNS Management</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>Free Email Forwarding</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                            <span>DNSSEC Support</span>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Register Now</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to get started?</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of users who trust Oblien Domains for their domain registration and management needs.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/register">
                                    <Button size="lg" className="px-8">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="px-8">
                                        Contact Sales
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Find answers to common questions about Oblien Domains.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>How does Oblien Domains offer such low prices?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        We integrate directly with DNS providers and registrars like OpenSRS to offer domains at cost with
                                        minimal markup. Our open-source approach and efficient infrastructure allow us to pass the savings
                                        to you.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Can I transfer my existing domains to Oblien?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Yes, you can easily transfer your existing domains to Oblien Domains. Our platform supports domain
                                        transfers from all major registrars with a simple step-by-step process.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>What DNS management features do you offer?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Oblien Domains provides comprehensive DNS management features including A, AAAA, CNAME, MX, TXT
                                        records, DNSSEC support, and advanced configurations for optimal performance and security.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Is Oblien Domains really open source?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Yes, Oblien Domains is fully open source. Our codebase is available on GitHub under the MIT license,
                                        allowing for transparency, community contributions, and customization.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-background">
                <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.jpg" alt="Oblien Domains Logo" width={30} height={30} className="rounded-md" />
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Oblien Domains. All rights reserved.
                        </p>
                    </div>
                    <nav className="flex gap-4 md:gap-6">
                        <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                            Privacy
                        </Link>
                        <Link href="https://github.com/oblien/domains" className="text-sm text-muted-foreground hover:underline">
                            GitHub
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                            Contact
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRight,
  GraduationCap,
  Settings,
  User,
  Code,
  BookOpen,
  Users,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../supabase/auth";
import RegistrationPage from "../registration/RegistrationPage";

export default function LandingPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#f5f5f7]/30">
        <div className="max-w-[980px] mx-auto flex h-12 items-center justify-between px-4">
          <div className="flex items-center">
            <Link to="/" className="font-medium text-xl">
              Tech Workshop Hub
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    className="text-sm font-light hover:text-gray-500"
                  >
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 hover:cursor-pointer">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                        alt={user.email || ""}
                      />
                      <AvatarFallback>
                        {user.email?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="rounded-xl border-none shadow-lg"
                  >
                    <DropdownMenuLabel className="text-xs text-gray-500">
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onSelect={() => signOut()}
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="text-sm font-light hover:text-gray-500"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm px-4">
                    Register Now
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="pt-12">
        {/* Registration Form Section */}
        <section className="py-16">
          <RegistrationPage />
        </section>

        {/* Workshop highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Featured Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-blue-600 flex items-center justify-center">
                  <Code className="h-20 w-20 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      Beginner Friendly
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">
                      Spots Available
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Web Development Fundamentals
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the basics of HTML, CSS, and JavaScript to build
                    responsive websites from scratch.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">June 15, 2024</span>
                    <Link to="/signup">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-purple-600 flex items-center justify-center">
                  <BookOpen className="h-20 w-20 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-purple-600">
                      Intermediate
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full">
                      Limited Spots
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Data Science with Python
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore data analysis, visualization, and machine learning
                    fundamentals using Python.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">June 22, 2024</span>
                    <Link to="/signup">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-purple-600 border-purple-600 hover:bg-purple-50"
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-green-600 flex items-center justify-center">
                  <Users className="h-20 w-20 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-green-600">
                      Advanced
                    </span>
                    <span className="text-xs bg-red-100 text-red-800 py-1 px-2 rounded-full">
                      Almost Full
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Cloud Architecture Workshop
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Design and implement scalable cloud solutions using AWS,
                    Azure, and Google Cloud.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">June 29, 2024</span>
                    <Link to="/signup">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50"
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why attend section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Why Attend Our Workshops?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">
                    Industry-Led Learning
                  </h4>
                  <p className="text-gray-600">
                    All workshops are taught by professionals currently working
                    in the tech industry, providing real-world insights and
                    practical knowledge.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">
                    Networking Opportunities
                  </h4>
                  <p className="text-gray-600">
                    Connect with like-minded students and industry professionals
                    to build your professional network and discover new
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Code className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">
                    Hands-On Experience
                  </h4>
                  <p className="text-gray-600">
                    Gain practical experience through interactive exercises and
                    projects that you can add to your portfolio.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">
                    Tailored for Students
                  </h4>
                  <p className="text-gray-600">
                    Workshops are designed specifically for university students,
                    with content that complements academic learning and prepares
                    you for industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] py-12 text-xs text-gray-500">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="border-b border-gray-300 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">
                Tech Workshop Hub
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Our Instructors
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Upcoming Workshops
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Past Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Workshop Materials
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <p>Copyright © 2024 Tech Workshop Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

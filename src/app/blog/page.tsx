import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 CRM Best Practices for Growing Businesses",
    excerpt: "Discover the essential strategies and practices that successful businesses use to manage customer relationships effectively.",
    author: "Sarah Johnson",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "CRM",
    image: "/blog/crm-best-practices.jpg",
    featured: true
  },
  {
    id: 2,
    title: "How to Automate Your Sales Pipeline",
    excerpt: "Learn how to implement automation tools that can save time and increase conversion rates in your sales process.",
    author: "Mike Davis",
    date: "2024-02-12",
    readTime: "6 min read",
    category: "Automation",
    image: "/blog/sales-automation.jpg",
    featured: false
  },
  {
    id: 3,
    title: "The Future of Customer Relationship Management",
    excerpt: "Explore emerging trends and technologies that are shaping the future of CRM and customer engagement.",
    author: "Emily Brown",
    date: "2024-02-10",
    readTime: "10 min read",
    category: "Technology",
    image: "/blog/future-crm.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Data-Driven Decision Making for Small Businesses",
    excerpt: "Understanding how to leverage analytics and data to make informed business decisions that drive growth.",
    author: "John Smith",
    date: "2024-02-08",
    readTime: "7 min read",
    category: "Analytics",
    image: "/blog/data-driven.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Building a Customer-Centric Culture",
    excerpt: "Tips and strategies for creating a company culture that prioritizes customer satisfaction and loyalty.",
    author: "Lisa Anderson",
    date: "2024-02-05",
    readTime: "5 min read",
    category: "Culture",
    image: "/blog/customer-culture.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Integration Guide: Connecting Your CRM with Other Tools",
    excerpt: "Step-by-step guide to integrating your CRM system with popular business tools and platforms.",
    author: "Tom Wilson",
    date: "2024-02-03",
    readTime: "12 min read",
    category: "Integration",
    image: "/blog/integration-guide.jpg",
    featured: false
  }
];

const categories = ["All", "CRM", "Automation", "Technology", "Analytics", "Culture", "Integration"];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              KiTS Hub Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Insights, tips, and best practices to help you grow your business 
              and make the most of our CRM solutions.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
            </div>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📊</div>
                      <div className="text-xl font-medium">Featured Content</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <Button>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights and tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-blue-300 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

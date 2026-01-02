import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, ExternalLink, ArrowRight } from "lucide-react";

const apps = [
  {
    id: 1,
    name: "CRM Pro",
    description: "Advanced customer relationship management with AI-powered insights and automation.",
    category: "CRM",
    rating: 4.8,
    downloads: "10k+",
    price: "Free",
    features: ["Lead Management", "Contact Tracking", "Sales Pipeline", "Analytics"],
    icon: "📊"
  },
  {
    id: 2,
    name: "Invoice Builder",
    description: "Create professional invoices and manage billing with automated payment reminders.",
    category: "Finance",
    rating: 4.6,
    downloads: "8k+",
    price: "$9/mo",
    features: ["Invoice Templates", "Payment Tracking", "Tax Management", "Reports"],
    icon: "🧾"
  },
  {
    id: 3,
    name: "Project Hub",
    description: "Collaborative project management with task tracking and team communication.",
    category: "Productivity",
    rating: 4.7,
    downloads: "15k+",
    price: "Free",
    features: ["Task Management", "Team Chat", "File Sharing", "Time Tracking"],
    icon: "📋"
  },
  {
    id: 4,
    name: "Email Marketing",
    description: "Design and send email campaigns with advanced analytics and automation.",
    category: "Marketing",
    rating: 4.5,
    downloads: "6k+",
    price: "$19/mo",
    features: ["Email Templates", "Campaign Analytics", "Automation", "A/B Testing"],
    icon: "📧"
  },
  {
    id: 5,
    name: "Inventory Manager",
    description: "Track inventory levels, manage stock, and optimize supply chain operations.",
    category: "Operations",
    rating: 4.9,
    downloads: "5k+",
    price: "$29/mo",
    features: ["Stock Tracking", "Order Management", "Supplier Management", "Reports"],
    icon: "📦"
  },
  {
    id: 6,
    name: "Help Desk",
    description: "Customer support ticketing system with knowledge base and live chat.",
    category: "Support",
    rating: 4.7,
    downloads: "7k+",
    price: "$15/mo",
    features: ["Ticket Management", "Knowledge Base", "Live Chat", "SLA Tracking"],
    icon: "🎫"
  }
];

const categories = ["All", "CRM", "Finance", "Productivity", "Marketing", "Operations", "Support"];

export default function AppsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Apps Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover powerful applications designed to enhance your business operations 
              and boost productivity across all departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Browse All Apps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Submit Your App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Available Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100k+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.7</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Apps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <Card key={app.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {app.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {app.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-blue-600">{app.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {app.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{app.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{app.downloads}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {app.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      Install App
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Build Your Own App
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Join our developer ecosystem and create powerful applications for 
                thousands of businesses using our platform.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Access to comprehensive APIs and SDKs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Built-in authentication and user management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Monetization options and revenue sharing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Marketing support and app promotion</span>
                </li>
              </ul>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Developer Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">70%</span>
                  </div>
                  <div>
                    <div className="font-medium">Revenue Share</div>
                    <div className="text-sm text-gray-600">Keep 70% of all revenue</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">24/7</span>
                  </div>
                  <div>
                    <div className="font-medium">Developer Support</div>
                    <div className="text-sm text-gray-600">Round-the-clock technical assistance</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">∞</span>
                  </div>
                  <div>
                    <div className="font-medium">Scalable Infrastructure</div>
                    <div className="text-sm text-gray-600">Handle unlimited users and data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

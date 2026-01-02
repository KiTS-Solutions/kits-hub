import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">
            Last updated: February 15, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Welcome to KiTS Hub. These Terms of Service ("Terms") govern your access 
                to and use of our services, including our website, software, and applications 
                (collectively, the "Service").
              </p>
              <p className="text-gray-600">
                By accessing or using our Service, you agree to be bound by these Terms. 
                If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                KiTS Hub provides customer relationship management (CRM) software, business 
                management tools, and related services. Our Service includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Lead and contact management</li>
                <li>Sales pipeline tracking</li>
                <li>Analytics and reporting</li>
                <li>Integration with third-party services</li>
                <li>Customer support tools</li>
                <li>Custom application development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Creation</h3>
                  <p className="text-gray-600">
                    To use certain features of our Service, you must create an account. You 
                    agree to provide accurate, current, and complete information during registration.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Security</h3>
                  <p className="text-gray-600">
                    You are responsible for safeguarding your account credentials and for all 
                    activities that occur under your account. You agree to notify us immediately 
                    of any unauthorized use of your account.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Termination</h3>
                  <p className="text-gray-600">
                    We reserve the right to suspend or terminate your account at any time for 
                    violation of these Terms or for any other reason at our sole discretion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                You agree not to use the Service for any of the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Transmitting malicious code or viruses</li>
                <li>Spamming or sending unsolicited communications</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with or disrupting the Service</li>
                <li>Using the Service for fraudulent or deceptive purposes</li>
                <li>Harassing, abusing, or harming others</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Rights</h3>
                  <p className="text-gray-600">
                    The Service and its original content, features, and functionality are and 
                    will remain the exclusive property of KiTS Hub and its licensors.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">User Content</h3>
                  <p className="text-gray-600">
                    You retain ownership of any content you submit to our Service. By submitting 
                    content, you grant us a worldwide, non-exclusive, royalty-free license to 
                    use, reproduce, and display such content in connection with the Service.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trademarks</h3>
                  <p className="text-gray-600">
                    KiTS Hub and related graphics, logos, and service names are trademarks of 
                    KiTS Hub and may not be used without our prior written consent.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy, which also 
                governs your use of the Service, to understand our practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Paid Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Subscription Plans</h3>
                  <p className="text-gray-600">
                    We offer various subscription plans with different features and pricing. 
                    Subscription fees are charged in advance on a recurring basis.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
                  <p className="text-gray-600">
                    You agree to provide accurate payment information and authorize us to charge 
                    the selected payment method for your subscription fees.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Refunds</h3>
                  <p className="text-gray-600">
                    Refunds are handled on a case-by-case basis. Please contact our support 
                    team for refund requests.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Term and Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                These Terms shall remain in effect as long as you use the Service. We may, 
                at our sole discretion, terminate or suspend your account and bar access to 
                the Service immediately, without prior notice or liability, under our sole 
                discretion, for any reason whatsoever.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the Service will cease immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no 
                representations or warranties of any kind, express or implied, as to the 
                operation of the Service or the information, content, materials, or products 
                included on this Service.
              </p>
              <p className="text-gray-600">
                We do not warrant that the Service will be uninterrupted or error-free.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                In no event shall KiTS Hub, our directors, employees, partners, agents, 
                suppliers, or affiliates be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of 
                profits, data, use, goodwill, or other intangible losses, resulting from 
                your use of the Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These Terms shall be interpreted and governed by the laws of the State of 
                New York, without regard to its conflict of law provisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. If we make material 
                changes, we will notify you by email or by posting a notice on our website 
                prior to the change taking effect.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  Email: kits.tech.co@gmail.com<br />
                  Address: 123 Business Ave, New York, NY 10001
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
